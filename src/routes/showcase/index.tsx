import type { FC } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';

const showcaseItems = [
  { slug: 'admin', title: 'Admin Dashboard', description: 'Full admin panel with sidebar, stats, and data tables', icon: 'layout-dashboard' },
  { slug: 'blog', title: 'Blog', description: 'Featured articles, grid layout, newsletter signup', icon: 'file-text' },
  { slug: 'cart', title: 'Shopping Cart', description: 'Product list, order summary, checkout flow', icon: 'shopping-cart' },
  { slug: 'categories', title: 'Categories', description: 'Browse components by category with tiled grid', icon: 'grid-3x3' },
  { slug: 'contact', title: 'Contact', description: 'Contact form with validation and success feedback', icon: 'mail' },
  { slug: 'data', title: 'Data Management', description: 'User management table with filtering and modals', icon: 'database' },
  { slug: 'login', title: 'Login', description: 'Authentication form with tabs and social login', icon: 'log-in' },
  { slug: 'notifications', title: 'Notifications', description: 'Notification center with sidebar and filtering', icon: 'bell' },
  { slug: 'pricing', title: 'Pricing', description: 'Pricing tiers with toggle and feature comparison', icon: 'credit-card' },
  { slug: 'register', title: 'Registration', description: 'Multi-step registration wizard with stepper', icon: 'user-plus' },
  { slug: 'search', title: 'Search', description: 'Full-text search with filters and result cards', icon: 'search' },
  { slug: 'themes', title: 'Themes', description: 'Theme showcase with live color previews', icon: 'palette' },
];

const iconPaths: Record<string, string> = {
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3"/><rect width="7" height="5" x="14" y="3"/><rect width="7" height="9" x="14" y="12"/><rect width="7" height="5" x="3" y="16"/>',
  'file-text': '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>',
  'shopping-cart': '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  'grid-3x3': '<rect width="7" height="7" x="3" y="3"/><rect width="7" height="7" x="14" y="3"/><rect width="7" height="7" x="14" y="14"/><rect width="7" height="7" x="3" y="14"/>',
  'mail': '<rect width="20" height="16" x="2" y="4"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'database': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  'log-in': '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
  'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'palette': '<circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
};

const SmallIcon: FC<{ name: string; size: number }> = ({ name, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
    dangerouslySetInnerHTML={{ __html: iconPaths[name] || '' }}
  />
);

const LargeIcon: FC<{ name: string; size: number; className: string }> = ({ name, size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    dangerouslySetInnerHTML={{ __html: iconPaths[name] || '' }}
  />
);

const RegularLargeIcon: FC<{ name: string; size: number; className: string }> = ({ name, size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    dangerouslySetInnerHTML={{ __html: iconPaths[name] || '' }}
  />
);

const ArrowIcon: FC<{ size: number }> = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ShowcasePage: FC = () => {
  return (
    <Layout
      title="Showcase | Dutchy Design System"
      scripts={['/assets/js/mobile-menu.js']}
    >
      <WebsiteHeader currentPath="/showcase" />

      {/* Header Section */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-6">
            12 Pages
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
            Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Complete page templates and layouts built with the Dutchy Design System. Browse real-world examples.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
            {showcaseItems.map((item, i) =>
              i === 0 ? (
                /* Featured card */
                <a
                  key={item.slug}
                  href={`/showcase/${item.slug}`}
                  className="bg-background p-8 group hover:bg-muted/50 transition-colors lg:col-span-2 lg:row-span-2"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                        <SmallIcon name={item.icon} size={40} />
                      </div>
                      <ArrowIcon size={24} />
                    </div>
                    <div className="flex-grow flex flex-col justify-center items-center py-8">
                      <LargeIcon
                        name={item.icon}
                        size={192}
                        className="text-primary/20 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </a>
              ) : (
                /* Regular card */
                <a
                  key={item.slug}
                  href={`/showcase/${item.slug}`}
                  className="bg-background p-8 group hover:bg-muted/50 transition-colors"
                >
                  <div className="h-full flex flex-col min-h-[280px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                        <SmallIcon name={item.icon} size={32} />
                      </div>
                      <ArrowIcon size={20} />
                    </div>
                    <div className="flex-grow flex items-center justify-center py-4">
                      <RegularLargeIcon
                        name={item.icon}
                        size={96}
                        className="text-primary/30 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-display text-xl font-bold uppercase group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </Layout>
  );
};

export default ShowcasePage;
