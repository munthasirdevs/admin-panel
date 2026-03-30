import type { FC } from 'react';
import { cn } from '@/utils';

export interface HeaderProps {
  /** Page title to display */
  title: string;
  /** Callback when hamburger menu is clicked */
  onMenuClick: () => void;
  /** User's display name */
  userName?: string;
  /** User's avatar URL (optional) */
  userAvatar?: string;
}

/**
 * Header - Top navigation bar with hamburger menu and user profile
 *
 * Features:
 * - Hamburger menu button for mobile sidebar toggle
 * - Page title display
 * - User avatar/profile placeholder with dropdown
 */
export const Header: FC<HeaderProps> = ({ title, onMenuClick, userName = 'User', userAvatar }) => {
  const initials = userName
    .split(' ')
    .map((n) => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  return (
    <header
      className={cn(
        'sticky top-0 z-[100]',
        'bg-surface/80 backdrop-blur-md',
        'border-b border-[rgba(255,255,255,0.05)]',
        'h-16 px-4 sm:px-6 lg:px-8',
        'flex items-center justify-between'
      )}
      role="banner"
    >
      {/* Left section: Hamburger + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger menu button (mobile) */}
        <button
          onClick={onMenuClick}
          className={cn(
            'lg:hidden',
            'p-2 -ml-2 rounded-lg',
            'text-on-surface-muted hover:text-on-surface',
            'hover:bg-[rgba(255,255,255,0.03)]',
            'transition-colors'
          )}
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          type="button"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>

        {/* Page title */}
        <h1 className="text-xl sm:text-2xl font-headline font-semibold text-on-surface">{title}</h1>
      </div>

      {/* Right section: User profile */}
      <div className="flex items-center gap-3">
        {/* User avatar */}
        <div
          className={cn(
            'flex items-center gap-3',
            'px-3 py-1.5 pr-4 rounded-full',
            'bg-[rgba(255,255,255,0.03)]',
            'cursor-pointer hover:bg-[rgba(255,255,255,0.05)]',
            'transition-colors'
          )}
          role="button"
          tabIndex={0}
          aria-label={`User menu for ${userName}`}
        >
          {/* Avatar */}
          {userAvatar ? (
            <img
              src={userAvatar}
              alt={userName}
              className={cn(
                'w-8 h-8 rounded-full',
                'object-cover',
                'ring-2 ring-[rgba(255,255,255,0.1)]'
              )}
            />
          ) : (
            <div
              className={cn(
                'w-8 h-8 rounded-full',
                'bg-primary/10',
                'flex items-center justify-center',
                'text-primary font-semibold text-sm'
              )}
              aria-hidden="true"
            >
              {initials}
            </div>
          )}

          {/* User name (hidden on small screens) */}
          <span className={cn('text-on-surface text-sm font-medium', 'hidden sm:block')}>
            {userName}
          </span>

          {/* Dropdown indicator */}
          <span
            className={cn(
              'material-symbols-outlined text-lg',
              'text-on-surface-muted',
              'hidden sm:block'
            )}
          >
            expand_more
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
