# Hero Patterns

## Philosophy

Heroes in the Dutchy Design System make bold statements. Large typography, strong visual anchors, and clear calls-to-action establish page hierarchy immediately.

## Hero Variants

### Split Hero

Two-column layout with text and visual.

```html
<section class="py-16 md:py-24 border-b-8 border-primary">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
          Tagline
        </p>
        <h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
          Hero
          <br />
          <span class="text-primary">Title.</span>
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
          A compelling description that explains what this page or product is about. Keep it concise and impactful.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors">
            Primary Action
          </a>
          <a href="#" class="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
            Secondary Action
          </a>
        </div>
      </div>

      <!-- Visual -->
      <div class="aspect-square bg-muted relative">
        <img src="hero-image.jpg" alt="Hero visual" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>
```

### Centered Hero

Full-width centered content.

```html
<section class="py-20 md:py-32 border-b-8 border-primary">
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-4xl mx-auto text-center">
      <p class="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
        Tagline
      </p>
      <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tighter mb-8">
        Bold Hero<br /><span class="text-primary">Statement.</span>
      </h1>
      <p class="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
        A compelling description that explains what this page or product is about.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="#" class="bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors">
          Get Started
        </a>
        <a href="#" class="border-2 border-foreground px-10 py-4 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
```

### Dark Hero

Inverted colors for dramatic impact.

```html
<section class="py-20 md:py-32 bg-foreground text-background border-b-8 border-primary">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
          Tagline
        </p>
        <h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
          Dark
          <br />
          <span class="text-primary">Hero.</span>
        </h1>
        <p class="text-xl text-background/70 leading-relaxed mb-8 max-w-lg">
          High contrast hero for maximum visual impact.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
            Primary Action
          </a>
          <a href="#" class="border-2 border-background text-background px-8 py-3 font-bold uppercase tracking-wide hover:bg-background hover:text-foreground transition-colors">
            Secondary Action
          </a>
        </div>
      </div>
      <div class="aspect-square bg-background/10">
        <!-- Visual -->
      </div>
    </div>
  </div>
</section>
```

### Hero with Stats

Hero section with key metrics.

```html
<section class="py-16 md:py-24 border-b-8 border-primary">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
          Stats
          <br />
          <span class="text-primary">Hero.</span>
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed max-w-lg">
          Showcase your achievements with key metrics.
        </p>
      </div>
      <div>
        <a href="#" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide inline-block">
          Get Started
        </a>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-border">
      <div class="bg-background p-8">
        <p class="font-display text-4xl md:text-5xl font-bold mb-2">50+</p>
        <p class="text-sm text-muted-foreground uppercase tracking-wider">Components</p>
      </div>
      <div class="bg-background p-8">
        <p class="font-display text-4xl md:text-5xl font-bold mb-2">6</p>
        <p class="text-sm text-muted-foreground uppercase tracking-wider">Categories</p>
      </div>
      <div class="bg-background p-8">
        <p class="font-display text-4xl md:text-5xl font-bold mb-2">100%</p>
        <p class="text-sm text-muted-foreground uppercase tracking-wider">Accessible</p>
      </div>
      <div class="bg-background p-8">
        <p class="font-display text-4xl md:text-5xl font-bold mb-2">MIT</p>
        <p class="text-sm text-muted-foreground uppercase tracking-wider">Licensed</p>
      </div>
    </div>
  </div>
</section>
```

### Minimal Hero

Clean, typography-focused hero.

```html
<section class="py-20 md:py-32">
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-3xl">
      <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
        Minimal Hero Title<span class="text-primary">.</span>
      </h1>
      <p class="text-xl text-muted-foreground leading-relaxed mb-8">
        Sometimes less is more. Let the typography speak for itself.
      </p>
      <a href="#" class="text-foreground font-bold uppercase tracking-wide inline-flex items-center gap-2 hover:text-primary transition-colors">
        Learn More
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
```

### Hero with Background Image

Full-width background visual.

```html
<section class="relative py-32 md:py-48 border-b-8 border-primary">
  <!-- Background -->
  <div class="absolute inset-0 bg-foreground">
    <img src="hero-bg.jpg" alt="" class="w-full h-full object-cover opacity-30" />
  </div>

  <!-- Content -->
  <div class="relative container mx-auto px-4 md:px-6">
    <div class="max-w-3xl text-background">
      <p class="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
        Tagline
      </p>
      <h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
        Background
        <br />
        <span class="text-primary">Hero.</span>
      </h1>
      <p class="text-xl text-background/80 leading-relaxed mb-8">
        Content overlaid on a dramatic background image.
      </p>
      <a href="#" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide inline-block">
        Get Started
      </a>
    </div>
  </div>
</section>
```

### Product Hero

Hero for product or feature pages.

```html
<section class="py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Product Image -->
      <div class="order-2 lg:order-1">
        <div class="aspect-[4/3] bg-muted border-4 border-border">
          <img src="product.jpg" alt="Product" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Product Info -->
      <div class="order-1 lg:order-2">
        <span class="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
          New Release
        </span>
        <h1 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
          Product Name
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed mb-6">
          Detailed product description explaining features and benefits.
        </p>
        <p class="font-display text-4xl font-bold mb-8">$99</p>
        <div class="flex flex-wrap gap-4">
          <button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
            Add to Cart
          </button>
          <button class="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Hero Elements

### Tagline

```html
<p class="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
  Your Tagline Here
</p>
```

### Main Heading

```html
<h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
  Main<br /><span class="text-primary">Heading.</span>
</h1>
```

### Description

```html
<p class="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
  Description text that provides context and encourages action.
</p>
```

### CTA Buttons

```html
<div class="flex flex-wrap gap-4">
  <a href="#" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
    Primary CTA
  </a>
  <a href="#" class="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide">
    Secondary CTA
  </a>
</div>
```

## Responsive Considerations

```html
<!-- Responsive hero heading -->
<h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
  Responsive Heading
</h1>

<!-- Responsive hero padding -->
<section class="py-12 sm:py-16 md:py-20 lg:py-24">
  <!-- Content -->
</section>

<!-- Stack to side-by-side -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
  <!-- Content -->
</div>
```

## CSS Variables

```css
.hero {
  padding-top: 4rem;
  padding-bottom: 6rem;
  border-bottom: 8px solid hsl(var(--primary));
}

@media (min-width: 768px) {
  .hero {
    padding-top: 6rem;
    padding-bottom: 8rem;
  }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.9;
}
```
