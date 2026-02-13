import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import PricingCard from '@/components/PricingCard';
import Accordion from '@/components/Accordion';

const headerNavLinks = [
  { href: '/showcase', label: 'Home' },
  { href: '/showcase/categories', label: 'Categories' },
  { href: '/showcase/pricing', label: 'Pricing' },
  { href: '/showcase/blog', label: 'Blog' },
];

const PricingPage = ({ request }: { request: Request }) => {
  return (
    <Layout
      title="Pricing | Dutchy Design System"
      meta={{
        description:
          'Simple, transparent pricing for the Dutchy Design System. Start free and scale as you grow.',
        keywords: 'pricing, plans, design system, components',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/pricing-toggle.js',
        '/assets/js/accordion.js',
      ]}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/pricing"
        navLinks={headerNavLinks}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      <main>
        {/* Hero Section */}
        <section className="border-b border-border py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-8">
              Simple Pricing
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              Choose Your
              <br />
              <span className="text-primary">Plan.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Start free and scale as you grow. All plans include access to our
              complete component library and design tokens.
            </p>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className="font-bold text-foreground" data-pricing-label="monthly">
                Monthly
              </span>
              <button
                className="w-14 h-8 bg-foreground flex items-center p-1 cursor-pointer"
                data-pricing-toggle=""
              >
                <span className="w-6 h-6 bg-primary transform translate-x-6 transition-transform" />
              </button>
              <span
                className="font-bold text-muted-foreground"
                data-pricing-label="yearly"
              >
                Yearly
                <span className="ml-2 bg-primary/20 text-primary px-2 py-1 font-mono text-xs">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-background p-8 flex flex-col">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Starter
                  </h3>
                  <span className="inline-block bg-muted text-muted-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2">
                    Free
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Perfect for side projects and learning.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">All core components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Basic design tokens</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Community support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">1 project</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Icon
                      name="x"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm">Premium templates</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Icon
                      name="x"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wide text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Pro Plan - Featured */}
              <div className="bg-foreground text-background p-8 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2 text-primary">
                    Pro
                  </h3>
                  <p className="text-sm text-background/70">
                    For professional developers and teams.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">$29</span>
                    <span className="text-background/60">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Everything in Starter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Advanced components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Premium templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Email support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Figma files included</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-center hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-background p-8 flex flex-col">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Enterprise
                  </h3>
                  <span className="inline-block border-2 border-border text-muted-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2">
                    Custom
                  </span>
                  <p className="text-sm text-muted-foreground">
                    For large organizations and custom needs.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Custom components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">White-label option</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">SLA guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      name="check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm">Onboarding training</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wide text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
                Compare <span className="text-primary">Features</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Detailed breakdown of what's included in each plan.
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="text-left p-4 font-display font-bold uppercase text-sm tracking-wider">
                      Feature
                    </th>
                    <th className="text-center p-4 font-display font-bold uppercase text-sm tracking-wider">
                      Starter
                    </th>
                    <th className="text-center p-4 font-display font-bold uppercase text-sm tracking-wider bg-primary text-primary-foreground">
                      Pro
                    </th>
                    <th className="text-center p-4 font-display font-bold uppercase text-sm tracking-wider">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border bg-background">
                    <td className="p-4 font-bold">Core Components</td>
                    <td className="p-4 text-center">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-border bg-muted/50">
                    <td className="p-4 font-bold">Design Tokens</td>
                    <td className="p-4 text-center font-mono text-sm">
                      Basic
                    </td>
                    <td className="p-4 text-center font-mono text-sm bg-primary/5">
                      Full
                    </td>
                    <td className="p-4 text-center font-mono text-sm">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="p-4 font-bold">Projects</td>
                    <td className="p-4 text-center font-mono text-sm">1</td>
                    <td className="p-4 text-center font-mono text-sm bg-primary/5">
                      Unlimited
                    </td>
                    <td className="p-4 text-center font-mono text-sm">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="border-b border-border bg-muted/50">
                    <td className="p-4 font-bold">Premium Templates</td>
                    <td className="p-4 text-center">
                      <Icon
                        name="x"
                        className="w-6 h-6 text-muted-foreground mx-auto"
                      />
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="p-4 font-bold">Figma Files</td>
                    <td className="p-4 text-center">
                      <Icon
                        name="x"
                        className="w-6 h-6 text-muted-foreground mx-auto"
                      />
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Icon
                        name="check"
                        className="w-6 h-6 text-primary mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-border bg-muted/50">
                    <td className="p-4 font-bold">Support</td>
                    <td className="p-4 text-center font-mono text-sm">
                      Community
                    </td>
                    <td className="p-4 text-center font-mono text-sm bg-primary/5">
                      Email
                    </td>
                    <td className="p-4 text-center font-mono text-sm">
                      Dedicated
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12 text-center">
                Frequently <span className="text-primary">Asked</span>
              </h2>

              <Accordion
                singleOpen
                defaultOpenIndex={0}
                items={[
                  {
                    title: 'Can I switch plans later?',
                    content:
                      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the difference.',
                  },
                  {
                    title: 'Is there a free trial for Pro?',
                    content:
                      'Yes, Pro comes with a 14-day free trial. No credit card required to start.',
                  },
                  {
                    title: 'What payment methods do you accept?',
                    content:
                      'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.',
                  },
                  {
                    title: 'Do you offer refunds?',
                    content:
                      'We offer a 30-day money-back guarantee for all paid plans. No questions asked.',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
              Ready to Get <span className="text-primary">Started?</span>
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              Join thousands of developers building with Dutchy Design System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <Icon name="arrow-right" size="md" />
              </a>
              <a
                href="/showcase/contact"
                className="bg-background text-foreground px-8 py-4 font-bold uppercase tracking-wider hover:bg-muted transition-colors"
              >
                Contact Sales
              </a>
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

export default PricingPage;
