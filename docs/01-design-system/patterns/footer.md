# Footer Patterns

## Philosophy

Footers in the Dutchy Design System are bold anchors that close the page with confidence. High contrast, clear organization, and strong brand presence define our footer patterns.

## Footer Variants

### Standard Footer

Full-featured footer with multiple sections.

```html
<footer class="bg-foreground text-background border-t-8 border-primary">
  <div class="container mx-auto px-4 md:px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Brand Column -->
      <div>
        <a href="/" class="font-display text-2xl font-bold uppercase tracking-tight inline-block mb-6">
          Brand<span class="text-primary">.</span>
        </a>
        <p class="text-background/70 text-sm leading-relaxed mb-6">
          A brief description of what your brand does and why it matters.
        </p>
        <div class="flex gap-4">
          <a href="#" class="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" class="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a href="#" class="text-background/60 hover:text-primary transition-colors" aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Links Column 1 -->
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm mb-6">Products</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Feature One
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Feature Two
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Feature Three
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <!-- Links Column 2 -->
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm mb-6">Company</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Careers
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <!-- Links Column 3 -->
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm mb-6">Legal</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-background/10">
    <div class="container mx-auto px-4 md:px-6 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-background/60 text-sm">
          &copy; 2025 Brand. All rights reserved.
        </p>
        <p class="text-background/60 text-sm">
          Made with precision in Amsterdam
        </p>
      </div>
    </div>
  </div>
</footer>
```

### Minimal Footer

Simple footer with essential links.

```html
<footer class="bg-foreground text-background border-t-8 border-primary py-12">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <!-- Brand -->
      <a href="/" class="font-display text-xl font-bold uppercase tracking-tight">
        Brand<span class="text-primary">.</span>
      </a>

      <!-- Links -->
      <nav class="flex flex-wrap justify-center gap-6">
        <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
          About
        </a>
        <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
          Products
        </a>
        <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
          Contact
        </a>
        <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
          Privacy
        </a>
      </nav>

      <!-- Copyright -->
      <p class="text-background/60 text-sm">
        &copy; 2025 Brand
      </p>
    </div>
  </div>
</footer>
```

### CTA Footer

Footer with prominent call-to-action.

```html
<footer class="bg-foreground text-background border-t-8 border-primary">
  <!-- CTA Section -->
  <div class="border-b border-background/10 py-16">
    <div class="container mx-auto px-4 md:px-6">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
          Ready to<br /><span class="text-primary">Start?</span>
        </h2>
        <p class="text-background/70 text-lg mb-8">
          Join thousands of users who trust our platform.
        </p>
        <a href="#" class="bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-wide inline-block hover:bg-primary/90 transition-colors">
          Get Started Free
        </a>
      </div>
    </div>
  </div>

  <!-- Links Section -->
  <div class="py-12">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="/" class="font-display text-xl font-bold uppercase tracking-tight">
          Brand<span class="text-primary">.</span>
        </a>
        <nav class="flex flex-wrap justify-center gap-6">
          <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">About</a>
          <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">Products</a>
          <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">Contact</a>
          <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">Privacy</a>
        </nav>
        <p class="text-background/60 text-sm">&copy; 2025 Brand</p>
      </div>
    </div>
  </div>
</footer>
```

### Newsletter Footer

Footer with email signup.

