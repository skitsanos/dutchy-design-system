import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import SectionTitle from '@/components/SectionTitle';
import StatsGrid from '@/components/StatsGrid';
import FeatureGrid from '@/components/FeatureGrid';
import Button from '@/components/Button';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

const headerNavLinks = [
  { href: '/showcase', label: 'Home' },
  { href: '/showcase/categories', label: 'Categories' },
  { href: '/showcase/pricing', label: 'Pricing' },
  { href: '/showcase/blog', label: 'Blog' },
];

const ThemesPage = ({ request }: { request: Request }) => {
  return (
    <Layout
      title="Theme Switcher | Dutchy Design System"
      meta={{
        description:
          'Explore dynamic theme switching with the Dutchy Design System. Switch between Dutch Orange, Royal Purple, and Crimson Red.',
        keywords: 'themes, theme switcher, CSS variables, design system',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/theme-switcher.js',
      ]}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/themes"
        navLinks={headerNavLinks}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      <main>
        {/* Theme Switcher Controls */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Theme:
              </span>
              <div className="flex gap-2">
                <button
                  className="w-8 h-8 hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'hsl(25 95% 53%)' }}
                  aria-label="Dutch Orange theme"
                  title="Dutch Orange"
                  data-theme-switch="orange"
                />
                <button
                  className="w-8 h-8 hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'hsl(263 70% 58%)' }}
                  aria-label="Royal Purple theme"
                  title="Royal Purple"
                  data-theme-switch="purple"
                />
                <button
                  className="w-8 h-8 hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'hsl(0 84% 50%)' }}
                  aria-label="Crimson Red theme"
                  title="Crimson Red"
                  data-theme-switch="crimson"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b-8 border-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Theme Switching Demo
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Dynamic
                <br />
                <span className="text-primary">Themes.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Switch between Dutch Orange, Royal Purple, and Crimson Red
                themes using the buttons above.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="outline">Secondary Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <StatsGrid
              columns={4}
              stats={[
                { value: '100%', label: 'CSS Variables', variant: 'light' },
                { value: '3', label: 'Theme Options', variant: 'light' },
                { value: '0ms', label: 'Page Reload', variant: 'light' },
                { value: 'HSL', label: 'Color Format', variant: 'light' },
              ]}
            />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle>Features</SectionTitle>

            <FeatureGrid
              columns={3}
              features={[
                {
                  icon: <Icon name="eye" size="lg" />,
                  title: 'CSS Variables',
                  description:
                    'Theme colors are defined using CSS custom properties (variables) making them easy to update dynamically.',
                },
                {
                  icon: <Icon name="zap" size="lg" />,
                  title: 'Instant Updates',
                  description:
                    'Theme changes happen instantly without page reload. A smooth transition effect enhances the experience.',
                },
                {
                  icon: <Icon name="shield" size="lg" />,
                  title: 'HSL Format',
                  description:
                    'Using HSL color format allows easy manipulation of lightness and saturation for variants.',
                },
              ]}
            />
          </div>
        </section>

        {/* Color Blocks Demo */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle>Color Blocks</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
              <div className="bg-foreground text-background p-10">
                <h3 className="font-display text-2xl font-bold uppercase mb-4">
                  Dark Block
                </h3>
                <p className="text-background/70">
                  High contrast inverted content.
                </p>
              </div>
              <div className="bg-primary text-primary-foreground p-10">
                <h3 className="font-display text-2xl font-bold uppercase mb-4">
                  Primary Block
                </h3>
                <p className="text-primary-foreground/80">
                  Dynamic theme color block.
                </p>
              </div>
              <div className="bg-background p-10">
                <h3 className="font-display text-2xl font-bold uppercase mb-4">
                  Light Block
                </h3>
                <p className="text-muted-foreground">
                  Standard content block.
                </p>
              </div>
              <div className="bg-muted p-10">
                <h3 className="font-display text-2xl font-bold uppercase mb-4">
                  Muted Block
                </h3>
                <p className="text-muted-foreground">
                  Subtle background block.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
                Button
                <br />
                <span className="text-primary">Variants.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button variant="primary">Primary</Button>
              <a
                href="#"
                className="bg-background text-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-background/90 transition-colors inline-flex items-center"
              >
                Secondary
              </a>
              <a
                href="#"
                className="border-2 border-background text-background px-8 py-3 font-bold uppercase tracking-wide hover:bg-background hover:text-foreground transition-colors inline-flex items-center"
              >
                Outline
              </a>
              <a
                href="#"
                className="text-background px-8 py-3 font-bold uppercase tracking-wide hover:text-primary transition-colors inline-flex items-center"
              >
                Ghost
              </a>
            </div>
          </div>
        </section>

        {/* Form Demo */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-4">
                  Contact Form
                </h2>
                <div className="h-2 w-24 bg-primary mx-auto" />
              </div>

              <Form spacing="md">
                <Input
                  label="Name"
                  type="text"
                  placeholder="Your name"
                  name="name"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  name="email"
                />
                <Textarea
                  label="Message"
                  placeholder="Your message"
                  name="message"
                />
                <Button variant="primary" fullWidth type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle>Implementation</SectionTitle>

            <div className="bg-foreground text-background p-8 overflow-x-auto">
              <pre className="font-mono text-sm">
                <code>
{`/* CSS Variables for Theme */
:root {
  /* Dutch Orange (Default) */
  --primary-h: 25;
  --primary-s: 95%;
  --primary-l: 53%;
}

[data-theme="purple"] {
  /* Royal Purple */
  --primary-h: 263;
  --primary-s: 70%;
  --primary-l: 58%;
}

[data-theme="crimson"] {
  /* Crimson Red */
  --primary-h: 0;
  --primary-s: 84%;
  --primary-l: 50%;
}

/* Apply theme colors */
.bg-primary {
  background-color: hsl(var(--primary-h) var(--primary-s) var(--primary-l));
}

/* JavaScript Theme Switcher */
function setTheme(theme) {
  if (theme === 'orange') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('theme', theme);
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>
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
              { href: '/showcase/categories', label: 'Patterns' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { href: '#', label: 'Privacy' },
              { href: '#', label: 'Terms' },
            ],
          },
        ]}
        copyright="&copy; 2025 Dutchy Design System"
      />
    </Layout>
  );
};

export default ThemesPage;
