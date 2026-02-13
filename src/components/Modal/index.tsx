import type { FC, ReactNode } from 'react';
import Icon from '@/components/Icon';
import Flex from '@/components/Flex';

interface ModalProps {
  id: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  maxWidth?: string;
  className?: string;
}

const Modal: FC<ModalProps> = ({
  id,
  title,
  children,
  footer,
  maxWidth = 'max-w-md',
  className = '',
}) => (
  <dialog
    id={id}
    className={`bg-background border-4 border-border p-0 w-full ${maxWidth} backdrop:bg-foreground/50 ${className}`}
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

    <div className="p-6">{children}</div>

    {footer && (
      <Flex justify="end" gap={3} className="px-6 py-4 border-t-2 border-border">
        {footer}
      </Flex>
    )}
  </dialog>
);

export default Modal;
