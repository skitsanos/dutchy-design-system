import type { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={checkboxId}
        className={`w-5 h-5 border-2 border-border text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer ${
          props.disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${className}`}
        {...props}
      />
      <label
        htmlFor={checkboxId}
        className={`text-sm select-none ${
          props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
