import type { FC } from 'react';
import { memo } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

/**
 * Available skeleton animation types
 */
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

/**
 * Available skeleton shape variants
 */
export type SkeletonVariant = 'text' | 'circle' | 'rounded' | 'card';

/**
 * Props for the Skeleton component
 */
export interface SkeletonProps extends ClassNameProps {
  /**
   * The shape variant of the skeleton
   * @default 'text'
   */
  variant?: SkeletonVariant;
  /**
   * Width of the skeleton (CSS value or number for pixels)
   */
  width?: string | number;
  /**
   * Height of the skeleton (CSS value or number for pixels)
   */
  height?: string | number;
  /**
   * Number of lines for text variant
   * @default 1
   */
  lines?: number;
  /**
   * Gap between lines for text variant
   * @default 'gap-2'
   */
  lineGap?: string;
  /**
   * Animation type for the loading state
   * @default 'pulse'
   */
  animation?: SkeletonAnimation;
  /**
   * Border radius override
   */
  radius?: string;
  /**
   * Whether to show the skeleton
   * @default true
   */
  isLoading?: boolean;
  /**
   * Children to show when not loading
   */
  children?: React.ReactNode;
}

/**
 * Base skeleton styles
 */
const baseStyles = 'bg-surface-container-high overflow-hidden';

/**
 * Animation styles for different animation types
 */
const animationStyles: Record<SkeletonAnimation, string> = {
  pulse: 'animate-pulse',
  wave: 'skeleton-wave',
  none: '',
};

/**
 * Variant-specific styles
 */
const variantStyles: Record<SkeletonVariant, string> = {
  text: 'rounded',
  circle: 'rounded-full',
  rounded: 'rounded-lg',
  card: 'rounded-xl',
};

/**
 * Skeleton Component - A placeholder component that shows a loading state
 */
export const Skeleton: FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  lines = 1,
  lineGap = 'gap-2',
  animation = 'pulse',
  radius,
  isLoading = true,
  className,
  children,
}) => {
  const style: React.CSSProperties = {};

  // Handle width
  if (width !== undefined) {
    if (typeof width === 'number') {
      style.width = `${width}px`;
    } else {
      style.width = width;
    }
  }

  // Handle height
  if (height !== undefined) {
    if (typeof height === 'number') {
      style.height = `${height}px`;
    } else {
      style.height = height;
    }
  }

  // Handle radius override
  if (radius) {
    style.borderRadius = radius;
  }

  // If not loading, render children
  if (!isLoading && children) {
    return <>{children}</>;
  }

  // Render circle variant
  if (variant === 'circle') {
    return (
      <div
        className={cn(
          baseStyles,
          variantStyles[variant],
          animationStyles[animation],
          className
        )}
        style={style}
        aria-hidden="true"
        role="status"
      />
    );
  }

  // Render card variant
  if (variant === 'card') {
    return (
      <div
        className={cn(
          baseStyles,
          variantStyles[variant],
          animationStyles[animation],
          'p-4',
          className
        )}
        style={style}
        aria-hidden="true"
        role="status"
      >
        <div className="flex flex-col gap-3">
          {/* Card header skeleton */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest animate-pulse" />
            <div className="flex-1">
              <div className="h-4 bg-surface-container-highest rounded w-3/4 animate-pulse" />
              <div className="h-3 bg-surface-container-highest rounded w-1/2 mt-2 animate-pulse" />
            </div>
          </div>
          {/* Card content skeleton */}
          <div className="space-y-2">
            <div className="h-3 bg-surface-container-highest rounded animate-pulse" />
            <div className="h-3 bg-surface-container-highest rounded w-5/6 animate-pulse" />
            <div className="h-3 bg-surface-container-highest rounded w-4/6 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // Render text variant (default) with multiple lines
  if (lines > 1) {
    return (
      <div
        className={cn('flex flex-col', lineGap, className)}
        role="status"
        aria-label="Loading content..."
      >
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              baseStyles,
              variantStyles[variant],
              animationStyles[animation]
            )}
            style={{
              ...style,
              width: index === lines - 1 ? `${Number(style.width || 100) * 0.6}%` : '100%',
            }}
          />
        ))}
      </div>
    );
  }

  // Render single line or rounded variant
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        animationStyles[animation],
        className
      )}
      style={style}
      aria-hidden="true"
      role="status"
    />
  );
};

export default memo(Skeleton);
