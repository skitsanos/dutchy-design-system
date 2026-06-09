---
name: dutchy-ssr-check
description: Audit Bun SSR route handlers for raw HTML elements that should use Dutchy Design System components instead. Use when reviewing code quality, after generating pages with dutchy-designer, or when the user asks to check, validate, or audit component usage in a Dutchy SSR project.
---

# Dutchy SSR Check

Scan Bun SSR route handlers for raw HTML elements that have Dutchy Design System component equivalents, and flag missing client-side JS scripts for interactive components.

## Step 1: Discover Available Components

Before scanning routes, build the element-to-component map dynamically:

1. Read `src/components/componentRegistry.ts` to get the full list of registered components and their required scripts.
2. Glob `src/components/*/index.tsx` to discover all component folders.
3. For each component, read its `index.tsx` and identify which raw HTML element(s) it wraps (look at the root element(s) returned in the JSX). Record the mapping: component name → HTML element(s) it replaces → import path (`@/components/<FolderName>`).
4. Use the registry's `scripts` array to build the script dependency map for that component.

This ensures new, renamed, or removed components are always picked up automatically. Never rely on a hardcoded list.

## Step 2: Scan Routes

Glob `src/routes/**/*.tsx` in the project directory. For each file, determine if it's a content page (default-exports a component returning JSX) or an API handler (exports only HTTP method functions returning `Response`/JSON). Skip API handlers.

### Allowed Exceptions (Do NOT Flag)

- Raw HTML inside a Dutchy component's own implementation (`src/components/*/index.tsx`).
- `<input type="hidden">` — no visual representation.
- Raw elements inside another Dutchy component's JSX children where the component itself handles rendering (e.g., `<button` inside `<Select`, `<Tabs`, `<MenuItem`).
- HTML in string literals, `<script` tag content, or comments.

## Step 3: Script Dependency Check

After checking element usage, verify that interactive Dutchy components have their required JS scripts loaded (via `<script src="...">` in the page or the Layout component).

Use the `scripts` array from `componentRegistry.ts` (discovered in Step 1) as the authoritative source of which scripts each component needs. Check the Layout component (`src/components/Layout/index.tsx` or equivalent) too — scripts are often included there globally rather than per-page.

## Workflow

1. **Discover components** (Step 1): read the registry and component source files to build the element→component map and script dependency map.
2. **Scan routes** (Step 2): glob `src/routes/**/*.tsx`; read each file; skip API-only handlers.
3. In content pages, search for raw HTML elements from the discovered map.
4. For each finding, note file, line number, raw element, and the Dutchy replacement.
5. **Check scripts** (Step 3): verify interactive components have their required JS scripts loaded (page + Layout).
6. Present the report.

## Report Format

```
## Dutchy SSR Component Audit

### <file path>

**Raw HTML elements to replace:**
- Line <N>: `<button ...>` → use `<Button>` from `@/components/Button`
- Line <N>: `<input ...>` → use `<Input>` from `@/components/Input`

**Missing JS scripts:**
- Uses `<Select>` but `/assets/js/select.js` not found in page or Layout

### <next file>
...

**Candidates for new components:**
- `<meter>` found <N> times across routes — consider creating a `<Meter>` component in `src/components/Meter/`

### Summary
- Files scanned: <N>
- Files with issues: <N>
- Raw HTML violations: <N>
- Missing scripts: <N>
- New component candidates: <N>
```

If raw HTML elements appear in routes but no matching Dutchy component exists for them, do not flag them as violations. Instead, list them separately under "Candidates for new components" with the element name, how many times it appears, and a suggested component name and path. This helps the design system grow organically based on actual usage.

If no issues found: "All scanned routes use Dutchy SSR components correctly."
