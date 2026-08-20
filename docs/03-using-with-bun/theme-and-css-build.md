# Theme and CSS Build Lifecycle

This page is the source of truth for how Dutchy themes are defined, generated, loaded, and served in the Bun SSR app.

## Short Version

- Tailwind 4 reads `src/styles/dutchy.css`.
- `@theme` defines Tailwind utility tokens such as `bg-primary`, `text-primary`, and `border-primary`.
- Runtime theme values are CSS custom properties on `:root` and `[data-theme="..."]`.
- `bun run build:css` generates `public/assets/css/styles.css`.
- `public/assets/css/styles.css` is a build artifact and must not be committed.
- Bun does not compile Tailwind or process CSS on each request.
- Bun only serves the generated stylesheet as a static file from `/assets/css/styles.css`.
- Docker and Railway production builds must run the CSS build before starting the server.

## Source Files

| File | Purpose |
|------|---------|
| `src/styles/dutchy.css` | Tailwind 4 source, design tokens, runtime theme variables, component CSS |
| `public/assets/css/styles.css` | Generated Tailwind output served to browsers |
| `src/components/Layout/index.tsx` | Links the generated stylesheet with an asset version query string |
| `src/utils/staticAssets.ts` | Serves `/assets/*` files with `Bun.file()` |
| `public/assets/js/theme-switcher.js` | Optional page script that applies and persists `data-theme` |
| `Dockerfile` | Runs `bun run build:css` during production image build |

## Compile-Time Tokens

Tailwind 4 is configured in CSS, not through a required `tailwind.config.js`.

```css
@import "tailwindcss";

@source "../**/*.{ts,tsx}";
@source "../../public/assets/js/**/*.js";

@theme {
  --color-primary: hsl(var(--primary));
  --color-background: hsl(40 30% 97%);
  --color-foreground: hsl(25 20% 6%);
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

The important detail is `--color-primary: hsl(var(--primary));`.

Tailwind generates utilities such as `bg-primary`, `text-primary`, and `border-primary`, but the actual primary value is resolved by the browser at runtime through `--primary`.

## Runtime Theme Variables

Themes are CSS variable overrides.

```css
@layer base {
  :root {
    --primary: 25 95% 53%;
  }

  [data-theme="purple"] {
    --primary: 263 70% 58%;
  }

  [data-theme="crimson"] {
    --primary: 0 84% 50%;
  }
}
```

The default theme is Dutch Orange. It uses `:root`, so the page does not need a `data-theme` attribute for the default state.

Alternate themes are selected by setting `data-theme` on the document element:

```html
<html data-theme="purple">
```

or from client JavaScript:

```js
document.documentElement.setAttribute('data-theme', 'purple');
```

To return to the default orange theme, remove the attribute:

```js
document.documentElement.removeAttribute('data-theme');
```

## Theme Switcher Script

The theme switcher is vanilla JavaScript. It is not React state and it is not SSR hydration.

`public/assets/js/theme-switcher.js`:

```js
const STORAGE_KEY = 'dutchy-theme';
const savedTheme = localStorage.getItem(STORAGE_KEY);

if (savedTheme && savedTheme !== 'orange') {
  document.documentElement.setAttribute('data-theme', savedTheme);
}
```

Buttons opt in with `data-theme-switch`:

```html
<button data-theme-switch="orange">Orange</button>
<button data-theme-switch="purple">Purple</button>
<button data-theme-switch="crimson">Crimson</button>
```

The script is only loaded on pages that include `/assets/js/theme-switcher.js` in their `Layout` scripts list. If saved theme state must apply globally, add a small global theme-init script to the base `Layout` before the stylesheet or include the theme switcher script on every page where persisted themes should apply.

## CSS Build

Development:

```bash
bun run dev:css
bun run dev
```

Production:

```bash
bun run build
bun run start
```

`bun run build` delegates to `bun run build:css`.

```json
{
  "scripts": {
    "build": "bun run build:css",
    "build:css": "bunx tailwindcss -i src/styles/dutchy.css -o public/assets/css/styles.css --minify"
  }
}
```

## Bun Runtime Behavior

Bun runs TypeScript and JSX server code directly, but it does not compile Tailwind automatically for this SSR app.

The layout links the generated stylesheet:

```tsx
<link rel="stylesheet" href={`/assets/css/styles.css?v=${ASSET_VERSION}`} />
```

The server maps `/assets/*` to `public/assets/*` and serves files with `Bun.file()`:

```ts
const file = Bun.file(filePath);

return new Response(file.stream(), {
  headers: {
    'Content-Type': contentType,
    'Cache-Control': cacheControl,
  },
});
```

If `public/assets/css/styles.css` does not exist at runtime, styles will not render.

## Docker and Railway

The Docker image builds CSS before the app starts:

```dockerfile
RUN bun run build:css
```

Railway should use the Dockerfile for this project. If Railway is configured to use another builder, make sure its build command runs:

```bash
bun run build
```

and its start command runs:

```bash
bun run start
```

## Cache Rules

Production assets are served with long-lived immutable caching. The layout appends `?v=${ASSET_VERSION}` to the stylesheet URL.

When changing CSS behavior or generated utility classes, update `ASSET_VERSION` in `src/components/Layout/index.tsx` as part of the release.

In development, static assets are served with caching disabled when `NODE_ENV !== "production"`.

## Rules for Humans and Agents

- Change theme tokens in `src/styles/dutchy.css`.
- Do not edit `public/assets/css/styles.css` by hand.
- Do not commit `public/assets/css/styles.css`.
- Run `bun run build` before production verification.
- Run `bun run dev:css` while working locally if CSS classes or tokens change.
- Keep `@source` globs aligned with files that contain Tailwind classes.
- Add new theme names as `[data-theme="name"]` overrides.
- Update docs when adding or renaming themes.
- Update `ASSET_VERSION` when a release changes CSS behavior.
- Remember that Bun serves CSS; Tailwind generates CSS.
