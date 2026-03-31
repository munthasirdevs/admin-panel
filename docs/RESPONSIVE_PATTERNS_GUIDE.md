# Responsive Patterns Quick Reference

## How to Make Any Page Responsive

### 1. Update Container Padding
```html
<!-- Replace this -->
<div class="p-8 space-y-12">

<!-- With this -->
<div class="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 lg:space-y-12">
```

### 2. Scale Typography
```html
<!-- Replace this -->
<h1 class="text-5xl">
<h2 class="text-4xl">
<p class="text-sm">

<!-- With this -->
<h1 class="text-3xl sm:text-4xl md:text-5xl">
<h2 class="text-2xl sm:text-3xl md:text-4xl">
<p class="text-xs sm:text-sm">
```

### 3. Make Grids Responsive
```html
<!-- Replace this -->
<div class="grid grid-cols-4 gap-6">

<!-- With this -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
```

### 4. Make Flex Containers Stack
```html
<!-- Replace this -->
<div class="flex items-center justify-between gap-4">

<!-- With this -->
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
```

### 5. Make Tables Responsive
```html
<!-- Replace this -->
<div class="overflow-x-auto">
  <table class="w-full">
    <th class="px-6 py-6">

<!-- With this -->
<div class="overflow-x-auto no-scrollbar">
  <table class="w-full min-w-[700px]">
    <th class="px-4 sm:px-6 py-4 sm:py-6">
    <th class="hide-mobile">  <!-- For less important columns -->
```

### 6. Ensure Touch Targets
```html
<!-- Replace this -->
<button class="p-2">
<input type="text" class="py-2">

<!-- With this -->
<button class="p-2 min-h-[44px] min-w-[44px]">
<input type="text" class="py-2 min-h-[44px]">
```

### 7. Make Images/Avatars Responsive
```html
<!-- Replace this -->
<img class="w-12 h-12">
<div class="w-20 h-20">

<!-- With this -->
<img class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 shrink-0">
<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
```

### 8. Make Buttons Responsive
```html
<!-- Replace this -->
<button class="px-8 py-4">
<div class="flex gap-2">

<!-- With this -->
<button class="px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
<div class="flex flex-wrap gap-2">
```

### 9. Make Cards Responsive
```html
<!-- Replace this -->
<div class="bg-surface-container p-8 rounded-2xl">

<!-- With this -->
<div class="bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
```

### 10. Make Chart Containers Responsive
```html
<!-- Replace this -->
<div class="h-64">

<!-- With this -->
<div class="h-48 sm:h-56 md:h-64">
```

---

## Common Class Replacements

| Original Class | Responsive Replacement |
|----------------|------------------------|
| `p-12` | `p-4 sm:p-6 md:p-8 lg:p-12` |
| `px-12` | `px-4 sm:px-6 md:px-8 lg:px-12` |
| `py-12` | `py-4 sm:py-6 md:py-8 lg:py-12` |
| `text-6xl` | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` |
| `text-5xl` | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` |
| `text-4xl` | `text-xl sm:text-2xl md:text-3xl lg:text-4xl` |
| `text-3xl` | `text-lg sm:text-xl md:text-2xl lg:text-3xl` |
| `text-2xl` | `text-base sm:text-lg md:text-xl lg:text-2xl` |
| `gap-12` | `gap-3 sm:gap-4 md:gap-6 lg:gap-12` |
| `gap-8` | `gap-3 sm:gap-4 md:gap-6` |
| `gap-6` | `gap-2 sm:gap-3 md:gap-4` |
| `rounded-3xl` | `rounded-xl sm:rounded-2xl md:rounded-3xl` |
| `rounded-2xl` | `rounded-lg sm:rounded-xl md:rounded-2xl` |
| `grid-cols-4` | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` |
| `grid-cols-3` | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |
| `grid-cols-2` | `grid-cols-1 sm:grid-cols-2` |
| `flex-row` | `flex-col sm:flex-row` |
| `items-end` | `items-start sm:items-end` |
| `justify-between` | `justify-start sm:justify-between` |
| `w-12` | `w-8 sm:w-10 md:w-12` |
| `w-10` | `w-6 sm:w-8 md:w-10` |
| `w-8` | `w-6 sm:w-7 md:w-8` |
| `space-y-12` | `space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12` |
| `space-y-8` | `space-y-3 sm:space-y-4 md:space-y-6` |
| `space-y-6` | `space-y-2 sm:space-y-3 md:space-y-4` |
| `mb-12` | `mb-4 sm:mb-6 md:mb-8 lg:mb-12` |
| `mb-8` | `mb-3 sm:mb-4 md:mb-6` |
| `mb-6` | `mb-2 sm:mb-3 md:mb-4` |

---

## Page-Specific Patterns

### Dashboard Pages
```html
<!-- Stats Grid -->
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

