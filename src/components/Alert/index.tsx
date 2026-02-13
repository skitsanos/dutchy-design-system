import type { FC, ReactNode } from 'react';
import type { IconName } from '@/components/Icon';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  className?: string;
  children: ReactNode;
}

const variantConfig: Record<AlertVariant, { bg: string; border: string; color: string; icon: IconName }> = {
  info: {
    bg: 'hsla(25, 95%, 53%, 0.1)',
    border: 'hsl(25 95% 53%)',
    color: 'hsl(25 95% 53%)',
    icon: 'info',
  },
  success: {
    bg: 'hsla(142, 76%, 36%, 0.1)',
    border: 'hsl(142 76% 36%)',
    color: 'hsl(142 76% 36%)',
    icon: 'check-circle',
  },
  warning: {
    bg: 'hsla(45, 93%, 47%, 0.1)',
    border: 'hsl(45 93% 47%)',
    color: 'hsl(45 93% 47%)',
    icon: 'alert-circle',
  },
  error: {
    bg: 'hsla(0, 84%, 60%, 0.1)',
    border: 'hsl(0 84% 60%)',
    color: 'hsl(0 84% 60%)',
    icon: 'x-circle',
  },
};

const Alert: FC<AlertProps> = ({
  variant = 'info',
  title,
  dismissible = false,
  className = '',
  children,
}) => {
  const config = variantConfig[variant];

  const iconEl = (
    <span className="mt-0.5 shrink-0" style={{ color: config.color }}>
      <Icon name={config.icon} size="md" />
    </span>
  );

  const contentEl = (
    <div>
      {title && <p className="font-bold text-sm">{title}</p>}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );

  return (
    <div
      className={`border-l-4 p-4 ${className}`}
      style={{ backgroundColor: config.bg, borderColor: config.border }}
      role="alert"
    >
      {dismissible ? (
        <Flex align="start" justify="between" gap={3}>
          <Flex align="start" gap={3}>
            {iconEl}
            {contentEl}
          </Flex>
          <button
            data-dismiss="alert"
            className="shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Dismiss"
          >
            <Icon name="x" size="sm" />
          </button>
        </Flex>
      ) : (
        <Flex align="start" gap={3}>
          {iconEl}
          {contentEl}
        </Flex>
      )}
    </div>
  );
};

export default Alert;
