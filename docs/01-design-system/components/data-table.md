# Data Table

## Philosophy

Data tables present structured information in a scannable, sortable format. The Dutchy approach uses strong headers, clear borders, and high-contrast active states. Tables stay SSR-friendly by default and layer on interactive sorting with minimal JavaScript.

## Basic Table

```html
<div class="border-2 border-border overflow-x-auto">
  <table class="w-full text-sm">
    <thead>
      <tr class="bg-muted border-b-2 border-border">
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Name</th>
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Status</th>
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Role</th>
        <th class="text-right px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border">
      <tr class="hover:bg-muted/50 transition-colors">
        <td class="px-6 py-4 font-bold">Alice Johnson</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-bold uppercase tracking-wider text-white" style="background-color: hsl(142 76% 36%)">Active</span></td>
        <td class="px-6 py-4 text-muted-foreground">Admin</td>
        <td class="px-6 py-4 text-right"><button class="text-primary hover:underline text-sm font-bold uppercase">Edit</button></td>
      </tr>
      <tr class="hover:bg-muted/50 transition-colors">
        <td class="px-6 py-4 font-bold">Bob Smith</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-bold uppercase tracking-wider text-white" style="background-color: hsl(142 76% 36%)">Active</span></td>
        <td class="px-6 py-4 text-muted-foreground">Editor</td>
        <td class="px-6 py-4 text-right"><button class="text-primary hover:underline text-sm font-bold uppercase">Edit</button></td>
      </tr>
      <tr class="hover:bg-muted/50 transition-colors">
        <td class="px-6 py-4 font-bold">Carol Davis</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-muted text-muted-foreground">Inactive</span></td>
        <td class="px-6 py-4 text-muted-foreground">Viewer</td>
        <td class="px-6 py-4 text-right"><button class="text-primary hover:underline text-sm font-bold uppercase">Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Striped Table

```html
<div class="border-2 border-border overflow-x-auto">
  <table class="w-full text-sm">
    <thead>
      <tr class="bg-foreground text-background">
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Product</th>
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Category</th>
        <th class="text-right px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Price</th>
        <th class="text-right px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-background">
        <td class="px-6 py-4 font-bold">Widget A</td>
        <td class="px-6 py-4 text-muted-foreground">Electronics</td>
        <td class="px-6 py-4 text-right font-mono">$29.99</td>
        <td class="px-6 py-4 text-right">142</td>
      </tr>
      <tr class="bg-muted/50">
        <td class="px-6 py-4 font-bold">Widget B</td>
        <td class="px-6 py-4 text-muted-foreground">Hardware</td>
        <td class="px-6 py-4 text-right font-mono">$49.99</td>
        <td class="px-6 py-4 text-right">87</td>
      </tr>
      <tr class="bg-background">
        <td class="px-6 py-4 font-bold">Widget C</td>
        <td class="px-6 py-4 text-muted-foreground">Software</td>
        <td class="px-6 py-4 text-right font-mono">$9.99</td>
        <td class="px-6 py-4 text-right">∞</td>
      </tr>
      <tr class="bg-muted/50">
        <td class="px-6 py-4 font-bold">Widget D</td>
        <td class="px-6 py-4 text-muted-foreground">Electronics</td>
        <td class="px-6 py-4 text-right font-mono">$19.99</td>
        <td class="px-6 py-4 text-right">0</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Sortable Table

```html
<div class="border-2 border-border overflow-x-auto">
  <table class="w-full text-sm" data-sortable>
    <thead>
      <tr class="bg-muted border-b-2 border-border">
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider cursor-pointer hover:text-primary transition-colors select-none" data-sort="name">
          <span class="inline-flex items-center gap-1">
            Name
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          </span>
        </th>
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider cursor-pointer hover:text-primary transition-colors select-none" data-sort="status">
          <span class="inline-flex items-center gap-1">
            Status
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          </span>
        </th>
        <th class="text-right px-6 py-3 font-display font-bold uppercase text-xs tracking-wider cursor-pointer hover:text-primary transition-colors select-none" data-sort="amount">
          <span class="inline-flex items-center gap-1">
            Amount
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          </span>
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border">
      <tr class="hover:bg-muted/50 transition-colors">
        <td class="px-6 py-4 font-bold">Alice</td>
        <td class="px-6 py-4">Active</td>
        <td class="px-6 py-4 text-right font-mono">$1,200</td>
      </tr>
      <tr class="hover:bg-muted/50 transition-colors">
        <td class="px-6 py-4 font-bold">Bob</td>
        <td class="px-6 py-4">Pending</td>
        <td class="px-6 py-4 text-right font-mono">$800</td>
      </tr>
      <tr class="hover:bg-muted/50 transition-colors">
        <td class="px-6 py-4 font-bold">Carol</td>
        <td class="px-6 py-4">Active</td>
        <td class="px-6 py-4 text-right font-mono">$2,400</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Table with Empty State

```html
<div class="border-2 border-border">
  <table class="w-full text-sm">
    <thead>
      <tr class="bg-muted border-b-2 border-border">
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Name</th>
        <th class="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Email</th>
        <th class="text-right px-6 py-3 font-display font-bold uppercase text-xs tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3" class="px-6 py-16 text-center">
          <p class="font-display font-bold uppercase text-sm mb-1">No data available</p>
          <p class="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## CSS Implementation

```css
.data-table {
  width: 100%;
  font-size: 0.875rem;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  background: hsl(var(--muted));
  border-bottom: 2px solid hsl(var(--border));
}

.data-table td {
  padding: 1rem 1.5rem;
}

.data-table tbody tr {
  border-bottom: 1px solid hsl(var(--border));
  transition: background-color 150ms;
}

.data-table tbody tr:hover {
  background-color: hsl(var(--muted) / 0.5);
}

.data-table-striped tbody tr:nth-child(even) {
  background-color: hsl(var(--muted) / 0.5);
}

.data-table-sortable th[data-sort] {
  cursor: pointer;
  user-select: none;
}
```

## React Component Example

```tsx
function DataTable({ columns, data }) {
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const sorted = sortCol
    ? [...data].sort((a, b) => {
        const v = a[sortCol] > b[sortCol] ? 1 : -1;
        return sortDir === 'asc' ? v : -v;
      })
    : data;

  const toggleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  return (
    <div className="border-2 border-border overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted border-b-2 border-border">
            {columns.map(col => (
              <th key={col.key} onClick={() => col.sortable && toggleSort(col.key)}
                className="text-left px-6 py-3 font-display font-bold uppercase text-xs tracking-wider cursor-pointer hover:text-primary">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sorted.map((row, i) => (
            <tr key={i} className="hover:bg-muted/50 transition-colors">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## Accessibility

- Use `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` semantically.
- Add `scope="col"` to column headers.
- Sortable headers should use `aria-sort` (`ascending`, `descending`, or `none`).
- Wrap tables in a scrollable container with `role="region"` and `aria-label` for overflow.
- Ensure row hover states don't remove the border contrast needed for readability.
- Empty states should be clear to screen readers (use `colspan` and descriptive text).