<!-- Bento Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
```

### Table Pages (Clients, Projects, Tasks)
```html
<!-- Filter Bar -->
<div class="flex flex-wrap items-center gap-3 sm:gap-4">
  <div class="flex-grow min-w-[200px] sm:min-w-[240px]">

<!-- Table Container -->
<div class="bg-surface-container-low rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
  <div class="overflow-x-auto no-scrollbar">
    <table class="w-full min-w-[700px]">
```

### Card Grid Pages (Team, Files)
```html
<!-- Card Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

<!-- Individual Card -->
<div class="bg-surface-container rounded-xl p-4 sm:p-6">
```

### Form Pages (Settings, Profile)
```html
<!-- Form Container -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
  <section class="col-span-1 lg:col-span-5">

<!-- Form Input -->
<input class="w-full min-h-[44px] px-4 py-3 text-sm">

<!-- Toggle Card -->
<div class="p-4 sm:p-5 bg-surface-container rounded-xl sm:rounded-2xl">
```

### Analytics/Reports Pages
```html
<!-- KPI Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

<!-- Chart Section -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

<!-- 3-Column Layout -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
  <div class="col-span-1 lg:col-span-3 order-2 lg:order-1">
```

---

## Utility Classes Reference

### Visibility
- `hide-mobile` - Hidden on mobile, visible on tablet+
- `hide-on-tablet` - Visible on mobile/desktop, hidden on tablet
- `hide-on-desktop` - Visible on mobile/tablet, hidden on desktop
- `sm:hidden` - Hidden on small screens
- `md:block` - Block only on medium screens+

### Spacing
- `shrink-0` - Prevent element from shrinking
- `flex-grow` - Allow element to grow
- `min-w-0` - Allow text truncation in flex containers
- `min-w-[44px]` - Minimum touch target width

### Text
- `truncate` - Truncate text with ellipsis
- `whitespace-nowrap` - Prevent text wrapping
- `text-center sm:text-left` - Center on mobile, left on desktop

### Layout
- `order-1` - Change element order (for mobile-first reordering)
- `col-span-full` - Full width in grid
- `row-span-full` - Full height in grid

---

## Testing Checklist

After making a page responsive, verify:

- [ ] Page viewport meta tag includes `width=device-width, initial-scale=1.0`
- [ ] All text is readable without zooming (minimum 14px for body)
- [ ] All buttons/links are at least 44px × 44px
- [ ] Tables scroll horizontally if content is wide
- [ ] Images don't overflow their containers
- [ ] Forms are usable on mobile (inputs full-width)
- [ ] Cards stack vertically on mobile
- [ ] Grid columns reduce appropriately
- [ ] No horizontal scrolling on body (except tables)
- [ ] Typography scales appropriately
- [ ] Spacing is proportional on all screen sizes

---

## Quick Fix Examples

### Fix 1: Header Section
```html
<!-- Before -->
<header class="flex items-end justify-between mb-12">
  <h1 class="text-5xl">Title</h1>
  <button class="px-8 py-4">Action</button>
</header>

<!-- After -->
<header class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 md:mb-12">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Title</h1>
  <button class="px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] w-full sm:w-auto">Action</button>
</header>
```

### Fix 2: Stats Cards
```html
<!-- Before -->
<div class="grid grid-cols-4 gap-6">
  <div class="p-6">
    <p class="text-[10px]">Label</p>
    <h3 class="text-3xl">1,234</h3>
  </div>
</div>

<!-- After -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
  <div class="p-4 sm:p-6">
    <p class="text-[10px]">Label</p>
    <h3 class="text-2xl sm:text-3xl">1,234</h3>
  </div>
</div>
```

### Fix 3: Filter Bar
```html
<!-- Before -->
<div class="flex items-center gap-4">
  <input class="flex-grow" placeholder="Search...">
  <select>Status</select>
  <button>Filter</button>
</div>

<!-- After -->
<div class="flex flex-wrap items-center gap-3 sm:gap-4">
  <input class="flex-grow min-w-[200px]" placeholder="Search..." min-h-[44px]">
  <select class="min-h-[44px]">Status</select>
  <button class="min-h-[44px] min-w-[44px]">Filter</button>
</div>
```

---

## Need Help?

1. Check `docs/RESPONSIVE_COMPLETION_REPORT.md` for full details
2. Review updated pages as examples (dashboard, clients, team, settings, billing)
3. Look at `assets/css/responsive.css` for available utility classes
4. Test on actual devices, not just browser dev tools
