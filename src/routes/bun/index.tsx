import type { FC } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';

const BunPage: FC<{ request: Request }> = ({ request }) => {
  return (
    <Layout
      title="Using with Bun - Dutchy Design System"
      meta={{
        description:
          'Build server-rendered applications using the Dutchy Design System with Bun\'s native JSX support. SSR components, file-based routing, and vanilla JS interactivity.',
        keywords:
          'Bun, JSX, SSR, server-side rendering, design system, Dutch design, Tailwind CSS',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <WebsiteHeader currentPath="/bun" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b-8 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="inline-block bg-foreground px-4 py-2 text-background font-mono text-xs font-bold uppercase tracking-widest mb-8">
              Bun 1.3+
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              Using with<br/>
              <span className="text-primary">Bun.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Build high-performance server-rendered applications using Dutchy Design System with Bun's native JSX support. No build step required.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/skitsanos/dutchy-design-system/tree/main/docs/03-using-with-bun" className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                Full Documentation
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="https://github.com/skitsanos/dutchy-design-system/tree/main/src/utils/loadRoutes.ts" className="border-2 border-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
                View Source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-2">SSR-Only Components</h3>
              <p className="text-background/80 leading-relaxed max-w-3xl">
                <strong>These are NOT traditional React components.</strong> Bun's SSR renders JSX to static HTML on the server - there is no React runtime on the client. No <code className="bg-background/20 px-2 py-0.5">useState</code>, no <code className="bg-background/20 px-2 py-0.5">useEffect</code>, no client-side hydration. For interactivity, use vanilla JavaScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-4">Quick Start</h2>
            <div className="h-2 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="border-2 border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">1</span>
                <h3 className="font-display text-xl font-bold uppercase">Create Project</h3>
              </div>
              <pre className="bg-foreground text-background p-6 text-sm overflow-x-auto"><code>{`mkdir my-dutchy-app
cd my-dutchy-app
bun init -y

# Install dependencies
bun add react react-dom
bun add -d @types/react @types/react-dom`}</code></pre>
            </div>

            {/* Step 2 */}
            <div className="border-2 border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">2</span>
                <h3 className="font-display text-xl font-bold uppercase">Configure TypeScript</h3>
              </div>
              <pre className="bg-foreground text-background p-6 text-sm overflow-x-auto"><code>{`// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "paths": { "@/*": ["src/*"] }
  }
}`}</code></pre>
            </div>

            {/* Step 3 */}
            <div className="border-2 border-border p-8 lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">3</span>
                <h3 className="font-display text-xl font-bold uppercase">Create Server</h3>
              </div>
              <pre className="bg-foreground text-background p-6 text-sm overflow-x-auto"><code>{`// src/index.ts
import { serve } from 'bun';
import { renderToReadableStream } from 'react-dom/server';
import { createElement } from 'react';

serve({
  port: 3000,
  async fetch(req) {
    const { default: HomePage } = await import('./routes/index.tsx');

    const stream = await renderToReadableStream(
      createElement(HomePage, { request: req })
    );

    return new Response(stream, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
});

console.log('Server running at http://localhost:3000');`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Routing Approaches */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-4">Three Routing Approaches</h2>
            <div className="h-2 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border">
            {/* Built-in Routes */}
            <div className="bg-background p-8">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Bun 1.2.3+</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase mb-4">Built-in Routes</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Native <code className="bg-muted px-2 py-0.5">routes</code> option in Bun.serve(). Simplest approach for quick prototypes.
              </p>
              <pre className="bg-foreground text-background p-4 text-xs overflow-x-auto mb-6"><code>{`serve({
  routes: {
    '/': HomePage,
    '/users/:id': handler,
    '/api/*': notFound,
  }
});`}</code></pre>
              <div className="text-sm">
                <span className="font-bold">Params:</span> <code className="bg-muted px-2 py-0.5">req.params.id</code>
              </div>
            </div>

            {/* FileSystem Router */}
            <div className="bg-background p-8">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Any Bun</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase mb-4">FileSystem Router</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Bun's <code className="bg-muted px-2 py-0.5">FileSystemRouter</code> class with Next.js-style conventions.
              </p>
              <pre className="bg-foreground text-background p-4 text-xs overflow-x-auto mb-6"><code>{`pages/
├── index.tsx      → /
├── about.tsx      → /about
└── blog/
    └── [slug].tsx → /blog/:slug`}</code></pre>
              <div className="text-sm">
                <span className="font-bold">Params:</span> <code className="bg-muted px-2 py-0.5">match.params</code>
              </div>
            </div>

            {/* Custom loadRoutes */}
            <div className="bg-background p-8 border-l-4 border-primary">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Recommended</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase mb-4">Custom loadRoutes</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Method-per-file convention with full control. Auto-detects React components.
              </p>
              <pre className="bg-foreground text-background p-4 text-xs overflow-x-auto mb-6"><code>{`routes/
├── index.tsx      → GET /
├── api/users/
│   ├── index.ts   → GET
│   ├── post.ts    → POST
│   └── $id/
│       └── put.ts → PUT`}</code></pre>
              <div className="text-sm">
                <span className="font-bold">Params:</span> <code className="bg-muted px-2 py-0.5">_param_id</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Example */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-4">Component Example</h2>
            <div className="h-2 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* JSX Component */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-foreground text-background flex items-center justify-center text-sm">1</span>
                JSX Component (Server)
              </h3>
              <pre className="bg-foreground text-background p-6 text-sm overflow-x-auto h-[400px]"><code>{`// src/routes/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';

interface HomePageProps {
  request: Request;
}

const HomePage: FC<HomePageProps> = ({ request }) => {
  return (
    <Layout
      title="Home"
      scripts={['/assets/js/app.js']}
    >
      <section class="py-20 border-b-8 border-primary">
        <div class="container mx-auto px-4">
          <h1 class="font-display text-6xl font-bold uppercase">
            Hello<span class="text-primary">.</span>
          </h1>
          <button
            id="cta-btn"
            class="bg-primary text-white px-8 py-4 mt-8"
          >
            Click Me
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;`}</code></pre>
            </div>

            {/* Vanilla JS */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-foreground text-background flex items-center justify-center text-sm">2</span>
                Vanilla JS (Client)
              </h3>
              <pre className="bg-foreground text-background p-6 text-sm overflow-x-auto h-[400px]"><code>{`// public/assets/js/app.js

// Button click handler
document.getElementById('cta-btn')
  .addEventListener('click', () => {
    alert('Button clicked!');
  });

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Form validation
const form = document.getElementById('contact-form');

form?.addEventListener('submit', (e) => {
  const email = form.querySelector('[name="email"]');

  if (!email.value.includes('@')) {
    e.preventDefault();
    alert('Invalid email');
  }
});

// Data attributes for dynamic content
document.querySelectorAll('[data-product-id]')
  .forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.productId;
      console.log('Product:', id);
    });
  });`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 6 9 17l-5-5"/></svg>
                Best For
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></span>
                  <span>Content-focused websites (blogs, docs, marketing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></span>
                  <span>Server-rendered forms with POST handlers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></span>
                  <span>SEO-critical applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></span>
                  <span>Fast initial page loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></span>
                  <span>Server-driven interactivity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-background/50"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                Consider CSR Instead For
              </h3>
              <ul className="space-y-4 text-background/70">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-background/30 mt-2 flex-shrink-0"></span>
                  <span>Complex stateful UI (dashboards, editors)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-background/30 mt-2 flex-shrink-0"></span>
                  <span>Real-time updates (chat, live data)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-background/30 mt-2 flex-shrink-0"></span>
                  <span>Heavy client-side state management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-background/30 mt-2 flex-shrink-0"></span>
                  <span>Single-page application behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-background/30 mt-2 flex-shrink-0"></span>
                  <span>Optimistic UI updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-4">Project Structure</h2>
            <div className="h-2 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <pre className="bg-foreground text-background p-8 text-sm overflow-x-auto"><code>{`my-dutchy-app/
├── src/
│   ├── index.ts              # Server entry
│   ├── routes/
│   │   ├── index.tsx         # GET /
│   │   ├── about/
│   │   │   └── index.tsx     # GET /about
│   │   ├── contact/
│   │   │   ├── index.tsx     # GET /contact
│   │   │   └── post.ts       # POST /contact
│   │   └── api/
│   │       └── users/
│   │           ├── index.ts  # GET /api/users
│   │           ├── post.ts   # POST /api/users
│   │           └── $id/
│   │               ├── index.ts  # GET /api/users/:id
│   │               ├── put.ts    # PUT /api/users/:id
│   │               └── delete.ts # DELETE /api/users/:id
│   ├── ui/
│   │   ├── Layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Button/
│   │   └── Card/
│   └── utils/
│       └── loadRoutes.ts
├── public/
│   └── assets/
│       ├── css/
│       └── js/
├── package.json
└── tsconfig.json`}</code></pre>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-display font-bold uppercase mb-2">routes/</h4>
                <p className="text-muted-foreground text-sm">File-based routing. Filename determines HTTP method: <code className="bg-muted px-2 py-0.5">index.tsx</code> = GET, <code className="bg-muted px-2 py-0.5">post.ts</code> = POST</p>
              </div>
              <div className="border-l-4 border-border pl-6">
                <h4 className="font-display font-bold uppercase mb-2">ui/</h4>
                <p className="text-muted-foreground text-sm">Reusable JSX components. One folder per component with index.tsx as entry point.</p>
              </div>
              <div className="border-l-4 border-border pl-6">
                <h4 className="font-display font-bold uppercase mb-2">utils/</h4>
                <p className="text-muted-foreground text-sm">Utilities like <code className="bg-muted px-2 py-0.5">loadRoutes.ts</code> for automatic route discovery.</p>
              </div>
              <div className="border-l-4 border-border pl-6">
                <h4 className="font-display font-bold uppercase mb-2">public/</h4>
                <p className="text-muted-foreground text-sm">Static assets served directly. CSS, JS, images, fonts.</p>
              </div>
              <div className="border-l-4 border-border pl-6">
                <h4 className="font-display font-bold uppercase mb-2">$param/</h4>
                <p className="text-muted-foreground text-sm">Dynamic route segments. <code className="bg-muted px-2 py-0.5">$id</code> becomes <code className="bg-muted px-2 py-0.5">:id</code> in the URL pattern.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-primary-foreground">
            Read the Full Docs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Complete documentation with examples for routing, components, forms, API routes, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/skitsanos/dutchy-design-system/tree/main/docs/03-using-with-bun" className="bg-foreground text-background px-8 py-4 font-bold uppercase tracking-wider hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              View Documentation
            </a>
            <a href="https://github.com/skitsanos/dutchy-design-system" className="bg-primary-foreground text-primary px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors inline-flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </Layout>
  );
};

export default BunPage;
