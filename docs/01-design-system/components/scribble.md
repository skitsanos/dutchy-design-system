# Scribble

## Purpose

Scribble is a canvas-based signature pad (or freehand sketch) component. It renders a canvas + controls on the server, and uses vanilla JS for drawing and export.

## JS Requirement

Include the client-side module:

- `public/assets/js/scribble.js`

The JSX component renders the required `data-*` hooks.

## JSX SSR (Bun)

Implementation: [`src/components/Scribble`](../../../src/components/Scribble/)

```tsx
import Scribble from '@/components/Scribble';
import Layout from '@/components/Layout';

export default function Example() {
  return (
    <Layout title="Scribble" scripts={['/assets/js/scribble.js']}>
      <main className="p-8">
        <Scribble name="signature" label="Signature" showPreview />
      </main>
    </Layout>
  );
}
```

## Notes

- Prefer a clear border and visible “clear” action (already included).
- Store output as a hidden input value (`name`) for form submissions.
