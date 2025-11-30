# HTML Showcases

Standalone HTML examples demonstrating the Dutchy Design System in action. Each showcase is a self-contained HTML file that can be opened directly in a browser.

## Showcases

### [Homepage](./homepage/)

The main landing page featuring:
- Split-layout hero with bold typography and search
- Decorative grid lines for visual structure
- Stats block with component count
- Featured components grid
- Full header and footer with "Dutchy Design" branding

**Use for:** Landing pages, product homepages, design system portals

### [Categories](./categories/)

A category browsing page featuring:
- Hero section with stats grid
- Featured first category (larger, spans 2 cols/rows)
- Category cards for UI Components, Data Display, Forms, Navigation, Feedback, Utilities
- Icon scaling hover effects
- CTA section with dark background
- Full header and footer

**Use for:** Category listings, component organization, documentation sections

### [Detail Page](./detail-page/)

A component documentation page featuring:
- Breadcrumb navigation
- Component preview with code toggle
- Installation and usage code blocks
- Props table with types and defaults
- Variant examples with descriptions
- Sidebar with quick info, table of contents, and related components

**Use for:** Documentation pages, component details, API reference pages

### [Search Results](./search-results/)

A search/browse results page featuring:
- Large search input with results count
- Filter sidebar with checkboxes (category, status)
- Sort dropdown and view toggle (grid/list)
- Results cards with highlighted search terms
- Pagination controls

**Use for:** Search results, component browsing, filtered listings

### [Contact](./contact/)

A contact form page featuring:
- Hero section with messaging
- Full contact form with validation indicators
- Quick contact info sidebar
- Alternative contact channels (GitHub, Discord, Twitter)
- FAQ teaser section
- Location/map section

**Use for:** Contact pages, support pages, feedback forms

### [Pricing](./pricing/)

A pricing/plans page featuring:
- Monthly/yearly toggle
- Three-tier pricing cards (Starter, Pro, Enterprise)
- Featured/popular plan highlight
- Feature comparison table
- FAQ accordion section
- CTA section

**Use for:** Pricing pages, subscription plans, product tiers

### [404 Error](./404/)

A 404 error page featuring:
- Large decorative 404 number
- Friendly error messaging
- Action buttons (Home, Search)
- Popular pages quick links
- Collapsible technical details
- Minimal footer

**Use for:** Error pages, not found states, maintenance pages

### [Login/Auth](./login/)

A login/authentication page featuring:
- Split layout with branding panel
- Tab switcher (Sign In / Sign Up)
- Email and password inputs with visibility toggle
- Social login buttons (Google, GitHub)
- Remember me checkbox
- Forgot password link

**Use for:** Authentication pages, login forms, registration flows

### [Admin Dashboard](./admin-dashboard/)

A complete admin dashboard layout featuring:
- Dark sidebar navigation with icons
- Header with search and user profile
- Stats grid with tight border pattern
- Data table with order management
- Activity feed sidebar
- Responsive layout

**Use for:** Admin panels, dashboards, back-office applications

### [Blog](./blog/)

A modern blog layout featuring:
- Full-featured header with navigation
- Featured article hero section
- Article grid with tight border pattern
- Newsletter subscription section
- Category organization
- Author attribution

**Use for:** Content websites, news portals, company blogs

### [Shopping Cart](./shopping-cart/)

A complete e-commerce cart page featuring:
- Cart item list with quantity controls
- Order summary sidebar
- Promo code input
- Trust badges
- Related products grid
- Checkout flow

**Use for:** E-commerce sites, online stores, marketplace applications

### [Theme Switcher](./theme-switcher/)

An interactive theme demonstration featuring:
- Three color themes (Dutch Orange, Royal Purple, Crimson Red)
- CSS custom properties implementation
- Instant theme switching without page reload
- localStorage persistence
- Code examples for implementation

**Use for:** Understanding theme implementation, demonstrating design system flexibility

## How to Use

1. **View in Browser**
   Simply open any `index.html` file in your web browser to see the showcase.

2. **Copy & Customize**
   Copy the HTML code and modify it for your project. All showcases use:
   - TailwindCSS via CDN
   - Google Fonts (Space Grotesk, Inter, JetBrains Mono)
   - Lucide icons (inline SVG)
   - Inline configuration for Tailwind

3. **Production Use**
   For production, you should:
   - Install TailwindCSS locally instead of using CDN
   - Self-host fonts or use a font loading strategy
   - Use a proper icon library instead of inline SVGs
   - Minify CSS/HTML

## Common Patterns Used

### Tight Grid Pattern
```html
<div class="grid grid-cols-2 gap-0.5 bg-border">
  <div class="bg-background p-8">Item 1</div>
  <div class="bg-background p-8">Item 2</div>
</div>
```

### Section Title with Underline
```html
<div class="mb-16">
  <h2 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
    Section Title
  </h2>
  <div class="h-2 w-24 bg-primary"></div>
</div>
```

