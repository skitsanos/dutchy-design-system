# Progress

## Purpose

Progress bars communicate completion clearly using high-contrast fills and sharp geometry.

## HTML Pattern

```html
<div>
  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold uppercase tracking-wider">Uploading</span>
    <span class="text-xs text-muted-foreground font-mono">64%</span>
  </div>
  <div class="w-full bg-muted h-2" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100">
    <div class="h-full bg-primary" style="width: 64%"></div>
  </div>
</div>
```

## JSX SSR (Bun)

Implementation: [`src/components/Progress`](../../../src/components/Progress/)

```tsx
import Progress from '@/components/Progress';

export default function Example() {
  return (
    <Progress value={64} label="Uploading" showValue variant="primary" size="md" />
  );
}
```

## Accessibility

- Always provide `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` (the JSX component does this).
- If the progress is tied to a label, keep the label visible and concise.
