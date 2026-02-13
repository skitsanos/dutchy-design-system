import type { FC, ReactNode } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: 'slash' | 'chevron';
  className?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
  separator = 'chevron',
  className = '',
}) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {/* Separator (not on the first item) */}
              {index > 0 && (
                separator === 'slash' ? (
                  <span className="text-muted-foreground" aria-hidden="true">/</span>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m9 18 6-6-6-6"
                    />
                  </svg>
                )
              )}

              {isLast ? (
                <span
                  className="font-bold uppercase tracking-wide"
                  aria-current="page"
                >
                  {item.icon || item.label}
                </span>
              ) : (
                <a
                  href={item.href || '#'}
                  className="inline-flex items-center font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
                  {...(item.icon ? { 'aria-label': item.label } : {})}
                >
                  {item.icon || item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
