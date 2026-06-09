(() => {
  function initSelects(root) {
    const selects = (root || document).querySelectorAll('[data-select]');

    selects.forEach((select) => {
      if (select._dutchySelect) return; // already initialized
      select._dutchySelect = true;

      const trigger = select.querySelector('[data-select-trigger]');
      const menu = select.querySelector('[data-select-menu]');
      const input = select.querySelector('[data-select-input]');
      const valueDisplay = select.querySelector('[data-select-value]');
      const options = select.querySelectorAll('[data-select-option]');

      if (!trigger || !menu) return;

      // Toggle menu
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other selects
        document.querySelectorAll('[data-select-menu]').forEach((m) => {
          if (m !== menu) m.classList.add('hidden');
        });
        document.querySelectorAll('[data-select-trigger][aria-expanded="true"]').forEach((t) => {
          if (t !== trigger) t.setAttribute('aria-expanded', 'false');
        });

        const isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      });

      // Option selection
      options.forEach((option) => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('data-value');
          const label = option.textContent.trim();

          // Update hidden input
          if (input) input.value = value;

          // Update display
          if (valueDisplay) {
            valueDisplay.textContent = label;
            valueDisplay.classList.remove('text-muted-foreground');
          }

          // Update data attribute
          select.setAttribute('data-value', value);

          // Update aria-selected
          options.forEach((o) => {
            o.setAttribute('aria-selected', 'false');
            o.classList.remove('bg-muted', 'font-bold');
          });
          option.setAttribute('aria-selected', 'true');
          option.classList.add('bg-muted', 'font-bold');

          // Close menu
          menu.classList.add('hidden');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();

          // Dispatch change event
          select.dispatchEvent(
            new CustomEvent('change', { detail: { value: value, label: label } }),
          );
        });
      });

      // Keyboard navigation
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          menu.classList.remove('hidden');
          trigger.setAttribute('aria-expanded', 'true');
          const first = menu.querySelector('[data-select-option]');
          if (first) first.focus();
        }
      });

      menu.addEventListener('keydown', (e) => {
        const focused = document.activeElement;
        const items = Array.from(options);
        const index = items.indexOf(focused);

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = items[index + 1] || items[0];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = items[index - 1] || items[items.length - 1];
          prev.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (focused?.hasAttribute('data-select-option')) {
            focused.click();
          }
        } else if (e.key === 'Escape') {
          menu.classList.add('hidden');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });

      // Make options focusable
      options.forEach((option) => {
        option.setAttribute('tabindex', '-1');
      });
    });
  }

  // Close all on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('[data-select-menu]').forEach((m) => {
      m.classList.add('hidden');
    });
    document.querySelectorAll('[data-select-trigger]').forEach((t) => {
      t.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-select-menu]').forEach((m) => {
        m.classList.add('hidden');
      });
      document.querySelectorAll('[data-select-trigger]').forEach((t) => {
        t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Init on load
  initSelects();

  // Expose for dynamic content
  window.DutchySelect = { init: initSelects };
})();
