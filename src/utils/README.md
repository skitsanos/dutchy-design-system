# Utilities

Server utilities used by the Dutchy Design System demos. These helpers are written for Bun + server-side JSX rendering.

## loadRoutes.ts
- Dynamic file-based router loader for Bun `serve()`
- Auto-loads handlers or SSR React components from `src/routes/**`
- Supports HTTP method filenames (`get.ts`, `post.ts`, etc.) and `index.tsx` defaults to `GET`
- Converts `$param` folders to `:param` route segments

### Usage
```ts
import { serve } from 'bun';
import { loadRoutes, resolveRoute } from './utils/loadRoutes';

const routes = await loadRoutes('routes'); // scans src/routes

serve({
  port: 3000,
  async fetch(req) {
    const resolved = resolveRoute(routes, req);
    return resolved
      ? resolved.handler(resolved.request)
      : new Response('Not Found', { status: 404 });
  },
});
```

### Notes
- Components are rendered server-side; there is no client React runtime
- Adds a fallback `GET /` handler returning “It works” when no routes exist
- `resolveRoute()` supports dynamic paths and injects matched params as `_param_*` query values

### Example Pattern
```ts
import corsResponse from './middleware/corsResponse';
import notFoundPage from './ui/PageNotFound';
import { renderToReadableStream } from 'react-dom/server';
import { loadRoutes, resolveRoute } from './utils/loadRoutes';

const routes = await loadRoutes('routes');

serve({
  port: 3000,
  routes, // you can merge in static asset routes here too
  async fetch(req) {
    if (req.method === 'OPTIONS') return corsResponse(); // CORS preflight

    const resolved = resolveRoute(routes, req);
    if (resolved) return resolved.handler(resolved.request);

    const stream = await renderToReadableStream(notFoundPage({ request: req }));
    return new Response(stream, { headers: { 'Content-Type': 'text/html' }, status: 404 });
  },
});
```
