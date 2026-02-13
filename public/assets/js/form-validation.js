(function() {
  const forms = document.querySelectorAll('form[data-endpoint], form:has([data-validate])');

  if (!forms.length) return;

  const validators = {
    required(value, field) {
      if (!value) {
        const label = field.name || 'This field';
        return `${label.charAt(0).toUpperCase() + label.slice(1)} is required`;
      }
      const minLength = field.dataset.minLength;
      if (minLength && value.length < parseInt(minLength, 10)) {
        return `Must be at least ${minLength} characters`;
      }
      return null;
    },

    email(value) {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
      return null;
    },

    minlength(value, field) {
      const min = field.dataset.minLength || field.getAttribute('minlength');
      if (min && value.length < parseInt(min, 10)) {
        return `Must be at least ${min} characters`;
      }
      return null;
    },
  };

  function showError(form, fieldName, message) {
    const errorEl = form.querySelector(`[data-error="${fieldName}"]`);
    const inputEl = form.querySelector(`[name="${fieldName}"]`);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    if (inputEl) {
      inputEl.classList.add('border-destructive');
    }
  }

  function clearError(form, fieldName) {
    const errorEl = form.querySelector(`[data-error="${fieldName}"]`);
    const inputEl = form.querySelector(`[name="${fieldName}"]`);

    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    if (inputEl) {
      inputEl.classList.remove('border-destructive');
    }
  }

  forms.forEach((form) => {
    const validateFields = form.querySelectorAll('[data-validate]');

    // Clear errors on input (blur-based display, input-based clearing)
    validateFields.forEach((field) => {
      field.addEventListener('input', () => {
        clearError(form, field.name);
      });

      // Validate on blur
      field.addEventListener('blur', () => {
        const validationType = field.dataset.validate;
        const validator = validators[validationType];
        if (validator) {
          const error = validator(field.value.trim(), field);
          if (error) {
            showError(form, field.name, error);
          }
        }
      });
    });

    // Validate all on form submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let hasErrors = false;

      validateFields.forEach((field) => {
        const validationType = field.dataset.validate;
        const validator = validators[validationType];

        if (validator) {
          const error = validator(field.value.trim(), field);
          if (error) {
            showError(form, field.name, error);
            hasErrors = true;
          }
        }
      });

      if (hasErrors) return;

      // Collect form data as JSON
      const formData = new FormData(form);
      const payload = {};
      formData.forEach((value, key) => {
        payload[key] = value;
      });

      const endpoint = form.dataset.endpoint || form.action;

      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        // Show success toast if available
        if (window.toast) {
          window.toast.show('Form submitted successfully!', 'success');
        }
      } catch (err) {
        if (window.toast) {
          window.toast.show('Submission failed. Please try again.', 'error');
        }
      }
    });
  });
})();
