import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Select from '@/components/Select';
import Pagination from '@/components/Pagination';
const headerNavLinks = [
  { href: '/showcase', label: 'Home' },
  { href: '/showcase/categories', label: 'Categories' },
  { href: '/showcase/pricing', label: 'Pricing' },
  { href: '/showcase/blog', label: 'Blog' },
];

const searchResults = [
  {
    icon: 'arrow-right' as const,
    status: 'Stable',
    statusVariant: 'success' as const,
    name: 'Button',
    highlightWord: 'Button',
    description:
      'Primary interactive element for triggering actions and submissions.',
    category: 'UI Components',
    href: '/components/button',
  },
  {
    icon: 'layers' as const,
    status: 'Stable',
    statusVariant: 'success' as const,
    name: 'Button Group',
    highlightWord: 'Button',
    description:
      'Group multiple buttons together with consistent spacing and styling.',
    category: 'UI Components',
    href: '/components/button-group',
  },
  {
    icon: 'image' as const,
    status: 'Stable',
    statusVariant: 'success' as const,
    name: 'Icon Button',
    highlightWord: 'Button',
    description:
      'Compact button variant that displays only an icon without text.',
    category: 'UI Components',
    href: '/components/icon-button',
  },
  {
    icon: 'check' as const,
    status: 'Stable',
    statusVariant: 'success' as const,
    name: 'Toggle Button',
    highlightWord: 'Button',
    description: 'A two-state button that can be toggled on or off.',
    category: 'Forms',
    href: '/components/toggle-button',
  },
  {
    icon: 'upload' as const,
    status: 'Beta',
    statusVariant: 'info' as const,
    name: 'File Button',
    highlightWord: 'Button',
    description:
      'Styled file input disguised as a button for upload actions.',
    category: 'Forms',
    href: '/components/file-button',
  },
  {
    icon: 'refresh' as const,
    status: 'Stable',
    statusVariant: 'success' as const,
    name: 'Loading Button',
    highlightWord: 'Button',
    description:
      'Button with built-in loading state and spinner indicator.',
    category: 'UI Components',
    href: '/components/loading-button',
  },
];

const SearchPage = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || 'button';

  return (
    <Layout
      title={`Search: ${query} | Dutchy Design System`}
      meta={{
        description: `Search results for "${query}" in the Dutchy Design System component library.`,
        keywords: 'search, components, design system',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/search"
        navLinks={headerNavLinks}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      {/* Search Hero */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6 text-center">
              Search Components
            </h1>
            {/* Search Box */}
            <form
              method="GET"
              action="/showcase/search"
              className="flex gap-0 bg-background border-4 border-foreground"
            >
              <div className="flex items-center px-4">
                <Icon
                  name="search"
                  className="text-muted-foreground w-6 h-6"
                />
              </div>
              <input
                type="text"
                name="q"
                placeholder="Search for components..."
                defaultValue={query}
                className="flex-1 py-4 px-2 bg-transparent font-sans text-lg focus:outline-none"
              />
              <Button type="submit" size="lg">Search</Button>
            </form>
            <p className="text-center mt-4 text-muted-foreground">
              <span className="font-bold text-foreground">
                {searchResults.length} results
              </span>{' '}
              found for "{query}"
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wider mb-4 text-sm border-b-2 border-primary pb-2">
                    Category
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        UI Components
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        8
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Forms
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        2
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Navigation
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        1
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Feedback
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        1
                      </span>
                    </label>
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wider mb-4 text-sm border-b-2 border-primary pb-2">
                    Status
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Stable
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        10
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Beta
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        2
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-foreground accent-primary"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Deprecated
                      </span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        0
                      </span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <a
                  href={`/showcase/search?q=${encodeURIComponent(query)}`}
                  className="block w-full py-3 border-2 border-foreground text-foreground font-bold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors text-center"
                >
                  Clear All Filters
                </a>
              </div>
            </aside>

            {/* Results Grid */}
            <div className="lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                    Sort by:
                  </span>
                  <Select
                    options={[
                      { value: 'relevance', label: 'Relevance' },
                      { value: 'name-asc', label: 'Name A-Z' },
                      { value: 'name-desc', label: 'Name Z-A' },
                      { value: 'recent', label: 'Recently Updated' },
                    ]}
                    defaultValue="relevance"
                  />
                </div>
                <div className="flex gap-2">
                  <span
                    className="p-2 bg-foreground text-background"
                    aria-label="Grid view"
                  >
                    <Icon name="grid" size="md" />
                  </span>
                  <span
                    className="p-2 bg-muted text-muted-foreground hover:bg-border transition-colors cursor-pointer"
                    aria-label="List view"
                  >
                    <Icon name="list" size="md" />
                  </span>
                </div>
              </div>

              {/* Results Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-border">
                {searchResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.href}
                    className="bg-background p-6 group hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                        <Icon
                          name={result.icon}
                          className="text-primary w-6 h-6"
                        />
                      </div>
                      <Badge
                        variant={result.statusVariant}
                        className="text-xs"
                      >
                        {result.status}
                      </Badge>
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                      {result.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {result.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        {result.category}
                      </span>
                      <Icon
                        name="arrow-right"
                        size="sm"
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </a>
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={1}
                totalPages={2}
                baseUrl={`/showcase/search?q=${encodeURIComponent(query)}`}
                className="mt-12"
              />
            </div>
          </div>
        </div>
      </main>

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

export default SearchPage;
