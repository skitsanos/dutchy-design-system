/**
 * Form Store - Reactive Form State Management
 *
 * Provides utilities for:
 * - Dependent dropdowns (field A changes → field B options update)
 * - Multi-step forms (step tracking, validation per step)
 * - Dynamic field visibility
 * - Form-wide state management
 *
 * Usage:
 *   import { createFormState, bindToElement, showWhen, hideWhen } from '/assets/js/stores/form-store.js';
 *
 *   const form = createFormState({
 *     provider: 'local',
 *     model: '',
 *     credentialId: ''
 *   });
 *
 *   // Bind store to form element (two-way binding)
 *   bindToElement(form, 'provider', document.querySelector('[name="provider"]'));
 *
 *   // Show/hide elements based on store value
 *   showWhen(form, 'provider', value => value !== 'local', document.getElementById('credential-field'));
 */

import { atom, map, computed } from '/assets/js/stores/index.js';

/**
 * Create a form state store with multiple fields
 * @param {Object} initialValues - Initial field values
 * @returns {import('nanostores').MapStore}
 */
export function createFormState(initialValues = {}) {
  return map(initialValues);
}

/**
 * Create a simple field store
 * @param {*} initialValue - Initial value
 * @returns {import('nanostores').WritableAtom}
 */
export function createFieldStore(initialValue) {
  return atom(initialValue);
}

/**
 * Bind a store field to a DOM element (two-way binding)
 * @param {import('nanostores').MapStore} store - Form state store
 * @param {string} key - Field key in the store
 * @param {HTMLElement} element - DOM element (input, select, textarea)
 * @returns {Function} Unsubscribe function
 */
export function bindToElement(store, key, element) {
  if (!element) return () => {};

  // Store → Element
  const unsubscribe = store.subscribe((state) => {
    const value = state[key];
    if (element.type === 'checkbox') {
      element.checked = Boolean(value);
    } else if (element.value !== value) {
      element.value = value ?? '';
    }
  });

  // Element → Store
  const eventType = element.type === 'checkbox' ? 'change' : 'input';
  const handler = (e) => {
    const newValue = element.type === 'checkbox' ? e.target.checked : e.target.value;
    store.setKey(key, newValue);
  };

  element.addEventListener(eventType, handler);
  element.addEventListener('change', handler); // Also listen to change for selects

  return () => {
    unsubscribe();
    element.removeEventListener(eventType, handler);
    element.removeEventListener('change', handler);
  };
}

/**
 * Bind a simple atom store to a DOM element
 * @param {import('nanostores').WritableAtom} store - Atom store
 * @param {HTMLElement} element - DOM element
 * @returns {Function} Unsubscribe function
 */
export function bindAtomToElement(store, element) {
  if (!element) return () => {};

  // Store → Element
  const unsubscribe = store.subscribe((value) => {
    if (element.type === 'checkbox') {
      element.checked = Boolean(value);
    } else if (element.value !== value) {
      element.value = value ?? '';
    }
  });

  // Element → Store
  const eventType = element.type === 'checkbox' ? 'change' : 'input';
  const handler = (e) => {
    const newValue = element.type === 'checkbox' ? e.target.checked : e.target.value;
    store.set(newValue);
  };

  element.addEventListener(eventType, handler);
  element.addEventListener('change', handler);

  return () => {
    unsubscribe();
    element.removeEventListener(eventType, handler);
    element.removeEventListener('change', handler);
  };
}

/**
 * Show element when condition is met
 * @param {import('nanostores').MapStore|import('nanostores').WritableAtom} store - Store to watch
 * @param {string|Function} keyOrCondition - Field key (for map) or condition function (for atom)
 * @param {Function|HTMLElement} conditionOrElement - Condition function (for map) or element (for atom)
 * @param {HTMLElement} [element] - Element to show/hide (for map)
 * @returns {Function} Unsubscribe function
 */
export function showWhen(store, keyOrCondition, conditionOrElement, element) {
  // Handle both map and atom stores
  if (typeof keyOrCondition === 'function') {
    // Atom store: showWhen(store, condition, element)
    const condition = keyOrCondition;
    const el = conditionOrElement;
    if (!el) return () => {};

    return store.subscribe((value) => {
      el.classList.toggle('hidden', !condition(value));
    });
  } else {
    // Map store: showWhen(store, key, condition, element)
    const key = keyOrCondition;
    const condition = conditionOrElement;
    const el = element;
    if (!el) return () => {};

    return store.subscribe((state) => {
      el.classList.toggle('hidden', !condition(state[key]));
    });
  }
}

/**
 * Hide element when condition is met
 * @param {import('nanostores').MapStore|import('nanostores').WritableAtom} store - Store to watch
 * @param {string|Function} keyOrCondition - Field key (for map) or condition function (for atom)
 * @param {Function|HTMLElement} conditionOrElement - Condition function (for map) or element (for atom)
 * @param {HTMLElement} [element] - Element to show/hide (for map)
 * @returns {Function} Unsubscribe function
 */
export function hideWhen(store, keyOrCondition, conditionOrElement, element) {
  if (typeof keyOrCondition === 'function') {
    const condition = keyOrCondition;
    const el = conditionOrElement;
    if (!el) return () => {};

    return store.subscribe((value) => {
      el.classList.toggle('hidden', condition(value));
    });
  } else {
    const key = keyOrCondition;
    const condition = conditionOrElement;
    const el = element;
    if (!el) return () => {};

    return store.subscribe((state) => {
      el.classList.toggle('hidden', condition(state[key]));
    });
  }
}

