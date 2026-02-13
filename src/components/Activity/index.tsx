import type { FC } from 'react';

type ActivityColor = 'primary' | 'success' | 'destructive' | 'warning' | 'foreground' | 'muted';

interface ActivityItem {
  title: string;
  time: string;
  color?: ActivityColor;
}

interface ActivityProps {
  title?: string;
  items: ActivityItem[];
  className?: string;
}

const colorClasses: Record<ActivityColor, string> = {
  primary: 'bg-primary',
  success: 'bg-success',
  destructive: 'bg-destructive',
  warning: 'bg-warning',
  foreground: 'bg-foreground',
  muted: 'bg-muted-foreground',
};

const Activity: FC<ActivityProps> = ({
  title = 'Activity',
  items,
  className = '',
}) => {
  return (
    <div className={`bg-background border-l-4 border-foreground ${className}`}>
      <div className="border-b border-border px-6 py-4">
        <h2 className="font-display text-lg font-bold uppercase">{title}</h2>
      </div>
      <div className="p-6 space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className={`w-2 h-2 ${colorClasses[item.color || 'foreground']} mt-2 shrink-0`} />
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export type { ActivityItem, ActivityColor, ActivityProps };
export default Activity;
