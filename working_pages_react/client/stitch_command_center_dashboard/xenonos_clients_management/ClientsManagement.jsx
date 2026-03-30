/**
 * XenonOS Clients Management Component
 *
 * Comprehensive client management dashboard with client list,
 * status filtering, and revenue tracking.
 *
 * @component
 * @example
 * return <ClientsManagement />
 */

import React, { useState } from 'react';
import {
  MaterialIcon,
  Sidebar,
  TopNavBar,
  BentoCard,
  Button
} from '../../../shared/XenonOSComponents';

/**
 * Main ClientsManagement Component
 */
export function ClientsManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('list');

  // Client data
  const [clients] = useState([
    {
      id: 1,
      name: 'Nebula Dynamics',
      email: 'nebula@contact.io',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqIzLMh_qmoaZw__cT43Val75XA18ZmRJa_d1885RusTammKETIevHWpb9F7nZo2SlflQyA_snTs5PUuNPMIKkaSQ_Fwhzvvd0U8O1Ys_yJPl0FleyydKalvuUs1aIlYX873buk4jTZHIlsAuDZO5l_YyL0gyhKcT1BTGykGELSMlbMRBIlbV15p0mpmYDxvND-XIQbM6pZB77AMH2H9W2zy1ZmffenKUCXWk7nuKFI0J2-wRLgbfHE41muZ-0lVEQn59Z-40Nq5Y',
      status: 'active',
      projects: 14,
      lastActivity: '2 hours ago',
      revenue: 124500.00,
      revenueLabel: 'Annual Value'
    },
    {
      id: 2,
      name: 'Aetherial Systems',
      email: 'ops@aetherial.tech',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_tmp3fgkBo6lMoTdsxJVbA3tdN_8d8lPds3eskONXz68EsYrigSopqS8L8Op6Suwn-49EZk29YYsmASd0alOsuX_tKEqKjweN3HWDXYDqvsVvgyILuFhJ8K6KlGrL8bJpa8lz212-O3qlwEexPycNO4dx9ucDtbGTlp1OSKIhi-KcNh5rMdOt9Kz-Xwi6v5Ae30ChZez71T3BqHyeXXwnxzUnViM8Ktt3HksOyfP82n-ZMSTWsS4j7BJjhGgIBX7zFZ77EoC2Di4',
      status: 'pending',
      projects: 3,
      lastActivity: 'Yesterday, 11:45 PM',
      revenue: 42200.00,
      revenueLabel: 'Project Value'
    },
    {
      id: 3,
      name: 'Vortex Ventures',
      email: 'ceo@vortex.com',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfcn3Fii_joxD8hvr5Ibz-M0R6VPtsey2vblR0bQ_QetVN365rdehC4x-XEIT7LFaLUg_r-xcItBTUPH6YeuiJJw-FO5qk4Hh2kr2BSre4trOglb6VRv56-gfai5w5z66h4xUueWGwGNJ8DAqCe17uCK08J_N_nY6Eg4oxJhE53ES8dvccxoBs6reP_w9cmddNgVRV1Q_X9B43a5_P-Xjp_fmE2ingrzxwW7iEePy4bxhdeyqipSMBYFXWWsUazq1ch7E9B16avJk',
      status: 'inactive',
      projects: 8,
      lastActivity: 'Oct 24, 2023',
      revenue: 98000.00,
      revenueLabel: 'Total Revenue'
    },
    {
      id: 4,
      name: 'Prism Creative',
      email: 'hello@prism.studio',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNRwaEzOJu4xpLGvYbcXh-nNTpqEsB0TyGV-UvH4aqx5Se0oj2bh5734AYDL8czzf6bISjvBIzgGf4TKWOkwqaDSrwlTcJ9goN9Whvkm1iscLDUOJHaa9B-TNyW8UbFahZMpSAhc0vJHsjQbbtzrtzTOsCez-JonzZC0hh-4U353egbMlJb1URlcfL742C35sytx4Z0H6peTycW68GEguDqgzsBcjU0gGknbcE7RxDBQgncu16QWRXvovBOnFkOKHeCFbJNEYu76o',
      status: 'active',
      projects: 22,
      lastActivity: '5 mins ago',
      revenue: 210000.00,
      revenueLabel: 'Annual Value'
    }
  ]);

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: true },
    { icon: 'account_tree', label: 'Projects', href: '#', active: false },
    { icon: 'assignment_turned_in', label: 'Tasks', href: '#', active: false },
    { icon: 'group_work', label: 'Team', href: '#', active: false },
    { icon: 'folder_open', label: 'Files', href: '#', active: false },
    { icon: 'payments', label: 'Billing', href: '#', active: false },
    { icon: 'chat_bubble_outline', label: 'Communication', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  // Get status badge configuration
  const getStatusConfig = (status) => {
    switch (status) {
      case 'active':
        return { variant: 'primary', label: 'Active' };
      case 'pending':
        return { variant: 'warning', label: 'Pending' };
      case 'inactive':
        return { variant: 'default', label: 'Inactive' };
      default:
        return { variant: 'default', label: status };
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope']">
      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Clients"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Management Module"
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDEX6jgdYMMRKh1FTneOI_js3tzNdgilWlOr9GdZuuwaX5M3eotglULFOQglJTOUNOKN7nDL1zjLTQkI4mLZNI_oWvIRGR_IO_8bulxXL33vuEkSj0LQYX3Rtqn87wrA83HBFVyns7c-lgHjW8hud_tloKYLvbAtb8pbnz84C5iwYVfPhtkmIiDDYWMFw_f6rddiUPad53GYXksARBighoPs-3WQUbfv-Ou_QqNBHkZe3FCWUt7K_KHEXZ0wJ8kpkrRwrzl57PeIsY"
        userName="Alex Mercer"
        userRole="Lead Architect"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Global search commands..."
        searchValue={searchQuery}
        onSearch={setSearchQuery}
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDEX6jgdYMMRKh1FTneOI_js3tzNdgilWlOr9GdZuuwaX5M3eotglULFOQglJTOUNOKN7nDL1zjLTQkI4mLZNI_oWvIRGR_IO_8bulxXL33vuEkSj0LQYX3Rtqn87wrA83HBFVyns7c-lgHjW8hud_tloKYLvbAtb8pbnz84C5iwYVfPhtkmIiDDYWMFw_f6rddiUPad53GYXksARBighoPs-3WQUbfv-Ou_QqNBHkZe3FCWUt7K_KHEXZ0wJ8kpkrRwrzl57PeIsY"
        userName="Alex Mercer"
        userRole="Lead Architect"
      />

      {/* Main Content */}
      <main className="ml-64 pt-32 p-12 min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h1 className="font-['Syne'] text-5xl font-extrabold text-on-surface">Clients</h1>
            <p className="font-['Outfit'] text-on-surface-variant text-lg">
              Manage and monitor all client relationships.
            </p>
          </div>
          <Button variant="primary" icon="person_add" className="h-14 px-8">
            Add Client
          </Button>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container rounded-2xl p-4 flex flex-wrap items-center gap-4 mb-8 shadow-sm font-['Outfit']">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-on-surface-variant text-sm border border-outline-variant/10">
            <MaterialIcon className="text-sm">filter_list</MaterialIcon>
            Status
            <MaterialIcon className="text-sm">expand_more</MaterialIcon>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-on-surface-variant text-sm border border-outline-variant/10">
            Project assignment
            <MaterialIcon className="text-sm">expand_more</MaterialIcon>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-on-surface-variant text-sm border border-outline-variant/10">
            Sort by: Recent
            <MaterialIcon className="text-sm">expand_more</MaterialIcon>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-on-surface-variant text-xs font-medium uppercase tracking-widest px-4">
              <input className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
              Bulk Action
            </div>
            <button
              className={`p-2 transition-colors ${viewMode === 'kanban' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
              onClick={() => setViewMode('kanban')}
            >
              <MaterialIcon>view_kanban</MaterialIcon>
            </button>
            <button
              className={`p-2 transition-colors ${viewMode === 'list' ? 'text-primary bg-surface-container-highest rounded-lg' : 'text-on-surface-variant hover:text-primary'}`}
              onClick={() => setViewMode('list')}
            >
              <MaterialIcon>list</MaterialIcon>
            </button>
          </div>
        </div>

        {/* Clients List Table */}
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-4 text-on-surface-variant text-xs font-bold uppercase tracking-widest font-['Outfit']">
            <div className="col-span-4">Client Name</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-center">Projects</div>
            <div className="col-span-2">Last Activity</div>
            <div className="col-span-2 text-right pr-4">Revenue</div>
            <div className="col-span-1"></div>
          </div>

          {/* Client Items */}
          {clients.map((client) => {
            const statusConfig = getStatusConfig(client.status);
            return (
              <div
                key={client.id}
                className="grid grid-cols-12 gap-4 items-center px-8 py-5 bg-surface-container rounded-2xl transition-all duration-400 hover:scale-[1.01] hover:bg-surface-container-high cursor-pointer border border-outline-variant/5 shadow-lg group"
              >
                <div className="col-span-4 flex items-center gap-4">
                  <input className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                  <img
                    className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={client.avatar}
                    alt={client.name}
                  />
                  <div>
                    <div className="font-['Outfit'] text-on-surface font-semibold text-lg">{client.name}</div>
                    <div className="font-['Outfit'] text-on-surface-variant text-xs font-medium">{client.email}</div>
                  </div>
                </div>
                <div className="col-span-2">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border font-['Outfit']
                    ${statusConfig.variant === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : ''}
                    ${statusConfig.variant === 'warning' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' : ''}
                    ${statusConfig.variant === 'default' ? 'bg-on-surface-variant/10 text-on-surface-variant border-on-surface-variant/20' : ''}
                  `}>
                    {statusConfig.label}
                  </span>
                </div>
                <div className="col-span-1 text-center">
                  <div className="font-['Syne'] text-on-surface font-bold text-lg">{client.projects.toString().padStart(2, '0')}</div>
                </div>
                <div className="col-span-2 text-on-surface-variant text-sm font-['Outfit']">
                  {client.lastActivity}
                </div>
                <div className="col-span-2 text-right pr-4">
                  <div className="font-['Syne'] text-on-surface font-bold">
                    ${client.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="font-['Outfit'] text-on-surface-variant text-[10px] uppercase tracking-tighter">
                    {client.revenueLabel}
                  </div>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <MaterialIcon className="text-lg">more_vert</MaterialIcon>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Asymmetric Bento Insight Section */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <BentoCard className="col-span-8 rounded-2xl p-8 relative overflow-hidden group border border-outline-variant/5">
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <MaterialIcon className="text-[240px]">monitoring</MaterialIcon>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="font-['Syne'] text-3xl font-bold text-primary mb-2">Revenue Growth</h3>
                <p className="font-['Outfit'] text-on-surface-variant max-w-md">
                  The client ecosystem has expanded by 12.4% this quarter with primary growth in Tech and Venture sectors.
                </p>
              </div>
              <div className="flex items-end gap-1 mt-8 h-32">
                {[40, 60, 45, 85, 70, 100].map((height, index) => (
                  <div
                    key={index}
                    className={`w-full rounded-t-lg transition-all duration-500 group-hover:bg-primary/40 ${index === 5 ? 'bg-primary/90 shadow-[0_0_20px_rgba(192,193,255,0.3)]' : 'bg-surface-container-highest'}`}
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="col-span-4 rounded-2xl p-8 text-on-primary shadow-[0_32px_32px_-12px_rgba(99,102,241,0.3)] bg-primary">
            <MaterialIcon className="text-4xl mb-4" filled>rocket_launch</MaterialIcon>
            <h3 className="font-['Syne'] text-2xl font-bold mb-4">Network Health</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 font-['Outfit']">
                  <span>Engagement</span>
                  <span>94%</span>
                </div>
                <div className="h-1 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary w-[94%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 font-['Outfit']">
                  <span>Retention</span>
                  <span>88%</span>
                </div>
                <div className="h-1 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary w-[88%]"></div>
                </div>
              </div>
              <button className="w-full py-4 mt-4 bg-on-primary text-primary font-bold rounded-xl hover:bg-white transition-colors font-['Outfit']">
                Export Full Report
              </button>
            </div>
          </BentoCard>
        </div>
      </main>

      {/* Global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        body {
          background-color: #0f131d;
          color: #dfe2f1;
          font-family: 'Manrope', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default ClientsManagement;
