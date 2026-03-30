/**
 * XenonOS Admin Panel - Shared Components
 *
 * This module exports all reusable UI components used throughout the application.
 */

// Button Component
export { Button } from './Button';
export type { ButtonProps } from './Button';

// Card Component
export { Card } from './Card';
export type { CardProps, CardVariant, CardHeaderProps, CardFooterProps } from './Card';

// Input Component
export { Input } from './Input';
export type { InputProps, InputVariant, InputSize } from './Input';

// Table Component
export { Table } from './Table';
export type { TableProps, Column, SortConfig, PaginationConfig, SortDirection } from './Table';

// Skeleton Component
export { Skeleton } from './Skeleton';
export type { SkeletonProps, SkeletonAnimation, SkeletonVariant } from './Skeleton';

// Spinner Component
export { Spinner } from './Spinner';
export type { SpinnerProps, SpinnerSize } from './Spinner';

// EmptyState Component
export { EmptyState } from './EmptyState';
export type { EmptyStateProps } from './EmptyState';

// ErrorBoundary Component
export { ErrorBoundary } from './ErrorBoundary';
export type { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary';

// Toast/Notification Components
export {
  ToastProvider,
  ToastComponent,
  useToast,
} from './Toast';
export type {
  Toast,
  ToastType,
  ToastPosition,
  ToastComponentProps,
  ToastProviderProps,
  CreateToastOptions,
  ToastContextValue,
} from './Toast';

// Modal/Dialog Components
export { Modal } from './Modal';
export type { ModalProps, ModalSize } from './Modal';
