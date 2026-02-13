import type { FC } from 'react';
import Icon from '@/components/Icon';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  name?: string;
  options: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  className?: string;
}

const Select: FC<SelectProps> = ({
  label,
  name,
  options,
  defaultValue,
  placeholder = 'Select an option...',
  error,
  disabled = false,
  required = false,
  id,
  className = '',
}) => {
  const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`;
  const selectedOption = options.find((o) => o.value === defaultValue);

  return (
    <div className="space-y-2">
      {label && (
        <label
          id={`${selectId}-label`}
          className="block text-xs font-bold uppercase tracking-wider"
        >
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <div
        className={`relative ${className}`}
        data-select=""
        data-value={defaultValue ?? ''}
        id={selectId}
        aria-labelledby={label ? `${selectId}-label` : undefined}
      >
        {/* Hidden input for form submission */}
        <input
          type="hidden"
          data-select-input=""
          {...(name ? { name } : {})}
          value={defaultValue ?? ''}
        />

        {/* Trigger */}
        <button
          type="button"
          data-select-trigger=""
          className={`w-full px-4 py-3 border-2 text-base text-left flex items-center justify-between transition-colors duration-150 focus:outline-none ${
            error
              ? 'border-destructive focus:border-destructive'
              : 'border-border focus:border-foreground'
          } ${
            disabled
              ? 'bg-muted opacity-50 cursor-not-allowed'
              : 'bg-background cursor-pointer'
          }`}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span
            data-select-value=""
            className={selectedOption ? '' : 'text-muted-foreground'}
          >
            {selectedOption?.label ?? placeholder}
          </span>
          <Icon name="chevron-down" size="sm" className="text-muted-foreground transition-transform" />
        </button>

        {/* Options menu */}
        <div
          data-select-menu=""
          role="listbox"
          className="absolute top-full left-0 right-0 bg-background border-2 border-border border-t-0 z-50 hidden max-h-60 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option.value}
              data-select-option=""
              data-value={option.value}
              role="option"
              aria-selected={option.value === defaultValue}
              className={`px-4 py-3 cursor-pointer transition-colors text-sm hover:bg-primary hover:text-primary-foreground ${
                option.value === defaultValue
                  ? 'bg-muted font-bold'
                  : ''
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}
    </div>
  );
};

export default Select;
