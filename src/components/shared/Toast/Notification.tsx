import type { FC, ReactNode } from 'react';
import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
}

export interface CreateToastOptions extends Omit<Toast, 'id'> {
  id?: string;
}

export interface ToastComponentProps extends ClassNameProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

const toastIcons: Record<ToastType, FC<{ className?: string }>> = {
  success: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  warning: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  info: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const toastColors: Record<ToastType, { bg: string; border: string; icon: string; progress: string }> = {
  success: {
    bg: 'bg-success/10',
    border: 'border-success/30',
    icon: 'text-success',
    progress: 'bg-success',
  },
  error: {
    bg: 'bg-error/10',
    border: 'border-error/30',
    icon: 'text-error',
    progress: 'bg-error',
  },
  warning: {
    bg: 'bg-tertiary/10',
    border: 'border-tertiary/30',
    icon: 'text-tertiary',
    progress: 'bg-tertiary',
  },
  info: {
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    icon: 'text-primary',
    progress: 'bg-primary',
  },
};

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-0 right-0',
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
};

function generateId(): string {
  return `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export const ToastComponent: FC<ToastComponentProps> = ({ toast, onDismiss, className }) => {
  const colors = toastColors[toast.type];
  const IconComponent = toastIcons[toast.type];
  const duration = toast.duration ?? 5000;

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg shadow-lg',
        'glass-card border',
        colors.bg,
        colors.border,
        'w-full sm:min-w-[300px] sm:max-w-md max-w-[calc(100vw-2rem)]',
        'animate-slide-in-right',
        'ubuntu',
        className
      )}
      role="alert"
      aria-live="assertive"
    >
      <div className={cn('flex-shrink-0', colors.icon)}>
        <IconComponent className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        {toast.title && (
          <p className={cn('font-medium text-sm mb-1', 'text-on-surface', 'syne')}>
            {toast.title}
          </p>
        )}
        <p className="text-sm text-on-surface-variant">{toast.message}</p>
      </div>

      {toast.dismissible !== false && (
        <button
          onClick={() => onDismiss(toast.id)}
          className={cn(
            'flex-shrink-0 p-1 rounded-md',
            'text-on-surface-variant hover:text-on-surface',
            'hover:bg-surface-container-high',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary'
          )}
          aria-label="Dismiss notification"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-lg">
          <div
            className={cn('h-full', colors.progress)}
            style={{
              animation: `shrink ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export interface ToastProviderProps extends ClassNameProps {
  children: ReactNode;
  defaultDuration?: number;
  maxToasts?: number;
  position?: ToastPosition;
}

export interface ToastContextValue {
  addToast: (options: CreateToastOptions) => string;
  dismissToast: (id: string) => void;
  dismissAll: () => void;
  success: (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) => string;
  error: (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) => string;
  warning: (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) => string;
  info: (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) => string;
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: FC<ToastProviderProps> = ({
  children,
  defaultDuration = 5000,
  maxToasts = 5,
  position = 'top-right',
  className,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (options: CreateToastOptions): string => {
      const id = options.id ?? generateId();
      const duration = options.duration ?? defaultDuration;

      const newToast: Toast = {
        id,
        type: options.type,
        title: options.title,
        message: options.message,
        duration,
        dismissible: options.dismissible ?? true,
      };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        if (updated.length > maxToasts) {
          return updated.slice(updated.length - maxToasts);
        }
        return updated;
      });

      if (duration > 0) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
      }

      return id;
    },
    [defaultDuration, maxToasts]
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const success = useCallback(
    (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) =>
      addToast({ type: 'success', message, ...options }),
    [addToast]
  );

  const error = useCallback(
    (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) =>
      addToast({ type: 'error', message, ...options }),
    [addToast]
  );

  const warning = useCallback(
    (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) =>
      addToast({ type: 'warning', message, ...options }),
    [addToast]
  );

  const info = useCallback(
    (message: string, options?: Omit<CreateToastOptions, 'type' | 'message'>) =>
      addToast({ type: 'info', message, ...options }),
    [addToast]
  );

  const contextValue = useMemo(
    () => ({
      addToast,
      dismissToast,
      dismissAll,
      success,
      error,
      warning,
      info,
    }),
    [addToast, dismissToast, dismissAll, success, error, warning, info]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div
        className={cn(
          'fixed z-50 p-4 flex flex-col gap-2',
          positionClasses[position],
          className
        )}
        aria-label="Notifications"
      >
        {toasts.map((toast) => (
          <ToastComponent key={toast.id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export default ToastProvider;
