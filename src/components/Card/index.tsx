import type { FC, HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'bordered' | 'muted' | 'dark' | 'primary';
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: FC<CardProps> = ({
  variant = 'default',
  interactive = false,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-background',
    accent: 'bg-background border-l-4 border-primary',
    bordered: 'bg-background border-2 border-border',
    muted: 'bg-muted',
    dark: 'bg-foreground text-background',
    primary: 'bg-primary text-primary-foreground',
  };

  const paddings = {
    none: '',
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };

  const interactiveStyles = interactive
    ? 'cursor-pointer transition-all duration-150 hover:border-primary hover:bg-muted'
    : '';

  return (
    <div
      className={`${variants[variant]} ${paddings[padding]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h3 className={`font-display text-xl font-bold uppercase ${className}`}>
    {children}
  </h3>
);

export const CardDescription: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`text-muted-foreground text-sm leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={className}>{children}</div>
);

export const CardFooter: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mt-6 pt-4 border-t border-border ${className}`}>
    {children}
  </div>
);

export default Card;
