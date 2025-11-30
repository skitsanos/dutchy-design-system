# Spacing Tokens

## Philosophy

Spacing in the Dutchy Design System is generous and deliberate. We use a consistent scale to create rhythm and breathing room, while maintaining visual tension through strategic tight spacing.

## Spacing Scale

Based on a 4px base unit:

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `0` | 0 | 0px | Remove spacing |
| `0.5` | 0.125rem | 2px | Micro spacing |
| `1` | 0.25rem | 4px | Tight gaps |
| `2` | 0.5rem | 8px | Small padding |
| `3` | 0.75rem | 12px | Form inputs |
| `4` | 1rem | 16px | Standard gap |
| `5` | 1.25rem | 20px | Medium spacing |
| `6` | 1.5rem | 24px | Card padding |
| `8` | 2rem | 32px | Section gaps |
| `10` | 2.5rem | 40px | Large gaps |
| `12` | 3rem | 48px | Hero spacing |
| `16` | 4rem | 64px | Major sections |
| `20` | 5rem | 80px | Page sections |
| `24` | 6rem | 96px | Hero sections |

## Section Spacing

### Page Sections
```css
.section {
  padding-top: 5rem;      /* py-20 */
  padding-bottom: 5rem;
}
```

### Hero Sections
```css
.hero {
  padding-top: 4rem;      /* py-16 */
  padding-bottom: 6rem;   /* md:py-24 */
}
```

### Container
```css
.container {
  padding-left: 1rem;     /* px-4 */
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 1.5rem; /* md:px-6 */
    padding-right: 1.5rem;
  }
}
```

## Component Spacing

### Cards
```css
.card {
  padding: 2rem;          /* p-8 */
}

.card-compact {
  padding: 1.5rem;        /* p-6 */
}

.card-large {
  padding: 2.5rem;        /* p-10 */
}
```

### Buttons
```css
.button {
  padding: 0.5rem 2rem;   /* px-8 py-2 */
  height: 2.75rem;        /* h-11 */
}

.button-lg {
  padding: 0.75rem 2.5rem; /* px-10 py-3 */
  height: 3.5rem;          /* h-14 */
}
```

### Form Elements
```css
.input {
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  height: 3rem;            /* h-12 */
}
```

## Grid Gaps

### Tight Grid (with visible borders)
```css
.grid-tight {
  gap: 0.125rem;          /* gap-0.5 or gap-px */
  background: var(--border);
}

.grid-tight > * {
  background: var(--background);
}
```

### Standard Grid
```css
.grid-standard {
  gap: 1rem;              /* gap-4 */
}
```

### Loose Grid
```css
.grid-loose {
  gap: 1.5rem;            /* gap-6 */
}

.grid-looser {
  gap: 3rem;              /* gap-12 */
}
```

## Margin Patterns

### Section Title Margin
```css
.section-title {
  margin-bottom: 1rem;    /* mb-4 */
}

.section-title + .underline {
  margin-bottom: 4rem;    /* mb-16 */
}
```

### Paragraph Spacing
```css
.prose p {
  margin-bottom: 1.5rem;  /* mb-6 */
}
```

### List Item Spacing
```css
.list > li {
  margin-bottom: 0.75rem; /* space-y-3 */
}
```

## Layout Examples

### Hero Section
```html
<section class="py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
    </div>
  </div>
</section>
```

### Content Section
```html
<section class="py-20">
  <div class="container mx-auto px-4 md:px-6">
    <div class="mb-16">
      <h2 class="font-display text-5xl font-bold uppercase tracking-tighter mb-4">
        Section Title
      </h2>
      <div class="h-2 w-24 bg-primary"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Cards -->
    </div>
  </div>
</section>
```

### Tight Grid Pattern
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
  <div class="bg-background p-10">
    <!-- Card 1 -->
  </div>
  <div class="bg-background p-10">
    <!-- Card 2 -->
  </div>
  <div class="bg-background p-10">
    <!-- Card 3 -->
  </div>
  <div class="bg-background p-10">
    <!-- Card 4 -->
  </div>
</div>
```

## Responsive Spacing

### Mobile-First Approach
```html
<!-- Smaller on mobile, larger on desktop -->
<section class="py-12 md:py-20">
  <div class="container mx-auto px-4 md:px-6">
    <h2 class="text-4xl md:text-5xl mb-8 md:mb-16">
      Title
    </h2>
  </div>
</section>
```

### Breakpoint Scale

| Breakpoint | Multiplier | Example |
|------------|------------|---------|
| Mobile | 1x | `py-12` |
| Tablet (md) | 1.25x | `md:py-16` |
| Desktop (lg) | 1.5x | `lg:py-20` |

## Negative Space

Strategic use of empty space is crucial:

### Hero Empty Space
Large margins around hero content create focus.

### Card Breathing Room
Generous internal padding (p-8 to p-10) for readability.

### Grid White Space
Visible gaps between grid items create rhythm.

## Common Patterns

### Stats Block
```html
<div class="grid grid-cols-2 gap-4">
  <div class="p-6">
    <p class="text-4xl font-bold">50+</p>
    <p class="text-sm mt-2">Components</p>
  </div>
  <div class="p-6">
    <p class="text-4xl font-bold">100%</p>
    <p class="text-sm mt-2">Accessible</p>
  </div>
</div>
```

### Feature List
```html
<ul class="space-y-4">
  <li class="flex items-start gap-3">
    <span class="w-2 h-2 bg-primary mt-2 shrink-0"></span>
    <span>Feature description text</span>
  </li>
  <li class="flex items-start gap-3">
    <span class="w-2 h-2 bg-primary mt-2 shrink-0"></span>
    <span>Another feature</span>
  </li>
</ul>
```

### Icon + Text
```html
<div class="flex items-center gap-3">
  <div class="w-12 h-12 bg-primary flex items-center justify-center">
    <Icon class="text-primary-foreground" />
  </div>
  <div>
    <h4 class="font-bold">Title</h4>
    <p class="text-sm text-muted-foreground">Description</p>
  </div>
</div>
```
