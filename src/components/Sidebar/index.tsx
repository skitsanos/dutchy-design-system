import type { FC } from 'react';
import Icon, { type IconName } from '@/components/Icon';

interface SidebarNavItem {
  icon: IconName;
  label: string;
  href: string;
}

interface SidebarProps {
  brand?: string;
  brandHref?: string;
  items: SidebarNavItem[];
  bottomItems?: SidebarNavItem[];
  currentPath?: string;
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({
  brand,
  brandHref = '/',
  items,
  bottomItems,
  currentPath,
  className = '',
}) => {
  const isActive = (href: string) => href === currentPath;

  const linkClasses = (href: string) =>
    `flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide ${
      isActive(href)
        ? 'bg-background/10 text-background'
        : 'text-background/60 hover:text-background hover:bg-background/5 transition-colors'
    }`;

  return (
    <aside className={`w-64 bg-foreground text-background shrink-0 hidden lg:block ${className}`}>
      <div className="p-6">
        {brand && (
          <a
            href={brandHref}
            className="font-display text-xl font-bold uppercase tracking-tight block mb-10"
          >
            {brand}<span className="text-primary">.</span>
          </a>
        )}

        <nav className="space-y-1">
          {items.map((item) => (
            <a key={item.label} href={item.href} className={linkClasses(item.href)}>
              <Icon name={item.icon} />
              {item.label}
            </a>
          ))}
        </nav>

        {bottomItems && bottomItems.length > 0 && (
          <div className="mt-12 pt-6 border-t border-background/10">
            {bottomItems.map((item) => (
              <a key={item.label} href={item.href} className={linkClasses(item.href)}>
                <Icon name={item.icon} />
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export type { SidebarNavItem, SidebarProps };
export default Sidebar;
