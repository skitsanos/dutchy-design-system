import type { FC } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';
import { COMPONENTS } from '@/components/componentRegistry';

const ComponentsPage: FC = () => {
  const categories = [...new Set(COMPONENTS.map(c => c.category))];

  return (
    <Layout
      title="Components - Dutchy Design System"
      meta={{
        description: 'UI Components for Dutchy Design System. Buttons, forms, cards, navigation and more with zero border radius.',
        keywords: 'UI components, buttons, forms, cards, badges, alerts, design system, Tailwind CSS',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <WebsiteHeader currentPath="/components" />

      {/* Page Header */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-6">
                {COMPONENTS.length} Components
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Component<br />
                <span className="text-primary">Library.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Building blocks for bold interfaces. All components feature zero border radius, strong borders, and the distinctive Dutchy aesthetic.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-foreground text-background p-6">
                <p className="font-display text-4xl font-bold">{COMPONENTS.length}</p>
                <p className="text-sm text-background/60 uppercase tracking-wider">Components</p>
              </div>
              <div className="bg-primary text-primary-foreground p-6">
                <p className="font-display text-4xl font-bold">{categories.length}</p>
                <p className="text-sm text-primary-foreground/70 uppercase tracking-wider">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0.5 bg-border">
            {[...COMPONENTS].sort((a, b) => a.name.localeCompare(b.name)).map((comp) => (
              <a
                key={comp.id}
                href={`/components/${comp.id}`}
                className="bg-background p-6 group hover:bg-muted/50 transition-colors block"
              >
                <div className="h-full flex flex-col min-h-[200px]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block bg-muted px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {comp.category}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex-grow" />
                  <div className="mt-auto">
                    <h3 className="font-display text-lg font-bold uppercase group-hover:text-primary transition-colors mb-1">
                      {comp.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </Layout>
  );
};

export default ComponentsPage;
