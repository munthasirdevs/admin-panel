// XenonOS Global Application Logic
// Handles component injection and shared interactions

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
    setupGlobalInteractions();
    initModernSidebar();
});

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('aside a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const cleanHref = href.replace('../', '');
            if (currentPath.endsWith(cleanHref) || currentPath.includes('/' + cleanHref)) {
                link.classList.add('active');
            }
        }
    });
}

function initModernSidebar() {
    const sidebar = document.querySelector('aside.modern-sidebar');
    const pinBtn = document.getElementById('pin-sidebar');
    const mainContent = document.querySelector('main');
    
    if (!sidebar) return;

    // Load Pinned State
    const isPinned = localStorage.getItem('sidebar-pinned') === 'true';
    if (isPinned) {
        sidebar.classList.add('pinned');
        if (pinBtn) pinBtn.classList.add('active');
        if (mainContent) mainContent.classList.add('pinned');
    }

    // Toggle Pin
    if (pinBtn) {
        pinBtn.addEventListener('click', () => {
            const nowPinned = sidebar.classList.toggle('pinned');
            pinBtn.classList.toggle('active');
            if (mainContent) mainContent.classList.toggle('pinned');
            localStorage.setItem('sidebar-pinned', nowPinned);
        });
    }

    // Tooltip Logic (Simplified)
    const navItems = document.querySelectorAll('.nav-item');
    const tooltip = document.createElement('div');
    tooltip.className = 'sb-tooltip';
    document.body.appendChild(tooltip);

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (!sidebar.classList.contains('pinned') && window.innerWidth > 1024) {
                const label = item.getAttribute('data-tooltip');
                if (label) {
                    tooltip.textContent = label;
                    const rect = item.getBoundingClientRect();
                    tooltip.style.top = `${rect.top + (rect.height / 2) - 10}px`;
                    tooltip.style.opacity = '1';
                }
            }
        });
        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}

function setupGlobalInteractions() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('aside');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('-translate-x-full');
            sidebar.classList.toggle('translate-x-0');
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1024 && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
            }
        });
    }
}
