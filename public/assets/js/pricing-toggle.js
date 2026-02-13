(function() {
  const toggles = document.querySelectorAll('[data-pricing-toggle]');

  toggles.forEach((toggle) => {
    let isYearly = false;

    const buttons = toggle.querySelectorAll('button, [data-pricing-monthly], [data-pricing-yearly]');
    const monthlyBtn = toggle.querySelector('[data-pricing-monthly]');
    const yearlyBtn = toggle.querySelector('[data-pricing-yearly]');
    const toggleSwitch = toggle.querySelector('[data-pricing-switch]');

    function updatePrices() {
      // Find all price displays in the document
      const priceElements = document.querySelectorAll('[data-price-monthly][data-price-yearly]');

      priceElements.forEach((el) => {
        if (isYearly) {
          el.textContent = el.dataset.priceYearly;
        } else {
          el.textContent = el.dataset.priceMonthly;
        }
      });

      // Update period labels
      const periodElements = document.querySelectorAll('[data-period]');
      periodElements.forEach((el) => {
        el.textContent = isYearly ? '/year' : '/month';
      });

      // Update button active states
      if (monthlyBtn && yearlyBtn) {
        monthlyBtn.classList.toggle('text-foreground', !isYearly);
        monthlyBtn.classList.toggle('font-bold', !isYearly);
        monthlyBtn.classList.toggle('text-muted-foreground', isYearly);
        yearlyBtn.classList.toggle('text-foreground', isYearly);
        yearlyBtn.classList.toggle('font-bold', isYearly);
        yearlyBtn.classList.toggle('text-muted-foreground', !isYearly);
      }

      // Update toggle switch position
      if (toggleSwitch) {
        const thumb = toggleSwitch.querySelector('span');
        if (thumb) {
          if (isYearly) {
            thumb.classList.add('translate-x-6');
            thumb.classList.remove('translate-x-0');
          } else {
            thumb.classList.remove('translate-x-6');
            thumb.classList.add('translate-x-0');
          }
        }
      }
    }

    // Toggle switch click
    if (toggleSwitch) {
      toggleSwitch.addEventListener('click', () => {
        isYearly = !isYearly;
        updatePrices();
      });
    }

    // Monthly button click
    if (monthlyBtn) {
      monthlyBtn.addEventListener('click', () => {
        isYearly = false;
        updatePrices();
      });
    }

    // Yearly button click
    if (yearlyBtn) {
      yearlyBtn.addEventListener('click', () => {
        isYearly = true;
        updatePrices();
      });
    }

    // Initialize
    updatePrices();
  });
})();
