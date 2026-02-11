# Navigation

## Philosophy

Navigation in the Dutchy Design System is bold and clear. Sharp edges, uppercase labels, and strong contrast ensure users always know where they are and where they can go.

## Header Navigation

### Standard Header

```html
<header class="border-b-4 border-primary bg-background">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="font-display text-2xl font-bold uppercase tracking-tight">
        Brand<span class="text-primary">.</span>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/products" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Products
        </a>
        <a href="/about" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
        <a href="/contact" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </a>
      </nav>

      <!-- CTA Button -->
      <a href="/signup" class="hidden md:block bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors">
        Get Started
      </a>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2" aria-label="Open menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
```

### Header with Dropdown

```html
<header class="border-b-4 border-primary bg-background">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex items-center justify-between h-20">
      <a href="/" class="font-display text-2xl font-bold uppercase tracking-tight">
        Brand<span class="text-primary">.</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <!-- Dropdown -->
        <div class="relative group">
          <button class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            Products
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div class="absolute top-full left-0 pt-2 hidden group-hover:block">
            <div class="bg-background border-2 border-border shadow-md min-w-[200px]">
              <a href="/products/category1" class="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                Category 1
              </a>
              <a href="/products/category2" class="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                Category 2
              </a>
              <a href="/products/category3" class="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                Category 3
              </a>
            </div>
          </div>
        </div>

        <a href="/about" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
        <a href="/contact" class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </a>
      </nav>

      <a href="/signup" class="hidden md:block bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide">
        Get Started
      </a>
    </div>
  </div>
</header>
```

### Dark Header

```html
<header class="bg-foreground text-background border-b-4 border-primary">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex items-center justify-between h-20">
      <a href="/" class="font-display text-2xl font-bold uppercase tracking-tight">
        Brand<span class="text-primary">.</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a href="/products" class="text-sm font-bold uppercase tracking-widest text-background/60 hover:text-background transition-colors">
          Products
        </a>
        <a href="/about" class="text-sm font-bold uppercase tracking-widest text-background/60 hover:text-background transition-colors">
          About
        </a>
        <a href="/contact" class="text-sm font-bold uppercase tracking-widest text-background/60 hover:text-background transition-colors">
          Contact
        </a>
      </nav>

      <a href="/signup" class="hidden md:block bg-primary text-primary-foreground px-6 py-2 text-sm font-bold uppercase tracking-wide">
        Get Started
      </a>
    </div>
  </div>
</header>
```

## Mobile Navigation

### Slide-out Menu

```html
<!-- Mobile Menu Overlay -->
<div class="fixed inset-0 bg-foreground/50 z-40 md:hidden" id="menu-overlay"></div>

<!-- Mobile Menu -->
<nav class="fixed top-0 right-0 bottom-0 w-80 bg-background z-50 transform translate-x-full transition-transform md:hidden" id="mobile-menu">
  <div class="p-6">
    <!-- Close Button -->
    <button class="absolute top-6 right-6" aria-label="Close menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Menu Links -->
    <div class="mt-12 space-y-1">
      <a href="/products" class="block py-4 text-lg font-bold uppercase tracking-wide border-b border-border">
        Products
      </a>
      <a href="/about" class="block py-4 text-lg font-bold uppercase tracking-wide border-b border-border">
        About
      </a>
      <a href="/contact" class="block py-4 text-lg font-bold uppercase tracking-wide border-b border-border">
        Contact
      </a>
    </div>

    <!-- CTA -->
    <div class="mt-8">
      <a href="/signup" class="block w-full bg-foreground text-background py-4 text-center font-bold uppercase tracking-wide">
        Get Started
      </a>
    </div>
  </div>
</nav>
```

### Full-screen Menu

```html
<!-- Full-screen Mobile Menu -->
<nav class="fixed inset-0 bg-foreground text-background z-50 flex flex-col justify-center items-center md:hidden">
  <!-- Close Button -->
  <button class="absolute top-6 right-6 text-background" aria-label="Close menu">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>

  <!-- Menu Links -->
  <div class="space-y-6 text-center">
    <a href="/products" class="block font-display text-4xl font-bold uppercase tracking-tight hover:text-primary transition-colors">
      Products
    </a>
    <a href="/about" class="block font-display text-4xl font-bold uppercase tracking-tight hover:text-primary transition-colors">
      About
    </a>
    <a href="/contact" class="block font-display text-4xl font-bold uppercase tracking-tight hover:text-primary transition-colors">
      Contact
    </a>
  </div>

  <!-- CTA -->
  <a href="/signup" class="mt-12 bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-wide">
    Get Started
  </a>
</nav>
```

