import React from 'react';

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Clients', onItemClick }) => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Clients', icon: 'group' },
    { name: 'Projects', icon: 'account_tree' },
    { name: 'Tasks', icon: 'assignment_turned_in' },
    { name: 'Team', icon: 'group_work' },
    { name: 'Files', icon: 'folder_open' },
    { name: 'Billing', icon: 'payments' },
    { name: 'Communication', icon: 'chat_bubble_outline' },
    { name: 'Settings', icon: 'settings' }
  ];

  return (
    <aside className="fixed left-0 h-full w-64 z-40 bg-surface-container-lowest flex flex-col pt-24 pb-8">
      <div className="px-8 mb-12">
        <h1 className="text-xl font-['Syne'] font-black text-primary">XenonOS</h1>
        <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-widest">Management Module</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onItemClick?.(item.name);
            }}
            className={`flex items-center gap-4 py-3 px-6 transition-all duration-400 ${
              activeItem === item.name
                ? 'text-primary bg-surface-container border-l-2 border-primary'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </nav>
      <div className="px-6 mt-auto">
        <button className="w-full py-3 bg-surface-container rounded-xl text-on-surface font-medium hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
