# Page Components

Page components are route handlers that render full HTML pages.

## Basic Page Structure

```tsx
// src/routes/index.tsx
import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  request: Request;
}

const HomePage: FC<PageProps> = ({ request }) => {
  const url = new URL(request.url);

  return (
    <Layout
      title="Home | My Site"
      meta={{
        description: 'Welcome to my site.',
      }}
    >
      <Header currentPath={url.pathname} />

      <main>
        {/* Page content sections */}
      </main>

      <Footer />
    </Layout>
  );
};

export default HomePage;
```

## Home Page Example

Full home page with hero, features, and CTA:

```tsx
// src/routes/index.tsx
import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';

interface HomePageProps {
  request: Request;
}

const HomePage: FC<HomePageProps> = ({ request }) => {
  const url = new URL(request.url);

  const features = [
    {
      icon: 'check',
      title: 'No Rounded Corners',
      description: 'Sharp edges convey confidence and precision throughout.',
    },
    {
      icon: 'type',
      title: 'Bold Typography',
      description: 'Heavy font weights and tight letter-spacing create hierarchy.',
    },
    {
      icon: 'palette',
      title: 'High Contrast',
      description: 'Strong primary colors against neutral backgrounds.',
    },
    {
      icon: 'layout-grid',
      title: 'Structured Grids',
      description: 'Deliberate spacing and consistent gaps create rhythm.',
    },
    {
      icon: 'square',
      title: 'Functional Decoration',
      description: 'Borders and blocks serve both aesthetic and functional purposes.',
    },
    {
      icon: 'sun-moon',
      title: 'Theme Support',
      description: 'Multiple color themes via CSS custom properties.',
    },
  ];

  return (
    <Layout
      title="Dutchy Design System"
      meta={{
        description: 'A bold design language inspired by Dutch graphic design traditions.',
      }}
    >
      <Header currentPath={url.pathname} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b-8 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Design System
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Bold<br />
                <span className="text-primary">Design.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                A structured design language inspired by Dutch graphic design traditions.
                Built for clarity, confidence, and visual impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/docs"
                  className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/components"
                  className="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
                >
                  Components
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-0.5 bg-border">
              <div className="bg-foreground text-background p-8">
                <p className="font-display text-4xl font-bold mb-2">50+</p>
                <p className="text-background/60 text-sm uppercase tracking-wider">
                  Components
                </p>
              </div>
              <div className="bg-primary text-primary-foreground p-8">
                <p className="font-display text-4xl font-bold mb-2">6</p>
                <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                  Categories
                </p>
              </div>
              <div className="bg-background p-8">
                <p className="font-display text-4xl font-bold mb-2">100%</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Accessible
                </p>
              </div>
              <div className="bg-muted p-8">
                <p className="font-display text-4xl font-bold mb-2">MIT</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Licensed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              Features
            </h2>
            <div className="h-2 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-l-4 border-primary bg-background p-8"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6">
                  <Icon icon={feature.icon} size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Ready to<br />
              <span className="text-primary">Start?</span>
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Get started with the Dutchy Design System today.
            </p>
            <a
              href="/docs/getting-started"
              className="bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-wide inline-block hover:bg-primary/90 transition-colors"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default HomePage;
```

## About Page Example

```tsx
// src/routes/about/index.tsx
import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AboutPageProps {
  request: Request;
}

const AboutPage: FC<AboutPageProps> = ({ request }) => {
  const url = new URL(request.url);

  return (
    <Layout
      title="About | My Site"
      meta={{
        description: 'Learn about our company and mission.',
      }}
    >
      <Header currentPath={url.pathname} />

      {/* Hero */}
      <section className="py-16 md:py-24 border-b-8 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
            About Us
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
            Our<br />
            <span className="text-primary">Story.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We believe in bold design that communicates with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We create design systems that help teams build consistent,
                  accessible, and beautiful user interfaces. Our approach is
                  inspired by the Dutch design tradition.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Dutchy Design System emphasizes clarity, structure, and
                  bold visual statements. Every element serves a purpose.
                </p>

                <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-6 mt-12">
                  Our Values
                </h2>
                <ul className="space-y-4">
                  {[
                    { title: 'Clarity', text: 'Every design decision should make interfaces clearer.' },
                    { title: 'Consistency', text: 'Patterns and tokens ensure visual harmony.' },
                    { title: 'Accessibility', text: 'Design for everyone, always.' },
                    { title: 'Performance', text: 'Fast, efficient, no bloat.' },
                  ].map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary mt-2 shrink-0"></span>
                      <div>
                        <strong className="font-bold">{value.title}:</strong>{' '}
                        <span className="text-muted-foreground">{value.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-muted p-8 mb-6">
                <h3 className="font-display text-xl font-bold uppercase mb-4">
                  Quick Facts
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Founded
                    </dt>
                    <dd className="font-display text-2xl font-bold">2024</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Components
                    </dt>
                    <dd className="font-display text-2xl font-bold">50+</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      License
                    </dt>
                    <dd className="font-display text-2xl font-bold">MIT</dd>
                  </div>
                </dl>
              </div>

              <div className="border-l-4 border-primary p-8">
                <h3 className="font-display text-xl font-bold uppercase mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Have questions? We'd love to hear from you.
                </p>
                <a
                  href="/contact"
                  className="bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide inline-block hover:bg-foreground/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default AboutPage;
```

