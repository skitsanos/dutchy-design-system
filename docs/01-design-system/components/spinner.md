# Spinner

## Purpose

The Dutchy spinner is a minimal, square indicator that inherits the current text color.

## HTML Pattern

```html
<span class="dutchy-spinner inline-block w-4 h-4" role="status" aria-label="Loading"></span>
```

## JSX SSR (Bun)

Implementation: [`src/components/Spinner`](../../../src/components/Spinner/)

```tsx
import Spinner from '@/components/Spinner';

export default function Example() {
  return <Spinner size="md" className="text-primary" />;
}
```

## Notes

- Use alongside concise text (e.g. “Saving…”) for clarity.
- Prefer inline placement inside buttons (see `Button` loading state) for consistent UX.
