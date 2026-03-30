import { useContext } from 'react';
import { ToastContext, type ToastContextValue } from '@/components/shared/Toast/Notification';

/**
 * Custom hook for using toast notifications
 *
 * @example
 * const { success, error, info, warning } = useToast();
 *
 * const handleSave = () => {
 *   success('Changes saved successfully!');
 * };
 *
 * @throws Error if used outside of ToastProvider
 */
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