## Contact Page with Form

```tsx
// src/routes/contact/index.tsx
import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ContactPageProps {
  request: Request;
}

const ContactPage: FC<ContactPageProps> = ({ request }) => {
  const url = new URL(request.url);
  const success = url.searchParams.get('success') === 'true';

  return (
    <Layout
      title="Contact | My Site"
      meta={{
        description: 'Get in touch with us.',
      }}
    >
      <Header currentPath={url.pathname} />

      {/* Hero */}
      <section className="py-16 md:py-24 border-b-8 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
            Get in<br />
            <span className="text-primary">Touch.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {success ? (
                <div className="bg-primary/10 border-l-4 border-primary p-8">
                  <h2 className="font-display text-2xl font-bold uppercase mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form action="/contact" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border-2 border-border px-4 py-3 focus:border-foreground focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider"
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full border-2 border-border px-4 py-3 focus:border-foreground focus:outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full border-2 border-border px-4 py-3 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider"
                    >
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full border-2 border-border px-4 py-3 focus:border-foreground focus:outline-none transition-colors resize-y min-h-[150px]"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-foreground text-background p-8 mb-6">
                <h3 className="font-display text-xl font-bold uppercase mb-6">
                  Contact Info
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-background/60 mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:hello@example.com"
                        className="text-primary hover:underline"
                      >
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-background/60 mb-1">
                      Phone
                    </dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-background/60 mb-1">
                      Address
                    </dt>
                    <dd className="text-background/80">
                      123 Design Street<br />
                      Amsterdam, Netherlands
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border-l-4 border-primary p-8">
                <h3 className="font-display text-xl font-bold uppercase mb-4">
                  Office Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Monday - Friday</dt>
                    <dd className="font-bold">9:00 - 18:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Saturday</dt>
                    <dd className="font-bold">10:00 - 14:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Sunday</dt>
                    <dd className="font-bold">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default ContactPage;
```

## Dynamic Page with Parameters

```tsx
// src/routes/products/$slug/index.tsx
import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample product data (in real app, fetch from database)
const products: Record<string, { name: string; description: string; price: string }> = {
  'product-one': {
    name: 'Product One',
    description: 'This is the first product.',
    price: '$99',
  },
  'product-two': {
    name: 'Product Two',
    description: 'This is the second product.',
    price: '$149',
  },
};

interface ProductPageProps {
  request: Request;
}

const ProductPage: FC<ProductPageProps> = ({ request }) => {
  const url = new URL(request.url);

  // Get slug from URL parameter
  const slug = url.searchParams.get('_param_slug') || url.pathname.split('/').pop() || '';

  const product = products[slug];

  if (!product) {
    return (
      <Layout title="Product Not Found">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold uppercase mb-4">
              Product Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist.
            </p>
            <a
              href="/products"
              className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide"
            >
              View All Products
            </a>
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout
      title={`${product.name} | Products`}
      meta={{
        description: product.description,
      }}
    >
      <Header currentPath="/products" />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-muted border-4 border-border">
              {/* Placeholder for product image */}
            </div>

            {/* Product Info */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Product
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {product.description}
              </p>
              <p className="font-display text-4xl font-bold mb-8">
                {product.price}
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors">
                  Add to Cart
                </button>
                <button className="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default ProductPage;
```
