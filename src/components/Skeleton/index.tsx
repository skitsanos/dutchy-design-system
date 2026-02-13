import type { FC } from 'react';

interface SkeletonProps {
  variant?: 'text' | 'title' | 'avatar' | 'card' | 'table-row';
  count?: number;
  className?: string;
}

const variantClasses: Record<string, string> = {
  text: 'h-4 w-full',
  title: 'h-8 w-3/4',
  avatar: 'h-12 w-12',
  card: 'h-48 w-full',
  'table-row': '',
};

const SkeletonItem: FC<{ variant: string; className: string }> = ({
  variant,
  className,
}) => {
  if (variant === 'table-row') {
    return (
      <div className={`flex gap-4 ${className}`}>
        <div className="animate-skeleton h-4 flex-1" />
        <div className="animate-skeleton h-4 flex-1" />
        <div className="animate-skeleton h-4 w-20" />
        <div className="animate-skeleton h-4 w-20" />
      </div>
    );
  }

  return (
    <div
      className={`animate-skeleton ${variantClasses[variant]} ${className}`}
    />
  );
};

const Skeleton: FC<SkeletonProps> = ({
  variant = 'text',
  count = 1,
  className = '',
}) => {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="space-y-3">
      {items.map((i) => (
        <SkeletonItem key={i} variant={variant} className={className} />
      ))}
    </div>
  );
};

export default Skeleton;
