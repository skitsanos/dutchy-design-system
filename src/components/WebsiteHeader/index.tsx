import type { FC } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface WebsiteHeaderProps {
  currentPath?: string;
}

const navLinks: NavLink[] = [
  { href: '/typography', label: 'Typography' },
  { href: '/colors', label: 'Colors' },
  { href: '/components', label: 'Components' },
  { href: '/patterns', label: 'Patterns' },
  { href: '/bun', label: 'Bun' },
  { href: '/showcase', label: 'Showcase' },
];

const WebsiteHeader: FC<WebsiteHeaderProps> = ({ currentPath = '/' }) => {
  return (
    <header className="w-full border-b-4 border-primary bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-display font-bold text-xl">
            D.
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase">
            Dutchy
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPath === link.href
                  ? 'text-primary underline decoration-4 underline-offset-4'
                  : 'hover:text-primary hover:underline decoration-4 underline-offset-4'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/skitsanos/dutchy-design-system"
            className="bg-primary text-primary-foreground font-bold uppercase tracking-wide px-6 py-3 hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
        </nav>
        <button className="md:hidden p-2" aria-label="Menu" id="mobile-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav id="mobile-nav" className="hidden md:hidden border-t border-border pb-4">
        <div className="container mx-auto px-4 flex flex-col gap-2 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest py-2 transition-colors ${
                currentPath === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/skitsanos/dutchy-design-system"
            className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold uppercase tracking-wide text-center mt-2 hover:bg-primary/90 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default WebsiteHeader;
