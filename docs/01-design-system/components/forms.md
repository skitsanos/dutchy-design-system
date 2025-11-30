# Forms

## Philosophy

Forms in the Dutchy Design System are clean, functional, and confident. Sharp edges, clear labels, and strong focus states guide users through input.

## Input Fields

### Text Input

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Full Name
  </label>
  <input
    type="text"
    class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
    placeholder="Enter your name"
  />
</div>
```

### Email Input

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Email Address
  </label>
  <input
    type="email"
    class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
    placeholder="you@example.com"
  />
</div>
```

### Password Input

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Password
  </label>
  <input
    type="password"
    class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
    placeholder="Enter password"
  />
</div>
```

### Input with Error

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Email Address
  </label>
  <input
    type="email"
    class="w-full border-2 border-destructive px-4 py-3 text-base focus:border-destructive focus:outline-none transition-colors duration-150"
    placeholder="you@example.com"
  />
  <p class="text-destructive text-sm">Please enter a valid email address.</p>
</div>
```

### Input with Help Text

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Username
  </label>
  <input
    type="text"
    class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
    placeholder="Choose a username"
  />
  <p class="text-muted-foreground text-sm">3-20 characters, letters and numbers only.</p>
</div>
```

### Disabled Input

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
    Disabled Field
  </label>
  <input
    type="text"
    class="w-full border-2 border-border px-4 py-3 text-base bg-muted opacity-50 cursor-not-allowed"
    placeholder="Cannot edit"
    disabled
  />
</div>
```

## Textarea

### Standard Textarea

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Message
  </label>
  <textarea
    class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150 min-h-[120px] resize-y"
    placeholder="Enter your message"
  ></textarea>
</div>
```

### Textarea with Character Count

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Bio
  </label>
  <textarea
    class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150 min-h-[120px] resize-y"
    placeholder="Tell us about yourself"
    maxlength="500"
  ></textarea>
  <p class="text-muted-foreground text-sm text-right">0 / 500 characters</p>
</div>
```

## Select

### Standard Select

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Country
  </label>
  <select class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150 bg-background">
    <option value="">Select a country</option>
    <option value="nl">Netherlands</option>
    <option value="be">Belgium</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </select>
</div>
```

### Select with Groups

```html
<div class="space-y-2">
  <label class="block text-xs font-bold uppercase tracking-wider">
    Category
  </label>
  <select class="w-full border-2 border-border px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150 bg-background">
    <option value="">Select a category</option>
    <optgroup label="Fruits">
      <option value="apple">Apples</option>
      <option value="banana">Bananas</option>
      <option value="orange">Oranges</option>
    </optgroup>
    <optgroup label="Vegetables">
      <option value="carrot">Carrots</option>
      <option value="potato">Potatoes</option>
      <option value="tomato">Tomatoes</option>
    </optgroup>
  </select>
</div>
```

## Checkbox

### Single Checkbox

```html
<label class="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    class="w-5 h-5 border-2 border-border accent-primary cursor-pointer"
  />
  <span class="text-sm">I agree to the terms and conditions</span>
</label>
```

### Checkbox Group

```html
<fieldset class="space-y-3">
  <legend class="text-xs font-bold uppercase tracking-wider mb-3">
    Interests
  </legend>
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 border-2 border-border accent-primary cursor-pointer" />
    <span class="text-sm">Organic Products</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 border-2 border-border accent-primary cursor-pointer" />
    <span class="text-sm">Local Produce</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 border-2 border-border accent-primary cursor-pointer" />
    <span class="text-sm">Seasonal Items</span>
  </label>
</fieldset>
```

## Radio Buttons

### Radio Group

```html
<fieldset class="space-y-3">
  <legend class="text-xs font-bold uppercase tracking-wider mb-3">
    Delivery Method
  </legend>
  <label class="flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="delivery"
      class="w-5 h-5 border-2 border-border accent-primary cursor-pointer"
    />
    <span class="text-sm">Standard Delivery</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="delivery"
      class="w-5 h-5 border-2 border-border accent-primary cursor-pointer"
    />
    <span class="text-sm">Express Delivery</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="delivery"
      class="w-5 h-5 border-2 border-border accent-primary cursor-pointer"
    />
    <span class="text-sm">Pick Up in Store</span>
  </label>
</fieldset>
```

## Search Input

### Simple Search

```html
<div class="relative">
  <input
    type="search"
    class="w-full border-2 border-border pl-12 pr-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
    placeholder="Search..."
  />
  <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
