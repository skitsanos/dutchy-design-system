# Pagination

## Philosophy

Pagination should be predictable and direct. Users must always know where they are in a dataset and have clear paths forward and backward. The Dutchy system uses bold borders, high-contrast active states, and square geometry for pagination controls.

## Standard Pagination

```html
<nav aria-label="Pagination" class="flex items-center gap-2">
  <a href="?page=1" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors inline-flex items-center justify-center">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </a>
  <a href="?page=1" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    1
  </a>
  <span class="px-4 py-2 border-2 border-foreground bg-foreground text-background font-bold text-sm" aria-current="page">
    2
  </span>
  <a href="?page=3" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    3
  </a>
  <a href="?page=4" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    4
  </a>
  <a href="?page=5" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    5
  </a>
  <a href="?page=3" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors inline-flex items-center justify-center">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</nav>
```

## Pagination with Ellipsis

```html
<nav aria-label="Pagination" class="flex items-center gap-2">
  <a href="?page=6" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors inline-flex items-center justify-center">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </a>
  <a href="?page=1" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    1
  </a>
  <span class="px-2 py-2 text-muted-foreground text-sm" aria-hidden="true">...</span>
  <a href="?page=6" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    6
  </a>
  <span class="px-4 py-2 border-2 border-foreground bg-foreground text-background font-bold text-sm" aria-current="page">
    7
  </span>
  <a href="?page=8" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    8
  </a>
  <span class="px-2 py-2 text-muted-foreground text-sm" aria-hidden="true">...</span>
  <a href="?page=20" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    20
  </a>
  <a href="?page=8" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors inline-flex items-center justify-center">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</nav>
```

## Compact Pagination

```html
<nav aria-label="Pagination" class="flex items-center gap-4">
  <a href="?page=2" class="text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
    Previous
  </a>
  <span class="text-sm text-muted-foreground">
    Page <strong class="text-foreground">3</strong> of <strong class="text-foreground">12</strong>
  </span>
  <a href="?page=4" class="text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
    Next
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</nav>
```

## Disabled States

```html
<nav aria-label="Pagination" class="flex items-center gap-2">
  <span class="px-4 py-2 border-2 border-border text-muted-foreground/40 cursor-not-allowed inline-flex items-center justify-center" aria-disabled="true">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </span>
  <span class="px-4 py-2 border-2 border-foreground bg-foreground text-background font-bold text-sm" aria-current="page">
    1
  </span>
  <a href="?page=2" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    2
  </a>
  <a href="?page=3" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold">
    3
  </a>
  <a href="?page=2" class="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors inline-flex items-center justify-center">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</nav>
```

## CSS Implementation

```css
.pagination {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-item {
  padding: 0.5rem 1rem;
  border: 2px solid hsl(var(--border));
  font-size: 0.875rem;
  font-weight: 700;
  color: hsl(var(--muted-foreground));
  transition: border-color 150ms, color 150ms;
}

.pagination-item:hover {
  border-color: hsl(var(--foreground));
  color: hsl(var(--foreground));
}

.pagination-item.active {
  background-color: hsl(var(--foreground));
  border-color: hsl(var(--foreground));
  color: hsl(var(--background));
}

.pagination-item.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
```

## React Component Example

```tsx
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage
            ? 'px-4 py-2 border-2 border-foreground bg-foreground text-background font-bold text-sm'
            : 'px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-sm font-bold'
          }
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border-2 border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </nav>
  );
}
```

## Accessibility

- Wrap pagination in `<nav aria-label="Pagination">`.
- Mark the active page with `aria-current="page"`.
- Disabled controls should use `aria-disabled="true"` and not be focusable links.
- Ellipsis should use `aria-hidden="true"` as they are decorative.
- Ensure all page links have visible focus indicators.
- Previous/Next buttons should have accessible labels via text content or `aria-label`.
