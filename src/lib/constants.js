/**
 * App-wide constants
 * 
 * This file contains all the constants used throughout the application.
 * Centralizing constants helps maintain consistency and makes updates easier.
 */

// ============================================================================
// THEME CONSTANTS
// ============================================================================
// Used by: ThemeToggle component, storage utilities
// Purpose: Consistent theme naming across the app
export const THEMES = {
  LIGHT: 'light',    // Force light theme
  DARK: 'dark',      // Force dark theme
  SYSTEM: 'system'   // Follow system preference
};

// ============================================================================
// STORAGE KEYS
// ============================================================================
// Used by: storage utilities in src/lib/storage.js
// Purpose: Consistent localStorage key naming to avoid conflicts
export const STORAGE_KEYS = {
  THEME: 'theme-preference',           // Currently used by ThemeToggle
  USER_PREFERENCES: 'user-preferences', // For future user settings
  APP_STATE: 'app-state',              // For future app state persistence
  SETTINGS: 'app-settings',            // For future general settings
}

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================
// Used by: Future responsive utilities and media query hooks
// Purpose: Consistent breakpoints matching Tailwind CSS defaults
// Usage example: useMediaQuery(`(min-width: ${BREAKPOINTS.MD}px)`)
export const BREAKPOINTS = {
  SM: 640,   // Small devices (phones)
  MD: 768,   // Medium devices (tablets)
  LG: 1024,  // Large devices (laptops)
  XL: 1280,  // Extra large devices (desktops)
  '2XL': 1536, // 2X large devices (large desktops)
}

// ============================================================================
// ANIMATION DURATIONS
// ============================================================================
// Used by: App.jsx, ThemeToggle.jsx for consistent transitions
// Purpose: Standardized animation timing across the app
// Usage: style={{ transition: `all ${ANIMATION_DURATION.NORMAL}ms ease-in-out` }}
export const ANIMATION_DURATION = {
  FAST: 150,    // Quick interactions (hover effects)
  NORMAL: 300,  // Standard transitions (theme changes, modals)
  SLOW: 500,    // Slow animations (page transitions)
}

// ============================================================================
// API CONFIGURATION
// ============================================================================
// Used by: Future API calls and data fetching
// Purpose: Centralized API endpoint management
// Usage: fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.USERS}`)
export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  AUTH: '/auth',     // Authentication endpoints
  USERS: '/users',   // User management endpoints
  POSTS: '/posts',   // Content endpoints
}

// ============================================================================
// APP METADATA
// ============================================================================
// Used by: App.jsx, index.html, and future SEO components
// Purpose: Single source of truth for app information
export const APP_CONFIG = {
  NAME: 'React Starter Pack',
  VERSION: '1.0.0',
  DESCRIPTION: 'A comprehensive React starter template',
  AUTHOR: 'Your Name', // TODO: Update with your name
}

// ============================================================================
// VALIDATION PATTERNS
// ============================================================================
// Used by: Future form validation and input components
// Purpose: Consistent validation across forms
// Usage: REGEX_PATTERNS.EMAIL.test(emailInput)
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,     // Basic email validation
  PHONE: /^\+?[\d\s\-\(\)]+$/,             // Phone number with optional +
  URL: /^https?:\/\/.+/,                   // HTTP/HTTPS URLs
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,          // Letters and numbers only
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
// Used by: Future error handling, toast notifications, and user feedback
// Purpose: Consistent error messaging across the app
// Usage: showError(ERROR_MESSAGES.NETWORK_ERROR)
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
}
