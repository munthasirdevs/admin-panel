/**
 * XenonOS Invoices Management Component
 *
 * Comprehensive invoice management table with filtering, sorting,
 * and batch actions for financial document handling.
 *
 * @component
 * @example
 * return <InvoicesManagement />
 */

import React, { useState } from 'react';
import {
  MaterialIcon,
  Sidebar,
  TopNavBar,
  BentoCard,
  Button,
  Badge
} from '../../../shared/XenonOSComponents';

/**
 * Main InvoicesManagement Component
 */
export function InvoicesManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRangeFilter, setDateRangeFilter] = useState('30days');
  const [clientFilter, setClientFilter] = useState('all');

  // Invoice data
  const [invoices] = useState([
    {
      id: 'INV-9402',
      client: 'Aether Labs',
      clientInitials: 'AL',
      clientColor: 'from-indigo-500 to-purple-600',
      description: 'Cloud Infrastructure',
      amount: 12450.00,
      status: 'paid',
      dueDate: 'Oct 12, 2023'
    },
    {
      id: 'INV-9398',
      client: 'Cyberdyne Systems',
      clientInitials: 'CS',
      clientColor: 'from-orange-400 to-red-500',
      description: 'AI Research',
      amount: 8200.00,
      status: 'pending',
      dueDate: 'Oct 28, 2023'
    },
    {
      id: 'INV-9385',
      client: 'Nexus Corp',
      clientInitials: 'NC',
      clientColor: 'from-emerald-400 to-cyan-500',
      description: 'Data Logistics',
      amount: 3210.00,
      status: 'overdue',
      dueDate: 'Oct 05, 2023'
    },
    {
      id: 'INV-9382',
      client: 'Stark Tech',
      clientInitials: 'ST',
      clientColor: 'from-slate-400 to-slate-600',
      description: 'Defense Systems',
      amount: 25000.00,
      status: 'paid',
      dueDate: 'Oct 02, 2023'
    }
  ]);

  // Stats
  const stats = {
    totalRevenue: 142850.40,
    pending: 12400.00,
    overdue: 3210.00
  };

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: false },
    { icon: 'assignment', label: 'Projects', href: '#', active: false },
    { icon: 'account_balance_wallet', label: 'Billing', href: '#', active: true },
    { icon: 'badge', label: 'Team', href: '#', active: false },
    { icon: 'folder_open', label: 'Files', href: '#', active: false },
    { icon: 'chat', label: 'Communication', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  // Get status badge configuration
  const getStatusConfig = (status) => {
    switch (status) {
      case 'paid':
        return { variant: 'primary', label: 'Paid', icon: 'check_circle' };
      case 'pending':
        return { variant: 'warning', label: 'Pending', icon: 'schedule' };
      case 'overdue':
        return { variant: 'error', label: 'Overdue', icon: 'warning' };
      default:
        return { variant: 'default', label: status };
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope']">
      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Billing"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Billing & Finance"
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAwUvy-Awj0MeqUTwHPd4phwq2jGCnh90hv2yellI-_VZdJJBI7YgZ0KlEaz567hwtE65kFZyrf-Jwm4IBMUnMDbuT0_KDp8r7_fo85y5DUXXdkZajjBiKl_yrc2h6tVqGB-1IhrlhUZp9VzhHhz7X-w65HD6Qq6yijpi-_-KmST_QEPOdxIAabpmfjMvw1aBu98Qf0sCrSQvrisDeE0reNlnCCuTZRGQzxXxWr5y5ammdLHrKC05hQ-nLCH9O28GBpxOFqHtuf51g"
        userName="Alex Rivera"
        userRole="Administrator"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search invoices, clients..."
        searchValue={searchQuery}
        onSearch={setSearchQuery}
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAwUvy-Awj0MeqUTwHPd4phwq2jGCnh90hv2yellI-_VZdJJBI7YgZ0KlEaz567hwtE65kFZyrf-Jwm4IBMUnMDbuT0_KDp8r7_fo85y5DUXXdkZajjBiKl_yrc2h6tVqGB-1IhrlhUZp9VzhHhz7X-w65HD6Qq6yijpi-_-KmST_QEPOdxIAabpmfjMvw1aBu98Qf0sCrSQvrisDeE0reNlnCCuTZRGQzxXxWr5y5ammdLHrKC05hQ-nLCH9O28GBpxOFqHtuf51g"
        userName="Alex Rivera"
        userRole="Administrator"
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <div className="px-10 py-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-['Syne'] text-4xl font-extrabold tracking-tighter text-on-surface mb-2">
                Invoices
              </h2>
              <p className="font-['Outfit'] text-on-surface-variant">
                Manage your financial ecosystem with surgical precision.
              </p>
            </div>
            <Button variant="primary" icon="add_circle">
              Create Invoice
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Total Revenue */}
            <BentoCard className="md:col-span-2 rounded-xl p-8 relative overflow-hidden border border-outline-variant/5">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MaterialIcon className="text-8xl" filled>account_balance</MaterialIcon>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-semibold mb-1">Total Revenue</p>
              <h3 className="font-['Syne'] text-4xl font-extrabold text-primary mb-4">
                ${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded w-fit">
                <MaterialIcon className="text-xs">trending_up</MaterialIcon>
                +12.4% from last month
              </div>
            </BentoCard>

            {/* Pending */}
            <BentoCard className="rounded-xl p-8 border border-outline-variant/5">
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-semibold mb-1">Pending</p>
              <h3 className="font-['Syne'] text-3xl font-extrabold text-on-surface mb-4">
                ${stats.pending.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <p className="text-xs text-on-surface-variant">8 invoices awaiting payment</p>
            </BentoCard>

            {/* Overdue */}
            <BentoCard className="rounded-xl p-8 border border-outline-variant/5">
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-semibold mb-1">Overdue</p>
              <h3 className="font-['Syne'] text-3xl font-extrabold text-error mb-4">
                ${stats.overdue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <p className="text-xs text-on-surface-variant">2 invoices high priority</p>
            </BentoCard>
          </div>

          {/* Filters Bar */}
          <div className="bg-surface-container-low p-6 rounded-t-2xl border-x border-t border-outline-variant/10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-surface-container-highest/50 px-4 py-2 rounded-lg text-sm border border-outline-variant/20">
              <span className="font-['Outfit'] text-on-surface-variant font-medium">Status:</span>
              <select
                className="bg-transparent border-none p-0 text-on-surface font-bold focus:ring-0 cursor-pointer font-['Outfit']"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Invoices</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-highest/50 px-4 py-2 rounded-lg text-sm border border-outline-variant/20">
              <span className="font-['Outfit'] text-on-surface-variant font-medium">Date Range:</span>
              <select
                className="bg-transparent border-none p-0 text-on-surface font-bold focus:ring-0 cursor-pointer font-['Outfit']"
                value={dateRangeFilter}
                onChange={(e) => setDateRangeFilter(e.target.value)}
              >
                <option value="30days">Last 30 days</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Year to Date</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-highest/50 px-4 py-2 rounded-lg text-sm border border-outline-variant/20">
              <span className="font-['Outfit'] text-on-surface-variant font-medium">Client:</span>
              <select
                className="bg-transparent border-none p-0 text-on-surface font-bold focus:ring-0 cursor-pointer font-['Outfit']"
                value={clientFilter}
                onChange={(e) => setClientFilter(e.target.value)}
              >
                <option value="all">All Clients</option>
                <option value="aether">Aether Labs</option>
                <option value="cyberdyne">Cyberdyne Systems</option>
                <option value="nexus">Nexus Corp</option>
              </select>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button className="p-2 bg-surface-container-highest/50 rounded-lg border border-outline-variant/20 text-on-surface-variant hover:text-primary transition-colors">
                <MaterialIcon>filter_list</MaterialIcon>
              </button>
              <button className="p-2 bg-surface-container-highest/50 rounded-lg border border-outline-variant/20 text-on-surface-variant hover:text-primary transition-colors">
                <MaterialIcon>download</MaterialIcon>
              </button>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="bg-surface-container overflow-hidden rounded-b-2xl border-x border-b border-outline-variant/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high/30 text-on-surface-variant uppercase text-[10px] tracking-[0.2em] font-bold font-['Syne']">
                    <th className="px-8 py-5 border-b border-outline-variant/10">Invoice ID</th>
                    <th className="px-8 py-5 border-b border-outline-variant/10">Client</th>
                    <th className="px-8 py-5 border-b border-outline-variant/10 text-right">Amount</th>
                    <th className="px-8 py-5 border-b border-outline-variant/10">Status</th>
                    <th className="px-8 py-5 border-b border-outline-variant/10">Due Date</th>
                    <th className="px-8 py-5 border-b border-outline-variant/10 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {invoices.map((invoice) => {
                    const statusConfig = getStatusConfig(invoice.status);
                    return (
                      <tr key={invoice.id} className="group hover:bg-surface-container-high/40 transition-colors">
                        <td className="px-8 py-5">
                          <span className="font-['Syne'] text-on-surface font-bold">{invoice.id}</span>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded bg-gradient-to-br ${invoice.clientColor} flex items-center justify-center text-[10px] font-bold`}>
                              {invoice.clientInitials}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-on-surface">{invoice.client}</p>
                              <p className="text-xs text-on-surface-variant">{invoice.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-right font-['Syne'] text-on-surface">
                          ${invoice.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="px-8 py-5">
                          <Badge variant={statusConfig.variant}>
                            {statusConfig.label}
                          </Badge>
                        </td>
                        <td className={`px-8 py-5 text-sm font-['Outfit'] ${invoice.status === 'overdue' ? 'text-error font-bold italic underline decoration-error/30' : 'text-on-surface-variant'}`}>
                          {invoice.dueDate}
                        </td>
                        <td className="px-8 py-5 text-right">
                          <div className={`flex items-center justify-end gap-2 ${invoice.status === 'overdue' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                            {invoice.status === 'overdue' ? (
                              <button className="flex items-center gap-2 px-3 py-1.5 bg-error/20 text-error hover:bg-error/30 rounded-lg text-xs font-bold transition-all border border-error/30">
                                <MaterialIcon className="text-base">warning</MaterialIcon>
                                Send Final Notice
                              </button>
                            ) : invoice.status === 'pending' ? (
                              <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-highest hover:bg-primary/20 text-on-surface-variant hover:text-primary rounded-lg text-xs font-bold transition-all border border-outline-variant/20">
                                <MaterialIcon className="text-base">send</MaterialIcon>
                                Remind
                              </button>
                            ) : (
                              <>
                                <button className="p-2 hover:bg-surface-container-highest rounded-lg text-on-surface-variant hover:text-primary transition-all" title="View">
                                  <MaterialIcon className="text-xl">visibility</MaterialIcon>
                                </button>
                                <button className="p-2 hover:bg-surface-container-highest rounded-lg text-on-surface-variant hover:text-primary transition-all" title="Download">
                                  <MaterialIcon className="text-xl">download</MaterialIcon>
                                </button>
                              </>
                            )}
                            <button className="p-2 hover:bg-surface-container-highest rounded-lg text-on-surface-variant transition-all" title="More">
                              <MaterialIcon className="text-xl">more_vert</MaterialIcon>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-8 py-6 bg-surface-container-lowest/50 flex items-center justify-between border-t border-outline-variant/10">
              <p className="text-xs text-on-surface-variant font-['Outfit']">
                Showing <span className="text-on-surface font-bold">1-4</span> of{' '}
                <span className="text-on-surface font-bold">128</span> invoices
              </p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-on-surface-variant disabled:opacity-30" disabled>
                  <MaterialIcon className="text-sm">chevron_left</MaterialIcon>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-xs font-['Outfit']">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-on-surface-variant font-bold text-xs transition-colors font-['Outfit']">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-on-surface-variant font-bold text-xs transition-colors font-['Outfit']">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-on-surface-variant hover:text-primary transition-colors">
                  <MaterialIcon className="text-sm">chevron_right</MaterialIcon>
                </button>
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

export default InvoicesManagement;
