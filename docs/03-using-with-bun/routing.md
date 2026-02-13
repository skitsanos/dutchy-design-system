# Routing in Bun

Bun offers three approaches to routing, each suited for different use cases.

## Routing Approaches

| Approach | Best For | Dynamic Params | Requires |
|----------|----------|----------------|----------|
| [Built-in Routes](#1-built-in-routes) | Simple apps, quick prototypes | `req.params` | Bun 1.2.3+ |
| [FileSystemRouter](#2-filesystem-router) | Next.js-style routing | `match.params` | Any Bun |
| [Custom loadRoutes](#3-custom-loadroutes) | Full control, method-per-file | `_param_*` search params | Any Bun |

---

## 1. Built-in Routes

**Requires Bun 1.2.3+**

The simplest approach using Bun's native `routes` option:

```typescript
import { serve } from 'bun';
import HomePage from './routes/index.tsx';
import { createReactHandler } from '@/utils/loadRoutes';

const server = serve({
  port: 3000,

  routes: {
    // Static response
    '/api/health': new Response('OK'),

    // React component (SSR)
    '/': createReactHandler(HomePage),

    // Dynamic route with params
    '/users/:id': (req) => {
      return Response.json({ userId: req.params.id });
    },

    // Per-method handlers
    '/api/posts': {
      GET: () => Response.json({ posts: [] }),
      POST: async (req) => {
        const body = await req.json();
        return Response.json({ created: true, ...body }, { status: 201 });
      },
    },

    // Wildcard fallback for /api/*
    '/api/*': Response.json({ error: 'Not found' }, { status: 404 }),

    // Redirect
    '/old-page': Response.redirect('/new-page'),

    // Serve static file
    '/favicon.ico': Bun.file('./public/favicon.ico'),
  },

  // Fallback for unmatched routes
  fetch(req) {
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Server running at ${server.url}`);
```

### Route Patterns

| Pattern | Example | Matches |
|---------|---------|---------|
| Static | `/about` | `/about` only |
| Dynamic | `/users/:id` | `/users/123`, `/users/abc` |
| Wildcard | `/api/*` | `/api/anything/here` |

### Accessing Parameters

```typescript
'/users/:id/posts/:postId': (req) => {
  const { id, postId } = req.params;
  return Response.json({ userId: id, postId });
},
```

---

## 2. FileSystem Router

Bun's built-in `FileSystemRouter` class resolves routes against a directory using Next.js-style conventions.

### Directory Structure

```text
pages/
├── index.tsx                → /
├── about.tsx                → /about
├── blog/
│   ├── index.tsx            → /blog
│   └── [slug].tsx           → /blog/:slug
├── users/
│   └── [id]/
│       └── posts/
│           └── [postId].tsx → /users/:id/posts/:postId
└── [[...catchall]].tsx      → /* (catch-all)
```

### Usage

```typescript
import { serve } from 'bun';
import { renderToReadableStream } from 'react-dom/server';
import { createElement } from 'react';

const router = new Bun.FileSystemRouter({
  style: 'nextjs',
  dir: './pages',
});

serve({
  port: 3000,

  async fetch(req) {
    const match = router.match(req);

    if (!match) {
      return new Response('Not Found', { status: 404 });
    }

    // Import and render the matched component
    const module = await import(match.filePath);
    const Component = module.default;

    const stream = await renderToReadableStream(
      createElement(Component, {
        request: req,
        params: match.params,
        query: match.query,
      })
    );

    return new Response(stream, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
});
```

### Match Result

```typescript
router.match('/blog/my-post?sort=date');

// Returns:
{
  filePath: '/path/to/pages/blog/[slug].tsx',
  kind: 'dynamic',           // 'exact' | 'dynamic' | 'catch-all' | 'optional-catch-all'
  name: '/blog/[slug]',
  pathname: '/blog/my-post',
  params: { slug: 'my-post' },
  query: { sort: 'date' },
  src: 'https://domain.com/pages/blog/[slug].tsx'
}
```

### Dynamic Route Conventions

| Pattern | File | Matches |
|---------|------|---------|
| Dynamic | `[slug].tsx` | `/blog/hello` → `{ slug: 'hello' }` |
| Catch-all | `[...path].tsx` | `/docs/a/b/c` → `{ path: ['a','b','c'] }` |
| Optional catch-all | `[[...path]].tsx` | `/` or `/a/b` |

### Reloading Routes

```typescript
// Re-scan directory for new/changed files
router.reload();
```

---

## 3. Custom loadRoutes

Our custom route loader with method-per-file convention. See [`src/utils/loadRoutes.ts`](../../src/utils/loadRoutes.ts).

### Directory Structure

```text
src/routes/
├── index.tsx           → GET /
├── about/
│   └── index.tsx       → GET /about
├── contact/
│   ├── index.tsx       → GET /contact
│   └── post.ts         → POST /contact
├── products/
│   ├── index.tsx       → GET /products
│   └── $slug/
│       └── index.tsx   → GET /products/:slug
└── api/
    └── users/
        ├── index.ts   → GET /api/users
        ├── post.ts     → POST /api/users
        └── $id/
            ├── index.ts  → GET /api/users/:id
            ├── put.ts      → PUT /api/users/:id
            └── delete.ts   → DELETE /api/users/:id
```

### File Naming Conventions

The HTTP method is derived from the filename (case-insensitive):

| File Name | HTTP Method |
|-----------|-------------|
| `index.tsx` or `index.ts` | GET (default) |
| `get.tsx` or `get.ts` | GET (explicit) |
| `post.ts` | POST |
| `put.ts` | PUT |
| `patch.ts` | PATCH |
| `delete.ts` | DELETE |
| `options.ts` | OPTIONS |
| `head.ts` | HEAD |

**Note:** Both `index.ts` and `get.ts` create GET handlers. Use `index.tsx` for pages (React components) and `get.ts` when you want to be explicit about the method.

### Dynamic Parameters

Use `$paramName` folder naming for dynamic route segments:

```text
routes/
└── users/
    └── $id/
        └── index.tsx   → /users/:id
```

Multiple parameters:

```text
routes/
└── blog/
    └── $year/
        └── $month/
            └── $slug/
                └── index.tsx   → /blog/:year/:month/:slug
```

### File Extensions

- `.tsx` - React components (pages)
- `.ts` - API handlers (JSON responses)

### loadRoutes Implementation

The route loader is available at [`src/utils/loadRoutes.ts`](../../src/utils/loadRoutes.ts).

### Key Functions

```typescript
import { loadRoutes, createReactHandler, resolveRoute } from '@/utils/loadRoutes';

// Load all routes from src/routes directory
const routes = await loadRoutes('routes');

// Manually wrap a React component as a route handler
const handler = createReactHandler(MyComponent);

// Resolve static + dynamic routes for an incoming request
const resolved = resolveRoute(routes, request);
```

### How It Works

1. **Scans the routes directory** recursively for `.ts`, `.tsx`, `.js`, `.jsx` files
2. **Maps filenames to HTTP methods**:
   - `index.ts` / `index.tsx` → GET
   - `get.ts` → GET (explicit)
   - `post.ts` → POST
   - `put.ts` → PUT
   - `delete.ts` → DELETE
   - `patch.ts` → PATCH
   - `options.ts` → OPTIONS
   - `head.ts` → HEAD
3. **Converts `$param` folders** to `:param` route parameters
4. **Auto-detects React components** and wraps them with `renderToReadableStream`
5. **Returns a routes object** mapping paths to method handlers
6. **`resolveRoute()` matches static and dynamic paths** and injects `_param_*` search params for dynamic segments

### Route Object Structure

```typescript
type Routes = {
  [path: string]: {
    [method: string]: (req: Request) => Promise<Response> | Response;
  };
};

// Example output:
{
  '/': { GET: handler },
  '/about': { GET: handler },
  '/api/users': { GET: handler, POST: handler },
  '/api/users/:id': { GET: handler, PUT: handler, DELETE: handler },
  '/products/:slug': { GET: handler }
}
```

### Server Integration with loadRoutes

Example `src/index.ts` using the custom route loader:

```typescript
import { serve } from 'bun';
import { createReactHandler, loadRoutes, resolveRoute } from '@/utils/loadRoutes';
import staticAssets from '@/utils/staticAssets';
import corsResponse from '@/middleware/corsResponse';

const PORT = process.env.PORT || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

async function startServer() {
  // Load routes from filesystem
  const routes = await loadRoutes('routes');

  // Configure static assets
  const assetHandler = staticAssets({
    assetsPath: 'public/assets',
    urlPrefix: '/assets',
    cacheControl: IS_PRODUCTION
      ? 'public, max-age=31536000, immutable'
      : 'no-cache',
  });

  serve({
    port: PORT,
    development: !IS_PRODUCTION,
    routes: {
      '/assets/*': assetHandler,
    },

    async fetch(req) {
      // Handle CORS preflight
      if (req.method === 'OPTIONS') {
        return corsResponse();
      }

      const resolved = resolveRoute(routes, req);
      if (resolved) {
        return resolved.handler(resolved.request);
      }

      // 404 Not Found
      try {
        const { default: NotFound } = await import('./ui/PageNotFound/index.tsx');
        return createReactHandler(NotFound)(req);
      } catch {
        return new Response('Not Found', { status: 404 });
      }
    },

    error(error) {
      console.error('Server error:', error);
      return new Response('Internal Server Error', { status: 500 });
    },
  });

  console.log(`Server running at http://localhost:${PORT}`);
}

startServer();
```

---

## Route Examples (loadRoutes)

### Basic Page Route

```tsx
// src/routes/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';

interface HomePageProps {
  request: Request;
}

const HomePage: FC<HomePageProps> = ({ request }) => {
  return (
    <Layout title="Home">
      <main className="py-20">
        <h1 className="font-display text-5xl font-bold uppercase">
          Welcome<span className="text-primary">.</span>
        </h1>
      </main>
    </Layout>
  );
};

export default HomePage;
```

### Dynamic Route

```tsx
// src/routes/products/$slug/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';

interface ProductPageProps {
  request: Request;
}

const ProductPage: FC<ProductPageProps> = ({ request }) => {
  const url = new URL(request.url);

  // Get dynamic parameter
  const slug = url.searchParams.get('_param_slug') || '';

  // Alternative: parse from pathname
  // const slug = url.pathname.split('/').pop();

  return (
    <Layout title={`Product: ${slug}`}>
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold uppercase mb-4">
            Product: {slug}
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default ProductPage;
```

### API Route (GET)

```typescript
// src/routes/api/users/index.ts
export default async (req: Request) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return Response.json({ users });
};
```

### API Route (POST)

```typescript
// src/routes/api/users/post.ts
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
});

export default async (req: Request) => {
  try {
    const body = await req.json();
    const data = createUserSchema.parse(body);

    // Create user in database...
    const user = { id: Date.now(), ...data };

    return Response.json({ user }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: { message: 'Validation failed', details: error.errors } },
        { status: 400 }
      );
    }

    return Response.json(
      { error: { message: 'Internal server error' } },
      { status: 500 }
    );
  }
};
```

### API Route with Dynamic Parameter

```typescript
// src/routes/api/users/$id/index.ts
export default async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('_param_id');

  if (!id) {
    return Response.json(
      { error: { message: 'User ID required' } },
      { status: 400 }
    );
  }

  // Fetch user from database...
  const user = { id: parseInt(id), name: 'Alice' };

  if (!user) {
    return Response.json(
      { error: { message: 'User not found' } },
      { status: 404 }
    );
  }

  return Response.json({ user });
};
```

### Form Handler

```typescript
// src/routes/contact/post.ts
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default async (req: Request) => {
  const contentType = req.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) {
    return Response.json(
      { error: { message: 'Content-Type must be application/json' } },
      { status: 415 }
    );
  }

  try {
    const data = await req.json();
    const validData = contactSchema.parse(data);

    // Send email, save to database, etc.
    console.log('Contact form submission:', validData);

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: { message: 'Validation failed', details: error.errors } },
        { status: 400 }
      );
    }

    return Response.json(
      { error: { message: 'Failed to process form' } },
      { status: 500 }
    );
  }
};
```

---

## Static Assets Handler

Create `src/utils/staticAssets.ts`:

```typescript
import { join, extname } from 'path';

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.wasm': 'application/wasm',
};

export interface StaticAssetsConfig {
  assetsPath: string;
  urlPrefix?: string;
  cacheControl?: string;
}

export const staticAssets = ({
  assetsPath,
  urlPrefix = '/assets',
  cacheControl = 'public, max-age=31536000, immutable',
}: StaticAssetsConfig) => {
  return async (req: Request): Promise<Response> => {
    const url = new URL(req.url);
    const relativePath = url.pathname.replace(urlPrefix, '');
    const filePath = join(process.cwd(), assetsPath, relativePath);

    const file = Bun.file(filePath);

    if (!(await file.exists())) {
      return new Response('Not Found', { status: 404 });
    }

    const ext = extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    return new Response(file.stream(), {
      headers: {
        'Content-Type': contentType,
        'Content-Length': String(file.size),
        'Cache-Control': cacheControl,
        'Accept-Ranges': 'bytes',
      },
    });
  };
};

export default staticAssets;
```

## Middleware Pattern

Apply middleware to specific routes:

```typescript
// src/middleware/auth.ts
type Handler = (req: Request) => Promise<Response> | Response;

export const requireAuth = (handler: Handler): Handler => {
  return async (req: Request) => {
    const authHeader = req.headers.get('Authorization');

    if (!authHeader?.startsWith('Bearer ')) {
      return Response.json(
        { error: { message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const token = authHeader.slice(7);

    // Validate token...
    const isValid = token === 'valid-token'; // Replace with actual validation

    if (!isValid) {
      return Response.json(
        { error: { message: 'Invalid token' } },
        { status: 401 }
      );
    }

    return handler(req);
  };
};
```

Usage in route:

```typescript
// src/routes/api/protected/index.ts
import { requireAuth } from '@/middleware/auth';

const handler = async (req: Request) => {
  return Response.json({ message: 'Protected data' });
};

export default requireAuth(handler);
```

## Best Practices

### 1. Keep Routes Focused

Each route file should handle one resource or page:

```text
routes/api/users/       # User operations
routes/api/products/    # Product operations
routes/about/           # About page
routes/contact/         # Contact page + form
```

### 2. Validate Input

Always validate request bodies:

```typescript
import { z } from 'zod';

const schema = z.object({ /* ... */ });

export default async (req: Request) => {
  const data = schema.safeParse(await req.json());

  if (!data.success) {
    return Response.json(
      { error: { message: 'Invalid input', details: data.error.errors } },
      { status: 400 }
    );
  }

  // Use data.data safely
};
```

### 3. Handle Errors Gracefully

Wrap handlers in try-catch:

```typescript
export default async (req: Request) => {
  try {
    // Handler logic...
    return Response.json({ success: true });
  } catch (error) {
    console.error('Route error:', error);
    return Response.json(
      { error: { message: 'Internal server error' } },
      { status: 500 }
    );
  }
};
```

### 4. Use Consistent Response Format

Standardize your API responses:

```typescript
// Success
{ "result": { /* data */ } }

// Error
{ "error": { "message": "...", "details": [...] } }
```

### 5. Leverage TypeScript

Define types for route parameters and responses:

```typescript
interface UserParams {
  id: string;
}

interface UserResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
}
```
