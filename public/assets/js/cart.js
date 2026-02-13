(function() {
  // Quantity increment buttons
  document.querySelectorAll('[data-qty-plus]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('[data-cart-item]') || btn.parentElement;
      const display = row.querySelector('[data-qty-display]');
      if (!display) return;

      let qty = parseInt(display.textContent, 10) || 0;
      qty++;
      display.textContent = qty;

      updateTotals();
    });
  });

  // Quantity decrement buttons
  document.querySelectorAll('[data-qty-minus]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('[data-cart-item]') || btn.parentElement;
      const display = row.querySelector('[data-qty-display]');
      if (!display) return;

      let qty = parseInt(display.textContent, 10) || 0;
      if (qty > 1) {
        qty--;
        display.textContent = qty;
      }

      updateTotals();
    });
  });

  // Remove buttons
  document.querySelectorAll('[data-cart-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('[data-cart-item]');
      if (row) {
        row.remove();
        updateTotals();
      }
    });
  });

  function updateTotals() {
    let subtotal = 0;

    document.querySelectorAll('[data-cart-item]').forEach((item) => {
      const priceEl = item.querySelector('[data-item-price]');
      const qtyEl = item.querySelector('[data-qty-display]');

      if (priceEl && qtyEl) {
        const price = parseFloat(priceEl.dataset.itemPrice) || 0;
        const qty = parseInt(qtyEl.textContent, 10) || 0;
        const lineTotal = price * qty;

        // Update line total if there is an element for it
        const lineTotalEl = item.querySelector('[data-line-total]');
        if (lineTotalEl) {
          lineTotalEl.textContent = `$${lineTotal.toFixed(2)}`;
        }

        subtotal += lineTotal;
      }
    });

    // Update subtotal display
    const subtotalEl = document.querySelector('[data-cart-subtotal]');
    if (subtotalEl) {
      subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Update total display (subtotal + tax/shipping if present)
    const taxEl = document.querySelector('[data-cart-tax]');
    const shippingEl = document.querySelector('[data-cart-shipping]');
    const totalEl = document.querySelector('[data-cart-total]');

    let tax = 0;
    let shipping = 0;

    if (taxEl) {
      tax = parseFloat(taxEl.dataset.cartTax) || 0;
    }
    if (shippingEl) {
      shipping = parseFloat(shippingEl.dataset.cartShipping) || 0;
    }

    if (totalEl) {
      totalEl.textContent = `$${(subtotal + tax + shipping).toFixed(2)}`;
    }

    // Update item count
    const countEl = document.querySelector('[data-cart-count]');
    if (countEl) {
      let totalQty = 0;
      document.querySelectorAll('[data-qty-display]').forEach((el) => {
        totalQty += parseInt(el.textContent, 10) || 0;
      });
      countEl.textContent = totalQty;
    }
  }
})();
