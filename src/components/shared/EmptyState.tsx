import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';
import { Button, type ButtonProps } from './Button';

/**
 * Props for the EmptyState component
 */
export interface EmptyStateProps extends ClassNameProps {
  /**
   * Icon to display at the top of the empty state
   */
  icon?: ReactNode;
  /**
   * Main heading text
   */
  title: string;
  /**
   * Description text below the title
   */
  description?: string;
  /**
   * Action button configuration
   */
  action?: {
    /**
     * Button label
     */
    label: string;
    /**
     * Button click handler
     */
    onClick: () => void;
    /**
     * Button variant
     * @default 'primary'
     */
    variant?: ButtonProps['variant'];
    /**
     * Button size
     * @default 'md'
     */
    size?: ButtonProps['size'];
    /**
     * Left icon for the button
     */
    leftIcon?: ReactNode;
    /**
     * Right icon for the button
     */
    rightIcon?: ReactNode;
  };
  /**
   * Additional content to render below the description
   */
  children?: ReactNode;
  /**
   * Size variant of the empty state
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to show a decorative illustration background
   * @default false
   */
  showIllustration?: boolean;
}

/**
 * Size configurations
 */
const sizeConfig = {
  sm: {
    icon: 'w-10 h-10',
    title: 'text-lg',
    description: 'text-sm',
    padding: 'p-6',
  },
  md: {
    icon: 'w-14 h-14',
    title: 'text-xl',
    description: 'text-base',
    padding: 'p-8',
  },
  lg: {
    icon: 'w-20 h-20',
    title: 'text-2xl',
    description: 'text-lg',
    padding: 'p-12',
  },
};

/**
 * EmptyState Component - A component to display when there is no data to show
 */
export const EmptyState: FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  children,
  size = 'md',
  showIllustration = false,
  className,
}) => {
  const config = sizeConfig[size];

  // Render the icon
  const renderIcon = () => {
    if (!icon) return null;

    // If icon is a React node, render it
    return (
      <div
        className={cn('mb-4', config.icon)}
        aria-hidden="true"
      >
        {icon}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        'w-full h-full min-h-[300px]',
        config.padding,
        showIllustration && 'bg-surface-container-low rounded-xl',
        'ubuntu',
        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* Content container */}
      <div className={cn('relative flex flex-col items-center', showIllustration && 'z-10')}>
        {/* Icon */}
        {renderIcon()}

        {/* Title */}
        <h2
          className={cn(
            'font-semibold text-on-surface mb-2',
            'syne',
            config.title
          )}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p
            className={cn(
              'text-on-surface-variant max-w-md mb-6',
              config.description
            )}
          >
            {description}
          </p>
        )}

        {/* Additional content */}
        {children && <div className="mb-6">{children}</div>}

        {/* Action button */}
        {action && (
          <Button
            variant={action.variant || 'primary'}
            size={action.size || 'md'}
            onClick={action.onClick}
            leftIcon={action.leftIcon}
            rightIcon={action.rightIcon}
            aria-label={action.label}
          >
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