```html
<footer class="bg-foreground text-background border-t-8 border-primary">
  <div class="container mx-auto px-4 md:px-6 py-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Newsletter -->
      <div>
        <h2 class="font-display text-3xl font-bold uppercase tracking-tighter mb-4">
          Stay Updated<span class="text-primary">.</span>
        </h2>
        <p class="text-background/70 mb-6">
          Subscribe to our newsletter for the latest updates.
        </p>
        <form class="flex gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 bg-background/10 border-2 border-background/20 px-4 py-3 text-background placeholder:text-background/50 focus:border-primary focus:outline-none"
          />
          <button type="submit" class="bg-primary text-primary-foreground px-6 font-bold uppercase tracking-wide shrink-0">
            Subscribe
          </button>
        </form>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold uppercase tracking-wider text-sm mb-4">Product</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-background/70 hover:text-background text-sm">Features</a></li>
            <li><a href="#" class="text-background/70 hover:text-background text-sm">Pricing</a></li>
            <li><a href="#" class="text-background/70 hover:text-background text-sm">API</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold uppercase tracking-wider text-sm mb-4">Company</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-background/70 hover:text-background text-sm">About</a></li>
            <li><a href="#" class="text-background/70 hover:text-background text-sm">Contact</a></li>
            <li><a href="#" class="text-background/70 hover:text-background text-sm">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="border-t border-background/10 py-6">
    <div class="container mx-auto px-4 md:px-6">
      <p class="text-background/60 text-sm text-center">
        &copy; 2025 Brand. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

### Light Footer

Alternative light-colored footer.

```html
<footer class="bg-muted border-t-4 border-primary">
  <div class="container mx-auto px-4 md:px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <a href="/" class="font-display text-2xl font-bold uppercase tracking-tight">
          Brand<span class="text-primary">.</span>
        </a>
        <p class="text-muted-foreground text-sm mt-4">
          Brief brand description.
        </p>
      </div>
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm mb-4">Product</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-muted-foreground hover:text-foreground text-sm">Features</a></li>
          <li><a href="#" class="text-muted-foreground hover:text-foreground text-sm">Pricing</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm mb-4">Company</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-muted-foreground hover:text-foreground text-sm">About</a></li>
          <li><a href="#" class="text-muted-foreground hover:text-foreground text-sm">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm mb-4">Legal</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-muted-foreground hover:text-foreground text-sm">Privacy</a></li>
          <li><a href="#" class="text-muted-foreground hover:text-foreground text-sm">Terms</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="border-t border-border py-6">
    <div class="container mx-auto px-4 md:px-6">
      <p class="text-muted-foreground text-sm text-center">
        &copy; 2025 Brand. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

## Footer Elements

### Brand Logo

```html
<a href="/" class="font-display text-2xl font-bold uppercase tracking-tight">
  Brand<span class="text-primary">.</span>
</a>
```

### Social Links

```html
<div class="flex gap-4">
  <a href="#" class="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><!-- Icon --></svg>
  </a>
  <a href="#" class="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><!-- Icon --></svg>
  </a>
</div>
```

### Link Column

```html
<div>
  <h3 class="font-bold uppercase tracking-wider text-sm mb-6">Section Title</h3>
  <ul class="space-y-3">
    <li>
      <a href="#" class="text-background/70 hover:text-background transition-colors text-sm">
        Link Text
      </a>
    </li>
  </ul>
</div>
```

### Copyright Bar

```html
<div class="border-t border-background/10 py-6">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-background/60 text-sm">
        &copy; 2025 Brand. All rights reserved.
      </p>
      <p class="text-background/60 text-sm">
        Made with precision in Amsterdam
      </p>
    </div>
  </div>
</div>
```

## CSS Implementation

```css
/* Footer base */
.footer {
  background-color: hsl(var(--foreground));
  color: hsl(var(--background));
  border-top: 8px solid hsl(var(--primary));
}

/* Footer section title */
.footer-title {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

/* Footer link */
.footer-link {
  color: hsl(var(--background) / 0.7);
  font-size: 0.875rem;
  transition: color 150ms ease-out;
}

.footer-link:hover {
  color: hsl(var(--background));
}

/* Footer copyright */
.footer-copyright {
  color: hsl(var(--background) / 0.6);
  font-size: 0.875rem;
}

/* Footer border */
.footer-border {
  border-top: 1px solid hsl(var(--background) / 0.1);
}
```

## Accessibility

- Use semantic `<footer>` element
- Include `aria-label` on social media links
- Ensure sufficient color contrast for text
- Group related links with headings
- Make all interactive elements keyboard accessible
