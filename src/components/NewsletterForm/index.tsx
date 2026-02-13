import type { FC } from 'react';

interface NewsletterFormProps {
  action?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

const NewsletterForm: FC<NewsletterFormProps> = ({
  action = '/api/newsletter',
  variant = 'light',
  className = '',
}) => {
  const isDark = variant === 'dark';

  const inputClass = isDark
    ? 'border-2 border-background/20 bg-transparent text-background placeholder:text-background/50 focus:border-primary'
    : 'border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-foreground';

  const buttonClass = isDark
    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
    : 'bg-foreground text-background hover:bg-foreground/90';

  return (
    <form
      id="newsletter-form"
      data-endpoint={action}
      className={`flex flex-col sm:flex-row gap-3 ${className}`}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className={`flex-1 px-4 py-3 text-base focus:outline-none transition-colors ${inputClass}`}
      />
      <button
        type="submit"
        className={`px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors ${buttonClass}`}
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
