import type { FC } from 'react';

const WebsiteFooter: FC = () => {
  return (
    <footer className="bg-foreground text-background border-t-8 border-primary pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4 space-y-6">
            <div className="w-16 h-16 bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter leading-none">
              Dutchy<br/>Design.
            </h2>
            <p className="text-background/60 text-sm max-w-xs">
              A bold, structural design system inspired by Dutch design principles. Zero border radius, warm colors, architectural layouts.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-primary">Foundations</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="/typography" className="hover:text-primary transition-colors">Typography</a></li>
              <li><a href="/colors" className="hover:text-primary transition-colors">Colors</a></li>
              <li><a href="/components" className="hover:text-primary transition-colors">Spacing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-primary">Components</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="/components" className="hover:text-primary transition-colors">Buttons</a></li>
              <li><a href="/components" className="hover:text-primary transition-colors">Forms</a></li>
              <li><a href="/components" className="hover:text-primary transition-colors">Cards</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-primary">Integration</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="/bun" className="hover:text-primary transition-colors">Using with Bun</a></li>
              <li><a href="/patterns" className="hover:text-primary transition-colors">Patterns</a></li>
              <li><a href="https://github.com/skitsanos/dutchy-design-system" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs opacity-60 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Dutchy Design System. Open Source under MIT License.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/skitsanos/dutchy-design-system" className="w-8 h-8 bg-background text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/skitsanos/" className="w-8 h-8 bg-background text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
