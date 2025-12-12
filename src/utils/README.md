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
import { loadRoutes } from './utils/loadRoutes';

const routes = await loadRoutes('routes'); // scans src/routes

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const route = routes[url.pathname];
    const handler = route?.[req.method];
    return handler ? handler(req) : new Response('Not Found', { status: 404 });
  },
});
```

### Notes
- Components are rendered server-side; there is no client React runtime
- Adds a fallback `GET /` handler returning “It works” when no routes exist

### Example Pattern
```ts
import corsResponse from './middleware/corsResponse';
import notFoundPage from './ui/PageNotFound';
import { renderToReadableStream } from 'react-dom/server';

const routes = await loadRoutes('routes');

serve({
  port: 3000,
  routes, // you can merge in static asset routes here too
  async fetch(req) {
    if (req.method === 'OPTIONS') return corsResponse(); // CORS preflight

    const url = new URL(req.url);
    const path = url.pathname.length > 1 && url.pathname.endsWith('/')
      ? url.pathname.slice(0, -1)
      : url.pathname;

    const handler = routes[path]?.[req.method];
    if (handler) return handler(req);

    const stream = await renderToReadableStream(notFoundPage({ request: req }));
    return new Response(stream, { headers: { 'Content-Type': 'text/html' }, status: 404 });
  },
});
```
