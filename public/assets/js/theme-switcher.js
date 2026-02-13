(function() {
  const STORAGE_KEY = 'dutchy-theme';

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme && savedTheme !== 'orange') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Handle theme switch buttons
  const buttons = document.querySelectorAll('[data-theme-switch]');

  function updateActive(activeTheme) {
    buttons.forEach((b) => {
      const isActive = b.dataset.themeSwitch === activeTheme;
      b.style.outline = isActive ? '3px solid hsl(25 20% 6%)' : 'none';
      b.style.outlineOffset = isActive ? '2px' : '0';
    });
  }

  // Set initial active state
  const currentTheme = savedTheme || 'orange';
  updateActive(currentTheme);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.themeSwitch;

      // Orange is the default — remove attribute so :root applies
      if (theme === 'orange') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }

      // Persist to localStorage
      localStorage.setItem(STORAGE_KEY, theme);

      // Update active states
      updateActive(theme);
    });
  });
})();
