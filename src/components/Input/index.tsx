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
        className={`w-full border-2 px-4 py-3 text-base transition-colors duration-150 focus:outline-none ${
          error
            ? 'border-destructive focus:border-destructive'
            : 'border-border focus:border-foreground'
        } ${
          props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : 'bg-background'
        } ${className}`}
        {...props}
      />

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}

      {helpText && !error && (
        <p className="text-muted-foreground text-sm">{helpText}</p>
      )}
    </div>
  );
};

export default Input;
