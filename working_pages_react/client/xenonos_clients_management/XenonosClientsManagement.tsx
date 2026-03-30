import React, { useState } from 'react';
import Sidebar from '../../shared/Sidebar';
import TopBar from '../../shared/TopBar';

/**
 * Xenonos Clients Management Component
 * Main clients list/management page with table view and filters
 */
interface Client {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Active' | 'Pending' | 'Inactive';
  projects: number;
  lastActivity: string;
  revenue: string;
  revenueType: 'Annual Value' | 'Project Value' | 'Total Revenue';
}

const XenonosClientsManagement: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');
  const [bulkAction, setBulkAction] = useState(false);

  const clients: Client[] = [
    {
      id: '1',
      name: 'Nebula Dynamics',
      email: 'nebula@contact.io',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqIzLMh_qmoaZw__cT43Val75XA1885RusTammKETIevHWpb9F7nZo2SlflQyA_snTs5PUuNPMIKkaSQ_Fwhzvvd0U8O1Ys_yJPl0FleyydKalvuUs1aIlYX873buk4jTZHIlsAuDZO5l_YyL0gyhKcT1BTGykGELSMlbV15p0mpmYDxvND-XIQbM6pZB77AMH2H9W2zy1ZmffenKUCXWk7nuKFI0J2-wRLgbfHE41muZ-0lVEQn59Z-40Nq5Y',
      status: 'Active',
      projects: 14,
      lastActivity: '2 hours ago',
      revenue: '$124,500.00',
      revenueType: 'Annual Value'
    },
    {
      id: '2',
      name: 'Aetherial Systems',
      email: 'ops@aetherial.tech',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_tmp3fgkBo6lMoTtsxJVbA3tdN_8d8lPds3eskONXz68EsYrigSopqS8L8Op6Suwn-49EZk29YYsmASd0alOsuX_tKEqKjweN3HWDXYDqvsVvgyILuFhJ8K6KlGrL8bJpa8lz212-O3qlwEexPycNO4dx9ucDtbGTlp1OSKIhi-KcNh5rMdOt9Kz-Xwi6v5Ae30ChZez71T3BqHyeXXwnxzUnViM8Ktt3HksOyfP82n-ZMSTWsS4j7BJjhGgIBX7zFZ77EoC2Di4',
      status: 'Pending',
      projects: 3,
      lastActivity: 'Yesterday, 11:45 PM',
      revenue: '$42,200.00',
      revenueType: 'Project Value'
    },
    {
      id: '3',
      name: 'Vortex Ventures',
      email: 'ceo@vortex.com',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfcn3Fii_joxD8hvr5Ibz-M0R6VPtsey2vblR0bQ_QetVN365rdehC4x-XEIT7LFaLUg_r-xcItBTUPH6YeuiJJw-FO5qk4Hh2kr2BSre4trOglb6VRv56-gfai5w5z66h4xUueWGwGNJ8DAqCe17uCK08J_N_nY6Eg4oxJhE53ES8dvccxoBs6reP_w9cmddNgVRV1Q_X9B43a5_P-Xjp_fmE2ingrzxwW7iEePy4bxhdeyqipSMBYFXWWsUazq1ch7E9B16avJk',
      status: 'Inactive',
      projects: 8,
      lastActivity: 'Oct 24, 2023',
      revenue: '$98,000.00',
      revenueType: 'Total Revenue'
    },
    {
      id: '4',
      name: 'Prism Creative',
      email: 'hello@prism.studio',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNRwaEzOJu4xpLGvYbcXh-nNTpqEsB0TyGV-UvH4aqx5Se0oj2bh5734AYDL8czzf6bISjvBIzgGf4TKWOkwqaDSrwlTcJ9goN9Whvkm1iscLDUOJHaa9B-TNyW8UbFahZMpSAhc0vJHsjQbbtzrtzTOsCez-JonzZC0hh-4U353egbMlJb1URlcfL742C35sytx4Z0H6peTycW68GEguDqgzsBcjU0gGknbcE7RxDBQgncu16QWRXvovBOnFkOKHeCFbJNEYu76o',
      status: 'Active',
      projects: 22,
      lastActivity: '5 mins ago',
      revenue: '$210,000.00',
      revenueType: 'Annual Value'
    }
  ];

  const getStatusColor = (status: Client['status']) => {
    const colors = {
      Active: 'bg-primary/10 text-primary border-primary/20',
      Pending: 'bg-tertiary/10 text-tertiary border-tertiary/20',
      Inactive: 'bg-on-surface-variant/10 text-on-surface-variant border-on-surface-variant/20'
    };
    return colors[status];
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <Sidebar activeItem="Clients" />
      <TopBar userName="Alex Mercer" userRole="Lead Architect" />

      <main className="ml-64 pt-32 p-12 min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h1 className="text-5xl font-['Syne'] font-extrabold text-on-surface">Clients</h1>
            <p className="text-on-surface-variant text-lg">Manage and monitor all client relationships.</p>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary h-14 px-8 rounded-xl font-bold flex items-center gap-3 transition-all scale-100 hover:scale-[1.02] shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">person_add</span>
            Add Client
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container rounded-2xl p-4 flex flex-wrap items-center gap-4 mb-8 shadow-sm">
          {['Status', 'Project assignment', 'Sort by: Recent'].map((filter) => (
            <div
              key={filter}
              className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-on-surface-variant text-sm border border-outline-variant/10 cursor-pointer hover:border-primary/20 transition-colors"
            >
              {filter.includes('Status') || filter.includes('Sort') ? (
                <span className="material-symbols-outlined text-sm">filter_list</span>
              ) : null}
              {filter}
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-on-surface-variant text-xs font-medium uppercase tracking-widest px-4">
              <input
                className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary/20"
                type="checkbox"
                checked={bulkAction}
                onChange={(e) => setBulkAction(e.target.checked)}
              />
              Bulk Action
            </div>
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-2 transition-colors ${
                viewMode === 'kanban' ? 'text-primary bg-surface-container-highest rounded-lg' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">view_kanban</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list' ? 'text-primary bg-surface-container-highest rounded-lg' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">list</span>
            </button>
          </div>
        </div>

        {/* Clients List Table */}
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-4 text-on-surface-variant text-xs font-bold uppercase tracking-widest">
            <div className="col-span-4">Client Name</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-center">Projects</div>
            <div className="col-span-2">Last Activity</div>
            <div className="col-span-2 text-right pr-4">Revenue</div>
            <div className="col-span-1"></div>
          </div>

          {/* Client Items */}
          {clients.map((client) => (
            <div
              key={client.id}
              className="grid grid-cols-12 gap-4 items-center px-8 py-5 bg-surface-container rounded-2xl transition-all duration-400 hover:scale-[1.01] hover:bg-surface-container-high cursor-pointer border border-outline-variant/5 shadow-lg group"
            >
              <div className="col-span-4 flex items-center gap-4">
                <input
                  className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary/20"
                  type="checkbox"
                />
                <img
                  className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={client.name}
                  src={client.avatar}
                />
                <div>
                  <div className="text-on-surface font-semibold text-lg">{client.name}</div>
                  <div className="text-on-surface-variant text-xs font-medium">{client.email}</div>
                </div>
              </div>
              <div className="col-span-2">
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${getStatusColor(client.status)}`}>
                  {client.status}
                </span>
              </div>
              <div className="col-span-1 text-center">
                <div className="text-on-surface font-bold text-lg">{client.projects.toString().padStart(2, '0')}</div>
              </div>
              <div className="col-span-2 text-on-surface-variant text-sm">
                {client.lastActivity}
              </div>
              <div className="col-span-2 text-right pr-4">
                <div className="text-on-surface font-['Syne'] font-bold">{client.revenue}</div>
                <div className="text-on-surface-variant text-[10px] uppercase tracking-tighter">{client.revenueType}</div>
              </div>
              <div className="col-span-1 flex justify-end gap-2">
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Asymmetric Bento Insight Section */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-8 bg-surface-container rounded-2xl p-8 relative overflow-hidden group border border-outline-variant/5">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-3xl font-['Syne'] font-bold text-primary mb-2">Revenue Growth</h3>
                <p className="text-on-surface-variant max-w-md">
                  The client ecosystem has expanded by 12.4% this quarter with primary growth in Tech and Venture sectors.
                </p>
              </div>
              <div className="flex items-end gap-1 mt-8 h-32">
                {[40, 60, 45, 85, 70, 100].map((height, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-surface-container-highest rounded-t-lg transition-all duration-500 group-hover:bg-primary/40"
                    style={{ 
                      height: `${height}%`,
                      background: idx === 5 ? undefined : undefined
                    }}
                  ></div>
                ))}
                <div className="w-full bg-primary/90 rounded-t-lg shadow-[0_0_20px_rgba(192,193,255,0.3)]" style={{ height: '100%' }}></div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <span className="material-symbols-outlined text-[240px]">monitoring</span>
            </div>
          </div>

          <div className="col-span-4 bg-primary rounded-2xl p-8 text-on-primary shadow-[0_32px_32px_-12px_rgba(99,102,241,0.3)]">
            <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            <h3 className="text-2xl font-['Syne'] font-bold mb-4">Network Health</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span>Engagement</span>
                  <span>94%</span>
                </div>
                <div className="h-1 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary w-[94%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span>Retention</span>
                  <span>88%</span>
                </div>
                <div className="h-1 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary w-[88%]"></div>
                </div>
              </div>
              <button className="w-full py-4 mt-4 bg-on-primary text-primary font-bold rounded-xl hover:bg-white transition-colors">
                Export Full Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default XenonosClientsManagement;
