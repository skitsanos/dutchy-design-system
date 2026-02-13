import type { FC, ReactNode } from 'react';
import Icon from '@/components/Icon';
import Flex from '@/components/Flex';

interface DrawerProps {
  id: string;
  title: string;
  children: ReactNode;
  position?: 'right' | 'left';
  className?: string;
}

const Drawer: FC<DrawerProps> = ({
  id,
  title,
  children,
  position = 'right',
  className = '',
}) => {
  const positionClasses = position === 'right'
    ? 'ml-auto border-l-4'
    : 'mr-auto border-r-4';

  return (
    <dialog
      id={id}
      className={`fixed inset-0 m-0 h-full max-h-full w-80 ${positionClasses} border-border bg-background p-0 backdrop:bg-foreground/50 ${className}`}
    >
      <Flex align="center" justify="between" className="px-6 py-4 border-b-2 border-border">
        <h2 className="font-display text-lg font-bold uppercase tracking-tight">{title}</h2>
        <button
          data-close-modal=""
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <Icon name="x" />
        </button>
      </Flex>

      <div className="flex-1 overflow-y-auto p-6">{children}</div>
    </dialog>
  );
};

export default Drawer;
