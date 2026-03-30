/**
 * All Projects Hub Component
 * 
 * Central dashboard for viewing and managing all projects
 * with bento-grid layout and project statistics.
 */

import React, { useState } from 'react';
import { MaterialIcon, BentoCard, Button, Badge, ProgressBar } from '../../../shared/XenonOSComponents';

export function AllProjectsHub() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Nebula Cloud Migration',
      client: 'TechCorp Industries',
      status: 'active',
      progress: 75,
      team: 8,
      deadline: 'Dec 15, 2024',
      color: 'primary'
    },
    {
      id: 2,
      name: 'Quantum API Integration',
      client: 'Stellar Dynamics',
      status: 'pending',
      progress: 32,
      team: 5,
      deadline: 'Jan 20, 2025',
      color: 'tertiary'
    },
    {
      id: 3,
      name: 'Phoenix Security Audit',
      client: 'Apex Financial',
      status: 'completed',
      progress: 100,
      team: 4,
      deadline: 'Nov 30, 2024',
      color: 'success'
    },
    {
      id: 4,
      name: 'Atlas Dashboard Redesign',
      client: 'Vortex Labs',
      status: 'active',
      progress: 58,
      team: 6,
      deadline: 'Dec 28, 2024',
      color: 'primary'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'grid_view', label: 'Projects', href: '#', active: true },
    { icon: 'assignment', label: 'Tasks', href: '#', active: false },
    { icon: 'group', label: 'Team', href: '#', active: false },
    { icon: 'folder', label: 'Files', href: '#', active: false },
    { icon: 'payments', label: 'Billing', href: '#', active: false },
  ];

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-primary/10 text-primary border-primary/20',
      pending: 'bg-tertiary/10 text-tertiary border-tertiary/20',
      completed: 'bg-emerald-500/10 text-emerald-400',
      overdue: 'bg-error/10 text-error border-error/20'
    };
    return colors[status] || colors.pending;
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Outfit']">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#1c1f2a] flex flex-col h-full p-4 gap-2">
        <div className="flex items-center gap-3 px-4 py-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            <MaterialIcon filled>dataset</MaterialIcon>
          </div>
          <div>
            <h1 className="font-['Syne'] font-extrabold text-[#c0c1ff] text-lg leading-none">XenonOS</h1>
            <p className="text-[10px] text-on-surface-variant tracking-widest uppercase mt-1">Project Intelligence</p>
          </div>
        </div>
        
        <nav className="flex-1 mt-4 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${item.active 
                  ? 'bg-[#313540] text-[#c0c1ff] border-l-4 border-[#6366f1] shadow-[0_0_15px_rgba(99,102,241,0.2)] scale-[1.02]' 
                  : 'text-[#c7c4d7] hover:bg-[#313540]/30 hover:translate-x-1'
                }
              `}
            >
              <MaterialIcon filled={item.active}>{item.icon}</MaterialIcon>
              <span className="font-['Outfit'] font-medium text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/10">
          <a className="flex items-center gap-3 text-[#c7c4d7] px-4 py-3 hover:bg-[#313540]/30 rounded-xl hover:translate-x-1 transition-transform duration-300" href="#">
            <MaterialIcon>help</MaterialIcon>
            <span className="font-['Outfit'] font-medium text-sm">Support</span>
          </a>
          <a className="flex items-center gap-3 text-[#c7c4d7] px-4 py-3 hover:bg-[#313540]/30 rounded-xl hover:translate-x-1 transition-transform duration-300" href="#">
            <MaterialIcon>logout</MaterialIcon>
            <span className="font-['Outfit'] font-medium text-sm">Sign Out</span>
          </a>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="bg-[#0f131d]/70 backdrop-blur-xl sticky top-0 z-50 flex justify-between items-center w-full px-8 py-4 shadow-[0_32px_32px_-4px_rgba(10,14,24,0.5)] ml-64">
        <div className="flex items-center gap-8 flex-1">
          <h2 className="font-['Syne'] font-extrabold tracking-tight text-2xl text-[#c0c1ff]">Projects Hub</h2>
          <div className="relative w-full max-w-md hidden lg:block">
            <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</MaterialIcon>
            <input 
              className="w-full bg-surface-container-lowest border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/40 placeholder:text-on-surface-variant/50 transition-all" 
              placeholder="Search systems, clients, or tags..." 
              type="text"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="primary" icon="add_circle">
            Create Project
          </Button>
          <div className="flex items-center gap-1">
            <button className="p-2 text-on-surface-variant hover:bg-[#313540]/50 rounded-lg transition-all">
              <MaterialIcon>notifications</MaterialIcon>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-[#313540]/50 rounded-lg transition-all">
              <MaterialIcon>settings</MaterialIcon>
            </button>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 ml-2 cursor-pointer hover:border-primary transition-colors">
            <img 
              alt="User Profile" 
              className="w-full h-full rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEJ9cMkYLGklKJVDQY7kV_taw5g2S2tQJDJqBMjLurbLAmpTCoTIRd1LCbY5d4yd5Q_Z0u6Akko-UWcXyZZdFHmPsaUNWvo_KH_9LJRJYR2la_GuJ_hjCXNeIJQyB-LgtFuXnyxwoZk0bD5WCXg9pswphT9onieP0txSaCoR4lk8jaI-tIgh1j8LeXni31g8oxCSbcSph67Lzntb-3K5OJkvJQhGdByGgT2-GAF62MZPZkLL-ul4nkHxTSTn1sjakA6JSA7Ym-VE"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 p-8 space-y-8">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BentoCard className="md:col-span-2 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-on-surface-variant text-xs font-semibold tracking-widest uppercase">System Performance</p>
                <h3 className="font-['Syne'] font-extrabold text-3xl mt-1 text-[#c0c1ff]">98.2% Efficiency</h3>
              </div>
              <div className="mt-8 flex items-end gap-1 h-12">
                {[40, 80, 60, 100, 70].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-primary rounded-full transition-all duration-500"
                    style={{ 
                      height: `${height}%`,
                      opacity: 0.3 + (i * 0.15)
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <MaterialIcon className="text-[160px]" filled>analytics</MaterialIcon>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center mb-4">
              <MaterialIcon className="text-tertiary">bolt</MaterialIcon>
            </div>
            <p className="text-on-surface-variant text-sm font-medium">Active Sprints</p>
            <h3 className="font-['Syne'] font-extrabold text-4xl mt-1">12</h3>
          </BentoCard>

          <BentoCard>
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <MaterialIcon className="text-primary">group</MaterialIcon>
            </div>
            <p className="text-on-surface-variant text-sm font-medium">Team Members</p>
            <h3 className="font-['Syne'] font-extrabold text-4xl mt-1">48</h3>
          </BentoCard>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-['Syne'] text-2xl font-bold">All Projects</h3>
            <div className="flex gap-2">
              {['all', 'active', 'pending', 'completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                    ${filter === status 
                      ? 'bg-primary text-on-primary' 
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }
                  `}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <BentoCard key={project.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-['Syne'] text-xl font-bold text-on-surface">{project.name}</h4>
                    <p className="text-sm text-on-surface-variant mt-1">{project.client}</p>
                  </div>
                  <Badge variant={project.status}>{project.status}</Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-on-surface-variant">Progress</span>
                      <span className="text-on-surface font-bold">{project.progress}%</span>
                    </div>
                    <ProgressBar value={project.progress} color={project.color} />
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                        <MaterialIcon className="text-sm">group</MaterialIcon>
                        <span>{project.team} members</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                        <MaterialIcon className="text-sm">calendar_today</MaterialIcon>
                        <span>{project.deadline}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        
        body {
          background-color: #0f131d;
          color: #dfe2f1;
        }
      `}</style>
    </div>
  );
}

export default AllProjectsHub;
