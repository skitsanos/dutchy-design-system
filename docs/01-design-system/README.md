# Dutchy Design System

A bold, structured design language inspired by Dutch graphic design traditions. Built for clarity, confidence, and visual impact.

## Philosophy

The Dutchy Design System draws inspiration from the Dutch design movement, known for its:

- **Functional clarity** - Every element serves a purpose
- **Bold typography** - Strong visual hierarchy
- **Geometric precision** - Sharp edges, clean lines
- **High contrast** - Clear distinction between elements
- **Grid discipline** - Structured, intentional layouts

## Core Principles

### 1. No Rounded Corners
Sharp edges convey confidence and precision. All elements use `border-radius: 0`.

```css
/* Wrong */
.button { border-radius: 8px; }

/* Correct */
.button { border-radius: 0; }
```

### 2. Bold Typography
Heavy font weights, tight letter-spacing, uppercase for headings.

```css
.heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.9;
}
```

### 3. High Contrast Colors
Strong primary colors against neutral backgrounds. No pastels.

```css
:root {
  --primary: #f97316;      /* Bold orange */
  --foreground: #0a0a0a;   /* Near black */
  --background: #ffffff;   /* Pure white */
}
```

### 4. Structured Grids
Deliberate spacing, consistent gaps, clear visual rhythm.

```css
.grid {
  display: grid;
  gap: 0.5px;  /* Tight gaps with visible borders */
  background: var(--border);
}
```

### 5. Functional Decoration
Borders, lines, and blocks serve both aesthetic and functional purposes.

```css
.card {
  border-left: 4px solid var(--primary);  /* Accent as indicator */
}

.section {
  border-bottom: 8px solid var(--primary);  /* Bold section divider */
}
```

## Visual Language

### Color Blocks
Large areas of solid color create visual anchors.

```html
<div class="bg-primary text-primary-foreground p-8">
  <h2>Bold Statement</h2>
</div>
```

### Typography Scale
Dramatic size differences create clear hierarchy.

```
Hero:      text-7xl (72px)
Section:   text-5xl (48px)
Card:      text-2xl (24px)
Body:      text-base (16px)
Label:     text-xs (12px)
```

### Border Accents
4px borders for emphasis, 2px for standard, 1px for subtle.

```css
.hero { border-bottom: 8px solid var(--primary); }
.card { border-left: 4px solid var(--primary); }
.input { border: 2px solid var(--border); }
```

## Quick Start

### CSS Variables
```css
:root {
  /* Colors */
  --primary: #f97316;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #f5f5f5;
  --border: #e5e5e5;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;
  --space-20: 5rem;
}
```

### Basic HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link href="dutchy.css" rel="stylesheet">
</head>
<body class="font-body bg-background text-foreground">
  <header class="border-b-4 border-primary">
    <!-- Navigation -->
  </header>

  <main>
    <!-- Content -->
  </main>

  <footer class="bg-foreground text-background border-t-8 border-primary">
    <!-- Footer -->
  </footer>
</body>
</html>
```

## Documentation Structure

### [Tokens](./tokens/)
- [Colors](./tokens/colors.md) - Color palette and usage
- [Typography](./tokens/typography.md) - Font families, sizes, weights
- [Spacing](./tokens/spacing.md) - Spacing scale and system
- [Effects](./tokens/effects.md) - Borders, shadows, transitions

### [Components](./components/)
- [Buttons](./components/buttons.md) - Button variants and states
- [Cards](./components/cards.md) - Card components
- [Forms](./components/forms.md) - Form elements
- [Navigation](./components/navigation.md) - Nav patterns
- [Layout](./components/layout.md) - Layout components

### [Patterns](./patterns/)
- [Hero Sections](./patterns/hero.md) - Hero layouts
- [Grid Layouts](./patterns/grids.md) - Grid patterns
- [Footer](./patterns/footer.md) - Footer designs

## Themes

The Dutchy Design System supports theme switching via CSS custom properties:

| Theme | Primary Color | Use Case |
|-------|--------------|----------|
| Dutch Orange | `#f97316` | Default, energetic |
| Royal Purple | `#7c3aed` | Premium, creative |
| Crimson Red | `#dc2626` | Bold, urgent |

See [Theme Switcher](../02-html-showcase/theme-switcher/) for implementation.

## Framework Compatibility

The design system works with:
- **Vanilla HTML/CSS** - Standalone stylesheets
- **TailwindCSS** - Custom theme configuration
- **React** - Component library (shadcn/ui based)
- **Vue** - Adaptable components
- **Any CSS framework** - Via custom properties

## Credits

Inspired by:
- Dutch graphic design tradition
- International Typographic Style
- Modern brutalist web design
