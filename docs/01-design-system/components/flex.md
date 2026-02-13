# Flex

## Purpose

Flex is a small layout primitive for arranging items with consistent gaps, alignment, and direction—without introducing one-off utility soup across templates.

## HTML Pattern

```html
<div class="flex items-center justify-between gap-4 border-2 border-border p-4">
  <span class="font-mono text-xs uppercase tracking-widest text-muted-foreground">Left</span>
  <span class="font-mono text-xs uppercase tracking-widest text-muted-foreground">Right</span>
</div>
```

## JSX SSR (Bun)

Implementation: [`src/components/Flex`](../../../src/components/Flex/)

```tsx
import Flex from '@/components/Flex';

export default function Example() {
  return (
    <Flex
      align="center"
      justify="between"
      gap={4}
      className="border-2 border-border p-4"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Left</span>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Right</span>
    </Flex>
  );
}
```

## Notes

- Prefer `gap` over manual margins for rhythm.
- Use borders as separators (2px standard, 4px/8px for emphasis).
