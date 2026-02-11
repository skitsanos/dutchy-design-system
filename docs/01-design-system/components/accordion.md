# Accordion / Disclosure

## Philosophy

Accordions progressively disclose information, keeping interfaces clean while making content accessible on demand. The Dutchy approach builds on native `<details>/<summary>` for SSR-first rendering, adding optional JavaScript for single-open behavior.

## Basic Accordion (SSR-First)

```html
<div class="border-2 border-border divide-y-2 divide-border">
  <details open>
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      What is the Dutchy Design System?
      <svg class="w-5 h-5 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t border-border">
      A bold, structured design language inspired by Dutch graphic design traditions. Built for clarity, confidence, and visual impact.
    </div>
  </details>

  <details>
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      What frameworks does it support?
      <svg class="w-5 h-5 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t border-border">
      Works with vanilla HTML/CSS, TailwindCSS, React, Vue, or any CSS framework via custom properties.
    </div>
  </details>

  <details>
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      Is it accessible?
      <svg class="w-5 h-5 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t border-border">
      Yes. High-contrast palette, visible focus states, and WCAG-aware color guidance are built in by default.
    </div>
  </details>
</div>
```

## Single-Open Accordion (JS Enhanced)

```html
<div class="border-2 border-border divide-y-2 divide-border" data-accordion="single">
  <details>
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      Getting Started
      <svg class="w-5 h-5 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t border-border">
      Include the CDN link for Tailwind and the Google Fonts stylesheet, then start building.
    </div>
  </details>
  <details>
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      Customization
      <svg class="w-5 h-5 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t border-border">
      Override CSS custom properties to swap colors, typography, and spacing.
    </div>
  </details>
  <details>
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      Deployment
      <svg class="w-5 h-5 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t border-border">
      Build with Docker or Podman and serve via any static host or CDN.
    </div>
  </details>
</div>

<script>
  document.querySelectorAll('[data-accordion="single"]').forEach(accordion => {
    accordion.querySelectorAll('details').forEach(detail => {
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          accordion.querySelectorAll('details').forEach(d => {
            if (d !== detail) d.removeAttribute('open');
          });
        }
      });
    });
  });
</script>
```

## Bordered Variant

```html
<div class="space-y-3">
  <details class="border-2 border-border group">
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      Section Title
      <svg class="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t-2 border-border">
      Content for this section. Each item is independently bordered.
    </div>
  </details>
  <details class="border-2 border-border group">
    <summary class="px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none">
      Another Section
      <svg class="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-6 py-4 text-sm text-muted-foreground border-t-2 border-border">
      Content for another section.
    </div>
  </details>
</div>
```

## CSS Implementation

```css
details summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display: none;
}

.accordion-item {
  border: 2px solid hsl(var(--border));
}

.accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

.accordion-trigger:hover {
  background-color: hsl(var(--muted));
}

.accordion-content {
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  border-top: 1px solid hsl(var(--border));
}

details[open] .accordion-icon {
  transform: rotate(180deg);
}
```

## React Component Example

```tsx
function Accordion({ items, type = 'multiple' }) {
  const [openItems, setOpenItems] = useState(type === 'multiple' ? new Set([0]) : new Set());

  const toggle = (index) => {
    setOpenItems(prev => {
      const next = new Set(type === 'multiple' ? prev : []);
      if (prev.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="border-2 border-border divide-y-2 divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full px-6 py-4 font-bold uppercase text-sm tracking-wide hover:bg-muted transition-colors flex items-center justify-between"
            aria-expanded={openItems.has(i)}
          >
            {item.title}
            <svg className={`w-5 h-5 transition-transform ${openItems.has(i) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {openItems.has(i) && (
            <div className="px-6 py-4 text-sm text-muted-foreground border-t border-border">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

## Accessibility

- Native `<details>/<summary>` provides built-in keyboard and screen reader support.
- The chevron icon should use `aria-hidden="true"` as the summary text serves as the label.
- For JS-enhanced accordions, use `aria-expanded` on trigger buttons.
- Panels should have `role="region"` and `aria-labelledby` pointing to the trigger.
- Ensure the trigger has a visible focus ring.
- Remove the default `list-style` and `::marker`/`::-webkit-details-marker` to maintain Dutchy's clean aesthetic.
