import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Accordion from '@/components/Accordion';

const AccordionPage: FC = () => (
  <ComponentPageLayout componentId="accordion">
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Multi-open */}
        <div>
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Multi-Open</h3>
          <Accordion
            variant="bordered"
            defaultOpenIndex={0}
            items={[
              {
                title: 'What is the Dutchy Design System?',
                content: 'A bold, structured design language inspired by Dutch graphic design traditions.',
              },
              {
                title: 'What frameworks does it support?',
                content: 'Works with vanilla HTML/CSS, TailwindCSS, React, Vue, or any CSS framework.',
              },
              {
                title: 'Is it accessible?',
                content: 'Yes. High-contrast palette and WCAG-aware color guidance built in.',
              },
            ]}
          />
        </div>

        {/* Single-open */}
        <div>
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Single-Open (JS)</h3>
          <Accordion
            variant="bordered"
            singleOpen
            items={[
              {
                title: 'Getting Started',
                content: 'Include the CDN link for Tailwind and start building.',
              },
              {
                title: 'Customization',
                content: 'Override CSS custom properties to swap colors and typography.',
              },
              {
                title: 'Deployment',
                content: 'Build with Docker or Podman and serve via any static host.',
              },
            ]}
          />
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default AccordionPage;
