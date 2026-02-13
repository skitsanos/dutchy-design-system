import type { FC } from 'react';

interface SearchFormProps {
  action?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

const SearchForm: FC<SearchFormProps> = ({
  action = '/search',
  placeholder = 'Search...',
  defaultValue = '',
  className = '',
}) => {
  return (
    <form method="GET" action={action} className={`relative ${className}`}>
      {/* Search icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="search"
        name="q"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full border-2 border-border pl-12 pr-4 py-3 text-base focus:border-foreground focus:outline-none bg-background transition-colors"
      />
    </form>
  );
};

export default SearchForm;
