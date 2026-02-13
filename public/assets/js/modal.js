(function() {
  // Open modal/drawer via [data-open-modal] — uses native <dialog>
  document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.dataset.openModal;
      const dialog = document.getElementById(modalId);
      if (dialog && dialog.tagName === 'DIALOG') {
        dialog.showModal();
      }
    });
  });

  // Close via [data-close-modal] buttons
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialog = btn.closest('dialog');
      if (dialog) dialog.close();
    });
  });

  // Close on backdrop click (click on <dialog> itself, not its children)
  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  });
})();
