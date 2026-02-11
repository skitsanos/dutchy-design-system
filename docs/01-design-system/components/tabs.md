# Tabs + Segmented Control

## Philosophy

Tabs organize related content into switchable panels without page navigation. They reduce cognitive load by chunking information. The Dutchy system offers underline tabs for content sections and boxed tabs (segmented controls) for mode switching.

## Underline Tabs

```html
<div>
  <div class="border-b-2 border-border">
    <nav class="flex gap-0" role="tablist">
      <button role="tab" aria-selected="true" class="px-6 py-4 text-sm font-bold uppercase tracking-wide border-b-4 border-primary -mb-0.5 text-foreground">
        Overview
      </button>
      <button role="tab" aria-selected="false" class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors -mb-0.5 border-b-4 border-transparent">
        Features
      </button>
      <button role="tab" aria-selected="false" class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors -mb-0.5 border-b-4 border-transparent">
        Pricing
      </button>
    </nav>
  </div>
  <div role="tabpanel" class="p-6">
    <p class="text-muted-foreground text-sm">Overview panel content goes here.</p>
  </div>
</div>
```

## Boxed Tabs (Segmented Control)

```html
<div>
  <div class="flex bg-muted p-1" role="tablist">
    <button role="tab" aria-selected="true" class="flex-1 py-3 text-sm font-bold uppercase tracking-wide bg-background text-foreground">
      Monthly
    </button>
    <button role="tab" aria-selected="false" class="flex-1 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
      Yearly
    </button>
  </div>
  <div role="tabpanel" class="p-6">
    <p class="text-muted-foreground text-sm">Monthly pricing content.</p>
  </div>
</div>
```

## Full-Width Tabs

```html
<div>
  <div class="border-b-2 border-border">
    <nav class="flex" role="tablist">
      <button role="tab" aria-selected="true" class="flex-1 py-4 text-sm font-bold uppercase tracking-wide border-b-4 border-primary -mb-0.5 text-foreground text-center">
        Tab One
      </button>
      <button role="tab" aria-selected="false" class="flex-1 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors -mb-0.5 border-b-4 border-transparent text-center">
        Tab Two
      </button>
      <button role="tab" aria-selected="false" class="flex-1 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors -mb-0.5 border-b-4 border-transparent text-center">
        Tab Three
      </button>
    </nav>
  </div>
  <div role="tabpanel" class="p-6">
    <p class="text-muted-foreground text-sm">Content for selected tab.</p>
  </div>
</div>
```

## Tabs with Icons

```html
<div class="border-b-2 border-border">
  <nav class="flex gap-0" role="tablist">
    <button role="tab" aria-selected="true" class="px-6 py-4 text-sm font-bold uppercase tracking-wide border-b-4 border-primary -mb-0.5 text-foreground inline-flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
      </svg>
      Dashboard
    </button>
    <button role="tab" aria-selected="false" class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors -mb-0.5 border-b-4 border-transparent inline-flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
      </svg>
      Settings
    </button>
  </nav>
</div>
```

## CSS Implementation

```css
.tabs-list {
  display: flex;
  border-bottom: 2px solid hsl(var(--border));
}

.tab {
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: hsl(var(--muted-foreground));
  border-bottom: 4px solid transparent;
  margin-bottom: -2px;
  transition: color 150ms, border-color 150ms;
}

.tab:hover { color: hsl(var(--foreground)); }
.tab.active {
  color: hsl(var(--foreground));
  border-bottom-color: hsl(var(--primary));
}

/* Segmented control */
.segmented-control {
  display: flex;
  background: hsl(var(--muted));
  padding: 0.25rem;
}

.segmented-control-item {
  flex: 1;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-align: center;
  color: hsl(var(--muted-foreground));
  transition: background-color 150ms, color 150ms;
}

.segmented-control-item.active {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

## React Component Example

```tsx
function Tabs({ tabs, defaultIndex = 0 }) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div>
      <div className="border-b-2 border-border">
        <nav className="flex" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-wide -mb-0.5 border-b-4 transition-colors ${
                i === active
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div role="tabpanel" className="p-6">
        {tabs[active].content}
      </div>
    </div>
  );
}
```

## Accessibility

- Use `role="tablist"` on the tab container, `role="tab"` on each tab button, and `role="tabpanel"` on the content panel.
- Set `aria-selected="true"` on the active tab.
- Link tabs to panels with `aria-controls` and `id`.
- Support keyboard navigation: arrow keys to move between tabs, Enter/Space to activate.
- Only the active tab should be in the tab order (`tabindex="0"`); inactive tabs use `tabindex="-1"`.
- Ensure focus indicators are visible on all tab items.
