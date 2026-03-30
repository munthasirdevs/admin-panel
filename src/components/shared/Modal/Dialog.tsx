import type { FC, ReactNode, MouseEvent, RefObject } from 'react';
import { useEffect, useRef, useCallback, useState } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps extends ClassNameProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  subtitle?: ReactNode;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  trapFocus?: boolean;
  preventBodyScroll?: boolean;
  animationDuration?: number;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  isLoading?: boolean;
}

const sizeConfig: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
};

function useFocusTrap(modalRef: RefObject<HTMLElement>, isActive: boolean): void {
  useEffect(() => {
    if (!isActive || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    firstElement?.focus();
    document.addEventListener('keydown', handleKeyDown as any);

    return () => {
      document.removeEventListener('keydown', handleKeyDown as any);
    };
  }, [isActive, modalRef]);
}

export const Modal: FC<ModalProps> & {
  Header: FC<ClassNameProps>;
  Title: FC<ClassNameProps>;
  Subtitle: FC<ClassNameProps>;
  Body: FC<ClassNameProps>;
  Footer: FC<ClassNameProps>;
} = ({
  isOpen,
  onClose,
  title,
  subtitle,
  header,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  trapFocus = true,
  preventBodyScroll = true,
  animationDuration = 200,
  ariaLabel,
  ariaLabelledBy,
  isLoading = false,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, animationDuration);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, animationDuration]);

  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape as any);
    return () => {
      document.removeEventListener('keydown', handleEscape as any);
    };
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (!preventBodyScroll) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, preventBodyScroll]);

  useFocusTrap(modalRef, isOpen && trapFocus);

  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose]
  );

  const handleCloseClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isVisible) return null;

  const labelId = ariaLabelledBy || (title ? 'modal-title' : undefined);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        'p-4 sm:p-6',
        'ubuntu'
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      aria-label={ariaLabel}
      onMouseDown={handleBackdropClick}
    >
      <div
        className={cn(
          'absolute inset-0 bg-surface-dim/80',
          'transition-opacity duration-200',
          isAnimating ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className={cn(
          'relative w-full',
          sizeConfig[size],
          'glass-card rounded-xl',
          'border border-outline-variant',
          'shadow-2xl',
          'flex flex-col max-h-[90vh]',
          'transition-all duration-200',
          isAnimating
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4',
          className
        )}
      >
        {header ? (
          <div className="flex-shrink-0 px-6 py-4 border-b border-outline-variant">
            {header}
          </div>
        ) : title ? (
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
            {subtitle && <Modal.Subtitle>{subtitle}</Modal.Subtitle>}
          </Modal.Header>
        ) : null}

        {showCloseButton && (
          <button
            onClick={handleCloseClick}
            className={cn(
              'absolute top-4 right-4 p-2 rounded-lg',
              'text-on-surface-variant hover:text-on-surface',
              'hover:bg-surface-container-high',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary',
              'z-10'
            )}
            aria-label="Close modal"
            disabled={isLoading}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

        {footer && (
          <div className="flex-shrink-0 px-6 py-4 border-t border-outline-variant bg-surface-container-low/50 rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

const ModalHeader: FC<ClassNameProps> = ({ children, className }) => (
  <div
    className={cn(
      'flex-shrink-0 px-6 py-4 border-b border-outline-variant',
      className
    )}
  >
    {children}
  </div>
);

const ModalTitle: FC<ClassNameProps> = ({ children, className }) => (
  <h2
    id="modal-title"
    className={cn(
      'text-xl font-semibold text-on-surface',
      'syne',
      className
    )}
  >
    {children}
  </h2>
);

const ModalSubtitle: FC<ClassNameProps> = ({ children, className }) => (
  <p
    className={cn(
      'text-sm text-on-surface-variant mt-1',
      'ubuntu',
      className
    )}
  >
    {children}
  </p>
);

const ModalBody: FC<ClassNameProps> = ({ children, className }) => (
  <div className={cn('px-6 py-4', className)}>{children}</div>
);

const ModalFooter: FC<ClassNameProps> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      'flex-shrink-0 px-6 py-4 border-t border-outline-variant',
      'bg-surface-container-low/50 rounded-b-xl',
      'flex items-center justify-end gap-3',
      className
    )}
  >
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Subtitle = ModalSubtitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
