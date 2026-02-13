# Layout Component

The Layout component is the root HTML document wrapper for all pages.

## Basic Implementation

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
    url?: string;
  };
  scripts?: string[];
  styles?: string[];
}

const Layout: FC<LayoutProps> = ({
  title,
  children,
  meta,
  scripts = [],
  styles = [],
}) => {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />

        {/* SEO Meta Tags */}
        {meta?.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta?.keywords && (
          <meta name="keywords" content={meta.keywords} />
        )}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {meta?.description && (
          <meta property="og:description" content={meta.description} />
        )}
        {meta?.image && (
          <meta property="og:image" content={meta.image} />
        )}
        {meta?.url && (
          <meta property="og:url" content={meta.url} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {meta?.description && (
          <meta name="twitter:description" content={meta.description} />
        )}
        {meta?.image && (
          <meta name="twitter:image" content={meta.image} />
        )}

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Main Stylesheet */}
        <link rel="stylesheet" href="/assets/css/styles.css" />

        {/* Additional Stylesheets */}
        {styles.map((href, index) => (
          <link key={index} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="font-body bg-background text-foreground antialiased">
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

## With Header and Footer

Create a page layout that includes common elements:

```tsx
// src/ui/PageLayout/index.tsx
import type { FC, ReactNode } from 'react';
import Layout from '@/ui/Layout';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  currentPath?: string;
  meta?: {
    description?: string;
    keywords?: string;
    image?: string;
  };
}

const PageLayout: FC<PageLayoutProps> = ({
  title,
  children,
  currentPath = '/',
  meta,
}) => {
  return (
    <Layout title={title} meta={meta}>
      <Header currentPath={currentPath} />
      <main>{children}</main>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
```

## Usage in Routes

```tsx
// src/routes/index.tsx
import type { FC } from 'react';
import PageLayout from '@/ui/PageLayout';

interface HomePageProps {
  request: Request;
}

const HomePage: FC<HomePageProps> = ({ request }) => {
  const url = new URL(request.url);

  return (
    <PageLayout
      title="Home | My Site"
      currentPath={url.pathname}
      meta={{
        description: 'Welcome to my site built with Dutchy Design System.',
        image: '/assets/images/og-home.png',
      }}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-display text-5xl font-bold uppercase tracking-tighter">
            Welcome<span className="text-primary">.</span>
          </h1>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
```

## With JSON-LD Structured Data

Add structured data for SEO:

```tsx
// src/ui/Layout/index.tsx
import type { FC, ReactNode } from 'react';

interface JsonLdData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
  meta?: {
    description?: string;
    keywords?: string;
    image?: string;
  };
  jsonLd?: JsonLdData | JsonLdData[];
}

const Layout: FC<LayoutProps> = ({
  title,
  children,
  meta,
  jsonLd,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* ... other meta tags ... */}

        {/* JSON-LD Structured Data */}
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />
        )}

        {/* Fonts & Styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
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

Usage with JSON-LD:

```tsx
// src/routes/index.tsx
import Layout from '@/ui/Layout';

const HomePage = ({ request }: { request: Request }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'My Site',
    url: 'https://example.com',
  };

  return (
    <Layout title="Home" jsonLd={jsonLd}>
      {/* content */}
    </Layout>
  );
};
```

## Dark Mode Support

Layout with theme support:

```tsx
// src/ui/Layout/index.tsx
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  title: string;
  children: ReactNode;
  theme?: 'light' | 'dark' | 'system';
}

const Layout: FC<LayoutProps> = ({
  title,
  children,
  theme = 'light',
}) => {
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* Theme color for browser chrome */}
        <meta
          name="theme-color"
          content={theme === 'dark' ? '#0a0a0a' : '#ffffff'}
        />

        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body className="font-body bg-background text-foreground transition-colors">
        {children}

        {/* Theme detection script (runs before render) */}
        {theme === 'system' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                })();
              `,
            }}
          />
        )}
      </body>
    </html>
  );
};

export default Layout;
```

## CSS Variables Setup

Your `input.css` should define theme variables:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light theme (default) */
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

  [data-theme="dark"] {
    --background: 0 0% 4%;
    --foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 64%;
    --border: 0 0% 20%;
  }

  * {
    border-radius: 0 !important;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
}
```
