import React, { useState } from 'react';
import Sidebar from '../../shared/Sidebar';
import TopBar from '../../shared/TopBar';

/**
 * Client Details - Document Vault Component
 * Displays client documents in a bento grid with upload functionality
 */
interface Document {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'xlsx' | 'png' | 'docx' | 'pptx' | 'folder';
  modified: string;
  items?: number;
  shared?: boolean;
}

const ClientDetailsDocumentVault: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Newest First');

  const documents: Document[] = [
    { id: '1', name: 'Q4_Operational_Strategy_V2.pdf', size: '14.2 MB', type: 'pdf', modified: '2 hours ago' },
    { id: '2', name: 'Financial_Projections_2024.xlsx', size: '2.8 MB', type: 'xlsx', modified: 'Yesterday' },
    { id: '3', name: 'Analytics_Dashboard_UI.png', size: '8.4 MB', type: 'png', modified: 'Sep 12, 2023' },
    { id: '4', name: 'Contract Archives', size: '12 Items', type: 'folder', modified: 'Shared with Legal Team', items: 12 },
    { id: '5', name: 'Service_Agreement.docx', size: '420 KB', type: 'docx', modified: 'Sep 08' },
    { id: '6', name: 'Brand Guidelines', size: '5 Items', type: 'folder', modified: '4 days ago', items: 5 },
    { id: '7', name: 'Q4_Deck_vFINAL.pptx', size: '32.1 MB', type: 'pptx', modified: 'Aug 29' }
  ];

  const sharedUsers = [
    { name: 'Marcus Thorne', email: 'marcus.t@vanguard.io', role: 'External Partner', access: 'Full Access', until: 'Dec 2024' },
    { name: 'Elena Rodriguez', email: 'e.rod@vanguard.io', role: 'Senior Analyst', access: 'View Only', until: 'Permanent' }
  ];

  const getTypeColor = (type: Document['type']) => {
    const colors = {
      pdf: 'bg-red-500/10 text-red-400',
      xlsx: 'bg-green-500/10 text-green-400',
      png: 'bg-primary/10 text-primary',
      docx: 'bg-blue-500/10 text-blue-400',
      pptx: 'bg-amber-500/10 text-amber-400',
      folder: 'bg-indigo-500/10 text-indigo-400'
    };
    return colors[type];
  };

  const getTypeIcon = (type: Document['type']) => {
    const icons = {
      pdf: 'picture_as_pdf',
      xlsx: 'table_chart',
      png: 'image',
      docx: 'description',
      pptx: 'present_to_all',
      folder: 'folder'
    };
    return icons[type];
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <Sidebar activeItem="Clients" />
      <TopBar />

      <main className="ml-64 pt-28 px-12 pb-12 min-h-screen">
        {/* Client Header */}
        <section className="mb-10 flex items-end justify-between">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-xl bg-surface-container border border-outline-variant/10 overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Vanguard Dynamics Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAKYJUAhFtfspwONe6t0o_xnf_IUsqf4d3mRY827sNgSerVi0jy8mR9uOyFBreb6P1XNNgC0wbpnxkJqyhydGEfUeYZb3ch237GIaZsK7zEe1vXuDeDoME5tvZWEqgBsd6sSDV1GxcLQ1dl4ixGPDQvBpps2nCm06vhjwsGFoFGcqYuB1eH3jz7ce_IqzgoD288J6-iEDfg0VdMbDr7dfFvK5umF8KpzHgi5nA03L-Gk1BjCK2Xxn3ZcrMrQ83msER9S5SqMDWndI"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-primary/10 text-primary uppercase">Premium Tier</span>
                <span className="text-on-surface-variant text-sm font-medium">ID: CL-99201</span>
              </div>
              <h2 className="text-5xl font-['Syne'] font-extrabold tracking-tight text-on-surface">Vanguard Dynamics</h2>
              <p className="text-on-surface-variant mt-2 max-w-xl font-light">
                Global logistics and autonomous freight systems. Scaling operations across EMEA and APAC regions for Q4 expansion.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-xl bg-surface-container border border-outline-variant/20 font-medium hover:bg-surface-container-high transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span> Message
            </button>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>add</span> Create Task
            </button>
          </div>
        </section>

        {/* Tab Navigation */}
        <nav className="flex gap-8 mb-10 border-b border-outline-variant/10">
          {['Overview', 'Projects', 'Documents', 'Communication', 'Billing'].map((tab, idx) => (
            <a
              key={tab}
              href="#"
              className={`pb-4 font-medium transition-colors ${
                idx === 2 ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        {/* Documents Content */}
        <div className="space-y-8">
          {/* Upload Zone */}
          <section className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-xl p-12 flex flex-col items-center justify-center transition-all hover:bg-surface-container/40">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 shadow-inner">
                <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
              </div>
              <h3 className="text-xl font-['Syne'] font-bold text-on-surface">Upload Client Assets</h3>
              <p className="text-on-surface-variant mt-1 text-center max-w-md">
                Drag and drop your files here, or <span className="text-primary cursor-pointer hover:underline">browse files</span>. 
                Supported: PDF, DOCX, XLSX, PNG (Max 50MB).
              </p>
            </div>
          </section>

          {/* File Manager Controls */}
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h4 className="font-['Syne'] font-bold text-lg">Central Repository</h4>
              <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">24 Files</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-surface-container-lowest rounded-lg p-1 border border-outline-variant/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-surface-container-high text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">grid_view</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-surface-container-high text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                </button>
              </div>
              <div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-surface-container border border-outline-variant/20 rounded-lg text-sm px-4 py-2 text-on-surface focus:ring-primary focus:border-primary"
              >
                <option>Sort by: Newest First</option>
                <option>Sort by: Name (A-Z)</option>
                <option>Sort by: File Size</option>
              </select>
            </div>
          </section>

          {/* Bento Grid of Files */}
          <div className="grid grid-cols-12 gap-6">
            {documents.map((doc, idx) => (
              <div
                key={doc.id}
                className={`${
                  idx === 0 ? 'col-span-4' : idx < 3 ? 'col-span-4' : 'col-span-3'
                } ${
                  doc.type === 'png' ? 'relative group rounded-xl overflow-hidden border border-outline-variant/10 hover:scale-[1.02] transition-all duration-400 h-full' :
                  'bg-surface-container rounded-xl p-6 border border-outline-variant/10 hover:scale-[1.02] hover:bg-surface-container-high transition-all duration-400 group flex flex-col'
                }`}
              >
                {doc.type === 'png' ? (
                  <>
                    <img
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Analytics Dashboard UI"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP0Q_TmVXEfSvpEDEpoZLhNO6PKktgWf652j4DusPaMzsMJbOD_YagnGTHEXXnIoFcbOHK_MO9CcgMhXQh3ax3QsaNgkK6VxTidwRyY0jW2JJUwbGyxspgHpuj-yGQD74rBFbMbsDmOwntdQYwp4oH7y2dv8uklZiBILARMDAE244XN4dDry-TWTY1hgq66MxTY3v2gtV_efrvvZuKWNoipEafsNpgUb4C7L2BZApX7poXcMGTH940yrgMvemfG4f3psVrCdJqp7U"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-base">image</span>
                        <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Visual Asset</span>
                      </div>
                      <h5 className="font-['Syne'] font-bold text-lg text-on-surface">{doc.name}</h5>
                      <p className="text-xs text-on-surface-variant opacity-80">{doc.modified}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(doc.type)}`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{getTypeIcon(doc.type)}</span>
                      </div>
                      <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-['Syne'] font-bold text-lg mb-1 truncate">{doc.name}</h5>
                      <p className="text-xs text-on-surface-variant">
                        Modified {doc.modified} • {doc.size}
                      </p>
                    </div>
                    <div className="mt-8 flex gap-2">
                      <button className="flex-1 py-2 bg-surface-container-lowest hover:bg-primary/10 hover:text-primary rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        {doc.type === 'folder' ? 'Open' : 'Preview'}
                      </button>
                      <button className="p-2 bg-surface-container-lowest hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Recently Shared Section */}
          <section className="mt-12 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="font-['Syne'] font-bold text-xl">Recently Shared Access</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  Manage external stakeholders who can view these documents.
                </p>
              </div>
              <button className="text-primary text-sm font-bold hover:underline">Manage All Access</button>
            </div>
            <div className="space-y-4">
              {sharedUsers.map((user) => (
                <div
                  key={user.name}
                  className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt={user.name}
                        src={user.name === 'Marcus Thorne' 
                          ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAraIOVAwR1sCks2UtxUqkEjG2bCn9aV9_Noyrq-WBUkFZmFP34K4uXhwShTKfV8HrYk6RiuhCZMQumKxze7OTuPxqsV_cgWalKz_DN_WSDmjVrXedCIQy4y9XLgT75OqK4hVVUi2ijzmg4hMjkE4oAXNWwaip2q4_ysZymVKjSvJE5bkgT-EqXRVQeJPjIeQiMnRdVOpuNPjm0ba0jldGAhDG3q2bEsHCHja9fxE6UL4FBorFD9wa8B5bCEozEi33iL4K_OvboeSE'
                          : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjD1j551dLHAoYJ8Otw4IWVPCWCG_LJGVCMv0TIRaZ3TEX40u5feLvVQ7f_OcldQIJP8EO_Y8WCm16L8FIcUzYENn-In5_NkfdCDAmmr4W7x37Cvh8StOkKbL9n7B3lmRyVAf9ReXRKAuq9-zjRLK2Tw8vAHteHyYnS4brljcPeaHWZEiKtBNy3o1Nm6Ibhlzjlh7MOtwCf3YmRINavs6N7tEMKY3jRZC7fXQzREYZrqOvXB3uumSh_BeCB3a0kEXUtJTc2pBNVoA'
                        }
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-bold">{user.name}</h6>
                      <p className="text-xs text-on-surface-variant">{user.email} • {user.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className={`text-xs font-bold ${user.access === 'Full Access' ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {user.access}
                      </p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                        Active until {user.until}
                      </p>
                    </div>
                    <button className="text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined">person_remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ClientDetailsDocumentVault;
