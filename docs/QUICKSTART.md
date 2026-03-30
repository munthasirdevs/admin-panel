# 🚀 Quick Start Guide - Obsidian Admin Panel

## Get Started in 5 Minutes

### Step 1: Open the Dashboard

Navigate to the project folder and open:
```
pages/dashboard/index.html
```

**How to open:**
- **Option A:** Double-click the file in File Explorer
- **Option B:** Right-click → Open with → Browser
- **Option C:** Use a local server (recommended):
  ```bash
  # Using Python
  python -m http.server 8000
  # Then visit: http://localhost:8000/pages/dashboard/index.html
  
  # Using Node.js
  npx http-server -p 8000
  # Then visit: http://localhost:8000/pages/dashboard/index.html
  ```

---

### Step 2: Explore the Features

Once opened, you'll see:

✅ **Sidebar Navigation** - Hover to expand, click to navigate
✅ **Header** - Search bar, notifications, user profile
✅ **Dashboard Content** - Stats, clients, projects
✅ **Footer** - System status indicator

**Try these interactions:**
1. **Hover over sidebar** - It expands to show labels
2. **Click pin icon** - Sidebar stays expanded
3. **Resize browser** - See responsive behavior
4. **Click nav items** - Navigate between pages
5. **Mobile view** (<640px) - Hamburger menu appears

---

### Step 3: Navigate to Other Pages

Click on sidebar items to navigate:
- **Clients** → View client list
- **Projects** → View all projects
- **Tasks** → Task management
- **Settings** → System settings
- And more!

---

### Step 4: Test Responsive Design

**Desktop (≥1025px):**
- Full sidebar (collapsible)
- Multi-column layouts
- All features visible

**Tablet (≤1024px):**
- Sidebar collapsible
- 2-column grids
- Optimized spacing

**Mobile (≤640px):**
- Hidden sidebar (hamburger menu)
- Single column layouts
- Touch-optimized

**How to test:**
1. Press `F12` to open DevTools
2. Click device toggle icon
3. Select different devices
4. Or manually resize browser

---

### Step 5: Create Your First Page

**1. Copy the template:**
```bash
# Copy page-template.html to your module folder
cp pages/page-template.html pages/your-module/your-page.html
```

**2. Edit the file:**
```html
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
    <title>Your Page Title - Obsidian Admin</title>
    <!-- CSS links already included -->
</head>
<body class="flex min-h-screen bg-surface">
    <div id="sidebar-container"></div>

    <main class="flex-1 min-h-screen flex flex-col with-sidebar">
        <div id="header-container"></div>

        <div class="p-8 space-y-12 flex-1">
            <!-- Your content here -->
            <h2>Your Page Title</h2>
            <p>Your page description</p>
            
            <!-- Your content -->
        </div>

        <div id="footer-container"></div>
    </main>

    <!-- Scripts already included -->
</body>
</html>
```

**3. Add to navigation:**

Edit `assets/js/components.js`:
```javascript
const navigationConfig = {
  yourModule: [
    { 
      name: 'Your Page', 
      icon: 'your_icon', 
      path: '../pages/your-module/your-page.html' 
    }
  ]
};
```

**4. Test:**
- Refresh browser
- Your page should appear in sidebar
- Click to navigate to it

---

## Common Tasks

### Change User Profile

Edit `assets/js/components.js`, find `generateHeader()`:
```javascript
const generateHeader = () => {
  return `
    <div class="flex items-center gap-3">
      <div class="hidden lg:block text-right">
        <p class="text-sm font-semibold">Your Name</p>
        <p class="text-[10px] text-slate-500">Your Role</p>
      </div>
      <img src="your-avatar-url" />
    </div>
  `;
};
```

### Change Sidebar Links

Edit `assets/js/components.js`, find `navigationConfig`:
```javascript
const navigationConfig = {
  dashboard: [
    { 
      name: 'Dashboard', 
      icon: 'dashboard', 
      path: '../pages/dashboard/index.html' 
    }
  ],
  // Add or modify sections here
};
```

### Change Colors

Edit `assets/css/style.css`:
```css
:root {
  --color-primary: #your-color;      /* Primary brand color */
  --color-surface: #your-color;      /* Background color */
  --color-success: #your-color;      /* Success color */
}
```

---

## Troubleshooting

### Sidebar Not Showing?

**Check:**
1. Is `components.js` loaded? (Check browser console)
2. Is `<div id="sidebar-container"></div>` in your HTML?
3. Are file paths correct?

**Solution:**
```html
<!-- Make sure this is in your HTML -->
<script src="../../assets/js/components.js"></script>
```

### Styles Not Applying?

**Check:**
1. Are all 3 CSS files linked?
2. Are paths correct?
3. Is browser cache cleared?

**Solution:**
```html
<!-- All three should be in <head> -->
<link rel="stylesheet" href="../../assets/css/style.css">
<link rel="stylesheet" href="../../assets/css/components.css">
<link rel="stylesheet" href="../../assets/css/responsive.css">
```

### Links Not Working?

**Check:**
1. Use `../../pages/...` structure
2. File exists at that path
3. No typos in filename

**Correct path example:**
```html
<!-- From pages/clients/index.html -->
<a href="../../pages/dashboard/index.html">Dashboard</a>
```

---

## File Structure Quick Reference

```
admin-panel/
├── pages/                    # All your pages
│   ├── dashboard/
│   │   └── index.html       # Main dashboard ✅
│   ├── clients/
│   │   └── index.html       # Client list ✅
│   ├── settings/
│   │   └── index.html       # Settings ✅
│   └── page-template.html   # Template for new pages
│
├── assets/
│   ├── css/
│   │   ├── style.css        # Design system
│   │   ├── components.css   # Sidebar, header, footer
│   │   └── responsive.css   # Responsive styles
│   ├── js/
│   │   ├── main.js          # Core utilities
│   │   └── components.js    # Component loading
│   └── components/          # HTML templates
│
└── docs/                    # Documentation
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `F12` | Open DevTools |
| `Ctrl+Shift+R` | Hard refresh (clear cache) |
| `Ctrl+U` | View page source |
| `Ctrl+Shift+I` | Open Inspector |

---

## Next Steps

1. ✅ **Explore the dashboard** - Click around, test features
2. ✅ **Test responsive** - Resize browser, test on mobile
3. ✅ **Read documentation** - `README.md`, `MIGRATION_GUIDE.md`
4. ✅ **Create a page** - Use the template
5. ✅ **Migrate existing pages** - Follow migration guide

---

## Resources

| Document | Purpose |
|----------|---------|
| `README.md` | Complete project overview |
| `MIGRATION_GUIDE.md` | How to migrate existing pages |
| `IMPLEMENTATION_SUMMARY.md` | What was changed |
| `REFACTORING_PLAN.md` | Original refactoring plan |

---

## Need Help?

1. **Check documentation** - Read the guides above
2. **Check console** - Press F12, look for errors
3. **Check paths** - Most issues are path-related
4. **Contact team** - Ask for assistance

---

**Happy Coding! 🎉**

<div align="center">

**🌌 Obsidian Admin Panel**

*Clean • Modern • Responsive*

</div>