## Breadcrumbs

Breadcrumb patterns are documented in the dedicated [Breadcrumbs component](./breadcrumbs.md).

## Sidebar Navigation

### Standard Sidebar

```html
<aside class="w-64 border-r-2 border-border min-h-screen p-6">
  <nav class="space-y-1">
    <a href="/dashboard" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide bg-muted">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
      </svg>
      Dashboard
    </a>
    <a href="/products" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
      Products
    </a>
    <a href="/orders" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
      </svg>
      Orders
    </a>
    <a href="/settings" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      </svg>
      Settings
    </a>
  </nav>
</aside>
```

### Sidebar with Sections

```html
<aside class="w-64 border-r-2 border-border min-h-screen p-6">
  <!-- Section 1 -->
  <div class="mb-8">
    <h3 class="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 px-4">
      Main
    </h3>
    <nav class="space-y-1">
      <a href="/dashboard" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide bg-muted">
        Dashboard
      </a>
      <a href="/analytics" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
        Analytics
      </a>
    </nav>
  </div>

  <!-- Section 2 -->
  <div class="mb-8">
    <h3 class="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 px-4">
      Management
    </h3>
    <nav class="space-y-1">
      <a href="/products" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
        Products
      </a>
      <a href="/orders" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
        Orders
      </a>
      <a href="/customers" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
        Customers
      </a>
    </nav>
  </div>

  <!-- Section 3 -->
  <div>
    <h3 class="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 px-4">
      System
    </h3>
    <nav class="space-y-1">
      <a href="/settings" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
        Settings
      </a>
      <a href="/help" class="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:bg-muted transition-colors">
        Help
      </a>
    </nav>
  </div>
</aside>
```

## Tabs

### Standard Tabs

```html
<div class="border-b-2 border-border">
  <nav class="flex gap-0">
    <button class="px-6 py-4 text-sm font-bold uppercase tracking-wide border-b-4 border-primary -mb-0.5">
      Tab 1
    </button>
    <button class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
      Tab 2
    </button>
    <button class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
      Tab 3
    </button>
  </nav>
</div>

<div class="p-6">
  <!-- Tab content -->
</div>
```

### Boxed Tabs

```html
<div class="flex bg-muted p-1">
  <button class="flex-1 py-3 text-sm font-bold uppercase tracking-wide bg-background">
    Tab 1
  </button>
  <button class="flex-1 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
    Tab 2
  </button>
  <button class="flex-1 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
    Tab 3
  </button>
</div>
```

## Pagination

### Standard Pagination

```html
<nav aria-label="Pagination" class="flex items-center gap-2">
  <a href="?page=1" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </a>
  <a href="?page=1" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
    1
  </a>
  <span class="px-4 py-2 border-2 border-foreground bg-foreground text-background font-bold">
    2
  </span>
  <a href="?page=3" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
    3
  </a>
  <a href="?page=4" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
    4
  </a>
  <a href="?page=5" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
    5
  </a>
  <a href="?page=3" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </a>
</nav>
```

## CSS Implementation

```css
/* Navigation link */
.nav-link {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(var(--muted-foreground));
  transition: color 150ms ease-out;
}

.nav-link:hover {
  color: hsl(var(--foreground));
}

.nav-link.active {
  color: hsl(var(--foreground));
}

/* Sidebar link */
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: hsl(var(--muted-foreground));
  transition: background-color 150ms ease-out;
}

.sidebar-link:hover {
  background-color: hsl(var(--muted));
}

.sidebar-link.active {
  background-color: hsl(var(--muted));
  color: hsl(var(--foreground));
}

/* Tab */
.tab {
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: hsl(var(--muted-foreground));
  border-bottom: 4px solid transparent;
  margin-bottom: -2px;
  transition: color 150ms ease-out, border-color 150ms ease-out;
}

.tab:hover {
  color: hsl(var(--foreground));
}

.tab.active {
  color: hsl(var(--foreground));
  border-bottom-color: hsl(var(--primary));
}
```

## Accessibility

- Use semantic `<nav>` elements with appropriate `aria-label`
- Current page should have `aria-current="page"`
- Ensure focus is visible on all interactive elements
- Dropdown menus should be keyboard navigable
- Mobile menus should trap focus when open
- Use `aria-expanded` for collapsible navigation
