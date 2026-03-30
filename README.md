# 🌌 Obsidian Admin Dashboard

A modern, multi-page admin dashboard template with a sleek dark design system, built with Tailwind CSS and vanilla JavaScript.

![Dashboard Preview](./docs/images/dashboard-preview.png)

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Design System](#-design-system)
- [Components](#-components)
- [Responsive Design](#-responsive-design)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Development](#-development)
- [License](#-license)

---

## ✨ Features

### Core Features
- 🎨 **Modern Dark Design** - Sleek Obsidian dark theme with glass morphism effects
- 📱 **Fully Responsive** - Mobile-first design with breakpoints for all devices
- 🧩 **Component-Based** - Reusable sidebar, header, and footer components
- 🔗 **65+ Pre-built Pages** - Dashboard, clients, projects, tasks, analytics, and more
- 🎯 **Active Navigation** - Automatic active state highlighting
- 🌙 **Dark Mode Ready** - Built-in dark mode support with CSS variables
- ⚡ **Zero Dependencies** - Built with Tailwind CSS CDN and vanilla JavaScript
- 🚀 **Production Ready** - Clean, optimized, and well-documented code

### UI Components
- Collapsible sidebar with navigation
- Responsive header with search and notifications
- Data tables and grids
- Charts and analytics dashboards
- Form elements and inputs
- Cards and widgets
- Modals and dialogs
- Toast notifications

---

## 🚀 Quick Start

### Option 1: Direct Usage
1. Download or clone this repository
2. Open `pages/dashboard/index.html` in your browser
3. Navigate through the dashboard

### Option 2: Local Development Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### File Structure Setup
```
admin-panel/
├── pages/           # All HTML pages
├── assets/          # CSS, JS, components, images
├── docs/            # Documentation
└── README.md        # This file
```

---

## 📁 Project Structure

```
admin-panel/
│
├── pages/                          # All HTML pages organized by module
│   ├── dashboard/                  # Dashboard pages
│   ├── clients/                    # Client management
│   ├── projects/                   # Project management
│   ├── tasks/                      # Task management
│   ├── communication/              # Chat and communication
│   ├── files/                      # File management
│   ├── payment/                    # Payment processing
│   ├── team/                       # Team management
│   ├── analytics/                  # Analytics and insights
│   ├── reports/                    # Performance reports
│   ├── activity/                   # Activity logs
│   ├── settings/                   # System settings
│   ├── profile/                    # User profile
│   ├── roles/                      # Roles and permissions
│   └── notifications/              # Notification center
│
├── assets/
│   ├── css/
│   │   ├── style.css               # Main design system (colors, typography, utilities)
│   │   ├── components.css          # Shared component styles (sidebar, header, footer)
│   │   └── responsive.css          # Responsive breakpoints and mobile styles
│   │
│   ├── js/
│   │   ├── main.js                 # Core JavaScript functionality
│   │   ├── components.js           # Dynamic component loading
│   │   ├── charts.js               # Chart utilities
│   │   └── tailwind-config.js      # Tailwind CSS configuration
│   │
│   ├── components/                 # HTML component templates
│   │   ├── sidebar.html            # Sidebar navigation template
│   │   ├── header.html             # Header/navbar template
│   │   └── footer.html             # Footer template
│   │
│   └── images/                     # Image assets
│
├── docs/                           # Documentation and guides
└── README.md                       # Project documentation
```

---

## 📄 Pages Overview

### Dashboard
| Page | File | Description |
|------|------|-------------|
| Main Dashboard | `pages/dashboard/index.html` | Overview with key metrics and widgets |

### Clients
| Page | File | Description |
|------|------|-------------|
| Client List | `pages/clients/index.html` | View all clients |
| Client Details | `pages/clients/details.html` | Individual client information |

### Projects
| Page | File | Description |
|------|------|-------------|
| All Projects | `pages/projects/index.html` | Project directory |
| Assigned Projects | `pages/projects/assigned.html` | User's assigned projects |
| Project Details | `pages/projects/details.html` | Project workspace |

### Tasks
| Page | File | Description |
|------|------|-------------|
| Task List | `pages/tasks/index.html` | All tasks hub |
| Task Management | `pages/tasks/manage.html` | Task management workspace |
| Assign Task | `pages/tasks/assign.html` | Create and assign tasks |

### Communication
| Page | File | Description |
|------|------|-------------|
| Communication Hub | `pages/communication/index.html` | Chat and messages |
| Chat Control | `pages/communication/control.html` | Chat administration |

### Files
| Page | File | Description |
|------|------|-------------|
| File Manager | `pages/files/index.html` | File browser |
| File Details | `pages/files/details.html` | Individual file view |

### Payment
| Page | File | Description |
|------|------|-------------|
| Payment Center | `pages/payment/index.html` | Payment processing |

### Team
| Page | File | Description |
|------|------|-------------|
| Team Members | `pages/team/index.html` | Team directory |
| Team Assign | `pages/team/assign.html` | Team assignments |

### Analytics
| Page | File | Description |
|------|------|-------------|
| Executive Analytics | `pages/analytics/executive.html` | Executive dashboard |
| Marketing Analytics | `pages/analytics/marketing.html` | Marketing metrics |
| Operations Analytics | `pages/analytics/operations.html` | Operations data |

### Reports
| Page | File | Description |
|------|------|-------------|
| Financial Reports | `pages/reports/financial.html` | Financial data |
| Sales Reports | `pages/reports/sales.html` | Sales metrics |
| Support Reports | `pages/reports/support.html` | Support analytics |

### Activity
| Page | File | Description |
|------|------|-------------|
| Activity Logs | `pages/activity/index.html` | System activity log |

### Settings
| Page | File | Description |
|------|------|-------------|
| System Settings | `pages/settings/index.html` | Application settings |

### Profile
| Page | File | Description |
|------|------|-------------|
| User Profile | `pages/profile/index.html` | Profile management |

### Roles
| Page | File | Description |
|------|------|-------------|
| Roles & Permissions | `pages/roles/index.html` | Role management |
| Add New Role | `pages/roles/add.html` | Create new role |

### Notifications
| Page | File | Description |
|------|------|-------------|
| Notification Center | `pages/notifications/index.html` | Notifications hub |
| Notification Details | `pages/notifications/details.html` | Individual notification |

---

## 🎨 Design System

### Color Palette

The Obsidian design system uses CSS custom properties for consistent theming:

```css
:root {
  /* Surface Colors */
  --color-surface: #0b0f19;           /* Main background */
  --color-surface-container: #111827;  /* Card backgrounds */
  --color-surface-container-low: #1c1f2a;
  --color-surface-container-high: #1f2937;
  --color-surface-container-highest: #313540;

  /* Text Colors */
  --color-on-surface: #dfe2f1;         /* Primary text */
  --color-on-surface-variant: #c7c4d7;
  --color-on-surface-muted: #64748b;   /* Muted text */

  /* Brand Colors */
  --color-primary: #6366f1;            /* Indigo primary */
  --color-primary-container: #6366f1;
  --color-on-primary: #ffffff;
  --color-secondary: #c0c1ff;
  --color-tertiary: #ffb783;

  /* Status Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

### Typography

```html
<!-- Font Families -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Syne:wght@400..800&display=swap" rel="stylesheet"/>
```

| Font | Usage |
|------|-------|
| Outfit | Primary UI font |
| Syne | Headings and accents |
| Space Grotesk | Data and numbers |
| Ubuntu | Body text |

### Utility Classes

```html
<!-- Font Families -->
<span class="ubuntu">Ubuntu Text</span>
<span class="outfit">Outfit Text</span>
<span class="space-font">Space Grotesk</span>
<span class="syne">Syne Text</span>

<!-- Effects -->
<div class="glass-effect">Glass morphism</div>
<div class="glass-card">Glass card</div>
```

---

## 🧩 Components

### Dynamic Component Loading

Components are loaded dynamically via JavaScript to avoid code duplication:

```html
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <title>Page Title - Obsidian Admin</title>
  
  <!-- Styles -->
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/components.css">
  <link rel="stylesheet" href="../assets/css/responsive.css">
</head>
<body class="flex min-h-screen bg-surface">
  
  <!-- Component Containers -->
  <div id="sidebar-container"></div>
  
  <main class="flex-1 min-h-screen flex flex-col with-sidebar">
    <div id="header-container"></div>
    
    <!-- Page Content -->
    <div class="p-8 space-y-12 flex-1">
      <!-- Your content here -->
    </div>
    
    <div id="footer-container"></div>
  </main>
  
  <!-- Scripts -->
  <script src="../assets/js/components.js"></script>
  <script src="../assets/js/main.js"></script>
</body>
</html>
```

### Sidebar

The sidebar includes:
- Logo and branding
- Collapsible navigation menu
- Active state highlighting
- Mobile-responsive toggle
- Submenu support

### Header

The header includes:
- Search bar
- Notifications bell
- User profile dropdown
- Mobile menu toggle
- Breadcrumbs (optional)

### Footer

Simple footer with:
- Copyright information
- Quick links (optional)
- Version info (optional)

---

## 📱 Responsive Design

### Breakpoints

| Device | Breakpoint | Behavior |
|--------|------------|----------|
| Mobile | ≤640px | Sidebar hidden, hamburger menu, single column |
| Tablet | ≤1024px | Sidebar collapsible, 2-column grids |
| Desktop | ≥1024px | Sidebar expanded, multi-column layouts |

### Mobile Behavior

- Sidebar hidden by default
- Toggle button in header
- Full-width content
- Stacked layouts
- Touch-optimized interactions

### Tablet Behavior

- Sidebar collapsible to icons-only
- Adaptive grid layouts
- Optimized spacing

### Desktop Behavior

- Full sidebar navigation
- Multi-column layouts
- Expanded features

---

## 🛠️ Customization

### Changing Colors

Edit `assets/css/style.css`:

```css
:root {
  --color-primary: #your-color;      /* Change primary brand color */
  --color-surface: #your-color;      /* Change background color */
  --color-success: #your-color;      /* Change success color */
}
```

### Adding New Pages

1. Create new HTML file in appropriate `pages/` subfolder
2. Use the standard template structure
3. Add page to sidebar navigation in `assets/components/sidebar.html`
4. Link to CSS and JS assets with correct relative paths

### Modifying Components

Component templates are in `assets/components/`:
- `sidebar.html` - Navigation structure
- `header.html` - Header content
- `footer.html` - Footer content

Changes here will reflect across all pages.

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Opera | Latest | ✅ Full |

**Requirements:**
- CSS Custom Properties (CSS Variables)
- CSS Grid and Flexbox
- ES6 JavaScript
- Fetch API

---

## 👨‍💻 Development

### Best Practices

1. **Always use CSS variables** for colors and spacing
2. **Keep components DRY** - don't duplicate sidebar/header/footer
3. **Test responsive** at all breakpoints
4. **Use semantic HTML** for accessibility
5. **Validate links** when adding new pages

### File Naming Conventions

- HTML files: `kebab-case.html` (e.g., `client-details.html`)
- CSS files: `kebab-case.css`
- JS files: `kebab-case.js`
- Folders: lowercase with hyphens

### Code Style

- 2-space indentation
- Single quotes for strings
- Semicolons required
- CSS: Mobile-first approach

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Support

For issues, questions, or contributions:
- 📧 Email: support@example.com
- 📚 Documentation: See `/docs` folder
- 🐛 Bug Reports: Open an issue

---

## 🙏 Credits

**Design System:** Obsidian Dark Theme  
**CSS Framework:** Tailwind CSS  
**Icons:** Material Symbols Outlined  
**Fonts:** Google Fonts (Outfit, Syne, Space Grotesk, Ubuntu)

---

<div align="center">

**Made with ❤️ using Obsidian Admin Dashboard**

⭐ Star this repo if you find it helpful!

</div>