### Card with Left Border Accent
```html
<div class="border-l-4 border-primary bg-background p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">Card Title</h3>
  <p class="text-muted-foreground text-sm">Description</p>
</div>
```

### Dark Footer
```html
<footer class="bg-foreground text-background border-t-8 border-primary">
  <!-- Content -->
</footer>
```

### Split-Layout Hero (Homepage)
```html
<section class="border-b border-border">
  <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
    <!-- Left: Typography & Search -->
    <div class="flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-background relative">
      <!-- Decorative Grid Lines -->
      <div class="absolute top-0 left-10 w-px h-full bg-border/50 hidden md:block"></div>
      <div class="absolute top-10 left-0 w-full h-px bg-border/50 hidden md:block"></div>
      <!-- Content -->
    </div>
    <!-- Right: Visual/Structural blocks -->
    <div class="bg-muted relative flex flex-col">
      <!-- Top stats block -->
      <div class="flex-1 bg-foreground p-12 flex items-end">...</div>
      <!-- Bottom action grid -->
      <div class="flex-1 grid grid-cols-2">...</div>
    </div>
  </div>
</section>
```

### Featured Category Card (Categories)
```html
<!-- First item spans 2 columns and 2 rows -->
<a href="#" class="bg-background p-8 group hover:bg-muted/50 transition-colors lg:col-span-2 lg:row-span-2">
  <div class="h-full flex flex-col">
    <div class="flex justify-between items-start mb-6">
      <div class="w-16 h-16 bg-primary/10 flex items-center justify-center">
        <!-- Icon -->
      </div>
      <!-- Arrow icon -->
    </div>
    <div class="flex-grow flex flex-col justify-center">
      <!-- Large centered icon -->
    </div>
    <div>
      <p class="font-mono text-sm text-primary font-bold uppercase tracking-wider mb-2">18 components</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Category Name</h2>
      <p class="text-muted-foreground">Description</p>
    </div>
  </div>
</a>
```

### Stats Grid
```html
<div class="grid grid-cols-2 gap-4">
  <div class="bg-foreground text-background p-6">
    <p class="font-display text-4xl font-bold">50+</p>
    <p class="text-sm text-background/60 uppercase tracking-wider">Components</p>
  </div>
  <div class="bg-primary text-primary-foreground p-6">
    <p class="font-display text-4xl font-bold">6</p>
    <p class="text-sm text-primary-foreground/70 uppercase tracking-wider">Categories</p>
  </div>
</div>
```

### Badge/Tag
```html
<div class="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-8">
  New Feature
</div>
```

### Form Input
```html
<div>
  <label class="block font-display font-bold uppercase text-sm tracking-wider mb-3" for="email">
    Email Address <span class="text-primary">*</span>
  </label>
  <input
    type="email"
    id="email"
    placeholder="you@example.com"
    class="w-full px-4 py-4 border-2 border-border bg-background font-sans focus:outline-none focus:border-primary transition-colors"
  />
</div>
```

### Pricing Card (Featured)
```html
<div class="bg-foreground text-background p-8 flex flex-col relative">
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">
    Most Popular
  </div>
  <div class="mb-8">
    <h3 class="font-display text-2xl font-bold uppercase tracking-tight mb-2 text-primary">Pro</h3>
    <p class="text-sm text-background/70">For professional developers and teams.</p>
  </div>
  <div class="mb-8">
    <div class="flex items-baseline gap-1">
      <span class="font-display text-5xl font-bold">$29</span>
      <span class="text-background/60">/month</span>
    </div>
  </div>
  <!-- Features list and CTA -->
</div>
```

### Split Auth Layout
```html
<div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">
  <!-- Left: Branding Panel -->
  <div class="hidden lg:flex flex-col justify-between p-12 bg-foreground">
    <!-- Logo, headline, testimonial -->
  </div>
  <!-- Right: Auth Form -->
  <div class="flex items-center justify-center p-8 bg-background">
    <!-- Login form -->
  </div>
</div>
```

## Dependencies

All showcases use:
- **TailwindCSS CDN** (v3.x via cdn.tailwindcss.com)
- **Google Fonts**:
  - Space Grotesk (display)
  - Inter (body)
  - JetBrains Mono (code)
- **Lucide Icons** (inline SVG)

## Customization

### Changing the Primary Color

In the TailwindCSS config at the top of each file:
```javascript
colors: {
  primary: {
    DEFAULT: 'hsl(25 95% 53%)',  // Change this value
    foreground: 'hsl(0 0% 100%)',
  },
}
```

### Using Different Fonts

Update the Google Fonts link and TailwindCSS config:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```
```javascript
fontFamily: {
  display: ['YourFont', 'sans-serif'],
}
```

## Browser Support

These showcases work in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

Note: The `border-radius: 0 !important` override ensures no rounded corners appear, even from browser defaults.
