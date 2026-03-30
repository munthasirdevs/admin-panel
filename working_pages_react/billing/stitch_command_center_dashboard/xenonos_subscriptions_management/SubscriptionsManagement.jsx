/**
 * XenonOS Subscriptions Management Component
 *
 * Subscription management dashboard with plan details, payment history,
 * usage statistics, and tier comparison.
 *
 * @component
 * @example
 * return <SubscriptionsManagement />
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
 * Main SubscriptionsManagement Component
 */
export function SubscriptionsManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  // Current subscription data
  const [subscription] = useState({
    plan: {
      name: 'Enterprise Quantum',
      price: 499,
      period: 'mo',
      billingCycle: 'Yearly',
      savings: '20%',
      status: 'Active',
      renewalDate: 'Oct 24, 2024',
      users: {
        used: 42,
        total: 50,
        percentage: 84
      }
    },
    paymentHistory: [
      { invoice: 'XOS-INV-8291', date: 'Sep 24, 2023', amount: 499.00, status: 'paid' },
      { invoice: 'XOS-INV-8104', date: 'Aug 24, 2023', amount: 499.00, status: 'paid' },
      { invoice: 'XOS-INV-7992', date: 'Jul 24, 2023', amount: 499.00, status: 'paid' }
    ],
    upcomingChange: {
      title: 'Upcoming Change',
      description: 'Your trial for "Advanced Analytics Add-on" expires in 4 days. Would you like to keep it?',
      type: 'warning'
    }
  });

  // Available plans
  const plans = [
    {
      name: 'Standard',
      price: 199,
      period: 'mo',
      features: [
        { text: '10 Team Seats', included: true },
        { text: '5TB Storage', included: true },
        { text: 'Priority Support', included: false }
      ],
      action: 'Downgrade to Standard',
      current: false
    },
    {
      name: 'Enterprise',
      price: 499,
      period: 'mo',
      features: [
        { text: '50 Team Seats', included: true },
        { text: 'Unlimited Storage', included: true },
        { text: '24/7 Dedicated Support', included: true }
      ],
      action: 'Current Selection',
      current: true,
      badge: 'Current'
    },
    {
      name: 'Custom / Hub',
      price: 'Contact Sales',
      period: '',
      features: [
        { text: 'Unlimited Seats', included: true },
        { text: 'Custom API Nodes', included: true },
        { text: 'SLA Guarantees', included: true }
      ],
      action: 'Inquire Now',
      current: false
    }
  ];

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'group', label: 'Clients', href: '#', active: false },
    { icon: 'assignment', label: 'Projects', href: '#', active: false },
    { icon: 'account_balance_wallet', label: 'Billing', href: '#', active: true },
    { icon: 'check_circle', label: 'Tasks', href: '#', active: false },
    { icon: 'badge', label: 'Team', href: '#', active: false },
    { icon: 'folder_open', label: 'Files', href: '#', active: false },
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
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCoVTQRNsV8XnNJsc0Ee8bW0kv6Z3IP_Y2-w90bV6hE84SAUZ7POdFrYkkyDNmcoQJiBiG1TyeCYP2haDYPI_RRJh3sXWbUb3LzCGZc3u6DgfUEov1bEUdeKUx3s6tY39U_JyunDrl4se528zVk0sU-lq-yGn7B3qV0j_ti4ozq_DhgLF5bCUE0V-T2TZDsimvPfYUUbqJOrNhIVS028F0CNU4XWNO5wE4Kp9E_pbXB8YpqVjagUqdq-g8RjsTdKC7PFmOAhkRWN5U"
        userName="Alex Sterling"
        userRole="Enterprise Admin"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search billing ID..."
        searchValue={searchQuery}
        onSearch={setSearchQuery}
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCoVTQRNsV8XnNJsc0Ee8bW0kv6Z3IP_Y2-w90bV6hE84SAUZ7POdFrYkkyDNmcoQJiBiG1TyeCYP2haDYPI_RRJh3sXWbUb3LzCGZc3u6DgfUEov1bEUdeKUx3s6tY39U_JyunDrl4se528zVk0sU-lq-yGn7B3qV0j_ti4ozq_DhgLF5bCUE0V-T2TZDsimvPfYUUbqJOrNhIVS028F0CNU4XWNO5wE4Kp9E_pbXB8YpqVjagUqdq-g8RjsTdKC7PFmOAhkRWN5U"
        userName="Alex Sterling"
        userRole="Enterprise Admin"
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen flex flex-col">
        <section className="p-8 space-y-8">
          {/* Summary Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Active Plan Card */}
            <BentoCard className="col-span-12 lg:col-span-8 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4 font-['Outfit']">
                    Current Plan
                  </span>
                  <h3 className="font-['Syne'] text-4xl font-extrabold text-on-surface mb-2">
                    {subscription.plan.name}
                  </h3>
                  <p className="font-['Outfit'] text-on-surface-variant text-lg">
                    Unleash full scale infrastructure management
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-['Syne'] text-4xl font-extrabold text-primary">
                    ${subscription.plan.price}
                    <span className="text-lg text-on-surface-variant font-normal font-['Outfit']">/{subscription.plan.period}</span>
                  </p>
                  <p className="font-['Outfit'] text-sm text-on-surface-variant mt-1">
                    Billed {subscription.plan.billingCycle.toLowerCase()} (save {subscription.plan.savings})
                  </p>
                </div>
              </div>

              {/* Plan Details */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-outline-variant/10">
                <div>
                  <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-wider mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-['Outfit'] font-semibold">{subscription.plan.status}</span>
                  </div>
                </div>
                <div>
                  <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-wider mb-1">Users</p>
                  <p className="font-['Outfit'] font-semibold">{subscription.plan.users.used} / {subscription.plan.users.total} Seats</p>
                </div>
                <div>
                  <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-wider mb-1">Renewal Date</p>
                  <p className="font-['Outfit'] font-semibold">{subscription.plan.renewalDate}</p>
                </div>
                <div>
                  <p className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-wider mb-1">Cycle</p>
                  <p className="font-['Outfit'] font-semibold">{subscription.plan.billingCycle}</p>
                </div>
              </div>
            </BentoCard>

            {/* Quick Actions Card */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <button className="flex-1 bg-gradient-to-br from-primary to-primary-container rounded-2xl p-6 flex flex-col justify-center items-center text-on-primary hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all group">
                <MaterialIcon className="text-4xl mb-2 group-hover:scale-110 transition-transform">rocket_launch</MaterialIcon>
                <span className="font-['Syne'] font-bold text-xl">Upgrade Tier</span>
                <span className="font-['Outfit'] text-xs opacity-80 mt-1">Scale your performance</span>
              </button>
              <div className="flex-1 bg-surface-container-high rounded-2xl p-6 flex flex-col justify-center items-center text-on-surface border border-outline-variant/5 hover:bg-surface-variant transition-colors cursor-pointer">
                <MaterialIcon className="text-3xl mb-2 text-on-surface-variant">cancel</MaterialIcon>
                <span className="font-['Outfit'] font-bold">Manage Billing</span>
                <span className="font-['Outfit'] text-xs text-on-surface-variant mt-1 text-center">Update payment or cancel</span>
              </div>
            </div>
          </div>

          {/* Detailed Stats & History */}
          <div className="grid grid-cols-12 gap-6">
            {/* Payment History */}
            <BentoCard className="col-span-12 lg:col-span-7 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <h4 className="font-['Syne'] font-bold text-lg">Payment History</h4>
                <button className="font-['Outfit'] text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                  Download All <MaterialIcon className="text-sm">download</MaterialIcon>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="font-['Outfit'] text-xs text-on-surface-variant uppercase tracking-wider">
                      <th className="px-6 py-4 font-medium">Invoice</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Amount</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {subscription.paymentHistory.map((payment, index) => (
                      <tr key={index} className="hover:bg-surface-container-high transition-colors">
                        <td className="px-6 py-4 font-['Outfit'] font-medium">{payment.invoice}</td>
                        <td className="px-6 py-4 font-['Outfit'] text-on-surface-variant">{payment.date}</td>
                        <td className="px-6 py-4 font-['Outfit']">${payment.amount.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md text-xs font-['Outfit']">
                            Paid
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-on-surface-variant hover:text-primary transition-colors">
                            <MaterialIcon>description</MaterialIcon>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BentoCard>

            {/* Subscription Usage */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
              {/* Active Seats */}
              <BentoCard className="rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-['Syne'] font-bold text-lg">Active Seats</h4>
                  <span className="font-['Outfit'] text-xs font-bold text-primary">{subscription.plan.users.percentage}% Capacity</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-3 rounded-full overflow-hidden mb-6">
                  <div
                    className="bg-gradient-to-br from-primary to-primary-container h-full rounded-full shadow-[0_0_10px_rgba(192,193,255,0.4)]"
                    style={{ width: `${subscription.plan.users.percentage}%` }}
                  ></div>
                </div>
                <div className="space-y-4 font-['Outfit']">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                        <MaterialIcon className="text-sm text-primary">person</MaterialIcon>
                      </div>
                      <span className="text-sm">Assigned Users</span>
                    </div>
                    <span className="font-bold">{subscription.plan.users.used}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                        <MaterialIcon className="text-sm text-on-surface-variant">person_add</MaterialIcon>
                      </div>
                      <span className="text-sm">Available Seats</span>
                    </div>
                    <span className="font-bold text-on-surface-variant">{subscription.plan.users.total - subscription.plan.users.used}</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-outline-variant/20 rounded-xl text-sm font-bold hover:bg-surface-container-high transition-colors font-['Outfit']">
                  Manage Team Access
                </button>
              </BentoCard>

              {/* Upcoming Change Alert */}
              <div className="bg-surface-container rounded-2xl p-6 border-l-4 border-tertiary relative overflow-hidden">
                <div className="relative z-10">
                  <h5 className="font-['Syne'] text-tertiary font-bold mb-1">{subscription.upcomingChange.title}</h5>
                  <p className="font-['Outfit'] text-sm text-on-surface-variant">{subscription.upcomingChange.description}</p>
                  <div className="flex gap-4 mt-4">
                    <button className="font-['Outfit'] text-xs font-bold px-4 py-2 bg-tertiary text-on-tertiary rounded-lg">
                      Keep Add-on
                    </button>
                    <button className="font-['Outfit'] text-xs font-bold px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg">
                      Dismiss
                    </button>
                  </div>
                </div>
                <MaterialIcon className="absolute -right-4 -bottom-4 text-8xl text-tertiary opacity-5 rotate-12">warning</MaterialIcon>
              </div>
            </div>
          </div>

          {/* Alternative Plans */}
          <div className="space-y-6">
            <h4 className="font-['Syne'] font-bold text-2xl">Explore Higher Tiers</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border font-['Outfit']
                    ${plan.current
                      ? 'bg-surface-container border-2 border-primary ring-4 ring-primary/10'
                      : 'bg-surface-container-low border-outline-variant/10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer'
                    }
                  `}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={`font-['Outfit'] font-bold text-xs uppercase mb-1 ${plan.current ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {plan.name}
                      </p>
                      <h5 className="font-['Syne'] text-2xl font-bold mb-4">
                        {typeof plan.price === 'number'
                          ? `$${plan.price}/${plan.period}`
                          : plan.price
                        }
                      </h5>
                    </div>
                    {plan.current && (
                      <MaterialIcon className="text-primary">verified</MaterialIcon>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center gap-2 text-sm ${!feature.included ? 'text-on-surface-variant/50' : ''}`}>
                        <MaterialIcon className={`text-sm ${feature.included ? 'text-primary' : ''}`}>
                          {feature.included ? 'check' : 'close'}
                        </MaterialIcon>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-lg text-sm font-bold font-['Outfit']
                      ${plan.current
                        ? 'bg-primary/20 text-primary border border-primary/20 cursor-default'
                        : 'bg-surface-container-highest'
                      }
                    `}
                  >
                    {plan.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-8 px-8 border-t border-outline-variant/10 flex justify-between items-center opacity-60 font-['Outfit'] text-xs">
          <p>© 2024 XenonOS Infrastructure. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Support Portal</a>
          </div>
        </footer>
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

export default SubscriptionsManagement;
