/**
 * Application configuration
 *
 * Centralized configuration for the admin panel
 */

import type { ThemeConfig } from '@/types';

export const appConfig = {
  // Application metadata
  app: {
    name: 'XenonOS Admin Panel',
    version: '1.0.0',
    description: 'Production-ready admin panel',
  },

  // API configuration
  api: {
    baseUrl: import.meta.env.VITE_API_URL || '/api/v1',
    timeout: 30000,
    retryAttempts: 3,
  },

  // Theme configuration
  theme: {
    defaultMode: 'dark' as ThemeConfig['mode'],
    defaultPrimaryColor: '#6366f1',
    defaultFontSize: 'base' as ThemeConfig['fontSize'],
  },

  // Navigation configuration
  navigation: {
    sidebarWidth: 260,
    sidebarCollapsedWidth: 68,
    headerHeight: 64,
  },

  // Pagination configuration
  pagination: {
    defaultPage: 1,
    defaultLimit: 10,
    limitOptions: [10, 25, 50, 100],
  },

  // Date & Time configuration
  dateTime: {
    displayFormat: 'MMM dd, yyyy',
    displayWithTimeFormat: 'MMM dd, yyyy HH:mm',
    inputFormat: 'yyyy-MM-dd',
    inputWithTimeFormat: "yyyy-MM-dd'T'HH:mm",
    timezone: 'UTC',
  },

  // File upload configuration
  fileUpload: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  },

  // Notification configuration
  notifications: {
    autoDismiss: 5000,
    maxVisible: 5,
    position: 'top-right' as const,
  },

  // Animation configuration
  animation: {
    durationFast: 150,
    durationNormal: 300,
    durationSlow: 500,
  },

  // Feature flags
  features: {
    enableMocks: import.meta.env.VITE_ENABLE_MOCKS === 'true',
    enableAnalytics: false,
    enableNotifications: true,
    enableDarkMode: true,
  },

  // Security configuration
  security: {
    tokenStorageKey: 'auth_token',
    userStorageKey: 'user',
    sessionTimeout: 3600000, // 1 hour
  },
} as const;

export type AppConfig = typeof appConfig;

export default appConfig;
