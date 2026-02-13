# UI Components

Reusable UI components implementing the Dutchy Design System.

## Button

```tsx
// src/components/Button/index.tsx
import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-bold uppercase tracking-wide
    transition-colors duration-150
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
    secondary: 'bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground',
    outline: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
    ghost: 'text-foreground hover:bg-muted',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Usage

```tsx
import Button from '@/components/Button';

// Primary button
<Button>Click Me</Button>

// Secondary with size
<Button variant="secondary" size="lg">Large Button</Button>

// Outline button
<Button variant="outline">Outline</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// Disabled
<Button disabled>Disabled</Button>

// With icon
<Button>
  <Icon icon="plus" size={20} />
  Add Item
</Button>
```

## Card

```tsx
// src/components/Card/index.tsx
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'bordered' | 'muted' | 'dark' | 'primary';
  interactive?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: FC<CardProps> = ({
  variant = 'default',
  interactive = false,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const variants: Record<string, string> = {
    default: 'bg-background',
    accent: 'bg-background border-l-4 border-primary',
    bordered: 'bg-background border-2 border-border',
    muted: 'bg-muted',
    dark: 'bg-foreground text-background',
    primary: 'bg-primary text-primary-foreground',
  };

  const paddings: Record<string, string> = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };

  const interactiveStyles = interactive
    ? 'cursor-pointer transition-all duration-150 hover:border-primary hover:bg-muted'
    : '';

  return (
    <div
      className={`${variants[variant]} ${paddings[padding]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Sub-components
export const CardHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`mb-4 ${className}`}>{children}</div>;

export const CardTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h3 className={`font-display text-xl font-bold uppercase ${className}`}>
    {children}
  </h3>
);

export const CardDescription: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`text-muted-foreground text-sm leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={className}>{children}</div>;

export const CardFooter: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mt-6 pt-4 border-t border-border ${className}`}>
    {children}
  </div>
);

export default Card;
```

### Usage

```tsx
import Card, { CardTitle, CardDescription, CardFooter } from '@/components/Card';

// Simple card
<Card variant="accent">
  <CardTitle>Feature Title</CardTitle>
  <CardDescription>
    This is a feature description with important details.
  </CardDescription>
</Card>

// Interactive card
<Card variant="bordered" interactive>
  <CardTitle>Clickable Card</CardTitle>
  <CardDescription>Hover to see effect.</CardDescription>
</Card>

// Dark card
<Card variant="dark">
  <CardTitle>Dark Card</CardTitle>
  <CardDescription className="text-background/70">
    Inverted color scheme.
  </CardDescription>
</Card>

// Card with footer
<Card variant="bordered">
  <CardTitle>Card with Actions</CardTitle>
  <CardDescription>Some content here.</CardDescription>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

## Input

```tsx
// src/components/Input/index.tsx
import type { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Input: FC<InputProps> = ({
  label,
  error,
  helpText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

  const inputStyles = `
    w-full border-2 px-4 py-3 text-base
    transition-colors duration-150
    focus:outline-none
    ${error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-foreground'}
    ${props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : 'bg-background'}
  `;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-bold uppercase tracking-wider"
        >
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <input
        id={inputId}
        className={`${inputStyles} ${className}`}
        {...props}
      />

      {error && <p className="text-destructive text-sm">{error}</p>}
      {helpText && !error && (
        <p className="text-muted-foreground text-sm">{helpText}</p>
      )}
    </div>
  );
};

export default Input;
```

### Usage

```tsx
import Input from '@/components/Input';

// Basic input
<Input label="Email" type="email" placeholder="you@example.com" />

// Required field
<Input label="Name" required placeholder="Your name" />

// With error
<Input label="Email" error="Please enter a valid email" />

// With help text
<Input
  label="Username"
  helpText="3-20 characters, letters and numbers only"
/>

// Disabled
<Input label="Readonly" disabled value="Cannot edit" />
```

## Badge

```tsx
// src/components/Badge/index.tsx
import type { FC, ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'destructive';
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className = '',
}) => {
  const variants: Record<string, string> = {
    default: 'bg-muted text-foreground',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-foreground text-background',
    outline: 'border-2 border-foreground text-foreground bg-transparent',
    destructive: 'bg-destructive text-destructive-foreground',
  };

  const sizes: Record<string, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={`
        inline-block font-mono font-bold uppercase tracking-widest
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
```

### Usage

```tsx
import Badge from '@/components/Badge';

<Badge>Default</Badge>
<Badge variant="primary">New</Badge>
<Badge variant="secondary">Featured</Badge>
<Badge variant="outline">Draft</Badge>
<Badge variant="destructive">Removed</Badge>
```

## Icon

```tsx
// src/components/Icon/index.tsx
import type { FC, CSSProperties } from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  icon: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

// Convert kebab-case or snake_case to PascalCase
const toPascalCase = (str: string): string => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

const Icon: FC<IconProps> = ({ icon, size = 24, className = '', style }) => {
  const iconName = toPascalCase(icon);
  const LucideIcon = (LucideIcons as any)[iconName];

  if (!LucideIcon) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return <LucideIcon size={size} className={className} style={style} />;
};

export default Icon;
```

### Usage

```tsx
import Icon from '@/components/Icon';

<Icon icon="check" />
<Icon icon="arrow-right" size={32} />
<Icon icon="user" className="text-primary" />
<Icon icon="chevron-down" size={16} />
```

## Breadcrumbs

```tsx
// src/components/Breadcrumbs/index.tsx
import type { FC } from 'react';
import Icon from '@/components/Icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <Icon
                icon="chevron-right"
                size={14}
                className="text-muted-foreground"
              />
            )}
            {item.href && index < items.length - 1 ? (
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {index === 0 ? (
                  <Icon icon="home" size={14} />
                ) : (
                  item.label
                )}
              </a>
            ) : (
              <span className={index === items.length - 1 ? 'font-bold' : ''}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
```

### Usage

```tsx
import Breadcrumbs from '@/components/Breadcrumbs';

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Product Name' },
  ]}
/>
```

## Tabs

```tsx
// src/components/Tabs/index.tsx
import type { FC, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange?: (id: string) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div>
      {/* Tab List */}
      <div className="border-b-2 border-border">
        <nav className="flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange?.(tab.id)}
              className={`
                px-6 py-4 text-sm font-bold uppercase tracking-wide
                transition-colors duration-150
                -mb-0.5
                ${
                  activeTab === tab.id
                    ? 'border-b-4 border-primary text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
```

### Usage (Server-Side)

For SSR, use URL params to track active tab:

```tsx
// src/routes/docs/index.tsx
import Tabs from '@/components/Tabs';

const DocsPage: FC<{ request: Request }> = ({ request }) => {
  const url = new URL(request.url);
  const activeTab = url.searchParams.get('tab') || 'overview';

  const tabs = [
    { id: 'overview', label: 'Overview', content: <OverviewContent /> },
    { id: 'api', label: 'API', content: <ApiContent /> },
    { id: 'examples', label: 'Examples', content: <ExamplesContent /> },
  ];

  return (
    <Layout title="Docs">
      {/* Use links instead of buttons for SSR */}
      <div className="border-b-2 border-border">
        <nav className="flex gap-0">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`?tab=${tab.id}`}
              className={`
                px-6 py-4 text-sm font-bold uppercase tracking-wide
                -mb-0.5
                ${
                  activeTab === tab.id
                    ? 'border-b-4 border-primary text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="py-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </Layout>
  );
};
```

## Alert

```tsx
// src/components/Alert/index.tsx
import type { FC, ReactNode } from 'react';
import Icon from '@/components/Icon';

interface AlertProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  title?: string;
  children: ReactNode;
  className?: string;
}

const Alert: FC<AlertProps> = ({
  variant = 'default',
  title,
  children,
  className = '',
}) => {
  const variants: Record<string, { bg: string; border: string; icon: string }> = {
    default: {
      bg: 'bg-muted',
      border: 'border-border',
      icon: 'info',
    },
    success: {
      bg: 'bg-primary/10',
      border: 'border-primary',
      icon: 'check-circle',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
      icon: 'alert-triangle',
    },
    error: {
      bg: 'bg-destructive/10',
      border: 'border-destructive',
      icon: 'x-circle',
    },
  };

  const { bg, border, icon } = variants[variant];

  return (
    <div
      className={`${bg} border-l-4 ${border} p-4 ${className}`}
      role="alert"
    >
      <div className="flex gap-3">
        <Icon
          icon={icon}
          size={20}
          className={variant === 'error' ? 'text-destructive' : 'text-primary'}
        />
        <div>
          {title && (
            <h4 className="font-bold text-sm uppercase tracking-wide mb-1">
              {title}
            </h4>
          )}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
```

### Usage

```tsx
import Alert from '@/components/Alert';

<Alert title="Note">This is a default alert.</Alert>
<Alert variant="success" title="Success">Your changes have been saved.</Alert>
<Alert variant="warning" title="Warning">This action cannot be undone.</Alert>
<Alert variant="error" title="Error">Something went wrong.</Alert>
```

## Flex

```tsx
// src/components/Flex/index.tsx
import type { FC, ReactNode, ElementType } from 'react';

type GapValue = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

interface FlexProps {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: GapValue;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

const directionClasses: Record<string, string> = {
  row: 'flex-row',
  col: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'col-reverse': 'flex-col-reverse',
};

const alignClasses: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses: Record<string, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapClasses: Record<GapValue, string> = {
  0: 'gap-0',
  0.5: 'gap-0.5',
  1: 'gap-1',
  1.5: 'gap-1.5',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
};

const Flex: FC<FlexProps> = ({
  direction = 'row',
  align,
  justify,
  wrap = false,
  gap,
  className = '',
  children,
  as: Tag = 'div',
}) => {
  const classes = [
    'flex',
    directionClasses[direction],
    align ? alignClasses[align] : '',
    justify ? justifyClasses[justify] : '',
    wrap ? 'flex-wrap' : '',
    gap !== undefined ? gapClasses[gap] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
};

export default Flex;
```

### Usage

```tsx
import Flex from '@/components/Flex';

<Flex align="center" justify="between" gap={4} className="border-2 border-border p-4">
  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Left</span>
  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Right</span>
</Flex>
```

## Text

```tsx
// src/components/Text/index.tsx
import type { FC, ReactNode, ElementType } from 'react';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TextFamily = 'display' | 'sans' | 'mono';
type TextTracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
type TextLeading = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
type TextColor = 'foreground' | 'muted' | 'primary' | 'background' | 'destructive' | 'success';

interface TextProps {
  family?: TextFamily;
  size?: TextSize;
  weight?: TextWeight;
  tracking?: TextTracking;
  leading?: TextLeading;
  color?: TextColor;
  uppercase?: boolean;
  italic?: boolean;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

const familyClasses: Record<TextFamily, string> = {
  display: 'font-display',
  sans: 'font-sans',
  mono: 'font-mono',
};

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
};

const weightClasses: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const trackingClasses: Record<TextTracking, string> = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
};

const leadingClasses: Record<TextLeading, string> = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};

const colorClasses: Record<TextColor, string> = {
  foreground: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  background: 'text-background',
  destructive: 'text-destructive',
  success: 'text-success',
};

const Text: FC<TextProps> = ({
  family,
  size,
  weight,
  tracking,
  leading,
  color,
  uppercase = false,
  italic = false,
  as: Tag = 'p',
  className = '',
  children,
}) => {
  const classes = [
    family ? familyClasses[family] : '',
    size ? sizeClasses[size] : '',
    weight ? weightClasses[weight] : '',
    tracking ? trackingClasses[tracking] : '',
    leading ? leadingClasses[leading] : '',
    color ? colorClasses[color] : '',
    uppercase ? 'uppercase' : '',
    italic ? 'italic' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes || undefined}>{children}</Tag>;
};

export default Text;
```

### Usage

```tsx
import Text from '@/components/Text';

<Text as="h2" family="display" size="5xl" weight="bold" uppercase tracking="tighter" leading="tight">
  Bold Section
</Text>
<Text family="mono" size="xs" weight="bold" uppercase tracking="widest" color="muted">
  Label
</Text>
```
