# Client-Side Interactivity

Since Bun SSR renders static HTML without a React runtime on the client, all interactivity must be implemented with vanilla JavaScript.

## How It Works

1. **JSX renders to static HTML** - Components become HTML strings on the server
2. **No React on client** - No virtual DOM, no hooks, no state
3. **Vanilla JS for behavior** - Use `<script>` tags for interactivity
4. **IDs and data attributes** - Bridge between HTML and JavaScript

## Loading Scripts

### Via Layout Component

```tsx
// src/ui/Layout/index.tsx
interface LayoutProps {
  title: string;
  children: ReactNode;
  scripts?: string[];
}

const Layout: FC<LayoutProps> = ({ title, children, scripts = [] }) => (
  <html lang="en">
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/assets/css/styles.css" />
    </head>
    <body>
      {children}

      {/* Load scripts at end of body */}
      {scripts.map((src, i) => (
        <script key={i} src={src} defer />
      ))}
    </body>
  </html>
);
```

### Usage

```tsx
// src/routes/index.tsx
const HomePage = () => (
  <Layout
    title="Home"
    scripts={[
      '/assets/js/mobile-menu.js',
      '/assets/js/accordion.js',
    ]}
  >
    {/* content */}
  </Layout>
);
```

## Common Patterns

### Mobile Menu Toggle

```tsx
// Component
const Header = () => (
  <header className="border-b-4 border-primary">
    <div className="container mx-auto px-4 flex items-center justify-between h-20">
      <a href="/" className="font-display text-2xl font-bold">
        Brand<span className="text-primary">.</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>

      {/* Mobile toggle */}
      <button
        id="mobile-menu-btn"
        className="md:hidden p-2"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <svg id="menu-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="close-icon" className="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Mobile nav */}
    <nav
      id="mobile-nav"
      className="hidden md:hidden border-t-2 border-border"
    >
      <div className="container mx-auto px-4 py-4 space-y-4">
        <a href="/" className="block font-bold uppercase">Home</a>
        <a href="/about" className="block font-bold uppercase">About</a>
      </div>
    </nav>
  </header>
);
```

```javascript
// public/assets/js/mobile-menu.js
(function() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('hidden');

    nav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', !isOpen);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !nav.classList.contains('hidden')) {
      nav.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
```

### Accordion / Collapsible

```tsx
// Component
const FAQ = ({ items }: { items: { question: string; answer: string }[] }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <div key={index} className="border-2 border-border" data-accordion>
        <button
          className="w-full px-6 py-4 flex items-center justify-between font-bold uppercase text-left"
          data-accordion-trigger
          aria-expanded="false"
        >
          {item.question}
          <svg
            className="w-5 h-5 transition-transform"
            data-accordion-icon
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className="hidden px-6 pb-4 text-muted-foreground"
          data-accordion-content
        >
          {item.answer}
        </div>
      </div>
    ))}
  </div>
);
```

```javascript
// public/assets/js/accordion.js
(function() {
  const accordions = document.querySelectorAll('[data-accordion]');

  accordions.forEach(accordion => {
    const trigger = accordion.querySelector('[data-accordion-trigger]');
    const content = accordion.querySelector('[data-accordion-content]');
    const icon = accordion.querySelector('[data-accordion-icon]');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      content.classList.toggle('hidden');
      trigger.setAttribute('aria-expanded', !isOpen);

      if (icon) {
        icon.style.transform = isOpen ? '' : 'rotate(180deg)';
      }
    });
  });
})();
```

### Tabs

```tsx
// Component
const Tabs = ({ tabs }: { tabs: { id: string; label: string; content: string }[] }) => (
  <div data-tabs>
    {/* Tab buttons */}
    <div className="flex border-b-2 border-border">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          className={`px-6 py-3 font-bold uppercase text-sm ${
            index === 0 ? 'border-b-4 border-primary' : 'text-muted-foreground'
          }`}
          data-tab-trigger={tab.id}
          aria-selected={index === 0}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Tab panels */}
    {tabs.map((tab, index) => (
      <div
        key={tab.id}
        className={`p-6 ${index === 0 ? '' : 'hidden'}`}
        data-tab-panel={tab.id}
        role="tabpanel"
      >
        {tab.content}
      </div>
    ))}
  </div>
);
```

