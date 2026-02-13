(function() {
  // Handle single-open accordion behavior
  // When data-accordion="single", only one <details> can be open at a time
  const accordions = document.querySelectorAll('[data-accordion="single"]');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
      const target = e.target.closest('details');
      if (!target) return;

      // Close all other open details within this accordion
      const allDetails = accordion.querySelectorAll('details[open]');
      allDetails.forEach((d) => {
        if (d !== target) {
          d.removeAttribute('open');
        }
      });
    });
  });

  // Rotate chevron icons for all accordions (including non-single)
  const allAccordions = document.querySelectorAll('[data-accordion]');

  allAccordions.forEach((accordion) => {
    const details = accordion.querySelectorAll('details');
    details.forEach((detail) => {
      const icon = detail.querySelector('[data-accordion-icon]');
      if (!icon) return;

      detail.addEventListener('toggle', () => {
        if (detail.open) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = '';
        }
      });
    });
  });
})();
