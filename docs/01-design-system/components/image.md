# Image

## Purpose

Images are content blocks with sharp borders, optional captions, and an optional expand-to-fullscreen affordance.

## HTML Pattern (With Caption)

```html
<figure>
  <img src="/assets/images/example.jpg" alt="Example" class="w-full h-auto border-2 border-border" loading="lazy" />
  <figcaption class="mt-3 flex items-center justify-between">
    <span class="text-sm text-muted-foreground">Caption text</span>
    <span class="font-mono text-xs text-muted-foreground uppercase tracking-wider">Source</span>
  </figcaption>
</figure>
```

## Expandable Images (JS-Enhanced)

If you enable expansion, load:

- `public/assets/js/image-expand.js`

The JSX component renders `data-image` and `data-expand` hooks for the script.

## JSX SSR (Bun)

Implementation: [`src/components/Image`](../../../src/components/Image/)

```tsx
import Image from '@/components/Image';
import Layout from '@/components/Layout';

export default function Example() {
  return (
    <Layout title="Image" scripts={['/assets/js/image-expand.js']}>
      <main className="p-8 space-y-8">
        <Image
          src="/assets/images/example.jpg"
          alt="Example"
          caption="A sharp, bordered image."
          captionSource="Dutchy"
          expandable
        />
      </main>
    </Layout>
  );
}
```

## Accessibility

- Always provide meaningful `alt` text.
- Expansion controls must have an `aria-label` (the JSX component includes one).
