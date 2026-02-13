import type { FC, InputHTMLAttributes } from 'react';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Radio: FC<RadioProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="flex items-center gap-3 group">
      <input
        type="radio"
        id={radioId}
        className={`w-5 h-5 border-2 border-foreground accent-primary ${
          props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${className}`}
        {...props}
      />
      <label
        htmlFor={radioId}
        className={`text-sm select-none group-hover:text-primary transition-colors ${
          props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
