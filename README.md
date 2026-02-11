# Dutchy Design System

Bold, structural UI kit inspired by Dutch graphic design—built for teams shipping confident marketing sites, dashboards, and documentation.

## Why Dutchy

- **Instant brand punch** — Zero-radius geometry, Space Grotesk display, Inter body, JetBrains Mono for code
- **Production-ready tokens** — Colors, typography, spacing, effects with light/dark and theme variants
- **Drop-in templates** — HTML showcases for landing pages, pricing, docs, dashboard, auth, and more
- **SSG/SSR friendly** — Works with vanilla HTML/CSS or Bun JSX server rendering (SSR-only, no client React)
- **Accessible by default** — High-contrast palette, visible focus states, WCAG-aware color guidance
- **MIT licensed** — Commercial-friendly for products, clients, and internal tools

## Repo Structure

- `docs/` — Living documentation: design system, tokens, components, patterns, and HTML showcases
- `website/` — Static site assets and Caddyfile for the public site
- `src/utils/` — Server utilities (e.g., `loadRoutes` for Bun SSR routing)
- `src/middleware/` — Middleware helpers (e.g., `corsResponse` for preflight handling)

## Quick Start

```html
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Documentation

### Design System
- [Overview](docs/01-design-system/README.md)
- **Tokens:** [Colors](docs/01-design-system/tokens/colors.md) · [Typography](docs/01-design-system/tokens/typography.md) · [Spacing](docs/01-design-system/tokens/spacing.md) · [Effects](docs/01-design-system/tokens/effects.md)
- **Components:** [Buttons](docs/01-design-system/components/buttons.md) · [Cards](docs/01-design-system/components/cards.md) · [Forms](docs/01-design-system/components/forms.md) · [Breadcrumbs](docs/01-design-system/components/breadcrumbs.md) · [Navigation](docs/01-design-system/components/navigation.md) · [Layout](docs/01-design-system/components/layout.md) · [Empty State](docs/01-design-system/components/empty-state.md) · [Alerts](docs/01-design-system/components/alerts.md) · [Skeleton](docs/01-design-system/components/skeleton.md) · [Stats](docs/01-design-system/components/stats.md) · [Pagination](docs/01-design-system/components/pagination.md) · [Accordion](docs/01-design-system/components/accordion.md) · [Tabs](docs/01-design-system/components/tabs.md) · [Toast](docs/01-design-system/components/toast.md) · [Modal](docs/01-design-system/components/modal.md) · [Dropdown](docs/01-design-system/components/dropdown.md) · [Data Table](docs/01-design-system/components/data-table.md) · [Stepper](docs/01-design-system/components/stepper.md)
- **Patterns:** [Hero](docs/01-design-system/patterns/hero.md) · [Grids](docs/01-design-system/patterns/grids.md) · [Footer](docs/01-design-system/patterns/footer.md)

### HTML Showcase
Ready-to-use page templates in [docs/02-html-showcase/](docs/02-html-showcase/README.md)

### Using with Bun
Server-side rendering with Bun's JSX support in [docs/03-using-with-bun/](docs/03-using-with-bun/README.md)

## Build with Bun (SSR)

```ts
import { serve } from 'bun';
import { loadRoutes, resolveRoute } from './src/utils/loadRoutes';

const routes = await loadRoutes('routes');

serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const resolved = resolveRoute(routes, req);
    return resolved
      ? resolved.handler(resolved.request)
      : new Response('Not Found', { status: 404 });
  },
});
```

## Run Locally

```bash
# Using Podman
podman build -t dutchy-website .
podman run -d -p 8080:80 dutchy-website

# Using Docker
docker build -t dutchy-website .
docker run -d -p 8080:80 dutchy-website
```

Visit `http://localhost:8080`

## License

MIT
