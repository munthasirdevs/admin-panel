/**
 * XenonOS Login Sessions Management Component
 * 
 * Active sessions management page with device tracking, security logs,
 * and session termination capabilities.
 * 
 * @component
 */

import React, { useState } from 'react';
import { 
  MaterialIcon, 
  Sidebar, 
  TopNavBar, 
  BentoCard,
  Button,
  Badge,
  ProgressBar
} from '../../../shared/XenonOSComponents';

export function LoginSessions() {
  // State for sessions data
  const [sessions, setSessions] = useState([
    {
      id: 1,
      device: 'MacBook Pro 16"',
      browser: 'Chrome v122.0.1',
      location: 'New York, USA',
      ip: '192.158.1.38',
      lastActive: '2 mins ago',
      status: 'active',
      icon: 'laptop_mac'
    },
    {
      id: 2,
      device: 'iPhone 15 Pro',
      browser: 'Safari Mobile',
      location: 'New York, USA',
      ip: '172.56.21.104',
      lastActive: '4 hours ago',
      status: 'active',
      icon: 'smartphone'
    },
    {
      id: 3,
      device: 'Windows Workstation',
      browser: 'Firefox Browser',
      location: 'Chicago, USA',
      ip: '45.12.98.221',
      lastActive: 'Yesterday, 14:20',
      status: 'active',
      icon: 'desktop_windows'
    }
  ]);

  const [securityLogs, setSecurityLogs] = useState([
    {
      id: 1,
      type: 'login',
      title: 'Successful Login from Chrome on MacOS',
      location: 'New York, USA • IP 192.158.1.38',
      timestamp: 'Mar 24, 2024 • 09:12 AM',
      icon: 'login',
      iconColor: 'text-primary'
    },
    {
      id: 2,
      type: 'mfa',
      title: 'MFA Authenticated via Security Key',
      location: 'Verification successful for device: MacBook Pro',
      timestamp: 'Mar 24, 2024 • 09:11 AM',
      icon: 'key',
      iconColor: 'text-tertiary'
    },
    {
      id: 3,
      type: 'blocked',
      title: 'Blocked Login Attempt',
      location: 'Suspicious IP detected from Moscow, RU',
      timestamp: 'Mar 23, 2024 • 11:45 PM',
      icon: 'gpp_maybe',
      iconColor: 'text-error'
    }
  ]);

  const [securityScore, setSecurityScore] = useState(98);

  const navItems = [
    { icon: 'person', label: 'Profile', href: '#', active: false },
    { icon: 'security', label: 'Security', href: '#', active: false },
    { icon: 'history', label: 'Sessions', href: '#', active: true },
    { icon: 'devices', label: 'Devices', href: '#', active: false },
    { icon: 'lock', label: 'Privacy', href: '#', active: false },
  ];

  const handleLogout = (sessionId) => {
    setSessions(prev => prev.filter(s => s.id !== sessionId));
  };

  const handleLogoutAll = () => {
    setSessions([]);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope'] antialiased">
      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Sessions"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Premium Management"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search activities..."
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Hg74QrVOo3T7-ySUwyIQuGAYnzxCmFCFbqpnbmP9vtqaBM7yngQf8z2cWMU5ECGqRVJ74EDXPtKi3j3O-zroEIrMhoxapLpve2o7bjsNyJsfCvdxEHlAUA-wS4S9S_R1vVyZKwm2mpJ9X56ivmf9ZaOQnVZl0kNkFzQlojVbeBtgrbixkrjuYrfwtg6ONHEVjGd0PrVCKMD34RYT-iiBpOfqh3sOovjQNHYMDT6aXppZTsZTL49gyGzO1lhcX4HdFfDbHXZGYg0"
        userName="Alex Sterling"
        userRole="Admin"
      />

      {/* Main Content */}
      <main className="md:ml-64 p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Protection Active</span>
            </div>
            <h1 className="font-['Syne'] text-4xl font-extrabold tracking-tight">Active Sessions</h1>
            <p className="text-on-surface-variant max-w-xl text-sm leading-relaxed">
              Manage and secure your account across all logged-in devices. If you see an unfamiliar session, we recommend logging out immediately and updating your security keys.
            </p>
          </div>
          <Button variant="primary" icon="lock_reset" onClick={handleLogoutAll}>
            Logout all sessions
          </Button>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Session Table */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Logins Table */}
            <BentoCard className="rounded-xl overflow-hidden p-0">
              <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="font-['Outfit'] font-semibold text-base">Active Logins</h3>
                <span className="text-xs text-on-surface-variant font-['Outfit']">{sessions.length} active devices</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Device / Browser</th>
                      <th className="px-6 py-4 font-semibold">Location</th>
                      <th className="px-6 py-4 font-semibold">IP Address</th>
                      <th className="px-6 py-4 font-semibold">Last Active</th>
                      <th className="px-6 py-4 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    {sessions.map((session) => (
                      <tr key={session.id} className="hover:bg-surface-container-high transition-colors group">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                              session.status === 'active' 
                                ? 'bg-primary/5 text-primary border-primary/10' 
                                : 'bg-surface-container-highest text-on-surface-variant border-outline-variant/10'
                            }`}>
                              <MaterialIcon>{session.icon}</MaterialIcon>
                            </div>
                            <div>
                              <div className="text-sm font-semibold flex items-center gap-2">
                                {session.device}
                                {session.status === 'active' && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/10 text-green-400 border border-green-500/20">Active Now</span>
                                )}
                              </div>
                              <div className="text-[11px] text-on-surface-variant">{session.browser}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm">{session.location}</div>
                        </td>
                        <td className="px-6 py-5 font-mono text-xs opacity-70">{session.ip}</td>
                        <td className="px-6 py-5 text-sm">{session.lastActive}</td>
                        <td className="px-6 py-5 text-right">
                          <button 
                            onClick={() => handleLogout(session.id)}
                            className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-lg hover:bg-error/5"
                          >
                            <MaterialIcon className="text-lg">logout</MaterialIcon>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BentoCard>

            {/* Device History Logs */}
            <BentoCard className="rounded-xl overflow-hidden p-0">
              <div className="px-6 py-4 border-b border-outline-variant/10">
                <h3 className="font-['Outfit'] font-semibold text-base">Device History Logs</h3>
              </div>
              <div className="p-6 space-y-6">
                {securityLogs.map((log) => (
                  <div key={log.id} className="flex gap-4 relative">
                    {log.id < securityLogs.length && (
                      <div className="absolute left-[19px] top-8 bottom-[-24px] w-px bg-outline-variant/20"></div>
                    )}
                    <div className={`z-10 w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/10 flex items-center justify-center shrink-0`}>
                      <MaterialIcon className={`text-sm ${log.iconColor}`}>{log.icon}</MaterialIcon>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{log.title}</p>
                      <p className="text-xs text-on-surface-variant">{log.location}</p>
                      <p className="text-[10px] text-outline uppercase font-bold">{log.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Side Column */}
          <div className="space-y-6">
            {/* Security Score Card */}
            <BentoCard className="rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <MaterialIcon className="text-3xl text-primary" filled>shield_with_heart</MaterialIcon>
                  <span className="text-2xl font-['Syne'] font-extrabold text-primary">{securityScore}%</span>
                </div>
                <h4 className="font-['Outfit'] font-bold text-lg mb-2">Security Health</h4>
                <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                  Your account uses 2FA and has no active security vulnerabilities detected.
                </p>
                <ProgressBar value={securityScore} color="primary" />
              </div>
            </BentoCard>

            {/* Map Location Card */}
            <BentoCard className="rounded-xl overflow-hidden h-64 relative p-0">
              <img 
                className="w-full h-full object-cover opacity-40" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArIQNoicSlSmJVo8rgkSA55z9cefTEl4ydT3o0zLJMQOT1KtB3wGGeeOua71uxGiCCDaw2H2CqAS_vMSwklKRvpKQNV-MgdwGa9C3zAoHcjJg2uGQ8ou1XycP0iIg9h8LKWxCdGcAuP5YnZvbzk9oP7NOqqBlY-yDnNhPE_mKLIJ0VoMteBAz7jOuR0uEPdR9i_xoCYOp8oAXy8an5F97GrFZbSAnEuMtGFl20OXPUYSWz8sS3aO3KtoCh2NfPvI8pwo_17z-MFD0"
                alt="World map showing login locations"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-1">
                  <MaterialIcon className="text-xs text-primary" filled>location_on</MaterialIcon>
                  <span className="text-xs font-bold font-['Outfit'] tracking-wider uppercase">Live Coverage</span>
                </div>
                <p className="text-sm font-semibold">Recent logins detected in 2 countries</p>
              </div>
            </BentoCard>

            {/* Trusted Devices */}
            <BentoCard className="rounded-xl p-6 bg-surface-container-highest border-primary/20">
              <h4 className="font-['Outfit'] font-bold text-base mb-4 flex items-center gap-2">
                <MaterialIcon className="text-primary text-sm" filled>verified</MaterialIcon>
                Trusted Devices
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs">MacBook Pro (Office)</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-mono">Trusted</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs">iPhone 15 Pro</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-mono">Trusted</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 text-[11px] uppercase tracking-widest">
                  Manage Trusted List
                </Button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Warning Card */}
        <section className="bg-error/5 border border-error/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-error/10 flex items-center justify-center shrink-0">
            <MaterialIcon className="text-error text-3xl">report</MaterialIcon>
          </div>
          <div className="flex-1 space-y-1 text-center md:text-left">
            <h4 className="font-['Outfit'] font-bold text-lg text-error">Unrecognized session?</h4>
            <p className="text-sm text-on-surface-variant">
              If you don't recognize a device or location, logout immediately. Your account security might be compromised. We also recommend enabling 2FA if you haven't already.
            </p>
          </div>
          <div className="shrink-0">
            <Button variant="outline" className="border-error/30 text-error hover:bg-error/10">
              Reset Security Keys
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="md:ml-64 px-6 pb-12 pt-8 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-outline font-['Outfit'] opacity-60">
            © 2024 XenonOS Management Systems. All sessions are encrypted with AES-256.
          </p>
          <div className="flex gap-6 text-xs text-outline font-['Outfit'] font-medium">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Audit Logs</a>
            <a className="hover:text-primary transition-colors" href="#">System Status</a>
          </div>
        </div>
      </footer>

      {/* Global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;500;600&display=swap');
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

export default LoginSessions;
