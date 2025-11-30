# Layout

## Philosophy

Layout in the Dutchy Design System is structured and deliberate. We use consistent containers, clear visual boundaries, and purposeful spacing to create organized, scannable interfaces.

## Container

### Standard Container

```html
<div class="container mx-auto px-4 md:px-6">
  <!-- Content -->
</div>
```

### Container Widths

| Size | Max Width | Usage |
|------|-----------|-------|
| `max-w-sm` | 384px | Modal dialogs |
| `max-w-md` | 448px | Forms, small content |
| `max-w-lg` | 512px | Medium content |
| `max-w-xl` | 576px | Articles |
| `max-w-2xl` | 672px | Blog posts |
| `max-w-4xl` | 896px | Wide content |
| `max-w-6xl` | 1152px | Full layouts |
| `max-w-7xl` | 1280px | Maximum width |

```html
<!-- Narrow content -->
<div class="max-w-2xl mx-auto px-4">
  <article>Content</article>
</div>

<!-- Wide content -->
<div class="max-w-6xl mx-auto px-4">
  <div class="grid">Content</div>
</div>
```

## Grid System

### Basic Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Two Column Layout

```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div>Left column</div>
  <div>Right column</div>
</div>
```

### Asymmetric Grid

```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div class="lg:col-span-2">
    Main content (2/3)
  </div>
  <div>
    Sidebar (1/3)
  </div>
</div>
```

### Tight Grid (Dutchy Pattern)

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
  <div class="bg-background p-10">Item 1</div>
  <div class="bg-background p-10">Item 2</div>
  <div class="bg-background p-10">Item 3</div>
  <div class="bg-background p-10">Item 4</div>
</div>
```

### Auto-fit Grid

```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
```

## Sections

### Standard Section

```html
<section class="py-20">
  <div class="container mx-auto px-4 md:px-6">
    <div class="mb-16">
      <h2 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
        Section Title
      </h2>
      <div class="h-2 w-24 bg-primary"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Content -->
    </div>
  </div>
</section>
```

### Hero Section

```html
<section class="py-16 md:py-24 border-b-8 border-primary">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
          Hero
          <br />
          <span class="text-primary">Title.</span>
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
          Hero description text that introduces the page.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
            Primary CTA
          </a>
          <a href="#" class="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide">
            Secondary CTA
          </a>
        </div>
      </div>
      <div class="aspect-square bg-muted">
        <!-- Image or visual -->
      </div>
    </div>
  </div>
</section>
```

### Alternating Sections

```html
<!-- Light Section -->
<section class="py-20 bg-background">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Content -->
  </div>
</section>

<!-- Dark Section -->
<section class="py-20 bg-foreground text-background">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Content -->
  </div>
</section>

<!-- Primary Section -->
<section class="py-20 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Content -->
  </div>
</section>

<!-- Muted Section -->
<section class="py-20 bg-muted">
  <div class="container mx-auto px-4 md:px-6">
    <!-- Content -->
  </div>
</section>
```

## Page Layouts

### Single Column Layout

```html
<main class="min-h-screen">
  <div class="container mx-auto px-4 md:px-6 py-12">
    <div class="max-w-2xl mx-auto">
      <!-- Content -->
    </div>
  </div>
</main>
```

### Sidebar Layout

```html
<div class="flex min-h-screen">
  <!-- Sidebar -->
  <aside class="w-64 border-r-2 border-border shrink-0 hidden lg:block">
    <nav class="p-6">
      <!-- Navigation -->
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="flex-1">
    <div class="p-6 lg:p-12">
      <!-- Content -->
    </div>
  </main>
