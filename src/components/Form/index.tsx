import type { FC, FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  spacing?: 'sm' | 'md' | 'lg';
  maxWidth?: 'sm' | 'md' | 'lg' | 'full';
  children: ReactNode;
}

const spacingMap = {
  sm: 'space-y-4',
  md: 'space-y-6',
  lg: 'space-y-8',
};

const maxWidthMap = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  full: '',
};

const Form: FC<FormProps> = ({
  spacing = 'md',
  maxWidth,
  className = '',
  children,
  ...props
}) => (
  <form
    className={`${spacingMap[spacing]} ${maxWidth ? maxWidthMap[maxWidth] : ''} ${className}`}
    {...props}
  >
    {children}
  </form>
);

export default Form;
