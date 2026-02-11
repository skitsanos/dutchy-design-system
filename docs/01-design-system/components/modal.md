# Modal / Drawer

## Philosophy

Modals and drawers focus user attention on a single task or piece of information. The Dutchy system leverages the native `<dialog>` element for accessibility and uses strong borders and bold typography to frame content. Drawers slide in from the side for contextual panels.

## Confirmation Modal

```html
<dialog id="confirm-modal" class="bg-background border-4 border-border p-0 w-full max-w-md backdrop:bg-foreground/50">
  <div class="p-8">
    <h2 class="font-display text-xl font-bold uppercase tracking-tight mb-2">Confirm Action</h2>
    <p class="text-muted-foreground text-sm mb-8">
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
    <div class="flex justify-end gap-3">
      <button onclick="this.closest('dialog').close()" class="px-6 py-3 border-2 border-border font-bold uppercase tracking-wide text-sm hover:bg-muted transition-colors">
        Cancel
      </button>
      <button onclick="this.closest('dialog').close('confirm')" class="px-6 py-3 bg-destructive text-destructive-foreground font-bold uppercase tracking-wide text-sm hover:bg-destructive/90 transition-colors">
        Delete
      </button>
    </div>
  </div>
</dialog>

<button onclick="document.getElementById('confirm-modal').showModal()" class="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-wide text-sm">
  Open Modal
</button>
```

## Content Modal

```html
<dialog id="content-modal" class="bg-background border-4 border-border p-0 w-full max-w-lg backdrop:bg-foreground/50">
  <div class="flex items-center justify-between px-6 py-4 border-b-2 border-border">
    <h2 class="font-display text-lg font-bold uppercase tracking-tight">Edit Profile</h2>
    <button onclick="this.closest('dialog').close()" class="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="Close">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
  <div class="p-6 space-y-4">
    <div>
      <label class="block font-display font-bold uppercase text-xs tracking-wider mb-2">Name</label>
      <input type="text" value="John Doe" class="w-full px-4 py-3 border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors">
    </div>
    <div>
      <label class="block font-display font-bold uppercase text-xs tracking-wider mb-2">Email</label>
      <input type="email" value="john@example.com" class="w-full px-4 py-3 border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors">
    </div>
  </div>
  <div class="flex justify-end gap-3 px-6 py-4 border-t-2 border-border">
    <button onclick="this.closest('dialog').close()" class="px-6 py-3 border-2 border-border font-bold uppercase tracking-wide text-sm hover:bg-muted transition-colors">
      Cancel
    </button>
    <button onclick="this.closest('dialog').close('save')" class="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors">
      Save Changes
    </button>
  </div>
</dialog>
```

## Right-Side Drawer

```html
<dialog id="drawer" class="fixed inset-0 m-0 h-full max-h-full w-80 ml-auto bg-background border-l-4 border-border p-0 backdrop:bg-foreground/50">
  <div class="flex items-center justify-between px-6 py-4 border-b-2 border-border">
    <h2 class="font-display text-lg font-bold uppercase tracking-tight">Details</h2>
    <button onclick="this.closest('dialog').close()" class="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="Close">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
  <div class="p-6 space-y-4">
    <div>
      <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Status</p>
      <p class="text-sm mt-1">Active</p>
    </div>
    <div>
      <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Created</p>
      <p class="text-sm mt-1">January 15, 2025</p>
    </div>
    <div>
      <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Description</p>
      <p class="text-sm text-muted-foreground mt-1">Detailed information about the selected item goes here.</p>
    </div>
  </div>
</dialog>

<button onclick="document.getElementById('drawer').showModal()" class="border-2 border-foreground px-6 py-3 font-bold uppercase tracking-wide text-sm hover:bg-foreground hover:text-background transition-colors">
  Open Drawer
</button>
```

## CSS Implementation

```css
dialog {
  border: none;
  padding: 0;
}

dialog::backdrop {
  background-color: hsl(var(--foreground) / 0.5);
}

dialog[open] {
  animation: modal-in 200ms ease-out;
}

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid hsl(var(--border));
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 2px solid hsl(var(--border));
}

/* Drawer */
.drawer {
  position: fixed;
  inset: 0;
  margin: 0;
  margin-left: auto;
  height: 100%;
  max-height: 100%;
  width: 20rem;
  border-left: 4px solid hsl(var(--border));
}
```

## React Component Example

```tsx
function Modal({ open, onClose, title, children, footer }) {
  const ref = useRef(null);

  useEffect(() => {
    if (open) ref.current?.showModal();
    else ref.current?.close();
  }, [open]);

  return (
    <dialog ref={ref} onClose={onClose} className="bg-background border-4 border-border p-0 w-full max-w-md backdrop:bg-foreground/50">
      <div className="flex items-center justify-between px-6 py-4 border-b-2 border-border">
        <h2 className="font-display text-lg font-bold uppercase tracking-tight">{title}</h2>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1" aria-label="Close">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div className="p-6">{children}</div>
      {footer && <div className="flex justify-end gap-3 px-6 py-4 border-t-2 border-border">{footer}</div>}
    </dialog>
  );
}
```

## Accessibility

- Use the native `<dialog>` element for built-in focus trapping and Escape key dismissal.
- Call `.showModal()` to open — this creates a proper modal with backdrop and focus trap.
- Ensure the close button has `aria-label="Close"`.
- The dialog title should be a heading element for screen reader navigation.
- Return focus to the trigger element when the dialog closes.
- Avoid nesting modals — use drawers for secondary panels instead.
- The backdrop should close the modal on click (optional but common).
