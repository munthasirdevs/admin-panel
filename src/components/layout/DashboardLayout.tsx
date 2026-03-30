import type { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/utils';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
  /** Page title to display in header */
  title?: string;
  /** User's display name */
  userName?: string;
  /** User's avatar URL (optional) */
  userAvatar?: string;
}

/**
 * DashboardLayout - Layout for dashboard pages with sidebar and header
 *
 * Features:
 * - Collapsible sidebar (68px collapsed, 260px expanded)
 * - Pin toggle to keep sidebar expanded
 * - Mobile-responsive with hamburger menu and backdrop
 * - Responsive padding (p-4 sm:p-6 lg:p-8)
 * - State management for sidebar visibility
 */
export const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  className,
  title = 'Dashboard',
  userName = 'User',
  userAvatar,
}) => {
  const location = useLocation();

  // Sidebar state
  const [isPinned, setIsPinned] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle window resize - reset mobile state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle pin state
  const handlePinToggle = () => {
    setIsPinned((prev) => !prev);
  };

  // Toggle mobile sidebar
  const handleMobileToggle = () => {
    setIsMobileOpen((prev) => !prev);
  };

  // Close sidebar (mobile)
  const handleClose = () => {
    setIsMobileOpen(false);
  };

  // Determine if sidebar is collapsed (for desktop)
  // When pinned, sidebar is never collapsed on desktop
  const sidebarCollapsed = !isPinned && !isMobileOpen;

  return (
    <div className={cn('min-h-screen bg-surface', 'ubuntu', className)}>
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        pinned={isPinned}
        mobileOpen={isMobileOpen}
        onPinToggle={handlePinToggle}
        onClose={handleClose}
      />

      {/* Main content area */}
      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          'lg:ml-[68px]',
          isPinned && 'lg:ml-[260px]'
        )}
      >
        {/* Header */}
        <Header
          title={title}
          onMenuClick={handleMobileToggle}
          userName={userName}
          userAvatar={userAvatar}
        />

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
