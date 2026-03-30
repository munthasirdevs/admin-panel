/**
 * XenonOS Shared Components
 * 
 * A collection of reusable components for the XenonOS admin panel design system.
 * These components follow the dark theme with indigo/purple accent colors.
 */

import React from 'react';

// Tailwind config for XenonOS theme colors
export const xenonTheme = {
  colors: {
    primary: "#c0c1ff",
    primaryContainer: "#8083ff",
    primaryFixed: "#e1e0ff",
    primaryFixedDim: "#c0c1ff",
    onPrimary: "#1000a9",
    onPrimaryFixed: "#07006c",
    onPrimaryContainer: "#0d0096",
    secondary: "#c0c1ff",
    secondaryContainer: "#42447b",
    tertiary: "#ffb783",
    tertiaryContainer: "#d97721",
    background: "#0f131d",
    surface: "#0f131d",
    surfaceContainer: "#1c1f2a",
    surfaceContainerLow: "#171b26",
    surfaceContainerLowest: "#0a0e18",
    surfaceContainerHigh: "#262a35",
    surfaceContainerHighest: "#313540",
    surfaceBright: "#353944",
    onSurface: "#dfe2f1",
    onSurfaceVariant: "#c7c4d7",
    outline: "#908fa0",
    outlineVariant: "#464554",
    error: "#ffb4ab",
    errorContainer: "#93000a",
    onError: "#690005",
  },
  fonts: {
    headline: "'Syne', sans-serif",
    body: "'Outfit', sans-serif",
    label: "'Manrope', sans-serif",
  }
};

/**
 * Material Symbols Icon Component
 * Uses Google Material Symbols Outlined font
 */
export const MaterialIcon = ({ 
  children, 
  filled = false, 
  className = "", 
  size = "24",
  ...props 
}) => (
  <span 
    className={`material-symbols-outlined ${className}`}
    style={{ 
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' ${size}`,
      fontSize: size 
    }}
    {...props}
  >
    {children}
  </span>
);

/**
 * Sidebar Navigation Component
 * Collapsible sidebar with hover expansion effect
 */
export const Sidebar = ({ 
  activeItem = "", 
  items = [], 
  brandName = "XenonOS", 
  brandSubtitle = "Premium Management",
  userAvatar,
  userName,
  userRole,
  onNavigate 
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <aside 
      className={`fixed left-0 top-0 h-full bg-[#1c1f2a] z-40 transition-all duration-400 overflow-hidden group
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full py-8 px-4">
        {/* Brand Header */}
        <div className="flex items-center gap-4 mb-10 px-2">
          <div className="w-10 h-10 min-w-[40px] rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(192,193,255,0.3)]">
            <MaterialIcon filled>bolt</MaterialIcon>
          </div>
          <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'} overflow-hidden whitespace-nowrap`}>
            <h1 className="font-['Syne'] font-extrabold text-[#c0c1ff] text-xl leading-none">{brandName}</h1>
            <p className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">{brandSubtitle}</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.(item);
              }}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-400
                ${item.active 
                  ? 'bg-gradient-to-br from-[#c0c1ff] to-[#8083ff] text-[#0f131d] shadow-[0_0_4px_#c0c1ff]' 
                  : 'text-[#c7c4d7] hover:bg-[#313540] hover:text-[#dfe2f1]'
                }
              `}
            >
              <MaterialIcon filled={item.active}>{item.icon}</MaterialIcon>
              <span className={`transition-opacity duration-300 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* User Profile */}
        {userAvatar && isExpanded && (
          <div className="mt-auto pt-6 border-t border-outline-variant/10">
            <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
              <img 
                src={userAvatar} 
                alt={userName}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-on-surface truncate">{userName}</p>
                <p className="text-xs text-on-surface-variant truncate">{userRole}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

/**
 * Top Navigation Bar Component
 */
export const TopNavBar = ({
  searchPlaceholder = "Search...",
  showSearch = true,
  showNotifications = true,
  showHelp = true,
  userAvatar,
  userName,
  userRole,
  onSearch,
  onNotificationClick,
  onHelpClick
}) => (
  <header className="fixed top-0 right-0 left-20 z-50 bg-[#0f131d]/70 backdrop-blur-xl flex justify-between items-center px-8 h-16 shadow-[0_32px_32px_-4px_rgba(10,14,24,0.5)]">
    <div className="flex items-center gap-8">
      {showSearch && (
        <div className="flex items-center bg-surface-container-lowest px-4 py-1.5 rounded-full border border-outline-variant/10">
          <MaterialIcon className="text-primary text-sm mr-2">search</MaterialIcon>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-64 placeholder:text-on-surface-variant/50" 
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch?.(e.target.value)}
            type="text"
          />
        </div>
      )}
    </div>
    
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        {showNotifications && (
          <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors text-on-surface-variant relative">
            <MaterialIcon>notifications</MaterialIcon>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        )}
        {showHelp && (
          <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors text-on-surface-variant">
            <MaterialIcon>help_outline</MaterialIcon>
          </button>
        )}
      </div>
      
      {userAvatar && (
        <>
          <div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="text-right">
              <p className="text-sm font-semibold text-on-surface leading-none">{userName}</p>
              <p className="text-[10px] text-primary uppercase tracking-tighter mt-1">{userRole}</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 p-0.5 group-hover:border-primary transition-all duration-400">
              <img alt={userName} className="w-full h-full rounded-full object-cover" src={userAvatar} />
            </div>
          </div>
        </>
      )}
    </div>
  </header>
);

/**
 * Bento Grid Card Component
 * A versatile card component for the bento-grid layout style
 */
export const BentoCard = ({ 
  children, 
  className = "", 
  hover = true,
  onClick,
  ...props 
}) => (
  <div 
    className={`bg-surface-container rounded-2xl p-6 border border-outline-variant/5 
      ${hover ? 'hover:bg-surface-container-high hover:scale-[1.02] transition-all duration-400' : ''}
      ${onClick ? 'cursor-pointer' : ''}
      ${className}
    `}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);

/**
 * KPI Stat Card Component
 */
export const KPIStatCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  trendValue,
  color = "primary"
}) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    tertiary: "bg-tertiary/10 text-tertiary",
    secondary: "bg-secondary/10 text-secondary",
    error: "bg-error/10 text-error",
  };

  return (
    <BentoCard>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
          <MaterialIcon>{icon}</MaterialIcon>
        </div>
        {trend && (
          <span className={`text-xs font-bold flex items-center ${trend === 'up' ? 'text-emerald-400' : 'text-error'}`}>
            <MaterialIcon className="text-xs">{trend === 'up' ? 'trending_up' : 'trending_down'}</MaterialIcon>
            {trendValue}
          </span>
        )}
      </div>
      <p className="text-on-surface-variant text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-['Syne'] font-bold text-on-surface">{value}</h3>
    </BentoCard>
  );
};

