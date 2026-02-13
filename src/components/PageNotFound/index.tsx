import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageNotFoundProps {
  request?: Request;
}

const PageNotFound: FC<PageNotFoundProps> = () => {
  return (
    <Layout title="404 - Page Not Found">
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-display text-8xl md:text-9xl font-bold text-muted mb-8">
            404
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/"
              className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide inline-block hover:bg-primary/90 transition-colors duration-150"
            >
              Back to Home
            </a>
            <a
              href="/contact"
              className="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide inline-block hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default PageNotFound;
