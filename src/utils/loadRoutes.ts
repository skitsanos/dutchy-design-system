import { existsSync, mkdirSync, readdirSync } from 'fs';
import { basename, dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import * as React from 'react';
import { renderToReadableStream } from 'react-dom/server';

export type RouteHandler = (req: Request) => Promise<Response> | Response;
export type RouteHandlers = Record<string, RouteHandler>;
export type Routes = Record<string, RouteHandlers>;
export type RouteParams = Record<string, string>;

export interface RouteMatch {
    routePath: string;
    handlers: RouteHandlers;
    params: RouteParams;
}

export interface ResolvedRoute {
    handler: RouteHandler;
    params: RouteParams;
    routePath: string;
    request: Request;
}

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];

/**
 * Check if a module exports a React component
 */
const isReactComponent = (module: any): boolean => {
    if (!module?.default) return false;

    if (typeof module.default === 'function') {
        // Check for class components
        if (module.default.prototype?.isReactComponent) return true;

        // Check for function components by examining the source
        const fnStr = module.default.toString();
        return (
            fnStr.includes('React.createElement') ||
            fnStr.includes('jsx') ||
            fnStr.includes('_jsx')
        );
    }

    return React.isValidElement(module.default);
};

/**
 * Create a handler for a React component
 */
export const createReactHandler =
    (Component: any): RouteHandler =>
    async (req: Request) => {
        try {
            const stream = await renderToReadableStream(
                React.createElement(Component, { request: req })
            );

            return new Response(stream, {
                headers: { 'Content-Type': 'text/html' },
            });
        } catch (error: any) {
            console.error('Error rendering React component:', error);
            return new Response(`Error: ${error.message}`, { status: 500 });
        }
    };

const isRouteHandler = (value: unknown): value is RouteHandler => typeof value === 'function';

const normalizePathname = (pathname: string): string =>
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

const segmentMatches = (
    routeSegment: string,
    pathSegment: string,
    params: RouteParams
): boolean => {
    if (routeSegment.startsWith(':')) {
        params[routeSegment.slice(1)] = decodeURIComponent(pathSegment);
        return true;
    }

    return routeSegment === pathSegment;
};

const matchPath = (routePath: string, pathname: string): RouteParams | null => {
    const normalizedRoutePath = normalizePathname(routePath);
    const normalizedPathname = normalizePathname(pathname);

    const routeSegments = normalizedRoutePath.split('/').filter(Boolean);
    const pathSegments = normalizedPathname.split('/').filter(Boolean);

    if (routeSegments.length !== pathSegments.length) return null;

    const params: RouteParams = {};

    for (let i = 0; i < routeSegments.length; i += 1) {
        if (!segmentMatches(routeSegments[i], pathSegments[i], params)) {
            return null;
        }
    }

    return params;
};

const addRouteParamsToRequest = (req: Request, params: RouteParams): Request => {
    if (Object.keys(params).length === 0) return req;

    const url = new URL(req.url);

    for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(`_param_${key}`, value);
    }

    return new Request(url.toString(), req);
};

export const matchRoute = (routes: Routes, pathname: string): RouteMatch | null => {
    const normalizedPathname = normalizePathname(pathname);

    // Exact match first for best performance.
    const exact = routes[normalizedPathname];
    if (exact) {
        return { routePath: normalizedPathname, handlers: exact, params: {} };
    }

    for (const [routePath, handlers] of Object.entries(routes)) {
        if (!routePath.includes(':')) continue;
        const params = matchPath(routePath, normalizedPathname);
        if (params) {
            return { routePath, handlers, params };
        }
    }

    return null;
};

export const resolveRoute = (routes: Routes, req: Request): ResolvedRoute | null => {
    const method = req.method.toUpperCase();
    const { pathname } = new URL(req.url);

    const match = matchRoute(routes, pathname);
    if (!match) return null;

    const handler = match.handlers[method];
    if (!handler) return null;

    return {
        handler,
        params: match.params,
        routePath: match.routePath,
        request: addRouteParamsToRequest(req, match.params),
    };
};

/**
 * Process a single file and return its handler
 */
