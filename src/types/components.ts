/**
 * Component related types
 */

import type { ClassNameProps, WithClassName } from './index';

export type {
  ClassNameProps,
  WithClassName,
};

// Common component props
export interface CommonComponentProps extends ClassNameProps {
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

// Size variants
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Color variants
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
