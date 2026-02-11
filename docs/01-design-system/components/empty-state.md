# Empty State

## Philosophy

Empty states are not dead ends — they are invitations. In the Dutchy Design System, empty states use bold iconography, clear messaging, and a prominent call-to-action to guide users toward their next step.

## Search Empty State

```html
<div class="flex flex-col items-center justify-center py-20 text-center">
  <div class="w-16 h-16 bg-muted flex items-center justify-center mb-6">
    <svg class="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  </div>
  <h3 class="font-display text-xl font-bold uppercase tracking-tight mb-2">No results found</h3>
  <p class="text-muted-foreground text-sm max-w-sm mb-6">
    We couldn't find anything matching your search. Try adjusting your filters or search terms.
  </p>
  <button class="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors">
    Clear Search
  </button>
</div>
```

## Table Empty State

```html
<div class="border-2 border-border">
  <!-- Table header -->
  <div class="grid grid-cols-4 gap-4 px-6 py-3 bg-muted border-b-2 border-border">
    <span class="font-display font-bold uppercase text-xs tracking-wider">Name</span>
    <span class="font-display font-bold uppercase text-xs tracking-wider">Status</span>
    <span class="font-display font-bold uppercase text-xs tracking-wider">Date</span>
    <span class="font-display font-bold uppercase text-xs tracking-wider">Actions</span>
  </div>
  <!-- Empty body -->
  <div class="flex flex-col items-center justify-center py-16 text-center px-4">
    <div class="w-12 h-12 bg-muted flex items-center justify-center mb-4">
      <svg class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
      </svg>
    </div>
    <h3 class="font-display font-bold uppercase text-sm tracking-tight mb-1">No entries yet</h3>
    <p class="text-muted-foreground text-sm mb-4">Create your first entry to get started.</p>
    <button class="bg-foreground text-background px-5 py-2 font-bold uppercase tracking-wide text-sm hover:bg-foreground/90 transition-colors inline-flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"/></svg>
      Add Entry
    </button>
  </div>
</div>
```

## Dashboard Empty State

```html
<div class="border-4 border-dashed border-border p-12 flex flex-col items-center justify-center text-center">
  <div class="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
    <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
    </svg>
  </div>
  <h3 class="font-display text-2xl font-bold uppercase tracking-tight mb-2">Set up your dashboard</h3>
  <p class="text-muted-foreground max-w-md mb-8">
    Your dashboard is empty. Add widgets to monitor your key metrics and stay on top of your data.
  </p>
  <div class="flex gap-4">
    <button class="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors">
      Add Widget
    </button>
    <button class="border-2 border-foreground px-6 py-3 font-bold uppercase tracking-wide text-sm hover:bg-foreground hover:text-background transition-colors">
      Browse Templates
    </button>
  </div>
</div>
```

## CSS Implementation

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
}

.empty-state-icon {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--muted));
  margin-bottom: 1.5rem;
}

.empty-state-title {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
}

.empty-state-description {
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  max-width: 24rem;
  margin-bottom: 1.5rem;
}
```

## React Component Example

```tsx
function EmptyState({ icon, title, description, action, secondaryAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {icon && (
        <div className="w-16 h-16 bg-muted flex items-center justify-center mb-6">
          {icon}
        </div>
      )}
      <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground text-sm max-w-sm mb-6">{description}</p>
      )}
      <div className="flex gap-4">
        {action}
        {secondaryAction}
      </div>
    </div>
  );
}
```

## Accessibility

- Use a heading (`h2`/`h3`) so screen readers can identify the empty state section.
- Ensure the CTA button has clear, descriptive text (not just "Click here").
- Decorative icons should use `aria-hidden="true"`.
- Maintain sufficient color contrast for description text against the background.
- If the empty state replaces expected content, consider using `role="status"` with `aria-live="polite"` to announce the change.
