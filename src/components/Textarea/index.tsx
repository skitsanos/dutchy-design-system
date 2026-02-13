import type { FC, TextareaHTMLAttributes } from 'react';

type ResizeOption = 'none' | 'vertical' | 'horizontal' | 'both';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
  resize?: ResizeOption;
  showCount?: boolean;
}

const resizeClasses: Record<ResizeOption, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

const Textarea: FC<TextareaProps> = ({
  label,
  error,
  helpText,
  resize = 'vertical',
  showCount = false,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`;
  const currentLength = typeof props.value === 'string' ? props.value.length : 0;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-xs font-bold uppercase tracking-wider"
        >
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        data-textarea={showCount ? 'counted' : undefined}
        className={`w-full border-2 px-4 py-3 text-base min-h-[120px] ${resizeClasses[resize]} transition-colors duration-150 focus:outline-none ${
          error
            ? 'border-destructive focus:border-destructive'
            : 'border-border focus:border-foreground'
        } ${
          props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : 'bg-background'
        } ${className}`}
        {...props}
      />

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          {error && (
            <p className="text-destructive text-sm">{error}</p>
          )}
          {helpText && !error && (
            <p className="text-muted-foreground text-sm">{helpText}</p>
          )}
        </div>
        {showCount && (
          <p className="text-muted-foreground text-xs tabular-nums shrink-0" data-textarea-count="">
            {props.maxLength ? `${currentLength} / ${props.maxLength}` : `${currentLength}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
