# Form Handling

Handle form submissions with Bun server-side rendering.

## Form Components

### Input Component

```tsx
// src/ui/Input/index.tsx
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
        className={`
          w-full border-2 px-4 py-3 text-base bg-background
          transition-colors duration-150 focus:outline-none
          ${error ? 'border-destructive' : 'border-border focus:border-foreground'}
          ${props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-destructive text-sm">{error}</p>}
      {helpText && !error && (
        <p className="text-muted-foreground text-sm">{helpText}</p>
      )}
    </div>
  );
};

export default Input;
```

### Textarea Component

```tsx
// src/ui/Textarea/index.tsx
import type { FC, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Textarea: FC<TextareaProps> = ({
  label,
  error,
  helpText,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`;

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
        className={`
          w-full border-2 px-4 py-3 text-base bg-background
          min-h-[120px] resize-y
          transition-colors duration-150 focus:outline-none
          ${error ? 'border-destructive' : 'border-border focus:border-foreground'}
          ${props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-destructive text-sm">{error}</p>}
      {helpText && !error && (
        <p className="text-muted-foreground text-sm">{helpText}</p>
      )}
    </div>
  );
};

export default Textarea;
```

### Select Component

```tsx
// src/ui/Select/index.tsx
import type { FC, SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select: FC<SelectProps> = ({
  label,
  options,
  error,
  placeholder,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-bold uppercase tracking-wider"
        >
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <select
        id={selectId}
        className={`
          w-full border-2 px-4 py-3 text-base bg-background
          transition-colors duration-150 focus:outline-none
          appearance-none cursor-pointer
          ${error ? 'border-destructive' : 'border-border focus:border-foreground'}
          ${props.disabled ? 'bg-muted opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1.25rem',
          paddingRight: '3rem',
        }}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
};

export default Select;
```

### Checkbox Component

```tsx
// src/ui/Checkbox/index.tsx
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
    <label
      htmlFor={checkboxId}
      className={`flex items-center gap-3 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        id={checkboxId}
        className="w-5 h-5 border-2 border-border accent-primary cursor-pointer"
        {...props}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;
```

## Contact Form Example

### Form Page

```tsx
// src/routes/contact/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import Input from '@/ui/Input';
import Textarea from '@/ui/Textarea';
import Select from '@/ui/Select';
import Checkbox from '@/ui/Checkbox';
import Button from '@/ui/Button';

interface ContactPageProps {
  request: Request;
}

const ContactPage: FC<ContactPageProps> = ({ request }) => {
  const url = new URL(request.url);
  const success = url.searchParams.get('success') === 'true';
  const error = url.searchParams.get('error');

  return (
    <Layout title="Contact Us">
      <Header currentPath={url.pathname} />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              Contact<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you.
            </p>
          </div>

          {success && (
            <div className="bg-primary/10 border-l-4 border-primary p-4 mb-8">
              <p className="font-bold">Message sent!</p>
              <p className="text-sm text-muted-foreground">
                Thank you for reaching out. We'll respond soon.
              </p>
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border-l-4 border-destructive p-4 mb-8">
              <p className="font-bold">Error</p>
              <p className="text-sm">{decodeURIComponent(error)}</p>
            </div>
          )}

          <form action="/contact" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                name="firstName"
                required
                placeholder="John"
              />
              <Input
                label="Last Name"
                name="lastName"
                required
                placeholder="Doe"
              />
            </div>

            <Input
              label="Email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
            />

            <Select
              label="Subject"
              name="subject"
              required
              placeholder="Select a subject"
              options={[
                { value: 'general', label: 'General Inquiry' },
                { value: 'support', label: 'Technical Support' },
                { value: 'sales', label: 'Sales' },
                { value: 'partnership', label: 'Partnership' },
              ]}
            />

            <Textarea
              label="Message"
              name="message"
              required
              placeholder="How can we help you?"
              rows={6}
            />

            <Checkbox
              label="I agree to the privacy policy"
              name="privacy"
              required
            />

            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default ContactPage;
```

### Form Handler

```tsx
// src/routes/contact/post.ts
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.enum(['general', 'support', 'sales', 'partnership'], {
    errorMap: () => ({ message: 'Please select a subject' }),
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  privacy: z.literal('on', {
    errorMap: () => ({ message: 'You must agree to the privacy policy' }),
  }),
});

export default async (req: Request) => {
  try {
    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return Response.json(
        { error: { message: 'Content-Type must be application/json' } },
        { status: 415 }
      );
    }

    const data = await req.json();

    // Validate
    const validData = contactSchema.parse(data);

    // Process the form (send email, save to database, etc.)
    console.log('Contact form submission:', validData);

    // Example: Send email with Resend
    // await resend.emails.send({
    //   from: 'noreply@example.com',
    //   to: 'contact@example.com',
    //   subject: `Contact Form: ${validData.subject}`,
    //   text: `
    //     Name: ${validData.firstName} ${validData.lastName}
    //     Email: ${validData.email}
    //     Subject: ${validData.subject}
    //     Message: ${validData.message}
    //   `,
    // });

    return Response.json({ success: true });

  } catch (error) {
    console.error('Form error:', error);

    if (error instanceof z.ZodError) {
      return Response.json(
        {
          error: {
            message: 'Validation failed',
            details: error.errors,
          },
        },
        { status: 400 }
      );
    }

    return Response.json(
      { error: { message: 'An error occurred' } },
      { status: 500 }
    );
  }
};
```

## Newsletter Form

### Inline Newsletter Form

```tsx
// src/ui/NewsletterForm/index.tsx
import type { FC } from 'react';

interface NewsletterFormProps {
  action?: string;
  variant?: 'light' | 'dark';
}

const NewsletterForm: FC<NewsletterFormProps> = ({
  action = '/api/newsletter',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <form id="newsletter-form" data-endpoint={action} className="flex gap-0">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className={`
          flex-1 px-4 py-3 border-2
          focus:outline-none transition-colors
          ${isDark
            ? 'bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary'
            : 'bg-background border-border focus:border-foreground'
          }
        `}
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-6 font-bold uppercase tracking-wide shrink-0 hover:bg-primary/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
```

```javascript
// public/assets/js/newsletter.js
(() => {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const endpoint = form.dataset.endpoint || '/api/newsletter';
    const emailInput = form.querySelector('input[name="email"]');
    const email = emailInput?.value.trim() || '';

    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  });
})();
```

### Newsletter API Handler

```tsx
// src/routes/api/newsletter/post.ts
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
});

export default async (req: Request) => {
  try {
    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return Response.json(
        { error: { message: 'Content-Type must be application/json' } },
        { status: 415 }
      );
    }

    const data = await req.json();
    const { email } = newsletterSchema.parse(data);

    // Add to mailing list (example with a hypothetical service)
    // await mailchimp.addSubscriber(email);

    console.log('Newsletter subscription:', email);

    return Response.json({ success: true, email });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: { message: 'Invalid email address' } },
        { status: 400 }
      );
    }

    return Response.json(
      { error: { message: 'Subscription failed' } },
      { status: 500 }
    );
  }
};
```

## Search Form

```tsx
// src/ui/SearchForm/index.tsx
import type { FC } from 'react';
import Icon from '@/ui/Icon';

interface SearchFormProps {
  action?: string;
  placeholder?: string;
  defaultValue?: string;
}

const SearchForm: FC<SearchFormProps> = ({
  action = '/search',
  placeholder = 'Search...',
  defaultValue = '',
}) => {
  return (
    <form action={action} method="GET" className="relative">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="
          w-full border-2 border-border pl-12 pr-4 py-3 text-base
          focus:border-foreground focus:outline-none transition-colors
        "
      />
      <Icon
        icon="search"
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
    </form>
  );
};

export default SearchForm;
```

### Search Results Page

```tsx
// src/routes/search/index.tsx
import type { FC } from 'react';
import Layout from '@/ui/Layout';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import SearchForm from '@/ui/SearchForm';

interface SearchPageProps {
  request: Request;
}

const SearchPage: FC<SearchPageProps> = ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';

  // In real app, fetch search results from database
  const results = query
    ? [
        { title: 'Result 1', description: 'Description for result 1', href: '/page-1' },
        { title: 'Result 2', description: 'Description for result 2', href: '/page-2' },
      ]
    : [];

  return (
    <Layout title={query ? `Search: ${query}` : 'Search'}>
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tighter mb-8">
            Search<span className="text-primary">.</span>
          </h1>

          <div className="mb-12">
            <SearchForm defaultValue={query} />
          </div>

          {query && (
            <div>
              <p className="text-muted-foreground mb-8">
                {results.length} results for "{query}"
              </p>

              {results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <a
                      key={index}
                      href={result.href}
                      className="block border-l-4 border-border hover:border-primary p-6 transition-colors"
                    >
                      <h2 className="font-display text-xl font-bold uppercase mb-2">
                        {result.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {result.description}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No results found. Try a different search term.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default SearchPage;
```

## Best Practices

### 1. Validate on Server

Always validate form data on the server:

```typescript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

const data = schema.safeParse(formData);
if (!data.success) {
  // Handle validation errors
}
```

### 2. Use PRG Pattern

Post-Redirect-Get prevents duplicate submissions:

```typescript
// After processing form
return Response.redirect('/form?success=true', 303);
```

### 3. Use JSON for API Calls

API endpoints should accept JSON requests by default (use `multipart/form-data` only for file uploads):

```typescript
const contentType = req.headers.get('Content-Type') || '';

if (!contentType.includes('application/json')) {
  return Response.json(
    { error: { message: 'Content-Type must be application/json' } },
    { status: 415 }
  );
}

const data = await req.json();
```

### 4. Provide Clear Feedback

Show success/error messages to users:

```tsx
{success && (
  <div className="bg-primary/10 border-l-4 border-primary p-4">
    Form submitted successfully!
  </div>
)}

{error && (
  <div className="bg-destructive/10 border-l-4 border-destructive p-4">
    {error}
  </div>
)}
```

### 5. Accessible Forms

- Use proper labels with `htmlFor`
- Mark required fields
- Provide helpful error messages
- Use appropriate input types
