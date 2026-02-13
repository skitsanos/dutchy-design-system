import type { FC, ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  underline?: boolean;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  children,
  subtitle,
  underline = true,
  className = '',
}) => {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
        {children}
      </h2>
      {underline && (
        <div className="h-2 w-24 bg-primary" />
      )}
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
