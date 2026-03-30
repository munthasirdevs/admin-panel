/**
 * ==================================================================
 * COMPONENTS.JS - Dynamic Component Loading System
 * Handles injection of sidebar, header, and footer components
 * ==================================================================
 */

(function() {
  'use strict';

  // Component path resolution
  const getComponentPath = () => {
    const currentPath = window.location.pathname;
    const depth = (currentPath.match(/\//g) || []).length - 1;
    
    // Determine path prefix based on URL structure
    if (currentPath.includes('/pages/')) {
      return '../assets/components/';
    }
    return '../assets/components/';
  };

  const COMPONENT_PATH = getComponentPath();

  // Navigation configuration - All pages mapped
  const navigationConfig = {
    dashboard: [
      { name: 'Dashboard', icon: 'dashboard', path: '../pages/dashboard/index.html' }
    ],
    clients: [
      { name: 'Client List', icon: 'group', path: '../pages/clients/index.html' },
      { name: 'Client Details', icon: 'person', path: '../pages/clients/details.html' }
    ],
    projects: [
      { name: 'All Projects', icon: 'folder_open', path: '../pages/projects/index.html' },
      { name: 'Assigned Projects', icon: 'assignment', path: '../pages/projects/assigned.html' },
      { name: 'Project Details', icon: 'description', path: '../pages/projects/details.html' }
    ],
    tasks: [
      { name: 'Task List', icon: 'format_list_bulleted', path: '../pages/tasks/index.html' },
      { name: 'Task Management', icon: 'manage_accounts', path: '../pages/tasks/manage.html' },
      { name: 'Assign Task', icon: 'add_task', path: '../pages/tasks/assign.html' }
    ],
    communication: [
      { name: 'Communication Hub', icon: 'forum', path: '../pages/communication/index.html' },
      { name: 'Chat Control', icon: 'chat', path: '../pages/communication/control.html' }
    ],
    files: [
      { name: 'File Manager', icon: 'folder_shared', path: '../pages/files/index.html' },
      { name: 'File Details', icon: 'insert_drive_file', path: '../pages/files/details.html' }
    ],
    payment: [
      { name: 'Payment Center', icon: 'payments', path: '../pages/payment/index.html' }
    ],
    team: [
      { name: 'Team Members', icon: 'badge', path: '../pages/team/index.html' },
      { name: 'Team Assign', icon: 'person_add', path: '../pages/team/assign.html' }
    ],
    analytics: [
      { name: 'Executive Analytics', icon: 'analytics', path: '../pages/analytics/executive.html' },
      { name: 'Marketing Analytics', icon: 'trending_up', path: '../pages/analytics/marketing.html' },
      { name: 'Operations Analytics', icon: 'operations', path: '../pages/analytics/operations.html' }
    ],
    reports: [
      { name: 'Financial Reports', icon: 'receipt_long', path: '../pages/reports/financial.html' },
      { name: 'Sales Reports', icon: 'bar_chart', path: '../pages/reports/sales.html' },
      { name: 'Support Reports', icon: 'support_agent', path: '../pages/reports/support.html' }
    ],
    activity: [
      { name: 'Activity Logs', icon: 'history', path: '../pages/activity/index.html' }
    ],
    settings: [
      { name: 'System Settings', icon: 'settings', path: '../pages/settings/index.html' }
    ],
    profile: [
      { name: 'User Profile', icon: 'account_circle', path: '../pages/profile/index.html' }
    ],
    roles: [
      { name: 'Roles & Permissions', icon: 'admin_panel_settings', path: '../pages/roles/index.html' },
      { name: 'Add New Role', icon: 'add_circle', path: '../pages/roles/add.html' }
    ],
    notifications: [
      { name: 'Notification Center', icon: 'notifications', path: '../pages/notifications/index.html' },
      { name: 'Notification Details', icon: 'notifications_active', path: '../pages/notifications/details.html' }
    ]
  };

  // Get current page name for active state
  const getCurrentPage = () => {
    const path = window.location.pathname;
    const parts = path.split('/');
    const fileName = parts.pop() || parts.pop();
    return fileName ? fileName.replace('.html', '') : 'index';
  };

  // Generate sidebar HTML
  const generateSidebar = () => {
    const currentPage = getCurrentPage();
    
    const sidebarHTML = `
      <!-- Branding -->
      <div class="px-5 mb-8 mt-8 flex items-center gap-4 overflow-hidden">
        <div class="min-w-[40px] h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#3f4077] flex items-center justify-center shadow-lg">
          <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">diamond</span>
        </div>
        <div class="nav-label">
          <h1 class="text-xl font-bold text-[var(--color-on-surface)] font-headline tracking-tight syne">Obsidian</h1>
          <p class="text-[10px] text-slate-500 font-label uppercase tracking-[0.2em] outfit">Management Hub</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 space-y-1">
        <!-- Dashboard -->
        <div class="sidebar-section">
          ${navigationConfig.dashboard.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Clients -->
        <div class="sidebar-section">
          ${navigationConfig.clients.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Projects -->
        <div class="sidebar-section">
          ${navigationConfig.projects.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Tasks -->
        <div class="sidebar-section">
          ${navigationConfig.tasks.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Communication -->
        <div class="sidebar-section">
          ${navigationConfig.communication.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Files -->
        <div class="sidebar-section">
          ${navigationConfig.files.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Payment -->
        <div class="sidebar-section">
          ${navigationConfig.payment.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Team -->
        <div class="sidebar-section">
          ${navigationConfig.team.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Analytics -->
        <div class="sidebar-section">
          ${navigationConfig.analytics.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Reports -->
        <div class="sidebar-section">
          ${navigationConfig.reports.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Activity -->
        <div class="sidebar-section">
          ${navigationConfig.activity.map(item => createNavItem(item, currentPage)).join('')}
        </div>

        <!-- Divider -->
        <div class="sidebar-divider"></div>

        <!-- Settings & Profile -->
        <div class="sidebar-section">
          ${navigationConfig.settings.map(item => createNavItem(item, currentPage)).join('')}
          ${navigationConfig.profile.map(item => createNavItem(item, currentPage)).join('')}
          ${navigationConfig.roles.map(item => createNavItem(item, currentPage)).join('')}
          ${navigationConfig.notifications.map(item => createNavItem(item, currentPage)).join('')}
        </div>
      </nav>

      <!-- Pin Toggle Button -->
      <div id="pin-sidebar" class="pin-toggle mx-4 mb-4 flex items-center justify-center shadow-lg" title="Pin Sidebar">
        <span class="material-symbols-outlined text-sm">push_pin</span>
      </div>
    `;

    return sidebarHTML;
  };

  // Create nav item HTML
  const createNavItem = (item, currentPage) => {
    const isActive = currentPage.includes(item.name.toLowerCase().split(' ')[0]) || 
                     (currentPage === 'index' && item.name === 'Dashboard') ||
                     (currentPage === item.name.toLowerCase().replace(/\s+/g, '-'));
    
    const activeClass = isActive ? 'active' : '';
    
    return `
      <a href="${item.path}" class="nav-item ${activeClass}" data-tooltip="${item.name}">
        <span class="material-symbols-outlined">${item.icon}</span>
        <span class="nav-label text-sm">${item.name}</span>
      </a>
    `;
  };

  // Generate header HTML
  const generateHeader = () => {
    return `
      <div class="flex items-center gap-6">
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-btn"
          class="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-[var(--color-surface-container-high)] transition-all border border-white/5">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <div class="relative group">
          <span
            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg group-focus-within:text-[var(--color-primary)] transition-colors">search</span>
          <input
            class="bg-[var(--color-surface-container)] border-none text-[var(--color-on-surface)] text-sm rounded-full py-2 pl-10 pr-4 w-32 sm:w-64 focus:ring-1 focus:ring-[var(--color-primary)] transition-all placeholder:text-slate-500 outfit"
            placeholder="Search..." type="text" />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button
          class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[var(--color-surface-container-high)] transition-all">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <button
          class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[var(--color-surface-container-high)] transition-all">
          <span class="material-symbols-outlined">settings</span>
        </button>
        <div class="h-10 w-[1px] bg-[var(--color-outline-variant)]/20 mx-2"></div>
        <div class="flex items-center gap-3">
          <div class="hidden lg:block text-right">
            <p class="text-sm font-semibold text-[var(--color-on-surface)] leading-tight outfit">Alex Rivera</p>
            <p class="text-[10px] text-slate-500 font-label outfit">Super Admin</p>
          </div>
          <img alt="Admin Profile"
            class="w-10 h-10 rounded-xl bg-[var(--color-surface-container)] object-cover border border-white/10"
            src="https://ui-avatars.com/api/?name=Alex+Rivera&background=6366f1&color=fff&size=128" />
        </div>
      </div>
    `;
  };

  // Generate footer HTML
  const generateFooter = () => {
    return `
      <div class="footer-content">
        <p class="footer-text">© 2024 Obsidian Architect • System Status: <span class="footer-status">Operational</span></p>
        <div class="footer-indicator">
          <span class="status-dot"></span>
          <span class="footer-text">Region: Global-Alpha-1</span>
        </div>
      </div>
    `;
  };

  // Load component into container
  const loadComponent = (containerId, htmlContent) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = htmlContent;
      
      // Initialize component-specific functionality after injection
      if (containerId === 'sidebar-container') {
        initSidebar();
      } else if (containerId === 'header-container') {
        initHeader();
      }
    }
  };

  // Initialize sidebar functionality
  const initSidebar = () => {
    const pinBtn = document.getElementById('pin-sidebar');
    const sidebar = document.querySelector('.modern-sidebar');
    const main = document.querySelector('main.with-sidebar');

    // Load pinned state from localStorage
    const isPinned = localStorage.getItem('sidebar-pinned') === 'true';
    if (isPinned && sidebar) {
      sidebar.classList.add('pinned');
      if (main) main.classList.add('pinned');
      if (pinBtn) pinBtn.classList.add('active');
    }

    // Pin toggle functionality
    if (pinBtn && sidebar && main) {
      pinBtn.addEventListener('click', () => {
        sidebar.classList.toggle('pinned');
        main.classList.toggle('pinned');
        pinBtn.classList.toggle('active');
        localStorage.setItem('sidebar-pinned', sidebar.classList.contains('pinned'));
      });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-0');
        
        // Create/remove overlay for mobile
        let overlay = document.querySelector('.mobile-overlay');
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.className = 'mobile-overlay';
          document.body.appendChild(overlay);
          
          overlay.addEventListener('click', () => {
            sidebar.classList.remove('translate-x-0');
            overlay.classList.remove('active');
          });
        }
        overlay.classList.toggle('active');
      });
    }

    // Close sidebar when clicking nav item on mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          sidebar.classList.remove('translate-x-0');
          const overlay = document.querySelector('.mobile-overlay');
          if (overlay) overlay.classList.remove('active');
        }
      });
    });
  };

  // Initialize header functionality
  const initHeader = () => {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('focus', () => {
        searchInput.parentElement.classList.add('focused');
      });
      
      searchInput.addEventListener('blur', () => {
        searchInput.parentElement.classList.remove('focused');
      });
    }

    // Notification button
    const notificationBtn = document.querySelector('button[aria-label="notifications"]');
    if (notificationBtn) {
      notificationBtn.addEventListener('click', () => {
        window.location.href = '../pages/notifications/index.html';
      });
    }

    // Settings button
    const settingsBtn = document.querySelector('button[aria-label="settings"]');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        window.location.href = '../pages/settings/index.html';
      });
    }
  };

  // Initialize all components
  const initComponents = () => {
    // Load components
    loadComponent('sidebar-container', generateSidebar());
    loadComponent('header-container', generateHeader());
    loadComponent('footer-container', generateFooter());
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  // Expose API for manual re-initialization if needed
  window.ObsidianComponents = {
    reinit: initComponents,
    loadSidebar: () => loadComponent('sidebar-container', generateSidebar()),
    loadHeader: () => loadComponent('header-container', generateHeader()),
    loadFooter: () => loadComponent('footer-container', generateFooter())
  };

})();
