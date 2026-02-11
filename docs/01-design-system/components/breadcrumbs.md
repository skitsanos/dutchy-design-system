# Breadcrumbs

## Philosophy

Breadcrumbs orient users within a site hierarchy without competing with the page headline. The Dutchy approach uses bold uppercase links, slash or chevron separators, and clear current-page emphasis. Truncation handles deep paths on small screens.

## Standard Breadcrumb

Slash-separated trail with the current page in bold foreground text.

```html
<nav aria-label="Breadcrumb">
  <ol class="flex flex-wrap items-center gap-2 text-sm">
    <li>
      <a href="/" class="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Home</a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">/</li>
    <li>
      <a href="/products" class="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Products</a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">/</li>
    <li class="font-bold uppercase tracking-wide" aria-current="page">Details</li>
  </ol>
</nav>
```

## Breadcrumb with Chevron Icons

Replace slash separators with SVG chevrons for a more polished look.

```html
<nav aria-label="Breadcrumb">
  <ol class="flex flex-wrap items-center gap-2 text-sm">
    <li>
      <a href="/" class="inline-flex items-center font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors" aria-label="Home">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      </a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </li>
    <li>
      <a href="/docs" class="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Docs</a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </li>
    <li class="font-bold uppercase tracking-wide" aria-current="page">Breadcrumbs</li>
  </ol>
</nav>
```

## Truncated Breadcrumb

Collapse middle segments behind an ellipsis button for deep hierarchies or mobile layouts.

```html
<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-2 text-sm">
    <li>
      <a href="/" class="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Home</a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">/</li>
    <li>
      <button type="button" class="inline-flex items-center border-2 border-border px-2 py-0.5 font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors" aria-label="Show collapsed items">
        ...
      </button>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">/</li>
    <li class="font-bold uppercase tracking-wide" aria-current="page">Product Detail</li>
  </ol>
</nav>
```

## With Background Bar

Breadcrumbs inside a muted bar for stronger visual separation from content.

```html
<nav aria-label="Breadcrumb" class="bg-muted border-b-2 border-border px-6 py-3">
  <ol class="flex flex-wrap items-center gap-2 text-sm">
    <li>
      <a href="/" class="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Home</a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">/</li>
    <li>
      <a href="/settings" class="font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors">Settings</a>
    </li>
    <li class="text-muted-foreground" aria-hidden="true">/</li>
    <li class="font-bold uppercase tracking-wide" aria-current="page">Profile</li>
  </ol>
</nav>
```

## Accessibility

- Wrap breadcrumbs in `<nav aria-label="Breadcrumb">`.
- Mark the current page with `aria-current="page"` and do not make it a link.
- Hide separator characters and icons from screen readers with `aria-hidden="true"`.
- Use `<ol>` for semantic ordering of the hierarchy.
- Ensure visible focus styles on all links (the Dutchy primary ring or underline).
- On mobile, prefer truncation over multi-line wrapping.
