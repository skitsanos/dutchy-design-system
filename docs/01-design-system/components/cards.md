# Cards

## Philosophy

Cards in the Dutchy Design System are bold containers with clear boundaries. They use sharp edges and accent borders to create visual hierarchy and grouping.

## Card Variants

### Standard Card

Basic card with border accent.

```html
<div class="border-l-4 border-primary bg-background p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Card Title</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Card description text that provides context and information.
  </p>
</div>
```

### Bordered Card

Full border for contained content.

```html
<div class="border-2 border-border bg-background p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Bordered Card</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Content with visible boundaries.
  </p>
</div>
```

### Muted Card

Subtle background distinction.

```html
<div class="bg-muted p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Muted Card</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Soft background for less prominent content.
  </p>
</div>
```

### Dark Card

High contrast inverted card.

```html
<div class="bg-foreground text-background p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Dark Card</h3>
  <p class="text-background/70 text-sm leading-relaxed">
    Bold statement card with inverted colors.
  </p>
</div>
```

### Primary Card

Brand-colored emphasis card.

```html
<div class="bg-primary text-primary-foreground p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Primary Card</h3>
  <p class="text-primary-foreground/80 text-sm leading-relaxed">
    Featured content with brand color.
  </p>
</div>
```

## Interactive Cards

### Hover Effect

```html
<div class="border-l-4 border-border hover:border-primary bg-background hover:bg-muted transition-all duration-150 p-8 cursor-pointer">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Hoverable Card</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Hover to see the interaction effect.
  </p>
</div>
```

### Clickable Card (Link)

```html
<a href="#" class="block border-l-4 border-border hover:border-primary bg-background hover:bg-muted transition-all duration-150 p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Clickable Card</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Entire card is a link.
  </p>
</a>
```

## Card Layouts

### Card with Header

```html
<div class="border-2 border-border">
  <div class="border-b-2 border-border px-6 py-4">
    <h3 class="font-display text-lg font-bold uppercase">Card Header</h3>
  </div>
  <div class="p-6">
    <p class="text-muted-foreground">
      Card content goes here with padding.
    </p>
  </div>
</div>
```

### Card with Footer

```html
<div class="border-2 border-border">
  <div class="p-6">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Card Title</h3>
    <p class="text-muted-foreground text-sm">
      Main card content.
    </p>
  </div>
  <div class="border-t-2 border-border px-6 py-4 bg-muted">
    <button class="text-sm font-bold uppercase tracking-wide text-primary">
      Action
    </button>
  </div>
</div>
```

### Card with Image

```html
<div class="border-2 border-border">
  <div class="aspect-video bg-muted">
    <img src="image.jpg" alt="Card image" class="w-full h-full object-cover" />
  </div>
  <div class="p-6">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Card with Image</h3>
    <p class="text-muted-foreground text-sm">
      Description below the image.
    </p>
  </div>
</div>
```

### Card with Badge

```html
<div class="border-l-4 border-primary bg-background p-8">
  <div class="flex items-start justify-between gap-4 mb-4">
    <h3 class="font-display text-xl font-bold uppercase">Card Title</h3>
    <span class="bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider shrink-0">
      New
    </span>
  </div>
  <p class="text-muted-foreground text-sm">
    Card with a status badge.
  </p>
</div>
```

## Card Grid Patterns

### Standard Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Card 1</h3>
    <p class="text-muted-foreground text-sm">Description text.</p>
  </div>
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Card 2</h3>
    <p class="text-muted-foreground text-sm">Description text.</p>
  </div>
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Card 3</h3>
    <p class="text-muted-foreground text-sm">Description text.</p>
  </div>
</div>
```

### Tight Grid (Dutchy Pattern)

Visible borders between cards.

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 1</h3>
    <p class="text-muted-foreground">Content for card one.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 2</h3>
    <p class="text-muted-foreground">Content for card two.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 3</h3>
    <p class="text-muted-foreground">Content for card three.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 4</h3>
    <p class="text-muted-foreground">Content for card four.</p>
  </div>
</div>
```

