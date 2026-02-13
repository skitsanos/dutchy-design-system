import type { FC } from 'react';
import type { IconName } from '@/components/Icon/index.tsx';
import Icon from '@/components/Icon/index.tsx';

interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

const EmptyState: FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  actionHref,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}>
      {icon && (
        <div className="w-16 h-16 bg-muted flex items-center justify-center mb-6 text-muted-foreground">
          <Icon name={icon} size="lg" />
        </div>
      )}

      <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-muted-foreground max-w-sm mb-6">
          {description}
        </p>
      )}

      {actionText && actionHref && (
        <a
          href={actionHref}
          className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
        >
          {actionText}
        </a>
      )}

      {actionText && !actionHref && (
        <button
          className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          type="button"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
