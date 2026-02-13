import type { FC, ReactNode } from 'react';

interface MenuProps {
  width?: 'xs' | 'sm' | 'md';
  className?: string;
  children: ReactNode;
}

interface MenuDividerProps {
  className?: string;
}

interface MenuGroupProps {
  label: string;
  children: ReactNode;
}

const widthClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
};

const Menu: FC<MenuProps> = ({
  width = 'xs',
  className = '',
  children,
}) => (
  <div
    className={`${widthClasses[width]} border-2 border-border bg-background shadow-md divide-y divide-border ${className}`}
    role="menu"
  >
    {children}
  </div>
);

const MenuDivider: FC<MenuDividerProps> = ({ className = '' }) => (
  <div className={`border-t-2 border-border ${className}`} role="separator" />
);

const MenuGroup: FC<MenuGroupProps> = ({ label, children }) => (
  <div role="group" aria-label={label}>
    <div className="px-4 py-2">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
    <div className="divide-y divide-border">
      {children}
    </div>
  </div>
);

export default Menu;
export { MenuDivider, MenuGroup };
