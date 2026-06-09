(() => {
  const searchInput = document.getElementById('adminSearch');
  const ordersBody = document.getElementById('adminOrdersBody');
  const noResults = document.getElementById('adminNoResults');
  const loadingButton = document.getElementById('skeletonToggle');
  const loadingOverlay = document.querySelector('[data-admin-loading]');

  if (searchInput && ordersBody) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      const rows = Array.from(ordersBody.querySelectorAll('tr'));
      let visibleCount = 0;

      rows.forEach((row) => {
        const rowText = (row.textContent || '').toLowerCase();
        const isVisible = rowText.includes(query);
        row.classList.toggle('hidden', !isVisible);
        if (isVisible) visibleCount += 1;
      });

      noResults?.classList.toggle('hidden', visibleCount > 0);
    });
  }

  if (loadingButton && loadingOverlay) {
    loadingButton.addEventListener('click', () => {
      const isLoading = loadingOverlay.classList.toggle('hidden') === false;
      const loadingLabel = loadingButton.dataset.loadingLabel || 'Hide Loading';
      const idleLabel = loadingButton.dataset.idleLabel || 'Toggle Loading';

      loadingButton.setAttribute('aria-pressed', String(isLoading));
      loadingButton.textContent = isLoading ? loadingLabel : idleLabel;
    });
  }
})();
