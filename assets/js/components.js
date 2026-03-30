/**
 * ==================================================================
 * COMPONENTS.JS - Dynamic Component Loading System
 * Handles injection of header and footer components
 * ==================================================================
 */

(function() {
  'use strict';

  // Component path resolution - dynamically calculates correct path based on URL depth
  const getComponentPath = () => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(part => part !== '');

    // Count depth from 'pages' directory
    const pagesIndex = pathParts.indexOf('pages');
    if (pagesIndex === -1) {
      // Not in pages directory, use default
      return '../assets/components/';
    }

    // Calculate depth after 'pages' (e.g., pages/billing/invoices.html = depth 2)
    const depth = pathParts.length - pagesIndex - 1;

    // Build relative path prefix based on depth
    let prefix = '';
    for (let i = 0; i < depth; i++) {
      prefix += '../';
    }

    return prefix + 'assets/components/';
  };

  const COMPONENT_PATH = getComponentPath();

  // Generate header HTML - Clean, minimal design
  const generateHeader = () => {
    return `
      <div class="header-left">
        <!-- Search -->
        <div class="search-container">
          <span class="material-symbols-outlined search-icon">search</span>
          <input
            class="search-input outfit"
            placeholder="Search..."
            type="text"
            aria-label="Search" />
        </div>
      </div>

      <div class="header-right">
        <!-- Notifications -->
        <button class="header-action-btn" aria-label="Notifications">
          <span class="material-symbols-outlined">notifications</span>
          <span class="notification-badge"></span>
        </button>

        <!-- Settings -->
        <button class="header-action-btn" aria-label="Settings">
          <span class="material-symbols-outlined">tune</span>
        </button>

        <!-- Divider -->
        <div class="header-divider"></div>

        <!-- User Profile -->
        <div class="user-profile">
          <div class="user-info">
            <p class="user-name outfit">Alex Rivera</p>
            <p class="user-role outfit">Super Admin</p>
          </div>
          <img alt="Admin Profile"
            class="user-avatar"
            src="https://ui-avatars.com/api/?name=Alex+Rivera&background=6366f1&color=fff&size=128" />
        </div>
      </div>
    `;
  };

  // Generate footer HTML - Minimal system status
  const generateFooter = () => {
    return `
      <div class="footer-content">
        <p class="footer-text outfit">© 2024 XenonOS • <span class="footer-status">Operational</span></p>
        <div class="footer-indicator">
          <span class="status-dot"></span>
          <span class="footer-text outfit">Global-Alpha-1</span>
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
      if (containerId === 'header-container') {
        initHeader();
      }
    }
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
    const notificationBtn = document.querySelector('button[aria-label="Notifications"]');
    if (notificationBtn) {
      notificationBtn.addEventListener('click', () => {
        window.location.href = '../pages/notifications/index.html';
      });
    }

    // Settings button
    const settingsBtn = document.querySelector('button[aria-label="Settings"]');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        window.location.href = '../pages/settings/index.html';
      });
    }
  };

  // Initialize all components
  const initComponents = () => {
    // Load components
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
  window.XenonComponents = {
    reinit: initComponents,
    loadHeader: () => loadComponent('header-container', generateHeader()),
    loadFooter: () => loadComponent('footer-container', generateFooter())
  };

})();
