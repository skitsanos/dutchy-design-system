# Dropdown / Combobox / Command Palette

## Philosophy

Dropdown menus offer contextual actions, comboboxes combine input with selection, and command palettes provide keyboard-driven navigation. The Dutchy system uses sharp borders, bold active states, and responsive hover feedback for all selection patterns.

## Basic Dropdown Menu

```html
<div class="relative inline-block" data-dropdown>
  <button class="px-6 py-3 border-2 border-border font-bold uppercase tracking-wide text-sm hover:border-foreground transition-colors inline-flex items-center gap-2">
    Actions
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div class="absolute top-full left-0 mt-1 bg-background border-2 border-border shadow-md min-w-[200px] z-50 hidden" data-dropdown-menu>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
      Edit
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border">
      Duplicate
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border">
      Archive
    </button>
    <div class="border-t-2 border-border"></div>
    <button class="w-full text-left px-4 py-3 text-sm text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors">
      Delete
    </button>
  </div>
</div>
```

## Dropdown with Icons

```html
<div class="relative inline-block" data-dropdown>
  <button class="px-6 py-3 border-2 border-border font-bold uppercase tracking-wide text-sm hover:border-foreground transition-colors inline-flex items-center gap-2">
    More
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div class="absolute top-full left-0 mt-1 bg-background border-2 border-border shadow-md min-w-[220px] z-50 hidden" data-dropdown-menu>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-3">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
      Edit
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border inline-flex items-center gap-3">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
      Duplicate
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border inline-flex items-center gap-3">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
      Archive
    </button>
  </div>
</div>
```

## Searchable Select (Combobox)

```html
<div class="relative w-64" data-combobox>
  <div class="relative">
    <input
      type="text"
      placeholder="Search frameworks..."
      class="w-full px-4 py-3 pr-10 border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors text-sm"
    >
    <svg class="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  </div>
  <div class="absolute top-full left-0 right-0 mt-1 bg-background border-2 border-border shadow-md z-50 max-h-60 overflow-auto hidden" data-combobox-list>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors bg-muted font-bold">
      React
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border">
      Vue
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border">
      Svelte
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border">
      Angular
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-border">
      Solid
    </button>
  </div>
</div>
```

## Command Palette

```html
<dialog id="command-palette" class="bg-background border-4 border-border p-0 w-full max-w-lg backdrop:bg-foreground/50">
  <div class="p-4 border-b-2 border-border">
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5 text-muted-foreground shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
      <input type="text" placeholder="Type a command or search..." class="w-full bg-transparent focus:outline-none text-sm" autofocus>
    </div>
  </div>
  <div class="max-h-80 overflow-auto">
    <div class="px-4 py-2">
      <p class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pages</p>
    </div>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-3">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"/></svg>
      Home
      <span class="ml-auto text-xs text-muted-foreground font-mono">G H</span>
    </button>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-3 border-t border-border">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/></svg>
      Dashboard
      <span class="ml-auto text-xs text-muted-foreground font-mono">G D</span>
    </button>
    <div class="px-4 py-2 border-t-2 border-border">
      <p class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</p>
    </div>
    <button class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-3">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
      Create New...
      <span class="ml-auto text-xs text-muted-foreground font-mono">Ctrl+N</span>
    </button>
  </div>
</dialog>
```

## CSS Implementation

```css
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
  background: hsl(var(--background));
  border: 2px solid hsl(var(--border));
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  min-width: 200px;
  z-index: 50;
}

.dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  transition: background-color 150ms, color 150ms;
}

.dropdown-item:hover {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.dropdown-item-destructive:hover {
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}

.dropdown-separator {
  border-top: 2px solid hsl(var(--border));
}
```

## React Component Example

```tsx
function Dropdown({ trigger, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button onClick={() => setOpen(!open)} className="px-6 py-3 border-2 border-border font-bold uppercase tracking-wide text-sm hover:border-foreground transition-colors inline-flex items-center gap-2">
        {trigger}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-background border-2 border-border shadow-md min-w-[200px] z-50">
          {items.map((item, i) => (
            <button key={i} onClick={() => { item.onClick?.(); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors ${i > 0 ? 'border-t border-border' : ''}`}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Accessibility

- Dropdown triggers should use `aria-haspopup="true"` and `aria-expanded`.
- Menu items should use `role="menu"` and `role="menuitem"`.
- Support keyboard navigation: arrow keys to move, Enter to select, Escape to close.
- Comboboxes need `role="combobox"`, `aria-autocomplete`, and `aria-activedescendant`.
- The command palette should trap focus while open and support Ctrl+K / Cmd+K to toggle.
- Ensure focus returns to the trigger when a menu closes.
- All items should have visible focus indicators and hover states.
