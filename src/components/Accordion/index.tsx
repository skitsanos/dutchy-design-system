import type { FC, ReactNode } from 'react';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  variant?: 'default' | 'bordered';
  singleOpen?: boolean;
  defaultOpenIndex?: number;
  className?: string;
}

const Accordion: FC<AccordionProps> = ({
  items,
  variant = 'default',
  singleOpen = false,
  defaultOpenIndex,
  className = '',
}) => {
  const isDefault = variant === 'default';

  const containerClasses = isDefault
    ? `space-y-2 ${className}`
    : `border-2 border-border divide-y-2 divide-border bg-background ${className}`;

  const detailsClasses = isDefault
    ? 'group border-l-4 border-border bg-background hover:border-primary transition-colors'
    : 'group';

  const summaryClasses = isDefault
    ? 'flex items-center justify-between cursor-pointer p-6 font-display font-bold uppercase text-sm tracking-wider select-none list-none [&::-webkit-details-marker]:hidden'
    : 'px-6 py-4 font-bold uppercase text-sm tracking-wide cursor-pointer hover:bg-muted transition-colors flex items-center justify-between list-none [&::-webkit-details-marker]:hidden select-none';

  const contentClasses = isDefault
    ? 'px-6 pb-6 text-sm text-muted-foreground'
    : 'px-6 py-4 text-sm text-muted-foreground border-t border-border';

  return (
    <div
      className={containerClasses}
      {...(singleOpen ? { 'data-accordion': 'single' } : { 'data-accordion': '' })}
    >
      {items.map((item, index) => (
        <details
          key={index}
          className={detailsClasses}
          {...(index === defaultOpenIndex ? { open: true } : {})}
        >
          <summary className={summaryClasses}>
            {item.title}
            <svg
              className={`w-5 h-5 shrink-0 transform transition-transform duration-200 group-open:rotate-180`}
              data-accordion-icon=""
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </summary>
          <div className={contentClasses}>
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
