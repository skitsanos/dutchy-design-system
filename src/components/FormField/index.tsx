import type { FC, ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  className?: string;
}

const FormField: FC<FormFieldProps> = ({ children, className = '' }) => (
  <div data-field="" className={className}>
    {children}
  </div>
);

export default FormField;
