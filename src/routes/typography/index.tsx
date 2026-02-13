import type { FC } from 'react';
import Layout from '@/components/Layout';
import WebsiteHeader from '@/components/WebsiteHeader';
import WebsiteFooter from '@/components/WebsiteFooter';

const TypographyPage: FC = () => {
  return (
    <Layout
      title="Typography - Dutchy Design System"
      meta={{
        description:
          'Typography system for Dutchy Design System. Space Grotesk for display, Inter for body text, JetBrains Mono for code.',
        keywords:
          'typography, fonts, Space Grotesk, Inter, JetBrains Mono, design system, type scale',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <WebsiteHeader currentPath="/typography" />

      {/* Page Header */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-6">
              Foundation
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              Typography
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Dutchy type system uses three carefully selected font families: Space Grotesk for bold display text, Inter for readable body copy, and JetBrains Mono for code.
            </p>
          </div>
        </div>
      </section>

      {/* Font Families */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            Font Families
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-border">
            {/* Display Font */}
            <div className="bg-background p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Display</span>
              </div>
              <p className="font-display text-5xl font-bold uppercase tracking-tighter mb-4">
                Space Grotesk
              </p>
              <p className="text-muted-foreground mb-6">
                Used for headlines, titles, and any text that needs to make an impact. Bold weights only.
              </p>
              <div className="font-mono text-xs bg-foreground text-background p-4">
                font-family: 'Space Grotesk'
              </div>
            </div>

            {/* Body Font */}
            <div className="bg-background p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-secondary" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Body</span>
              </div>
              <p className="font-sans text-5xl font-semibold mb-4">
                Inter
              </p>
              <p className="text-muted-foreground mb-6">
                The workhorse font for body text, UI elements, and anything that needs to be highly readable.
              </p>
              <div className="font-mono text-xs bg-foreground text-background p-4">
                font-family: 'Inter'
              </div>
            </div>

            {/* Mono Font */}
            <div className="bg-background p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-foreground" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mono</span>
              </div>
              <p className="font-mono text-4xl font-bold mb-4">
                JetBrains Mono
              </p>
              <p className="text-muted-foreground mb-6">
                For code blocks, technical content, labels, and anywhere monospace adds clarity.
              </p>
              <div className="font-mono text-xs bg-foreground text-background p-4">
                font-family: 'JetBrains Mono'
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4">
            Type Scale
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A carefully crafted scale that provides clear visual hierarchy. Display sizes use Space Grotesk, body sizes use Inter.
          </p>

          <div className="space-y-0">
            {/* Display Sizes */}
            <div className="border-l-4 border-primary bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-primary uppercase tracking-wider w-24 shrink-0">8xl / 96px</span>
                <span className="font-display text-8xl font-bold uppercase tracking-tighter leading-none">Display</span>
              </div>
            </div>

            <div className="border-l-4 border-primary bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-primary uppercase tracking-wider w-24 shrink-0">7xl / 72px</span>
                <span className="font-display text-7xl font-bold uppercase tracking-tighter leading-none">Headline</span>
              </div>
            </div>

            <div className="border-l-4 border-primary bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-primary uppercase tracking-wider w-24 shrink-0">6xl / 60px</span>
                <span className="font-display text-6xl font-bold uppercase tracking-tighter leading-none">Title Large</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">5xl / 48px</span>
                <span className="font-display text-5xl font-bold uppercase tracking-tighter leading-none">Title</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">4xl / 36px</span>
                <span className="font-display text-4xl font-bold uppercase tracking-tight leading-none">Section</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">3xl / 30px</span>
                <span className="font-display text-3xl font-bold uppercase tracking-tight">Heading</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">2xl / 24px</span>
                <span className="font-display text-2xl font-bold uppercase">Subheading</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">xl / 20px</span>
                <span className="text-xl font-medium">Lead paragraph text for introductions</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">base / 16px</span>
                <span className="text-base">Body text for paragraphs and general content</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6 mb-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">sm / 14px</span>
                <span className="text-sm">Small text for captions and secondary content</span>
              </div>
            </div>

            <div className="border-l-4 border-border bg-background p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0">xs / 12px</span>
                <span className="text-xs uppercase tracking-widest">Labels, tags, and micro text</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Styles */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            Text Styles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Display Style */}
            <div className="bg-foreground text-background p-8">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Display Style</span>
              <p className="font-display text-4xl font-bold uppercase tracking-tighter mt-4 mb-6">
                Bold Uppercase<br />Tight Tracking
              </p>
              <p className="text-background/70 text-sm">
                Used for hero headlines and major section titles. Always uppercase with tight letter-spacing.
              </p>
            </div>

            {/* Heading Style */}
            <div className="bg-background border-4 border-border p-8">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Heading Style</span>
              <p className="font-display text-2xl font-bold uppercase tracking-wide mt-4 mb-6">
                Section Headers
              </p>
              <p className="text-muted-foreground text-sm">
                For section titles and card headers. Bold weight with wider tracking.
              </p>
            </div>

            {/* Body Style */}
            <div className="bg-background border-4 border-border p-8">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Body Style</span>
              <p className="text-base mt-4 mb-6 leading-relaxed">
                Body text uses Inter at regular weight with relaxed line height for optimal readability. This creates comfortable reading for longer content blocks.
              </p>
              <p className="text-muted-foreground text-sm">
                Default for paragraphs and general content.
              </p>
            </div>

            {/* Label Style */}
            <div className="bg-muted p-8">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Label Style</span>
              <p className="font-mono text-xs uppercase tracking-widest mt-4 mb-6">
                Monospace &bull; Uppercase &bull; Wide Tracking
              </p>
              <p className="text-muted-foreground text-sm">
                For tags, badges, metadata, and technical labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Content */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            Sample Article
          </h2>

          <div className="max-w-3xl bg-background p-8 md:p-12 border-l-4 border-primary">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Design Philosophy</span>

            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mt-4 mb-6">
              The Dutch Approach to Design
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Dutch design is characterized by its bold simplicity, structural clarity, and functional beauty. It rejects unnecessary ornamentation in favor of honest expression.
            </p>

            <h2 className="font-display text-2xl font-bold uppercase tracking-wide mb-4">
              Core Principles
            </h2>

            <p className="text-base leading-relaxed mb-6">
              The foundation of Dutch design lies in its commitment to clarity and purpose. Every element must justify its existence. This philosophy extends from architecture to graphic design, creating a cohesive visual language that speaks through structure rather than decoration.
            </p>

            <p className="text-base leading-relaxed mb-6">
              Sharp corners and clean edges define the aesthetic. The deliberate absence of rounded corners creates a bold, architectural feel that demands attention without shouting. It's confident design that knows its worth.
            </p>

            <h3 className="font-display text-xl font-bold uppercase mb-3">
              Color as Structure
            </h3>

            <p className="text-base leading-relaxed mb-6">
              Colors in Dutch design serve structural purposes. The warm orange primary creates focal points, while the neutral palette provides a stable foundation. Each color has a role, a purpose, a place in the hierarchy.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-8">
              <p className="text-xl italic text-muted-foreground">
                "Good design is as little design as possible. Less, but better."
              </p>
              <cite className="font-mono text-xs uppercase tracking-widest mt-2 block">
                — Dieter Rams
              </cite>
            </blockquote>

            <p className="text-base leading-relaxed">
              This philosophy permeates every aspect of the Dutchy Design System. From typography choices to spacing scales, each decision reinforces the core values of bold simplicity and structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-12">
            Implementation
          </h2>

          <div className="bg-foreground text-background p-6 md:p-8 font-mono text-sm overflow-x-auto">
            <pre><code dangerouslySetInnerHTML={{ __html: `<span class="text-muted-foreground">/* Tailwind Config */</span>
fontFamily: {
  <span class="text-primary">display</span>: ['Space Grotesk', 'sans-serif'],
  <span class="text-primary">sans</span>: ['Inter', 'sans-serif'],
  <span class="text-primary">mono</span>: ['JetBrains Mono', 'monospace'],
}

<span class="text-muted-foreground">/* Usage */</span>
&lt;h1 class="<span class="text-primary">font-display</span> text-6xl font-bold uppercase tracking-tighter"&gt;
  Display Heading
&lt;/h1&gt;

&lt;p class="<span class="text-primary">font-sans</span> text-base leading-relaxed"&gt;
  Body paragraph text
&lt;/p&gt;

&lt;code class="<span class="text-primary">font-mono</span> text-sm"&gt;
  Code snippet
&lt;/code&gt;` }} /></pre>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </Layout>
  );
};

export default TypographyPage;
