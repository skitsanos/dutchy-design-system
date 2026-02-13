(function() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('hidden');

    nav.classList.toggle('hidden');

    if (menuIcon) menuIcon.classList.toggle('hidden');
    if (closeIcon) closeIcon.classList.toggle('hidden');

    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !nav.classList.contains('hidden')) {
      nav.classList.add('hidden');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
