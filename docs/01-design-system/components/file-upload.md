# File Upload

## Philosophy

File upload in the Dutchy system combines a drag-and-drop zone with a file list that supports removal. The dashed-border dropzone uses the same sharp geometry as the rest of the system, highlighting with the primary accent on drag-over. A simple styled `<input type="file">` fallback is also provided.

## Drag-and-Drop Upload

```html
<div data-file-upload>
  <div class="dutchy-dropzone p-12 text-center" data-dropzone>
    <svg class="w-10 h-10 mx-auto mb-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
    </svg>
    <p class="font-bold uppercase tracking-wide text-sm mb-1">Drop files here</p>
    <p class="text-sm text-muted-foreground">or click to browse</p>
    <input type="file" multiple class="hidden" data-file-input />
  </div>
  <ul data-file-list class="mt-4 space-y-2"></ul>
</div>
```

### JavaScript Initialization

The `components.js` script auto-initializes every `[data-file-upload]` container:

- Clicking the dropzone opens the hidden file input.
- Dragging files over adds `dutchy-dropzone-active`.
- Selected files appear in `[data-file-list]` with name, size, and a remove button.

## Styled File Input

For simple cases without drag-and-drop:

```html
<label class="inline-flex items-center gap-3 border-2 border-border px-4 py-3 cursor-pointer hover:border-primary transition-colors">
  <svg class="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
  <span class="text-sm font-bold uppercase tracking-wide">Choose File</span>
  <input type="file" class="hidden" />
</label>
```

## Progress Indicators

Visual-only progress bars for upload feedback:

```html
<!-- In progress (75%) -->
<div class="flex items-center gap-4 p-3 border-2 border-border">
  <span class="text-sm font-bold flex-shrink-0">report.pdf</span>
  <div class="flex-1 h-2 bg-muted">
    <div class="h-full bg-primary transition-all" style="width: 75%"></div>
  </div>
  <span class="text-xs text-muted-foreground font-mono">75%</span>
</div>

<!-- Complete (100%) -->
<div class="flex items-center gap-4 p-3 border-2 border-border">
  <span class="text-sm font-bold flex-shrink-0">photo.jpg</span>
  <div class="flex-1 h-2 bg-muted">
    <div class="h-full bg-[hsl(142,76%,36%)]" style="width: 100%"></div>
  </div>
  <svg class="w-5 h-5 text-[hsl(142,76%,36%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
  </svg>
</div>
```

## File List Item

Each file in the list:

```html
<li class="flex items-center justify-between p-3 border-2 border-border">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
    <span class="text-sm font-bold">document.pdf</span>
    <span class="text-xs text-muted-foreground font-mono">2.4 MB</span>
  </div>
  <button class="text-muted-foreground hover:text-destructive p-1" data-remove-file>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</li>
```

## CSS

```css
.dutchy-dropzone {
  border: 2px dashed hsl(var(--border));
  transition: border-color 200ms ease, background-color 200ms ease;
  cursor: pointer;
}
.dutchy-dropzone:hover,
.dutchy-dropzone-active {
  border-color: hsl(var(--primary));
  background-color: hsl(var(--primary) / 0.05);
}
```

## Accessibility

- The hidden `<input>` is triggered programmatically so the dropzone is clickable.
- The file list uses `<ul>` / `<li>` for screen-reader enumeration.
- Remove buttons have `aria-label="Remove file"` for clarity.
- The dropzone is keyboard-accessible—pressing Enter or Space activates the file picker.
- Progress bars should include `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` for real uploads.
