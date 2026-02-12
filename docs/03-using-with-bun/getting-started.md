# Getting Started

A complete guide to setting up a Bun project with JSX server-side rendering and the Dutchy Design System.

> **Note:** This setup creates **server-rendered static HTML**. JSX is used as a templating language - there is no React runtime on the client. For interactivity, you'll use vanilla JavaScript. See [Client-Side Interactivity](./examples/client-side-js.md) for patterns.

## Prerequisites

- [Bun](https://bun.sh) 1.3.9 or later
- Basic knowledge of React/JSX syntax
- Familiarity with TypeScript

## Installation

### 1. Install Bun

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows (via PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# Verify installation
bun --version
```

### 2. Create New Project

```bash
mkdir my-dutchy-app
cd my-dutchy-app
bun init -y
```

### 3. Install Dependencies

```bash
# Core dependencies
bun add react react-dom

# Development dependencies
bun add -d @types/react @types/react-dom typescript

# Optional: Tailwind CSS
bun add -d tailwindcss
```

## Project Setup

### TypeScript Configuration

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["ESNext", "DOM"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Package Configuration

Update `package.json`:

```json
{
  "name": "my-dutchy-app",
  "type": "module",
  "scripts": {
    "dev": "bun run --watch src/index.ts",
    "start": "NODE_ENV=production bun run src/index.ts",
    "build:css": "tailwindcss -i ./src/styles/input.css -o ./public/assets/css/styles.css",
    "build:css:watch": "tailwindcss -i ./src/styles/input.css -o ./public/assets/css/styles.css --watch"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/bun": "latest",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0"
  }
}
```

### Tailwind CSS Configuration

Create `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
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
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
};
```

Create `src/styles/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: 25 95% 53%;
    --primary-foreground: 0 0% 100%;
    --background: 0 0% 100%;
    --foreground: 0 0% 4%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 45%;
    --border: 0 0% 90%;
    --destructive: 0 84% 50%;
    --destructive-foreground: 0 0% 100%;
  }

  * {
    border-radius: 0 !important;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}
```

## Create Directory Structure

```bash
mkdir -p src/{routes,ui,utils,middleware}
mkdir -p public/assets/{css,js,img}
```

Your project structure should look like:

```text
my-dutchy-app/
├── src/
│   ├── index.ts              # Server entry point
│   ├── routes/               # Page components
│   │   └── index.tsx         # Home page
│   ├── ui/                   # Reusable components
│   │   ├── Layout/
│   │   ├── Header/
│   │   └── Footer/
│   ├── utils/                # Utility functions
│   │   ├── loadRoutes.ts
│   │   └── staticAssets.ts
│   ├── middleware/           # Middleware functions
│   │   └── cors.ts
│   └── styles/
│       └── input.css
├── public/
│   └── assets/
│       ├── css/
│       ├── js/
│       └── img/
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Server Entry Point

Create `src/index.ts`:

```typescript
import { serve } from 'bun';
import {
  createReactHandler,
  loadRoutes,
  resolveRoute,
} from './utils/loadRoutes';
import staticAssets from './utils/staticAssets';

const PORT = process.env.PORT || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

async function startServer() {
  const routes = await loadRoutes('routes');
  const assetHandler = staticAssets({
    assetsPath: 'public',
    urlPrefix: '/assets',
    cacheControl: IS_PRODUCTION
      ? 'public, max-age=31536000, immutable'
      : 'no-cache',
  });

  serve({
    port: PORT,
    development: !IS_PRODUCTION,

    routes: {
      '/assets/*': assetHandler,
    },

    async fetch(req) {
      try {
        const resolved = resolveRoute(routes, req);
        if (resolved) {
          return resolved.handler(resolved.request);
        }

        const { default: NotFound } = await import('./ui/PageNotFound/index.tsx');
        return createReactHandler(NotFound)(req);
      } catch (error) {
        console.error('Route error:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    },

    error(error) {
      console.error('Server error:', error);
      return new Response('Internal Server Error', { status: 500 });
    },
  });

  console.log(`Server running at http://localhost:${PORT}`);
}

startServer();
```

## Create Base Components

### Layout Component

Create `src/ui/Layout/index.tsx`:

```tsx
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  title: string;
  children: ReactNode;
  meta?: {
    description?: string;
    keywords?: string;
  };
}

