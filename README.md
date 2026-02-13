# Dutchy Design System

Bold, structural UI kit inspired by Dutch graphic design: zero-radius geometry, high contrast, and loud typography. Built around Bun SSR + a server-only JSX component library in `src/components/`.

## Quick Start

```bash
bun install
bun run dev:css   # watch Tailwind CSS
bun run dev       # start Bun server (watch mode)
```

Open `http://localhost:3000`

## What’s In This Repo

- **Bun SSR app** (for demos/showcases): routes in `src/routes/`, server in `src/index.ts`
- **JSX SSR components**: reusable building blocks in `src/components/` (no client-side React)
- **Design tokens + docs**: Markdown docs in `docs/`
- **Static assets**: `public/assets/` (compiled CSS + vanilla JS modules)

## Stack

- **Runtime**: [Bun](https://bun.sh)
- **Rendering**: React SSR via `renderToReadableStream()` (no hydration)
- **Styling**: Tailwind CSS + CSS variables (themes)
- **Routing**: file-based (see `src/utils/loadRoutes.ts`)
- **Interactivity**: vanilla JS modules + `data-*` hooks (see `public/assets/js/`)

## SSR-Only JSX (Important)

Components in `src/components/` render to static HTML on the server. There is **no React runtime** in the browser.

- Don’t use React hooks (`useState`, `useEffect`, …)
- Don’t rely on JSX event handlers (`onClick`, `onChange`, …) for behavior
- For interactive components (tabs, modal, toast, file upload, …) load a small script from `public/assets/js/` and bind via `data-*`

## Local URLs

- `/` — home
- `/components` — component gallery (driven by `src/components/componentRegistry.ts`)
- `/components/<id>` — component demo pages (implemented as routes in `src/routes/components/`)
- `/showcase` — full-page compositions
- `/patterns` — patterns gallery
- `/typography`, `/colors` — foundation pages

## Project Structure

```text
src/
  index.ts                  # Bun server entry
  components/               # JSX SSR components (folder-per-component)
  routes/                   # File-based routing (index.tsx + method files)
  middleware/               # Request helpers (e.g. CORS)
  utils/                    # Routing + static asset helpers
  styles/input.css          # Tailwind source (tokens + theme vars)
public/assets/
  css/styles.css            # Compiled Tailwind output
  js/                       # Vanilla JS modules (tabs, modal, toast, ...)
docs/                       # Design system docs (tokens/components/patterns)
website/                    # Static site (if/when exported)
```

## Routing Conventions

Routes are discovered under `src/routes/`:

- `index.tsx` → `GET` handler (React component or `(req) => Response`)
- `get.ts`, `post.ts`, `put.ts`, … → explicit HTTP method handlers
- `$param` folder names are supported by the router (become `:param`), even if your current routes are mostly static

## Theming

Themes are CSS variables (default, purple, crimson). Tailwind utilities (`bg-primary`, `text-primary`, `border-primary`, including opacity modifiers) follow the active theme.

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start Bun server in watch mode |
| `bun run dev:css` | Watch and rebuild Tailwind CSS |
| `bun run build:css` | One-time Tailwind CSS build (minified) |
| `bun test` | Run tests in `tests/` |

## Docker

```bash
docker build -t dutchy:2.0.0 .
docker run -p 3000:3000 dutchy:2.0.0
```

The image builds Tailwind CSS at build time and serves the Bun SSR app on port 3000.

## Documentation

- `docs/01-design-system/` — design principles, tokens, components, patterns (HTML-first)
- `docs/03-using-with-bun/` — Bun SSR notes and conventions
- `src/components/` — the canonical JSX SSR component implementation used by the demo app

## License

MIT
