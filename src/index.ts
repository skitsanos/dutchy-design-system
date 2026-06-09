import { serve } from 'bun';
import corsResponse from '@/middleware/corsResponse';
import { createReactHandler, loadRoutes, resolveRoute } from '@/utils/loadRoutes';
import staticAssets from '@/utils/staticAssets';

const PORT = process.env.PORT || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const ASSET_CACHE_HEADERS: Record<string, string> = IS_PRODUCTION
  ? {
      'Cache-Control': 'public, max-age=31536000, immutable',
    }
  : {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
    };

async function startServer() {
  const routes = await loadRoutes('routes');

  const assetHandler = staticAssets({
    assetsPath: 'public/assets',
    urlPrefix: '/assets',
    headers: ASSET_CACHE_HEADERS,
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