const Layout: FC<LayoutProps> = ({ title, children, meta }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {meta?.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta?.keywords && (
          <meta name="keywords" content={meta.keywords} />
        )}

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind CSS */}
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body className="font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
};

export default Layout;
```

### Header Component

Create `src/ui/Header/index.tsx`:

```tsx
import type { FC } from 'react';

interface HeaderProps {
  currentPath?: string;
}

const Header: FC<HeaderProps> = ({ currentPath = '/' }) => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="border-b-4 border-primary bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-bold uppercase tracking-tight"
          >
            Brand<span className="text-primary">.</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentPath === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden md:block bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

### Footer Component

Create `src/ui/Footer/index.tsx`:

```tsx
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-foreground text-background border-t-8 border-primary py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="font-display text-2xl font-bold uppercase tracking-tight inline-block mb-6"
            >
              Brand<span className="text-primary">.</span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed">
              Built with the Dutchy Design System. Bold, structured, confident.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>hello@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 mt-12 pt-6">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-background/60 text-sm text-center">
            &copy; {new Date().getFullYear()} Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### 404 Page

Create `src/ui/PageNotFound/index.tsx`:

```tsx
import type { FC } from 'react';
import Layout from '../Layout';
import Header from '../Header';
import Footer from '../Footer';

interface PageNotFoundProps {
  request?: Request;
}

const PageNotFound: FC<PageNotFoundProps> = ({ request }) => {
  return (
    <Layout title="Page Not Found">
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-display text-8xl md:text-9xl font-bold text-muted mb-8">
            404
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide inline-block hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default PageNotFound;
```

## Create Home Page

Create `src/routes/index.tsx`:

```tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';

interface HomePageProps {
  request: Request;
}

const HomePage: FC<HomePageProps> = ({ request }) => {
  const url = new URL(request.url);

  return (
    <Layout
      title="Welcome | Dutchy Design System"
      meta={{
        description: 'A bold, structured design language inspired by Dutch graphic design traditions.',
      }}
    >
      <Header currentPath={url.pathname} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b-8 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Design System
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Bold<br />
                <span className="text-primary">Design.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                A structured design language inspired by Dutch graphic design traditions.
                Built for clarity, confidence, and visual impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/docs"
                  className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/components"
                  className="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
                >
                  Components
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-0.5 bg-border">
              <div className="bg-foreground text-background p-8">
                <p className="font-display text-4xl font-bold mb-2">50+</p>
                <p className="text-background/60 text-sm uppercase tracking-wider">
                  Components
                </p>
              </div>
              <div className="bg-primary text-primary-foreground p-8">
                <p className="font-display text-4xl font-bold mb-2">6</p>
                <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                  Categories
                </p>
              </div>
              <div className="bg-background p-8">
                <p className="font-display text-4xl font-bold mb-2">100%</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Accessible
                </p>
              </div>
              <div className="bg-muted p-8">
                <p className="font-display text-4xl font-bold mb-2">MIT</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Licensed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              Features
            </h2>
            <div className="h-2 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'No Rounded Corners',
                description: 'Sharp edges convey confidence and precision throughout the design system.',
              },
              {
                title: 'Bold Typography',
                description: 'Heavy font weights and tight letter-spacing create visual hierarchy.',
              },
              {
                title: 'High Contrast',
                description: 'Strong primary colors against neutral backgrounds for clarity.',
              },
              {
                title: 'Structured Grids',
                description: 'Deliberate spacing and consistent gaps create visual rhythm.',
              },
              {
                title: 'Functional Decoration',
                description: 'Borders and blocks serve both aesthetic and functional purposes.',
              },
              {
                title: 'Theme Support',
                description: 'Multiple color themes via CSS custom properties.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border-l-4 border-primary bg-background p-8"
              >
                <h3 className="font-display text-xl font-bold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default HomePage;
```

## Build and Run

### Development Mode

```bash
# Build Tailwind CSS (in one terminal)
bun run build:css:watch

# Start server with hot reload (in another terminal)
bun run dev
```

### Production Mode

```bash
# Build CSS
bun run build:css

# Start production server
bun run start
```

## Next Steps

- Learn about [Project Structure](./project-structure.md)
- Implement [File-Based Routing](./routing.md)
- Build [Dutchy Components](./components.md)
