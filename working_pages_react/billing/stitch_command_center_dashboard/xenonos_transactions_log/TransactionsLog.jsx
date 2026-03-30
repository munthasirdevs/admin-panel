/**
 * XenonOS Transactions Log Component
 *
 * Comprehensive transaction ledger with filtering, sorting,
 * and detailed financial flow tracking.
 *
 * @component
 * @example
 * return <TransactionsLog />
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
 * Main TransactionsLog Component
 */
export function TransactionsLog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('30days');
  const [methodFilter, setMethodFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Transaction data
  const [transactions] = useState([
    {
      id: 'TXN-88219',
      date: 'Oct 24, 2023',
      client: 'Nexus Labs Inc.',
      clientInitials: 'NL',
      clientColor: 'bg-primary/20 text-primary',
      method: 'Credit Card',
      methodIcon: 'credit_card',
      status: 'completed',
      amount: 12450.00
    },
    {
      id: 'TXN-88220',
      date: 'Oct 23, 2023',
      client: 'Solaris Architecture',
      clientInitials: 'SA',
      clientColor: 'bg-tertiary/20 text-tertiary',
      method: 'Wire Transfer',
      methodIcon: 'account_balance',
      status: 'pending',
      amount: 4800.00
    },
    {
      id: 'TXN-88221',
      date: 'Oct 21, 2023',
      client: 'Vanguard Estate',
      clientInitials: 'VE',
      clientColor: 'bg-indigo-500/20 text-indigo-400',
      method: 'USDC (Polygon)',
      methodIcon: 'currency_bitcoin',
      status: 'completed',
      amount: 32000.00
    },
    {
      id: 'TXN-88222',
      date: 'Oct 20, 2023',
      client: 'Aura Kraft',
      clientInitials: 'AK',
      clientColor: 'bg-error/20 text-error',
      method: 'Credit Card',
      methodIcon: 'credit_card',
      status: 'failed',
      amount: 920.00
    },
    {
      id: 'TXN-88223',
      date: 'Oct 19, 2023',
      client: 'Quantom UI',
      clientInitials: 'QU',
      clientColor: 'bg-surface-bright text-on-surface',
      method: 'Wire Transfer',
      methodIcon: 'account_balance',
      status: 'completed',
      amount: 7250.00
    }
  ]);

  // Stats
  const stats = {
    totalVolume: 124502.00,
    pendingClearance: 8120.40,
    pendingCount: 4
  };

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: false },
    { icon: 'assignment', label: 'Projects', href: '#', active: false },
    { icon: 'account_balance_wallet', label: 'Billing', href: '#', active: true },
    { icon: 'chat', label: 'Communication', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  // Get status badge configuration
  const getStatusConfig = (status) => {
    switch (status) {
      case 'completed':
        return { variant: 'primary', label: 'Completed' };
      case 'pending':
        return { variant: 'default', label: 'Pending' };
      case 'failed':
        return { variant: 'error', label: 'Failed' };
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
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAptm9VgIalCQrrPlPzkzo_-xQx6s-HhyZjKbv0szLgB1IsmNVR6vK-4JOWrEtBy4R9h2xZwvECkvGfPB_tqB6b1shJQuiNK9rs6ftbqNWKxePsvddeFdDDgy_mgU_xDM1q4wM64QnmLhxq4ri8vFeb2IUTn_j5q_-kCsieY4ixFfOYV-Zn6LuoDp4z4R7m-mOOrFAKg8_2wtzD_s5dqEx0mXYlTz4GGGCeO3MOth5iQKeZW_VvLBt7rbWMMxCEVqaYRt6GK0jNfe8"
        userName="Alex Rivera"
        userRole="Administrator"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search transactions, IDs, or clients..."
        searchValue={searchQuery}
        onSearch={setSearchQuery}
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAptm9VgIalCQrrPlPzkzo_-xQx6s-HhyZjKbv0szLgB1IsmNVR6vK-4JOWrEtBy4R9h2xZwvECkvGfPB_tqB6b1shJQuiNK9rs6ftbqNWKxePsvddeFdDDgy_mgU_xDM1q4wM64QnmLhxq4ri8vFeb2IUTn_j5q_-kCsieY4ixFfOYV-Zn6LuoDp4z4R7m-mOOrFAKg8_2wtzD_s5dqEx0mXYlTz4GGGCeO3MOth5iQKeZW_VvLBt7rbWMMxCEVqaYRt6GK0jNfe8"
        userName="Alex Rivera"
        userRole="Administrator"
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <section className="p-8 max-w-7xl mx-auto">
          {/* Page Header & Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-['Syne'] font-extrabold text-4xl text-on-surface tracking-tight mb-2">
                Transaction Ledger
              </h2>
              <p className="font-['Outfit'] text-on-surface-variant max-w-md">
                Detailed overview of financial flows across all active projects and international clients.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" icon="download">
                Export PDF
              </Button>
              <Button variant="outline" icon="ios_share">
                CSV Export
              </Button>
              <Button variant="primary" icon="add">
                New Transaction
              </Button>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Total Volume */}
            <BentoCard className="rounded-2xl p-6 border-l-4 border-primary/40 hover:scale-[1.02] transition-transform duration-400">
              <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-widest mb-1">Total Volume</p>
              <h3 className="font-['Outfit'] text-2xl font-bold text-on-surface">
                ${stats.totalVolume.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <p className="font-['Outfit'] text-xs text-primary mt-2 flex items-center gap-1">
                <MaterialIcon className="text-xs">trending_up</MaterialIcon>
                +12.4% vs last month
              </p>
            </BentoCard>

            {/* Pending Clearance */}
            <BentoCard className="rounded-2xl p-6 border-l-4 border-tertiary/40 hover:scale-[1.02] transition-transform duration-400">
              <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-widest mb-1">Pending Clearance</p>
              <h3 className="font-['Outfit'] text-2xl font-bold text-on-surface">
                ${stats.pendingClearance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <p className="font-['Outfit'] text-xs text-on-surface-variant mt-2">{stats.pendingCount} active transactions</p>
            </BentoCard>

            {/* Primary Gateway */}
            <BentoCard className="rounded-2xl p-6 border border-outline-variant/10 col-span-1 md:col-span-2 flex items-center justify-between">
              <div>
                <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-widest mb-1">Primary Gateway</p>
                <h3 className="font-['Outfit'] text-xl font-bold text-on-surface">Stripe Connect • USD</h3>
              </div>
              <div className="h-12 w-24 bg-surface-container rounded-lg flex items-center justify-center opacity-40">
                <MaterialIcon className="text-3xl">account_balance</MaterialIcon>
              </div>
            </BentoCard>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8 font-['Outfit']">
            <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10">
              <MaterialIcon className="text-sm text-on-surface-variant">calendar_today</MaterialIcon>
              <select
                className="bg-transparent border-none text-sm text-on-surface focus:ring-0 cursor-pointer"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="30days">Last 30 Days</option>
                <option value="quarter">Current Quarter</option>
                <option value="year">Year to Date</option>
                <option value="all">All Time</option>
              </select>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10">
              <MaterialIcon className="text-sm text-on-surface-variant">filter_list</MaterialIcon>
              <select
                className="bg-transparent border-none text-sm text-on-surface focus:ring-0 cursor-pointer"
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
              >
                <option value="all">All Methods</option>
                <option value="wire">Wire Transfer</option>
                <option value="card">Credit Card</option>
                <option value="crypto">Crypto (USDC)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10">
              <MaterialIcon className="text-sm text-on-surface-variant">verified</MaterialIcon>
              <select
                className="bg-transparent border-none text-sm text-on-surface focus:ring-0 cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Any Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <button className="ml-auto text-sm text-primary font-medium hover:underline">
              Clear all filters
            </button>
          </div>

          {/* Transaction Table */}
          <BentoCard className="rounded-2xl overflow-hidden border border-outline-variant/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/10">
                    <th className="px-6 py-4 font-['Outfit'] text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Transaction ID
                    </th>
                    <th className="px-6 py-4 font-['Outfit'] text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Date
                    </th>
                    <th className="px-6 py-4 font-['Outfit'] text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Client
                    </th>
                    <th className="px-6 py-4 font-['Outfit'] text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Method
                    </th>
                    <th className="px-6 py-4 font-['Outfit'] text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Status
                    </th>
                    <th className="px-6 py-4 font-['Outfit'] text-xs uppercase tracking-widest text-on-surface-variant font-semibold text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {transactions.map((txn) => {
                    const statusConfig = getStatusConfig(txn.status);
                    return (
                      <tr key={txn.id} className="hover:bg-surface-container-high transition-colors group cursor-pointer">
                        <td className="px-6 py-5">
                          <span className="font-['Outfit'] text-sm font-mono text-on-surface-variant group-hover:text-on-surface transition-colors">
                            #{txn.id}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <span className="font-['Outfit'] text-sm text-on-surface">{txn.date}</span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-full ${txn.clientColor} flex items-center justify-center text-[10px] font-bold`}>
                              {txn.clientInitials}
                            </div>
                            <span className="font-['Outfit'] text-sm font-medium">{txn.client}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 font-['Outfit']">
                            <MaterialIcon className="text-sm text-on-surface-variant">{txn.methodIcon}</MaterialIcon>
                            <span className="text-sm">{txn.method}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <Badge variant={statusConfig.variant}>
                            {statusConfig.label}
                          </Badge>
                        </td>
                        <td className={`px-6 py-5 text-right font-['Outfit'] text-sm font-bold ${txn.status === 'failed' ? 'text-error' : ''}`}>
                          ${txn.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low border-t border-outline-variant/5 font-['Outfit']">
              <p className="text-xs text-on-surface-variant">
                Showing 5 of 1,240 entries
              </p>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-surface-container-highest transition-colors disabled:opacity-20">
                  <MaterialIcon className="text-sm">chevron_left</MaterialIcon>
                </button>
                <button className="w-8 h-8 rounded-lg bg-primary text-on-primary text-xs font-bold">1</button>
                <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-medium transition-colors">2</button>
                <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-medium transition-colors">3</button>
                <span className="mx-1 text-on-surface-variant">...</span>
                <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-medium transition-colors">248</button>
                <button className="p-1.5 rounded-lg hover:bg-surface-container-highest transition-colors">
                  <MaterialIcon className="text-sm">chevron_right</MaterialIcon>
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Audit Trail Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard className="md:col-span-2 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <MaterialIcon className="text-8xl">verified_user</MaterialIcon>
              </div>
              <h4 className="font-['Syne'] font-bold text-xl mb-4">Integrity Audit</h4>
              <p className="font-['Outfit'] text-on-surface-variant text-sm mb-6 max-w-lg leading-relaxed">
                All transactions in XenonOS are cryptographically signed and immutable once completed.
                Our automated reconciliation system runs every 6 hours to ensure your ledger matches
                your connected bank entities.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-['Outfit'] text-xs font-mono uppercase text-on-surface">System Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <MaterialIcon className="text-sm text-primary">task_alt</MaterialIcon>
                  <span className="font-['Outfit'] text-xs font-mono uppercase text-on-surface">Verified Today</span>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="rounded-2xl p-8 border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <MaterialIcon className="text-primary mb-4">help_outline</MaterialIcon>
                <h4 className="font-['Outfit'] font-bold mb-2">Need Assistance?</h4>
                <p className="font-['Outfit'] text-xs text-on-surface-variant leading-relaxed">
                  Our dedicated finance desk is available 24/7 for high-value transaction support.
                </p>
              </div>
              <button className="w-full mt-6 py-3 rounded-xl bg-surface text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 font-['Outfit']">
                Contact Support
              </button>
            </BentoCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-outline-variant/5 mt-12 text-center md:text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h5 className="font-['Syne'] font-extrabold text-primary text-lg">XenonOS</h5>
              <p className="font-['Outfit'] text-xs text-on-surface-variant">
                © 2023 Xenon Systems Architecture. All rights reserved.
              </p>
            </div>
            <div className="flex gap-8 font-['Outfit']">
              <a className="font-['Outfit'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="font-['Outfit'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <a className="font-['Outfit'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">
                API Docs
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
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

export default TransactionsLog;
