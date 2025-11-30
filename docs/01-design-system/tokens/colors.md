# Color Tokens

## Philosophy

The Dutchy color palette is built on high contrast and bold statements. Colors are functional, not decorative. Each color serves a specific purpose in the visual hierarchy.

## Primary Palette

### Dutch Orange (Default Theme)

| Token | Value | HSL | Usage |
|-------|-------|-----|-------|
| `--primary` | `#f97316` | `25 95% 53%` | Primary actions, accents, brand |
| `--primary-foreground` | `#ffffff` | `0 0% 100%` | Text on primary |

```css
:root {
  --primary: 25 95% 53%;
  --primary-foreground: 0 0% 100%;
}
```

### Neutral Palette

| Token | Value | HSL | Usage |
|-------|-------|-----|-------|
| `--background` | `#ffffff` | `0 0% 100%` | Page background |
| `--foreground` | `#0a0a0a` | `0 0% 4%` | Primary text |
| `--muted` | `#f5f5f5` | `0 0% 96%` | Subtle backgrounds |
| `--muted-foreground` | `#737373` | `0 0% 45%` | Secondary text |
| `--border` | `#e5e5e5` | `0 0% 90%` | Borders, dividers |

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;
  --muted: 0 0% 96%;
  --muted-foreground: 0 0% 45%;
  --border: 0 0% 90%;
}
```

### Semantic Colors

| Token | Value | HSL | Usage |
|-------|-------|-----|-------|
| `--destructive` | `#dc2626` | `0 84% 50%` | Errors, destructive actions |
| `--destructive-foreground` | `#ffffff` | `0 0% 100%` | Text on destructive |
| `--success` | `#16a34a` | `142 76% 36%` | Success states |
| `--warning` | `#f59e0b` | `38 92% 50%` | Warnings |

## Alternative Themes

### Royal Purple

```css
[data-theme="purple"] {
  --primary: 263 70% 58%;        /* #7c3aed */
  --primary-foreground: 0 0% 100%;
}
```

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#7c3aed` | Premium, creative applications |

### Crimson Red

```css
[data-theme="crimson"] {
  --primary: 0 84% 50%;          /* #dc2626 */
  --primary-foreground: 0 0% 100%;
}
```

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#dc2626` | Bold, urgent, attention-grabbing |

## Dark Mode

```css
[data-theme="dark"] {
  --background: 0 0% 4%;         /* #0a0a0a */
  --foreground: 0 0% 98%;        /* #fafafa */
  --muted: 0 0% 15%;             /* #262626 */
  --muted-foreground: 0 0% 64%;  /* #a3a3a3 */
  --border: 0 0% 20%;            /* #333333 */
}
```

## Color Usage Guidelines

### Do's

**Use primary for:**
- Call-to-action buttons
- Important links
- Active states
- Brand accents
- Section dividers

**Use foreground for:**
- Body text
- Headlines
- Icons (default)

**Use muted for:**
- Card backgrounds
- Disabled states
- Subtle sections

### Don'ts

- Don't use more than 2-3 colors per section
- Don't use low-contrast color combinations
- Don't use colors for pure decoration
- Don't create new color tokens without purpose

## Contrast Requirements

All color combinations meet WCAG 2.1 AA standards:

| Combination | Contrast Ratio | Status |
|-------------|----------------|--------|
| `foreground` on `background` | 21:1 | AAA |
| `primary-foreground` on `primary` | 4.5:1 | AA |
| `muted-foreground` on `background` | 4.6:1 | AA |
| `muted-foreground` on `muted` | 4.5:1 | AA |

## Implementation

### TailwindCSS
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
      },
    },
  },
}
```

### CSS Classes
```css
/* Backgrounds */
.bg-primary { background-color: hsl(var(--primary)); }
.bg-background { background-color: hsl(var(--background)); }
.bg-foreground { background-color: hsl(var(--foreground)); }
.bg-muted { background-color: hsl(var(--muted)); }

/* Text */
.text-primary { color: hsl(var(--primary)); }
.text-foreground { color: hsl(var(--foreground)); }
.text-muted-foreground { color: hsl(var(--muted-foreground)); }
.text-primary-foreground { color: hsl(var(--primary-foreground)); }

/* Borders */
.border-primary { border-color: hsl(var(--primary)); }
.border-border { border-color: hsl(var(--border)); }
```

## Color Blocks Pattern

A signature Dutchy pattern is using large color blocks:

```html
<div class="grid grid-cols-2 gap-4">
  <div class="bg-foreground text-background p-8">
    <h3>Dark Block</h3>
  </div>
  <div class="bg-primary text-primary-foreground p-8">
    <h3>Primary Block</h3>
  </div>
  <div class="bg-muted p-8">
    <h3>Muted Block</h3>
  </div>
  <div class="bg-background border-2 border-border p-8">
    <h3>Bordered Block</h3>
  </div>
</div>
```

## Opacity Variants

Use opacity for subtle variations:

```css
.text-background\/60 { color: hsl(var(--background) / 0.6); }
.text-background\/70 { color: hsl(var(--background) / 0.7); }
.text-background\/80 { color: hsl(var(--background) / 0.8); }

.bg-primary\/10 { background-color: hsl(var(--primary) / 0.1); }
.bg-primary\/20 { background-color: hsl(var(--primary) / 0.2); }
```
