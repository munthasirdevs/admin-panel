/**
 * XenonOS Client Details - Sarah Jenkins Overview Component
 *
 * Client details overview page with KPI cards, activity timeline,
 * and client health metrics.
 *
 * @component
 * @example
 * return <ClientDetailsOverview />
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
 * Main ClientDetailsOverview Component
 */
export function ClientDetailsOverview() {
  const [activeTab, setActiveTab] = useState('overview');

  // Client data
  const client = {
    name: 'Velocity Creative',
    status: 'Active',
    tagline: 'Manage your financial ecosystem with surgical precision.',
    stats: {
      totalProjects: 4,
      activeTasks: 12,
      totalRevenue: 92750,
      lastActivity: '2h ago'
    },
    activity: [
      {
        id: 1,
        type: 'task_updated',
        title: 'Task Updated: Landing Page Redesign',
        time: '14:20 PM',
        description: 'Sarah Jenkins moved Mobile Responsiveness to Review.',
        icon: 'assignment_turned_in',
        color: 'primary'
      },
      {
        id: 2,
        type: 'file_uploaded',
        title: 'New File Uploaded',
        time: '11:05 AM',
        file: {
          name: 'Brand_Guidelines_V2.pdf',
          size: '4.2 MB',
          uploadedBy: 'Alex Riva'
        },
        icon: 'cloud_upload',
        color: 'secondary'
      },
      {
        id: 3,
        type: 'feedback',
        title: 'Client Feedback Received',
        time: 'Yesterday',
        quote: 'The new color palette feels much more professional. Let\'s proceed with these tones.',
        icon: 'chat',
        color: 'surface-variant'
      }
    ],
    health: {
      score: 94,
      description: 'Positive engagement score based on prompt invoice payments and high task approval rate.'
    },
    contact: {
      manager: {
        name: 'Marcus Thorne',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzfEg1gjeqeKUmchiNzicYX24xyM2tDdd2lOFBPq1TKLyjlT8b5mSbCUrgt_AouTnKoF_LS7yxgIzdT_3eDtvOUQYyCpZwgNhFuaybZjWG2Hmls-O8BuhOr7ZQG4-08w_w4hTrWlNvmYpuhrTus5XQU8p37w5vlEfsZQq-_wHNKLwhVynPDjYLp4ZVZIc6XXnAnlveygDX9hErDxy4uIjcTcJ_Ak6biO_2_awzPs-iMnZxMLKYB427UgWFeAII4wwA1cvC1M9d-7k'
      },
      email: 'billing@velocity.com',
      phone: '+1 (555) 902-3412',
      location: 'San Francisco, CA'
    },
    activeProject: {
      name: 'Quantum Interface Kit',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQAgESSlk50ZPsXCgL2_DseYsmdhW_GNfWCHaBkr2JDVDBlGUrVaypdXunQaFIeAJKf3l_sZLcj_Z63GfWKS1Q3Tjj1XE4fXfH8T1B6vLEDr1WVFaGBAFVknbXyPxjrYQTBnJYB4H_VKardI4ojZlFjd52xDhlpFZ5xrIGqWSqOFiHYrQ2KZMel9Q1SBrcVw7xj3qcBI_36U8dalMaYOLJTR7-lGkWDYmsEU6Tq_pe-kUS6mWXFsePjjKpcsWGu1y-P2X-XT2jKg0'
    }
  };

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: true },
    { icon: 'account_tree', label: 'Projects', href: '#', active: false },
    { icon: 'assignment_turned_in', label: 'Tasks', href: '#', active: false },
    { icon: 'payments', label: 'Billing', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'space_dashboard' },
    { id: 'activity', label: 'Activity', icon: 'dynamic_feed' },
    { id: 'documents', label: 'Documents', icon: 'description' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope']">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-surface-container/70 backdrop-blur-md shadow-[0_32px_32px_-4px_rgba(10,14,24,0.5)]">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-['Syne'] font-extrabold tracking-tight text-primary">XenonOS</span>
          <div className="hidden md:flex gap-6 items-center font-['Outfit']">
            <a className="text-on-surface-variant hover:bg-surface-bright transition-colors duration-400 px-3 py-1 rounded-lg" href="#">Dashboard</a>
            <a className="text-primary font-bold px-3 py-1 rounded-lg" href="#">Clients</a>
            <a className="text-on-surface-variant hover:bg-surface-bright transition-colors duration-400 px-3 py-1 rounded-lg" href="#">Projects</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-bright transition-colors text-on-surface-variant">
            <MaterialIcon>notifications</MaterialIcon>
          </button>
          <div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20">
            <img
              alt="User Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSJ9O3oUfJ7bzz7Q4u6z7uemfATatN_jL7-xvKv_L_gK5EGkLgyzkzLKbTZtwzeGJKVu0OtqNdbw6bahR-lIZZFXzxINDElGkpOGs-zvzu3Qoo-9Nen5fM8i5MAudRbar-lPMrizkvUqekA-_wt9wsqRx370yao3JW3in--jK43OMGuOwCCg2VOixN1oDwJXWEWeJrvrTzG9cOwnHzCtvpoW63dlo0J6zjoiGh-5qJkGjhi8yqatuhpBJZsWc27icWTiDAiXbQr4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Clients"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Management Module"
        className="hidden lg:flex"
      />

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto p-8 space-y-8">
          {/* Summary Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4 font-['Outfit']">
                <span>Clients</span>
                <MaterialIcon className="text-xs">chevron_right</MaterialIcon>
                <span className="text-primary/80">Velocity Creative</span>
              </nav>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-['Syne'] font-extrabold tracking-tight text-on-surface">
                  {client.name}
                </h1>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider flex items-center gap-1.5 uppercase font-['Outfit']">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  {client.status}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" icon="edit">Edit</Button>
              <Button variant="outline" icon="chat_bubble_outline">Message</Button>
              <Button variant="primary" icon="add">Assign Project</Button>
            </div>
          </header>

          {/* Tabbed Navigation */}
          <div className="flex gap-8 border-b border-outline-variant/10 font-['Outfit']">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <MaterialIcon className="text-sm">{tab.icon}</MaterialIcon>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* KPI Cards */}
            <BentoCard className="md:col-span-3 rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-surface-container-high">
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MaterialIcon>folder_special</MaterialIcon>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-['Outfit']">Stats</span>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Total Projects</p>
              <h3 className="font-['Syne'] text-3xl font-bold text-on-surface mt-1">{client.stats.totalProjects}</h3>
            </BentoCard>

            <BentoCard className="md:col-span-3 rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-surface-container-high">
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <MaterialIcon>task_alt</MaterialIcon>
                </span>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Active Tasks</p>
              <h3 className="font-['Syne'] text-3xl font-bold text-on-surface mt-1">{client.stats.activeTasks}</h3>
            </BentoCard>

            <BentoCard className="md:col-span-3 rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-surface-container-high">
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 rounded-lg bg-tertiary/10 text-tertiary">
                  <MaterialIcon>payments</MaterialIcon>
                </span>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Total Revenue</p>
              <h3 className="font-['Syne'] text-3xl font-bold text-on-surface mt-1">${client.stats.totalRevenue.toLocaleString()}</h3>
            </BentoCard>

            <BentoCard className="md:col-span-3 rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-surface-container-high">
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 rounded-lg bg-surface-variant text-on-surface-variant">
                  <MaterialIcon>schedule</MaterialIcon>
                </span>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Last Activity</p>
              <h3 className="font-['Syne'] text-3xl font-bold text-on-surface mt-1">{client.stats.lastActivity}</h3>
            </BentoCard>

            {/* Main Panel: Activity Feed */}
            <BentoCard className="md:col-span-8 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                <h4 className="font-['Syne'] font-bold text-on-surface">Timeline Activity</h4>
                <button className="font-['Outfit'] text-xs text-primary font-semibold hover:underline">View All</button>
              </div>
              <div className="p-6 space-y-8">
                {client.activity.map((item, index) => (
                  <div key={item.id} className="flex gap-4 relative">
                    {index < client.activity.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-outline-variant/20"></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10
                      ${item.color === 'primary' ? 'bg-primary/20' : ''}
                      ${item.color === 'secondary' ? 'bg-secondary/20' : ''}
                      ${item.color === 'surface-variant' ? 'bg-surface-variant' : ''}
                    `}>
                      <span className={`w-2 h-2 rounded-full
                        ${item.color === 'primary' ? 'bg-primary' : ''}
                        ${item.color === 'secondary' ? 'bg-secondary' : ''}
                        ${item.color === 'surface-variant' ? 'bg-on-surface-variant' : ''}
                      `}></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-['Outfit'] text-sm font-medium text-on-surface">{item.title}</p>
                        <span className="font-['Outfit'] text-[10px] text-on-surface-variant uppercase font-bold">{item.time}</span>
                      </div>
                      {item.description && (
                        <p className="font-['Outfit'] text-sm text-on-surface-variant mt-1 leading-relaxed">{item.description}</p>
                      )}
                      {item.file && (
                        <div className="mt-3 bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-outline-variant/5">
                          <MaterialIcon className="text-secondary">description</MaterialIcon>
                          <div>
                            <p className="font-['Outfit'] text-xs font-semibold">{item.file.name}</p>
                            <p className="font-['Outfit'] text-[10px] text-on-surface-variant">{item.file.size} • Uploaded by {item.file.uploadedBy}</p>
                          </div>
                          <button className="ml-auto text-on-surface-variant hover:text-primary transition-colors">
                            <MaterialIcon>download</MaterialIcon>
                          </button>
                        </div>
                      )}
                      {item.quote && (
                        <p className="font-['Outfit'] text-sm text-on-surface-variant mt-1 italic">{item.quote}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Side Panel: Quick Insights */}
            <div className="md:col-span-4 space-y-6">
              {/* Client Health */}
              <BentoCard className="rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-['Syne'] font-bold text-on-surface">Client Health</h4>
                  <span className="font-['Outfit'] text-xs font-bold text-primary">{client.health.score}%</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(192,193,255,0.4)]"
                    style={{ width: `${client.health.score}%` }}
                  ></div>
                </div>
                <p className="font-['Outfit'] text-xs text-on-surface-variant leading-relaxed">{client.health.description}</p>
              </BentoCard>

              {/* Contact Details */}
              <BentoCard className="rounded-2xl p-6">
                <h4 className="font-['Syne'] font-bold text-on-surface mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                      <img
                        alt="Account Manager"
                        src={client.contact.manager.avatar}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-['Outfit'] text-xs text-on-surface-variant font-medium">Account Manager</p>
                      <p className="font-['Outfit'] text-sm font-bold text-on-surface">{client.contact.manager.name}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/10 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors font-['Outfit']">
                      <MaterialIcon className="text-lg">mail</MaterialIcon>
                      <span>{client.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant font-['Outfit']">
                      <MaterialIcon className="text-lg">call</MaterialIcon>
                      <span>{client.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant font-['Outfit']">
                      <MaterialIcon className="text-lg" filled>location_on</MaterialIcon>
                      <span>{client.contact.location}</span>
                    </div>
                  </div>
                </div>
              </BentoCard>

              {/* Project Snapshot */}
              <div className="relative group h-48 rounded-2xl overflow-hidden">
                <img
                  alt="Team Work"
                  src={client.activeProject.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-['Outfit'] text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Active Project</p>
                  <h5 className="font-['Outfit'] text-sm font-bold text-white">{client.activeProject.name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;500;600&display=swap');
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

export default ClientDetailsOverview;
