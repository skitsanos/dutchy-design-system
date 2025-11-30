# Typography Tokens

## Philosophy

Typography in the Dutchy Design System is bold and confident. We use a limited set of fonts with dramatic size differences to create clear visual hierarchy.

## Font Families

### Display Font: Space Grotesk
Used for headings, titles, and brand elements.

```css
--font-display: 'Space Grotesk', sans-serif;
```

**Characteristics:**
- Geometric sans-serif
- Strong personality
- Excellent for large sizes
- Weights: 500 (Medium), 600 (SemiBold), 700 (Bold)

### Body Font: Inter
Used for body text, UI elements, and readable content.

```css
--font-body: 'Inter', sans-serif;
```

**Characteristics:**
- Highly legible
- Optimized for screens
- Neutral and professional
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Monospace Font: JetBrains Mono
Used for code, technical content, and labels.

```css
--font-mono: 'JetBrains Mono', monospace;
```

**Characteristics:**
- Developer-focused
- Excellent for code
- Distinctive for labels

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Type Scale

| Name | Size | Line Height | Use Case |
|------|------|-------------|----------|
| `text-8xl` | 96px (6rem) | 1 | Hero headlines |
| `text-7xl` | 72px (4.5rem) | 0.9 | Page titles |
| `text-6xl` | 60px (3.75rem) | 0.9 | Large headlines |
| `text-5xl` | 48px (3rem) | 0.95 | Section titles |
| `text-4xl` | 36px (2.25rem) | 1 | Card titles |
| `text-3xl` | 30px (1.875rem) | 1.1 | Subsection titles |
| `text-2xl` | 24px (1.5rem) | 1.2 | Large text |
| `text-xl` | 20px (1.25rem) | 1.3 | Medium text |
| `text-lg` | 18px (1.125rem) | 1.4 | Intro text |
| `text-base` | 16px (1rem) | 1.5 | Body text |
| `text-sm` | 14px (0.875rem) | 1.4 | Small text |
| `text-xs` | 12px (0.75rem) | 1.3 | Labels, captions |

## Heading Styles

### Hero Heading
```css
.hero-heading {
  font-family: var(--font-display);
  font-size: 4.5rem;      /* 72px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.85;
}
```

```html
<h1 class="font-display text-7xl font-bold uppercase tracking-tighter leading-[0.85]">
  Fresh
  <br />
  <span class="text-primary">Data.</span>
</h1>
```

### Section Heading
```css
.section-heading {
  font-family: var(--font-display);
  font-size: 3rem;        /* 48px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.95;
}
```

```html
<h2 class="font-display text-5xl font-bold uppercase tracking-tighter">
  Section Title
</h2>
```

### Card Heading
```css
.card-heading {
  font-family: var(--font-display);
  font-size: 1.5rem;      /* 24px */
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
}
```

```html
<h3 class="font-display text-2xl font-bold uppercase">
  Card Title
</h3>
```

## Body Text Styles

### Lead Paragraph
```css
.lead {
  font-family: var(--font-body);
  font-size: 1.25rem;     /* 20px */
  color: var(--muted-foreground);
  line-height: 1.6;
}
```

```html
<p class="text-xl text-muted-foreground leading-relaxed">
  Introduction text that sets up the content.
</p>
```

### Body Paragraph
```css
.body {
  font-family: var(--font-body);
  font-size: 1rem;        /* 16px */
  line-height: 1.5;
}
```

```html
<p class="text-base leading-normal">
  Regular body text content.
</p>
```

### Small Text
```css
.small {
  font-family: var(--font-body);
  font-size: 0.875rem;    /* 14px */
  color: var(--muted-foreground);
}
```

```html
<p class="text-sm text-muted-foreground">
  Secondary information or captions.
</p>
```

## Label Styles

### Navigation Label
```css
.nav-label {
  font-family: var(--font-body);
  font-size: 0.875rem;    /* 14px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

```html
<span class="text-sm font-bold uppercase tracking-widest">
  Navigation
</span>
```

### Tag/Badge Label
```css
.tag-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;     /* 12px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

```html
<span class="font-mono text-xs font-bold uppercase tracking-widest">
  Updated Daily
</span>
```

### Form Label
```css
.form-label {
  font-family: var(--font-body);
  font-size: 0.75rem;     /* 12px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

```html
<label class="text-xs font-bold uppercase tracking-wider">
  Email Address
</label>
```

## Letter Spacing

| Class | Value | Usage |
|-------|-------|-------|
| `tracking-tighter` | -0.05em | Display headings |
| `tracking-tight` | -0.025em | Large text |
| `tracking-normal` | 0 | Body text |
| `tracking-wide` | 0.025em | Buttons |
| `tracking-wider` | 0.05em | Form labels |
| `tracking-widest` | 0.1em | Nav labels, tags |

## Line Height

| Class | Value | Usage |
|-------|-------|-------|
| `leading-none` | 1 | Tight display text |
| `leading-tight` | 1.25 | Headings |
| `leading-snug` | 1.375 | Subheadings |
| `leading-normal` | 1.5 | Body text |
| `leading-relaxed` | 1.625 | Comfortable reading |

## Font Weights

| Class | Value | Usage |
|-------|-------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasis |
| `font-semibold` | 600 | Subheadings |
| `font-bold` | 700 | Headings, buttons |

## TailwindCSS Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

## Typography Examples

### Page Title
```html
<h1 class="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
  Page
  <br />
  <span class="text-primary">Title.</span>
</h1>
```

### Section with Underline
```html
<div class="mb-16">
  <h2 class="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
    Section Title
  </h2>
  <div class="h-2 w-24 bg-primary"></div>
</div>
```

### Card Content
```html
<div class="p-8">
  <h3 class="font-display text-xl font-bold uppercase mb-3">
    Card Title
  </h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Card description text that provides context.
  </p>
</div>
```
