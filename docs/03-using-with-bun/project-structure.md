# Project Structure

Recommended file organization for Bun + JSX projects using the Dutchy Design System.

## Directory Layout

```text
my-dutchy-app/
├── src/
│   ├── index.ts                    # Server entry point
│   ├── core/
│   │   └── configuration.ts        # App configuration
│   ├── routes/                     # Page components (file-based routing)
│   │   ├── index.tsx               # GET /
│   │   ├── about/
│   │   │   └── index.tsx           # GET /about
│   │   ├── contact/
│   │   │   ├── index.tsx           # GET /contact
│   │   │   └── post.ts             # POST /contact
│   │   ├── api/
│   │   │   ├── health/
│   │   │   │   └── index.ts        # GET /api/health
│   │   │   └── users/
│   │   │       ├── index.ts        # GET /api/users
│   │   │       ├── post.ts         # POST /api/users
│   │   │       └── $id/
│   │   │           ├── index.ts    # GET /api/users/:id
│   │   │           ├── put.ts      # PUT /api/users/:id
│   │   │           └── delete.ts   # DELETE /api/users/:id
│   │   └── products/
│   │       ├── index.tsx           # GET /products
│   │       └── $slug/
│   │           └── index.tsx       # GET /products/:slug
│   ├── ui/                         # Reusable UI components
│   │   ├── Layout/
│   │   │   └── index.tsx
│   │   ├── Header/
│   │   │   └── index.tsx
│   │   ├── Footer/
│   │   │   └── index.tsx
│   │   ├── Button/
│   │   │   └── index.tsx
│   │   ├── Card/
│   │   │   └── index.tsx
│   │   ├── Input/
│   │   │   └── index.tsx
│   │   ├── Icon/
│   │   │   └── index.tsx
│   │   ├── PageNotFound/
│   │   │   └── index.tsx
│   │   └── ...
│   ├── utils/                      # Utility functions
│   │   ├── loadRoutes.ts           # Dynamic route loader
│   │   ├── staticAssets.ts         # Static file serving
│   │   ├── response.ts             # Response helpers
│   │   └── mimeTypes.ts            # MIME type mapping
│   ├── middleware/                 # Middleware functions
│   │   ├── cors.ts                 # CORS handling
│   │   └── auth.ts                 # Authentication
│   ├── schemas/                    # Validation schemas (Zod)
│   │   └── contact.ts
│   ├── libs/                       # Utility libraries
│   │   ├── string/
│   │   └── array/
│   └── styles/
│       └── input.css               # Tailwind input file
├── public/                         # Static assets (served as-is)
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css          # Compiled Tailwind
│   │   ├── js/
│   │   │   └── main.js             # Client-side JS
│   │   └── img/
│   │       ├── logo.svg
│   │       └── favicon.ico
│   └── robots.txt
├── data/                           # Static data files
│   └── products.json
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Directory Descriptions

### `src/`

Main source code directory.

#### `src/index.ts`

Server entry point. Initializes `Bun.serve()` and configures routing.

```typescript
import { serve } from 'bun';
import { loadRoutes, resolveRoute } from '@/utils/loadRoutes';
import staticAssets from '@/utils/staticAssets';

const PORT = process.env.PORT || 3000;

async function startServer() {
  const routes = await loadRoutes('routes');
  const assets = staticAssets({ assetsPath: 'public', urlPrefix: '/assets' });

  serve({
    port: PORT,
    routes: {
      '/assets/*': assets,
    },
    async fetch(req) {
      const resolved = resolveRoute(routes, req);
      return resolved
        ? resolved.handler(resolved.request)
        : new Response('Not Found', { status: 404 });
    }
  });
}

startServer();
```

#### `src/core/`

Application-wide configuration and constants.

```typescript
// src/core/configuration.ts
export const config = {
  siteName: 'My Dutchy App',
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  cdnUrl: process.env.CDN_URL || '/assets',
  apiVersion: 'v1',
};
```

#### `src/routes/`

File-based routing directory. Each file or folder maps to a URL path.

| File Pattern | HTTP Method | URL Path |
|--------------|-------------|----------|
| `index.tsx` | GET | `/` |
| `about/index.tsx` | GET | `/about` |
| `contact/index.tsx` | GET | `/contact` |
| `contact/post.ts` | POST | `/contact` |
| `api/health/index.ts` | GET | `/api/health` |
| `products/$slug/index.tsx` | GET | `/products/:slug` |

#### `src/ui/`

Reusable UI components organized by feature. Each component gets its own folder.

```text
ui/
├── Layout/
│   └── index.tsx       # Main component
├── Button/
│   └── index.tsx
└── Card/
    └── index.tsx
```

**Why folder-per-component?**

- Easy to add component-specific assets
- Clear component boundaries
- Simple imports: `import Button from '@/ui/Button'`

#### `src/utils/`

Utility functions used across the application.

```typescript
// src/utils/response.ts
export const response = {
  json: <T>(data: T, status = 200) =>
    Response.json({ result: data }, { status }),

  error: (message: string, status = 400) =>
    Response.json({ error: { message } }, { status }),

  html: (content: string, status = 200) =>
    new Response(content, {
      status,
      headers: { 'Content-Type': 'text/html' }
    }),

  redirect: (url: string, status: 301 | 302 = 302) =>
    Response.redirect(url, status),

  notFound: () =>
    Response.json({ error: { message: 'Not Found' } }, { status: 404 }),
};
```

#### `src/middleware/`

Request/response middleware functions.

```typescript
// src/middleware/cors.ts
export interface CorsOptions {
  origin?: string | string[];
  methods?: string[];
  headers?: string[];
}

const defaultOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  headers: ['Content-Type', 'Authorization'],
};

export const corsHeaders = (options: CorsOptions = {}) => {
  const opts = { ...defaultOptions, ...options };
  return {
    'Access-Control-Allow-Origin': Array.isArray(opts.origin)
      ? opts.origin.join(', ')
      : opts.origin || '*',
    'Access-Control-Allow-Methods': opts.methods!.join(', '),
    'Access-Control-Allow-Headers': opts.headers!.join(', '),
  };
};

export const corsResponse = (options?: CorsOptions) =>
  new Response(null, { status: 204, headers: corsHeaders(options) });
```

#### `src/schemas/`

Validation schemas using Zod.

```typescript
// src/schemas/contact.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export type ContactForm = z.infer<typeof contactSchema>;
```

### `public/`

Static files served directly. Accessible via `/assets/*` URLs.

```text
public/
├── assets/
│   ├── css/
│   │   └── styles.css      # Compiled Tailwind CSS
│   ├── js/
│   │   └── main.js         # Client-side JavaScript
│   └── img/
│       ├── logo.svg
│       ├── favicon.ico
│       └── og-image.png    # Open Graph image
└── robots.txt
```

### `data/`

Static data files (JSON, YAML) loaded at startup or on-demand.

```typescript
// Load at startup
import products from '@data/products.json';

// Or load on-demand
const products = await Bun.file('data/products.json').json();
```

## Path Aliases

Configure path aliases in `tsconfig.json` for cleaner imports:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@data/*": ["data/*"]
    }
  }
}
```

**Usage:**

```typescript
// Instead of:
import Layout from '../../../ui/Layout';
import products from '../../../data/products.json';

// Use:
import Layout from '@/ui/Layout';
import products from '@data/products.json';
```

## Component Organization

### Single-File Component

Simple components in a single file:

```tsx
// src/ui/Button/index.tsx
import type { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-bold uppercase tracking-wide transition-colors';

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-foreground text-background hover:bg-foreground/90',
    outline: 'border-2 border-foreground hover:bg-foreground hover:text-background',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Multi-File Component

Complex components with multiple parts:

```text
ui/Card/
├── index.tsx           # Main export & Card component
├── CardHeader.tsx      # Sub-component
├── CardContent.tsx     # Sub-component
└── CardFooter.tsx      # Sub-component
```

```tsx
// src/ui/Card/index.tsx
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'bordered';
}

const Card: FC<CardProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-background',
    accent: 'bg-background border-l-4 border-primary',
    bordered: 'bg-background border-2 border-border',
  };

  return (
    <div className={`p-8 ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Sub-components
export const CardHeader: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <h3 className="font-display text-xl font-bold uppercase">{children}</h3>
);

export const CardDescription: FC<{ children: ReactNode }> = ({ children }) => (
  <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
);

export const CardContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const CardFooter: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mt-6 pt-4 border-t border-border">{children}</div>
);

export default Card;
```

## Route Organization

### Page Routes (JSX)

For pages that render HTML:

```tsx
// src/routes/about/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';

interface AboutPageProps {
  request: Request;
}

const AboutPage: FC<AboutPageProps> = ({ request }) => {
  const url = new URL(request.url);

  return (
    <Layout title="About Us">
      <Header currentPath={url.pathname} />
      <main className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl font-bold uppercase tracking-tighter mb-8">
            About<span className="text-primary">.</span>
          </h1>
          {/* Page content */}
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
```

### API Routes (JSON)

For API endpoints that return JSON:

```typescript
// src/routes/api/health/index.ts
export default async (req: Request) => {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
```

### Form Handlers

For POST requests:

```typescript
// src/routes/contact/post.ts
import { contactSchema } from '@/schemas/contact';

export default async (req: Request) => {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // Process form data...

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: { message: 'Invalid form data' } },
      { status: 400 }
    );
  }
};
```

## Environment Variables

Create `.env` for local development:

```bash
# .env
PORT=3000
NODE_ENV=development
SITE_URL=http://localhost:3000
CDN_URL=/assets
```

Access in code:

```typescript
const PORT = process.env.PORT || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
```

## Best Practices

### 1. Consistent Naming

- **Components**: PascalCase (`Button`, `Header`, `PageNotFound`)
- **Files**: kebab-case or match component name (`index.tsx`, `loadRoutes.ts`)
- **Folders**: kebab-case for utils, PascalCase for components

### 2. Single Responsibility

Each file should have one primary purpose:
- One component per file (with optional sub-components)
- One utility function group per file
- One schema per file

### 3. Explicit Exports

Use named exports for multiple items, default exports for main component:

```typescript
// Named exports for utilities
export const formatDate = () => {};
export const parseDate = () => {};

// Default export for component
export default Button;
```

### 4. Type Safety

Always define interfaces for component props:

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
```

### 5. Colocation

Keep related files together:
- Component + types in same folder
- Route + its POST handler in same folder
- Schema near where it's used
