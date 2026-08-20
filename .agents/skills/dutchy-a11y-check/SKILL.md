---
name: dutchy-a11y-check
description: Audit Dutchy Bun SSR pages and components for accessibility, keyboard, semantics, ARIA, focus, and theme contrast issues. Use for accessibility, WCAG, keyboard, or screen-reader reviews in this repository.
---

# Dutchy Accessibility Check

Audit the rendered behavior and the SSR/client-JS contract. Report evidence-backed findings before summaries.

## Establish Context

Read `AGENTS.md`, `src/components/Layout/index.tsx`, `src/styles/dutchy.css`, and the relevant route, component, and client handler files. Use `src/components/componentRegistry.ts` to identify scripts required by interactive components.

Do not infer accessibility from route markup alone when a shared component or client handler owns the semantics or state changes.

## Audit

Check the requested scope for:

- Semantic landmarks and a coherent heading hierarchy.
- Accessible names for controls, links, forms, tables, images, and icon-only actions.
- Label, description, required-state, and error-message relationships for form controls.
- Keyboard reachability, visible focus, Escape/close behavior, focus return, and focus trapping where applicable.
- Correct dynamic ARIA state such as `aria-expanded`, `aria-selected`, `aria-pressed`, and live-region behavior.
- Meaningful link destinations; flag `href="#"` and JavaScript pseudo-links.
- Contrast and non-color cues in the themes implemented by `src/styles/dutchy.css` (default, purple, crimson).
- Responsive behavior that affects reading order, clipping, overflow, or target size.

When a local server is available, verify interaction-sensitive findings in the browser at desktop and mobile sizes. Exercise keyboard focus for tooltips, menus, dialogs, tabs, and forms rather than checking hover only.

## Report

List findings by severity with file and line references, affected users, and a concrete correction. Separate confirmed defects from items that require browser or assistive-technology verification.

If no issues are found, say so and state what was not tested.
