# Building Dutchy Components

Create reusable JSX components that implement the Dutchy Design System for Bun server-side rendering.

## Understanding SSR Components

**Important:** Components in this architecture are **NOT traditional React components**. They are JSX templates rendered to static HTML on the server. There is no React runtime on the client.

Asset and script conventions for Bun SSR components:
- Put assets in `public/assets/{css,images,js}`.
- Mount `/assets/*` from `public/assets/*`.
- Write client-side scripts using only `const` and `let` (no `var`).

### What This Means

| Feature | Traditional React | Bun SSR |
|---------|------------------|---------|
| `useState` | Works | Not available |
| `useEffect` | Works | Not available |
| `onClick` handlers | Works | Renders to HTML attribute only |
| Re-renders | Automatic | Requires page refresh |
| Hydration | Yes | No |

### Adding Interactivity

For client-side behavior, use vanilla JavaScript:

```tsx
// Component (server-side)
const MobileMenu = () => (
  <div>
    <button id="menu-toggle" className="md:hidden">Menu</button>
    <nav id="mobile-nav" className="hidden">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </div>
);

// Layout includes the script
<Layout scripts={['/assets/js/mobile-menu.js']}>
  <MobileMenu />
</Layout>
```

```javascript
// public/assets/js/mobile-menu.js
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('hidden');
});
```

See [Client-Side Interactivity](./examples/client-side-js.md) for more patterns.

## Component Architecture

### Required Folder Convention

All reusable components must be created in their own folder with `index.tsx` as the entry:

```text
src/components/Button/index.tsx
src/components/Card/index.tsx
```

If your project uses `src/ui` as the root, apply the same structure:

```text
src/ui/Button/index.tsx
src/ui/Card/index.tsx
```

### Basic Structure

All components follow this pattern:

```tsx
import type { FC, ReactNode } from 'react';

interface ComponentProps {
  // Required props
  children: ReactNode;
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Component: FC<ComponentProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  return (
    <div className={`base-styles ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Component;
```

### Key Principles

1. **Server-Side Rendering**: Components render to HTML strings, no client-side hydration
2. **Composition**: Build complex UIs from simple, reusable pieces
3. **Props-Driven**: Configure components via props, not global state
4. **TypeScript**: Use interfaces for type-safe props
5. **Dutchy Styling**: Apply design system tokens consistently

## Core Components

### Layout

The root HTML document wrapper:

```tsx
// src/ui/Layout/index.tsx
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  title: string;
  children: ReactNode;
  meta?: {
    description?: string;
    keywords?: string;
    image?: string;
  };
  scripts?: string[];
}

const Layout: FC<LayoutProps> = ({
  title,
  children,
  meta,
  scripts = [],
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* SEO Meta Tags */}
        {meta?.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta?.keywords && (
          <meta name="keywords" content={meta.keywords} />
        )}

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        {meta?.description && (
          <meta property="og:description" content={meta.description} />
        )}
        {meta?.image && (
          <meta property="og:image" content={meta.image} />
        )}

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Styles */}
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body className="font-body bg-background text-foreground">
        {children}

        {/* Scripts */}
        {scripts.map((src, index) => (
          <script key={index} src={src} defer />
        ))}
      </body>
    </html>
  );
};

export default Layout;
```

### Header

Navigation header with Dutchy styling:

```tsx
// src/ui/Header/index.tsx
import type { FC } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  siteName?: string;
  currentPath?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
}

