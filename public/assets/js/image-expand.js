/**
 * Dutchy Image Expand
 * Fullscreen lightbox for images with [data-expand] attribute.
 */
(() => {
  const overlay = document.createElement('div');
  overlay.id = 'dutchy-lightbox';
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: '0',
    zIndex: '999',
    background: 'hsla(25, 20%, 6%, 0.95)',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    cursor: 'zoom-out',
  });

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('aria-label', 'Close');
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    width: '3rem',
    height: '3rem',
    background: 'hsl(40, 30%, 97%)',
    color: 'hsl(25, 20%, 6%)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '10',
    transition: 'background 0.15s, color 0.15s',
  });
  closeBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.background = 'hsl(25, 95%, 53%)';
    closeBtn.style.color = '#fff';
  });
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.background = 'hsl(40, 30%, 97%)';
    closeBtn.style.color = 'hsl(25, 20%, 6%)';
  });

  const img = document.createElement('img');
  Object.assign(img.style, {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  });
  img.alt = '';

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt || '';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    img.src = '';
  };

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display !== 'none') close();
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-expand]');
    if (!btn) return;
    const container = btn.closest('[data-image]') || btn.parentElement;
    const target = container?.querySelector('img');
    if (target) open(target.src, target.alt);
  });
})();
