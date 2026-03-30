import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

export interface FormFieldProps extends ClassNameProps {
  label?: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * FormField - Wrapper for form fields with label, error, and helper text
 */
export const FormField: FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  required = false,
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label className={cn('text-sm font-medium', 'text-on-surface', 'syne')}>
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      {children}
      {(error || helperText) && (
        <p className={cn('text-sm', 'ubuntu', error ? 'text-error' : 'text-on-surface-variant')}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default FormField;
