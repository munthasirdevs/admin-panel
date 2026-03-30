import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';

export interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * AppLayout - Main application layout wrapper
 */
export const AppLayout: FC<AppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-surface', 'ubuntu', className)}>
      {children}
    </div>
  );
};

export default AppLayout;
