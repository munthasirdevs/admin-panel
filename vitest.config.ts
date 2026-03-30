import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist', 'build', 'coverage', '**/*.d.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['shared/**/*.{ts,tsx}', 'admin_pages/**/*.{ts,tsx}'],
      exclude: [
        'node_modules',
        'dist',
        'build',
        'coverage',
        '**/*.d.ts',
        '**/*.config.{ts,js}',
        '**/mocks/**',
        '**/test-utils/**',
      ],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },
    restoreMocks: true,
    mockReset: true,
    clearMocks: true,
    reporters: ['default'],
    outputFile: {
      junit: 'test-results/junit.xml',
      json: 'test-results/json-report.json',
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './shared/components'),
      '@shared': path.resolve(__dirname, './shared'),
      '@assets': path.resolve(__dirname, './assets'),
      '@hooks': path.resolve(__dirname, './shared/hooks'),
      '@utils': path.resolve(__dirname, './shared/utils'),
      '@types': path.resolve(__dirname, './shared/types'),
      '@constants': path.resolve(__dirname, './shared/constants'),
      '@config': path.resolve(__dirname, './shared/config'),
      '@admin_pages': path.resolve(__dirname, './admin_pages'),
    },
  },
});
