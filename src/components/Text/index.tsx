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
