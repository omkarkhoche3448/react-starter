/**
 * App-wide constants and configuration
 *
 * This file contains all constants, configuration, and environment variables.
 * Everything is centralized here - no need to import from multiple files.
 */

// ============================================================================
// ENVIRONMENT & APP CONFIGURATION
// ============================================================================
export const APP_CONFIG = {
  NAME: import.meta.env.VITE_APP_NAME || 'React Starter Pack',
  VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'A modern React starter pack',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
}

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
}

export const FEATURE_FLAGS = {
  DEBUG_MODE: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true' || import.meta.env.DEV,
}

// ============================================================================
// THEME CONSTANTS
// ============================================================================
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
}

// Theme UI constants
export const THEME_ICONS = {
  [THEMES.LIGHT]: '☀️',
  [THEMES.DARK]: '🌙',
  [THEMES.SYSTEM]: '💻',
}

export const THEME_LABELS = {
  [THEMES.LIGHT]: 'Light theme',
  [THEMES.DARK]: 'Dark theme',
  [THEMES.SYSTEM]: 'System theme',
}

// ============================================================================
// STORAGE KEYS
// ============================================================================
export const STORAGE_KEYS = {
  THEME: 'theme-preference',
  USER_PREFERENCES: 'user-preferences',
  APP_STATE: 'app-state',
  SETTINGS: 'app-settings',
}

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
}

// ============================================================================
// ANIMATION DURATIONS
// ============================================================================
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
}

// ============================================================================
// API ENDPOINTS
// ============================================================================
export const API_ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  POSTS: '/posts',
}

// ============================================================================
// VALIDATION PATTERNS
// ============================================================================
// Used by: Future form validation and input components
// Purpose: Consistent validation across forms
// Usage: REGEX_PATTERNS.EMAIL.test(emailInput)
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation
  PHONE: /^\+?[\d\s\-\(\)]+$/, // Phone number with optional +
  URL: /^https?:\/\/.+/, // HTTP/HTTPS URLs
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/, // Letters and numbers only
}

// ============================================================================
// HTTP STATUS CODES
// ============================================================================
// Used by: Future API error handling and response processing
// Purpose: Consistent status code handling
// Usage: if (response.status === HTTP_STATUS.UNAUTHORIZED) { ... }
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

// ============================================================================
// ERROR MESSAGES
// ============================================================================
// Used by: Error handling, toast notifications, and user feedback
// Purpose: Consistent error messaging across the app
// Usage: showError(ERROR_MESSAGES.NETWORK_ERROR)
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',

  // Error Boundary specific messages
  ERROR_BOUNDARY_TITLE: 'Something went wrong',
  ERROR_BOUNDARY_DESCRIPTION:
    "An unexpected error occurred. Don't worry, this happens sometimes. Try refreshing the page to continue.",
  ERROR_BOUNDARY_BUTTON: 'Refresh Page',
  ERROR_BOUNDARY_DETAILS: 'Error Details (Development)',
}
