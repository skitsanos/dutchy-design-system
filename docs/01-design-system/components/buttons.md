# Buttons

## Philosophy

Buttons in the Dutchy Design System are bold, confident, and unmistakably interactive. No rounded corners, no subtle gradients—just clear, functional design.

## Button Variants

### Primary Button

The main call-to-action. Uses the primary brand color.

```html
<button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors duration-150">
  Primary Action
</button>
```

**Use for:**
- Main form submissions
- Primary CTAs
- Featured actions

### Secondary Button

For secondary actions. Uses foreground color for strong presence.

```html
<button class="bg-foreground text-background px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors duration-150">
  Secondary Action
</button>
```

**Use for:**
- Alternative actions
- Navigation
- Less prominent CTAs

### Outline Button

For tertiary actions or when you need a lighter visual weight.

```html
<button class="border-2 border-foreground text-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors duration-150">
  Outline Action
</button>
```

**Use for:**
- Cancel actions
- Filter toggles
- Secondary navigation

### Ghost Button

Minimal visual presence, maximum interaction clarity.

```html
<button class="text-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-muted transition-colors duration-150">
  Ghost Action
</button>
```

**Use for:**
- Toolbar actions
- Navigation items
- Inline actions

### Destructive Button

For dangerous or irreversible actions.

```html
<button class="bg-destructive text-destructive-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-destructive/90 transition-colors duration-150">
  Delete
</button>
```

**Use for:**
- Delete actions
- Remove operations
- Destructive confirmations

## Button Sizes

### Small
```html
<button class="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wide">
  Small
</button>
```

### Medium (Default)
```html
<button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
  Medium
</button>
```

### Large
```html
<button class="bg-primary text-primary-foreground px-10 py-4 text-lg font-bold uppercase tracking-wide">
  Large
</button>
```

### Full Width
```html
<button class="w-full bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
  Full Width
</button>
```

## Button States

### Default
```html
<button class="bg-primary text-primary-foreground">
  Default
</button>
```

### Hover
```html
<button class="bg-primary text-primary-foreground hover:bg-primary/90">
  Hover Me
</button>
```

### Focus
```html
<button class="bg-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
  Focus Me
</button>
```

### Disabled
```html
<button class="bg-primary text-primary-foreground opacity-50 cursor-not-allowed" disabled>
  Disabled
</button>
```

### Loading
```html
<button class="bg-primary text-primary-foreground opacity-75 cursor-wait" disabled>
  <span class="inline-flex items-center gap-2">
    <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
    Loading...
  </span>
</button>
```

## Button with Icon

### Icon Left
```html
<button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide inline-flex items-center gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
  Add Item
</button>
```

### Icon Right
```html
<button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide inline-flex items-center gap-2">
  Continue
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
</button>
```

### Icon Only
```html
<button class="bg-primary text-primary-foreground p-3" aria-label="Add item">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
</button>
```

## Button Groups

### Horizontal Group
```html
<div class="flex">
  <button class="bg-foreground text-background px-6 py-3 font-bold uppercase tracking-wide border-r border-background/20">
    Left
  </button>
  <button class="bg-foreground text-background px-6 py-3 font-bold uppercase tracking-wide border-r border-background/20">
    Center
  </button>
  <button class="bg-foreground text-background px-6 py-3 font-bold uppercase tracking-wide">
    Right
  </button>
</div>
```

### Spaced Group
```html
<div class="flex gap-4">
  <button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide">
    Primary
  </button>
  <button class="border-2 border-foreground text-foreground px-8 py-3 font-bold uppercase tracking-wide">
    Secondary
  </button>
</div>
```

## CSS Implementation

```css
/* Base button styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  transition: background-color 150ms ease-out, border-color 150ms ease-out;
  cursor: pointer;
  border: none;
  border-radius: 0;
}

.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary));
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.btn-primary {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.btn-primary:hover:not(:disabled) {
  background-color: hsl(var(--primary) / 0.9);
}

.btn-secondary {
  background-color: hsl(var(--foreground));
  color: hsl(var(--background));
}

.btn-secondary:hover:not(:disabled) {
  background-color: hsl(var(--foreground) / 0.9);
}

.btn-outline {
  background-color: transparent;
  color: hsl(var(--foreground));
  border: 2px solid hsl(var(--foreground));
}

.btn-outline:hover:not(:disabled) {
  background-color: hsl(var(--foreground));
  color: hsl(var(--background));
}

.btn-ghost {
  background-color: transparent;
  color: hsl(var(--foreground));
}

.btn-ghost:hover:not(:disabled) {
  background-color: hsl(var(--muted));
}

/* Sizes */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.btn-full {
  width: 100%;
}
```

## React Component Example

```tsx
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary':
              variant === 'primary',
            'bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground':
              variant === 'secondary',
            'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background':
              variant === 'outline',
            'text-foreground hover:bg-muted': variant === 'ghost',
            'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive':
              variant === 'destructive',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-8 py-3': size === 'md',
            'px-10 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
```

## Accessibility

- Always include meaningful text or `aria-label` for icon-only buttons
- Use `disabled` attribute, not just visual styling
- Ensure sufficient color contrast (4.5:1 minimum)
- Focus states must be visible
- Use `<button>` for actions, `<a>` for navigation
