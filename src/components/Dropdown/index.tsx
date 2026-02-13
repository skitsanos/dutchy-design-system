import type { FC, ReactNode } from 'react';

interface DropdownProps {
  trigger: ReactNode;
  align?: 'left' | 'right';
  width?: string;
  className?: string;
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
  trigger,
  align = 'left',
  width = 'min-w-[200px]',
  className = '',
  children,
}) => {
  const alignClass = align === 'right' ? 'right-0' : 'left-0';

  return (
    <div className={`relative inline-block ${className}`} data-dropdown>
      <div data-dropdown-trigger>{trigger}</div>
      <div
        className={`absolute top-full ${alignClass} mt-1 bg-background border-2 border-border shadow-md ${width} z-50 hidden`}
        data-dropdown-menu
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
