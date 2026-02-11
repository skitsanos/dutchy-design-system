# Alerts / Banners

## Philosophy

Alerts communicate important information without disrupting the user's flow. They should be visually distinct, semantically clear, and easy to dismiss when appropriate. The Dutchy Design System uses bold left-accent borders and strong color coding for instant recognition.

## Standard Alerts

### Info Alert

```html
<div class="bg-primary/10 border-l-4 border-primary p-4">
  <div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
    </svg>
    <div>
      <p class="font-bold text-sm">Information</p>
      <p class="text-sm text-muted-foreground">This is an informational message to guide users.</p>
    </div>
  </div>
</div>
```

### Success Alert

```html
<div class="border-l-4 p-4" style="background-color: hsla(142, 76%, 36%, 0.1); border-color: hsl(142 76% 36%)">
  <div class="flex items-start gap-3">
    <svg class="w-5 h-5 mt-0.5 shrink-0" style="color: hsl(142 76% 36%)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
    </svg>
    <div>
      <p class="font-bold text-sm">Success</p>
      <p class="text-sm text-muted-foreground">Your changes have been saved successfully.</p>
    </div>
  </div>
</div>
```

### Warning Alert

```html
<div class="border-l-4 p-4" style="background-color: hsla(45, 93%, 47%, 0.1); border-color: hsl(45 93% 47%)">
  <div class="flex items-start gap-3">
    <svg class="w-5 h-5 mt-0.5 shrink-0" style="color: hsl(45 93% 47%)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>
    </svg>
    <div>
      <p class="font-bold text-sm">Warning</p>
      <p class="text-sm text-muted-foreground">Please review your input before proceeding.</p>
    </div>
  </div>
</div>
```

### Error Alert

```html
<div class="border-l-4 border-destructive p-4" style="background-color: hsla(0, 84%, 60%, 0.1)">
  <div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-destructive mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
    </svg>
    <div>
      <p class="font-bold text-sm">Error</p>
      <p class="text-sm text-muted-foreground">Something went wrong. Please try again.</p>
    </div>
  </div>
</div>
```

## Full-Width Banner

```html
<div class="bg-primary text-primary-foreground px-4 py-3">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
      <p class="text-sm font-bold uppercase tracking-wide">New version available — upgrade now for the latest features.</p>
    </div>
    <button class="shrink-0 bg-primary-foreground text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide hover:bg-primary-foreground/90 transition-colors">
      Upgrade
    </button>
  </div>
</div>
```

## Dismissible Alert

```html
<div class="bg-primary/10 border-l-4 border-primary p-4" role="alert" id="dismissible-alert">
  <div class="flex items-start justify-between gap-3">
    <div class="flex items-start gap-3">
      <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
      <div>
        <p class="font-bold text-sm">Heads up!</p>
        <p class="text-sm text-muted-foreground">You can dismiss this alert when you're done reading.</p>
      </div>
    </div>
    <button
      onclick="this.closest('[role=alert]').remove()"
      class="shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1"
      aria-label="Dismiss"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</div>
```

## Alert with Action

```html
<div class="border-2 border-border p-4">
  <div class="flex items-start justify-between gap-4">
    <div class="flex items-start gap-3">
      <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
      <div>
        <p class="font-bold text-sm">Your trial expires in 3 days</p>
        <p class="text-sm text-muted-foreground">Upgrade to keep access to all features.</p>
      </div>
    </div>
    <button class="shrink-0 bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors">
      Upgrade
    </button>
  </div>
</div>
```

## CSS Implementation

```css
.alert {
  padding: 1rem;
  border-left: 4px solid transparent;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.alert-info { background: hsl(var(--primary) / 0.1); border-color: hsl(var(--primary)); }
.alert-success { background: hsla(142, 76%, 36%, 0.1); border-color: hsl(142 76% 36%); }
.alert-warning { background: hsla(45, 93%, 47%, 0.1); border-color: hsl(45 93% 47%); }
.alert-error { background: hsl(var(--destructive) / 0.1); border-color: hsl(var(--destructive)); }

.alert-title {
  font-weight: 700;
  font-size: 0.875rem;
}

.alert-description {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.banner {
  width: 100%;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

## React Component Example

```tsx
function Alert({ variant = 'info', title, children, dismissible, onDismiss }) {
  const styles = {
    info: 'bg-primary/10 border-primary',
    success: 'border-[hsl(142,76%,36%)] bg-[hsla(142,76%,36%,0.1)]',
    warning: 'border-[hsl(45,93%,47%)] bg-[hsla(45,93%,47%,0.1)]',
    error: 'bg-destructive/10 border-destructive',
  };

  return (
    <div className={`border-l-4 p-4 ${styles[variant]}`} role="alert">
      <div className="flex items-start justify-between gap-3">
        <div>
          {title && <p className="font-bold text-sm">{title}</p>}
          <p className="text-sm text-muted-foreground">{children}</p>
        </div>
        {dismissible && (
          <button onClick={onDismiss} className="text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
```

## Accessibility

- Use `role="alert"` for important messages that need immediate attention.
- Use `role="status"` with `aria-live="polite"` for non-critical informational messages.
- Dismiss buttons must have `aria-label="Dismiss"` or equivalent accessible name.
- Do not rely solely on color to convey the alert type — always include an icon and/or text label.
- Ensure full-width banners remain readable and actionable on small screens.
- Focus should move appropriately when an alert is dismissed (e.g., back to the triggering element).
