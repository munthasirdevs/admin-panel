import React, { useState } from 'react';
import Sidebar from '../../shared/Sidebar';
import TopBar from '../../shared/TopBar';

/**
 * Client Details - Projects Grid Component
 * Displays client projects in a bento grid layout
 */
interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  status: 'In Development' | 'Testing' | 'Planning' | 'On Hold';
  statusColor: string;
  deadline: string;
  progress: number;
  team: string[];
  priority?: 'High Priority' | 'Internal' | 'New' | 'Delayed';
  description?: string;
  kickoff?: string;
}

const ClientDetailsProjectsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const projects: Project[] = [
    {
      id: '1',
      name: 'Neo-Transit Hub',
      client: 'Aetheria Global',
      category: 'Infrastructure',
      status: 'In Development',
      statusColor: 'text-emerald-400',
      deadline: 'Oct 24, 2024',
      progress: 68,
      team: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBXq5AJM5HwBj67BUl9R-Q6_Y1rWolnpHclY3bblp891lpPSIecsMSQOv4TC11uJSXnP-CIEUuaRMggNpU2hugK4YHldVVG0bJ1hNZwbajRI6biQOi0OvoZ2DOim3YpEo1qB_Grln3rDYnBUxae77WbScs5SPmIvEsnW6vRURp6GgKP65UDhsXzx8CRVqbU2hKfpP-a_FD_hTUAXFwQ1SuwM9EN2jjvIv9TtHtT25nXe3elt8QxHJZbH3JVC5dYjdcjnCk-wMc2rLw',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB9p1OKtvDRzGtvU6Z8uJm2e2vMIqKkPPIoyqzy0E2f9D1aLiKOARBlyL6YxAx4gfCj4kSiXWd8tE01sbqqxniXBYltW9lXxCGdhD_v7W6Gv36fWl2QZ6z3jtrg_bTQgl5MMmsXS-5XcOUuKl3LWPmYoCVgePpmIHC0rbA_RW44uOPuIQnzhDx8vaSiJGf6D9lOY7XmHDQJ4X5oQKF7XWaaDuqXOFlB-TzrmRhWTsY_4Z9EPI-USTHlxEHdXDIF26TbSJNku45kdYA',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDATi3owG-R5ZOZZJSpuGI9pu3YVR7-JavgnpHIPpHkTEy1GQ7pxg2iXUVF3Ij1aRIPZNbD3G18Or_WPaXL1PwrlNG5MbZcAoZOHhJyGQ6E33kVpipGlVlkUUQQ-AF7ydkDpG0C80dX9YS8lF7pJaS-U1BBSSG-D1SEsDPCd6S6mL6l9lKJmGHsFbYMIFPb64r6L6ThRjvz0Dx0DUAnq_QNxyZCxG4IWCTpEGAjMU_ugdMZI9NnhT3elBPL8o8GM9mgsc5I3xypSz4'
      ],
      priority: 'High Priority',
      large: true
    },
    {
      id: '2',
      name: 'Core Engine v4',
      client: 'Aetheria Global',
      category: 'Systems',
      status: 'Testing',
      statusColor: 'text-secondary',
      deadline: 'Nov 12',
      progress: 92,
      team: [],
      priority: 'Internal',
      icon: 'database'
    },
    {
      id: '3',
      name: 'Quantum API',
      client: 'Aetheria Global',
      category: 'Cloud',
      status: 'Planning',
      statusColor: 'text-on-surface-variant',
      deadline: 'Dec 05',
      progress: 15,
      team: [],
      priority: 'New',
      icon: 'auto_awesome'
    },
    {
      id: '4',
      name: 'Vault Security',
      client: 'Aetheria Global',
      category: 'Security',
      status: 'On Hold',
      statusColor: 'text-on-surface-variant',
      deadline: 'EXPIRED',
      progress: 45,
      team: [],
      priority: 'Delayed',
      icon: 'security'
    },
    {
      id: '5',
      name: 'Orbital Logistics',
      client: 'Aetheria Global',
      category: 'Launch',
      status: 'Planning',
      statusColor: 'text-on-surface-variant',
      deadline: 'Jan 10, 2025',
      progress: 0,
      team: [],
      description: 'Development of autonomous drone docking systems for stratospheric distribution networks.',
      kickoff: 'Jan 10, 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <Sidebar activeItem="Clients" />
      <TopBar userName="Alex Mercer" userRole="Lead Architect" />

      <main className="ml-64 pt-28 px-12 pb-20">
        {/* Client Profile Header */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="flex items-start gap-8">
              <div className="relative group">
                <img
                  alt="Organization profile image"
                  className="w-32 h-32 rounded-3xl object-cover shadow-2xl border border-outline-variant/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuctT4jpfRZ6-V1ky955VQj5EocVUPlpM2eoVVrtu2oc3TlS87zUrK_hG2HuTHYjnT6N676EmPoKwkgkhxtkRnKaIScRrQ5sa9kOkCTHVZ76HU6OOhHT9ym_UYFskh7YS114tIeae4TJ5IEvngi9VSrhA3oyKsklhjKyd1jUk_qHCYq3_DwR6-xm_NN4Kyzccge-z5l8LDuHhT_ZSNbDK2OxIDVEZC_mx3j2l8lZ8yMiOGUGo0Mtjb65p41S3YLZRo3zMkOoMw-kE"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-xl text-on-primary shadow-lg">
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-4xl font-['Syne'] font-extrabold tracking-tight text-on-surface">Aetheria Global</h2>
                  <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-xs font-bold tracking-widest uppercase">Enterprise</span>
                </div>
                <p className="text-on-surface-variant max-w-lg leading-relaxed">
                  Infrastructure & Logistics division specializing in orbital supply chain management and automated terrestrial distribution.
                </p>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Geneva, Switzerland</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">mail</span>
                    <span>contact@aetheria.global</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded-xl border border-outline-variant/20 font-semibold text-on-surface hover:bg-surface-container-high transition-all">
                Edit Profile
              </button>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container font-bold text-on-primary shadow-lg shadow-primary/20 scale-100 hover:scale-[1.02] transition-transform flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">add</span>
                Create Project
              </button>
            </div>
          </div>

          {/* Client Tabs */}
          <div className="flex gap-10 border-b border-outline-variant/10 pb-px">
            {['Overview', 'Projects', 'Resources', 'Billing', 'Documents'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                project.large ? 'lg:col-span-2' : ''
              } bg-surface-container rounded-[1.5rem] p-8 hover:bg-surface-container-high transition-all duration-400 group relative overflow-hidden border border-outline-variant/5 shadow-xl`}
            >
              {project.priority && (
                <div className="absolute top-0 right-0 p-8">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
                    project.priority === 'High Priority' ? 'bg-primary/10 text-primary' :
                    project.priority === 'Internal' ? 'bg-surface-container-highest text-on-surface-variant' :
                    project.priority === 'New' ? 'bg-tertiary-container/10 text-tertiary' :
                    'bg-error-container/20 text-error'
                  }`}>
                    {project.priority}
                  </span>
                </div>
              )}

              <div className="flex flex-col h-full justify-between">
                <div>
                  {project.icon ? (
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        project.priority === 'Internal' ? 'bg-secondary-container/20 text-secondary' :
                        project.priority === 'New' ? 'bg-tertiary-container/20 text-tertiary' :
                        project.priority === 'Delayed' ? 'bg-primary/10 text-primary' :
                        'bg-primary/10 text-primary'
                      }`}>
                        <span className="material-symbols-outlined text-2xl">{project.icon}</span>
                      </div>
                      {project.priority && (
                        <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">
                          {project.priority}
                        </span>
                      )}
                    </div>
                  ) : (
                    <h3 className="text-3xl font-['Syne'] font-extrabold text-primary mb-2 group-hover:translate-x-1 transition-transform">
                      {project.name}
                    </h3>
                  )}

                  {!project.icon && (
                    <p className="text-on-surface-variant font-medium mb-8">
                      {project.client} • {project.category}
                    </p>
                  )}

                  {project.icon && (
                    <>
                      <h3 className="text-xl font-['Syne'] font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-on-surface-variant mb-8">
                        {project.client} • {project.category}
                      </p>
                    </>
                  )}

                  {project.description ? (
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                      {project.description}
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Status</p>
                        <p className="text-on-surface font-semibold flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${project.statusColor}`}></span>
                          {project.status}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Deadline</p>
                        <p className={`text-on-surface font-semibold ${project.deadline === 'EXPIRED' ? 'text-error' : ''}`}>
                          {project.deadline}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {!project.kickoff ? (
                    <>
                      <div className="flex justify-between items-end mb-3">
                        <div>
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Progress</p>
                          <p className="text-2xl font-['Syne'] font-bold text-on-surface">{project.progress}%</p>
                        </div>
                        {project.team.length > 0 && (
                          <div className="flex -space-x-3">
                            {project.team.map((avatar, idx) => (
                              <img
                                key={idx}
                                className="w-8 h-8 rounded-full border-2 border-surface-container object-cover"
                                alt="Team member"
                                src={avatar}
                              />
                            ))}
                            <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-container flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                              +4
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_12px_rgba(192,193,255,0.4)]`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-lg">calendar_today</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Kickoff</p>
                          <p className="text-sm font-semibold">{project.kickoff}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-outline-variant/10">
                        <button className="w-full py-3 rounded-xl bg-surface-container-highest text-on-surface text-sm font-bold hover:bg-primary hover:text-on-primary transition-all">
                          View Roadmap
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ClientDetailsProjectsGrid;
