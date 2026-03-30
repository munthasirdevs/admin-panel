/**
 * Security Settings Component
 * 
 * Comprehensive security management including password changes,
 * 2FA setup, and security activity logs.
 */

import React, { useState } from 'react';
import { 
  MaterialIcon, 
  Sidebar, 
  TopNavBar, 
  BentoCard,
  Button,
  Input,
  Badge 
} from '../../../shared/XenonOSComponents';

export function SecuritySettings() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [securityLogs] = useState([
    {
      id: 1,
      type: 'login',
      title: 'Successful Login',
      location: 'San Francisco, US',
      ip: 'IP: 192.168.1.104',
      timestamp: 'Today, 09:42 AM',
      status: 'Trusted',
      statusColor: 'success'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Suspicious Attempt',
      location: 'Kiev, UA',
      ip: 'IP: 45.12.98.22',
      timestamp: 'Yesterday, 11:15 PM',
      status: 'Blocked',
      statusColor: 'error'
    },
    {
      id: 3,
      type: 'system',
      title: 'Password Changed',
      location: 'System Process',
      ip: 'Automated Security',
      timestamp: 'Oct 24, 2023',
      status: 'System',
      statusColor: 'primary'
    }
  ]);

  const navItems = [
    { icon: 'person', label: 'Profile', href: '#', active: false },
    { icon: 'security', label: 'Security', href: '#', active: true },
    { icon: 'history', label: 'Sessions', href: '#', active: false },
    { icon: 'devices', label: 'Devices', href: '#', active: false },
    { icon: 'lock', label: 'Privacy', href: '#', active: false },
  ];

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log('Password updated:', passwordData);
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope'] selection:bg-primary/30">
      {/* Sidebar */}
      <Sidebar
        activeItem="Security"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Premium Management"
      />

      {/* Top Navigation */}
      <TopNavBar
        searchPlaceholder="Search security settings..."
        userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAurA_4belv56AhxAV8YnMTPj2YsZzy2DIf2fsCJe4HZbjOj-QjieQ6f5wGax6gTabEek4EXgpQY1oTPpqAGIPnWYszefxCi8wyWn5FZVUrFOObrJmosvtlquhW6K-w9v1a_Kolx2L5s6BFQIjAB_cQ533GrTnkJq9beK0umo99kOYrVY5VA3M9eejTGkKmrNFtN7PHFAEUxadXCK3b5Api79HEz49kaXkrUNOPLmyxPhiYhea4azMDNVJg0ZF8KHw8bXupSiZkD9I"
        userName="Alex Sterling"
        userRole="Admin"
      />

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen">
        <section className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
          {/* Page Header */}
          <div className="space-y-2">
            <h2 className="font-['Space Grotesk'] font-extrabold text-4xl md:text-5xl tracking-tighter text-on-surface">Security Settings</h2>
            <p className="text-on-surface-variant max-w-2xl font-light">
              Manage your account protection, encryption keys, and monitor real-time access logs from one centralized high-security dashboard.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Password Management Card */}
            <div className="lg:col-span-7 bg-surface-container rounded-xl p-8 shadow-sm hover:scale-[1.01] transition-all duration-400 border border-outline-variant/10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-['Space Grotesk'] font-bold text-xl text-primary mb-1">Password Management</h3>
                  <p className="text-sm text-on-surface-variant">Update your credentials regularly to maintain peak security.</p>
                </div>
                <div className="p-3 bg-surface-container-lowest rounded-lg">
                  <MaterialIcon className="text-primary">key</MaterialIcon>
                </div>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Current Password"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    placeholder="••••••••••••"
                  />
                  <Input
                    label="New Password"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    placeholder="••••••••••••"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">Strength Indicator</span>
                    <span className="text-primary font-bold">Strong</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden flex gap-1">
                    <div className="h-full w-1/3 bg-primary rounded-full"></div>
                    <div className="h-full w-1/3 bg-primary rounded-full"></div>
                    <div className="h-full w-1/3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant/60 italic">
                    Use at least 12 characters, including numbers and special symbols.
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <Button type="submit" variant="primary">
                    Update Password
                  </Button>
                </div>
              </form>
            </div>

            {/* 2FA Setup Card */}
            <div className="lg:col-span-5 bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Space Grotesk'] font-bold text-xl text-on-surface">Two-Factor (2FA)</h3>
                  <button
                    onClick={toggleTwoFactor}
                    className={`relative inline-flex items-center cursor-pointer w-14 h-7 bg-surface-container-lowest rounded-full transition-colors
                      ${twoFactorEnabled ? 'bg-primary/30' : ''}
                    `}
                  >
                    <span 
                      className={`absolute top-1 left-1 w-5 h-5 bg-on-surface-variant rounded-full transition-transform
                        ${twoFactorEnabled ? 'translate-x-7 bg-primary' : ''}
                      `}
                    />
                  </button>
                </div>
                <p className="text-sm text-on-surface-variant mb-8">
                  Add an extra layer of security by requiring a code from your mobile device.
                </p>

                {/* QR Code Placeholder */}
                <div className="aspect-square w-full max-w-[200px] mx-auto bg-surface-container-lowest rounded-2xl flex items-center justify-center p-4">
                  <div className="text-center">
                    <MaterialIcon className="text-6xl text-primary mx-auto mb-2">qr_code</MaterialIcon>
                    <p className="text-xs text-on-surface-variant">Scan with authenticator app</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button variant="outline" className="w-full" icon="download">
                  Download Backup Codes
                </Button>
                <p className="text-[10px] text-center text-on-surface-variant/60 uppercase tracking-tighter">
                  Connected Device: iPhone 15 Pro Max
                </p>
              </div>
            </div>

            {/* Security Logs Table */}
            <div className="lg:col-span-12 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/5">
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-['Space Grotesk'] font-bold text-xl text-on-surface">Recent Security Activity</h3>
                  <p className="text-sm text-on-surface-variant">Review recent login attempts and critical system alerts.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Export Logs</Button>
                  <Button variant="outline" size="sm">Clear History</Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-lowest/50 text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
                    <tr>
                      <th className="px-8 py-4">Event Type</th>
                      <th className="px-8 py-4">Location & IP</th>
                      <th className="px-8 py-4">Timestamp</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {securityLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-surface-container/30 transition-colors">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center
                              ${log.type === 'login' ? 'bg-primary/10 text-primary' : ''}
                              ${log.type === 'warning' ? 'bg-error/10 text-error' : ''}
                              ${log.type === 'system' ? 'bg-tertiary/10 text-tertiary' : ''}
                            `}>
                              <MaterialIcon className="text-sm">
                                {log.type === 'login' ? 'login' : log.type === 'warning' ? 'warning' : 'sync_lock'}
                              </MaterialIcon>
                            </div>
                            <span className="text-sm font-medium">{log.title}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="text-sm">{log.location}</div>
                          <div className="text-[10px] text-on-surface-variant">{log.ip}</div>
                        </td>
                        <td className="px-8 py-5 text-sm text-on-surface-variant">{log.timestamp}</td>
                        <td className="px-8 py-5">
                          <Badge variant={log.statusColor}>{log.status}</Badge>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button className="text-on-surface-variant hover:text-primary transition-colors">
                            <MaterialIcon className="text-lg">more_vert</MaterialIcon>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <BentoCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <MaterialIcon className="text-primary">history_edu</MaterialIcon>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Security Policy</h4>
                  <p className="text-xs text-on-surface-variant">Read our encryption standards</p>
                </div>
              </BentoCard>

              <BentoCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <MaterialIcon className="text-tertiary">emergency</MaterialIcon>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Panic Mode</h4>
                  <p className="text-xs text-on-surface-variant">Instantly sign out all devices</p>
                </div>
              </BentoCard>

              <BentoCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <MaterialIcon className="text-emerald-400">privacy_tip</MaterialIcon>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Privacy Audit</h4>
                  <p className="text-xs text-on-surface-variant">Run automated vulnerability scan</p>
                </div>
              </BentoCard>
            </div>
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

export default SecuritySettings;
