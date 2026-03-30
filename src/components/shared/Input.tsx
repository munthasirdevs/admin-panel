import type { FC, InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

/**
 * Input variant options
 */
export type InputVariant = 'default' | 'filled' | 'outlined' | 'underlined';

/**
 * Input size options
 */
export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Input component
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>, ClassNameProps {
  /**
   * Visual variant of the input
   * @default 'default'
   */
  variant?: InputVariant;
  /**
   * Size of the input
   * @default 'md'
   */
  size?: InputSize;
  /**
   * Label for the input
   */
  label?: ReactNode;
  /**
   * Helper text displayed below the input
   */
  helperText?: ReactNode;
  /**
   * Error message to display
   */
  error?: ReactNode;
  /**
   * Whether the input has an error
   */
  hasError?: boolean;
  /**
   * Left addon content (icon, text, etc.)
   */
  leftAddon?: ReactNode;
  /**
   * Right addon content (icon, button, etc.)
   */
  rightAddon?: ReactNode;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Whether the input is currently loading
   */
  isLoading?: boolean;
  /**
   * Whether to show character count
   */
  showCount?: boolean;
  /**
   * Maximum character count
   */
  maxLength?: number;
  /**
   * Prefix content displayed before the input value
   */
  prefix?: ReactNode;
  /**
   * Suffix content displayed after the input value
   */
  suffix?: ReactNode;
}

/**
 * Variant configurations for input styling
 */
const variantStyles: Record<InputVariant, { base: string; focus: string; error: string }> = {
  default: {
    base: 'bg-surface-container-low border border-outline-variant',
    focus: 'focus:border-primary focus:ring-1 focus:ring-primary',
    error: 'border-error focus:border-error focus:ring-error',
  },
  filled: {
    base: 'bg-surface-container-high border border-transparent',
    focus: 'focus:border-primary focus:ring-1 focus:ring-primary',
    error: 'border-error focus:border-error focus:ring-error',
  },
  outlined: {
    base: 'bg-transparent border-2 border-outline-variant',
    focus: 'focus:border-primary',
    error: 'border-error focus:border-error',
  },
  underlined: {
    base: 'bg-transparent border-b border-outline-variant rounded-t-lg',
    focus: 'focus:border-primary',
    error: 'border-error focus:border-error',
  },
};

/**
 * Size configurations for input
 */
const sizeStyles: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

/**
 * Input Component - A versatile text input with multiple variants and features
 */
export const Input: FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  label,
  helperText,
  error,
  hasError = false,
  leftAddon,
  rightAddon,
  required = false,
  isLoading = false,
  showCount = false,
  maxLength,
  prefix,
  suffix,
  className,
  disabled,
  id,
  value,
  onChange,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const styles = variantStyles[variant];
  const hasErrorState = hasError || !!error;
  const currentValue = value as string | undefined;
  const charCount = currentValue?.length || 0;

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'block text-sm font-medium mb-1.5',
            'text-on-surface',
            'syne',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div
        className={cn(
          'flex items-center rounded-lg overflow-hidden',
          'transition-all duration-200',
          disabled && 'opacity-50 cursor-not-allowed bg-surface-container-lowest',
          !disabled && styles.base,
          !disabled && hasErrorState && styles.error,
          !disabled && !hasErrorState && styles.focus
        )}
      >
        {/* Left Addon */}
        {leftAddon && (
          <div
            className={cn(
              'flex items-center px-3',
              'text-on-surface-variant',
              'border-r border-outline-variant/30',
              size === 'sm' && 'h-8',
              size === 'md' && 'h-10',
              size === 'lg' && 'h-12'
            )}
          >
            {leftAddon}
          </div>
        )}

        {/* Prefix */}
        {prefix && (
          <div
            className={cn(
              'px-3 text-on-surface-variant',
              'bg-surface-container-high/50',
              sizeStyles[size]
            )}
          >
            {prefix}
          </div>
        )}

        {/* Input Field */}
        <input
          id={inputId}
          type="text"
          disabled={disabled || isLoading}
          required={required}
          maxLength={maxLength}
          aria-invalid={hasErrorState}
          aria-describedby={
            hasErrorState ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            'w-full bg-transparent border-none outline-none',
            'text-on-surface placeholder-on-surface-variant/50',
            'ubuntu',
            sizeStyles[size],
            disabled && 'cursor-not-allowed'
          )}
          value={value}
          onChange={onChange}
          {...props}
        />

        {/* Suffix */}
        {suffix && (
          <div
            className={cn(
              'px-3 text-on-surface-variant',
              'bg-surface-container-high/50',
              sizeStyles[size]
            )}
          >
            {suffix}
          </div>
        )}

        {/* Right Addon */}
        {rightAddon && (
          <div
            className={cn(
              'flex items-center px-3',
              'text-on-surface-variant',
              'border-l border-outline-variant/30',
              size === 'sm' && 'h-8',
              size === 'md' && 'h-10',
              size === 'lg' && 'h-12'
            )}
          >
            {rightAddon}
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="px-3">
            <svg
              className="animate-spin h-4 w-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
          </div>
        )}
      </div>

      {/* Helper Text / Error Message */}
      {(helperText || error || (showCount && maxLength)) && (
        <div className="mt-1.5 flex items-center justify-between">
          <p
            id={hasErrorState ? errorId : helperId}
            className={cn(
              'text-sm',
              'ubuntu',
              hasErrorState ? 'text-error' : 'text-on-surface-variant'
            )}
          >
            {hasErrorState ? error : helperText}
          </p>

          {/* Character Count */}
          {showCount && maxLength && (
            <p
              className={cn(
                'text-sm',
                'ubuntu',
                charCount > maxLength * 0.9 ? 'text-error' : 'text-on-surface-variant'
              )}
            >
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
