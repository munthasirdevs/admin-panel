import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

export interface FormLabelProps extends ClassNameProps {
  children: ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: string;
}

/**
 * FormLabel - Label component for form fields
 */
export const FormLabel: FC<FormLabelProps> = ({
  children,
  required = false,
  htmlFor,
  className,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium',
        'text-on-surface',
        'syne',
        className
      )}
    >
      {children}
      {required && <span className="text-error ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
