import React, { useState } from 'react';

/**
 * Client Details Activity Log Component
 * Displays a timeline of client activities with filtering options
 */
interface ActivityItem {
  id: string;
  type: 'task' | 'file' | 'comment' | 'status';
  title: string;
  user: string;
  timestamp: string;
  description?: string;
  files?: Array<{ name: string; size: string; type: string }>;
  taskId?: string;
}

const ClientDetailsActivityLog: React.FC = () => {
  const [dateFilter, setDateFilter] = useState('Last 30 Days');
  const [typeFilter, setTypeFilter] = useState('All Activities');
  const [userFilter, setUserFilter] = useState('Everyone');

  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'task',
      title: 'Task status updated to "In Review"',
      user: 'Sarah Jenkins',
      timestamp: '2 hours ago',
      description: 'Finalizing the design assets for the landing page hero. All components are responsive and adhere to the brand guidelines.',
      taskId: 'TASK-429'
    },
    {
      id: '2',
      type: 'file',
      title: 'New files uploaded to Assets/Q3_Campaign',
      user: 'Michael Chen',
      timestamp: '5 hours ago',
      files: [
        { name: 'Hero_Concept_V2.png', size: '4.2 MB', type: 'image' },
        { name: 'Brand_Guidelines.pdf', size: '12.8 MB', type: 'document' }
      ]
    },
    {
      id: '3',
      type: 'comment',
      title: 'New comment on Billing Inquiry',
      user: 'David Miller (Client)',
      timestamp: 'Yesterday, 3:42 PM'
    }
  ];

  const getActivityIcon = (type: ActivityItem['type']) => {
    const icons = {
      task: 'assignment_turned_in',
      file: 'cloud_upload',
      comment: 'chat',
      status: 'info'
    };
    return icons[type];
  };

  const getActivityColor = (type: ActivityItem['type']) => {
    const colors = {
      task: 'text-primary bg-primary/10',
      file: 'text-secondary bg-secondary-container/20',
      comment: 'text-tertiary bg-tertiary-container/20',
      status: 'text-on-surface-variant bg-surface-container-highest/20'
    };
    return colors[type];
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 h-full w-64 z-40 bg-surface-container-lowest flex flex-col pt-24 pb-8">
        <div className="px-8 mb-12">
          <h1 className="text-xl font-['Syne'] font-black text-primary">XenonOS</h1>
          <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-widest">Management Module</p>
        </div>
        <nav className="flex-1 space-y-1">
          {['Dashboard', 'Clients', 'Projects', 'Tasks', 'Team', 'Files', 'Billing', 'Communication', 'Settings'].map((item, index) => (
            <a
              key={item}
              href="#"
              className={`flex items-center gap-4 py-3 px-6 transition-all duration-400 ${
                index === 1 
                  ? 'text-primary bg-surface-container border-l-2 border-primary' 
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined">{item.toLowerCase()}</span>
              <span className="text-sm font-medium">{item}</span>
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

      {/* Top Navigation */}
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
              <p className="text-xs font-bold text-on-surface">Alex Thorne</p>
              <p className="text-[10px] text-on-surface-variant">Admin</p>
            </div>
            <img
              alt="User avatar"
              className="w-10 h-10 rounded-full border border-primary/20 p-0.5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJy0xkQRzspdf66VDQjPIS3x5NDmF7OBnyOlg1JLgC1pmveUU-N6DoA7HooucKirfoGfcwyMGWFioWB65c8o-qySC2Tcxy-88TT_Eyq8VwDws9OESZ6xW9Op_CwGBlEl80UZYAlFbLUYrFsNC3fEiH9U9Rqvn4V2szKW6CnFYpIWcntEr1orGxf23i8_XFcuqEzzAqOsOvXOQYFzLn5lUju84ijR8LsrpsU8zGlecD-pjU1a0iS_m-EMDJgW7yjVUxJl4UTXSP0_o"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-12 ml-64 px-12 max-w-7xl">
        {/* Client Header */}
        <section className="mb-10 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary border border-outline-variant/10 shadow-xl overflow-hidden">
                <img alt="Nexus Labs Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs3Qq57fs6rjSr-5AeWrlCRZ7LI-EsN9oAaJtTOOXGgOiKt-HvVMzXmqa9w7bJJxaut98thzf9Y4--6fOwuI182tJLYQ_-rGbyUGdNtVYwtvtFLG0KVd5Q9QnQ4CGRCSMbwZWvOPcXIpr6EY_6HKe8EzVwQWlrRQzPY_L81IYqcpZssP3tJqtznFzhZ53YjJmHXcG99x4NZkseKjowxtBNbFfhBhEk6xzOoDUEl3wiT2QCxVLVbrhEDtk0OR-q6pXONbaXt9vBzzU" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-4xl font-['Syne'] font-extrabold tracking-tight text-on-surface">Nexus Labs</h2>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">Priority A</span>
                </div>
                <p className="text-on-surface-variant flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">language</span> nexuslabs.io
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> San Francisco, CA
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-surface-container text-on-surface text-sm font-semibold rounded-xl border border-outline-variant/10 hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Profile
              </button>
              <button className="px-5 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-xl hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span>
                Message
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-10 flex gap-8 border-b border-outline-variant/10">
            {['Overview', 'Activity', 'Projects (12)', 'Documents', 'Financials'].map((tab, index) => (
              <a
                key={tab}
                href="#"
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  index === 1 
                    ? 'text-primary font-bold' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab}
                {index === 1 && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full shadow-[0_0_15px_2px_rgba(192,193,255,0.2)]"></span>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Activity Content Area */}
        <div className="grid grid-cols-12 gap-8">
          {/* Filters & Timeline Feed */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Filter Bar */}
            <div className="p-6 bg-surface-container rounded-xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { label: 'Last 30 Days', icon: 'calendar_today', value: dateFilter, onChange: setDateFilter },
                  { label: 'Type: All Activities', icon: 'filter_list', value: typeFilter, onChange: setTypeFilter },
                  { label: 'User: Everyone', icon: 'person', value: userFilter, onChange: setUserFilter }
                ].map((filter) => (
                  <div
                    key={filter.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest rounded-lg border border-outline-variant/10 text-xs cursor-pointer hover:border-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base text-on-surface-variant">{filter.icon}</span>
                    <span className="text-on-surface font-medium">{filter.value}</span>
                    <span className="material-symbols-outlined text-base text-on-surface-variant">expand_more</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                142 Total Events
              </div>
            </div>

            {/* Timeline Feed */}
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-outline-variant/20 to-transparent"></div>

              {/* Timeline Items */}
              {activities.map((activity) => (
                <div key={activity.id} className="relative mb-12 group">
                  <div className={`absolute -left-[25px] top-2 w-4 h-4 rounded-full bg-surface border-2 z-10 ${
                    activity.type === 'task' ? 'border-primary' :
                    activity.type === 'file' ? 'border-secondary-container' :
                    activity.type === 'comment' ? 'border-tertiary-container' : 'border-outline-variant'
                  }`}></div>
                  <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/5 hover:border-primary/20 transition-all duration-400">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityColor(activity.type)}`}>
                          <span className={`material-symbols-outlined text-lg ${
                            activity.type === 'task' ? 'text-primary' :
                            activity.type === 'file' ? 'text-secondary' :
                            activity.type === 'comment' ? 'text-tertiary' : 'text-on-surface-variant'
                          }`}>{getActivityIcon(activity.type)}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-on-surface">{activity.title}</h4>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">
                            {activity.type === 'task' ? 'Updated by' : 
                             activity.type === 'file' ? 'Uploaded by' : 
                             'Posted by'} {activity.user} • {activity.timestamp}
                          </p>
                        </div>
                      </div>
                      {activity.taskId && (
                        <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">
                          {activity.taskId}
                        </span>
                      )}
                    </div>
                    {activity.description && (
                      <div className="ml-11">
                        <p className="text-sm text-on-surface-variant leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
                          "{activity.description}"
                        </p>
                      </div>
                    )}
                    {activity.files && (
                      <div className="ml-11 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {activity.files.map((file, idx) => (
                          <div
                            key={idx}
                            className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 flex items-center gap-3 hover:bg-surface-container-highest transition-colors cursor-pointer group/file"
                          >
                            <span className="material-symbols-outlined text-primary">{file.type === 'image' ? 'image' : 'description'}</span>
                            <div className="overflow-hidden">
                              <p className="text-xs font-medium text-on-surface truncate">{file.name}</p>
                              <p className="text-[9px] text-on-surface-variant">{file.size}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Activity Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Activity Summary Card */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-['Syne'] font-bold text-lg mb-4">Activity Summary</h3>
              <div className="space-y-4">
                {[
                  { label: 'Tasks Updated', count: 48, color: 'text-primary' },
                  { label: 'Files Uploaded', count: 67, color: 'text-secondary' },
                  { label: 'Comments Added', count: 23, color: 'text-tertiary' },
                  { label: 'Status Changes', count: 4, color: 'text-on-surface-variant' }
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-2 border-b border-outline-variant/5 last:border-0">
                    <span className="text-sm text-on-surface-variant">{stat.label}</span>
                    <span className={`text-sm font-bold ${stat.color}`}>{stat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Activity */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-['Syne'] font-bold text-lg mb-4">Team Activity</h3>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Jenkins', role: 'Lead Designer', active: true },
                  { name: 'Michael Chen', role: 'Developer', active: true },
                  { name: 'David Miller', role: 'Client Contact', active: false }
                ].map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-sm font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-on-surface">{member.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{member.role}</p>
                    </div>
                    {member.active && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDetailsActivityLog;
