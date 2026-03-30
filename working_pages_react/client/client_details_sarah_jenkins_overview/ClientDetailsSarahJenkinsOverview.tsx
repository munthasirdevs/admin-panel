import React, { useState } from 'react';
import Sidebar from '../../shared/Sidebar';
import TopBar from '../../shared/TopBar';

/**
 * Client Details - Sarah Jenkins Overview Component
 * Client overview page with bento grid stats and activity feed
 */
const ClientDetailsSarahJenkinsOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Total Projects', value: '4', icon: 'folder_special', color: 'text-primary bg-primary/10' },
    { label: 'Active Tasks', value: '12', icon: 'task_alt', color: 'text-secondary bg-secondary/10' },
    { label: 'Total Revenue', value: '$92,750', icon: 'payments', color: 'text-tertiary bg-tertiary/10' },
    { label: 'Last Activity', value: '2h ago', icon: 'schedule', color: 'text-on-surface-variant bg-surface-variant' }
  ];

  const activities = [
    {
      id: '1',
      type: 'task',
      title: 'Task Updated: Landing Page Redesign',
      description: 'Sarah Jenkins moved Mobile Responsiveness to Review.',
      time: '14:20 PM',
      color: 'text-primary'
    },
    {
      id: '2',
      type: 'file',
      title: 'New File Uploaded',
      file: 'Brand_Guidelines_V2.pdf',
      size: '4.2 MB',
      uploadedBy: 'Alex Riva',
      time: '11:05 AM',
      color: 'text-secondary'
    },
    {
      id: '3',
      type: 'feedback',
      title: 'Client Feedback Received',
      description: '"The new color palette feels much more professional. Let\'s proceed with these tones."',
      time: 'Yesterday',
      color: 'text-on-surface-variant'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <Sidebar activeItem="Clients" />
      <TopBar />

      <main className="lg:pl-64 pt-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto p-8 space-y-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                <span>Clients</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary/80">Velocity Creative Agency</span>
              </nav>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-['Syne'] font-extrabold tracking-tight text-on-surface">Velocity Creative</h1>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider flex items-center gap-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline-variant/20 hover:bg-surface-container-high transition-colors text-sm font-medium">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline-variant/20 hover:bg-surface-container-high transition-colors text-sm font-medium">
                <span className="material-symbols-outlined text-lg">chat_bubble_outline</span>
                Message
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold transition-all scale-100 active:scale-95">
                <span className="material-symbols-outlined text-lg">add</span>
                Assign Project
              </button>
            </div>
          </header>

          {/* Tabbed Navigation */}
          <div className="flex gap-8 border-b border-outline-variant/10">
            {['Overview', 'Activity', 'Documents', 'Projects'].map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab}
              </a>
            ))}
          </div>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* KPI Cards */}
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="md:col-span-3 group bg-surface-container p-6 rounded-2xl transition-all duration-400 hover:scale-[1.02] hover:bg-surface-container-high"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`p-2 rounded-lg ${stat.color}`}>
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Stats</span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-['Syne'] font-bold text-on-surface mt-1">{stat.value}</h3>
              </div>
            ))}

            {/* Main Panel: Activity Feed */}
            <div className="md:col-span-8 bg-surface-container rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                <h4 className="font-['Syne'] font-bold text-on-surface">Timeline Activity</h4>
                <button className="text-xs text-primary font-semibold hover:underline">View All</button>
              </div>
              <div className="p-6 space-y-8">
                {activities.map((activity, idx) => (
                  <div key={activity.id} className="flex gap-4 relative">
                    {idx < activities.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-outline-variant/20"></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                      activity.type === 'task' ? 'bg-primary/20' :
                      activity.type === 'file' ? 'bg-secondary/20' : 'bg-surface-variant'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${activity.color}`}></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium text-on-surface">{activity.title}</p>
                        <span className="text-[10px] text-on-surface-variant uppercase font-bold">{activity.time}</span>
                      </div>
                      {activity.description && (
                        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                          {activity.description}
                        </p>
                      )}
                      {activity.file && (
                        <div className="mt-3 bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-outline-variant/5">
                          <span className="material-symbols-outlined text-secondary">description</span>
                          <div>
                            <p className="text-xs font-semibold">{activity.file}</p>
                            <p className="text-[10px] text-on-surface-variant">{activity.size} • Uploaded by {activity.uploadedBy}</p>
                          </div>
                          <button className="ml-auto material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                            download
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Panel */}
            <div className="md:col-span-4 space-y-6">
              {/* Client Health */}
              <div className="bg-surface-container p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-['Syne'] font-bold text-on-surface">Client Health</h4>
                  <span className="text-xs font-bold text-primary">94%</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(192,193,255,0.4)]" style={{ width: '94%' }}></div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Positive engagement score based on prompt invoice payments and high task approval rate.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-surface-container p-6 rounded-2xl">
                <h4 className="font-['Syne'] font-bold text-on-surface mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                      <img
                        alt="Account Manager"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzfEg1gjeqeKUmchiNzicYX24xyM2tDdd2lOFBPq1TKLyjlT8b5mSbCUrgt_AouTnKoF_LS7yxgIzdT_3eDtvOUQYyCpZwgNhFuaybZjWG2Hmls-O8BuhOr7ZQG4-08w_w4hTrWlNvmYpuhrTus5XQU8p37w5vlEfsZQq-_wHNKLwhVynPDjYLp4ZVZIc6XXnAnlveygDX9hErDxy4uIjcTcJ_Ak6biO_2_awzPs-iMnZxMLKYB427UgWFeAII4wwA1cvC1M9d-7k"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium">Account Manager</p>
                      <p className="text-sm font-bold text-on-surface">Marcus Thorne</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/10 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">mail</span>
                      <span>billing@velocity.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">call</span>
                      <span>+1 (555) 902-3412</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Snapshot */}
              <div className="relative group h-48 rounded-2xl overflow-hidden">
                <img
                  alt="Team Work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQAgESSlk50ZPsXCgL2_DseYsmdhW_GNfWCHaBkr2JDVDBlGUrVaypdXunQaFIeAJKf3l_sZLcj_Z63GfWKS1Q3Tjj1XE4fXfH8T1B6vLEDr1WVFaGBAFVknbXyPxjrYQTBnJYB4H_VKardI4ojZlFjd52xDhlpFZ5xrIGqWSqOFiHYrQ2KZMel9Q1SBrcVw7xj3qcBI_36U8dalMaYOLJTR7-lGkWDYmsEU6Tq_pe-kUS6mWXFsePjjKpcsWGu1y-P2X-XT2jKg0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Active Project</p>
                  <h5 className="text-sm font-bold text-white">Quantum Interface Kit</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDetailsSarahJenkinsOverview;
