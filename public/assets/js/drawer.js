// Drawer functionality is handled by modal.js via native <dialog> elements.
// This file is kept for backward compatibility with pages that use the
// data-drawer-open / data-drawer-close / data-drawer-panel API.
(function() {
  document.querySelectorAll('[data-drawer-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const drawerId = trigger.dataset.drawerOpen;
      const dialog = document.getElementById(drawerId);
      if (dialog && dialog.tagName === 'DIALOG') {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll('[data-drawer-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialog = btn.closest('dialog');
      if (dialog) dialog.close();
    });
  });
})();
