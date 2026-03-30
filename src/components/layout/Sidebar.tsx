import type { FC } from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/utils';

export interface SidebarProps {
  /** Whether sidebar is collapsed (true) or expanded (false) */
  collapsed: boolean;
  /** Whether sidebar is pinned open */
  pinned: boolean;
  /** Whether sidebar is visible on mobile */
  mobileOpen: boolean;
  /** Callback when pin toggle is clicked */
  onPinToggle: () => void;
  /** Callback when close is requested (mobile) */
  onClose: () => void;
}

export interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { path: '/clients', label: 'Clients', icon: 'people' },
  { path: '/projects', label: 'Projects', icon: 'folder' },
  { path: '/tasks', label: 'Tasks', icon: 'task' },
  { path: '/billing', label: 'Billing', icon: 'receipt_long' },
  { path: '/reports', label: 'Reports', icon: 'assessment' },
  { path: '/settings', label: 'Settings', icon: 'settings' },
  { path: '/profile', label: 'Profile', icon: 'person' },
];

/**
 * Sidebar - Collapsible navigation sidebar with mobile support
 *
 * Features:
 * - Collapsible (68px collapsed, 260px expanded)
 * - Pin toggle to keep expanded
 * - Mobile-responsive with backdrop overlay
 * - Active state highlighting based on current route
 * - Hover to expand when not pinned
 */
export const Sidebar: FC<SidebarProps> = ({
  collapsed,
  pinned,
  mobileOpen,
  onPinToggle,
  onClose,
}) => {
  const location = useLocation();
  const [tooltip, setTooltip] = useState<{ visible: boolean; text: string; x: number; y: number }>({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });

  // Check if a nav item is active based on current location
  const isActive = (path: string): boolean => {
    if (path === '/dashboard') {
      return location.pathname === '/' || location.pathname === '/dashboard';
    }
    return location.pathname === path;
  };

  // Handle mouse enter on nav items (show tooltip when collapsed)
  const handleMouseEnter = (label: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (collapsed && !pinned) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        visible: true,
        text: label,
        x: rect.left + rect.width + 8,
        y: rect.top + rect.height / 2,
      });
    }
  };

  // Handle mouse leave on nav items
  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // Handle nav item click on mobile
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn('modern-sidebar', pinned && 'pinned', mobileOpen && 'translate-x-0')}
        aria-label="Main navigation"
      >
        {/* Logo / Brand area */}
        <div className="flex items-center h-16 px-4 border-b border-[rgba(255,255,255,0.05)]">
          <span className="material-symbols-outlined text-primary text-3xl">
            admin_panel_settings
          </span>
          <span className="nav-label text-lg font-headline text-on-surface font-semibold">
            Admin Panel
          </span>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn('nav-item', isActive(item.path) && 'active')}
              onClick={handleNavClick}
              onMouseEnter={(e) => handleMouseEnter(item.label, e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="nav-label text-on-surface">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Pin toggle button */}
        <button
          className={cn('pin-toggle', pinned && 'active')}
          onClick={onPinToggle}
          aria-label={pinned ? 'Unpin sidebar' : 'Pin sidebar'}
          aria-pressed={pinned}
          type="button"
        >
          <span className="material-symbols-outlined text-lg">push_pin</span>
        </button>
      </aside>

      {/* Tooltip (only shown when collapsed and not pinned) */}
      {tooltip.visible && (
        <div
          className="sb-tooltip"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translateY(-50%)',
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
};

export default Sidebar;
