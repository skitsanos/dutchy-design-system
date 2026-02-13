import type { FC, ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'destructive' | 'warning' | 'info' | 'outline' | 'muted';
  closable?: boolean;
  className?: string;
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({
  variant = 'default',
  closable = false,
  className = '',
  children,
}) => {
  const variants = {
    default: 'bg-foreground text-background',
    primary: 'bg-primary text-primary-foreground',
    success: 'bg-success text-success-foreground',
    destructive: 'bg-destructive text-destructive-foreground',
    warning: 'bg-warning text-warning-foreground',
    info: 'bg-info text-info-foreground',
    outline: 'border-2 border-foreground text-foreground bg-transparent',
    muted: 'bg-muted text-muted-foreground',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
      {closable && (
        <button
          type="button"
          data-badge-close
          className="ml-1 inline-flex items-center justify-center w-4 h-4 opacity-70 hover:opacity-100 transition-opacity duration-150"
          aria-label="Close"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge;