</div>
```

### Search with Button

```html
<div class="flex">
  <input
    type="search"
    class="flex-1 border-2 border-border border-r-0 px-4 py-3 text-base focus:border-foreground focus:outline-none transition-colors duration-150"
    placeholder="Search components..."
  />
  <button class="bg-primary text-primary-foreground px-6 font-bold uppercase tracking-wide border-2 border-primary">
    Search
  </button>
</div>
```

## Form Layouts

### Vertical Form

```html
<form class="space-y-6">
  <div class="space-y-2">
    <label class="block text-xs font-bold uppercase tracking-wider">Name</label>
    <input type="text" class="w-full border-2 border-border px-4 py-3" />
  </div>

  <div class="space-y-2">
    <label class="block text-xs font-bold uppercase tracking-wider">Email</label>
    <input type="email" class="w-full border-2 border-border px-4 py-3" />
  </div>

  <div class="space-y-2">
    <label class="block text-xs font-bold uppercase tracking-wider">Message</label>
    <textarea class="w-full border-2 border-border px-4 py-3 min-h-[120px]"></textarea>
  </div>

  <button type="submit" class="w-full bg-primary text-primary-foreground py-3 font-bold uppercase">
    Submit
  </button>
</form>
```

### Two Column Form

```html
<form class="space-y-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-2">
      <label class="block text-xs font-bold uppercase tracking-wider">First Name</label>
      <input type="text" class="w-full border-2 border-border px-4 py-3" />
    </div>
    <div class="space-y-2">
      <label class="block text-xs font-bold uppercase tracking-wider">Last Name</label>
      <input type="text" class="w-full border-2 border-border px-4 py-3" />
    </div>
  </div>

  <div class="space-y-2">
    <label class="block text-xs font-bold uppercase tracking-wider">Email</label>
    <input type="email" class="w-full border-2 border-border px-4 py-3" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-2">
      <label class="block text-xs font-bold uppercase tracking-wider">City</label>
      <input type="text" class="w-full border-2 border-border px-4 py-3" />
    </div>
    <div class="space-y-2">
      <label class="block text-xs font-bold uppercase tracking-wider">Postal Code</label>
      <input type="text" class="w-full border-2 border-border px-4 py-3" />
    </div>
  </div>

  <button type="submit" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase">
    Submit
  </button>
</form>
```

### Inline Form

```html
<form class="flex gap-4">
  <input
    type="email"
    class="flex-1 border-2 border-border px-4 py-3"
    placeholder="Enter your email"
  />
  <button type="submit" class="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase shrink-0">
    Subscribe
  </button>
</form>
```

## CSS Implementation

```css
/* Base input styles */
.input {
  width: 100%;
  border: 2px solid hsl(var(--border));
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: hsl(var(--background));
  transition: border-color 150ms ease-out;
}

.input:focus {
  border-color: hsl(var(--foreground));
  outline: none;
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: hsl(var(--muted));
}

/* Error state */
.input-error {
  border-color: hsl(var(--destructive));
}

.input-error:focus {
  border-color: hsl(var(--destructive));
}

/* Label */
.label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

/* Help text */
.help-text {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin-top: 0.5rem;
}

/* Error text */
.error-text {
  font-size: 0.875rem;
  color: hsl(var(--destructive));
  margin-top: 0.5rem;
}

/* Textarea */
.textarea {
  min-height: 120px;
  resize: vertical;
}

/* Select */
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.25rem;
  padding-right: 3rem;
}
```

## React Component Example

```tsx
import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helpText, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-xs font-bold uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full border-2 px-4 py-3 text-base transition-colors duration-150',
            'focus:outline-none',
            error
              ? 'border-destructive focus:border-destructive'
              : 'border-border focus:border-foreground',
            props.disabled && 'bg-muted opacity-50 cursor-not-allowed',
            className
          )}
          {...props}
        />
        {error && <p className="text-destructive text-sm">{error}</p>}
        {helpText && !error && (
          <p className="text-muted-foreground text-sm">{helpText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
```

## Accessibility

- Always associate labels with inputs using `for` and `id` attributes
- Use `aria-describedby` for help text and error messages
- Ensure error states are announced to screen readers
- Provide clear, visible focus indicators
- Use `fieldset` and `legend` for grouped inputs
- Mark required fields with `aria-required="true"`
