(function() {
  // Handle [data-badge-close] buttons
  document.querySelectorAll('[data-badge-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const badge = btn.closest('[data-badge]') || btn.parentElement;
      if (badge) badge.remove();
    });
  });

  // Handle [data-dismiss="badge"] buttons
  document.querySelectorAll('[data-dismiss="badge"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const badge = btn.closest('[data-badge]') || btn.parentElement;
      if (badge) badge.remove();
    });
  });

  // Handle [data-dismiss="alert"] buttons
  document.querySelectorAll('[data-dismiss="alert"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const alert = btn.closest('[role="alert"]') || btn.parentElement;
      if (alert) {
        alert.style.opacity = '0';
        alert.style.transition = 'opacity 0.2s ease';
        setTimeout(() => alert.remove(), 200);
      }
    });
  });
})();