### Mixed Color Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
  <div class="bg-foreground text-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Dark Card</h3>
    <p class="text-background/70">Inverted content.</p>
  </div>
  <div class="bg-primary text-primary-foreground p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Primary Card</h3>
    <p class="text-primary-foreground/80">Brand color content.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Light Card</h3>
    <p class="text-muted-foreground">Standard content.</p>
  </div>
  <div class="bg-muted p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Muted Card</h3>
    <p class="text-muted-foreground">Subtle content.</p>
  </div>
</div>
```

## Specialized Cards

### Stats Card

```html
<div class="bg-foreground text-background p-8">
  <p class="font-display text-5xl font-bold mb-2">50+</p>
  <p class="text-background/60 text-sm uppercase tracking-wider">Components</p>
</div>
```

### Feature Card

```html
<div class="border-l-4 border-primary bg-background p-8">
  <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
    <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
  <h3 class="font-display text-xl font-bold uppercase mb-3">Feature Title</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Feature description with supporting details.
  </p>
</div>
```

### Testimonial Card

```html
<div class="border-l-4 border-primary bg-muted p-8">
  <blockquote class="text-lg leading-relaxed mb-6">
    "Quote text goes here with meaningful customer feedback."
  </blockquote>
  <footer class="flex items-center gap-4">
    <div class="w-12 h-12 bg-foreground"></div>
    <div>
      <p class="font-bold">Customer Name</p>
      <p class="text-sm text-muted-foreground">Company Title</p>
    </div>
  </footer>
</div>
```

### Pricing Card

```html
<div class="border-2 border-border p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-2">Pro Plan</h3>
  <p class="text-muted-foreground text-sm mb-6">For growing teams</p>

  <div class="mb-6">
    <span class="font-display text-5xl font-bold">$49</span>
    <span class="text-muted-foreground">/month</span>
  </div>

  <ul class="space-y-3 mb-8">
    <li class="flex items-center gap-3">
      <span class="w-2 h-2 bg-primary shrink-0"></span>
      <span class="text-sm">Feature one</span>
    </li>
    <li class="flex items-center gap-3">
      <span class="w-2 h-2 bg-primary shrink-0"></span>
      <span class="text-sm">Feature two</span>
    </li>
    <li class="flex items-center gap-3">
      <span class="w-2 h-2 bg-primary shrink-0"></span>
      <span class="text-sm">Feature three</span>
    </li>
  </ul>

  <button class="w-full bg-foreground text-background py-3 font-bold uppercase tracking-wide">
    Get Started
  </button>
</div>
```

## CSS Implementation

```css
/* Base card */
.card {
  background-color: hsl(var(--background));
  padding: 2rem;
}

/* Card variants */
.card-accent {
  border-left: 4px solid hsl(var(--primary));
}

.card-bordered {
  border: 2px solid hsl(var(--border));
}

.card-muted {
  background-color: hsl(var(--muted));
}

.card-dark {
  background-color: hsl(var(--foreground));
  color: hsl(var(--background));
}

.card-primary {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* Interactive card */
.card-interactive {
  cursor: pointer;
  transition: all 150ms ease-out;
}

.card-interactive:hover {
  border-color: hsl(var(--primary));
  background-color: hsl(var(--muted));
}

/* Card sizes */
.card-sm {
  padding: 1.5rem;
}

.card-lg {
  padding: 2.5rem;
}
```

## React Component Example

```tsx
import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'bordered' | 'muted' | 'dark' | 'primary';
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-8',
          {
            'bg-background': variant === 'default',
            'bg-background border-l-4 border-primary': variant === 'accent',
            'bg-background border-2 border-border': variant === 'bordered',
            'bg-muted': variant === 'muted',
            'bg-foreground text-background': variant === 'dark',
            'bg-primary text-primary-foreground': variant === 'primary',
          },
          interactive && 'cursor-pointer transition-all duration-150 hover:border-primary hover:bg-muted',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-display text-xl font-bold uppercase mb-3', className)}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-muted-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

export { Card, CardTitle, CardDescription };
```

## Accessibility

- Use semantic headings within cards
- Ensure interactive cards have proper focus states
- For clickable cards, wrap entire card in `<a>` or use `role="button"`
- Maintain color contrast ratios (4.5:1 for text)
