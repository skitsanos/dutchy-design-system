# Dutchy Design System

A bold, structural design system inspired by Dutch design principles. Zero border radius, strong typography, and high contrast aesthetics.

## Features

- **Zero Border Radius** — Sharp, architectural edges throughout
- **Bold Typography** — Space Grotesk for display, Inter for body, JetBrains Mono for code
- **Warm Color Palette** — Orange primary with cream backgrounds
- **Tailwind CSS** — Built with utility-first CSS framework

## Quick Start

```html
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Documentation

### Design System
- [Overview](docs/01-design-system/README.md)
- **Tokens:** [Colors](docs/01-design-system/tokens/colors.md) · [Typography](docs/01-design-system/tokens/typography.md) · [Spacing](docs/01-design-system/tokens/spacing.md) · [Effects](docs/01-design-system/tokens/effects.md)
- **Components:** [Buttons](docs/01-design-system/components/buttons.md) · [Cards](docs/01-design-system/components/cards.md) · [Forms](docs/01-design-system/components/forms.md) · [Navigation](docs/01-design-system/components/navigation.md) · [Layout](docs/01-design-system/components/layout.md)
- **Patterns:** [Hero](docs/01-design-system/patterns/hero.md) · [Grids](docs/01-design-system/patterns/grids.md) · [Footer](docs/01-design-system/patterns/footer.md)

### HTML Showcase
Ready-to-use page templates in [docs/02-html-showcase/](docs/02-html-showcase/README.md)

### Using with Bun
Server-side rendering with Bun's JSX support in [docs/03-using-with-bun/](docs/03-using-with-bun/README.md)

## Run Locally

```bash
# Using Podman
podman build -t dutchy-website ./website
podman run -d -p 8080:80 dutchy-website

# Using Docker
docker build -t dutchy-website ./website
docker run -d -p 8080:80 dutchy-website
```

Visit `http://localhost:8080`

## License

MIT
