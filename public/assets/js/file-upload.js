(function() {
  const fileStore = new Map();

  const dropzones = document.querySelectorAll('[data-dropzone]');

  dropzones.forEach((dropzone) => {
    const fileInput = dropzone.querySelector('[data-file-input]');
    const fileList = dropzone.querySelector('[data-file-list]');
    const maxSizeMB = parseFloat(dropzone.dataset.maxSize) || 10;
    const acceptAttr = fileInput ? fileInput.getAttribute('accept') : null;
    const zoneId = dropzone.id || `dropzone-${Math.random().toString(36).slice(2)}`;

    if (!fileInput || !fileList) return;

    // Initialize file store for this dropzone
    fileStore.set(zoneId, []);

    // Click to trigger file input
    dropzone.addEventListener('click', (e) => {
      // Do not trigger if clicking on a remove button
      if (e.target.closest('[data-file-remove]')) return;
      fileInput.click();
    });

    // Drag and drop events
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('border-primary', 'bg-muted/30');
    });

    dropzone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropzone.classList.remove('border-primary', 'bg-muted/30');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('border-primary', 'bg-muted/30');

      const files = Array.from(e.dataTransfer.files);
      handleFiles(files);
    });

    // File input change
    fileInput.addEventListener('change', () => {
      const files = Array.from(fileInput.files);
      handleFiles(files);
      // Reset input so re-selecting the same file triggers change
      fileInput.value = '';
    });

    function handleFiles(files) {
      files.forEach((file) => {
        // Validate file type
        if (acceptAttr && !isAcceptedType(file, acceptAttr)) {
          if (window.toast) {
            window.toast.show(`File type not accepted: ${file.name}`, 'error');
          }
          return;
        }

        // Validate file size
        const sizeMB = file.size / (1024 * 1024);
        if (sizeMB > maxSizeMB) {
          if (window.toast) {
            window.toast.show(`File too large: ${file.name} (${sizeMB.toFixed(1)}MB > ${maxSizeMB}MB)`, 'error');
          }
          return;
        }

        // Add to store
        const storedFiles = fileStore.get(zoneId);
        storedFiles.push(file);
        fileStore.set(zoneId, storedFiles);

        // Render file item
        renderFileItem(file, storedFiles.length - 1);
      });
    }

    function renderFileItem(file, index) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);

      const item = document.createElement('div');
      item.className = 'flex items-center justify-between bg-muted px-4 py-2 text-sm';
      item.dataset.fileIndex = index;
      item.innerHTML = `
        <div class="flex items-center gap-2 min-w-0">
          <svg class="w-4 h-4 flex-shrink-0 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          <span class="truncate font-medium">${file.name}</span>
          <span class="text-muted-foreground flex-shrink-0">${sizeMB} MB</span>
        </div>
        <button data-file-remove="${index}" class="p-1 text-muted-foreground hover:text-destructive flex-shrink-0" type="button">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      `;

      // Remove button handler
      const removeBtn = item.querySelector('[data-file-remove]');
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const storedFiles = fileStore.get(zoneId);
        storedFiles.splice(index, 1);
        fileStore.set(zoneId, storedFiles);
        item.remove();
      });

      fileList.appendChild(item);
    }

    function isAcceptedType(file, accept) {
      const acceptedTypes = accept.split(',').map((t) => t.trim().toLowerCase());

      return acceptedTypes.some((type) => {
        if (type.startsWith('.')) {
          // Extension check
          return file.name.toLowerCase().endsWith(type);
        }
        if (type.endsWith('/*')) {
          // MIME type wildcard (e.g., image/*)
          return file.type.startsWith(type.replace('/*', '/'));
        }
        // Exact MIME type
        return file.type === type;
      });
    }
  });
})();
