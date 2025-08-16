/**
 * Utility functions for common operations
 */

/**
 * Combines class names conditionally
 * @param {...(string|object|array)} classes - Class names or conditional objects
 * @returns {string} Combined class names
 * 
 * @example
 * cn('btn', 'primary') // 'btn primary'
 * cn('btn', { 'active': isActive, 'disabled': isDisabled }) // 'btn active' (if isActive is true)
 * cn(['btn', 'primary'], { 'large': isLarge }) // 'btn primary large' (if isLarge is true)
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, condition]) => condition)
          .map(([className]) => className)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}

/**
 * Formats a number with commas as thousand separators
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 * 
 * @example
 * formatNumber(1234567) // '1,234,567'
 */
export function formatNumber(num) {
  if (typeof num !== 'number') return num;
  return num.toLocaleString();
}

/**
 * Formats a date to a readable string
 * @param {Date|string} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 * 
 * @example
 * formatDate(new Date()) // 'Dec 14, 2024'
 * formatDate(new Date(), { dateStyle: 'full' }) // 'Saturday, December 14, 2024'
 */
export function formatDate(date, options = { dateStyle: 'medium' }) {
  if (!date) return '';
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toLocaleDateString(undefined, options);
}

/**
 * Capitalizes the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 * 
 * @example
 * capitalize('hello world') // 'Hello world'
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add when truncated
 * @returns {string} Truncated string
 * 
 * @example
 * truncate('This is a long string', 10) // 'This is a...'
 */
export function truncate(str, length, suffix = '...') {
  if (typeof str !== 'string' || str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

/**
 * Debounces a function call
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 * 
 * @example
 * const debouncedSearch = debounce(searchFunction, 300);
 */
export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Generates a random ID string
 * @param {number} length - Length of the ID
 * @returns {string} Random ID
 * 
 * @example
 * generateId() // 'a1b2c3d4'
 * generateId(12) // 'a1b2c3d4e5f6'
 */
export function generateId(length = 8) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}