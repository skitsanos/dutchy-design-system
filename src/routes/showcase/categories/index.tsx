import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import Badge from '@/components/Badge';

const headerNavLinks = [
  { href: '/showcase', label: 'Home' },
  { href: '/showcase/categories', label: 'Categories' },
  { href: '/showcase/pricing', label: 'Pricing' },
  { href: '/showcase/blog', label: 'Blog' },
];

const CategoriesPage = ({ request }: { request: Request }) => {
  return (
    <Layout
      title="Categories | Dutchy Design System"
      meta={{
        description:
          'Explore our comprehensive component library organized by function. Find UI elements, patterns, and complete solutions.',
        keywords: 'categories, components, UI, design system',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/categories"
        navLinks={headerNavLinks}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      {/* Hero Section */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <Badge variant="primary" className="font-mono mb-8">
                6 Categories
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Browse
                <br />
                By <span className="text-primary">Category.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Explore our comprehensive component library organized by
                function. Find UI elements, patterns, and complete solutions.
              </p>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-foreground text-background p-6">
                <p className="font-display text-4xl font-bold">50+</p>
                <p className="text-sm text-background/60 uppercase tracking-wider">
                  Components
                </p>
              </div>
              <div className="bg-primary text-primary-foreground p-6">
                <p className="font-display text-4xl font-bold">6</p>
                <p className="text-sm text-primary-foreground/70 uppercase tracking-wider">
                  Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
            {/* Featured Category (UI Components) - Spans 2 cols and 2 rows on lg */}
            <a
              href="/showcase/search?q=ui+components"
              className="bg-background p-8 group hover:bg-muted/50 transition-colors lg:col-span-2 lg:row-span-2"
            >
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                    <Icon
                      name="layers"
                      size="lg"
                      className="w-10 h-10 text-primary"
                    />
                  </div>
                  <Icon
                    name="arrow-right"
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center py-8">
                  <Icon
                    name="layers"
                    className="w-48 h-48 text-primary/20 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="font-mono text-sm text-primary font-bold uppercase tracking-wider mb-2">
                    18 components
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                    UI Components
                  </h2>
                  <p className="text-muted-foreground">
                    Core building blocks for any interface
                  </p>
                </div>
              </div>
            </a>

            {/* Data Display */}
            <a
              href="/showcase/search?q=data+display"
              className="bg-background p-8 group hover:bg-muted/50 transition-colors"
            >
              <div className="h-full flex flex-col min-h-[280px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Icon
                      name="grid"
                      size="lg"
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <Icon
                    name="arrow-right"
                    size="md"
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center py-4">
                  <Icon
                    name="grid"
                    className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-1">
                    12 components
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase group-hover:text-primary transition-colors">
                    Data Display
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tables, lists, cards, and badges
                  </p>
                </div>
              </div>
            </a>

            {/* Forms */}
            <a
              href="/showcase/search?q=forms"
              className="bg-background p-8 group hover:bg-muted/50 transition-colors"
            >
              <div className="h-full flex flex-col min-h-[280px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Icon
                      name="edit"
                      size="lg"
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <Icon
                    name="arrow-right"
                    size="md"
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center py-4">
                  <Icon
                    name="edit"
                    className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-1">
                    10 components
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase group-hover:text-primary transition-colors">
                    Forms
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inputs, selects, checkboxes, and more
                  </p>
                </div>
              </div>
            </a>

            {/* Navigation */}
            <a
              href="/showcase/search?q=navigation"
              className="bg-background p-8 group hover:bg-muted/50 transition-colors"
            >
              <div className="h-full flex flex-col min-h-[280px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Icon
                      name="send"
                      size="lg"
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <Icon
                    name="arrow-right"
                    size="md"
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center py-4">
                  <Icon
                    name="send"
                    className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-1">
                    8 components
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase group-hover:text-primary transition-colors">
                    Navigation
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Menus, tabs, breadcrumbs, and links
                  </p>
                </div>
              </div>
            </a>

            {/* Feedback */}
            <a
              href="/showcase/search?q=feedback"
              className="bg-background p-8 group hover:bg-muted/50 transition-colors"
            >
              <div className="h-full flex flex-col min-h-[280px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Icon
                      name="bell"
                      size="lg"
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <Icon
                    name="arrow-right"
                    size="md"
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center py-4">
                  <Icon
                    name="bell"
                    className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-1">
                    6 components
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase group-hover:text-primary transition-colors">
                    Feedback
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Alerts, toasts, modals, and progress
                  </p>
                </div>
              </div>
            </a>

            {/* Utilities */}
            <a
              href="/showcase/search?q=utilities"
              className="bg-background p-8 group hover:bg-muted/50 transition-colors"
            >
              <div className="h-full flex flex-col min-h-[280px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Icon
                      name="settings"
                      size="lg"
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <Icon
                    name="arrow-right"
                    size="md"
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center py-4">
                  <Icon
                    name="settings"
                    className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-1">
                    5 utilities
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase group-hover:text-primary transition-colors">
                    Utilities
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Helpers, hooks, and common patterns
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2">
                Can't find what you need?
              </h2>
              <p className="text-background/70">
                Browse all 50+ components in our full library
              </p>
            </div>
            <a
              href="/showcase/search"
              className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2 shrink-0"
            >
              Browse All
              <Icon name="arrow-right" size="md" />
            </a>
          </div>
        </div>
      </section>

      <Footer
        siteName="Dutchy"
        description="The definitive design system for building bold, structural interfaces with Dutch-inspired aesthetics."
        columns={[
          {
            title: 'Resources',
            links: [
              { href: '/showcase/categories', label: 'Documentation' },
              { href: '/showcase/categories', label: 'Components' },
              { href: '/showcase/categories', label: 'Examples' },
            ],
          },
          {
            title: 'Community',
            links: [
              { href: '#', label: 'GitHub' },
              { href: '#', label: 'Discord' },
              { href: '#', label: 'Twitter' },
            ],
          },
        ]}
        copyright="&copy; 2025 Dutchy Design System. Open Source under MIT License."
      />
    </Layout>
  );
};

export default CategoriesPage;
