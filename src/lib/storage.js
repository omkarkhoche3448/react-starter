/**
 * Local storage utility functions
 */

import { STORAGE_KEYS, THEMES } from './constants.js';

/**
 * Safely gets an item from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Parsed value or default value
 */
export function getStorageItem(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Safely sets an item in localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {boolean} Success status
 */
export function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Error writing localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Removes an item from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */
export function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`Error removing localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Clears all items from localStorage
 * @returns {boolean} Success status
 */
export function clearStorage() {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.warn('Error clearing localStorage:', error);
    return false;
  }
}

// Generic storage helpers for common patterns

/**
 * Gets a boolean preference with fallback
 * @param {string} key - Storage key
 * @param {boolean} defaultValue - Default boolean value
 * @returns {boolean} Boolean preference
 */
export function getBooleanPreference(key, defaultValue = false) {
  const value = getStorageItem(key);
  return typeof value === 'boolean' ? value : defaultValue;
}

/**
 * Sets a boolean preference
 * @param {string} key - Storage key
 * @param {boolean} value - Boolean value to store
 * @returns {boolean} Success status
 */
export function setBooleanPreference(key, value) {
  return setStorageItem(key, Boolean(value));
}

// User preferences storage

/**
 * Gets user preferences
 * @returns {object} User preferences object
 */
export function getUserPreferences() {
  return getStorageItem(STORAGE_KEYS.USER_PREFERENCES, {});
}

/**
 * Sets user preferences
 * @param {object} preferences - Preferences object
 * @returns {boolean} Success status
 */
export function setUserPreferences(preferences) {
  return setStorageItem(STORAGE_KEYS.USER_PREFERENCES, preferences);
}

/**
 * Updates a specific user preference
 * @param {string} key - Preference key
 * @param {*} value - Preference value
 * @returns {boolean} Success status
 */
export function updateUserPreference(key, value) {
  const preferences = getUserPreferences();
  preferences[key] = value;
  return setUserPreferences(preferences);
}

// App state storage

/**
 * Gets app state
 * @returns {object} App state object
 */
export function getAppState() {
  return getStorageItem(STORAGE_KEYS.APP_STATE, {});
}

/**
 * Sets app state
 * @param {object} state - State object
 * @returns {boolean} Success status
 */
export function setAppState(state) {
  return setStorageItem(STORAGE_KEYS.APP_STATE, state);
}

/**
 * Updates a specific app state property
 * @param {string} key - State key
 * @param {*} value - State value
 * @returns {boolean} Success status
 */
export function updateAppState(key, value) {
  const state = getAppState();
  state[key] = value;
  return setAppState(state);
}

// Theme-specific storage functions

/**
 * Gets the stored theme preference
 * @returns {string} Theme preference or system default
 */
export function getStoredTheme() {
  return getStorageItem(STORAGE_KEYS.THEME, THEMES.SYSTEM);
}

/**
 * Stores the theme preference
 * @param {string} theme - Theme to store
 * @returns {boolean} Success status
 */
export function setStoredTheme(theme) {
  if (!Object.values(THEMES).includes(theme)) {
    console.warn(`Invalid theme: ${theme}`);
    return false;
  }
  return setStorageItem(STORAGE_KEYS.THEME, theme);
}

/**
 * Gets the system theme preference
 * @returns {string} 'light' or 'dark'
 */
export function getSystemTheme() {
  if (typeof window === 'undefined') return THEMES.LIGHT;
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEMES.DARK 
    : THEMES.LIGHT;
}

/**
 * Gets the effective theme (resolves 'system' to actual theme)
 * @returns {string} 'light' or 'dark'
 */
export function getEffectiveTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme === THEMES.SYSTEM) {
    return getSystemTheme();
  }
  return storedTheme;
}