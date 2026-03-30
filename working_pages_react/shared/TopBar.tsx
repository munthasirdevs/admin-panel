import React from 'react';

interface TopBarProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onSearch?: (query: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  userName = 'Alex Thorne',
  userRole = 'Admin',
  userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJy0xkQRzspdf66VDQjPIS3x5NDmF7OBnyOlg1JLgC1pmveUU-N6DoA7HooucKirfoGfcwyMGWFioWB65c8o-qySC2Tcxy-88TT_Eyq8VwDws9OESZ6xW9Op_CwGBlEl80UZYAlFbLUYrFsNC3fEiH9U9Rqvn4V2szKW6CnFYpIWcntEr1orGxf23i8_XFcuqEzzAqOsOvXOQYFzLn5lUju84ijR8LsrpsU8zGlecD-pjU1a0iS_m-EMDJgW7yjVUxJl4UTXSP0_o',
  onSearch
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container/70 backdrop-blur-md flex justify-between items-center px-8 h-20 ml-64" style={{ width: 'calc(100% - 16rem)' }}>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <span className="absolute inset-y-0 left-3 flex items-center text-on-surface-variant group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">search</span>
          </span>
          <input
            className="bg-surface-container-lowest border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary/40 transition-all"
            placeholder="Quick search..."
            type="text"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-surface-container"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-outline-variant/20">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface">{userName}</p>
            <p className="text-[10px] text-on-surface-variant">{userRole}</p>
          </div>
          <img
            alt="User avatar"
            className="w-10 h-10 rounded-full border border-primary/20 p-0.5"
            src={userAvatar}
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
