import type { FC } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  siteName?: string;
  currentPath?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
}

const Header: FC<HeaderProps> = ({
  siteName = 'Brand',
  currentPath = '/',
  navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  ctaText = 'Get Started',
  ctaHref = '/contact',
}) => {
  return (
    <header className="border-b-4 border-primary bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-bold uppercase tracking-tight"
          >
            {siteName}<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-150 ${
                  currentPath === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={ctaHref}
            className="hidden md:block bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors duration-150"
          >
            {ctaText}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-nav"
          className="hidden md:hidden border-t border-border pb-4"
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest py-2 transition-colors duration-150 ${
                  currentPath === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="bg-foreground text-background px-6 py-2 text-sm font-bold uppercase tracking-wide text-center mt-2 hover:bg-foreground/90 transition-colors duration-150"
            >
              {ctaText}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
