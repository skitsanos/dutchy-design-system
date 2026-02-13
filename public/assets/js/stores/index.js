/**
 * Nano Stores - Reactive State Management (Vanilla JS)
 *
 * This module provides reactive state management for dynamic form interactions.
 * Lightweight implementation inspired by Nano Stores, no dependencies.
 *
 * Usage:
 *   import { atom, computed, map } from '/assets/js/stores/index.js';
 *
 *   const $provider = atom('local');
 *   $provider.subscribe(value => console.log('Provider changed:', value));
 *   $provider.set('openai');
 */

/**
 * Create an atom store (single value)
 * @param {*} initialValue - Initial store value
 * @returns {{ get: () => *, set: (value: *) => void, subscribe: (fn: Function) => Function }}
 */
export function atom(initialValue) {
  let value = initialValue;
  const listeners = new Set();

  return {
    get() {
      return value;
    },
    set(newValue) {
      if (value !== newValue) {
        value = newValue;
        listeners.forEach((fn) => fn(value));
      }
    },
    subscribe(fn) {
      listeners.add(fn);
      fn(value); // Call immediately with current value
      return () => listeners.delete(fn);
    },
  };
}

/**
 * Create a computed store derived from other stores
 * @param {Array} stores - Array of stores to derive from
 * @param {Function} fn - Computation function
 * @returns {{ get: () => *, subscribe: (fn: Function) => Function }}
 */
export function computed(stores, fn) {
  const listeners = new Set();
  let cachedValue;

  function compute() {
    const values = stores.map((s) => s.get());
    return fn(...values);
  }

  cachedValue = compute();

  // Subscribe to all source stores
  stores.forEach((store) => {
    store.subscribe(() => {
      const newValue = compute();
      if (cachedValue !== newValue) {
        cachedValue = newValue;
        listeners.forEach((listener) => listener(cachedValue));
      }
    });
  });

  return {
    get() {
      return cachedValue;
    },
    subscribe(fn) {
      listeners.add(fn);
      fn(cachedValue); // Call immediately with current value
      return () => listeners.delete(fn);
    },
  };
}

/**
 * Create a map store (object with reactive properties)
 * @param {Object} initialValue - Initial object value
 * @returns {{ get: () => Object, set: (value: Object) => void, setKey: (key: string, value: *) => void, subscribe: (fn: Function) => Function }}
 */
export function map(initialValue = {}) {
  let value = { ...initialValue };
  const listeners = new Set();

  function notify() {
    listeners.forEach((fn) => fn(value));
  }

  return {
    get() {
      return value;
    },
    set(newValue) {
      value = { ...newValue };
      notify();
    },
    setKey(key, newKeyValue) {
      if (value[key] !== newKeyValue) {
        value = { ...value, [key]: newKeyValue };
        notify();
      }
    },
    subscribe(fn) {
      listeners.add(fn);
      fn(value); // Call immediately with current value
      return () => listeners.delete(fn);
    },
  };
}

// Aliases for backward compatibility
export const createStore = atom;
export const createComputed = computed;
export const createMapStore = map;
