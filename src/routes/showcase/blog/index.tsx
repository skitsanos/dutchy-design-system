import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import SectionTitle from '@/components/SectionTitle';
import NewsletterForm from '@/components/NewsletterForm';
import Badge from '@/components/Badge';
import Button from '@/components/Button';

const headerNavLinks = [
  { href: '/showcase', label: 'Home' },
  { href: '/showcase/categories', label: 'Categories' },
  { href: '/showcase/pricing', label: 'Pricing' },
  { href: '/showcase/blog', label: 'Blog' },
];

const articles = [
  {
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600',
    category: 'Design',
    title: 'Typography in UI: Best Practices',
    description:
      'Learn how to create clear visual hierarchy and improve readability with strategic typography choices.',
    author: 'Alex Chen',
    date: 'Nov 27, 2025',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    category: 'Development',
    title: 'Building Scalable APIs',
    description:
      'A deep dive into architecture patterns for APIs that can handle millions of requests.',
    author: 'Maria Garcia',
    date: 'Nov 26, 2025',
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    category: 'Business',
    title: 'Metrics That Matter',
    description:
      'Identifying key performance indicators that drive real business growth and user engagement.',
    author: 'James Wilson',
    date: 'Nov 25, 2025',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600',
    category: 'Design',
    title: 'Color Theory Fundamentals',
    description:
      'Master the basics of color theory and learn how to create harmonious palettes.',
    author: 'Emma Brown',
    date: 'Nov 24, 2025',
  },
  {
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
    category: 'Development',
    title: 'Modern CSS Techniques',
    description:
      'Explore cutting-edge CSS features that simplify complex layouts and animations.',
    author: 'David Lee',
    date: 'Nov 23, 2025',
  },
  {
    image:
      'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600',
    category: 'Strategy',
    title: 'Remote Team Management',
    description:
      'Strategies for building and managing high-performing distributed teams effectively.',
    author: 'Rachel Kim',
    date: 'Nov 22, 2025',
  },
];

const BlogPage = ({ request }: { request: Request }) => {
  return (
    <Layout
      title="Blog | Dutchy Design System"
      meta={{
        description:
          'Insights on design, development, and digital strategy from the Dutchy Design System team.',
        keywords: 'blog, design, development, articles',
      }}
      scripts={['/assets/js/mobile-menu.js']}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/blog"
        navLinks={headerNavLinks}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      <main>
        {/* Hero / Featured Post */}
        <section className="py-16 md:py-24 border-b-8 border-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <Badge variant="primary" className="mb-6">Featured</Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold uppercase leading-[0.95] tracking-tighter mb-6">
                  The Future of
                  <br />
                  Design Systems
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Exploring how modern design systems are evolving to meet the
                  demands of complex digital products and diverse teams.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-foreground" />
                  <div>
                    <p className="font-bold text-sm">Sarah Johnson</p>
                    <p className="text-muted-foreground text-sm">
                      Nov 28, 2025
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="bg-foreground text-background px-8 py-3 font-bold uppercase tracking-wide inline-block hover:bg-foreground/90 transition-colors"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle>Latest Articles</SectionTitle>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
              {articles.map((article, index) => (
                <article key={index} className="bg-background">
                  <a href="#" className="block">
                    <div className="aspect-[16/10] bg-muted">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <Badge variant="primary">
                        {article.category}
                      </Badge>
                      <h3 className="font-display text-xl font-bold uppercase mt-3 mb-4 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-foreground" />
                        <div>
                          <p className="text-sm font-medium">
                            {article.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {article.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-block border-2 border-foreground px-10 py-4 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Load More Articles
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Stay
                <br />
                <span className="text-primary">Updated.</span>
              </h2>
              <p className="text-background/70 text-lg mb-8">
                Get the latest articles delivered straight to your inbox. No
                spam, ever.
              </p>
              <NewsletterForm variant="dark" action="/api/newsletter" />
            </div>
          </div>
        </section>
      </main>

      <Footer
        siteName="Dutchy"
        description="Insights on design, development, and digital strategy."
        columns={[
          {
            title: 'Categories',
            links: [
              { href: '#', label: 'Design' },
              { href: '#', label: 'Development' },
              { href: '#', label: 'Business' },
              { href: '#', label: 'Strategy' },
            ],
          },
          {
            title: 'Links',
            links: [
              { href: '#', label: 'About' },
              { href: '/showcase/contact', label: 'Contact' },
              { href: '#', label: 'RSS Feed' },
            ],
          },
        ]}
        copyright="&copy; 2025 Blog. All rights reserved."
      />
    </Layout>
  );
};

export default BlogPage;
