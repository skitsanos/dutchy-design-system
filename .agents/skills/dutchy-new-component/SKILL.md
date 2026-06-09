---
name: dutchy-new-component
description: Create new Dutchy Design System components with all required project wiring. Use when asked to add a component under src/components, wire client JavaScript, create a demo page, register in componentRegistry, and add docs. Triggers for "add a new component", "create component", or "register component" in a Dutchy SSR project.
---

# New Dutchy Component

Create a production-ready Dutchy component and all required wiring in one pass.

## Inputs

Collect or infer before starting:

- `component_name`: PascalCase folder and symbol (e.g., `Timeline`).
- `route_id`: kebab-case URL segment for `/components/<route_id>` and registry `id` (e.g., `timeline`).
- `display_name`: Human label for registry (e.g., `Timeline`).
- `category`: One of `UI`, `Input`, `Display`, `Layout`, `Feedback`, `Navigation`, `Interactive`, `Overlay`.
- `description`: One-sentence registry description.
- `needs_js`: Whether client-side behavior is required.
- `js_file`: kebab-case script filename when `needs_js=true` (e.g., `timeline.js`).

When the user does not provide values, choose pragmatic defaults from existing naming patterns.

## Step 1: Learn Current Conventions

Before writing any code, read these files from the project to learn the exact patterns in use:

1. **A simple component** — read any `src/components/Button/index.tsx` or `src/components/Badge/index.tsx` for props interface, variant handling, className merging, and export style.
2. **An interactive component** — if `needs_js=true`, read one like `src/components/Tabs/index.tsx` or `src/components/Modal/index.tsx` to see how `data-*` selectors are placed.
3. **Registry** — read `src/components/componentRegistry.ts` for the `ComponentMeta` interface and entry format.
4. **Demo page** — read any `src/routes/components/buttons/index.tsx` or similar for the demo page layout.
5. **JS handler** — if `needs_js=true`, read a handler like `public/assets/js/accordion.js` or `public/assets/js/dropdown.js` for the handler pattern.
6. **Docs** — read one file from `docs/01-design-system/components/` for the documentation format.

Match whatever patterns are found — they may evolve over time.

## Step 2: Create the Component

Create `src/components/<ComponentName>/index.tsx`.

Follow these conventions discovered from the codebase:

- **Default export only**: `export default ComponentName;`
- **Props interface**: extend HTML attributes when wrapping a single element (e.g., `extends ButtonHTMLAttributes<HTMLButtonElement>`). Use custom interface for compound components.
- **All variant/size props optional with defaults**: destructure with defaults in the function signature.
- **className merging via template literals**: `` className={`${base} ${variants[variant]} ${className}`} `` — no `cn()` utility.
- **Variant handling via object lookup**: define a `variants` record, index into it with the prop.
- **Type as `FC<Props>`**: `const ComponentName: FC<ComponentProps> = ({ ... }) => { ... };`
- **Import style**: `import type { FC, ReactNode } from 'react';` and `import OtherComponent from '@/components/OtherComponent';`

### SSR Guardrails

- No React client hooks (`useState`, `useEffect`, etc.).
- No inline event handlers (`onClick`, `onChange`).
- No `border-radius` — sharp geometry everywhere.
- High contrast, visible focus states.
- Use existing token/utility classes; only add to `public/assets/css/styles.css` if truly needed.

## Step 3: Create Client JS (If Interactive)

If `needs_js=true`, create `public/assets/js/<js_file>`.

Follow these conventions:

- **IIFE wrapper**: `(function() { ... })();`
- **`data-*` selectors**: use `[data-<component>]` for the container, `[data-<component>-trigger]` for triggers, `[data-<component>-target]` for targets.
- **`querySelectorAll` + `forEach`** to handle multiple instances.
- **Guard with existence checks** before adding listeners.
- **`e.stopPropagation()`** to prevent bubbling on trigger clicks.
- **Global handlers**: close on outside click (`document.addEventListener('click', ...)`) and Escape key (`document.addEventListener('keydown', ...)`).
- **Toggle visibility** with `classList.toggle('hidden')` / `classList.add/remove('hidden')`.

Ensure the `data-*` attributes in the component JSX match the selectors in the JS handler.

## Step 4: Create Demo Page

Create `src/routes/components/<route_id>/index.tsx`.

Follow these conventions:

- Wrap in `<ComponentPageLayout componentId="<route_id>">` with a `<>` fragment child.
- Each demo section: `<div className="bg-background border-4 border-border p-8 md:p-12 mb-8">` (last section omits `mb-8`).
- Section titles: `<h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">`.
- Use `<Flex>` component for arranging examples, not manual flexbox classes.
- Show meaningful variant/state examples — not placeholders.

## Step 5: Register in Component Registry

Append a new entry to the `COMPONENTS` array in `src/components/componentRegistry.ts`:

```typescript
{
  id: '<route_id>',
  name: '<display_name>',
  description: '<description>',
  category: '<category>',
  scripts: ['/assets/js/<js_file>'],  // or [] if no JS
},
```

## Step 6: Add Documentation

Create `docs/01-design-system/components/<route_id>.md` with these sections:

1. **Philosophy** — when and why to use this component.
2. **Variants / Usage** — HTML examples for each variant.
3. **React Component Example** — TSX usage snippet.
4. **Accessibility** — keyboard, ARIA, and semantic considerations.

## Step 7: Verify

- All new files exist and imports resolve.
- Registry `id` matches the demo route segment.
- Script references in registry match actual files in `public/assets/js/`.
- `data-*` selectors in JSX match the JS handler.
- No `border-radius`, no React hooks, no inline event handlers.

## Output

Report: files created/modified, registry entry added, JS asset status, any assumptions made.
