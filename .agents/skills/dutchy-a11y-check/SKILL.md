---
name: dutchy-a11y-check
description: Audit Dutchy Design System pages for accessibility issues. Use when reviewing accessibility compliance, after generating pages with dutchy-designer, or when the user asks to check a11y, accessibility, WCAG, or screen reader readiness in a Dutchy SSR project.
---

# Dutchy A11y Check

Scan Bun SSR route pages for accessibility violations following WCAG 2.1 AA guidelines, with awareness of Dutchy Design System components and token-based theming.

## Step 1: Discover Project Structure

1. Glob `src/components/*/index.tsx` to understand which components exist and what ARIA patterns they already implement internally.
2. Read the Layout component (`src/components/Layout/index.tsx` or equivalent) to check for `lang` attribute, viewport meta, and global landmarks.
3. Glob `src/routes/**/*.tsx` to find all content pages. Skip API-only handlers (files exporting only HTTP method functions returning `Response`/JSON).

## Step 2: Scan Each Page

For each content page route, check the following categories:

### Images and Media

- Every `<Image` or `<img` must have an `alt` attribute. Decorative images must use `alt=""`.
- `<svg` elements used as icons should have `aria-hidden="true"` or a `<title>` child.
- Embedded media (`<video`, `<audio`) should have text alternatives or captions.

### Forms and Inputs

- Every `<Input`, `<Select`, `<Textarea`, `<Checkbox`, `<Radio` (or raw equivalents) must have an associated label — either via `<label htmlFor="...">`, wrapping `<label>`, or `aria-label`/`aria-labelledby`.
- `<Form` or `<form` should have an accessible name (`aria-label` or `aria-labelledby`, or a heading immediately before/inside).
- Required fields should indicate their required state (via `required` attribute or `aria-required="true"`).
- Error messages should be associated with their field via `aria-describedby`.

### Heading Structure

- Exactly one `<h1` per page (may come from the Layout).
- Headings must not skip levels (e.g., `<h2` followed by `<h4` without an `<h3` in between).
- Headings should be meaningful, not empty or whitespace-only.

### Landmarks and Semantics

- Page should have `<main` (or `role="main"`) wrapping primary content.
- Navigation areas should use `<nav` (or `role="navigation"`).
- If multiple `<nav` elements exist, each should have a distinct `aria-label`.
- Footer content should use `<footer` or equivalent.
- Avoid using `<div` or `<span` for interactive elements — use semantic elements or appropriate ARIA roles.

### Interactive Elements

- All clickable elements must be keyboard accessible (`<button`, `<a href`, or elements with `tabIndex` and key handlers).
- `<a` tags must have an `href` attribute (not just an `onClick` handler). Links with `href="#"` or `href="javascript:void(0)"` are violations.
- Interactive elements must have visible focus styles (Dutchy uses strong border-based focus — verify `focus:` or `focus-visible:` classes exist).
- Modals/dialogs should trap focus when open and return focus to trigger on close (check the JS handler).
- Dropdown menus should support Escape to close.

### Color and Contrast

- Text should not use color alone to convey meaning (e.g., error states need more than just red text — add an icon or prefix).
- Verify that text colors from design tokens meet 4.5:1 contrast ratio for normal text and 3:1 for large text against their background. Check the token definitions in `src/styles/input.css` or `tailwind.config.js`.
- Interactive states (hover, focus, disabled) should maintain sufficient contrast.

### ARIA Usage

- `aria-*` attributes should be used correctly (e.g., `aria-expanded` on toggle triggers, `aria-hidden` on decorative elements, `aria-live` for dynamic content regions).
- No redundant ARIA (e.g., `role="button"` on a `<button` element).
- `aria-label` values should be descriptive, not empty strings.

### Tables

- `<DataTable` or `<table` must have a caption or `aria-label`.
- Table headers should use `<th` with appropriate `scope`.

## Step 3: Check Layout-Level Concerns

Read the Layout component separately for issues that affect all pages:

- `<html` should have `lang` attribute.
- Viewport meta should not disable user scaling (`user-scalable=no` or `maximum-scale=1` are violations).
- Theme switching mechanism should not break contrast in any theme (check all theme variants: default, purple, crimson, dark).

## Report Format

```
## Dutchy Accessibility Audit

### Layout (affects all pages)
- [PASS/FAIL] `lang` attribute on <html>
- [PASS/FAIL] Viewport meta allows user scaling
- [WARN] Theme "<name>" may have contrast issues: <details>

### <route file path>

**Images:**
- Line <N>: `<Image>` missing `alt` attribute

**Forms:**
- Line <N>: `<Input>` has no associated label

**Headings:**
- Line <N>: heading level skips from h2 to h4

**Landmarks:**
- No `<main>` wrapper found

**Interactive:**
- Line <N>: `<a>` with `href="#"` — use a `<button>` or real URL

**Contrast:**
- `text-muted-foreground` on `bg-background` may not meet 4.5:1 ratio in dark theme

**ARIA:**
- Line <N>: `role="button"` on `<button>` is redundant

### <next file>
...

### Summary
- Pages scanned: <N>
- Pages with issues: <N>
- Critical (FAIL): <N>
- Warnings (WARN): <N>
```

If no issues found: "All scanned pages pass accessibility checks."

## Severity Levels

- **FAIL**: WCAG 2.1 AA violation that blocks users (missing labels, no keyboard access, broken heading hierarchy, missing alt text, no lang attribute).
- **WARN**: Best-practice issue or potential problem that depends on context (possible contrast issue in a specific theme, redundant ARIA, missing skip link).