const processFile = async (
    filePath: string,
    fileName: string,
    routePath: string
): Promise<[string, RouteHandler] | null> => {
    const method = basename(fileName).replace(/\..+/i, '').toUpperCase();

    try {
        // Use file URL for robust cross-platform module imports.
        const moduleUrl = pathToFileURL(filePath).href;
        const module = await import(moduleUrl);
        const defaultExport = module.default;
        const reactComponent = isReactComponent(module);

        // index.ts/tsx files default to GET
        if (method === 'INDEX') {
            if (!reactComponent && !isRouteHandler(defaultExport)) {
                console.warn(
                    `Skipped ${fileName} for GET ${routePath}: default export must be a handler function or React component`
                );
                return null;
            }

            const handler = reactComponent
                ? createReactHandler(defaultExport)
                : defaultExport;

            if (process.env.NODE_ENV !== 'production') {
                console.log(
                    `Loaded ${reactComponent ? 'React component' : 'handler'} for GET ${routePath}`
                );
            }

            return ['GET', handler];
        }

        // Explicit HTTP method files (get.ts, post.ts, put.ts, etc.)
        if (HTTP_METHODS.includes(method as HttpMethod)) {
            if (!reactComponent && !isRouteHandler(defaultExport)) {
                console.warn(
                    `Skipped ${fileName} for ${method} ${routePath}: default export must be a handler function or React component`
                );
                return null;
            }

            const handler = reactComponent
                ? createReactHandler(defaultExport)
                : defaultExport;

            if (process.env.NODE_ENV !== 'production') {
                console.log(`Loaded ${method} ${routePath}`);
            }

            return [method, handler];
        }

        console.warn(`Invalid HTTP method in file: ${fileName}`);
        return null;
    } catch (error) {
        console.error(`Error loading handler from ${filePath}:`, error);
        return null;
    }
};

/**
 * Process files in a directory and return route handlers
 */
const processDirectory = async (
    dirPath: string,
    files: { name: string }[]
): Promise<RouteHandlers> => {
    const methodHandlers: RouteHandlers = {};

    for (const file of files) {
        const filePath = join(dirPath, file.name);
        const result = await processFile(filePath, file.name, dirPath);

        if (result) {
            const [method, handler] = result;
            methodHandlers[method] = handler;
        }
    }

    return methodHandlers;
};

/**
 * Recursively scan directories to build route paths
 */
const scanDirectoryForRoutes = async (rootDir: string): Promise<Routes> => {
    const routes: Routes = {};

    // Get all entries in one pass
    const allEntries = readdirSync(rootDir, {
        withFileTypes: true,
        recursive: true,
    });

    // Group entries by directory
    const dirMap = new Map<string, typeof allEntries>();

    for (const entry of allEntries) {
        const dirPath = entry.isDirectory()
            ? join(entry.parentPath, entry.name)
            : entry.parentPath;

        if (!dirMap.has(dirPath)) {
            dirMap.set(dirPath, []);
        }

        if (entry.isFile() && /\.(js|ts|jsx|tsx)$/.test(entry.name)) {
            dirMap.get(dirPath)!.push(entry);
        }
    }

    // Process each directory with files
    for (const [dirPath, files] of dirMap) {
        if (files.length === 0) continue;

        // Build route path from directory structure
        // $paramName folders become :paramName in the route
        const relativePath = dirPath.replace(rootDir, '');
        const segments = relativePath.split('/').filter(Boolean);
        const routePath =
            '/' +
            segments
                .map((segment) =>
                    segment.startsWith('$') ? `:${segment.substring(1)}` : segment
                )
                .join('/');

        // Process files in this directory
        const handlers = await processDirectory(dirPath, files);

        if (Object.keys(handlers).length > 0) {
            routes[routePath === '/' ? '/' : routePath] = handlers;
        }
    }

    return routes;
};

/**
 * Dynamically load route handlers from the specified directory
 *
 * @param routesDir - Directory name relative to src/ (e.g., 'routes')
 * @returns Promise<Routes> - Map of route paths to method handlers
 *
 * @example
 * // File structure:
 * // src/routes/
 * // ├── index.tsx          → GET /
 * // ├── about/
 * // │   └── index.tsx      → GET /about
 * // ├── api/
 * // │   └── users/
 * // │       ├── index.ts   → GET /api/users
 * // │       ├── get.ts     → GET /api/users (explicit)
 * // │       └── post.ts    → POST /api/users
 * // └── products/
 * //     └── $id/
 * //         └── index.tsx  → GET /products/:id
 *
 * const routes = await loadRoutes('routes');
 */
export const loadRoutes = async (routesDir: string): Promise<Routes> => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const routesPath = join(currentDir, '..', routesDir);

    if (process.env.NODE_ENV !== 'production') {
        console.log(`Loading routes from ${routesPath}`);
    }

    // Create routes directory if it doesn't exist
    if (!existsSync(routesPath)) {
        mkdirSync(routesPath, { recursive: true });
    }

    // Scan directory recursively for routes
    const routes = await scanDirectoryForRoutes(routesPath);

    // Add default route if no routes were found
    if (Object.keys(routes).length === 0) {
        routes['/'] = {
            GET: async () =>
                new Response('It works', {
                    headers: { 'Content-Type': 'text/plain' },
                }),
        };

        if (process.env.NODE_ENV !== 'production') {
            console.log('No routes found, added default route');
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        console.log(`Total routes loaded: ${Object.keys(routes).length}`);
    }

    return routes;
};

export default loadRoutes;
