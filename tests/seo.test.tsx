import { beforeAll, describe, expect, test } from 'bun:test';
import type { FC } from 'react';
import Layout from '@/components/Layout';
import PageNotFound from '@/components/PageNotFound';
import type { RouteHandler, Routes } from '@/utils/loadRoutes';
import { createReactHandler, loadRoutes, resolveRoute } from '@/utils/loadRoutes';
import { createSitemap, getCanonicalUrl, ROBOTS_TXT } from '@/utils/seo';

describe('canonical URLs', () => {
  test('uses the production origin and removes duplicate query and trailing-slash variants', () => {
    expect(
      getCanonicalUrl('http://localhost:3000/components/buttons/?utm_source=demo#example'),
    ).toBe('https://dutchy.design/components/buttons');
    expect(getCanonicalUrl('https://untrusted.example/typography?theme=purple')).toBe(
      'https://dutchy.design/typography',
    );
    expect(getCanonicalUrl('/')).toBe('https://dutchy.design/');
    expect(getCanonicalUrl('/components/a%20b')).toBe('https://dutchy.design/components/a%20b');
  });

  test('isolates request metadata across concurrent asynchronous SSR renders', async () => {
    const Page: FC<{ request: Request }> = async ({ request }) => {
      await Bun.sleep(request.url.includes('first') ? 10 : 1);
      return (
        <Layout title="Concurrent page">
          <main>Page content</main>
        </Layout>
      );
    };
    const handler = createReactHandler(Page);
    const paths = ['/first/?utm_source=test', '/second?theme=purple'];
    const html = await Promise.all(
      paths.map(async (path) => {
        const response = await handler(new Request(`http://localhost:3000${path}`));
        expect(response.status).toBe(200);
        return response.text();
      }),
    );

    for (const [index, path] of ['/first', '/second'].entries()) {
      expect(html[index]).toContain(`rel="canonical" href="https://dutchy.design${path}"`);
      expect(html[index]).toContain(`property="og:url" content="https://dutchy.design${path}"`);
      expect(html[index]).toContain('content="index, follow, max-image-preview:large"');
    }
  });

  test('keeps error pages out of the index', async () => {
    const response = await createReactHandler(PageNotFound)(
      new Request('https://dutchy.design/missing'),
    );
    expect(await response.text()).toContain('name="robots" content="noindex, follow"');
  });
});

describe('crawl endpoints', () => {
  let routes: Routes;

  beforeAll(async () => {
    routes = await loadRoutes('routes');
  });

  test('allows every user agent and advertises the canonical sitemap', async () => {
    const request = new Request('http://localhost:3000/robots.txt');
    const resolved = resolveRoute(routes, request);
    expect(resolved).not.toBeNull();
    const response = await resolved?.handler(request);
    expect(response?.status).toBe(200);
    expect(response?.headers.get('Content-Type')).toBe('text/plain; charset=utf-8');
    expect(await response?.text()).toBe(
      'User-agent: *\nAllow: /\n\nSitemap: https://dutchy.design/sitemap.xml\n',
    );
    expect(ROBOTS_TXT).not.toContain('Disallow:');
  });

  test('lists each public HTML route with its own canonical URL', async () => {
    const request = new Request('http://localhost:3000/sitemap.xml');
    const response = await resolveRoute(routes, request)?.handler(request);
    expect(response?.status).toBe(200);
    expect(response?.headers.get('Content-Type')).toBe('application/xml; charset=utf-8');
    const xml = (await response?.text()) ?? '';
    expect(xml).toStartWith('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    expect(urls.length).toBeGreaterThan(40);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls).toContain('https://dutchy.design/');
    expect(urls).toContain('https://dutchy.design/components/buttons');
    expect(urls).toContain('https://dutchy.design/showcase/themes');

    const pagePaths: string[] = [];
    for (const [path, handlers] of Object.entries(routes)) {
      if (!handlers.GET || path.includes(':')) continue;
      const page = await handlers.GET(
        new Request(`http://localhost:3000${path}?utm_source=crawler`),
      );
      if (!page.headers.get('Content-Type')?.startsWith('text/html')) continue;
      const html = await page.text();
      expect(page.status).toBe(200);
      expect(html).not.toContain('noindex');
      expect(html).toContain(`rel="canonical" href="https://dutchy.design${path}"`);
      expect(urls).toContain(`https://dutchy.design${path}`);
      pagePaths.push(path);
    }
    expect(urls).toHaveLength(pagePaths.length);
  });

  test('supports HEAD requests for robots and sitemap', async () => {
    for (const path of ['/robots.txt', '/sitemap.xml']) {
      const request = new Request(`http://localhost:3000${path}`, { method: 'HEAD' });
      const response = await resolveRoute(routes, request)?.handler(request);
      expect(response?.status).toBe(200);
      expect(response?.headers.get('Cache-Control')).toBe('public, max-age=300');
      expect(await response?.text()).toBe('');
    }
  });

  test('excludes API, POST-only and unresolved dynamic routes, and escapes XML', () => {
    const page = createReactHandler(() => <Layout title="Test">Content</Layout>);
    const api: RouteHandler = () => Response.json({ ok: true });
    const xml = createSitemap({
      '/components/a&b': { GET: page },
      '/components/:id': { GET: page },
      '/api/example': { GET: api },
      '/submit': { POST: api },
      '/': { GET: page },
    });
    expect(xml).toContain('<loc>https://dutchy.design/components/a&amp;b</loc>');
    expect(xml).not.toContain(':id');
    expect(xml).not.toContain('/api/');
    expect(xml).not.toContain('/submit');
    expect(xml.match(/<loc>/g)).toHaveLength(2);
  });
});