/**
 * Button Component with XenonOS styling
 */
export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  icon,
  ...props 
}) => {
  const variants = {
    primary: "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_0_20px_rgba(192,193,255,0.3)] hover:scale-105",
    secondary: "bg-surface-container-highest text-on-surface hover:bg-surface-bright",
    outline: "border border-outline-variant/20 text-on-surface hover:bg-surface-container-high",
    ghost: "text-on-surface-variant hover:text-on-surface hover:bg-surface-container",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={`rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {icon && <MaterialIcon size="20">{icon}</MaterialIcon>}
      {children}
    </button>
  );
};

/**
 * Input Component
 */
export const Input = ({ 
  label, 
  icon, 
  className = "", 
  ...props 
}) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
        {label}
      </label>
    )}
    <div className="relative">
      {icon && (
        <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
          {icon}
        </MaterialIcon>
      )}
      <input 
        className={`w-full bg-surface-container-lowest border-none rounded-xl 
          ${icon ? 'pl-10' : 'px-4'} 
          py-3 text-on-surface focus:ring-2 focus:ring-primary/40 transition-all
          ${className}
        `}
        {...props}
      />
    </div>
  </div>
);

/**
 * Table Component
 */
export const Table = ({ columns, data, onRowClick, className = "" }) => (
  <div className={`overflow-x-auto ${className}`}>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-surface-container-low/50">
          {columns.map((col, index) => (
            <th 
              key={index}
              className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/5">
        {data.map((row, rowIndex) => (
          <tr 
            key={rowIndex}
            className={`hover:bg-surface-container-high transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            onClick={() => onRowClick?.(row)}
          >
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="px-6 py-4">
                {col.render ? col.render(row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * Badge Component
 */
export const Badge = ({ 
  children, 
  variant = "default", 
  className = "" 
}) => {
  const variants = {
    default: "bg-surface-container-highest text-on-surface-variant",
    primary: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-emerald-500/10 text-emerald-400",
    warning: "bg-tertiary/10 text-tertiary border border-tertiary/20",
    error: "bg-error/10 text-error border border-error/20",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

/**
 * Progress Bar Component
 */
export const ProgressBar = ({ value, max = 100, color = "primary", className = "" }) => {
  const percentage = (value / max) * 100;
  const colors = {
    primary: "bg-primary",
    tertiary: "bg-tertiary",
    error: "bg-error",
  };

  return (
    <div className={`w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden ${className}`}>
      <div 
        className={`h-full ${colors[color]} rounded-full transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

/**
 * Avatar Component
 */
export const Avatar = ({ 
  src, 
  alt, 
  size = "md", 
  fallback,
  className = "" 
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden border-2 border-primary/30 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold">
          {fallback}
        </div>
      )}
    </div>
  );
};

/**
 * Modal Component
 */
export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  footer 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface-container rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-outline-variant/10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-['Syne'] text-xl font-bold text-on-surface">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors">
            <MaterialIcon>close</MaterialIcon>
          </button>
        </div>
        <div className="mb-6">{children}</div>
        {footer && (
          <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/10">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Tabs Component
 */
export const Tabs = ({ tabs, activeTab, onChange, className = "" }) => (
  <div className={`flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl w-fit ${className}`}>
    {tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => onChange?.(tab.value)}
        className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all
          ${activeTab === tab.value 
            ? 'bg-surface-container text-primary font-bold shadow-sm' 
            : 'text-on-surface-variant hover:text-on-surface'
          }
        `}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

/**
 * Empty State Component
 */
export const EmptyState = ({ icon, title, description, action }) => (
  <div className="flex flex-col items-center justify-center p-12 text-center">
    <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-4">
      <MaterialIcon className="text-on-surface-variant" size="32">{icon}</MaterialIcon>
    </div>
    <h3 className="font-['Syne'] text-lg font-bold text-on-surface mb-2">{title}</h3>
    <p className="text-on-surface-variant text-sm mb-6 max-w-sm">{description}</p>
    {action}
  </div>
);

// Export all components
export default {
  MaterialIcon,
  Sidebar,
  TopNavBar,
  BentoCard,
  KPIStatCard,
  Button,
  Input,
  Table,
  Badge,
  ProgressBar,
  Avatar,
  Modal,
  Tabs,
  EmptyState,
  xenonTheme
};
