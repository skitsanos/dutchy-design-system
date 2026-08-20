import type { FC } from 'react';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

interface SearchFormProps {
  action?: string;
  placeholder?: string;
  defaultValue?: string;
  submitLabel?: string;
  className?: string;
}

const SearchForm: FC<SearchFormProps> = ({
  action = '/search',
  placeholder = 'Search...',
  defaultValue = '',
  submitLabel,
  className = '',
}) => {
  return (
    <form method="GET" action={action} className={`flex gap-0 ${className}`}>
      <div className="flex items-center px-4">
        <Icon name="search" className="text-muted-foreground w-6 h-6" />
      </div>

      <input
        type="search"
        name="q"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="min-w-0 flex-1 bg-transparent px-2 py-4 font-sans text-lg focus:outline-none"
      />
      {submitLabel && (
        <Button type="submit" size="lg">
          {submitLabel}
        </Button>
      )}
    </form>
  );
};

export default SearchForm;
