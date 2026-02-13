/**
 * DutchyForm — Declarative form validation inspired by Ant Design's rule-based approach.
 * Vanilla JS, zero dependencies. Exposed as a global IIFE.
 */
const DutchyForm = (() => {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateUrl(val) {
    try { new URL(val); return true; } catch { return false; }
  }

  const TYPE_VALIDATORS = {
    email: (v) => EMAIL_RE.test(v),
    url: (v) => validateUrl(v),
    number: (v) => !isNaN(v) && v.trim() !== '',
  };

  function getField(form, name) {
    return form.querySelector(`[name="${name}"]`);
  }

  function getWrapper(field) {
    return field.closest('[data-field]') || field.parentElement;
  }

  function getOrCreateError(field, name) {
    const wrapper = getWrapper(field);
    let el = wrapper.querySelector(`[data-field-error="${name}"]`);
    if (!el) {
      el = document.createElement('p');
      el.setAttribute('data-field-error', name);
      el.id = `error-${name}`;
      el.setAttribute('role', 'alert');
      wrapper.appendChild(el);
    }
    return el;
  }

  function showError(field, name, message) {
    const wrapper = getWrapper(field);
    wrapper.classList.add('dutchy-field-error');
    wrapper.classList.remove('dutchy-field-success');
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', `error-${name}`);
    const el = getOrCreateError(field, name);
    el.textContent = message;
    el.style.display = '';
  }

  function showSuccess(field, name) {
    const wrapper = getWrapper(field);
    wrapper.classList.remove('dutchy-field-error');
    wrapper.classList.add('dutchy-field-success');
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    const el = wrapper.querySelector(`[data-field-error="${name}"]`);
    if (el) { el.textContent = ''; el.style.display = 'none'; }
  }

  function clearField(field, name) {
    const wrapper = getWrapper(field);
    wrapper.classList.remove('dutchy-field-error', 'dutchy-field-success');
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    const el = wrapper.querySelector(`[data-field-error="${name}"]`);
    if (el) { el.textContent = ''; el.style.display = 'none'; }
    const spinner = wrapper.querySelector('.dutchy-validating-spinner');
    if (spinner) spinner.remove();
  }

  function showSpinner(field, name) {
    const wrapper = getWrapper(field);
    let el = getOrCreateError(field, name);
    el.innerHTML = '<span class="dutchy-validating-spinner"></span> Validating\u2026';
    el.style.display = '';
    wrapper.classList.remove('dutchy-field-error', 'dutchy-field-success');
  }

  async function runRules(rules, value) {
    for (const rule of rules) {
      if (rule.required && (!value || value.trim() === '')) {
        return rule.message || 'This field is required';
      }
      if (!value || value.trim() === '') continue;

      if (rule.type && TYPE_VALIDATORS[rule.type]) {
        if (!TYPE_VALIDATORS[rule.type](value)) {
          return rule.message || `Invalid ${rule.type}`;
        }
      }
      if (typeof rule.min === 'number' && value.length < rule.min) {
        return rule.message || `Must be at least ${rule.min} characters`;
      }
      if (typeof rule.max === 'number' && value.length > rule.max) {
        return rule.message || `Must be at most ${rule.max} characters`;
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        return rule.message || 'Invalid format';
      }
      if (typeof rule.validator === 'function') {
        try {
          const result = await rule.validator(value);
          if (result === false) return rule.message || 'Validation failed';
          if (typeof result === 'string') return result;
        } catch {
          return rule.message || 'Validation failed';
        }
      }
    }
    return null;
  }

  function create(formEl, options = {}) {
    const rules = options.rules || {};
    const trigger = options.validateTrigger || 'onBlur';

    const eventName = trigger === 'onChange' ? 'input' : trigger === 'onSubmit' ? null : 'blur';

    // Bind per-field events
    if (eventName) {
      for (const name of Object.keys(rules)) {
        const field = getField(formEl, name);
        if (!field) continue;
        field.addEventListener(eventName, () => instance.validateField(name));
      }
    }

    // Intercept submit
    formEl.addEventListener('submit', async (e) => {
      e.preventDefault();
      const result = await instance.validateFields();
      if (result.valid) {
        formEl.dispatchEvent(new CustomEvent('dutchy:submit', { detail: result.values }));
      }
    });

    // Listen to reset
    formEl.addEventListener('reset', () => {
      setTimeout(() => instance.resetFields(), 0);
    });

    const instance = {
      async validateField(name) {
        const field = getField(formEl, name);
        if (!field) return { valid: true, message: null };
        const value = field.value;
        const fieldRules = rules[name];
        if (!fieldRules) return { valid: true, message: null };

        const hasAsync = fieldRules.some((r) => typeof r.validator === 'function');
        if (hasAsync) showSpinner(field, name);

        const message = await runRules(fieldRules, value);
        if (message) {
          showError(field, name, message);
          return { valid: false, message };
        }
        showSuccess(field, name);
        return { valid: true, message: null };
      },

      async validateFields() {
        const errors = {};
        const values = {};
        let valid = true;

        for (const name of Object.keys(rules)) {
          const field = getField(formEl, name);
          if (!field) continue;
          values[name] = field.value;
          const result = await instance.validateField(name);
          if (!result.valid) {
            valid = false;
            errors[name] = result.message;
          }
        }

        return { valid, errors, values };
      },

      resetFields() {
        for (const name of Object.keys(rules)) {
          const field = getField(formEl, name);
          if (field) clearField(field, name);
        }
      },

      getFieldsValue() {
        const values = {};
        for (const name of Object.keys(rules)) {
          const field = getField(formEl, name);
          if (field) values[name] = field.value;
        }
        return values;
      },

      setFieldError(name, message) {
        const field = getField(formEl, name);
        if (field) showError(field, name, message);
      },
    };

    return instance;
  }

  return { create };
})();
