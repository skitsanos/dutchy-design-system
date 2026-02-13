# Components

Dutchy component specifications and examples—sharp geometry, bold type, and high-contrast states.

## JSX SSR (Bun)

These docs are **HTML-first** and focus on design + markup. The canonical Bun SSR JSX implementation lives in:

- [`src/components/`](../../../src/components/)
- Component gallery metadata: [`src/components/componentRegistry.ts`](../../../src/components/componentRegistry.ts)

If you’re looking for the exact JSX used by the demo app, start from the route demos in `src/routes/components/*` and the component sources in `src/components/*`.

## Sections
- [Buttons](./buttons.md) — Variants, sizes, states, accessibility
- [Cards](./cards.md) — Variants, grids, interactive states
- [Forms](./forms.md) — Inputs, selects, textareas, validation, layouts
- [Breadcrumbs](./breadcrumbs.md) — Hierarchy trails, truncation patterns, accessibility
- [Navigation](./navigation.md) — Headers, sidebars, tabs, pagination
- [Layout](./layout.md) — Structural patterns and page scaffolding
- [Flex](./flex.md) — Composable flexbox helpers (direction, gap, alignment)
- [Text](./text.md) — Typography primitives for consistent type scale
- [Empty State](./empty-state.md) — Search, table, and dashboard empty states
- [Alerts / Banners](./alerts.md) — Info, success, warning, error alerts and full-width banners
- [Progress](./progress.md) — Determinate progress bars (sizes, labels, variants)
- [Skeleton Loader](./skeleton.md) — Card, list, content, and table loading placeholders
- [Spinner](./spinner.md) — Square loading indicator (token-colored)
- [Stats / KPI Cards](./stats.md) — Metric cards with trends, compact rows, detailed variants
- [Pagination](./pagination.md) — Numbered, ellipsis, compact pagination patterns
- [Accordion](./accordion.md) — Native details/summary with optional single-open JS
- [Tabs](./tabs.md) — Underline tabs, boxed/segmented control, panel switching
- [Toast Notifications](./toast.md) — Severity variants, auto-dismiss, stacking system
- [Modal / Drawer](./modal.md) — Native dialog modals and right-side drawers
- [Dropdown](./dropdown.md) — Action menus, searchable select, command palette
- [Menu](./menu.md) — Action lists, groups, dividers, destructive items
- [Data Table](./data-table.md) — Sorting, striped rows, empty/loading states
- [Stepper](./stepper.md) — Horizontal/vertical progress trackers
- [Badges & Tags](./badges.md) — Status labels, category tags, inline metadata
- [Tooltip](./tooltip.md) — CSS-only contextual hints with position variants
- [File Upload](./file-upload.md) — Drag-and-drop zone with file list and progress
- [Textarea](./textarea.md) — Multiline input, resize options, character counting
- [Scribble](./scribble.md) — Canvas signature pad with export preview (JS-enhanced)
- [Image](./image.md) — Responsive images, captions, and expand-to-fullscreen
- [Form Validation](./form-validation.md) — Declarative rule-based validation (DutchyForm)

## Quick Notes
- Zero-radius edges; accent borders for hierarchy
- Uppercase labels with strong tracking for navigation and CTAs
- Focus states and contrast target WCAG AA/AAA where applicable