/**
 * Update element content based on store value
 * @param {import('nanostores').MapStore|import('nanostores').WritableAtom} store - Store to watch
 * @param {string|Function} keyOrFn - Field key (for map) or transform function (for atom)
 * @param {Function|HTMLElement} fnOrElement - Transform function (for map) or element (for atom)
 * @param {HTMLElement} [element] - Element to update (for map)
 * @returns {Function} Unsubscribe function
 */
export function updateContent(store, keyOrFn, fnOrElement, element) {
  if (typeof keyOrFn === 'function') {
    const fn = keyOrFn;
    const el = fnOrElement;
    if (!el) return () => {};

    return store.subscribe((value) => {
      el.textContent = fn(value);
    });
  } else {
    const key = keyOrFn;
    const fn = fnOrElement;
    const el = element;
    if (!el) return () => {};

    return store.subscribe((state) => {
      el.textContent = fn(state[key]);
    });
  }
}

/**
 * Create dependent options for a select element
 * @param {import('nanostores').MapStore|import('nanostores').WritableAtom} store - Store to watch
 * @param {string|Function} keyOrOptionsFn - Field key (for map) or options function (for atom)
 * @param {Function|HTMLSelectElement} optionsFnOrSelect - Options function (for map) or select element (for atom)
 * @param {HTMLSelectElement} [selectElement] - Select element to populate (for map)
 * @returns {Function} Unsubscribe function
 */
export function dependentOptions(store, keyOrOptionsFn, optionsFnOrSelect, selectElement) {
  if (typeof keyOrOptionsFn === 'function') {
    const optionsFn = keyOrOptionsFn;
    const select = optionsFnOrSelect;
    if (!select) return () => {};

    return store.subscribe((value) => {
      const options = optionsFn(value);
      const currentValue = select.value;

      select.innerHTML = '';
      options.forEach((opt) => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.disabled) option.disabled = true;
        select.appendChild(option);
      });

      // Try to preserve selection
      if (options.some((o) => o.value === currentValue)) {
        select.value = currentValue;
      }
    });
  } else {
    const key = keyOrOptionsFn;
    const optionsFn = optionsFnOrSelect;
    const select = selectElement;
    if (!select) return () => {};

    return store.subscribe((state) => {
      const options = optionsFn(state[key]);
      const currentValue = select.value;

      select.innerHTML = '';
      options.forEach((opt) => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.disabled) option.disabled = true;
        select.appendChild(option);
      });

      if (options.some((o) => o.value === currentValue)) {
        select.value = currentValue;
      }
    });
  }
}

// =============================================================================
// Multi-Step Form Support
// =============================================================================

/**
 * Create a multi-step form controller
 * @param {Object} config - Configuration
 * @param {number} config.totalSteps - Total number of steps
 * @param {Object} config.initialData - Initial form data
 * @param {Function} [config.onStepChange] - Callback when step changes
 * @param {Function} [config.validateStep] - Validation function per step
 * @returns {Object} Multi-step form controller
 */
export function createMultiStepForm(config) {
  const { totalSteps, initialData = {}, onStepChange, validateStep } = config;

  const $currentStep = atom(1);
  const $formData = map(initialData);
  const $errors = map({});

  const $canGoNext = computed([$currentStep], (step) => step < totalSteps);
  const $canGoPrev = computed([$currentStep], (step) => step > 1);
  const $isFirstStep = computed([$currentStep], (step) => step === 1);
  const $isLastStep = computed([$currentStep], (step) => step === totalSteps);
  const $progress = computed([$currentStep], (step) => (step / totalSteps) * 100);

  async function nextStep() {
    const currentStep = $currentStep.get();

    if (validateStep) {
      const errors = await validateStep(currentStep, $formData.get());
      if (errors && Object.keys(errors).length > 0) {
        $errors.set(errors);
        return false;
      }
    }

    $errors.set({});
    if (currentStep < totalSteps) {
      $currentStep.set(currentStep + 1);
      onStepChange?.(currentStep + 1, $formData.get());
    }
    return true;
  }

  function prevStep() {
    const currentStep = $currentStep.get();
    if (currentStep > 1) {
      $currentStep.set(currentStep - 1);
      $errors.set({});
      onStepChange?.(currentStep - 1, $formData.get());
    }
  }

  function goToStep(step) {
    if (step >= 1 && step <= totalSteps) {
      $currentStep.set(step);
      $errors.set({});
      onStepChange?.(step, $formData.get());
    }
  }

  function reset() {
    $currentStep.set(1);
    $formData.set(initialData);
    $errors.set({});
  }

  return {
    // Stores
    $currentStep,
    $formData,
    $errors,
    $canGoNext,
    $canGoPrev,
    $isFirstStep,
    $isLastStep,
    $progress,

    // Actions
    nextStep,
    prevStep,
    goToStep,
    reset,

    // Helpers
    setField: (key, value) => $formData.setKey(key, value),
    getField: (key) => $formData.get()[key],
    getData: () => $formData.get(),
    setError: (key, message) => $errors.setKey(key, message),
    clearErrors: () => $errors.set({}),
  };
}