const Header: FC<HeaderProps> = ({
  siteName = 'Brand',
  currentPath = '/',
  navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  ctaText = 'Get Started',
  ctaHref = '/contact',
}) => {
  return (
    <header className="border-b-4 border-primary bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-bold uppercase tracking-tight"
          >
            {siteName}<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-150 ${
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
            href={ctaHref}
            className="hidden md:block bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors duration-150"
          >
            {ctaText}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
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

### Footer

Dark footer with link columns:

```tsx
// src/ui/Footer/index.tsx
import type { FC } from 'react';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  siteName?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
}

const Footer: FC<FooterProps> = ({
  siteName = 'Brand',
  description = 'Built with the Dutchy Design System.',
  columns = [
    {
      title: 'Navigation',
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
      ],
    },
  ],
  copyright,
}) => {
  const year = new Date().getFullYear();
  const copyrightText = copyright || `© ${year} ${siteName}. All rights reserved.`;

  return (
    <footer className="bg-foreground text-background border-t-8 border-primary">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a
              href="/"
              className="font-display text-2xl font-bold uppercase tracking-tight inline-block mb-6"
            >
              {siteName}<span className="text-primary">.</span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold uppercase tracking-wider text-sm mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-150 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-background/60 text-sm text-center">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

## UI Components

### Button

Multi-variant button component:

```tsx
// src/ui/Button/index.tsx
import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = [
    'inline-flex items-center justify-center gap-2',
    'font-bold uppercase tracking-wide',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' ');

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
    secondary: 'bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground',
    outline: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
    ghost: 'text-foreground hover:bg-muted',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-10 py-4 text-lg',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Card

Flexible card component:

```tsx
// src/ui/Card/index.tsx
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'bordered' | 'muted' | 'dark' | 'primary';
  interactive?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: FC<CardProps> = ({
  variant = 'default',
  interactive = false,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-background',
    accent: 'bg-background border-l-4 border-primary',
    bordered: 'bg-background border-2 border-border',
    muted: 'bg-muted',
    dark: 'bg-foreground text-background',
    primary: 'bg-primary text-primary-foreground',
  };

  const paddings = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };

  const interactiveStyles = interactive
    ? 'cursor-pointer transition-all duration-150 hover:border-primary hover:bg-muted'
    : '';

  return (
    <div
      className={`${variants[variant]} ${paddings[padding]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Sub-components
export const CardHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h3 className={`font-display text-xl font-bold uppercase ${className}`}>
    {children}
  </h3>
);

export const CardDescription: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`text-muted-foreground text-sm leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={className}>{children}</div>
);

export const CardFooter: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mt-6 pt-4 border-t border-border ${className}`}>
    {children}
  </div>
);

export default Card;
```

### Input

Form input component:

```tsx
// src/ui/Input/index.tsx
import type { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Input: FC<InputProps> = ({
  label,
  error,
  helpText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-bold uppercase tracking-wider"
        >
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <input
        id={inputId}
        className={`
          w-full border-2 px-4 py-3 text-base
          transition-colors duration-150
          focus:outline-none
          ${error
            ? 'border-destructive focus:border-destructive'
            : 'border-border focus:border-foreground'
          }
          ${props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : 'bg-background'}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}

      {helpText && !error && (
        <p className="text-muted-foreground text-sm">{helpText}</p>
      )}
    </div>
  );
};

export default Input;
```

### Textarea

Multi-line text input:

```tsx
// src/ui/Textarea/index.tsx
import type { FC, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Textarea: FC<TextareaProps> = ({
  label,
  error,
  helpText,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-xs font-bold uppercase tracking-wider"
        >
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        className={`
          w-full border-2 px-4 py-3 text-base
          min-h-[120px] resize-y
          transition-colors duration-150
          focus:outline-none
          ${error
            ? 'border-destructive focus:border-destructive'
            : 'border-border focus:border-foreground'
          }
          ${props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : 'bg-background'}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}

      {helpText && !error && (
        <p className="text-muted-foreground text-sm">{helpText}</p>
      )}
    </div>
  );
};

export default Textarea;
```

### Icon

Use one of these patterns:

- **Option A (Lucide):** fast integration with a broad icon catalog.
- **Option B (Native SVG registry):** fully controlled icon set with zero third-party icon dependency.

#### Option A: Lucide Dynamic Icon

```tsx
// src/ui/Icon/index.tsx
import type { FC, CSSProperties } from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  icon: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

// Convert kebab-case or snake_case to PascalCase
const toPascalCase = (str: string): string => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

const Icon: FC<IconProps> = ({
  icon,
  size = 24,
  className = '',
  style,
}) => {
  const iconName = toPascalCase(icon);
  const LucideIcon = (LucideIcons as any)[iconName];

  if (!LucideIcon) {
    console.warn(`Icon "${icon}" (${iconName}) not found in Lucide icons`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      className={className}
      style={style}
    />
  );
};

export default Icon;
```

API note:
- If you use **Option A (Lucide)**, use `icon="check"` and numeric `size={24}`.
- If you use **Option B (Registry)**, use `name="check"` and semantic size (`size="md"`).

#### Option B: Native SVG Icon Registry

```tsx
// src/ui/Icon/index.tsx
import type { FC } from 'react';

export type IconName =
  | 'dashboard'
  | 'transcripts'
  | 'settings'
  | 'generators'
  | 'segments'
  | 'chat'
  | 'chevron-down'
  | 'chevron-right'
  | 'search'
  | 'download'
  | 'upload'
  | 'refresh'
  | 'plus'
  | 'x'
  | 'check'
  | 'grid'
  | 'list'
  | 'edit'
  | 'trash'
  | 'sparkle'
  | 'save'
  | 'file'
  | 'key'
  | 'shield'
  | 'warning'
  | 'layers'
  | 'tags'
  | 'activity'
  | 'quote'
  | 'users'
  | 'bot'
  | 'workflow'
  | 'dna'
  | 'filter'
  | 'award'
  | 'profile'
  | 'logout'
  | 'pie'
  | 'bar-chart';

interface IconProps {
  name: IconName;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const icons: Record<IconName, { paths: string[]; viewBox?: string; filled?: boolean }> = {
  dashboard: {
    paths: [
      'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    ],
  },
  check: {
    paths: ['M5 13l4 4L19 7'],
  },
  search: {
    paths: ['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'],
  },
  // Add remaining icons from your registry here.
  transcripts: { paths: ['M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'] },
  settings: { paths: ['M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'] },
  generators: { paths: ['M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'] },
  segments: { paths: ['M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'] },
  chat: { paths: ['M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'] },
  'chevron-down': { paths: ['M19 9l-7 7-7-7'] },
  'chevron-right': { paths: ['M9 5l7 7-7 7'] },
  download: { paths: ['M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'] },
  upload: { paths: ['M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'] },
  refresh: { paths: ['M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'] },
  plus: { paths: ['M12 4v16m8-8H4'] },
  x: { paths: ['M6 18L18 6M6 6l12 12'] },
  grid: { paths: ['M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'] },
  list: { paths: ['M4 6h16M4 12h16M4 18h16'] },
  edit: { paths: ['M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'] },
  trash: { paths: ['M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'] },
  sparkle: { paths: ['M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'] },
  save: { paths: ['M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'] },
  file: { paths: ['M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'] },
  key: { paths: ['M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'] },
  shield: { paths: ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'] },
  warning: { paths: ['M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'] },
  layers: { paths: ['M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'] },
  tags: { paths: ['M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z'] },
  activity: { paths: ['M22 12h-4l-3 9L9 3l-3 9H2'] },
  quote: { paths: ['M3 4h5v5H3v2c0 2 1.5 3.5 3.5 3.5v2C3.5 16.5 1 14 1 10.5V4z', 'M15 4h5v5h-5v2c0 2 1.5 3.5 3.5 3.5v2c-3 0-5.5-2.5-5.5-6V4z'] },
  users: { paths: ['M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M9 11a4 4 0 100-8 4 4 0 000 8z', 'M23 21v-2a4 4 0 00-3-3.87', 'M16 3.13a4 4 0 010 7.75'] },
  bot: { paths: ['M12 2a2 2 0 012 2v1h3a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h3V4a2 2 0 012-2z', 'M9 12a1 1 0 100-2 1 1 0 000 2z', 'M15 12a1 1 0 100-2 1 1 0 000 2z', 'M9 16h6'] },
  workflow: { paths: ['M3 6a3 3 0 116 0 3 3 0 01-6 0z', 'M15 6a3 3 0 116 0 3 3 0 01-6 0z', 'M9 18a3 3 0 116 0 3 3 0 01-6 0z', 'M6 9v3a3 3 0 003 3h0', 'M18 9v3a3 3 0 01-3 3h0'] },
  dna: { viewBox: '0 0 512 512', filled: true, paths: ['m499.8,335.9c-3.7-10.6-15.4-16.2-26-12.5-26.1,9.2-50.8,16.8-74.1,23 16.1-97 1.7-166.3-43-207-49.6-45-126.4-45.2-193.9-32.7 8.5-27.5 17.8-51.1 25.1-66.8 4.7-10.2 0.3-22.4-10-27.1-10.2-4.7-22.4-0.3-27.1,9.9-1.8,3.8-19.5,42.7-33.6,94.4-51.7,14.1-90.6,31.9-94.4,33.6-10.2,4.7-14.7,16.9-9.9,27.1 4.7,10.2 16.9,14.7 27.1,10 15.6-7.2 39.3-16.6 66.7-25.1-12.5,67.5-12.4,144.3 32.7,193.9 29.9,32.9 75.4,49.4 135.9,49.4 21.7,0 45.4-2.1 71-6.4-6.2,23.3-13.8,48-23,74.1-3.7,10.6 1.7,22.7 12.5,26 13.4,4.1 23.1-4.1 26-12.5 12.1-34.4 21.7-66.7 28.8-96.6 30-7.1 62.2-16.7 96.6-28.8 10.8-3.6 16.4-15.3 12.6-25.9z'] },
  filter: { paths: ['M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'] },
  award: { paths: ['M12 2a7 7 0 100 14 7 7 0 000-14z', 'M8.21 13.89L7 23l5-3 5 3-1.21-9.12'] },
  profile: { paths: ['M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2', 'M12 11a4 4 0 100-8 4 4 0 000 8z'] },
  logout: { paths: ['M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4', 'M16 17l5-5-5-5', 'M21 12H9'] },
  pie: { paths: ['M21.21 15.89A10 10 0 118 2.83', 'M22 12A10 10 0 0012 2v10z'] },
  'bar-chart': { paths: ['M18 20V10', 'M12 20V4', 'M6 20v-6'] },
};

const Icon: FC<IconProps> = ({ name, className = '', size = 'md' }) => {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      fill={icon.filled ? 'currentColor' : 'none'}
      stroke={icon.filled ? 'none' : 'currentColor'}
      viewBox={icon.viewBox || '0 0 24 24'}
    >
      {icon.paths.map((d) => (
        <path
          key={d}
          {...(icon.filled
            ? {}
            : { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 })}
          d={d}
        />
      ))}
    </svg>
  );
};

export default Icon;
```

## Pattern Components

### Hero Section

Split-layout hero:

```tsx
// src/ui/HeroSection/index.tsx
import type { FC, ReactNode } from 'react';

interface HeroSectionProps {
  tagline?: string;
  title: ReactNode;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  visual?: ReactNode;
}

const HeroSection: FC<HeroSectionProps> = ({
  tagline,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
}) => {
  return (
    <section className="py-16 md:py-24 border-b-8 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {tagline && (
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
                {tagline}
              </p>
            )}

            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              {title}
            </h1>

            {description && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors duration-150"
                  >
                    {primaryCta.text}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors duration-150"
                  >
                    {secondaryCta.text}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Visual */}
          {visual && (
            <div className="aspect-square bg-muted">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

### Stats Grid

Tight grid stats display:

```tsx
// src/ui/StatsGrid/index.tsx
import type { FC } from 'react';

interface Stat {
  value: string;
  label: string;
  variant?: 'dark' | 'primary' | 'light' | 'muted';
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

const StatsGrid: FC<StatsGridProps> = ({
  stats,
  columns = 4,
}) => {
  const variants = {
    dark: 'bg-foreground text-background',
    primary: 'bg-primary text-primary-foreground',
    light: 'bg-background',
    muted: 'bg-muted',
  };

  const textVariants = {
    dark: 'text-background/60',
    primary: 'text-primary-foreground/70',
    light: 'text-muted-foreground',
    muted: 'text-muted-foreground',
  };

  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-0.5 bg-border`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${variants[stat.variant || 'light']} p-8`}
        >
          <p className="font-display text-4xl md:text-5xl font-bold mb-2">
            {stat.value}
          </p>
          <p className={`${textVariants[stat.variant || 'light']} text-sm uppercase tracking-wider`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
```

### Section Title

Consistent section headings:

```tsx
// src/ui/SectionTitle/index.tsx
import type { FC, ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  underline?: boolean;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  children,
  subtitle,
  underline = true,
  className = '',
}) => {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
        {children}
      </h2>
      {underline && (
        <div className="h-2 w-24 bg-primary" />
      )}
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
```

### Feature Grid

Grid of feature cards:

```tsx
// src/ui/FeatureGrid/index.tsx
import type { FC, ReactNode } from 'react';
import Card, { CardTitle, CardDescription } from '@/ui/Card';

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

const FeatureGrid: FC<FeatureGridProps> = ({
  features,
  columns = 3,
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-6`}>
      {features.map((feature, index) => (
        <Card key={index} variant="accent">
          {feature.icon && (
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6">
              <div className="text-primary-foreground">
                {feature.icon}
              </div>
            </div>
          )}
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
```

## Page Component Pattern

Complete page component with all parts:

```tsx
// src/routes/about/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import HeroSection from '@/ui/HeroSection';
import SectionTitle from '@/ui/SectionTitle';
import FeatureGrid from '@/ui/FeatureGrid';
import StatsGrid from '@/ui/StatsGrid';
import Icon from '@/ui/Icon';

interface AboutPageProps {
  request: Request;
}

const AboutPage: FC<AboutPageProps> = ({ request }) => {
  const url = new URL(request.url);

  // Icon props depend on the Icon implementation you choose above:
  // Option A (Lucide): <Icon icon="check" size={24} />
  // Option B (Registry): <Icon name="check" size="md" />
  const features = [
    {
      icon: <Icon icon="check" size={24} />,
      title: 'No Rounded Corners',
      description: 'Sharp edges convey confidence and precision.',
    },
    {
      icon: <Icon icon="type" size={24} />,
      title: 'Bold Typography',
      description: 'Heavy font weights create visual hierarchy.',
    },
    {
      icon: <Icon icon="palette" size={24} />,
      title: 'High Contrast',
      description: 'Strong colors against neutral backgrounds.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Components', variant: 'dark' as const },
    { value: '6', label: 'Categories', variant: 'primary' as const },
    { value: '100%', label: 'Accessible', variant: 'light' as const },
    { value: 'MIT', label: 'Licensed', variant: 'muted' as const },
  ];

  return (
    <Layout
      title="About | Dutchy Design System"
      meta={{
        description: 'Learn about the Dutchy Design System and its Dutch-inspired design principles.',
      }}
    >
      <Header currentPath={url.pathname} />

      <HeroSection
        tagline="About Us"
        title={
          <>
            Our<br />
            <span className="text-primary">Story.</span>
          </>
        }
        description="Inspired by Dutch graphic design traditions, built for modern web applications."
      />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle>Design Principles</SectionTitle>
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle>By the Numbers</SectionTitle>
          <StatsGrid stats={stats} />
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default AboutPage;
```

## Best Practices

### 1. Use Composition

Build complex UIs from simple components:

```tsx
// Good: Composable
<Card variant="accent">
  <CardTitle>Title</CardTitle>
  <CardDescription>Description</CardDescription>
</Card>

// Avoid: Monolithic
<ComplexCard
  title="Title"
  description="Description"
  variant="accent"
  showFooter={true}
  footerContent={...}
/>
```

### 2. Keep Components Focused

One component, one responsibility:

```tsx
// Good: Focused
<Header />
<HeroSection />
<FeatureGrid />
<Footer />

// Avoid: Kitchen sink
<PageWithEverything />
```

### 3. Use TypeScript Strictly

Define all prop types:

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary'; // Specific union type
  size?: 'sm' | 'md' | 'lg';        // Optional with union
  onClick?: () => void;              // Function type
  children: ReactNode;               // Required children
}
```

### 4. Apply Dutchy Tokens

Use design system values consistently:

```tsx
// Good: Design tokens
className="bg-primary text-primary-foreground border-l-4 border-primary"

// Avoid: Arbitrary values
className="bg-orange-500 text-white border-l-4 border-orange-500"
```

### 5. Handle Edge Cases

Provide sensible defaults:

```tsx
const Button: FC<ButtonProps> = ({
  variant = 'primary',      // Default variant
  size = 'md',              // Default size
  className = '',           // Empty string, not undefined
  children,
  ...props
}) => { ... };
```
