import { AsyncLocalStorage } from 'node:async_hooks';
import type { Routes } from '@/utils/loadRoutes';

export const SITE_URL = 'https://dutchy.design';
export const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large';

// Keep the request available to nested SSR layouts, including asynchronous pages.
export const pageRequestContext = new AsyncLocalStorage<Request>();

export const getCanonicalUrl = (pathOrUrl = pageRequestContext.getStore()?.url ?? '/'): string => {
  const { pathname } = new URL(pathOrUrl, SITE_URL);
  const path = pathname.replace(/\/+$/, '') || '/';
  return `${SITE_URL}${path}`;
};

export const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const escapeXml = (value: string): string =>
  value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    };
    return entities[character] ?? character;
  });

export const createSitemap = (routes: Routes): string => {
  const urls = [
    ...new Set(
      Object.entries(routes)
        .filter(([path, handlers]) => handlers.GET?.isPage && !path.includes(':'))
        .map(([path]) => getCanonicalUrl(path)),
    ),
  ].sort();

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
};
