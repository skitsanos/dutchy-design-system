# Form Validation

## Philosophy

DutchyForm brings Ant Design-inspired declarative validation to vanilla JavaScript. Define rules per field, choose when validation fires, and let the library handle error display, accessibility attributes, and async validators—all with zero dependencies.

## Quick Start

```html
<script src="assets/js/form-validation.js"></script>

<form id="signup">
  <div data-field>
    <label class="text-sm font-bold uppercase tracking-wide">Email</label>
    <input name="email" type="text" class="w-full border-2 border-border p-3" />
  </div>
  <button type="submit" class="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase">Submit</button>
</form>

<script>
const form = DutchyForm.create(document.getElementById('signup'), {
  rules: {
    email: [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email address' },
    ],
  },
});

document.getElementById('signup').addEventListener('dutchy:submit', (e) => {
  console.log('Valid data:', e.detail);
});
</script>
```

## Initialization

```js
const form = DutchyForm.create(formElement, {
  rules: {
    fieldName: [
      { required: true, message: 'Required' },
      { type: 'email', message: 'Invalid email' },
      { min: 8, message: 'Too short' },
      { max: 200, message: 'Too long' },
      { pattern: /[A-Z]/, message: 'Needs uppercase' },
      { validator: (val) => fetch('/api/check?v=' + val).then(r => r.ok), message: 'Already taken' },
    ],
  },
  validateTrigger: 'onBlur', // 'onBlur' | 'onChange' | 'onSubmit'
});
```

### Rule Options

| Property | Type | Description |
|----------|------|-------------|
| `required` | `boolean` | Fails if value is empty or whitespace-only |
| `type` | `string` | Built-in type: `'email'`, `'url'`, `'number'` |
| `min` | `number` | Minimum string length |
| `max` | `number` | Maximum string length |
| `pattern` | `RegExp` | Must match the regex |
| `validator` | `(value) => boolean \| string \| Promise` | Custom sync/async validator |
| `message` | `string` | Error message displayed on failure |

### Validate Triggers

| Trigger | Behavior |
|---------|----------|
| `'onBlur'` | Validates when the field loses focus (default) |
| `'onChange'` | Validates on every keystroke |
| `'onSubmit'` | Validates only on form submission |

## Methods

### `form.validateFields()`

Validates all fields. Returns a Promise.

```js
const { valid, errors, values } = await form.validateFields();
// valid   — boolean
// errors  — { fieldName: 'message', ... } (only invalid fields)
// values  — { fieldName: 'value', ... }
```

### `form.validateField(name)`

Validates a single field.

```js
const { valid, message } = await form.validateField('email');
```

### `form.resetFields()`

Resets the form and clears all validation states.

```js
form.resetFields();
```

### `form.getFieldsValue()`

Returns the current values for all rule-defined fields.

```js
const values = form.getFieldsValue();
// { email: 'user@example.com', password: '...' }
```

### `form.setFieldError(name, message)`

Manually set an error on a field (e.g. after a server response).

```js
form.setFieldError('email', 'This email is already registered');
```

## Built-in Type Validators

| Type | Check |
|------|-------|
| `email` | Regex: `^[^\s@]+@[^\s@]+\.[^\s@]+$` |
| `url` | `new URL()` parse succeeds |
| `number` | `!isNaN(value)` and non-empty |

## Error Display

The library automatically:

1. Creates a `<p data-field-error="name">` element below the field
2. Toggles `.dutchy-field-error` or `.dutchy-field-success` on the wrapper `[data-field]`
3. Sets `aria-invalid="true"` and `aria-describedby` on the input
4. Adds `role="alert"` to the error element for screen reader announcements
5. Shows a spinner with "Validating..." for async validators

### HTML Structure

Wrap each field in a `[data-field]` container:

```html
<div data-field>
  <label class="text-sm font-bold uppercase tracking-wide">Field Label</label>
  <input name="fieldName" class="w-full border-2 border-border p-3" />
  <!-- error element auto-created here -->
</div>
```

## Events

### `dutchy:submit`

Dispatched on the form element when `validateFields()` passes. The `detail` property contains the validated values.

```js
formEl.addEventListener('dutchy:submit', (e) => {
  console.log(e.detail); // { email: '...', password: '...' }
});
```

### `reset`

The library listens for the native `reset` event and automatically calls `resetFields()`.

## CSS Dependencies

Add these classes to `dutchy.css`:

```css
/* Validation states */
.dutchy-field-error input,
.dutchy-field-error textarea,
.dutchy-field-error select {
  border-color: hsl(var(--destructive)) !important;
}
.dutchy-field-error [data-field-error] {
  color: hsl(var(--destructive));
  font-size: 0.75rem;
  margin-top: 0.375rem;
}
.dutchy-field-success input,
.dutchy-field-success textarea,
.dutchy-field-success select {
  border-color: hsl(142 76% 36%) !important;
}

/* Async spinner */
@keyframes dutchy-spin { to { transform: rotate(360deg); } }
.dutchy-validating-spinner {
  display: inline-block;
  width: 0.875rem;
  height: 0.875rem;
  border: 2px solid hsl(var(--border));
  border-top-color: hsl(var(--primary));
  animation: dutchy-spin 0.6s linear infinite;
}
```

## Accessibility

- `aria-invalid="true"` is set on fields with errors and removed on success.
- `aria-describedby` links the input to its error message element.
- Error messages use `role="alert"` for live announcements.
- Focus is not stolen during validation—errors appear passively.
- All validation triggers are keyboard-accessible (blur, input, submit).
