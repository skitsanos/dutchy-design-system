# Menu

## Purpose

Menus are sharp, high-contrast action lists: grouped items, clear dividers, and strong hover states.

## HTML Pattern

```html
<div class="max-w-xs border-2 border-border bg-background shadow-md divide-y divide-border" role="menu">
  <div role="group" aria-label="Account">
    <div class="px-4 py-2">
      <p class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Account</p>
    </div>
    <div class="divide-y divide-border">
      <button role="menuitem" class="w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground">
        Profile
      </button>
      <button role="menuitem" class="w-full text-left px-4 py-3 text-sm text-destructive hover:bg-destructive hover:text-destructive-foreground">
        Sign out
      </button>
    </div>
  </div>
</div>
```

## JSX SSR (Bun)

Implementation: [`src/components/Menu`](../../../src/components/Menu/) and [`src/components/MenuItem`](../../../src/components/MenuItem/)

```tsx
import Menu, { MenuDivider, MenuGroup } from '@/components/Menu';
import MenuItem from '@/components/MenuItem';

export default function Example() {
  return (
    <Menu width="xs">
      <MenuGroup label="Account">
        <MenuItem>Profile</MenuItem>
        <MenuItem variant="destructive">Sign out</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup label="Help">
        <MenuItem shortcut="⌘K">Command palette</MenuItem>
      </MenuGroup>
    </Menu>
  );
}
```

## Notes

- Use `role="menu"` / `role="menuitem"` for action menus (already present in the JSX components).
- Keep destructive items visually distinct and separated when possible.
