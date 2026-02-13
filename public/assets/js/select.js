(function () {
  function initSelects(root) {
    const selects = (root || document).querySelectorAll('[data-select]');

    selects.forEach(function (select) {
      if (select._dutchySelect) return; // already initialized
      select._dutchySelect = true;

      var trigger = select.querySelector('[data-select-trigger]');
      var menu = select.querySelector('[data-select-menu]');
      var input = select.querySelector('[data-select-input]');
      var valueDisplay = select.querySelector('[data-select-value]');
      var options = select.querySelectorAll('[data-select-option]');

      if (!trigger || !menu) return;

      // Toggle menu
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        // Close other selects
        document.querySelectorAll('[data-select-menu]').forEach(function (m) {
          if (m !== menu) m.classList.add('hidden');
        });
        document.querySelectorAll('[data-select-trigger][aria-expanded="true"]').forEach(function (t) {
          if (t !== trigger) t.setAttribute('aria-expanded', 'false');
        });

        var isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      });

      // Option selection
      options.forEach(function (option) {
        option.addEventListener('click', function () {
          var value = option.getAttribute('data-value');
          var label = option.textContent.trim();

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
          options.forEach(function (o) {
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
          select.dispatchEvent(new CustomEvent('change', { detail: { value: value, label: label } }));
        });
      });

      // Keyboard navigation
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          menu.classList.remove('hidden');
          trigger.setAttribute('aria-expanded', 'true');
          var first = menu.querySelector('[data-select-option]');
          if (first) first.focus();
        }
      });

      menu.addEventListener('keydown', function (e) {
        var focused = document.activeElement;
        var items = Array.from(options);
        var index = items.indexOf(focused);

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          var next = items[index + 1] || items[0];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = items[index - 1] || items[items.length - 1];
          prev.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (focused && focused.hasAttribute('data-select-option')) {
            focused.click();
          }
        } else if (e.key === 'Escape') {
          menu.classList.add('hidden');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });

      // Make options focusable
      options.forEach(function (option) {
        option.setAttribute('tabindex', '-1');
      });
    });
  }

  // Close all on outside click
  document.addEventListener('click', function () {
    document.querySelectorAll('[data-select-menu]').forEach(function (m) {
      m.classList.add('hidden');
    });
    document.querySelectorAll('[data-select-trigger]').forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-select-menu]').forEach(function (m) {
        m.classList.add('hidden');
      });
      document.querySelectorAll('[data-select-trigger]').forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Init on load
  initSelects();

  // Expose for dynamic content
  window.DutchySelect = { init: initSelects };
})();
