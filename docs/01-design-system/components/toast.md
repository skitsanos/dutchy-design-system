# Toast Notifications

## Philosophy

Toasts are transient, non-blocking messages that inform users about the outcome of an action. They appear briefly, stack neatly, and dismiss automatically. The Dutchy approach uses strong borders, severity colors, and smooth enter/exit animations.

## Toast Variants

### Success Toast

```html
<div class="border-2 border-border bg-background p-4 shadow-md min-w-[320px] flex items-start gap-3" role="status">
  <svg class="w-5 h-5 shrink-0 mt-0.5" style="color: hsl(142 76% 36%)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
  <div class="flex-1">
    <p class="font-bold text-sm">Saved successfully</p>
    <p class="text-sm text-muted-foreground">Your changes have been saved.</p>
  </div>
  <button class="shrink-0 text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>
```

### Error Toast

```html
<div class="border-2 border-destructive bg-background p-4 shadow-md min-w-[320px] flex items-start gap-3" role="alert">
  <svg class="w-5 h-5 text-destructive shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
  </svg>
  <div class="flex-1">
    <p class="font-bold text-sm">Error</p>
    <p class="text-sm text-muted-foreground">Failed to save. Please try again.</p>
  </div>
  <button class="shrink-0 text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>
```

### Info Toast

```html
<div class="border-2 border-primary bg-background p-4 shadow-md min-w-[320px] flex items-start gap-3" role="status">
  <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
  </svg>
  <div class="flex-1">
    <p class="font-bold text-sm">Heads up</p>
    <p class="text-sm text-muted-foreground">A new version is available.</p>
  </div>
  <button class="shrink-0 text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>
```

## Toast Container

```html
<div id="toast-container" class="fixed bottom-6 right-6 z-[100] space-y-3" aria-live="polite">
  <!-- Toasts are inserted here dynamically -->
</div>
```

## Toast System (JavaScript)

```html
<script>
  function showToast({ title, message, variant = 'info', duration = 4000 }) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    const borderColor = {
      success: 'border-[hsl(142,76%,36%)]',
      error: 'border-destructive',
      info: 'border-primary',
      warning: 'border-[hsl(45,93%,47%)]',
    }[variant] || 'border-border';

    toast.className = `border-2 ${borderColor} bg-background p-4 shadow-md min-w-[320px] flex items-start gap-3`;
    toast.style.animation = 'toast-in 300ms ease-out';
    toast.setAttribute('role', variant === 'error' ? 'alert' : 'status');

    toast.innerHTML = `
      <div class="flex-1">
        <p class="font-bold text-sm">${title}</p>
        <p class="text-sm text-muted-foreground">${message}</p>
      </div>
      <button class="shrink-0 text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    `;

    const dismiss = () => {
      toast.style.animation = 'toast-out 300ms ease-in forwards';
      toast.addEventListener('animationend', () => toast.remove());
    };

    toast.querySelector('button').addEventListener('click', dismiss);
    container.appendChild(toast);

    if (duration > 0) setTimeout(dismiss, duration);
  }
</script>
```

## CSS Implementation

```css
@keyframes toast-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes toast-out {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}

.toast-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.toast {
  border: 2px solid hsl(var(--border));
  background: hsl(var(--background));
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  min-width: 320px;
  animation: toast-in 300ms ease-out;
}

.toast-dismiss {
  animation: toast-out 300ms ease-in forwards;
}
```

## React Component Example

```tsx
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ title, message, variant = 'info', duration = 4000 }) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message, variant }]);
    if (duration > 0) setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] space-y-3" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className="border-2 border-border bg-background p-4 shadow-md min-w-[320px] flex items-start gap-3"
               role={toast.variant === 'error' ? 'alert' : 'status'}>
            <div className="flex-1">
              <p className="font-bold text-sm">{toast.title}</p>
              <p className="text-sm text-muted-foreground">{toast.message}</p>
            </div>
            <button onClick={() => removeToast(toast.id)} className="text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
```

## Accessibility

- Use `aria-live="polite"` on the toast container for non-critical messages.
- Use `role="alert"` for error toasts requiring immediate attention.
- Dismiss buttons must have `aria-label="Dismiss"`.
- Auto-dismiss duration should be long enough to read (4 seconds minimum).
- Toasts should not block interaction with the rest of the page.
- Users should be able to dismiss toasts manually at any time.
- Avoid stacking more than 3-4 toasts simultaneously.