```javascript
// public/assets/js/tabs.js
(function() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach(container => {
    const triggers = container.querySelectorAll('[data-tab-trigger]');
    const panels = container.querySelectorAll('[data-tab-panel]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabId = trigger.dataset.tabTrigger;

        // Update triggers
        triggers.forEach(t => {
          const isActive = t.dataset.tabTrigger === tabId;
          t.classList.toggle('border-b-4', isActive);
          t.classList.toggle('border-primary', isActive);
          t.classList.toggle('text-muted-foreground', !isActive);
          t.setAttribute('aria-selected', isActive);
        });

        // Update panels
        panels.forEach(panel => {
          panel.classList.toggle('hidden', panel.dataset.tabPanel !== tabId);
        });
      });
    });
  });
})();
```

### Form Validation

```tsx
// Component
const ContactForm = () => (
  <form id="contact-form" action="/api/contact" method="POST" noValidate>
    <div className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2">
          Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border-2 border-border px-4 py-3 focus:border-foreground focus:outline-none"
          data-validate="email"
        />
        <p className="text-destructive text-sm mt-1 hidden" data-error="email"></p>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          className="w-full border-2 border-border px-4 py-3 min-h-[120px] focus:border-foreground focus:outline-none"
          data-validate="required"
          data-min-length="10"
        ></textarea>
        <p className="text-destructive text-sm mt-1 hidden" data-error="message"></p>
      </div>

      <button
        type="submit"
        className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase hover:bg-primary/90"
      >
        Send Message
      </button>
    </div>
  </form>
);
```

```javascript
// public/assets/js/form-validation.js
(function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const validators = {
    email: (value) => {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
      return null;
    },
    required: (value, field) => {
      if (!value) return `${field.name} is required`;
      const minLength = field.dataset.minLength;
      if (minLength && value.length < parseInt(minLength)) {
        return `Must be at least ${minLength} characters`;
      }
      return null;
    }
  };

  function showError(fieldName, message) {
    const errorEl = form.querySelector(`[data-error="${fieldName}"]`);
    const inputEl = form.querySelector(`[name="${fieldName}"]`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    if (inputEl) {
      inputEl.classList.add('border-destructive');
    }
  }

  function clearError(fieldName) {
    const errorEl = form.querySelector(`[data-error="${fieldName}"]`);
    const inputEl = form.querySelector(`[name="${fieldName}"]`);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    if (inputEl) {
      inputEl.classList.remove('border-destructive');
    }
  }

  // Clear errors on input
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => clearError(field.name));
  });

  form.addEventListener('submit', (e) => {
    let hasErrors = false;

    form.querySelectorAll('[data-validate]').forEach(field => {
      const validationType = field.dataset.validate;
      const validator = validators[validationType];

      if (validator) {
        const error = validator(field.value.trim(), field);
        if (error) {
          showError(field.name, error);
          hasErrors = true;
        }
      }
    });

    if (hasErrors) {
      e.preventDefault();
    }
  });
})();
```

### Modal / Dialog

```tsx
// Component
const Modal = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <div
    id={id}
    className="fixed inset-0 z-50 hidden"
    role="dialog"
    aria-modal="true"
    aria-labelledby={`${id}-title`}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-foreground/80" data-modal-backdrop></div>

    {/* Content */}
    <div className="absolute inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-background border-4 border-foreground">
      <div className="flex items-center justify-between p-6 border-b-2 border-border">
        <h2 id={`${id}-title`} className="font-display text-xl font-bold uppercase">
          {title}
        </h2>
        <button
          className="p-2 hover:bg-muted"
          data-modal-close
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  </div>
);

// Trigger button
const ModalTrigger = ({ modalId, children }: { modalId: string; children: ReactNode }) => (
  <button
    className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase"
    data-modal-open={modalId}
  >
    {children}
  </button>
);
```

