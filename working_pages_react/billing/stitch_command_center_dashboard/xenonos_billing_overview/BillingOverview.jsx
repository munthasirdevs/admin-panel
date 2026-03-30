/**
 * XenonOS Billing Overview Component
 *
 * Comprehensive financial dashboard with KPI statistics, revenue trends chart,
 * activity feed, and payment distribution visualization.
 *
 * @component
 * @example
 * return <BillingOverview />
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
 * Main BillingOverview Component
 */
export function BillingOverview() {
  const [searchQuery, setSearchQuery] = useState('');

  // KPI Statistics
  const [stats, setStats] = useState({
    totalRevenue: 842900.00,
    monthlyRecurring: 42150.00,
    outstandingPayments: 12400.00,
    activeSubscriptions: 1204
  });

  // Recent activity data
  const activities = [
    {
      id: 1,
      type: 'payment_received',
      title: 'Payment received from Quantum Dynamics',
      subtitle: 'Invoice #XN-9023 • 2 hours ago',
      amount: '+$12,500.00',
      status: 'success'
    },
    {
      id: 2,
      type: 'invoice_sent',
      title: 'Invoice sent to Nebula Studios',
      subtitle: 'Invoice #XN-9024 • 5 hours ago',
      amount: '$4,200.00',
      status: 'neutral'
    },
    {
      id: 3,
      type: 'payment_failed',
      title: 'Payment failed: Atlas Logistics',
      subtitle: 'Retry attempt scheduled • 1 day ago',
      amount: '-$2,850.00',
      status: 'error'
    }
  ];

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: false },
    { icon: 'assignment', label: 'Projects', href: '#', active: false },
    { icon: 'account_balance_wallet', label: 'Billing', href: '#', active: true },
    { icon: 'badge', label: 'Team', href: '#', active: false },
    { icon: 'chat', label: 'Communication', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  // Chart data (mock)
  const chartData = [
    { month: 'JAN', value: 40, highlight: false },
    { month: 'FEB', value: 55, highlight: false },
    { month: 'MAR', value: 45, highlight: false },
    { month: 'APR', value: 75, highlight: true },
    { month: 'MAY', value: 60, highlight: false },
    { month: 'JUN', value: 85, highlight: false },
    { month: 'JUL', value: 70, highlight: false },
    { month: 'AUG', value: 90, highlight: false },
  ];

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
        userRole="Admin Pool"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search transactions..."
        searchValue={searchQuery}
        onSearch={setSearchQuery}
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAwUvy-Awj0MeqUTwHPd4phwq2jGCnh90hv2yellI-_VZdJJBI7YgZ0KlEaz567hwtE65kFZyrf-Jwm4IBMUnMDbuT0_KDp8r7_fo85y5DUXXdkZajjBiKl_yrc2h6tVqGB-1IhrlhUZp9VzhHhz7X-w65HD6Qq6yijpi-_-KmST_QEPOdxIAabpmfjMvw1aBu98Qf0sCrSQvrisDeE0reNlnCCuTZRGQzxXxWr5y5ammdLHrKC05hQ-nLCH9O28GBpxOFqHtuf51g"
        userName="Alex Rivera"
        userRole="Admin Pool"
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <section className="p-8 max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h2 className="font-['Syne'] font-extrabold text-3xl tracking-tight text-primary">
              Financial Overview
            </h2>
            <p className="font-['Outfit'] text-on-surface-variant text-sm mt-1">
              Real-time performance metrics and revenue stream tracking.
            </p>
          </header>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-12 gap-6 mb-8">
            {/* Total Revenue */}
            <BentoCard className="col-span-12 md:col-span-3 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MaterialIcon className="text-6xl">payments</MaterialIcon>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Total Revenue</p>
              <h3 className="font-['Syne'] text-3xl font-extrabold text-on-surface mt-2">
                ${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <div className="flex items-center gap-2 mt-4 text-emerald-400 text-sm">
                <MaterialIcon className="text-xs">trending_up</MaterialIcon>
                <span>+12.5% vs last month</span>
              </div>
            </BentoCard>

            {/* Monthly Recurring */}
            <BentoCard className="col-span-12 md:col-span-3 rounded-2xl p-6">
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Monthly Recurring</p>
              <h3 className="font-['Syne'] text-3xl font-extrabold text-on-surface mt-2">
                ${stats.monthlyRecurring.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <div className="flex items-center gap-2 mt-4 text-primary text-sm">
                <MaterialIcon className="text-xs">sync</MaterialIcon>
                <span>Stable growth trajectory</span>
              </div>
            </BentoCard>

            {/* Outstanding Payments */}
            <BentoCard className="col-span-12 md:col-span-3 rounded-2xl p-6">
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Outstanding Payments</p>
              <h3 className="font-['Syne'] text-3xl font-extrabold text-on-surface mt-2">
                ${stats.outstandingPayments.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
              <div className="flex items-center gap-2 mt-4 text-error text-sm">
                <MaterialIcon className="text-xs">warning</MaterialIcon>
                <span>8 invoices overdue</span>
              </div>
            </BentoCard>

            {/* Active Subscriptions */}
            <BentoCard className="col-span-12 md:col-span-3 rounded-2xl p-6">
              <p className="font-['Outfit'] text-on-surface-variant text-sm font-medium">Active Subscriptions</p>
              <h3 className="font-['Syne'] text-3xl font-extrabold text-on-surface mt-2">
                {stats.activeSubscriptions.toLocaleString()}
              </h3>
              <div className="flex items-center gap-2 mt-4 text-on-surface-variant text-sm">
                <MaterialIcon className="text-xs">person</MaterialIcon>
                <span>+48 new this week</span>
              </div>
            </BentoCard>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-6 mb-8">
            {/* Revenue Trends Chart */}
            <BentoCard className="col-span-12 lg:col-span-8 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="font-['Outfit'] text-lg font-bold text-on-surface">Revenue Trends</h4>
                  <p className="text-sm text-on-surface-variant">Annual performance metrics 2024</p>
                </div>
                <div className="flex bg-surface-container-low p-1 rounded-lg">
                  <button className="px-4 py-1.5 text-xs font-semibold rounded-md bg-surface-container-high text-primary">
                    Monthly
                  </button>
                  <button className="px-4 py-1.5 text-xs font-semibold rounded-md text-on-surface-variant hover:text-on-surface transition-colors">
                    Quarterly
                  </button>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="h-64 flex items-end justify-between gap-4 mt-4">
                {chartData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-lg relative group transition-all
                      ${item.highlight ? 'bg-primary/40 hover:bg-primary/60' : 'bg-surface-container-highest/30 hover:bg-primary/20'}
                    `}
                    style={{ height: `${item.value}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity font-['Outfit']">
                      {item.month}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Quick Actions */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <Button
                variant="primary"
                className="h-full min-h-[140px] rounded-2xl p-8 flex flex-col justify-between items-start"
              >
                <MaterialIcon className="text-4xl text-on-primary">add_circle</MaterialIcon>
                <div className="text-left">
                  <h4 className="font-['Syne'] text-xl font-extrabold text-on-primary">Create Invoice</h4>
                  <p className="font-['Outfit'] text-on-primary/70 text-sm">Generate and send billing documents</p>
                </div>
              </Button>

              <Button
                variant="secondary"
                className="h-full min-h-[140px] rounded-2xl p-8 flex flex-col justify-between items-start border border-outline-variant/10"
              >
                <MaterialIcon className="text-4xl text-primary">receipt_long</MaterialIcon>
                <div className="text-left">
                  <h4 className="font-['Syne'] text-xl font-extrabold text-on-surface">View Transactions</h4>
                  <p className="font-['Outfit'] text-on-surface-variant text-sm">Audit logs and payment history</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Recent Activity Feed */}
            <BentoCard className="col-span-12 lg:col-span-7 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-['Outfit'] text-lg font-bold text-on-surface">Recent Activity</h4>
                <a className="text-primary text-sm font-semibold hover:underline font-['Outfit']" href="#">
                  View All
                </a>
              </div>

              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all
                      ${activity.status === 'success' ? 'bg-surface-container-low/50 border-outline-variant/5' : ''}
                      ${activity.status === 'neutral' ? 'bg-surface-container-low/50 border-outline-variant/5' : ''}
                      ${activity.status === 'error' ? 'bg-surface-container-low/50 border-outline-variant/5' : ''}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center
                        ${activity.status === 'success' ? 'bg-primary/10' : ''}
                        ${activity.status === 'neutral' ? 'bg-secondary-container/30' : ''}
                        ${activity.status === 'error' ? 'bg-error-container/20' : ''}
                      `}>
                        <MaterialIcon className={`text-xl
                          ${activity.status === 'success' ? 'text-primary' : ''}
                          ${activity.status === 'neutral' ? 'text-secondary' : ''}
                          ${activity.status === 'error' ? 'text-error' : ''}
                        `}>
                          {activity.type === 'payment_received' ? 'check_circle' : ''}
                          {activity.type === 'invoice_sent' ? 'mail' : ''}
                          {activity.type === 'payment_failed' ? 'error' : ''}
                        </MaterialIcon>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">{activity.title}</p>
                        <p className="text-xs text-on-surface-variant">{activity.subtitle}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-bold
                      ${activity.status === 'success' ? 'text-emerald-400' : ''}
                      ${activity.status === 'neutral' ? 'text-on-surface-variant' : ''}
                      ${activity.status === 'error' ? 'text-error' : ''}
                    `}>
                      {activity.amount}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Payment Distribution */}
            <BentoCard className="col-span-12 lg:col-span-5 rounded-2xl p-8 flex flex-col">
              <h4 className="font-['Outfit'] text-lg font-bold text-on-surface mb-6">Payment Distribution</h4>

              {/* Circular Chart */}
              <div className="flex-grow flex items-center justify-center py-4">
                <div className="relative w-48 h-48 rounded-full border-[12px] border-surface-container-highest flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[12px] border-primary border-t-transparent border-r-transparent transform -rotate-45"></div>
                  <div className="absolute inset-0 rounded-full border-[12px] border-secondary border-b-transparent border-l-transparent opacity-50"></div>
                  <div className="text-center">
                    <p className="font-['Syne'] text-2xl font-extrabold text-on-surface">72%</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-['Outfit']">Digital</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-xs font-['Outfit'] text-on-surface-variant font-medium">Credit Card (72%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary opacity-50"></div>
                  <span className="text-xs font-['Outfit'] text-on-surface-variant font-medium">Bank Transfer (18%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                  <span className="text-xs font-['Outfit'] text-on-surface-variant font-medium">Crypto (6%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  <span className="text-xs font-['Outfit'] text-on-surface-variant font-medium">Other (4%)</span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-xs text-on-surface-variant font-['Outfit']">
                © 2024 XenonOS Systems. All financial records are encrypted.
              </p>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-['Outfit']">System Status: Optimal</span>
              </div>
            </div>
            <div className="flex gap-6">
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors font-['Outfit']" href="#">
                Compliance
              </a>
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors font-['Outfit']" href="#">
                Privacy Policy
              </a>
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors font-['Outfit']" href="#">
                API Docs
              </a>
            </div>
          </footer>
        </section>
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

export default BillingOverview;
