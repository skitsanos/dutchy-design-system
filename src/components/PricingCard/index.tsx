import type { FC } from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  description?: string;
  className?: string;
}

const PricingCard: FC<PricingCardProps> = ({
  name,
  price,
  period = '/month',
  features,
  ctaText,
  ctaHref,
  featured = false,
  badge,
  description,
  className = '',
}) => {
  if (featured) {
    return (
      <div className={`bg-foreground text-background p-8 flex flex-col relative ${className}`}>
        {/* "Most Popular" badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">
          {badge || 'Most Popular'}
        </div>

        <div className="mb-8">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2 text-primary">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-background/70">{description}</p>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-5xl font-bold">{price}</span>
            <span className="text-background/60">{period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M20 6 9 17l-5-5"
                />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          className="block w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-center hover:bg-primary/90 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-background border-2 border-border p-8 flex flex-col ${className}`}>
      <div className="mb-8">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
          {name}
        </h3>
        {badge && (
          <span className="inline-block bg-muted text-muted-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2">
            {badge}
          </span>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M20 6 9 17l-5-5"
              />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="block w-full py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wide text-center hover:bg-foreground hover:text-background transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default PricingCard;
