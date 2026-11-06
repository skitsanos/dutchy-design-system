# Canonical URLs and Crawl Access

The public site uses `https://dutchy.design` as its canonical origin. The configuration lives in `src/utils/seo.ts`.

## Page Metadata

Every page rendered through `createReactHandler` receives a request-scoped canonical URL in `Layout`. Nested layouts and asynchronous pages share that request context without React hooks or client-side JavaScript.

- Canonical URLs always use the production HTTPS origin.
- Query strings and fragments are removed; non-root trailing slashes are normalized away.
- `og:url` matches the canonical URL.
- Public pages allow indexing, link following, and large image previews.
- Missing pages use `noindex, follow` and retain the server's HTTP 404 status.

For an explicit canonical path, use the existing `meta.url` prop. Its hostname is replaced by the canonical origin:

```tsx
<Layout title="Buttons" meta={{ url: '/components/buttons' }}>
  <main>Button documentation</main>
</Layout>
```

## Robots and Sitemap

`GET /robots.txt` allows every user agent to crawl every path and advertises `https://dutchy.design/sitemap.xml`. Stylesheets, scripts, component pages, and showcase examples remain crawlable.

`GET /sitemap.xml` discovers routes through the same `loadRoutes` function used by the server. It lists all static GET pages rendered through `createReactHandler`, including the homepage, foundations, components, patterns, Bun guide, and showcases. JSON handlers, POST handlers, crawl endpoints, and unresolved dynamic route patterns are excluded.

The sitemap is generated on the first request and cached for the process lifetime. Restart the server after adding or removing routes, as with the server's route table. Both crawl endpoints support HEAD and use a five-minute public cache lifetime. No guessed modification dates, priorities, or change frequencies are emitted.

Dynamic routes need an explicit list of published URLs before they can be included in a sitemap. This application currently has only static page routes.

## Production Verification

```bash
curl https://dutchy.design/robots.txt
curl https://dutchy.design/sitemap.xml
curl -s https://dutchy.design/components/buttons
```

Confirm that robots allows crawling, each sitemap URL returns HTTP 200, and its rendered canonical URL agrees with the sitemap. Query-string variants should identify the same canonical page. Missing URLs must still return 404.

Cloudflare can prepend its own robots directives or block crawlers before they reach Railway. Check AI Crawl Control and Bot Preference Sync against the intended allow-all policy; application metadata cannot override an edge block. After deploying a robots change, account for cached responses at Cloudflare.

Submit the sitemap in Google Search Console and Bing Webmaster Tools for crawl and indexing reports. Crawl permission and sitemap discovery help search engines find pages; they do not guarantee indexing or rankings.
