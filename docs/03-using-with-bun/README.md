# Using Dutchy Design System with Bun

Build high-performance web applications using the Dutchy Design System with Bun's native JSX server-side rendering.

## Overview

Bun provides built-in support for JSX/TSX files and server-side rendering through `react-dom/server`. This guide shows you how to implement the Dutchy Design System as JSX components rendered on the server.

### Why Bun + JSX?

- **Zero Build Step**: Bun natively understands JSX/TSX
- **Streaming HTML**: Efficient `renderToReadableStream()` for fast TTFB
- **File-Based Routing**: Automatic route discovery from filesystem
- **TypeScript Native**: No transpilation needed
- **Fast Cold Starts**: Instant server startup

## Important: SSR-Only Components

**These are NOT traditional React components.** Bun's SSR renders JSX to static HTML on the server - there is no React runtime on the client. This means:

- **No `useState`** - Components cannot have state
- **No `useEffect`** - No lifecycle hooks
- **No event handlers in JSX** - `onClick`, `onChange`, etc. won't work as React handlers
- **No client-side hydration** - The HTML is static once delivered

### Interactivity Requires Vanilla JavaScript

For client-side interactivity, you must use vanilla JavaScript loaded via `<script>` tags:

```tsx
// Component renders static HTML
const Counter = () => (
  <div>
    <span id="count">0</span>
    <button id="increment-btn" className="btn btn-primary">
      Increment
    </button>
  </div>
);

// Client-side JS handles interactivity
// public/assets/js/counter.js
document.getElementById('increment-btn').addEventListener('click', () => {
  const countEl = document.getElementById('count');
  countEl.textContent = parseInt(countEl.textContent) + 1;
});
```

### When to Use This Approach

**Best for:**
- Content-focused websites (blogs, documentation, marketing pages)
- Server-rendered forms with POST handlers
- Sites prioritizing SEO and fast initial load
- Applications where most interactivity is server-driven

**Consider CSR (Client-Side React) if you need:**
- Complex stateful UI (real-time dashboards, interactive editors)
- Heavy client-side state management
- Single-page application behavior

## Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                      Bun.serve()                            │
├─────────────────────────────────────────────────────────────┤
│  Request → Route Matcher → Handler                          │
│                              │                              │
│            ┌─────────────────┼─────────────────┐            │
│            │                 │                 │            │
│            ▼                 ▼                 ▼            │
│     JSX Component      API Handler      Static Asset        │
│            │                 │                 │            │
│            ▼                 │                 │            │
│  renderToReadableStream      │                 │            │
│            │                 │                 │            │
│            ▼                 ▼                 ▼            │
│      HTML Stream        JSON Response    File Stream        │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start

### 1. Create Project

```bash
mkdir dutchy-bun-app
cd dutchy-bun-app
bun init
```

### 2. Install Dependencies

```bash
bun add react react-dom
bun add -d @types/react @types/react-dom typescript
```

### 3. Configure TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["ESNext", "DOM"],
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  }
}
```

### 4. Create Server Entry Point

```typescript
// src/index.ts
import { serve } from 'bun';
import { renderToReadableStream } from 'react-dom/server';
import { createElement } from 'react';

const PORT = process.env.PORT || 3000;

serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    // Import and render JSX component
    if (url.pathname === '/') {
      const { default: HomePage } = await import('./routes/index.tsx');
      const stream = await renderToReadableStream(
        createElement(HomePage, { request: req })
      );
      return new Response(stream, {
        headers: { 'Content-Type': 'text/html' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`Server running at http://localhost:${PORT}`);
```

### 5. Create Your First Component

```tsx
// src/routes/index.tsx
import Layout from '@/ui/Layout';

const HomePage = ({ request }: { request: Request }) => {
  return (
    <Layout title="Welcome">
      <section className="py-16 md:py-24 border-b-8 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
            Hello<br />
            <span className="text-primary">Dutchy.</span>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
```

### 6. Run the Server

```bash
bun run src/index.ts
```

## Documentation

### Core Concepts

- [Getting Started](./getting-started.md) - Full setup guide
- [Project Structure](./project-structure.md) - Recommended file organization
- [Routing](./routing.md) - File-based routing system
- [Components](./components.md) - Building Dutchy components

### Examples

- [Layout Component](./examples/layout.md) - HTML document wrapper
- [Page Components](./examples/pages.md) - Route handlers
- [UI Components](./examples/ui-components.md) - Reusable elements
- [Forms](./examples/forms.md) - Form handling
- [API Routes](./examples/api-routes.md) - JSON endpoints

## Key Features

### Streaming HTML

```typescript
const stream = await renderToReadableStream(
  createElement(Component, props)
);
return new Response(stream, {
  headers: { 'Content-Type': 'text/html' }
});
```

### File-Based Routing

```text
src/routes/
├── index.tsx          → GET /
├── about/
│   └── index.tsx      → GET /about
├── api/
│   └── users/
│       ├── index.ts   → GET /api/users
│       ├── get.ts     → GET /api/users (explicit)
│       └── post.ts    → POST /api/users
└── products/
    └── $id/
        └── index.tsx  → GET /products/:id
```

Method is derived from filename: `index.ts` → GET, `get.ts` → GET, `post.ts` → POST, etc.

### Component Props

All page components receive the `Request` object:

```tsx
interface PageProps {
  request: Request;
}

const Page = ({ request }: PageProps) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  // ...
};
```

## Production Considerations

### Static Assets

```typescript
// Serve from public/ directory
if (url.pathname.startsWith('/assets/')) {
  const file = Bun.file(`public${url.pathname}`);
  if (await file.exists()) {
    return new Response(file.stream(), {
      headers: {
        'Content-Type': file.type,
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }
}
```

### Environment Variables

```typescript
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
```

### Error Handling

```typescript
serve({
  port: PORT,
  error(error) {
    console.error('Server error:', error);
    return new Response('Internal Server Error', { status: 500 });
  },
  async fetch(req) {
    try {
      // ... route handling
    } catch (error) {
      console.error('Request error:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
});
```

## Compatibility

- **Bun**: 1.3.0+
- **React**: 19.0.0+
- **TypeScript**: 5.0.0+

## Next Steps

1. Read the [Getting Started](./getting-started.md) guide
2. Explore the [Project Structure](./project-structure.md)
3. Learn about [Routing](./routing.md)
4. Build [Components](./components.md) with the Dutchy Design System
