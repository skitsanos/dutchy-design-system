(function() {
  const toggleButtons = document.querySelectorAll('[data-code-toggle]');

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Find the parent container that holds both preview and code panels
      const container = btn.closest('[data-code-container]') || btn.parentElement.parentElement;
      if (!container) return;

      const target = btn.dataset.codeToggle; // 'preview' or 'code'
      const previewPanel = container.querySelector('[data-preview]');
      const codePanel = container.querySelector('[data-code]');
      const allButtons = container.querySelectorAll('[data-code-toggle]');

      // Update button active states
      allButtons.forEach((b) => {
        const isActive = b.dataset.codeToggle === target;
        b.classList.toggle('bg-foreground', isActive);
        b.classList.toggle('text-background', isActive);
        b.classList.toggle('bg-transparent', !isActive);
        b.classList.toggle('text-foreground', !isActive);
        b.classList.toggle('text-muted-foreground', !isActive);
      });

      // Show/hide panels
      if (previewPanel) {
        previewPanel.classList.toggle('hidden', target !== 'preview');
      }
      if (codePanel) {
        codePanel.classList.toggle('hidden', target !== 'code');
      }
    });
  });
})();
