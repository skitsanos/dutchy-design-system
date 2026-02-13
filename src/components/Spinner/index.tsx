import type { FC } from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const Spinner: FC<SpinnerProps> = ({ size = 'md', className = '' }) => (
  <span
    className={`dutchy-spinner inline-block ${sizeMap[size]} ${className}`}
    role="status"
    aria-label="Loading"
  />
);

export default Spinner;
