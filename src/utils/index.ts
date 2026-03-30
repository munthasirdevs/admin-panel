/**
 * Utility functions for common operations
 */

export { cn } from './cn';
export { formatDate, formatDateTime, formatTime, formatRelativeTime } from './formatDate';
export { logger, createLogger } from './logger';

// Re-export common utilities from cn.ts
export {
  formatCurrency,
  formatNumber,
  truncate,
  generateId,
  debounce,
  throttle,
  isEmpty,
  deepClone,
  getFromStorage,
  setToStorage,
  removeFromStorage,
  sleep,
  capitalize,
  toTitleCase,
  isValidEmail,
  getInitials,
  delay,
  groupBy,
  unique,
  isPromise,
} from './cn';
