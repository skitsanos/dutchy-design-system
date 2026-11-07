import type { FC, ReactNode } from 'react';
import { DEFAULT_ROBOTS, getCanonicalUrl } from '@/utils/seo';

interface LayoutProps {
  title: string;
  children: ReactNode;
  meta?: {
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    robots?: string;
  };
  scripts?: string[];
  styles?: string[];
}

const ASSET_VERSION = '2.1.4';

const Layout: FC<LayoutProps> = ({ title, children, meta, scripts = [], styles = [] }) => {
  const canonicalUrl = getCanonicalUrl(meta?.url);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* SEO Meta Tags */}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={meta?.robots ?? DEFAULT_ROBOTS} />
        {meta?.description && <meta name="description" content={meta.description} />}
        {meta?.keywords && <meta name="keywords" content={meta.keywords} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {meta?.description && <meta property="og:description" content={meta.description} />}
        {meta?.image && <meta property="og:image" content={meta.image} />}
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {meta?.description && <meta name="twitter:description" content={meta.description} />}
        {meta?.image && <meta name="twitter:image" content={meta.image} />}

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Main Stylesheet */}
        <link rel="stylesheet" href={`/assets/css/styles.css?v=${ASSET_VERSION}`} />

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
