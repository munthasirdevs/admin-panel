/**
 * Logger utility for consistent logging across the application
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private namespace: string;
  private isDevelopment: boolean;

  constructor(namespace: string = 'App') {
    this.namespace = namespace;
    this.isDevelopment = import.meta.env.DEV;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.namespace}] [${level.toUpperCase()}] ${message}`;
  }

  debug(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      console.debug(this.formatMessage('debug', message), data ?? '');
    }
  }

  info(message: string, data?: unknown): void {
    console.info(this.formatMessage('info', message), data ?? '');
  }

  warn(message: string, data?: unknown): void {
    console.warn(this.formatMessage('warn', message), data ?? '');
  }

  error(message: string, error?: unknown): void {
    console.error(this.formatMessage('error', message), error ?? '');
  }

  group(label: string, fn: () => void): void {
    console.group(label);
    fn();
    console.groupEnd();
  }
}

// Create a default logger instance
const defaultLogger = new Logger();

// Export utility functions
export function createLogger(namespace: string): Logger {
  return new Logger(namespace);
}

export const logger = defaultLogger;

export default Logger;