</div>
```

### Dashboard Layout

```html
<div class="min-h-screen bg-muted">
  <!-- Header -->
  <header class="bg-foreground text-background border-b-4 border-primary">
    <div class="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
      <!-- Header content -->
    </div>
  </header>

  <div class="flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-background border-r-2 border-border min-h-[calc(100vh-4rem)] hidden lg:block">
      <nav class="p-6">
        <!-- Navigation -->
      </nav>
    </aside>

    <!-- Main -->
    <main class="flex-1 p-6 lg:p-12">
      <!-- Dashboard content -->
    </main>
  </div>
</div>
```

### Split Layout

```html
<div class="min-h-screen grid lg:grid-cols-2">
  <!-- Left Panel -->
  <div class="bg-foreground text-background flex items-center justify-center p-12">
    <div class="max-w-md">
      <h1 class="font-display text-5xl font-bold uppercase tracking-tighter mb-6">
        Brand<span class="text-primary">.</span>
      </h1>
      <p class="text-background/70 text-lg">
        Brand tagline or description.
      </p>
    </div>
  </div>

  <!-- Right Panel -->
  <div class="flex items-center justify-center p-12">
    <div class="w-full max-w-md">
      <!-- Form or content -->
    </div>
  </div>
</div>
```

## Flexbox Patterns

### Centered Content

```html
<div class="flex items-center justify-center min-h-screen">
  <div class="text-center">
    <!-- Content -->
  </div>
</div>
```

### Space Between

```html
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Vertical Stack

```html
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Horizontal Stack

```html
<div class="flex items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Spacing Patterns

### Section Padding

```css
/* Mobile */
.section {
  padding-top: 3rem;     /* py-12 */
  padding-bottom: 3rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .section {
    padding-top: 5rem;   /* md:py-20 */
    padding-bottom: 5rem;
  }
}
```

### Content Margins

```html
<!-- Title with underline -->
<div class="mb-16">
  <h2 class="font-display text-5xl font-bold uppercase tracking-tighter mb-4">
    Title
  </h2>
  <div class="h-2 w-24 bg-primary"></div>
</div>

<!-- Card spacing -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Cards -->
</div>
```

## Responsive Patterns

### Hide/Show

```html
<!-- Hide on mobile -->
<div class="hidden md:block">
  Desktop only
</div>

<!-- Hide on desktop -->
<div class="md:hidden">
  Mobile only
</div>
```

### Responsive Grid

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <!-- Items -->
</div>
```

### Responsive Text

```html
<h1 class="text-4xl md:text-5xl lg:text-7xl">
  Responsive Heading
</h1>
```

### Responsive Padding

```html
<section class="py-12 md:py-16 lg:py-20">
  <div class="px-4 md:px-6 lg:px-8">
    <!-- Content -->
  </div>
</section>
```

## CSS Implementation

```css
/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Section */
.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Section title */
.section-title {
  margin-bottom: 4rem;
}

.section-title h2 {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
}

.section-title .underline {
  height: 0.5rem;
  width: 6rem;
  background-color: hsl(var(--primary));
}

/* Tight grid */
.grid-tight {
  gap: 2px;
  background-color: hsl(var(--border));
}

.grid-tight > * {
  background-color: hsl(var(--background));
}
```

## Full Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link href="styles.css" rel="stylesheet">
</head>
<body class="font-body bg-background text-foreground">
  <!-- Header -->
  <header class="border-b-4 border-primary">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between h-20">
        <a href="/" class="font-display text-2xl font-bold uppercase">
          Brand<span class="text-primary">.</span>
        </a>
        <nav class="hidden md:flex items-center gap-8">
          <a href="/about" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="/contact" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <!-- Hero -->
    <section class="py-16 md:py-24 border-b-8 border-primary">
      <div class="container mx-auto px-4 md:px-6">
        <h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
          Page<br /><span class="text-primary">Title.</span>
        </h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-16">
          <h2 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Section Title
          </h2>
          <div class="h-2 w-24 bg-primary"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Content -->
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-foreground text-background border-t-8 border-primary py-16">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Footer content -->
      </div>
    </div>
  </footer>
</body>
</html>
```
