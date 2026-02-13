(function() {
  const tables = document.querySelectorAll('[data-sortable]');

  tables.forEach((table) => {
    const sortableHeaders = table.querySelectorAll('th[data-sort]');

    sortableHeaders.forEach((th) => {
      th.addEventListener('click', () => {
        const tbody = table.querySelector('tbody');
        if (!tbody) return;

        const key = th.dataset.sort;
        const currentDir = th.dataset.sortDir;
        const newDir = currentDir === 'asc' ? 'desc' : 'asc';

        // Clear sort direction from all headers in this table
        sortableHeaders.forEach((h) => {
          delete h.dataset.sortDir;
          const icon = h.querySelector('.sort-icon');
          if (icon) {
            icon.style.opacity = '0.3';
            icon.style.transform = '';
          }
        });

        // Set new sort direction
        th.dataset.sortDir = newDir;
        const sortIcon = th.querySelector('.sort-icon');
        if (sortIcon) {
          sortIcon.style.opacity = '1';
          sortIcon.style.transform = newDir === 'desc' ? 'rotate(180deg)' : '';
        }

        // Get rows and sort
        const rows = Array.from(tbody.querySelectorAll('tr'));

        rows.sort((a, b) => {
          let aVal = getCellValue(a, key);
          let bVal = getCellValue(b, key);

          // Try parsing as number
          const aNum = parseFloat(aVal);
          const bNum = parseFloat(bVal);
          if (!isNaN(aNum) && !isNaN(bNum)) {
            return newDir === 'asc' ? aNum - bNum : bNum - aNum;
          }

          // Try parsing as date
          const aDate = Date.parse(aVal);
          const bDate = Date.parse(bVal);
          if (!isNaN(aDate) && !isNaN(bDate)) {
            return newDir === 'asc' ? aDate - bDate : bDate - aDate;
          }

          // Default: string comparison
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
          if (newDir === 'asc') {
            return aVal.localeCompare(bVal);
          }
          return bVal.localeCompare(aVal);
        });

        // Re-append sorted rows
        rows.forEach((row) => tbody.appendChild(row));
      });
    });
  });

  /**
   * Extract cell value from a row for sorting
   * First tries data-row JSON, then falls back to data attributes, then td text content
   */
  function getCellValue(row, key) {
    // Try data-row JSON attribute
    const rowData = row.dataset.row;
    if (rowData) {
      try {
        const parsed = JSON.parse(rowData);
        if (parsed[key] !== undefined) return String(parsed[key]);
      } catch (e) {
        // ignore parse errors
      }
    }

    // Try direct data attribute (e.g., data-name, data-email)
    const directAttr = row.dataset[key] || row.dataset[key.toLowerCase()];
    if (directAttr) return directAttr;

    // Fallback: find the column index by matching header data-sort key
    const table = row.closest('table');
    if (table) {
      const headers = Array.from(table.querySelectorAll('th[data-sort]'));
      const headerIndex = headers.findIndex((h) => h.dataset.sort === key);
      if (headerIndex !== -1) {
        const allHeaders = Array.from(table.querySelectorAll('th'));
        const colIndex = allHeaders.indexOf(headers[headerIndex]);
        const cell = row.querySelectorAll('td')[colIndex];
        if (cell) return cell.textContent.trim();
      }
    }

    return '';
  }
})();
