/**
 * Library exports - convenient access to all utilities
 * 
 * This is the main entry point for the utility library.
 * Import everything you need from '@/lib' instead of individual files.
 * 
 * USAGE EXAMPLES:
 * 
 * // Import specific utilities
 * import { cn, formatDate, THEMES, getStoredTheme } from '@/lib'
 * 
 * // Import everything (not recommended for large apps)
 * import * as lib from '@/lib'
 * 
 * AVAILABLE EXPORTS:
 * 
 * From utils.js:
 * - cn() - className utility for conditional classes
 * - formatNumber(), formatDate() - formatting functions
 * - capitalize(), truncate() - string utilities
 * - debounce(), generateId() - general utilities
 * 
 * From constants.js:
 * - THEMES, STORAGE_KEYS, BREAKPOINTS - app constants
 * - ANIMATION_DURATION, APP_CONFIG - configuration
 * - API_ENDPOINTS, HTTP_STATUS, ERROR_MESSAGES - API utilities
 * - REGEX_PATTERNS - validation patterns
 * 
 * From storage.js:
 * - getStorageItem(), setStorageItem() - generic storage
 * - getStoredTheme(), setStoredTheme() - theme persistence
 * - getUserPreferences(), setUserPreferences() - user settings
 * - getAppState(), setAppState() - app state management
 */

// Utility functions for common operations
export * from './utils.js';

// App-wide constants and configuration
export * from './constants.js';

// Local storage utilities and helpers
export * from './storage.js';