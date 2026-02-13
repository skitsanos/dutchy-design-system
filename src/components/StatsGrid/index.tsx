import type { FC } from 'react';

interface StatTrend {
  value: string;
  direction: 'up' | 'down';
  sentiment?: 'positive' | 'negative';
}

interface Stat {
  value: string;
  label: string;
  variant?: 'dark' | 'primary' | 'light' | 'muted';
  trend?: StatTrend;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  size?: 'default' | 'sm';
  layout?: 'grid' | 'compact';
}

const TrendArrow: FC<{ direction: 'up' | 'down'; className?: string }> = ({
  direction,
  className = '',
}) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {direction === 'up' ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 17l5-5 5 5m0-8l-5 5-5-5"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 7l-5 5-5-5m0 8l5-5 5 5"
      />
    )}
  </svg>
);

const TrendIndicator: FC<{ trend: StatTrend }> = ({ trend }) => {
  const colorClass =
    trend.sentiment === 'negative' ? 'text-destructive' : 'text-success';

  return (
    <div className={`flex items-center gap-1.5 ${colorClass}`}>
      <TrendArrow direction={trend.direction} />
      <span className="text-sm font-bold">{trend.value}</span>
    </div>
  );
};

const StatsGrid: FC<StatsGridProps> = ({
  stats,
  columns = 4,
  size = 'default',
  layout = 'grid',
}) => {
  const variants = {
    dark: 'bg-foreground text-background',
    primary: 'bg-primary text-primary-foreground',
    light: 'bg-background',
    muted: 'bg-muted',
  };

  const textVariants = {
    dark: 'text-background/60',
    primary: 'text-primary-foreground/70',
    light: 'text-muted-foreground',
    muted: 'text-muted-foreground',
  };

  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  if (layout === 'compact') {
    return (
      <div className="bg-background flex divide-x-2 divide-border border-2 border-border">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 p-4 text-center">
            <p className="font-display text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  const sizeStyles = {
    default: { cell: 'p-8', value: 'text-4xl md:text-5xl' },
    sm: { cell: 'p-6', value: 'text-3xl' },
  };

  const s = sizeStyles[size];

  return (
    <div className={`grid ${columnClasses[columns]} gap-0.5 bg-border`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${variants[stat.variant || 'light']} ${s.cell}`}
        >
          <p className={`font-display ${s.value} font-bold mb-2`}>
            {stat.value}
          </p>
          <p
            className={`${textVariants[stat.variant || 'light']} text-sm uppercase tracking-wider${stat.trend ? ' mb-2' : ''}`}
          >
            {stat.label}
          </p>
          {stat.trend && <TrendIndicator trend={stat.trend} />}
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
