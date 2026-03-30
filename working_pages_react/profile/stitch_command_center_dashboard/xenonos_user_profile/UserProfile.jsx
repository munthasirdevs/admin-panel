/**
 * XenonOS User Profile Component
 * 
 * A comprehensive user profile management page with bento-grid layout,
 * editable personal information, and activity statistics.
 * 
 * @component
 * @example
 * return <UserProfile />
 */

import React, { useState } from 'react';
import { 
  MaterialIcon, 
  Sidebar, 
  TopNavBar, 
  BentoCard, 
  KPIStatCard,
  Button,
  Input 
} from '../../../shared/XenonOSComponents';

/**
 * Main UserProfile Component
 */
export function UserProfile() {
  // State management for profile data
  const [profile, setProfile] = useState({
    fullName: 'Alex Sterling',
    jobRole: 'Executive Admin',
    email: 'alex.sterling@xenonos.cloud',
    phone: '+1 (555) 942-0192',
    bio: 'Driving excellence in cross-functional team coordination and product strategy. Specializing in high-scale infrastructure management and executive operations. Based in the San Francisco tech hub, currently managing XenonOS premium core systems.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsU3ctmBybwKK14n-vmI9F3cskKcjLRTNs5LhZShBoZ5zIB5F59XXrC6dPaa6Fyx4fxoVVacaX3BWOKQ3NJ4i5Udj0ouRb9W9Dpqpg9OpiPcTu8NxrVdq8zL2rRU3_rUaNP9sS7yn5CBP12hF8rE8nEqSAzO7Ph2Bixj0tdis_YbuK_J_huGdeucA15UgkRezAo30uyY_fChhZSiHhfYUycn0Oc4zrz8QZ2WggJB7l4URo71jZsh3b9JhnC23OE8s7MyvQrdls-S0'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [stats, setStats] = useState({
    projects: 12,
    tasksCompleted: 842,
    efficiency: 82,
    activityLevel: 'High Density'
  });

  // Sidebar navigation items
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', active: false },
    { icon: 'person', label: 'Profile', href: '#', active: true },
    { icon: 'security', label: 'Security', href: '#', active: false },
    { icon: 'history', label: 'Sessions', href: '#', active: false },
    { icon: 'devices', label: 'Devices', href: '#', active: false },
    { icon: 'lock', label: 'Privacy', href: '#', active: false },
  ];

  /**
   * Handle profile field changes
   */
  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  /**
   * Save profile changes
   */
  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would make an API call
    console.log('Profile saved:', profile);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-['Manrope']">
      {/* Sidebar Navigation */}
      <Sidebar
        activeItem="Profile"
        items={navItems}
        brandName="XenonOS"
        brandSubtitle="Premium Management"
        userAvatar={profile.avatar}
        userName={profile.fullName}
        userRole="Executive Admin"
      />

      {/* Top Navigation Bar */}
      <TopNavBar
        searchPlaceholder="Search resources..."
        userAvatar={profile.avatar}
        userName={profile.fullName}
        userRole="Executive Admin"
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <section className="p-8 max-w-7xl mx-auto">
          {/* Header Identity Section */}
          <div className="relative rounded-[2rem] overflow-hidden mb-8 bg-surface-container-low p-8 flex flex-col md:flex-row items-end gap-8">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-transparent"></div>
            
            {/* Profile Image */}
            <div className="relative group">
              <img 
                alt="Profile picture" 
                className="w-32 h-32 rounded-3xl object-cover border-4 border-surface shadow-2xl relative z-10" 
                src={profile.avatar} 
              />
              <button className="absolute -bottom-2 -right-2 z-20 w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary shadow-lg border-2 border-surface">
                <MaterialIcon className="text-lg">edit</MaterialIcon>
              </button>
            </div>

            {/* Name and Title */}
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="font-['Syne'] text-4xl font-extrabold tracking-tighter">{profile.fullName}</h2>
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active
                </span>
              </div>
              <p className="font-['Outfit'] text-on-surface-variant text-lg">{profile.jobRole} • Product Strategy Lead</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pb-2">
              <Button variant="secondary">View Public Profile</Button>
              <Button variant="primary" onClick={handleSave}>Save Changes</Button>
            </div>
          </div>

          {/* Main Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column: Personal Information */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Bio Section */}
              <BentoCard className="rounded-[1.5rem] p-8">
                <h3 className="font-['Syne'] text-xl font-bold mb-6 flex items-center gap-2">
                  <MaterialIcon className="text-primary">description</MaterialIcon>
                  Professional Summary
                </h3>
                <textarea 
                  className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface-variant font-['Outfit'] leading-relaxed focus:ring-2 focus:ring-primary/40 h-32 resize-none"
                  placeholder="Write a short bio..."
                  value={profile.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                />
              </BentoCard>

              {/* Personal Information Form */}
              <BentoCard className="rounded-[1.5rem] p-8">
                <h3 className="font-['Syne'] text-xl font-bold mb-8 flex items-center gap-2">
                  <MaterialIcon className="text-primary">badge</MaterialIcon>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="Full Name"
                    value={profile.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                  <Input
                    label="Job Role"
                    value={profile.jobRole}
                    onChange={(e) => handleInputChange('jobRole', e.target.value)}
                  />
                  <Input
                    label="Email Address"
                    icon="mail"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <Input
                    label="Phone Number"
                    icon="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </BentoCard>
            </div>

            {/* Right Column: Quick Stats Bento */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              {/* Stats Card 1: Projects */}
              <BentoCard className="rounded-[1.5rem] p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <MaterialIcon filled>folder</MaterialIcon>
                  </div>
                  <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-md">MONTHLY</span>
                </div>
                <p className="text-on-surface-variant text-sm font-['Outfit'] font-medium">Projects Assigned</p>
                <h4 className="font-['Syne'] text-5xl font-extrabold tracking-tighter mt-1">{stats.projects}</h4>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs text-primary font-bold font-['Outfit']">↑ 14%</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">since last month</span>
                </div>
              </BentoCard>

              {/* Stats Card 2: Tasks */}
              <BentoCard className="rounded-[1.5rem] p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-tertiary/10 rounded-2xl flex items-center justify-center text-tertiary">
                    <MaterialIcon filled>task_alt</MaterialIcon>
                  </div>
                  <span className="text-[10px] font-bold text-tertiary px-2 py-1 bg-tertiary/10 rounded-md">LIFETIME</span>
                </div>
                <p className="text-on-surface-variant text-sm font-['Outfit'] font-medium">Tasks Completed</p>
                <h4 className="font-['Syne'] text-5xl font-extrabold tracking-tighter mt-1">{stats.tasksCompleted}</h4>
                <div className="mt-4 w-full h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary" style={{ width: `${stats.efficiency}%` }}></div>
                </div>
                <p className="mt-2 text-[10px] text-on-surface-variant uppercase tracking-widest">{stats.efficiency}% Efficiency Rating</p>
              </BentoCard>

              {/* Stats Card 3: Activity Level */}
              <BentoCard className="rounded-[1.5rem] p-6 bg-surface-container-high border-primary/20 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-10 scale-150">
                  <MaterialIcon className="text-[120px] text-primary">bolt</MaterialIcon>
                </div>
                <p className="text-on-surface-variant text-sm font-['Outfit'] font-medium mb-1">Activity Level</p>
                <h4 className="font-['Syne'] text-3xl font-extrabold text-primary mb-6">{stats.activityLevel}</h4>
                <div className="flex items-end gap-1.5 h-16">
                  <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/20 h-[70%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/40 h-[90%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(192,193,255,0.4)]"></div>
                  <div className="flex-1 bg-primary/60 h-[80%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/30 h-[50%] rounded-t-sm"></div>
                </div>
                <p className="mt-4 text-[10px] text-on-surface uppercase tracking-widest font-bold">Peak Performance Window</p>
              </BentoCard>
            </div>
          </div>

          {/* Footer Meta */}
          <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-on-surface-variant font-['Outfit']">Last profile update: October 24, 2023 at 14:02 GMT</p>
            <div className="flex gap-6">
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors font-['Outfit'] font-bold" href="#">Privacy Settings</a>
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors font-['Outfit'] font-bold" href="#">Connected Apps</a>
              <a className="text-xs text-on-surface-variant hover:text-primary transition-colors font-['Outfit'] font-bold" href="#">API Access</a>
            </div>
          </div>
        </section>
      </main>

      {/* Global CSS for XenonOS theme */}
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

export default UserProfile;
