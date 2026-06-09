import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import DataTable from '@/components/DataTable';
import Flex from '@/components/Flex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Layout from '@/components/Layout';

const headerNavLinks = [
  { href: '/showcase', label: 'Home' },
  { href: '/showcase/categories', label: 'Categories' },
  { href: '/showcase/pricing', label: 'Pricing' },
  { href: '/showcase/blog', label: 'Blog' },
];

const PricingPage = () => {
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
              Start free and scale as you grow. All plans include access to our complete component
              library and design tokens.
            </p>
            {/* Toggle */}
            <Flex align="center" justify="center" gap={4} data-pricing-toggle="">
              <Button variant="ghost" size="sm" className="font-bold" data-pricing-monthly="">
                Monthly
              </Button>
              <Button
                variant="ghost"
                icon
                className="w-14 h-8 bg-foreground flex items-center p-1 cursor-pointer"
                data-pricing-switch=""
                role="switch"
                aria-checked="false"
                aria-label="Toggle between monthly and yearly billing"
              >
                <span className="w-6 h-6 bg-primary transform translate-x-0 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="font-bold text-muted-foreground"
                data-pricing-yearly=""
              >
                Yearly
                <span className="ml-2 bg-primary/20 text-primary px-2 py-1 font-mono text-xs">
                  Save 20%
                </span>
              </Button>
            </Flex>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border max-w-5xl mx-auto">
              {/* Free Plan */}
              <Flex direction="col" className="bg-background p-8">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Starter
                  </h2>
                  <span className="inline-block bg-muted text-muted-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2">
                    Free
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Perfect for side projects and learning.
                  </p>
                </div>
                <div className="mb-8">
                  <Flex align="baseline" gap={1}>
                    <span
                      className="font-display text-5xl font-bold"
                      data-price-monthly="$0"
                      data-price-yearly="$0"
                    >
                      $0
                    </span>
                    <span className="text-muted-foreground" data-period="">
                      /month
                    </span>
                  </Flex>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">All core components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Basic design tokens</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Community support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">1 project</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="x" className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Premium templates</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="x" className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <a
                  href="/showcase/register"
                  className="block w-full py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wide text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Get Started
                </a>
              </Flex>

              {/* Pro Plan - Featured */}
              <Flex direction="col" className="bg-foreground text-background p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-2 text-primary">
                    Pro
                  </h2>
                  <p className="text-sm text-background/70">
                    For professional developers and teams.
                  </p>
                </div>
                <div className="mb-8">
                  <Flex align="baseline" gap={1}>
                    <span
                      className="font-display text-5xl font-bold"
                      data-price-monthly="$29"
                      data-price-yearly="$279"
                    >
                      $29
                    </span>
                    <span className="text-background/60" data-period="">
                      /month
                    </span>
                  </Flex>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Everything in Starter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Advanced components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Premium templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Figma files included</span>
                  </li>
                </ul>
                <a
                  href="/showcase/register"
                  className="block w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-center hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                </a>
              </Flex>

              {/* Enterprise Plan */}
              <Flex direction="col" className="bg-background p-8">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Enterprise
                  </h2>
                  <span className="inline-block border-2 border-border text-muted-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2">
                    Custom
                  </span>
                  <p className="text-sm text-muted-foreground">
                    For large organizations and custom needs.
                  </p>
                </div>
                <div className="mb-8">
                  <Flex align="baseline" gap={1}>
                    <span
                      className="font-display text-5xl font-bold"
                      data-price-monthly="$99"
                      data-price-yearly="$950"
                    >
                      $99
                    </span>
                    <span className="text-muted-foreground" data-period="">
                      /month
                    </span>
                  </Flex>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Custom components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">White-label option</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">SLA guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Onboarding training</span>
                  </li>
                </ul>
                <a
                  href="/showcase/contact"
                  className="block w-full py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wide text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Contact Sales
                </a>
              </Flex>
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

            <DataTable
              className="max-w-5xl mx-auto"
              headerClassName="bg-foreground text-background"
              columns={[
                { key: 'feature', label: 'Feature', className: 'font-bold' },
                {
                  key: 'starter',
                  label: 'Starter',
                  align: 'center',
                  render: (value) =>
                    value === 'included' ? (
                      <>
                        <Icon name="check" className="w-6 h-6 text-primary mx-auto" />
                        <span className="sr-only">Included</span>
                      </>
                    ) : value === 'excluded' ? (
                      <>
                        <Icon name="x" className="w-6 h-6 text-muted-foreground mx-auto" />
                        <span className="sr-only">Not included</span>
                      </>
                    ) : (
                      <span className="font-mono text-sm">{value}</span>
                    ),
                },
                {
                  key: 'pro',
                  label: 'Pro',
                  align: 'center',
                  render: (value) =>
                    value === 'included' ? (
                      <>
                        <Icon name="check" className="w-6 h-6 text-primary mx-auto" />
                        <span className="sr-only">Included</span>
                      </>
                    ) : (
                      <span className="font-mono text-sm">{value}</span>
                    ),
                },
                {
                  key: 'enterprise',
                  label: 'Enterprise',
                  align: 'center',
                  render: (value) =>
                    value === 'included' ? (
                      <>
                        <Icon name="check" className="w-6 h-6 text-primary mx-auto" />
                        <span className="sr-only">Included</span>
                      </>
                    ) : (
                      <span className="font-mono text-sm">{value}</span>
                    ),
                },
              ]}
              data={[
                {
                  feature: 'Core Components',
                  starter: 'included',
                  pro: 'included',
                  enterprise: 'included',
                },
                { feature: 'Design Tokens', starter: 'Basic', pro: 'Full', enterprise: 'Custom' },
                { feature: 'Projects', starter: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
                {
                  feature: 'Premium Templates',
                  starter: 'excluded',
                  pro: 'included',
                  enterprise: 'included',
                },
                {
                  feature: 'Figma Files',
                  starter: 'excluded',
                  pro: 'included',
                  enterprise: 'included',
                },
                {
                  feature: 'Support',
                  starter: 'Community',
                  pro: 'Email',
                  enterprise: 'Dedicated',
                },
              ]}
            />
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
                      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
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
            <Flex direction="col" gap={4} className="sm:flex-row justify-center">
              <a
                href="/showcase/register"
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
            </Flex>
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
