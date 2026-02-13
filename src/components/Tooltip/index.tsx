import type { FC, ReactNode } from 'react';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

const Tooltip: FC<TooltipProps> = ({
  text,
  position,
  children,
  className = '',
}) => {
  return (
    <span
      data-tooltip={text}
      {...(position ? { 'data-tooltip-position': position } : {})}
      className={`tooltip-trigger relative cursor-help ${className}`}
    >
      {children}
    </span>
  );
};

export default Tooltip;
