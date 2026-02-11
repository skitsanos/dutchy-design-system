# Tooltip

## Philosophy

Tooltips provide contextual hints on hover or focus without cluttering the interface. The Dutchy implementation is CSS-only—no JavaScript required. Sharp geometry, high-contrast background, and four directional positions keep the pattern consistent with the rest of the system.

## Basic Usage

Add `data-tooltip` to any element. The tooltip appears on `:hover` and `:focus`.

```html
<button data-tooltip="Save your changes" class="bg-primary text-primary-foreground px-4 py-2 font-bold uppercase tracking-wide">
  Save
</button>
```

## Position Variants

Control placement with `data-tooltip-position`. Default is `top`.

```html
<!-- Top (default) -->
<button data-tooltip="Top tooltip">Top</button>

<!-- Bottom -->
<button data-tooltip="Bottom tooltip" data-tooltip-position="bottom">Bottom</button>

<!-- Left -->
<button data-tooltip="Left tooltip" data-tooltip-position="left">Left</button>

<!-- Right -->
<button data-tooltip="Right tooltip" data-tooltip-position="right">Right</button>
```

## On Icons

```html
<button data-tooltip="Edit item" class="p-2 hover:text-primary">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
  </svg>
</button>
```

## On Abbreviations & Labels

```html
<p>
  Upload must be under
  <span data-tooltip="5 megabytes" class="underline decoration-dotted cursor-help">5 MB</span>
</p>

<label class="text-sm font-bold uppercase tracking-wide">
  Email
  <span data-tooltip="This field is required" class="text-destructive cursor-help">*</span>
</label>
```

## CSS Implementation

```css
[data-tooltip] {
  position: relative;
}
[data-tooltip]::before,
[data-tooltip]::after {
  position: absolute;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms ease;
  z-index: 50;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  background: hsl(var(--foreground));
  color: hsl(var(--background));
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  padding: 0.375rem 0.625rem;
  white-space: nowrap;
}
[data-tooltip]::before {
  content: '';
  border: 5px solid transparent;
}

/* Default: top */
[data-tooltip]::after { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
[data-tooltip]::before { bottom: calc(100% - 2px); left: 50%; transform: translateX(-50%); border-top-color: hsl(var(--foreground)); }

/* Bottom */
[data-tooltip-position="bottom"]::after { top: calc(100% + 8px); }
[data-tooltip-position="bottom"]::before { top: calc(100% - 2px); border-bottom-color: hsl(var(--foreground)); }

/* Left */
[data-tooltip-position="left"]::after { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
[data-tooltip-position="left"]::before { right: calc(100% - 2px); border-left-color: hsl(var(--foreground)); }

/* Right */
[data-tooltip-position="right"]::after { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
[data-tooltip-position="right"]::before { left: calc(100% - 2px); border-right-color: hsl(var(--foreground)); }

/* Show */
[data-tooltip]:hover::before,
[data-tooltip]:hover::after,
[data-tooltip]:focus::before,
[data-tooltip]:focus::after {
  opacity: 1;
}
```

## Accessibility

- Tooltips appear on both `:hover` and `:focus`, so keyboard users can trigger them.
- Add `tabindex="0"` to non-interactive elements (e.g. `<span>`) that carry tooltips.
- Keep tooltip text concise—one line maximum for readability.
- For essential information, use visible text instead of tooltips.
- Do not rely on tooltips for form validation messages; use inline errors.
