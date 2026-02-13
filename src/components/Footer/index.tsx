import type { FC } from 'react';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  siteName?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
}

const Footer: FC<FooterProps> = ({
  siteName = 'Brand',
  description = 'Built with the Dutchy Design System. Bold, structured, confident.',
  columns = [
    {
      title: 'Navigation',
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
      ],
    },
  ],
  copyright,
}) => {
  const year = new Date().getFullYear();
  const copyrightText = copyright || `\u00A9 ${year} ${siteName}. All rights reserved.`;

  return (
    <footer className="bg-foreground text-background border-t-8 border-primary">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a
              href="/"
              className="font-display text-2xl font-bold uppercase tracking-tight inline-block mb-6"
            >
              {siteName}<span className="text-primary">.</span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold uppercase tracking-wider text-sm mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-150 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-background/60 text-sm text-center">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
