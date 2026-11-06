import { loadRoutes } from '@/utils/loadRoutes';
import { createSitemap } from '@/utils/seo';

let sitemap: Promise<string> | undefined;

export default async function sitemapXml(req: Request): Promise<Response> {
  // Defer discovery until after route modules have loaded; cache for this process.
  sitemap ??= loadRoutes('routes').then(createSitemap);
  const body = await sitemap;

  return new Response(req.method === 'HEAD' ? null : body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
