import type { FC } from 'react';
import Icon from '@/components/Icon';
import type { IconName } from '@/components/Icon';

type ToastVariant = 'info' | 'success' | 'error' | 'warning';
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  message: string;
  className?: string;
}

interface ToastContainerProps {
  position?: ToastPosition;
}

const variantStyles: Record<ToastVariant, string> = {
  info: 'bg-foreground text-background',
  success: 'bg-success text-success-foreground',
  error: 'bg-destructive text-destructive-foreground',
  warning: 'bg-warning text-warning-foreground',
};

const variantIcons: Record<ToastVariant, IconName> = {
  info: 'info',
  success: 'check-circle',
  error: 'x-circle',
  warning: 'warning',
};

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-6 right-6',
  'top-left': 'top-6 left-6',
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
};

const Toast: FC<ToastProps> = ({
  variant = 'info',
  title,
  message,
  className = '',
}) => (
  <div className={`${variantStyles[variant]} px-6 py-4 font-bold uppercase text-sm border-l-4 border-background/20 flex items-center gap-3 ${className}`}>
    <Icon name={variantIcons[variant]} className="flex-shrink-0" />
    <span>{title ? `${title}: ${message}` : message}</span>
  </div>
);

const ToastContainer: FC<ToastContainerProps> = ({ position = 'bottom-right' }) => (
  <div
    data-toast-container={position}
    id={position === 'bottom-right' ? 'toast-container' : undefined}
    className={`fixed ${positionClasses[position]} z-[100] space-y-3`}
    aria-live="polite"
  />
);

export { Toast, ToastContainer };
export type { ToastPosition };
export default Toast;
