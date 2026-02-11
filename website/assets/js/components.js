// Custom Select
document.querySelectorAll('.dutchy-select').forEach(select => {
  const trigger = select.querySelector('.dutchy-select-trigger');
  const dropdown = select.querySelector('.dutchy-select-dropdown');
  const valueDisplay = select.querySelector('.dutchy-select-value');
  const icon = select.querySelector('.dutchy-select-icon');
  const options = select.querySelectorAll('.dutchy-select-option');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !dropdown.classList.contains('hidden');

    document.querySelectorAll('.dutchy-select-dropdown').forEach(d => d.classList.add('hidden'));
    document.querySelectorAll('.dutchy-select-icon').forEach(i => i.style.transform = '');
    document.querySelectorAll('.dutchy-select-trigger').forEach(t => t.classList.remove('border-primary'));

    if (!isOpen) {
      dropdown.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
      trigger.classList.add('border-primary');
    }
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      select.dataset.value = option.dataset.value;
      valueDisplay.textContent = option.textContent;
      valueDisplay.classList.remove('text-muted-foreground');
      dropdown.classList.add('hidden');
      icon.style.transform = '';
      trigger.classList.remove('border-primary');
      options.forEach(o => o.classList.remove('bg-muted'));
      option.classList.add('bg-muted');
    });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dutchy-select-dropdown').forEach(d => d.classList.add('hidden'));
  document.querySelectorAll('.dutchy-select-icon').forEach(i => i.style.transform = '');
  document.querySelectorAll('.dutchy-select-trigger').forEach(t => t.classList.remove('border-primary'));
});

// Dismissible alerts
document.querySelectorAll('[data-dismiss="alert"]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('[role="alert"]').remove();
  });
});

// Single-open accordion
document.querySelectorAll('[data-accordion="single"]').forEach(accordion => {
  accordion.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        accordion.querySelectorAll('details').forEach(d => {
          if (d !== detail) d.removeAttribute('open');
        });
      }
    });
  });
});

// Tabs
document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
  const tabs = tabGroup.querySelectorAll('[role="tab"]');
  const panels = tabGroup.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('border-primary', 'text-foreground', 'bg-background');
        t.classList.add('border-transparent', 'text-muted-foreground');
      });
      tab.setAttribute('aria-selected', 'true');
      tab.classList.add('border-primary', 'text-foreground');
      tab.classList.remove('border-transparent', 'text-muted-foreground');

      // For boxed tabs
      if (tabGroup.dataset.tabs === 'boxed') {
        tabs.forEach(t => t.classList.remove('bg-background'));
        tab.classList.add('bg-background');
      }

      panels.forEach(p => p.classList.add('hidden'));
      if (panels[i]) panels[i].classList.remove('hidden');
    });
  });
});

// Toast system
const toastContainer = document.getElementById('toast-container');

function showToast({ title, message, variant = 'info', duration = 4000 }) {
  if (!toastContainer) return;
  const toast = document.createElement('div');

  const borderColor = {
    success: 'border-[hsl(142,76%,36%)]',
    error: 'border-destructive',
    info: 'border-primary',
    warning: 'border-[hsl(45,93%,47%)]',
  }[variant] || 'border-border';

  toast.className = `border-2 ${borderColor} bg-background p-4 shadow-md min-w-[320px] flex items-start gap-3`;
  toast.style.animation = 'toast-in 300ms ease-out';
  toast.setAttribute('role', variant === 'error' ? 'alert' : 'status');

  toast.innerHTML = `
    <div class="flex-1">
      <p class="font-bold text-sm">${title}</p>
      <p class="text-sm text-muted-foreground">${message}</p>
    </div>
    <button class="shrink-0 text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  `;

  const dismiss = () => {
    toast.style.animation = 'toast-out 300ms ease-in forwards';
    toast.addEventListener('animationend', () => toast.remove());
  };

  toast.querySelector('button').addEventListener('click', dismiss);
  toastContainer.appendChild(toast);

  if (duration > 0) setTimeout(dismiss, duration);
}

// Modal / Drawer helpers
document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.openModal);
    if (target) target.showModal();
  });
});

document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('dialog').close();
  });
});

// Close modal on backdrop click
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
});

// Dropdown menus
document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
  const trigger = dropdown.querySelector('[data-dropdown-trigger]');
  const menu = dropdown.querySelector('[data-dropdown-menu]');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    // Close all other dropdowns
    document.querySelectorAll('[data-dropdown-menu]').forEach(m => {
      if (m !== menu) m.classList.add('hidden');
    });
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('[data-dropdown-menu]').forEach(m => m.classList.add('hidden'));
});

// Sortable table
document.querySelectorAll('[data-sortable]').forEach(table => {
  const headers = table.querySelectorAll('th[data-sort]');
  const tbody = table.querySelector('tbody');
  let sortCol = null;
  let sortDir = 'asc';

  headers.forEach(th => {
    th.addEventListener('click', () => {
      const col = th.cellIndex;
      if (sortCol === col) {
        sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        sortCol = col;
        sortDir = 'asc';
      }

      const rows = Array.from(tbody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        const aVal = a.cells[col]?.textContent.trim() || '';
        const bVal = b.cells[col]?.textContent.trim() || '';
        const cmp = aVal.localeCompare(bVal, undefined, { numeric: true });
        return sortDir === 'asc' ? cmp : -cmp;
      });
      rows.forEach(row => tbody.appendChild(row));
    });
  });
});

// Command palette (Ctrl+K)
const cmdPalette = document.getElementById('command-palette');
if (cmdPalette) {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (cmdPalette.open) cmdPalette.close();
      else cmdPalette.showModal();
    }
  });
}
