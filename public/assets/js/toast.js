window.toast = {
  /**
   * Show a toast notification
   * @param {string} message - The message to display
   * @param {string} type - Type: 'info' | 'success' | 'error' | 'warning'
   * @param {number} duration - Auto-dismiss duration in ms (default 5000)
   * @param {string} position - Position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
   */
  show(message, type = 'info', duration = 5000, position = 'bottom-right') {
    // Find container by data attribute, fall back to legacy id
    const container =
      document.querySelector(`[data-toast-container="${position}"]`) ||
      document.getElementById('toast-container');
    if (!container) return;

    const colors = {
      info: 'bg-foreground text-background',
      success: 'bg-success text-success-foreground',
      error: 'bg-destructive text-destructive-foreground',
      warning: 'bg-warning text-warning-foreground',
    };

    const icons = {
      info: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      success: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      error: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      warning: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>',
    };

    const isLeft = position.includes('left');
    const colorClass = colors[type] || colors.info;
    const iconSvg = icons[type] || icons.info;
    const slideOut = isLeft ? 'translateX(-100%)' : 'translateX(100%)';

    const toast = document.createElement('div');
    toast.className = `${colorClass} px-6 py-4 font-bold uppercase text-sm border-l-4 border-background/20 flex items-center gap-3 animate-slide-in`;
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.innerHTML = `
      <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">${iconSvg}</svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Auto-dismiss
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = slideOut;
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
};

// Bind data-toast-trigger buttons
document.querySelectorAll('[data-toast-trigger]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const variant = btn.dataset.toastVariant || 'info';
    const title = btn.dataset.toastTitle || '';
    const message = btn.dataset.toastMessage || '';
    const position = btn.dataset.toastPosition || 'bottom-right';
    const text = title ? `${title}: ${message}` : message;
    window.toast.show(text, variant, 5000, position);
  });
});
