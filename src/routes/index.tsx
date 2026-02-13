import type { FC } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';

const HomePage: FC<{ request: Request }> = ({ request }) => {
  return (
    <Layout
      title="Dutchy Design System - Bold, Structural, Dutch-Inspired"
      meta={{
        description:
          'A bold design system inspired by Dutch design principles. Zero border radius, strong typography, and high contrast aesthetics for modern interfaces.',
        keywords:
          'design system, Dutch design, UI components, Tailwind CSS, zero border radius, typography, web design',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <WebsiteHeader currentPath="/" />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Left: Typography & CTA */}
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-background relative overflow-hidden">
            {/* Decorative Grid Lines */}
            <div className="absolute top-0 left-10 w-px h-full bg-border/50 hidden md:block" />
            <div className="absolute top-10 left-0 w-full h-px bg-border/50 hidden md:block" />

            <div className="relative z-10">
              <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-8">
                Design System v1.0
              </div>

              <h1 className="font-display text-6xl md:text-8xl font-bold uppercase leading-[0.85] tracking-tighter mb-8 text-foreground">
                Bold<br/>
                <span className="text-primary">Design.</span><br/>
                Instant<br/>
                Impact.
              </h1>

              <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-12 max-w-md leading-tight">
                The definitive design system for building bold, structural interfaces with Dutch-inspired aesthetics.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="/components" className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Explore Components
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="/typography" className="border-2 border-foreground text-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
                  View Typography
                </a>
              </div>

              <div className="mt-12 flex gap-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="text-primary font-bold">Quick links:</span>
                <a href="/colors" className="hover:text-foreground hover:underline">Colors</a>
                <a href="/components" className="hover:text-foreground hover:underline">Forms</a>
                <a href="/patterns" className="hover:text-foreground hover:underline">Patterns</a>
              </div>
            </div>
          </div>

          {/* Right: Visual Grid */}
          <div className="bg-muted relative flex flex-col">
            {/* Top Block */}
            <div className="flex-1 bg-foreground p-12 flex items-end">
              <div className="text-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-6 text-primary"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
                <h3 className="font-display text-4xl font-bold uppercase tracking-tight mb-2">50+</h3>
                <p className="font-mono text-sm opacity-80 uppercase tracking-widest">Components Ready</p>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="flex-1 grid grid-cols-2">
              <a href="/components" className="bg-primary p-8 flex flex-col justify-between hover:bg-primary/90 transition-colors cursor-pointer group border-r border-background/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                <span className="font-display text-2xl font-bold uppercase text-primary-foreground">
                  Get<br/>Started
                </span>
              </a>
              <a href="/typography" className="bg-background p-8 flex flex-col justify-between border-t border-border hover:bg-muted transition-colors cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:scale-110 transition-transform"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
                <span className="font-display text-2xl font-bold uppercase text-foreground">
                  Type<br/>System
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-12 md:px-6 md:pl-0">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-primary" />
                Zero Radius
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Sharp corners and clean edges define the bold, architectural aesthetic.
              </p>
            </div>
            <div className="py-12 md:px-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary" />
                Warm Palette
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dutch-inspired warm orange primary with earthy neutral backgrounds.
              </p>
            </div>
            <div className="py-12 md:px-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-foreground" />
                Bold Type
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Space Grotesk for impact, Inter for readability, JetBrains Mono for code.
              </p>
            </div>
            <div className="py-12 md:px-6 md:pr-0">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-primary" />
                Accessible
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                WCAG compliant contrast ratios and semantic HTML throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">50+</p>
              <p className="font-mono text-xs uppercase tracking-widest opacity-70">Components</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">6</p>
              <p className="font-mono text-xs uppercase tracking-widest opacity-70">Categories</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">100%</p>
              <p className="font-mono text-xs uppercase tracking-widest opacity-70">Accessible</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">MIT</p>
              <p className="font-mono text-xs uppercase tracking-widest opacity-70">Licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl font-bold uppercase tracking-tighter mb-6">
                Explore the System
              </h2>
              <div className="h-2 w-24 bg-primary" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-border border border-border">
            {/* Typography */}
            <a href="/typography" className="bg-background p-6 hover:bg-white transition-colors group block">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Foundation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase leading-none mb-2 group-hover:text-primary transition-colors">Typography</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Font families, scales, and text styles</p>
              <div className="mt-auto pt-4 border-t border-border/50 flex gap-2">
                <span className="text-xs font-mono uppercase bg-muted px-2 py-1">Tokens</span>
              </div>
            </a>

            {/* Colors */}
            <a href="/colors" className="bg-background p-6 hover:bg-white transition-colors group block">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Foundation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22c3.5-3.5 6-6.5 6-10a6 6 0 0 0-12 0c0 3.5 2.5 6.5 6 10z"/></svg>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase leading-none mb-2 group-hover:text-primary transition-colors">Colors</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Palette, semantic colors, and usage</p>
              <div className="mt-auto pt-4 border-t border-border/50 flex gap-2">
                <span className="text-xs font-mono uppercase bg-muted px-2 py-1">Tokens</span>
              </div>
            </a>

            {/* Components */}
            <a href="/components" className="bg-background p-6 hover:bg-white transition-colors group block">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">UI Library</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase leading-none mb-2 group-hover:text-primary transition-colors">Components</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Buttons, forms, cards, and more</p>
              <div className="mt-auto pt-4 border-t border-border/50 flex gap-2">
                <span className="text-xs font-mono uppercase bg-muted px-2 py-1">Interactive</span>
                <span className="text-xs font-mono uppercase bg-muted px-2 py-1">Core</span>
              </div>
            </a>

            {/* Patterns */}
            <a href="/patterns" className="bg-background p-6 hover:bg-white transition-colors group block">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Layouts</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><rect width="18" height="18" x="3" y="3"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase leading-none mb-2 group-hover:text-primary transition-colors">Patterns</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Hero, navigation, footer layouts</p>
              <div className="mt-auto pt-4 border-t border-border/50 flex gap-2">
                <span className="text-xs font-mono uppercase bg-muted px-2 py-1">Layout</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-primary-foreground">
            Start Building Today
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Dutchy is open source and free to use. Clone the repo and start creating bold, structural interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/skitsanos/dutchy-design-system" className="bg-foreground text-background px-8 py-4 font-bold uppercase tracking-wider hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              View on GitHub
            </a>
            <a href="/components" className="bg-primary-foreground text-primary px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors">
              Browse Components
            </a>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </Layout>
  );
};

export default HomePage;
