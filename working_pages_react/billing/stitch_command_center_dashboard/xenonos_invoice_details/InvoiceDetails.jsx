/**
 * XenonOS Invoice Details Component
 *
 * Detailed invoice view with line items, payment summary,
 * client context, and activity timeline.
 *
 * @component
 * @example
 * return <InvoiceDetails />
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
 * Main InvoiceDetails Component
 */
export function InvoiceDetails() {
  const [invoice] = useState({
    id: 'INV-2024-082',
    status: 'pending',
    issueDate: 'October 12, 2024',
    dueDate: 'October 26, 2024',
    projectRef: 'VX-889-CORE',
    from: {
      name: 'Xenon Systems Inc.',
      address: 'Level 42, Obsidian Tower\n88 Cyber Way, New Tokyo',
      email: 'hello@xenonos.com'
    },
    to: {
      name: 'Vortex Labs GMBH',
      contact: 'Alexander Stratmann',
      address: 'Friedrichstraße 19\n10117 Berlin, Germany'
    },
    lineItems: [
      {
        description: 'Cloud Infrastructure Audit',
        details: 'Deep security and performance analysis of AWS clusters',
        quantity: 1,
        unitPrice: 2400.00,
        total: 2400.00
      },
      {
        description: 'Bespoke UI Design System',
        details: 'Complete Figma tokens and React primitives library',
        quantity: 1,
        unitPrice: 4500.00,
        total: 4500.00
      },
      {
        description: 'Data Migration Support',
        details: 'PostgreSQL to MongoDB transition consultancy (Hourly)',
        quantity: 12,
        unitPrice: 180.00,
        total: 2160.00
      }
    ],
    subtotal: 9060.00,
    tax: 1721.40,
    discount: 100.00,
    total: 10681.40,
    client: {
      name: 'Vortex Labs GMBH',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApHJBdGV6kw81iYU0egnZveyoCA9bO1N9Tmznr3psSJZ-UZZCMwor-HF13SlVCknfFT8Zs2Hn0PeXxhDJk3Owb7H0oXrAziNmwkdUBhiPC8ufd34gUtTHojGObN72l3ehqnxu6Jna4iF2_nJRfoRNpvUyrUlBOXGgCGWcEKj-y7x71PtQhuacEwF1_V9EIxPOQ1AMsS3MHtT1nTBs6gMGhJZOqALSmFS5DsIYi4ptp-tY8MxXDKpEikaCfkj4aGuYLqasQ0SL5Ns',
      since: '2022',
      invoicesThisYear: 12,
      avgPaymentTime: '4 days'
    },
    activityLog: [
      { action: 'Invoice Created', date: 'Oct 12, 09:42 AM', by: 'Sarah J.' },
      { action: 'Viewed by Client', date: 'Oct 13, 11:15 AM', location: 'Berlin, DE' },
      { action: 'Reminder Sent', date: 'Oct 14, 10:00 AM', by: 'Automated' }
    ]
  });

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: false },
    { icon: 'assignment', label: 'Projects', href: '#', active: false },
    { icon: 'check_circle', label: 'Tasks', href: '#', active: false },
    { icon: 'badge', label: 'Team', href: '#', active: false },
    { icon: 'folder_open', label: 'Files', href: '#', active: false },
    { icon: 'account_balance_wallet', label: 'Billing', href: '#', active: true },
    { icon: 'chat', label: 'Communication', href: '#', active: false },
    { icon: 'settings', label: 'Settings', href: '#', active: false },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope']">
      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Billing"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Billing & Finance"
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAfcn3Fii_joxD8hvr5Ibz-M0R6VPtsey2vblR0bQ_QetVN365rdehC4x-XEIT7LFaLUg_r-xcItBTUPH6YeuiJJw-FO5qk4Hh2kr2BSre4trOglb6VRv56-gfai5w5z66h4xUueWGwGNJ8DAqCe17uCK08J_N_nY6Eg4oxJhE53ES8dvccxoBs6reP_w9cmddNgVRV1Q_X9B43a5_P-Xjp_fmE2ingrzxwW7iEePy4bxhdeyqipSMBYFXWWsUazq1ch7E9B16avJk"
        userName="Alex Rivera"
        userRole="Administrator"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Quick search..."
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAfcn3Fii_joxD8hvr5Ibz-M0R6VPtsey2vblR0bQ_QetVN365rdehC4x-XEIT7LFaLUg_r-xcItBTUPH6YeuiJJw-FO5qk4Hh2kr2BSre4trOglb6VRv56-gfai5w5z66h4xUueWGwGNJ8DAqCe17uCK08J_N_nY6Eg4oxJhE53ES8dvccxoBs6reP_w9cmddNgVRV1Q_X9B43a5_P-Xjp_fmE2ingrzxwW7iEePy4bxhdeyqipSMBYFXWWsUazq1ch7E9B16avJk"
        userName="Alex Rivera"
        userRole="Administrator"
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen bg-surface-dim">
        <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
          {/* Page Header */}
          <header className="sticky top-20 z-40 bg-background/70 backdrop-blur-xl flex justify-between items-center w-full px-8 py-4 mb-8 rounded-2xl">
            <div className="flex items-center gap-6">
              <h1 className="font-['Syne'] font-extrabold text-xl tracking-tighter text-primary">
                Invoice #{invoice.id}
              </h1>
              <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Pending Payment
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl border border-outline-variant/10">
                <MaterialIcon className="text-on-surface-variant text-sm">search</MaterialIcon>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-48"
                  placeholder="Quick search..."
                  type="text"
                />
              </div>
              <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-bright transition-colors duration-200">
                <MaterialIcon>notifications</MaterialIcon>
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
                <img
                  alt="User avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfcn3Fii_joxD8hvr5Ibz-M0R6VPtsey2vblR0bQ_QetVN365rdehC4x-XEIT7LFaLUg_r-xcItBTUPH6YeuiJJw-FO5qk4Hh2kr2BSre4trOglb6VRv56-gfai5w5z66h4xUueWGwGNJ8DAqCe17uCK08J_N_nY6Eg4oxJhE53ES8dvccxoBs6reP_w9cmddNgVRV1Q_X9B43a5_P-Xjp_fmE2ingrzxwW7iEePy4bxhdeyqipSMBYFXWWsUazq1ch7E9B16avJk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* Actions Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Button variant="primary" icon="send">
                Send Invoice
              </Button>
              <Button variant="secondary" icon="download">
                PDF
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 text-on-surface-variant hover:text-primary transition-colors font-['Outfit']">
                <MaterialIcon className="text-sm">edit</MaterialIcon>
                Edit
              </button>
              <div className="w-px h-6 bg-outline-variant/20 mx-2"></div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-low text-on-surface border border-outline-variant/20 rounded-xl hover:border-primary/40 transition-all font-['Outfit']">
                <MaterialIcon className="text-sm text-primary">check_circle</MaterialIcon>
                Mark as Paid
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Invoice Card */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Info Section */}
              <BentoCard className="rounded-xl p-8">
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-4">
                    <div>
                      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1 font-['Outfit']">From</p>
                      <h2 className="font-['Syne'] font-bold text-lg">{invoice.from.name}</h2>
                      <p className="font-['Outfit'] text-on-surface-variant text-sm leading-relaxed whitespace-pre-line max-w-xs">
                        {invoice.from.address}
                        {'\n'}
                        {invoice.from.email}
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1 font-['Outfit']">To</p>
                      <h2 className="font-['Syne'] font-bold text-lg">{invoice.to.name}</h2>
                      <p className="font-['Outfit'] text-on-surface-variant text-sm leading-relaxed whitespace-pre-line max-w-xs">
                        {invoice.to.contact}
                        {'\n'}
                        {invoice.to.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-6">
                    <div>
                      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1 font-['Outfit']">Invoice Date</p>
                      <p className="font-['Outfit'] text-on-surface font-medium">{invoice.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1 font-['Outfit']">Due Date</p>
                      <p className="font-['Outfit'] text-on-surface font-medium text-primary">{invoice.dueDate}</p>
                    </div>
                    <div className="pt-4">
                      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1 font-['Outfit']">Project Ref</p>
                      <p className="font-['Outfit'] text-on-surface font-medium">{invoice.projectRef}</p>
                    </div>
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-outline-variant/10">
                        <th className="pb-4 font-['Syne'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">Description</th>
                        <th className="pb-4 font-['Syne'] text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center">Qty</th>
                        <th className="pb-4 font-['Syne'] text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">Unit Price</th>
                        <th className="pb-4 font-['Syne'] text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/5">
                      {invoice.lineItems.map((item, index) => (
                        <tr key={index}>
                          <td className="py-6">
                            <p className="font-['Outfit'] font-bold text-on-surface">{item.description}</p>
                            <p className="font-['Outfit'] text-sm text-on-surface-variant">{item.details}</p>
                          </td>
                          <td className="py-6 text-center font-['Outfit'] font-medium">{item.quantity}</td>
                          <td className="py-6 text-right font-['Outfit'] font-medium">
                            ${item.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-6 text-right font-['Outfit'] font-bold">
                            ${item.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BentoCard>

              {/* Notes Section */}
              <BentoCard className="rounded-xl p-8 border border-outline-variant/10">
                <h3 className="font-['Syne'] font-bold text-sm uppercase tracking-widest text-primary mb-4">Payment Notes</h3>
                <p className="font-['Outfit'] text-on-surface-variant text-sm leading-relaxed">
                  Please include the invoice number <span className="font-['Outfit'] text-on-surface font-bold">#{invoice.id}</span> in your bank transfer reference.
                  Payments are expected within 14 days of the invoice date. Late payments may be subject to a 2% monthly interest fee as per our service agreement.
                </p>
              </BentoCard>
            </div>

            {/* Sidebar Summary & Context */}
            <div className="space-y-6">
              {/* Summary Card */}
              <BentoCard className="rounded-xl p-8 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                <h3 className="font-['Syne'] font-bold text-sm uppercase tracking-widest mb-8 text-on-surface-variant">Calculation</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center text-sm font-['Outfit']">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="font-medium">${invoice.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-['Outfit']">
                    <span className="text-on-surface-variant">Tax (VAT 19%)</span>
                    <span className="font-medium">${invoice.tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-['Outfit']">
                    <span className="text-on-surface-variant">Service Discount</span>
                    <span className="font-medium text-error">- ${invoice.discount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="pt-6 mt-6 border-t border-outline-variant/20">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1 font-['Outfit']">Total Due</p>
                        <p className="font-['Syne'] text-3xl font-extrabold text-on-surface tracking-tight">
                          ${invoice.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                      <p className="text-[10px] text-on-surface-variant italic mb-1 font-['Outfit']">USD</p>
                    </div>
                  </div>
                </div>
              </BentoCard>

              {/* Client Context Card */}
              <BentoCard className="rounded-xl p-6 border border-outline-variant/10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    alt="Client logo"
                    src={invoice.client.logo}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-on-surface">{invoice.client.name}</h4>
                    <p className="font-['Outfit'] text-xs text-on-surface-variant">Enterprise Client since {invoice.client.since}</p>
                  </div>
                </div>
                <div className="space-y-3 font-['Outfit']">
                  <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <MaterialIcon className="text-sm">history</MaterialIcon>
                    {invoice.client.invoicesThisYear} Invoices this year
                  </div>
                  <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <MaterialIcon className="text-sm">timer</MaterialIcon>
                    Avg. payment time: {invoice.client.avgPaymentTime}
                  </div>
                </div>
                <button className="w-full mt-6 py-3 rounded-xl bg-surface-bright text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors font-['Outfit']">
                  View Client Portal
                </button>
              </BentoCard>

              {/* Activity Timeline */}
              <BentoCard className="rounded-xl p-6">
                <h3 className="font-['Syne'] font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-6">Activity Log</h3>
                <div className="space-y-6 font-['Outfit']">
                  {invoice.activityLog.map((activity, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${index === 0 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                        {index < invoice.activityLog.length - 1 && (
                          <div className="w-0.5 h-full bg-outline-variant/20 mt-1"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-['Outfit'] text-sm font-bold text-on-surface">{activity.action}</p>
                        <p className="font-['Outfit'] text-xs text-on-surface-variant">
                          {activity.date} {activity.by && `by ${activity.by}`}
                          {activity.location && `from ${activity.location}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>
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

export default InvoiceDetails;
