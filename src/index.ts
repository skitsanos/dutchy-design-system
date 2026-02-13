import { serve } from 'bun';
import { createReactHandler, loadRoutes, resolveRoute } from '@/utils/loadRoutes';
import staticAssets from '@/utils/staticAssets';
import corsResponse from '@/middleware/corsResponse';

const PORT = process.env.PORT || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

async function startServer() {
  const routes = await loadRoutes('routes');

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

      try {
        const resolved = resolveRoute(routes, req);
        if (resolved) {
          return resolved.handler(resolved.request);
        }

        // 404 Not Found
        const { default: NotFound } = await import('./components/PageNotFound/index.tsx');
        const notFoundResponse = await createReactHandler(NotFound)(req);
        return new Response(notFoundResponse.body, {
          status: 404,
          headers: notFoundResponse.headers,
        });
      } catch (error) {
        console.error('Route error:', error);
        return new Response('Internal Server Error', { status: 500 });
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
