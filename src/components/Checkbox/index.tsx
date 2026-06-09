import type { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, className = '', id, ...props }) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
  const isDisabled = props.disabled;

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={checkboxId}
        className={`dutchy-checkbox sr-only ${className}`}
        {...props}
      />
      <label
        htmlFor={checkboxId}
        className={`inline-flex items-center gap-3 text-sm select-none ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <span className="dutchy-checkbox-box" aria-hidden="true">
          <svg className="dutchy-checkbox-icon" viewBox="0 0 16 16" fill="none">
            <path
              d="M3.5 8.5L6.5 11.5L12.5 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
