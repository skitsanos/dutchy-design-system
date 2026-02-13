import type { FC } from 'react';
import Icon from '@/components/Icon';
import Flex from '@/components/Flex';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  variant?: 'standard' | 'compact';
  className?: string;
}

function getPageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | '...')[] = [1];

  if (current > 3) {
    pages.push('...');
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push('...');
  }

  pages.push(total);

  return pages;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  baseUrl,
  variant = 'standard',
  className = '',
}) => {
  const separator = baseUrl.includes('?') ? '&' : '?';

  function pageUrl(page: number): string {
    return `${baseUrl}${separator}page=${page}`;
  }

  if (variant === 'compact') {
    return (
      <nav aria-label="Pagination" className={className}>
        <Flex align="center" gap={4}>
          {currentPage > 1 ? (
            <a
              href={pageUrl(currentPage - 1)}
              className="text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <Icon name="chevron-left" size="sm" />
              Previous
            </a>
          ) : (
            <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground opacity-50 inline-flex items-center gap-1">
              <Icon name="chevron-left" size="sm" />
              Previous
            </span>
          )}
          <span className="text-sm text-muted-foreground">
            Page <strong className="text-foreground">{currentPage}</strong> of <strong className="text-foreground">{totalPages}</strong>
          </span>
          {currentPage < totalPages ? (
            <a
              href={pageUrl(currentPage + 1)}
              className="text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Next
              <Icon name="chevron-right" size="sm" />
            </a>
          ) : (
            <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground opacity-50 inline-flex items-center gap-1">
              Next
              <Icon name="chevron-right" size="sm" />
            </span>
          )}
        </Flex>
      </nav>
    );
  }

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav className={`flex items-center justify-center gap-1 ${className}`} aria-label="Pagination">
      {/* Previous */}
      {currentPage > 1 ? (
        <a
          href={pageUrl(currentPage - 1)}
          className="w-10 h-10 border-2 border-border flex items-center justify-center text-sm font-bold hover:border-foreground transition-colors"
          aria-label="Previous page"
        >
          &laquo;
        </a>
      ) : (
        <span
          className="w-10 h-10 border-2 border-border flex items-center justify-center text-sm font-bold text-muted-foreground opacity-50 cursor-not-allowed"
          aria-disabled="true"
        >
          &laquo;
        </span>
      )}

      {/* Page numbers */}
      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center text-sm text-muted-foreground"
            >
              ...
            </span>
          );
        }

        const isActive = page === currentPage;
        return isActive ? (
          <span
            key={page}
            className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold"
            aria-current="page"
          >
            {page}
          </span>
        ) : (
          <a
            key={page}
            href={pageUrl(page)}
            className="w-10 h-10 border-2 border-border flex items-center justify-center text-sm font-bold hover:border-foreground transition-colors"
          >
            {page}
          </a>
        );
      })}

      {/* Next */}
      {currentPage < totalPages ? (
        <a
          href={pageUrl(currentPage + 1)}
          className="w-10 h-10 border-2 border-border flex items-center justify-center text-sm font-bold hover:border-foreground transition-colors"
          aria-label="Next page"
        >
          &raquo;
        </a>
      ) : (
        <span
          className="w-10 h-10 border-2 border-border flex items-center justify-center text-sm font-bold text-muted-foreground opacity-50 cursor-not-allowed"
          aria-disabled="true"
        >
          &raquo;
        </span>
      )}
    </nav>
  );
};

export default Pagination;
