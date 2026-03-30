import { Component, type ErrorInfo, type ReactNode } from 'react';
import { cn } from '@/utils';
import { Button } from './Button';

/**
 * Props for the ErrorBoundary component
 */
export interface ErrorBoundaryProps {
  /**
   * Child components to be wrapped by the error boundary
   */
  children: ReactNode;
  /**
   * Optional custom fallback UI to display when an error occurs
   */
  fallback?: ReactNode;
  /**
   * Optional callback function when an error is caught
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /**
   * Additional CSS classes for the fallback container
   */
  className?: string;
}

/**
 * State for the ErrorBoundary component
 */
export interface ErrorBoundaryState {
  /**
   * Whether an error has occurred
   */
  hasError: boolean;
  /**
   * The error object if an error occurred
   */
  error: Error | null;
  /**
   * Additional error information from React
   */
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary component - A React error boundary that catches JavaScript errors
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, className } = this.props;

    if (fallback) {
      return hasError ? fallback : children;
    }

    if (hasError) {
      return (
        <div
          className={cn(
            'flex flex-col items-center justify-center min-h-[400px] p-8',
            'glass-card rounded-xl border border-outline-variant',
            'ubuntu',
            className
          )}
          role="alert"
          aria-live="assertive"
          aria-labelledby="error-title"
        >
          <div
            className={cn(
              'flex items-center justify-center w-16 h-16 mb-6 rounded-full',
              'bg-error/10 border border-error/20'
            )}
            aria-hidden="true"
          >
            <svg
              className="w-8 h-8 text-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2
            id="error-title"
            className={cn(
              'text-xl font-semibold mb-2 text-on-surface',
              'syne'
            )}
          >
            Something went wrong
          </h2>

          <p className="text-on-surface-variant text-center mb-6 max-w-md">
            We encountered an unexpected error. Please try again or contact support if the issue persists.
          </p>

          {import.meta.env.DEV && error && (
            <details className="w-full max-w-lg mb-6">
              <summary
                className={cn(
                  'cursor-pointer text-sm text-on-surface-muted hover:text-on-surface-variant',
                  'transition-colors duration-200'
                )}
              >
                View error details
              </summary>
              <div
                className={cn(
                  'mt-3 p-4 rounded-lg bg-surface-dim border border-outline-variant',
                  'overflow-x-auto text-xs font-mono text-error'
                )}
              >
                <p className="font-semibold mb-2">{error.toString()}</p>
                {errorInfo?.componentStack && (
                  <pre className="whitespace-pre-wrap break-words">
                    {errorInfo.componentStack}
                  </pre>
                )}
              </div>
            </details>
          )}

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="primary"
              onClick={this.resetErrorBoundary}
              aria-label="Try again"
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              aria-label="Reload page"
            >
              Reload Page
            </Button>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
