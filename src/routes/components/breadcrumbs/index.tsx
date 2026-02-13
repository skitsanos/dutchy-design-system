import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';

const BreadcrumbsPage: FC = () => (
  <ComponentPageLayout componentId="breadcrumbs">
    <>
      {/* Standard */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Standard</h3>
        <Breadcrumbs
          separator="slash"
          items={[
            { label: 'Home', href: '#breadcrumbs' },
            { label: 'Products', href: '#breadcrumbs' },
            { label: 'Electronics', href: '#breadcrumbs' },
            { label: 'Headphones' },
          ]}
        />
      </div>

      {/* Chevron Icons */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Chevron Icons</h3>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#breadcrumbs', icon: <Icon name="home" size="sm" /> },
            { label: 'Docs', href: '#breadcrumbs' },
            { label: 'Components', href: '#breadcrumbs' },
            { label: 'Breadcrumbs' },
          ]}
        />
      </div>

      {/* Truncated */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Truncated</h3>
        <nav aria-label="Breadcrumb demo 3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <a href="#breadcrumbs" className="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Home</a>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">/</li>
            <li>
              <button type="button" className="inline-flex items-center border-2 border-border px-2 py-0.5 font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors" aria-label="Show collapsed items">...</button>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">/</li>
            <li className="font-bold uppercase tracking-wide" aria-current="page">Product Detail</li>
          </ol>
        </nav>
      </div>

      {/* With Background Bar */}
      <div className="bg-background border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Background Bar</h3>
        <nav aria-label="Breadcrumb demo 4" className="bg-muted border-b-2 border-border px-6 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <a href="#breadcrumbs" className="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Home</a>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">/</li>
            <li>
              <a href="#breadcrumbs" className="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Settings</a>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">/</li>
            <li className="font-bold uppercase tracking-wide" aria-current="page">Profile</li>
          </ol>
        </nav>
      </div>
    </>
  </ComponentPageLayout>
);

export default BreadcrumbsPage;
