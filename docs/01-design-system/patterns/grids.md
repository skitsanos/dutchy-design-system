# Grid Patterns

## Philosophy

Grids in the Dutchy Design System are structured and intentional. The signature "tight grid" pattern uses visible borders between elements to create strong visual rhythm.

## Tight Grid (Signature Pattern)

The most distinctive Dutchy grid pattern—visible gaps that reveal the grid structure.

### Basic Tight Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 1</h3>
    <p class="text-muted-foreground">Content description.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 2</h3>
    <p class="text-muted-foreground">Content description.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 3</h3>
    <p class="text-muted-foreground">Content description.</p>
  </div>
  <div class="bg-background p-10">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Card 4</h3>
    <p class="text-muted-foreground">Content description.</p>
  </div>
</div>
```

### Three Column Tight Grid

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border">
  <div class="bg-background p-8">Item 1</div>
  <div class="bg-background p-8">Item 2</div>
  <div class="bg-background p-8">Item 3</div>
  <div class="bg-background p-8">Item 4</div>
  <div class="bg-background p-8">Item 5</div>
  <div class="bg-background p-8">Item 6</div>
</div>
```

### Mixed Color Tight Grid

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

## Standard Grids

### Two Column Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Item 1</h3>
    <p class="text-muted-foreground">Description text.</p>
  </div>
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Item 2</h3>
    <p class="text-muted-foreground">Description text.</p>
  </div>
</div>
```

### Three Column Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Item 1</h3>
    <p class="text-muted-foreground">Description text.</p>
  </div>
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Item 2</h3>
    <p class="text-muted-foreground">Description text.</p>
  </div>
  <div class="border-l-4 border-primary p-8">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Item 3</h3>
    <p class="text-muted-foreground">Description text.</p>
  </div>
</div>
```

### Four Column Grid

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="p-6">Item 1</div>
  <div class="p-6">Item 2</div>
  <div class="p-6">Item 3</div>
  <div class="p-6">Item 4</div>
</div>
```

## Asymmetric Grids

### Two-Thirds / One-Third

```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div class="lg:col-span-2 p-8 bg-muted">
    <h3 class="font-display text-2xl font-bold uppercase mb-4">Main Content</h3>
    <p class="text-muted-foreground">Primary content area taking up 2/3 of the space.</p>
  </div>
  <div class="p-8 border-l-4 border-primary">
    <h3 class="font-display text-xl font-bold uppercase mb-3">Sidebar</h3>
    <p class="text-muted-foreground">Secondary content.</p>
  </div>
</div>
```

### Sidebar Layout

```html
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <div class="p-6 border-r-2 border-border">
    <nav class="space-y-2">
      <a href="#" class="block py-2 font-bold uppercase text-sm">Link 1</a>
      <a href="#" class="block py-2 font-bold uppercase text-sm">Link 2</a>
      <a href="#" class="block py-2 font-bold uppercase text-sm">Link 3</a>
    </nav>
  </div>
  <div class="lg:col-span-3 p-8">
    <h2 class="font-display text-3xl font-bold uppercase mb-6">Main Content</h2>
    <p>Content here.</p>
  </div>
</div>
```

## Feature Grids

### Feature Cards Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="border-l-4 border-primary bg-background p-8">
    <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
      <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 class="font-display text-xl font-bold uppercase mb-3">Feature One</h3>
    <p class="text-muted-foreground text-sm">Description of the first feature.</p>
  </div>

  <div class="border-l-4 border-primary bg-background p-8">
    <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
      <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <h3 class="font-display text-xl font-bold uppercase mb-3">Feature Two</h3>
    <p class="text-muted-foreground text-sm">Description of the second feature.</p>
  </div>

  <div class="border-l-4 border-primary bg-background p-8">
    <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
      <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    </div>
    <h3 class="font-display text-xl font-bold uppercase mb-3">Feature Three</h3>
    <p class="text-muted-foreground text-sm">Description of the third feature.</p>
  </div>
</div>
```

## Stats Grids

