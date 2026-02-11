# Badges & Tags

## Philosophy

Badges are small, inline labels used for status indicators, categories, and metadata. In the Dutchy system they use monospace type, uppercase tracking, and bold weight for maximum legibility at small sizes. Zero border radius keeps them consistent with every other element.

## Variants

### Primary

```html
<span class="bg-primary text-primary-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">
  Primary
</span>
```

### Dark

```html
<span class="bg-foreground text-background px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">
  Dark
</span>
```

### Secondary

```html
<span class="bg-secondary text-secondary-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center border border-border">
  Secondary
</span>
```

### Muted

```html
<span class="bg-muted text-muted-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">
  Muted
</span>
```

### Destructive

```html
<span class="bg-destructive text-destructive-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">
  Destructive
</span>
```

### Success

```html
<span class="bg-success text-success-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">
  Success
</span>
```

### Outline

```html
<span class="border-2 border-primary text-primary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">
  Outline
</span>
```

## Closable Tags

Add a dismiss button inside the badge with `data-dismiss="badge"`. The parent must have `data-badge` so the JS knows what to remove. Use `pl-3 pr-1.5` for asymmetric padding that gives the close button breathing room.

```html
<span class="bg-primary text-primary-foreground pl-3 pr-1.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center gap-2" data-badge>
  Design
  <button class="hover:bg-primary-foreground/20 p-0.5 transition-colors" aria-label="Remove Design tag" data-dismiss="badge">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</span>
```

### Variant examples

```html
<!-- Dark closable -->
<span class="bg-foreground text-background pl-3 pr-1.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center gap-2" data-badge>
  Frontend
  <button class="hover:bg-background/20 p-0.5 transition-colors" aria-label="Remove Frontend tag" data-dismiss="badge">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</span>

<!-- Outline closable -->
<span class="border-2 border-primary text-primary pl-3 pr-1.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center gap-2" data-badge>
  Open Source
  <button class="hover:bg-primary/10 p-0.5 transition-colors" aria-label="Remove Open Source tag" data-dismiss="badge">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</span>
```

### JavaScript

```js
document.querySelectorAll('[data-dismiss="badge"]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('[data-badge]').remove();
  });
});
```

## Usage Patterns

### Status indicators

```html
<div class="flex items-center gap-2">
  <span class="bg-success text-success-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">Active</span>
  <span class="bg-destructive text-destructive-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">Expired</span>
  <span class="bg-muted text-muted-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">Draft</span>
</div>
```

### Inline with text

```html
<h3 class="font-display text-xl font-bold uppercase tracking-tighter flex items-center gap-3">
  API Reference
  <span class="bg-primary text-primary-foreground px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider leading-none">v2</span>
</h3>
```

### In a card header

```html
<div class="border-2 border-border p-6">
  <div class="flex items-center justify-between mb-4">
    <h4 class="font-bold uppercase text-sm tracking-wide">Order #1042</h4>
    <span class="bg-primary text-primary-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider leading-none inline-flex items-center">Shipped</span>
  </div>
  <p class="text-sm text-muted-foreground">Dispatched on 10 Feb 2025</p>
</div>
```

## CSS Implementation

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;
}

.badge-primary {
  background: hsl(25 95% 53%);
  color: hsl(0 0% 100%);
}

.badge-dark {
  background: hsl(25 20% 6%);
  color: hsl(40 30% 97%);
}

.badge-secondary {
  background: hsl(25 20% 92%);
  color: hsl(25 25% 15%);
  border: 1px solid hsl(25 20% 88%);
}

.badge-muted {
  background: hsl(40 20% 94%);
  color: hsl(25 15% 40%);
}

.badge-destructive {
  background: hsl(0 84% 60%);
  color: hsl(0 0% 100%);
}

.badge-success {
  background: hsl(142 76% 36%);
  color: hsl(0 0% 100%);
}

.badge-outline {
  background: transparent;
  border: 2px solid hsl(25 95% 53%);
  color: hsl(25 95% 53%);
}
```

## Accessibility

- Badges are decorative labels—do not use them as the sole means of conveying information.
- Pair status badges with descriptive text or `aria-label` when the color alone carries meaning.
- Ensure sufficient contrast between badge background and text (all variants above meet WCAG AA).
- Avoid relying only on color to differentiate badge types; the text content should be descriptive.
