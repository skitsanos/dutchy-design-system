(function() {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');
    if (!trigger || !menu) return;

    // Toggle menu on trigger click
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other open dropdowns
      dropdowns.forEach((other) => {
        if (other !== dropdown) {
          const otherMenu = other.querySelector('[data-dropdown-menu]');
          if (otherMenu) otherMenu.classList.add('hidden');
        }
      });

      menu.classList.toggle('hidden');
    });

    // Close when clicking a menu item
    menu.querySelectorAll('button, a').forEach((item) => {
      item.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  });

  // Close all dropdowns on outside click
  document.addEventListener('click', () => {
    dropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector('[data-dropdown-menu]');
      if (menu) menu.classList.add('hidden');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach((dropdown) => {
        const menu = dropdown.querySelector('[data-dropdown-menu]');
        if (menu) menu.classList.add('hidden');
      });
    }
  });
})();
