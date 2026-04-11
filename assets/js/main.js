/**
 * ==================================================================
 * MAIN.JS - Core JavaScript Functionality
 * Consolidated utilities, event handlers, and global functions
 * ==================================================================
 */

(function () {
  "use strict";

  // ================================================================
  // UTILITY FUNCTIONS
  // ================================================================

  /**
   * Get element by ID with error handling
   * @param {string} id - Element ID
   * @returns {HTMLElement|null}
   */
  const getElement = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with ID "${id}" not found`);
    }
    return element;
  };

  /**
   * Get elements by selector with error handling
   * @param {string} selector - CSS selector
   * @returns {NodeList}
   */
  const getElements = (selector) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      console.warn(`No elements found for selector "${selector}"`);
    }
    return elements;
  };

  /**
   * Add event listener with error handling
   * @param {HTMLElement} element - Target element
   * @param {string} event - Event type
   * @param {Function} handler - Event handler
   */
  const addEvent = (element, event, handler) => {
    if (element) {
      element.addEventListener(event, handler);
    }
  };

  /**
   * Add class to element
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class name to add
   */
  const addClass = (element, className) => {
    if (element) {
      element.classList.add(className);
    }
  };

  /**
   * Remove class from element
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class name to remove
   */
  const removeClass = (element, className) => {
    if (element) {
      element.classList.remove(className);
    }
  };

  /**
   * Toggle class on element
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class name to toggle
   */
  const toggleClass = (element, className) => {
    if (element) {
      element.classList.toggle(className);
    }
  };

  /**
   * Check if element has class
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class name to check
   * @returns {boolean}
   */
  const hasClass = (element, className) => {
    return element ? element.classList.contains(className) : false;
  };

  // ================================================================
  // ACTIVE NAVIGATION HIGHLIGHTING
  // ================================================================

  /**
   * Highlight active navigation item based on current URL
   */
  const initActiveNavigation = () => {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split("/").pop() || "index.html";

    // Get all navigation items
    const navItems = getElements(".nav-item");

    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (
        href &&
        (currentPage === href.split("/").pop() ||
          currentPage.replace(".html", "") ===
            href.split("/").pop().replace(".html", ""))
      ) {
        addClass(item, "active");
      } else {
        removeClass(item, "active");
      }
    });
  };

  // ================================================================
  // THEME MANAGEMENT
  // ================================================================

  /**
   * Initialize theme from localStorage
   */
  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;

    if (savedTheme === "light") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
    }
  };

  /**
   * Toggle between dark and light theme
   */
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  // ================================================================
  // SEARCH FUNCTIONALITY
  // ================================================================

  /**
   * Initialize search bar functionality
   */
  const initSearch = () => {
    const searchInput = document.querySelector(".search-input");

    if (!searchInput) return;

    addEvent(searchInput, "focus", () => {
      addClass(searchInput.parentElement, "focused");
    });

    addEvent(searchInput, "blur", () => {
      removeClass(searchInput.parentElement, "focused");
    });

    addEvent(searchInput, "keyup", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          console.log("Search query:", query);
          // Implement search functionality here
        }
      }
    });
  };

  // ================================================================
  // NOTIFICATION HANDLING
  // ================================================================

  /**
   * Show a toast notification
   * @param {string} message - Notification message
   * @param {string} type - Notification type (success, error, warning, info)
   */
  const showToast = (message, type = "info") => {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    const styles = {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      padding: "12px 24px",
      borderRadius: "12px",
      backgroundColor:
        type === "success"
          ? "var(--color-success)"
          : type === "error"
            ? "var(--color-error)"
            : type === "warning"
              ? "var(--color-warning)"
              : "var(--color-primary)",
      color: "white",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      zIndex: "9999",
      animation: "slideInRight 0.3s ease",
    };

    Object.assign(toast.style, styles);
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // ================================================================
  // LOADING STATES
  // ================================================================

  /**
   * Show loading spinner
   * @param {HTMLElement} container - Container element
   */
  const showLoading = (container) => {
    if (!container) return;

    const spinner = document.createElement("div");
    spinner.className = "loading-spinner";
    spinner.innerHTML = '<div class="spinner"></div>';

    spinner.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    `;

    container.appendChild(spinner);
  };

  /**
   * Hide loading spinner
   * @param {HTMLElement} container - Container element
   */
  const hideLoading = (container) => {
    if (!container) return;
    const spinner = container.querySelector(".loading-spinner");
    if (spinner) spinner.remove();
  };

  // ================================================================
  // DATA FORMATTING
  // ================================================================

  /**
   * Format date to readable string
   * @param {Date|string} date - Date to format
   * @param {string} format - Format type (short, long, relative)
   * @returns {string}
   */
  const formatDate = (date, format = "short") => {
    const d = new Date(date);

    if (format === "short") {
      return d.toLocaleDateString();
    } else if (format === "long") {
      return d.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else if (format === "relative") {
      const now = new Date();
      const diff = now - d;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (days === 0) return "Today";
      if (days === 1) return "Yesterday";
      if (days < 7) return `${days} days ago`;
      if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
      if (days < 365) return `${Math.floor(days / 30)} months ago`;
      return `${Math.floor(days / 365)} years ago`;
    }

    return d.toLocaleDateString();
  };

  /**
   * Format number with commas
   * @param {number} num - Number to format
   * @returns {string}
   */
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  /**
   * Format currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code (default: USD)
   * @returns {string}
   */
  const formatCurrency = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  // ================================================================
  // ANIMATION UTILITIES
  // ================================================================

  /**
   * Animate element on scroll
   * @param {HTMLElement} element - Element to animate
   * @param {string} animation - Animation class
   */
  const animateOnScroll = (element, animation = "fadeInUp") => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            addClass(element, animation);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
  };

  /**
   * Fade in element
   * @param {HTMLElement} element - Element to fade in
   * @param {number} duration - Animation duration in ms
   */
  const fadeIn = (element, duration = 300) => {
    if (!element) return;

    element.style.opacity = "0";
    element.style.transition = `opacity ${duration}ms ease`;

    requestAnimationFrame(() => {
      element.style.opacity = "1";
    });
  };

  /**
   * Fade out element
   * @param {HTMLElement} element - Element to fade out
   * @param {number} duration - Animation duration in ms
   */
  const fadeOut = (element, duration = 300) => {
    if (!element) return;

    element.style.opacity = "1";
    element.style.transition = `opacity ${duration}ms ease`;

    requestAnimationFrame(() => {
      element.style.opacity = "0";
    });
  };

  // ================================================================
  // LOCAL STORAGE UTILITIES
  // ================================================================

  /**
   * Save data to localStorage
   * @param {string} key - Storage key
   * @param {any} value - Value to store
   */
  const saveToStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error saving to localStorage:", e);
    }
  };

  /**
   * Get data from localStorage
   * @param {string} key - Storage key
   * @returns {any|null}
   */
  const getFromStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error("Error reading from localStorage:", e);
      return null;
    }
  };

  /**
   * Remove data from localStorage
   * @param {string} key - Storage key
   */
  const removeFromStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("Error removing from localStorage:", e);
    }
  };

  // ================================================================
  // INITIALIZATION
  // ================================================================

  /**
   * Initialize all core functionality
   */
  const init = () => {
    // Initialize theme
    initTheme();

    // Initialize navigation highlighting
    initActiveNavigation();

    // Initialize search
    initSearch();

    // Add CSS animations for toast
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid var(--color-surface-container-high);
        border-top-color: var(--color-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    `;
    document.head.appendChild(style);
  };

  // Run initialization when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose public API
  window.ObsidianUI = {
    // Utilities
    getElement,
    getElements,
    addEvent,
    addClass,
    removeClass,
    toggleClass,
    hasClass,

    // Theme
    toggleTheme,

    // Notifications
    showToast,

    // Loading
    showLoading,
    hideLoading,

    // Formatting
    formatDate,
    formatNumber,
    formatCurrency,

    // Animations
    animateOnScroll,
    fadeIn,
    fadeOut,

    // Storage
    saveToStorage,
    getFromStorage,
    removeFromStorage,

    // Re-initialize
    reinitialize: init,
  };
})();

/* ==================================================================
   SETTINGS PAGE SPECIFIC JAVASCRIPT
   Tab switching, toggle switches, form validation, and interactions
   ================================================================== */

(function () {
  "use strict";

  // ================================================================
  // TAB SWITCHING FUNCTIONALITY
  // ================================================================

  /**
   * Switch to a specific tab in the settings page
   * @param {string} tabName - Name of the tab to switch to
   */
  window.switchTab = function (tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll(".settings-content");
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Remove active state from all tab buttons
    const tabButtons = document.querySelectorAll(".settings-tab-btn");
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    // Show selected tab content
    const selectedContent = document.getElementById(`panel-${tabName}`);
    if (selectedContent) {
      selectedContent.classList.add("active");
    }

    // Set active state on selected tab button
    const selectedBtn = document.getElementById(`tab-${tabName}`);
    if (selectedBtn) {
      selectedBtn.classList.add("active");
      selectedBtn.setAttribute("aria-selected", "true");
    }

    // Scroll to top of content smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ================================================================
  // TOGGLE SWITCH FUNCTIONALITY
  // ================================================================

  /**
   * Initialize all toggle switches on the page
   */
  const initToggleSwitches = () => {
    const toggleSwitches = document.querySelectorAll(".toggle-switch");

    toggleSwitches.forEach((toggle) => {
      // Click handler
      toggle.addEventListener("click", function () {
        const isActive = this.classList.contains("active");
        if (isActive) {
          this.classList.remove("active");
          this.classList.add("inactive");
          this.setAttribute("aria-checked", "false");
        } else {
          this.classList.remove("inactive");
          this.classList.add("active");
          this.setAttribute("aria-checked", "true");
        }
      });

      // Keyboard support (Enter and Space keys)
      toggle.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
    });
  };

  // ================================================================
  // CUSTOM RADIO BUTTON FUNCTIONALITY
  // ================================================================

  /**
   * Initialize custom radio buttons
   */
  const initCustomRadioButtons = () => {
    const radioButtons = document.querySelectorAll(".custom-radio");

    radioButtons.forEach((radio) => {
      radio.addEventListener("change", function () {
        if (this.checked) {
          const name = this.name;
          // Uncheck all radios with the same name
          document.querySelectorAll(`input[name="${name}"]`).forEach((r) => {
            r.classList.remove("checked");
          });
          this.classList.add("checked");
        }
      });
    });
  };

  // ================================================================
  // PASSWORD FORM VALIDATION
  // ================================================================

  /**
   * Initialize password form validation and submission
   */
  const initPasswordForm = () => {
    const passwordForm = document.getElementById("password-form");
    if (!passwordForm) return;

    passwordForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const currentPassword = document.getElementById("current_password").value;
      const newPassword = document.getElementById("new_password").value;
      const confirmPassword = document.getElementById("confirm_password").value;

      // Validation: Check if all fields are filled
      if (!currentPassword || !newPassword || !confirmPassword) {
        showToast("All password fields are required", "error");
        return;
      }

      // Validation: Check if new passwords match
      if (newPassword !== confirmPassword) {
        showToast("New passwords do not match", "error");
        return;
      }

      // Validation: Check minimum password length
      if (newPassword.length < 8) {
        showToast("Password must be at least 8 characters", "error");
        return;
      }

      // Simulate API call with loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Updating...";
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast("Password updated successfully", "success");
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        this.reset();
      }, 1500);
    });
  };

  // ================================================================
  // DANGER ZONE CONFIRMATION
  // ================================================================

  /**
   * Initialize confirmation dialogs for dangerous actions
   */
  const initDangerZoneConfirmation = () => {
    const dangerButtons = document.querySelectorAll("#panel-advanced button");

    dangerButtons.forEach((btn) => {
      if (
        btn.textContent.includes("Delete") ||
        btn.textContent.includes("Purge")
      ) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          const action = this.textContent.trim();
          const confirmed = confirm(
            `⚠️ WARNING: ${action}\n\nThis action cannot be undone. Are you absolutely sure you want to proceed?`,
          );
          if (!confirmed) return;

          // Simulate action
          showToast(
            `${action} initiated. This may take a moment...`,
            "warning",
          );
        });
      }
    });
  };

  // ================================================================
  // DEBOUNCE UTILITY
  // ================================================================

  /**
   * Debounce function to limit rate of execution
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function}
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ================================================================
  // AUDIT LOG SEARCH
  // ================================================================

  /**
   * Initialize audit log search with debounce
   */
  const initAuditLogSearch = () => {
    const searchInput = document.getElementById("audit-log-search");
    if (!searchInput) return;

    searchInput.addEventListener(
      "input",
      debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        const tableRows = document.querySelectorAll("#panel-security tbody tr");

        tableRows.forEach((row) => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(searchTerm) ? "" : "none";
        });
      }, 300),
    );
  };

  // ================================================================
  // EXPORT BUTTON FUNCTIONALITY
  // ================================================================

  /**
   * Initialize export button handlers
   */
  const initExportButtons = () => {
    const exportButtons = document.querySelectorAll("button");

    exportButtons.forEach((btn) => {
      if (btn.textContent.includes("Export as")) {
        btn.addEventListener("click", function () {
          const format = this.textContent.includes("PDF") ? "PDF" : "JSON";
          showToast(
            `Preparing ${format} export... Download will start shortly`,
            "info",
          );
        });
      }
    });
  };

  // ================================================================
  // LOGOUT BUTTON FUNCTIONALITY
  // ================================================================

  /**
   * Initialize force logout button handlers
   */
  const initLogoutButtons = () => {
    const logoutButtons = document.querySelectorAll("button");

    logoutButtons.forEach((btn) => {
      if (
        btn.textContent.includes("Force Logout") ||
        btn.textContent.includes("Sign Out")
      ) {
        btn.addEventListener("click", function () {
          const confirmed = confirm(
            "Are you sure you want to sign out of this session?",
          );
          if (confirmed) {
            showToast("Session signed out successfully", "success");
          }
        });
      }
    });
  };

  // ================================================================
  // KEYBOARD NAVIGATION FOR TABS
  // ================================================================

  /**
   * Initialize keyboard navigation for settings tabs
   * Arrow keys, Home, and End support
   */
  const initTabKeyboardNavigation = () => {
    const tabButtons = document.querySelectorAll(".settings-tab-btn");

    tabButtons.forEach((btn, index, buttons) => {
      btn.addEventListener("keydown", (e) => {
        // Right arrow - move to next tab
        if (e.key === "ArrowRight") {
          e.preventDefault();
          const nextIndex = (index + 1) % buttons.length;
          buttons[nextIndex].focus();
          buttons[nextIndex].click();
        }
        // Left arrow - move to previous tab
        else if (e.key === "ArrowLeft") {
          e.preventDefault();
          const prevIndex = (index - 1 + buttons.length) % buttons.length;
          buttons[prevIndex].focus();
          buttons[prevIndex].click();
        }
        // Home - move to first tab
        else if (e.key === "Home") {
          e.preventDefault();
          buttons[0].focus();
          buttons[0].click();
        }
        // End - move to last tab
        else if (e.key === "End") {
          e.preventDefault();
          buttons[buttons.length - 1].focus();
          buttons[buttons.length - 1].click();
        }
      });
    });
  };

  // ================================================================
  // INITIALIZATION FOR SETTINGS PAGE
  // ================================================================

  /**
   * Initialize all settings page functionality
   */
  const initSettingsPage = () => {
    // Only initialize if we're on the settings page
    const settingsContent = document.querySelector(".settings-content");
    if (!settingsContent) return;

    initToggleSwitches();
    initCustomRadioButtons();
    initPasswordForm();
    initDangerZoneConfirmation();
    initAuditLogSearch();
    initExportButtons();
    initLogoutButtons();
    initTabKeyboardNavigation();
  };

  // Initialize settings page when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSettingsPage);
  } else {
    initSettingsPage();
  }
})();
