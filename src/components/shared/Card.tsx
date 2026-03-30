import type { FC, ReactNode, HTMLAttributes } from 'react';
import { memo } from 'react';
import { cn } from '@/utils';
import type { ClassNameProps } from '@/types';

/**
 * Card variant options
 */
export type CardVariant = 'default' | 'glass' | 'elevated' | 'outlined';

/**
 * Props for the Card component
 */
export interface CardProps extends ClassNameProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the card
   * @default 'default'
   */
  variant?: CardVariant;
  /**
   * Whether the card is clickable
   * @default false
   */
  clickable?: boolean;
  /**
   * Callback when card is clicked
   */
  onClick?: () => void;
  /**
   * Card header content
   */
  header?: ReactNode;
  /**
   * Card footer content
   */
  footer?: ReactNode;
  /**
   * Whether to apply hover effects
   * @default true
   */
  hoverable?: boolean;
  /**
   * Whether the card is currently selected/active
   * @default false
   */
  selected?: boolean;
  /**
   * Loading state
   * @default false
   */
  isLoading?: boolean;
  /**
   * Image to display at the top of the card
   */
  image?: ReactNode;
  /**
   * Avatar to display in the header
   */
  avatar?: ReactNode;
  /**
   * Action buttons for the header
   */
  actions?: ReactNode;
}

/**
 * Variant configurations for card styling
 */
const variantStyles: Record<CardVariant, { base: string; hover: string }> = {
  default: {
    base: 'bg-surface-container border border-outline-variant',
    hover: 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5',
  },
  glass: {
    base: 'glass-card border border-white/5',
    hover: 'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10',
  },
  elevated: {
    base: 'bg-surface-container-high shadow-lg border border-transparent',
    hover: 'hover:shadow-xl hover:-translate-y-0.5',
  },
  outlined: {
    base: 'bg-transparent border-2 border-outline-variant',
    hover: 'hover:border-primary hover:bg-surface-container-low',
  },
};

/**
 * Card Component - A versatile container component with multiple variants
 *
 * @remarks
 * The Card component is a flexible container that can be used for displaying
 * content in a structured way. It supports multiple visual variants and
 * includes optional header, footer, image, and action slots.
 *
 * @example
 * ```tsx
 * <Card variant="glass">
 *   <Card.Header title="Card Title" />
 *   <Card.Body>
 *     <p>Card content goes here...</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button>Action</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * <Card
 *   variant="elevated"
 *   clickable
 *   onClick={handleClick}
 *   image={<img src="/image.jpg" alt="Card image" />}
 * >
 *   <Card.Body>
 *     <h3>Clickable Card</h3>
 *     <p>This card can be clicked</p>
 *   </Card.Body>
 * </Card>
 * ```
 */
export const Card: FC<CardProps> & {
  Header: FC<CardHeaderProps>;
  Body: FC<ClassNameProps>;
  Footer: FC<CardFooterProps>;
} = ({
  variant = 'default',
  clickable = false,
  onClick,
  header,
  footer,
  hoverable = true,
  selected = false,
  isLoading = false,
  image,
  avatar,
  actions,
  children,
  className,
  ...props
}) => {
  const styles = variantStyles[variant];

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <div
      {...props}
      className={cn(
        'rounded-xl overflow-hidden',
        'transition-all duration-300',
        styles.base,
        hoverable && !isLoading && styles.hover,
        clickable && 'cursor-pointer',
        selected && 'ring-2 ring-primary ring-offset-2 ring-offset-surface',
        isLoading && 'opacity-50 pointer-events-none',
        'ubuntu',
        className
      )}
      onClick={handleClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
      aria-pressed={selected}
    >
      {/* Image Section */}
      {image && <div className="w-full h-48 object-cover">{image}</div>}

      {/* Header Section */}
      {header && (
        <CardHeader
          avatar={avatar}
          actions={actions}
          className={cn(image ? 'border-t' : '', 'border-outline-variant')}
        >
          {header}
        </CardHeader>
      )}

      {/* Body Section - render children directly */}
      {children}

      {/* Footer Section */}
      {footer && (
        <CardFooter className="border-t border-outline-variant">
          {footer}
        </CardFooter>
      )}
    </div>
  );
};

/**
 * Props for Card Header
 */
export interface CardHeaderProps extends ClassNameProps {
  /**
   * Header title
   */
  title?: ReactNode;
  /**
   * Header subtitle
   */
  subtitle?: ReactNode;
  /**
   * Avatar to display
   */
  avatar?: ReactNode;
  /**
   * Action buttons
   */
  actions?: ReactNode;
}

/**
 * Card Header Component
 */
const CardHeader: FC<CardHeaderProps> = ({
  title,
  subtitle,
  avatar,
  actions,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between px-6 py-4',
        'bg-surface-container-low/50',
        className
      )}
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {avatar && <div className="flex-shrink-0">{avatar}</div>}

        {/* Title and Subtitle */}
        {(title || subtitle || children) && (
          <div className="flex-1 min-w-0">
            {title && (
              <h3
                className={cn(
                  'text-lg font-semibold text-on-surface',
                  'syne truncate'
                )}
              >
                {title || children}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-on-surface-variant mt-0.5 truncate">
                {subtitle}
              </p>
            )}
            {/* If no title/subtitle props, render children */}
            {!title && !subtitle && children}
          </div>
        )}
      </div>

      {/* Actions */}
      {actions && <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>}
    </div>
  );
};

/**
 * Props for Card Footer
 */
export interface CardFooterProps extends ClassNameProps {
  /**
   * Footer content
   */
  children?: ReactNode;
  /**
   * Whether to align actions to the end
   * @default true
   */
  alignEnd?: boolean;
}

/**
 * Card Footer Component
 */
const CardFooter: FC<CardFooterProps> = ({
  children,
  alignEnd = true,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center px-6 py-4',
        'bg-surface-container-low/30',
        alignEnd && 'justify-end',
        'gap-3',
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Card Body Component
 */
const CardBody: FC<ClassNameProps> = ({ children, className }) => {
  return (
    <div className={cn('px-6 py-4', className)}>
      {children}
    </div>
  );
};

// Attach sub-components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default memo(Card);
