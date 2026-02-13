import type { FC } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';

const ColorsPage: FC = () => {
  return (
    <Layout
      title="Colors - Dutchy Design System"
      meta={{
        description:
          'Color system for Dutchy Design System. Warm orange primary, earthy neutrals, and semantic color tokens.',
        keywords:
          'color palette, design tokens, HSL colors, CSS variables, orange, warm colors, design system',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <WebsiteHeader currentPath="/colors" />

      {/* Page Header */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-6">
              Foundation
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              Colors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A warm, earthy palette inspired by Dutch design. The vibrant orange primary creates focal points while neutral backgrounds provide structural stability.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Colors */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4">
            Primary Palette
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            The core colors that define Dutchy's visual identity. Warm orange for action, dark brown for text, and cream for backgrounds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border">
            {/* Primary */}
            <div className="bg-background">
              <div className="h-40 bg-primary" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-bold uppercase">Primary</h3>
                    <p className="text-sm text-muted-foreground">Actions &amp; emphasis</p>
                  </div>
                  <span className="font-mono text-xs bg-muted px-2 py-1">--primary</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <p><span className="text-muted-foreground">HSL:</span> 25 95% 53%</p>
                  <p><span className="text-muted-foreground">HEX:</span> #F97316</p>
                </div>
              </div>
            </div>

            {/* Foreground */}
            <div className="bg-background">
              <div className="h-40 bg-foreground" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-bold uppercase">Foreground</h3>
                    <p className="text-sm text-muted-foreground">Text &amp; icons</p>
                  </div>
                  <span className="font-mono text-xs bg-muted px-2 py-1">--foreground</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <p><span className="text-muted-foreground">HSL:</span> 25 20% 6%</p>
                  <p><span className="text-muted-foreground">HEX:</span> #130F0C</p>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="bg-background">
              <div className="h-40 bg-background border-4 border-border" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-bold uppercase">Background</h3>
                    <p className="text-sm text-muted-foreground">Page &amp; card backgrounds</p>
                  </div>
                  <span className="font-mono text-xs bg-muted px-2 py-1">--background</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <p><span className="text-muted-foreground">HSL:</span> 40 30% 97%</p>
                  <p><span className="text-muted-foreground">HEX:</span> #FAF8F5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4">
            Semantic Colors
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Purpose-driven colors for different UI states and contexts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-border">
            {/* Secondary */}
            <div className="bg-background p-6">
              <div className="w-full h-24 bg-secondary border-2 border-border mb-4" />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Secondary</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(25 20% 92%)</p>
              <p className="text-xs text-muted-foreground">Subtle backgrounds, secondary actions</p>
            </div>

            {/* Muted */}
            <div className="bg-background p-6">
              <div className="w-full h-24 bg-muted border-2 border-border mb-4" />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Muted</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(40 20% 94%)</p>
              <p className="text-xs text-muted-foreground">Disabled states, section backgrounds</p>
            </div>

            {/* Destructive */}
            <div className="bg-background p-6">
              <div className="w-full h-24 mb-4" style={{ backgroundColor: 'hsl(0 84% 60%)' }} />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Destructive</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(0 84% 60%)</p>
              <p className="text-xs text-muted-foreground">Errors, delete actions, warnings</p>
            </div>

            {/* Success */}
            <div className="bg-background p-6">
              <div className="w-full h-24 mb-4" style={{ backgroundColor: 'hsl(142 76% 36%)' }} />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Success</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(142 76% 36%)</p>
              <p className="text-xs text-muted-foreground">Success states, confirmations</p>
            </div>

            {/* Border */}
            <div className="bg-background p-6">
              <div className="w-full h-24 bg-border mb-4" />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Border</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(25 20% 88%)</p>
              <p className="text-xs text-muted-foreground">Borders, dividers, separators</p>
            </div>

            {/* Input */}
            <div className="bg-background p-6">
              <div className="w-full h-24 bg-input mb-4" />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Input</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(25 20% 88%)</p>
              <p className="text-xs text-muted-foreground">Form input borders</p>
            </div>

            {/* Ring */}
            <div className="bg-background p-6">
              <div className="w-full h-24 bg-ring mb-4" />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Ring</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(25 95% 53%)</p>
              <p className="text-xs text-muted-foreground">Focus rings, outlines</p>
            </div>

            {/* Muted Foreground */}
            <div className="bg-background p-6">
              <div className="w-full h-24 mb-4" style={{ backgroundColor: 'hsl(25 15% 40%)' }} />
              <h3 className="font-display font-bold uppercase text-sm mb-1">Muted FG</h3>
              <p className="font-mono text-xs text-muted-foreground mb-2">hsl(25 15% 40%)</p>
              <p className="text-xs text-muted-foreground">Secondary text, placeholders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Pairing */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            Color Pairings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary on White */}
            <div className="border-4 border-border">
              <div className="bg-white p-8 text-center">
                <span className="text-primary font-display text-2xl font-bold uppercase">Primary Text</span>
              </div>
              <div className="p-4 bg-muted">
                <p className="font-mono text-xs">primary on background</p>
                <p className="font-mono text-xs text-muted-foreground">Contrast: 4.5:1 AA</p>
              </div>
            </div>

            {/* White on Primary */}
            <div className="border-4 border-border">
              <div className="bg-primary p-8 text-center">
                <span className="text-primary-foreground font-display text-2xl font-bold uppercase">White Text</span>
              </div>
              <div className="p-4 bg-muted">
                <p className="font-mono text-xs">primary-foreground on primary</p>
                <p className="font-mono text-xs text-muted-foreground">Contrast: 4.5:1 AA</p>
              </div>
            </div>

            {/* Foreground on Background */}
            <div className="border-4 border-border">
              <div className="bg-background p-8 text-center">
                <span className="text-foreground font-display text-2xl font-bold uppercase">Dark Text</span>
              </div>
              <div className="p-4 bg-muted">
                <p className="font-mono text-xs">foreground on background</p>
                <p className="font-mono text-xs text-muted-foreground">Contrast: 12.5:1 AAA</p>
              </div>
            </div>

            {/* Background on Foreground */}
            <div className="border-4 border-border">
              <div className="bg-foreground p-8 text-center">
                <span className="text-background font-display text-2xl font-bold uppercase">Light Text</span>
              </div>
              <div className="p-4 bg-muted">
                <p className="font-mono text-xs">background on foreground</p>
                <p className="font-mono text-xs text-muted-foreground">Contrast: 12.5:1 AAA</p>
              </div>
            </div>

            {/* Primary on Foreground */}
            <div className="border-4 border-border">
              <div className="bg-foreground p-8 text-center">
                <span className="text-primary font-display text-2xl font-bold uppercase">Accent Text</span>
              </div>
              <div className="p-4 bg-muted">
                <p className="font-mono text-xs">primary on foreground</p>
                <p className="font-mono text-xs text-muted-foreground">Contrast: 4.8:1 AA</p>
              </div>
            </div>

            {/* Muted Foreground */}
            <div className="border-4 border-border">
              <div className="bg-background p-8 text-center">
                <span className="text-muted-foreground font-display text-2xl font-bold uppercase">Muted Text</span>
              </div>
              <div className="p-4 bg-muted">
                <p className="font-mono text-xs">muted-foreground on background</p>
                <p className="font-mono text-xs text-muted-foreground">Contrast: 4.6:1 AA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            Usage Examples
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="bg-background p-8 border-l-4 border-primary">
              <h3 className="font-display font-bold uppercase mb-6">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-wide">Primary</button>
                <button className="bg-secondary text-secondary-foreground px-6 py-3 font-bold uppercase tracking-wide border-2 border-border">Secondary</button>
                <button className="bg-foreground text-background px-6 py-3 font-bold uppercase tracking-wide">Dark</button>
                <button className="px-6 py-3 font-bold uppercase tracking-wide border-2 border-foreground" style={{ backgroundColor: 'hsl(0 84% 60%)', color: 'white' }}>Destructive</button>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-background p-8 border-l-4 border-primary">
              <h3 className="font-display font-bold uppercase mb-6">Alerts</h3>
              <div className="space-y-4">
                <div className="bg-primary/10 border-l-4 border-primary p-4">
                  <p className="font-bold text-sm">Information</p>
                  <p className="text-sm text-muted-foreground">This is an informational message.</p>
                </div>
                <div className="border-l-4 p-4" style={{ backgroundColor: 'hsla(142, 76%, 36%, 0.1)', borderColor: 'hsl(142 76% 36%)' }}>
                  <p className="font-bold text-sm">Success</p>
                  <p className="text-sm text-muted-foreground">Your action was completed successfully.</p>
                </div>
                <div className="border-l-4 p-4" style={{ backgroundColor: 'hsla(0, 84%, 60%, 0.1)', borderColor: 'hsl(0 84% 60%)' }}>
                  <p className="font-bold text-sm">Error</p>
                  <p className="text-sm text-muted-foreground">Something went wrong. Please try again.</p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-background p-8 border-l-4 border-primary">
              <h3 className="font-display font-bold uppercase mb-6">Cards</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-foreground text-background p-6">
                  <p className="font-display text-3xl font-bold">50+</p>
                  <p className="text-xs uppercase tracking-wider opacity-70">Components</p>
                </div>
                <div className="bg-primary text-primary-foreground p-6">
                  <p className="font-display text-3xl font-bold">100%</p>
                  <p className="text-xs uppercase tracking-wider opacity-70">Accessible</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-background p-8 border-l-4 border-primary">
              <h3 className="font-display font-bold uppercase mb-6">Tags &amp; Badges</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-bold uppercase">New</span>
                <span className="bg-foreground text-background px-3 py-1 font-mono text-xs font-bold uppercase">Featured</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 font-mono text-xs font-bold uppercase">Draft</span>
                <span className="px-3 py-1 font-mono text-xs font-bold uppercase text-white" style={{ backgroundColor: 'hsl(142 76% 36%)' }}>Active</span>
                <span className="px-3 py-1 font-mono text-xs font-bold uppercase text-white" style={{ backgroundColor: 'hsl(0 84% 60%)' }}>Deprecated</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 font-mono text-xs font-bold uppercase border border-border">Default</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Variables */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            CSS Variables
          </h2>

          <div className="bg-foreground text-background p-6 md:p-8 font-mono text-sm overflow-x-auto">
            <pre><code dangerouslySetInnerHTML={{ __html: `<span class="text-muted-foreground">/* Dutchy Color Tokens */</span>
:root {
  <span class="text-primary">--background</span>: 40 30% 97%;
  <span class="text-primary">--foreground</span>: 25 20% 6%;

  <span class="text-primary">--primary</span>: 25 95% 53%;
  <span class="text-primary">--primary-foreground</span>: 0 0% 100%;

  <span class="text-primary">--secondary</span>: 25 20% 92%;
  <span class="text-primary">--secondary-foreground</span>: 25 25% 15%;

  <span class="text-primary">--muted</span>: 40 20% 94%;
  <span class="text-primary">--muted-foreground</span>: 25 15% 40%;

  <span class="text-primary">--border</span>: 25 20% 88%;
  <span class="text-primary">--input</span>: 25 20% 88%;
  <span class="text-primary">--ring</span>: 25 95% 53%;

  <span class="text-primary">--destructive</span>: 0 84% 60%;
  <span class="text-primary">--destructive-foreground</span>: 0 0% 100%;

  <span class="text-primary">--success</span>: 142 76% 36%;
  <span class="text-primary">--success-foreground</span>: 0 0% 100%;
}

<span class="text-muted-foreground">/* Usage with Tailwind */</span>
.element {
  background-color: hsl(var(<span class="text-primary">--primary</span>));
  color: hsl(var(<span class="text-primary">--primary-foreground</span>));
}` }} /></pre>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </Layout>
  );
};

export default ColorsPage;
