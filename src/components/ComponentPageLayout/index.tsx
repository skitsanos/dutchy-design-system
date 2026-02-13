import type { FC, ReactNode } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';
import { COMPONENTS } from '@/components/componentRegistry';

interface ComponentPageLayoutProps {
  componentId: string;
  children: ReactNode;
}

const ComponentPageLayout: FC<ComponentPageLayoutProps> = ({ componentId, children }) => {
  const meta = COMPONENTS.find(c => c.id === componentId);

  if (!meta) {
    return (
      <Layout
        title="Component Not Found - Dutchy Design System"
        scripts={['/assets/js/mobile-menu.js']}
      >
        <WebsiteHeader currentPath="/components" />
        <div className="container mx-auto px-4 md:px-6 py-24 text-center">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tighter mb-4">404</h1>
          <p className="text-muted-foreground mb-8">Component not found.</p>
          <a href="/components" className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors">
            Back to Components
          </a>
        </div>
        <WebsiteFooter />
      </Layout>
    );
  }

  const scripts = ['/assets/js/mobile-menu.js', ...meta.scripts];

  return (
    <Layout
      title={`${meta.name} - Components - Dutchy Design System`}
      meta={{
        description: meta.description,
        keywords: `${meta.name}, UI components, design system, Tailwind CSS`,
      }}
      scripts={scripts}
    >
      <WebsiteHeader currentPath="/components" />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar - 3 cols */}
          <aside className="lg:col-span-3">
            <nav className="sticky top-28">
              <h3 className="font-display font-bold uppercase text-xs tracking-widest mb-4 text-muted-foreground">Components</h3>
              <ul className="space-y-1">
                {[...COMPONENTS].sort((a, b) => a.name.localeCompare(b.name)).map(c => (
                  <li key={c.id}>
                    <a
                      href={`/components/${c.id}`}
                      className={c.id === componentId
                        ? 'block py-2 px-4 text-sm font-bold text-primary border-l-4 border-primary bg-primary/5'
                        : 'block py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-4 border-transparent transition-colors'
                      }
                    >
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content - 9 cols */}
          <main className="lg:col-span-9">
            <div className="mb-8">
              <span className="inline-block bg-muted px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">{meta.category}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">{meta.name}</h1>
              <p className="text-lg text-muted-foreground">{meta.description}</p>
            </div>
            {children}
          </main>
        </div>
      </div>

      <WebsiteFooter />
    </Layout>
  );
};

export default ComponentPageLayout;