```javascript
// public/assets/js/modal.js
(function() {
  // Open modal
  document.querySelectorAll('[data-modal-open]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.dataset.modalOpen;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // Focus first focusable element
        const focusable = modal.querySelector('button, input, textarea, select, a[href]');
        if (focusable) focusable.focus();
      }
    });
  });

  // Close modal
  function closeModal(modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('[role="dialog"]');
      if (modal) closeModal(modal);
    });
  });

  document.querySelectorAll('[data-modal-backdrop]').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      const modal = backdrop.closest('[role="dialog"]');
      if (modal) closeModal(modal);
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('[role="dialog"]:not(.hidden)');
      if (openModal) closeModal(openModal);
    }
  });
})();
```

### Toast Notifications

```tsx
// Container (add to Layout)
const ToastContainer = () => (
  <div
    id="toast-container"
    className="fixed bottom-4 right-4 z-50 space-y-2"
    aria-live="polite"
  ></div>
);
```

```javascript
// public/assets/js/toast.js
window.toast = {
  show(message, type = 'info', duration = 5000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const colors = {
      info: 'bg-foreground text-background',
      success: 'bg-primary text-primary-foreground',
      error: 'bg-destructive text-destructive-foreground',
    };

    const toast = document.createElement('div');
    toast.className = `${colors[type]} px-6 py-4 font-bold uppercase text-sm border-l-4 border-background/20 animate-slide-in`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// Usage: toast.show('Message sent!', 'success');
```

Add animation to your CSS:

```css
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
  transition: opacity 0.3s, transform 0.3s;
}
```

## Data Passing Patterns

### Via Data Attributes

```tsx
// Component with data
const ProductCard = ({ product }: { product: Product }) => (
  <div
    className="border-2 border-border p-6"
    data-product-id={product.id}
    data-product-price={product.price}
  >
    <h3 className="font-bold">{product.name}</h3>
    <button className="btn-add-to-cart">Add to Cart</button>
  </div>
);
```

```javascript
// public/assets/js/cart.js
document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('[data-product-id]');
    const productId = card.dataset.productId;
    const price = parseFloat(card.dataset.productPrice);

    // Add to cart logic
    console.log(`Adding product ${productId} at ${price}`);
  });
});
```

### Via Inline Script with JSON

```tsx
// Component passing complex data
const ChartContainer = ({ data }: { data: ChartData }) => (
  <div>
    <div id="chart"></div>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__CHART_DATA__ = ${JSON.stringify(data)};`
      }}
    />
  </div>
);
```

```javascript
// public/assets/js/chart.js
document.addEventListener('DOMContentLoaded', () => {
  const data = window.__CHART_DATA__;
  if (data) {
    // Initialize chart with data
    renderChart('#chart', data);
  }
});
```

## Best Practices

### 1. Use IIFEs to Avoid Global Pollution

```javascript
// Good
(function() {
  // All code here
})();

// Avoid
let menuOpen = false; // Global variable
```

### 2. Check for Element Existence

```javascript
// Good
const el = document.getElementById('my-element');
if (!el) return;

// Avoid
document.getElementById('my-element').addEventListener(...); // May throw
```

### 3. Use Data Attributes Over IDs for Reusable Components

```javascript
// Good - Works with multiple instances
document.querySelectorAll('[data-accordion]').forEach(...)

// Limited - Only works once
document.getElementById('accordion')
```

### 4. Defer Script Loading

```tsx
// Load after DOM is ready
<script src="/assets/js/app.js" defer />
```

### 5. Keep Scripts Small and Focused

```
public/assets/js/
├── mobile-menu.js    # ~30 lines
├── accordion.js      # ~25 lines
├── tabs.js           # ~30 lines
├── form-validation.js # ~50 lines
└── modal.js          # ~40 lines
```

## When to Consider CSR

If your application requires:

- **Real-time updates** - Stock prices, live chat, collaborative editing
- **Complex state** - Multi-step wizards, drag-and-drop, undo/redo
- **Heavy client interaction** - Interactive editors, games, data visualization tools
- **Optimistic updates** - Instant feedback while waiting for server

Consider building a client-side React application instead, or hydrating specific interactive sections.
