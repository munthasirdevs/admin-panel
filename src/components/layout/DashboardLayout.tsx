import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';

export interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * DashboardLayout - Layout for dashboard pages with sidebar and topbar
 */
export const DashboardLayout: FC<DashboardLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-surface', 'ubuntu', className)}>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
