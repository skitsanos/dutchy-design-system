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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:tracking-wider focus:text-sm">
          Skip to main content
        </a>
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
