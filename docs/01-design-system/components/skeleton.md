# Skeleton Loader

## Philosophy

Skeleton loaders signal that content is on its way without jarring layout shifts. They mirror the final layout's shape, giving users a sense of structure before data arrives. In the Dutchy system, skeletons use a subtle pulse animation on sharp-edged blocks.

## Card Skeleton

```html
<div class="border-4 border-border p-6 space-y-4">
  <div class="h-4 w-3/4 bg-muted skeleton-pulse"></div>
  <div class="h-3 w-full bg-muted skeleton-pulse"></div>
  <div class="h-3 w-5/6 bg-muted skeleton-pulse"></div>
  <div class="h-10 w-32 bg-muted skeleton-pulse mt-4"></div>
</div>
```

## List Skeleton

```html
<div class="space-y-4">
  <div class="flex items-center gap-4 p-4 border-2 border-border">
    <div class="w-10 h-10 bg-muted skeleton-pulse shrink-0"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 w-1/3 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-2/3 bg-muted skeleton-pulse"></div>
    </div>
    <div class="h-8 w-20 bg-muted skeleton-pulse shrink-0"></div>
  </div>
  <div class="flex items-center gap-4 p-4 border-2 border-border">
    <div class="w-10 h-10 bg-muted skeleton-pulse shrink-0"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 w-1/4 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-1/2 bg-muted skeleton-pulse"></div>
    </div>
    <div class="h-8 w-20 bg-muted skeleton-pulse shrink-0"></div>
  </div>
  <div class="flex items-center gap-4 p-4 border-2 border-border">
    <div class="w-10 h-10 bg-muted skeleton-pulse shrink-0"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 w-2/5 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-3/5 bg-muted skeleton-pulse"></div>
    </div>
    <div class="h-8 w-20 bg-muted skeleton-pulse shrink-0"></div>
  </div>
</div>
```

## Content Skeleton

```html
<div class="space-y-6">
  <div class="h-8 w-1/2 bg-muted skeleton-pulse"></div>
  <div class="space-y-3">
    <div class="h-3 w-full bg-muted skeleton-pulse"></div>
    <div class="h-3 w-full bg-muted skeleton-pulse"></div>
    <div class="h-3 w-4/5 bg-muted skeleton-pulse"></div>
  </div>
  <div class="h-48 w-full bg-muted skeleton-pulse"></div>
  <div class="space-y-3">
    <div class="h-3 w-full bg-muted skeleton-pulse"></div>
    <div class="h-3 w-3/4 bg-muted skeleton-pulse"></div>
  </div>
</div>
```

## Table Skeleton

```html
<div class="border-2 border-border">
  <div class="grid grid-cols-4 gap-4 px-6 py-3 bg-muted border-b-2 border-border">
    <div class="h-3 w-16 bg-muted-foreground/20 skeleton-pulse"></div>
    <div class="h-3 w-12 bg-muted-foreground/20 skeleton-pulse"></div>
    <div class="h-3 w-14 bg-muted-foreground/20 skeleton-pulse"></div>
    <div class="h-3 w-16 bg-muted-foreground/20 skeleton-pulse"></div>
  </div>
  <div class="divide-y divide-border">
    <div class="grid grid-cols-4 gap-4 px-6 py-4">
      <div class="h-3 w-24 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-16 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-20 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-12 bg-muted skeleton-pulse"></div>
    </div>
    <div class="grid grid-cols-4 gap-4 px-6 py-4">
      <div class="h-3 w-20 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-14 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-24 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-16 bg-muted skeleton-pulse"></div>
    </div>
    <div class="grid grid-cols-4 gap-4 px-6 py-4">
      <div class="h-3 w-28 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-12 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-16 bg-muted skeleton-pulse"></div>
      <div class="h-3 w-20 bg-muted skeleton-pulse"></div>
    </div>
  </div>
</div>
```

## CSS Implementation

```css
@keyframes dutchy-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.skeleton-pulse {
  animation: dutchy-pulse 1.5s ease-in-out infinite;
}

.skeleton-block {
  background-color: hsl(var(--muted));
  animation: dutchy-pulse 1.5s ease-in-out infinite;
}
```

## React Component Example

```tsx
function Skeleton({ className, ...props }) {
  return (
    <div
      className={`bg-muted skeleton-pulse ${className}`}
      {...props}
    />
  );
}

// Usage
function CardSkeleton() {
  return (
    <div className="border-4 border-border p-6 space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-10 w-32 mt-4" />
    </div>
  );
}
```

## Accessibility

- Use `aria-busy="true"` on the container while content is loading.
- Use `aria-label="Loading"` or `role="progressbar"` for screen reader feedback.
- Avoid skeleton animations that are too fast — keep the pulse at 1.5s+ for comfort.
- Ensure skeletons match the dimensions of the final content to prevent layout shifts.
- Provide a visually hidden "Loading..." text alternative for assistive technologies.

## Best Practices

- Match skeleton shapes closely to the final rendered content for seamless transitions.
- Use staggered animation delays across rows to create a natural loading feel.
- Keep skeleton colors subtle — they should indicate shape, not draw attention.
- Prefer skeletons over spinners for content-heavy layouts.
