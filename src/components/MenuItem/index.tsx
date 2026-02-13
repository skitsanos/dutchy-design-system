import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive';
  icon?: ReactNode;
  shortcut?: string;
  children: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({
  variant = 'default',
  icon,
  shortcut,
  className = '',
  children,
  ...props
}) => {
  const base = 'w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3';

  const variants = {
    default: 'hover:bg-primary hover:text-primary-foreground',
    destructive: 'text-destructive hover:bg-destructive hover:text-destructive-foreground',
  };

  return (
    <button
      role="menuitem"
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
      {shortcut && (
        <span className="ml-auto text-xs text-muted-foreground font-mono">{shortcut}</span>
      )}
    </button>
  );
};

export default MenuItem;
