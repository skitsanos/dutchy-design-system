# Building Dutchy Components

Create reusable JSX components that implement the Dutchy Design System for Bun server-side rendering.

## Understanding SSR Components

**Important:** Components in this architecture are **NOT traditional React components**. They are JSX templates rendered to static HTML on the server. There is no React runtime on the client.

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

Dynamic icon component using Lucide:

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
