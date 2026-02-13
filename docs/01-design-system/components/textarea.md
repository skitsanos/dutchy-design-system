# Textarea

## Purpose

Textareas support longer input with the same Dutchy rules: sharp borders, strong focus states, and clear validation feedback.

## HTML Pattern

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider" for="message">Message</label>
  <textarea id="message" class="w-full border-2 border-border px-4 py-3 min-h-[120px] focus:border-foreground focus:outline-none resize-y"></textarea>
  <p class="text-muted-foreground text-sm">Keep it direct. No fluff.</p>
</div>
```

## Character Counting (JS-Enhanced)

Use `public/assets/js/textarea.js` to sync a visible counter via `data-textarea` hooks.

## JSX SSR (Bun)

Implementation: [`src/components/Textarea`](../../../src/components/Textarea/)

```tsx
import Textarea from '@/components/Textarea';

export default function Example() {
  return (
    <Textarea
      label="Message"
      placeholder="Write your message…"
      maxLength={280}
      showCount
      helpText="Keep it direct. No fluff."
    />
  );
}
```

## Accessibility

- Always pair a textarea with a `<label>` (the JSX component supports `label`).
- Provide error/help text adjacent to the control.
