# Effects Tokens

## Philosophy

Effects in the Dutchy Design System are minimal and purposeful. We avoid decorative shadows and prefer strong, functional borders. Transitions are quick and intentional.

## Borders

### Border Width Scale

| Token | Value | Usage |
|-------|-------|-------|
| `border` | 1px | Subtle dividers, inputs |
| `border-2` | 2px | Standard emphasis |
| `border-4` | 4px | Strong emphasis, cards |
| `border-8` | 8px | Hero sections, major dividers |

### Border Styles

All borders use `solid` style. No dashed or dotted borders in the design system.

```css
/* Standard border */
.bordered {
  border: 2px solid hsl(var(--border));
}

/* Accent border */
.accent-border {
  border-left: 4px solid hsl(var(--primary));
}

/* Hero divider */
.hero-divider {
  border-bottom: 8px solid hsl(var(--primary));
}
```

### Border Patterns

#### Left Accent
Used for cards and callouts:
```html
<div class="border-l-4 border-primary pl-6">
  <h3>Card Title</h3>
  <p>Card content with left accent.</p>
</div>
```

#### Bottom Divider
Used for sections:
```html
<section class="border-b-8 border-primary pb-16">
  <h2>Section Title</h2>
</section>
```

#### Full Border
Used for form elements:
```html
<input class="border-2 border-border focus:border-foreground" />
```

#### Grid Borders
Visible gaps between grid items:
```html
<div class="grid grid-cols-2 gap-0.5 bg-border">
  <div class="bg-background p-8">Item 1</div>
  <div class="bg-background p-8">Item 2</div>
</div>
```

## Shadows

### Philosophy

Shadows are used sparingly. The Dutchy system prefers borders over shadows for depth.

### Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Default, most elements |
| `shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle lift |
| `shadow` | 0 1px 3px rgba(0,0,0,0.1) | Cards (optional) |
| `shadow-md` | 0 4px 6px rgba(0,0,0,0.1) | Dropdowns |

### When to Use Shadows

- **Dropdowns and menus** - For floating elements
- **Modals** - To separate from page content
- **Rarely on cards** - Prefer borders instead

### Shadow Examples

```css
/* Dropdown menu */
.dropdown {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Modal */
.modal {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

## Transitions

### Timing

| Token | Value | Usage |
|-------|-------|-------|
| `duration-150` | 150ms | Quick interactions (buttons) |
| `duration-200` | 200ms | Standard transitions |
| `duration-300` | 300ms | Page transitions |

### Easing

Default easing: `ease-out` for snappy, responsive feel.

```css
/* Standard transition */
.interactive {
  transition: all 150ms ease-out;
}
```

### Transition Properties

```css
/* Color transitions */
.hover-color {
  transition: color 150ms ease-out, background-color 150ms ease-out;
}

/* Border transitions */
.hover-border {
  transition: border-color 150ms ease-out;
}

/* Transform transitions */
.hover-scale {
  transition: transform 200ms ease-out;
}
```

### Common Transitions

#### Button Hover
```css
.button {
  transition: background-color 150ms ease-out;
}

.button:hover {
  background-color: hsl(var(--foreground) / 0.9);
}
```

```html
<button class="bg-foreground text-background hover:bg-foreground/90 transition-colors duration-150">
  Click Me
</button>
```

#### Link Hover
```css
.link {
  transition: color 150ms ease-out;
}

.link:hover {
  color: hsl(var(--primary));
}
```

```html
<a class="text-muted-foreground hover:text-primary transition-colors duration-150">
  Link Text
</a>
```

#### Card Hover
```css
.card {
  transition: border-color 150ms ease-out;
}

.card:hover {
  border-color: hsl(var(--primary));
}
```

```html
<div class="border-2 border-border hover:border-primary transition-colors duration-150 p-8">
  Card Content
</div>
```

## Focus States

### Outline Style

No rounded focus rings. Sharp, offset outlines:

```css
.focusable:focus {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

.focusable:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
```

### TailwindCSS Focus Classes

```html
<!-- Standard focus -->
<input class="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />

<!-- Focus visible only -->
<button class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
  Button
</button>
```

## Disabled States

### Visual Treatment

```css
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

```html
<button class="opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>
```

## Hover Effects

### Background Shift
```html
<button class="bg-foreground hover:bg-foreground/90 transition-colors">
  Button
</button>
```

### Border Color Shift
```html
<div class="border-2 border-border hover:border-primary transition-colors">
  Card
</div>
```

### Text Color Shift
```html
<a class="text-muted-foreground hover:text-foreground transition-colors">
  Link
</a>
```

### Underline on Hover
```html
<a class="hover:underline underline-offset-4">
  Link with underline
</a>
```

## Component Effect Examples

### Interactive Card
```html
<div class="border-l-4 border-border hover:border-primary bg-background hover:bg-muted transition-all duration-150 p-8 cursor-pointer">
  <h3 class="font-display text-xl font-bold uppercase mb-2">Card Title</h3>
  <p class="text-muted-foreground">Card description text.</p>
</div>
```

### Primary Button
```html
<button class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
  Primary Action
</button>
```

### Secondary Button
```html
<button class="bg-foreground text-background px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
  Secondary Action
</button>
```

### Outline Button
```html
<button class="border-2 border-foreground text-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors duration-150">
  Outline Action
</button>
```

### Form Input
```html
<input
  class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
  type="text"
  placeholder="Enter text..."
/>
```

### Navigation Link
```html
<a class="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-150">
  Nav Item
</a>
```

## TailwindCSS Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        none: '0',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
}
```

## CSS Custom Properties

```css
:root {
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-normal: 200ms ease-out;
  --transition-slow: 300ms ease-out;

  /* Focus ring */
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
  --focus-ring-color: var(--primary);
}
```
