# AGENTS GUIDE

Guidance for automated agents working in this repository.

## Project Purpose
- Dutchy Design System: Dutch-inspired, zero-radius geometry, bold typography (Space Grotesk, Inter, JetBrains Mono), high contrast, MIT-licensed.
- Outputs: design tokens, component/pattern docs, HTML showcases, Bun SSR utilities, static website.

## General Rules
- Preserve the visual language: sharp edges (no border-radius), bold type, high contrast, accent borders.
- Keep accessibility in mind: visible focus states, WCAG-aware contrast; don’t reduce contrast.
- Maintain consistency across docs and code blocks; prefer concise, high-signal examples.
- Respect existing instructions (e.g., don’t mention Claude in commits/PRs).

## Code & Structure
- Docs live in `docs/` (design system, tokens, components, patterns, showcases).
- Static site in `website/`.
- Server helpers in `src/utils/` (e.g., `loadRoutes` for Bun SSR routing).
- Middleware in `src/middleware/` (e.g., `corsResponse` for OPTIONS preflight).
- Default to ASCII; add comments only when clarifying non-obvious logic.

## Bun SSR Notes
- `loadRoutes` scans `src/routes/**`, supports `index.tsx` (GET), and method files (`get.ts`, `post.ts`, etc.), `$param` → `:param`.
- SSR-only: React runtime is not on the client; no hooks or client-side event handlers in JSX. Use vanilla JS for interactivity.
- Handle OPTIONS early with `corsResponse` when CORS is needed.
- Trailing slash normalization is expected in routing examples.

## Docs Hygiene
- Add language hints to code fences (`html`, `css`, `ts`, `tsx`, `js`).
- Ensure internal links point to real files (avoid broken paths like `02-tokens.md`).
- Keep tone concise and confident; avoid fluff.
- When adding new sections, mirror existing formatting styles and typography references.

## Frontend Styling
- Tailwind via CDN in showcases; fonts from Google Fonts as already configured.
- Avoid introducing rounded corners or low-contrast schemes.
- Use accent borders (4px/8px) and tight grids where patterns call for them.

## Commands & Tooling
- Use `rg` for search when possible.
- No destructive git commands unless explicitly requested by a human.
- Prefer `apply_patch` for small edits; don’t auto-reformat unrelated files.

## Outputs & Checks
- Verify new links and paths exist.
- Keep examples minimal but meaningful; avoid bloated snippets.
- If adding tests or scripts, clean up temporary artifacts unless requested to keep them.
