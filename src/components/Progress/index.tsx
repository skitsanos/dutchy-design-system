import type { FC } from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'destructive' | 'foreground';
  showValue?: boolean;
  label?: string;
  className?: string;
}

const sizeMap = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4',
};

const variantMap = {
  primary: 'bg-primary',
  success: 'bg-success',
  destructive: 'bg-destructive',
  foreground: 'bg-foreground',
};

const Progress: FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showValue = false,
  label,
  className = '',
}) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
          )}
          {showValue && (
            <span className="text-xs text-muted-foreground font-mono">{Math.round(percent)}%</span>
          )}
        </div>
      )}
      <div
        className={`w-full bg-muted ${sizeMap[size]}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? `${Math.round(percent)}% complete`}
      >
        <div
          className={`h-full ${variantMap[variant]} transition-all duration-300`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
