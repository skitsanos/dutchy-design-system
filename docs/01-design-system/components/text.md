# Text

## Purpose

Text is the typography primitive for consistent font family, scale, tracking, leading, and color—aligned to Dutchy’s bold hierarchy.

## HTML Patterns

### Section Title

```html
<h2 class="font-display text-5xl font-bold uppercase tracking-tighter leading-[0.9]">
  Bold Section
</h2>
```

### Label

```html
<p class="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
  Label
</p>
```

## JSX SSR (Bun)

Implementation: [`src/components/Text`](../../../src/components/Text/)

```tsx
import Text from '@/components/Text';

export default function Example() {
  return (
    <>
      <Text as="h2" family="display" size="5xl" weight="bold" uppercase tracking="tighter" leading="tight">
        Bold Section
      </Text>
      <Text family="mono" size="xs" weight="bold" uppercase tracking="widest" color="muted">
        Label
      </Text>
    </>
  );
}
```

## Notes

- Use `font-display` + uppercase for headings; `font-mono` for labels and metadata.
- Keep contrast high; avoid muted text for critical information.