### Horizontal Stats

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-border">
  <div class="bg-foreground text-background p-8">
    <p class="font-display text-4xl font-bold mb-2">50+</p>
    <p class="text-background/60 text-sm uppercase tracking-wider">Components</p>
  </div>
  <div class="bg-foreground text-background p-8">
    <p class="font-display text-4xl font-bold mb-2">6</p>
    <p class="text-background/60 text-sm uppercase tracking-wider">Categories</p>
  </div>
  <div class="bg-foreground text-background p-8">
    <p class="font-display text-4xl font-bold mb-2">100%</p>
    <p class="text-background/60 text-sm uppercase tracking-wider">Accessible</p>
  </div>
  <div class="bg-foreground text-background p-8">
    <p class="font-display text-4xl font-bold mb-2">MIT</p>
    <p class="text-background/60 text-sm uppercase tracking-wider">Licensed</p>
  </div>
</div>
```

### Two Column Stats

```html
<div class="grid grid-cols-2 gap-4">
  <div class="bg-muted p-6">
    <p class="font-display text-5xl font-bold mb-2">99%</p>
    <p class="text-sm text-muted-foreground">Uptime</p>
  </div>
  <div class="bg-muted p-6">
    <p class="font-display text-5xl font-bold mb-2">24/7</p>
    <p class="text-sm text-muted-foreground">Support</p>
  </div>
</div>
```

## Image Grids

### Gallery Grid

```html
<div class="grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-border">
  <div class="aspect-square bg-muted">
    <img src="image1.jpg" alt="Gallery image 1" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="image2.jpg" alt="Gallery image 2" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="image3.jpg" alt="Gallery image 3" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="image4.jpg" alt="Gallery image 4" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="image5.jpg" alt="Gallery image 5" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="image6.jpg" alt="Gallery image 6" class="w-full h-full object-cover" />
  </div>
</div>
```

### Masonry-like Grid

```html
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div class="row-span-2 aspect-[3/4] bg-muted">
    <img src="tall.jpg" alt="" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="square1.jpg" alt="" class="w-full h-full object-cover" />
  </div>
  <div class="aspect-square bg-muted">
    <img src="square2.jpg" alt="" class="w-full h-full object-cover" />
  </div>
  <div class="col-span-2 aspect-[2/1] bg-muted">
    <img src="wide.jpg" alt="" class="w-full h-full object-cover" />
  </div>
</div>
```

## Auto-fit Grids

### Responsive Card Grid

```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
  <div class="border-l-4 border-primary p-8">Card 1</div>
  <div class="border-l-4 border-primary p-8">Card 2</div>
  <div class="border-l-4 border-primary p-8">Card 3</div>
  <div class="border-l-4 border-primary p-8">Card 4</div>
  <div class="border-l-4 border-primary p-8">Card 5</div>
</div>
```

### Tight Auto-fit Grid

```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-0.5 bg-border">
  <div class="bg-background p-8">Item 1</div>
  <div class="bg-background p-8">Item 2</div>
  <div class="bg-background p-8">Item 3</div>
  <div class="bg-background p-8">Item 4</div>
</div>
```

## Grid with Section Title

```html
<section class="py-20">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Section Title -->
    <div class="mb-16">
      <h2 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
        Our Features
      </h2>
      <div class="h-2 w-24 bg-primary"></div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="border-l-4 border-primary p-8">
        <h3 class="font-display text-xl font-bold uppercase mb-3">Feature 1</h3>
        <p class="text-muted-foreground text-sm">Description.</p>
      </div>
      <div class="border-l-4 border-primary p-8">
        <h3 class="font-display text-xl font-bold uppercase mb-3">Feature 2</h3>
        <p class="text-muted-foreground text-sm">Description.</p>
      </div>
      <div class="border-l-4 border-primary p-8">
        <h3 class="font-display text-xl font-bold uppercase mb-3">Feature 3</h3>
        <p class="text-muted-foreground text-sm">Description.</p>
      </div>
    </div>
  </div>
</section>
```

## CSS Implementation

```css
/* Tight grid pattern */
.grid-tight {
  display: grid;
  gap: 2px;
  background-color: hsl(var(--border));
}

.grid-tight > * {
  background-color: hsl(var(--background));
}

/* Standard gap sizes */
.gap-tight { gap: 0.5rem; }
.gap-standard { gap: 1.5rem; }
.gap-loose { gap: 3rem; }

/* Grid item padding */
.grid-item {
  padding: 2rem;
}

.grid-item-lg {
  padding: 2.5rem;
}
```
