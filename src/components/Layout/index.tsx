import type { FC, ReactNode } from 'react';
import { DEFAULT_ROBOTS, getCanonicalUrl, SITE_URL } from '@/utils/seo';

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
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/assets/images/dutchy-modular-d-social.png`;
const DEFAULT_SOCIAL_IMAGE_ALT =
  'Dutchy Design System for Bun SSR and Tailwind CSS with the black and orange Modular D logo';

const Layout: FC<LayoutProps> = ({ title, children, meta, scripts = [], styles = [] }) => {
  const canonicalUrl = getCanonicalUrl(meta?.url);
  const socialImage = meta?.image || DEFAULT_SOCIAL_IMAGE;
  const usesDefaultSocialImage = socialImage === DEFAULT_SOCIAL_IMAGE;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href="/assets/images/dutchy-modular-d.svg"
        />

        {/* SEO Meta Tags */}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={meta?.robots ?? DEFAULT_ROBOTS} />
        {meta?.description && <meta name="description" content={meta.description} />}
        {meta?.keywords && <meta name="keywords" content={meta.keywords} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {meta?.description && <meta property="og:description" content={meta.description} />}
        <meta property="og:image" content={socialImage} />
        {usesDefaultSocialImage && (
          <>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={DEFAULT_SOCIAL_IMAGE_ALT} />
          </>
        )}
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {meta?.description && <meta name="twitter:description" content={meta.description} />}
        <meta name="twitter:image" content={socialImage} />
        {usesDefaultSocialImage && (
          <meta name="twitter:image:alt" content={DEFAULT_SOCIAL_IMAGE_ALT} />
        )}

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
