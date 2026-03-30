import type { FC } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

/**
 * Available spinner sizes
 */
export type SpinnerSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Spinner component
 */
export interface SpinnerProps extends ClassNameProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: SpinnerSize;
  /**
   * Color of the spinner (Tailwind color class)
   * @default 'text-primary'
   */
  color?: string;
  /**
   * Label for screen readers
   * @default 'Loading...'
   */
  label?: string;
  /**
   * Whether to show the spinner
   * @default true
   */
  isLoading?: boolean;
  /**
   * Children to show when not loading
   */
  children?: React.ReactNode;
}

/**
 * Size configurations for the spinner
 */
const sizeConfig: Record<SpinnerSize, { container: string; spinner: string }> = {
  sm: {
    container: 'w-8 h-8',
    spinner: 'w-4 h-4 border-2',
  },
  md: {
    container: 'w-10 h-10',
    spinner: 'w-6 h-6 border-3',
  },
  lg: {
    container: 'w-14 h-14',
    spinner: 'w-8 h-8 border-4',
  },
};

/**
 * Spinner Component - An animated loading indicator using SVG
 */
export const Spinner: FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-primary',
  label = 'Loading...',
  isLoading = true,
  className,
  children,
}) => {
  const config = sizeConfig[size];

  // If not loading, render children
  if (!isLoading && children) {
    return <>{children}</>;
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        config.container,
        className
      )}
      role="status"
      aria-label={label}
    >
      <svg
        className={cn('animate-spin', config.spinner, color)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default Spinner;
