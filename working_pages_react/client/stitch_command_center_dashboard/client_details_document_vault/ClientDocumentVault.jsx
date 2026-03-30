/**
 * XenonOS Client Details - Document Vault Component
 *
 * Client document management with file upload, grid view,
 * and access control.
 *
 * @component
 * @example
 * return <ClientDocumentVault />
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
 * Main ClientDocumentVault Component
 */
export function ClientDocumentVault() {
  const [activeTab, setActiveTab] = useState('documents');
  const [viewMode, setViewMode] = useState('grid');

  // Client data
  const client = {
    name: 'Vanguard Dynamics',
    tier: 'Premium Tier',
    id: 'CL-99201',
    description: 'Global logistics and autonomous freight systems. Scaling operations across EMEA and APAC regions for Q4 expansion.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAKYJUAhFtfspwONe6t0o_xnf_IUsqf4d3mRY827sNgSerVi0jy8mR9uOyFBreb6P1XNNgC0wbpnxkJqyhydGEfUeYZb3ch237GIaZsK7zEe1vXuDeDoME5tvZWEqgBsd6sSDV1GxcLQ1dl4ixGPDQvBpps2nCm06vhjwsGFoFGcqYuB1eH3jz7ce_IqzgoD288J6-iEDfg0VdMbDr7dfFvK5umF8KpzHgi5nA03L-Gk1BjCK2Xxn3ZcrMrQ83msER9S5SqMDWndI'
  };

  // Files data
  const files = [
    {
      id: 1,
      name: 'Q4_Operational_Strategy_V2.pdf',
      type: 'pdf',
      size: '14.2 MB',
      modified: '2 hours ago',
      icon: 'picture_as_pdf',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      large: true
    },
    {
      id: 2,
      name: 'Financial_Projections_2024.xlsx',
      type: 'xlsx',
      size: '2.8 MB',
      modified: 'Yesterday',
      icon: 'table_chart',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 3,
      name: 'Analytics_Dashboard_UI.png',
      type: 'image',
      size: '8.4 MB',
      modified: 'Sep 12, 2023',
      icon: 'image',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP0Q_TmVXEfSvpEDEpoZLhNO6PKktgWf652j4DusPaMzsMJbOD_YagnGTHEXXnIoFcbOHK_MO9CcgMhXQh3ax3QsaNgkK6VxTidwRyY0jW2JJUwbGyxspgHpuj-yGQD74rBFbMbsDmOwntdQYwp4oH7y2dv8uklZiBILARMDAE244XN4dDry-TWTY1hgq66MxTY3v2gtV_efrvvZuKWNoipEafsNpgUb4C7L2BZApX7poXcMGTH940yrgMvemfG4f3psVrCdJqp7U'
    },
    {
      id: 4,
      name: 'Contract Archives',
      type: 'folder',
      items: 12,
      description: 'Shared with Legal Team',
      icon: 'folder',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      id: 5,
      name: 'Service_Agreement.docx',
      type: 'docx',
      size: '420 KB',
      modified: 'Sep 08',
      icon: 'description',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 6,
      name: 'Brand Guidelines',
      type: 'folder',
      items: 5,
      modified: '4 days ago',
      icon: 'folder',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      id: 7,
      name: 'Q4_Deck_vFINAL.pptx',
      type: 'pptx',
      size: '32.1 MB',
      modified: 'Aug 29',
      icon: 'present_to_all',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10'
    }
  ];

  // Shared access data
  const sharedAccess = [
    {
      id: 1,
      name: 'Marcus Thorne',
      email: 'marcus.t@vanguard.io',
      role: 'External Partner',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAraIOVAwR1sCks2UtxUqkEjG2bCn9aV9_Noyrq-WBUkFZmFP34K4uXhwShTKfV8HrYk6RiuhCZMQumKxze7OTuPxqsV_cgWalKz_DN_WSDmjVrXedCIQy4y9XLgT75OqK4hVVUi2ijzmg4hMjkE4oAXNWwaip2q4_ysZymVKjSvJE5bkgT-EqXRVQeJPjIeQiMnRdVOpuNPjm0ba0jldGAhDG3q2bEsHCHja9fxE6UL4FBorFD9wa8B5bCEozEi33iL4K_OvboeSE',
      access: 'Full Access',
      validUntil: 'Dec 2024'
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      email: 'e.rod@vanguard.io',
      role: 'Senior Analyst',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjD1j551dLHAoYJ8Otw4IWVPCWCG_LJGVCMv0TIRaZ3TEX40u5feLvVQ7f_OcldQIJP8EO_Y8WCm16L8FIcUzYENn-In5_NkfdCDAmmr4W7x37Cvh8StOkKbL9n7B3lmRyVAf9ReXRKAuq9-zjRLK2Tw8vAHteHyYnS4brljcPeaHWZEiKtBNy3o1Nm6Ibhlzjlh7MOtwCf3YmRINavs6N7tEMKY3jRZC7fXQzREYZrqOvXB3uumSh_BeCB3a0kEXUtJTc2pBNVoA',
      access: 'View Only',
      validUntil: 'Permanent'
    }
  ];

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: true },
    { icon: 'account_tree', label: 'Projects', href: '#', active: false },
    { icon: 'assignment_turned_in', label: 'Tasks', href: '#', active: false },
    { icon: 'folder_open', label: 'Files', href: '#', active: false },
    { icon: 'payments', label: 'Billing', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'documents', label: 'Documents', active: true },
    { id: 'communication', label: 'Communication' },
    { id: 'billing', label: 'Billing' },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope']">
      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Clients"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Management Module"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search files, projects..."
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDPPZHnxZ3B7eA_voDyTyD3U4GYgdkixsyax7WofPk_1dRKYvF_t-NJIo8wGbX2fKk43fUzQloFG9uRjvhQQTcymnAnn8JXyYw8lOI3mg7yuup_tBJuWPCZMXF2jnN71Q3-7xadeRWBBNCH0UX0FKg_LG_ke0o2wj-xcEUSE830db8I_29v_YYT39o48qpOiuaDNvAbWQWH91PJyoNkOd9EGIXpdNoaXeV8UZVXDn10PvQkrUY7d0aJlKztto1EHv_Rya7HdZVhn_A"
        userName="Alex Mercer"
        userRole="Administrator"
      />

      {/* Main Content */}
      <main className="ml-64 pt-28 px-12 pb-12 min-h-screen">
        {/* Client Header */}
        <section className="mb-10 flex items-end justify-between">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-xl bg-surface-container border border-outline-variant/10 overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src={client.logo} alt={client.name} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-primary/10 text-primary uppercase font-['Outfit']">
                  {client.tier}
                </span>
                <span className="font-['Outfit'] text-on-surface-variant text-sm font-medium">ID: {client.id}</span>
              </div>
              <h2 className="font-['Syne'] text-5xl font-extrabold tracking-tight text-on-surface">{client.name}</h2>
              <p className="font-['Outfit'] text-on-surface-variant mt-2 max-w-xl font-light">{client.description}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" icon="mail">Message</Button>
            <Button variant="primary" icon="add">Create Task</Button>
          </div>
        </section>

        {/* Tab Navigation */}
        <nav className="flex gap-8 mb-10 border-b border-outline-variant/10 font-['Outfit']">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-medium transition-colors ${
                tab.active
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Documents Content */}
        <div className="space-y-8">
          {/* Upload Zone */}
          <section className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-xl p-12 flex flex-col items-center justify-center transition-all hover:bg-surface-container/40">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 shadow-inner">
                <MaterialIcon className="text-primary text-3xl">cloud_upload</MaterialIcon>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold text-on-surface">Upload Client Assets</h3>
              <p className="font-['Outfit'] text-on-surface-variant mt-1 text-center max-w-md">
                Drag and drop your files here, or <span className="text-primary cursor-pointer hover:underline">browse files</span>.
                Supported: PDF, DOCX, XLSX, PNG (Max 50MB).
              </p>
            </div>
          </section>

          {/* File Manager Controls */}
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h4 className="font-['Syne'] font-bold text-lg">Central Repository</h4>
              <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full font-['Outfit']">
                24 Files
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-surface-container-lowest rounded-lg p-1 border border-outline-variant/10">
                <button
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-surface-container-high text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <MaterialIcon className="text-sm">grid_view</MaterialIcon>
                </button>
                <button
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-surface-container-high text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container'}`}
                  onClick={() => setViewMode('list')}
                >
                  <MaterialIcon className="text-sm">format_list_bulleted</MaterialIcon>
                </button>
              </div>
              <div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
              <select className="bg-surface-container border border-outline-variant/20 rounded-lg text-sm px-4 py-2 text-on-surface focus:ring-primary focus:border-primary font-['Outfit']">
                <option>Sort by: Newest First</option>
                <option>Sort by: Name (A-Z)</option>
                <option>Sort by: File Size</option>
              </select>
            </div>
          </section>

          {/* File Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Large File Card */}
            <BentoCard className="col-span-4 rounded-xl p-6 border border-outline-variant/10 hover:scale-[1.02] hover:bg-surface-container-high transition-all duration-400 flex flex-col group">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-lg ${files[0].bgColor} flex items-center justify-center ${files[0].color}`}>
                  <MaterialIcon filled>{files[0].icon}</MaterialIcon>
                </div>
                <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                  <MaterialIcon>more_vert</MaterialIcon>
                </button>
              </div>
              <div className="flex-1">
                <h5 className="font-['Syne'] font-bold text-lg mb-1 truncate">{files[0].name}</h5>
                <p className="font-['Outfit'] text-xs text-on-surface-variant">Modified {files[0].modified} • {files[0].size}</p>
              </div>
              <div className="mt-8 flex gap-2">
                <button className="flex-1 py-2 bg-surface-container-lowest hover:bg-primary/10 hover:text-primary rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 font-['Outfit']">
                  <MaterialIcon className="text-sm">visibility</MaterialIcon> Preview
                </button>
                <button className="p-2 bg-surface-container-lowest hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                  <MaterialIcon className="text-sm">download</MaterialIcon>
                </button>
              </div>
            </BentoCard>

            {/* Medium File Cards */}
            {files.slice(1, 3).map((file, index) => (
              <BentoCard
                key={file.id}
                className={`col-span-4 rounded-xl p-6 border border-outline-variant/10 hover:scale-[1.02] hover:bg-surface-container-high transition-all duration-400 flex flex-col group ${file.type === 'image' ? 'relative overflow-hidden h-full' : ''}`}
              >
                {file.type === 'image' ? (
                  <>
                    <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={file.image} alt={file.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MaterialIcon className="text-primary text-base">{file.icon}</MaterialIcon>
                        <span className="font-['Outfit'] text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Visual Asset</span>
                      </div>
                      <h5 className="font-['Syne'] font-bold text-lg text-on-surface">{file.name}</h5>
                      <p className="font-['Outfit'] text-xs text-on-surface-variant opacity-80">{file.modified} • {file.size}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-12 h-12 rounded-lg ${file.bgColor} flex items-center justify-center ${file.color}`}>
                        <MaterialIcon filled>{file.icon}</MaterialIcon>
                      </div>
                      <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                        <MaterialIcon>more_vert</MaterialIcon>
                      </button>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-['Syne'] font-bold text-lg mb-1 truncate">{file.name}</h5>
                      <p className="font-['Outfit'] text-xs text-on-surface-variant">Modified {file.modified} • {file.size}</p>
                    </div>
                    <div className="mt-8 flex gap-2">
                      <button className="flex-1 py-2 bg-surface-container-lowest hover:bg-primary/10 hover:text-primary rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 font-['Outfit']">
                        <MaterialIcon className="text-sm">share</MaterialIcon> Share
                      </button>
                      <button className="p-2 bg-surface-container-lowest hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                        <MaterialIcon className="text-sm">download</MaterialIcon>
                      </button>
                    </div>
                  </>
                )}
              </BentoCard>
            ))}

            {/* Small File Cards */}
            {files.slice(3).map((file) => (
              <BentoCard
                key={file.id}
                className="col-span-3 rounded-xl p-6 border border-outline-variant/10 hover:scale-[1.02] hover:bg-surface-container-high transition-all duration-400 group"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className={`w-10 h-10 rounded ${file.bgColor} flex items-center justify-center ${file.color}`}>
                    <MaterialIcon filled>{file.icon}</MaterialIcon>
                  </div>
                  <span className="font-['Outfit'] text-xs font-bold text-on-surface-variant bg-surface-container-lowest px-2 py-1 rounded">
                    {file.type === 'folder' ? `${file.items} Items` : file.type.toUpperCase()}
                  </span>
                </div>
                <h5 className="font-['Syne'] font-bold text-base mb-1">{file.name}</h5>
                <p className="font-['Outfit'] text-xs text-on-surface-variant">
                  {file.type === 'folder' ? file.description : `${file.size} • ${file.modified}`}
                </p>
              </BentoCard>
            ))}
          </div>

          {/* Recently Shared Section */}
          <section className="mt-12 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="font-['Syne'] font-bold text-xl">Recently Shared Access</h4>
                <p className="font-['Outfit'] text-on-surface-variant text-sm mt-1">
                  Manage external stakeholders who can view these documents.
                </p>
              </div>
              <button className="font-['Outfit'] text-primary text-sm font-bold hover:underline">Manage All Access</button>
            </div>
            <div className="space-y-4">
              {sharedAccess.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img className="w-full h-full object-cover" src={person.avatar} alt={person.name} />
                    </div>
                    <div>
                      <h6 className="font-['Outfit'] text-sm font-bold">{person.name}</h6>
                      <p className="font-['Outfit'] text-xs text-on-surface-variant">{person.email} • {person.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-['Outfit'] text-xs font-bold text-primary">{person.access}</p>
                      <p className="font-['Outfit'] text-[10px] text-on-surface-variant uppercase tracking-widest">Active until {person.validUntil}</p>
                    </div>
                    <button className="text-on-surface-variant hover:text-error transition-colors">
                      <MaterialIcon>person_remove</MaterialIcon>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
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

export default ClientDocumentVault;
