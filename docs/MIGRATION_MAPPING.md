# File Migration Mapping
**Generated:** 2026-03-31  
**Purpose:** Map admin_pages/ files to pages/ target structure

---

## Migration Summary

| Source Directory | Target Directory | Files to Migrate |
|-----------------|------------------|------------------|
| admin_pages/dashboard/ | pages/dashboard/ | dashboard.html → index.html |
| admin_pages/clients/ | pages/clients/ | clients-list.html → index.html, client-details.html → details.html |
| admin_pages/projects/ | pages/projects/ | all-projects.html → index.html, assigned-projects.html → assigned.html, project-details.html → details.html |
| admin_pages/tasks/ | pages/tasks/ | task-list.html → index.html, task-management.html → manage.html, assign-task.html → assign.html |
| admin_pages/chat/ | pages/communication/ | communication.html → index.html, chat-control.html → control.html |
| admin_pages/files/ | pages/files/ | file-manager.html → index.html, file-details.html → details.html |
| admin_pages/payment/ | pages/payment/ | payment.html → index.html |
| admin_pages/team/ | pages/team/ | team-members.html → index.html, team-member-assign.html → assign.html |
| admin_pages/Overview Analytics/ | pages/analytics/ | executive.html → executive.html, marketing.html → marketing.html, operations.html → operations.html |
| admin_pages/Performance Reports/ | pages/reports/ | financial.html → financial.html, sales.html → sales.html, support.html → support.html |
| admin_pages/activity/ | pages/activity/ | activity-logs.html → index.html |
| admin_pages/settings/ | pages/settings/ | settings.html → index.html (already exists) |
| admin_pages/profile/ | pages/profile/ | profile.html → index.html |
| admin_pages/roles/ | pages/roles/ | roles-permissions.html → index.html, add-new-role.html → add.html |
| admin_pages/notifications/ | pages/notifications/ | notification-center.html → index.html, notification-details.html → details.html |

---

## Detailed File Mapping

### Dashboard
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/dashboard/dashboard.html` | `pages/dashboard/index.html` | MIGRATE (overwrite) |

### Clients
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/clients/clients-list.html` | `pages/clients/index.html` | MIGRATE (overwrite) |
| `admin_pages/clients/client-details.html` | `pages/clients/details.html` | NEW FILE |

### Projects
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/projects/all-projects.html` | `pages/projects/index.html` | NEW FILE |
| `admin_pages/projects/assigned-projects.html` | `pages/projects/assigned.html` | NEW FILE |
| `admin_pages/projects/project-details.html` | `pages/projects/details.html` | NEW FILE |

### Tasks
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/tasks/task-list.html` | `pages/tasks/index.html` | NEW FILE |
| `admin_pages/tasks/task-management.html` | `pages/tasks/manage.html` | NEW FILE |
| `admin_pages/tasks/assign-task.html` | `pages/tasks/assign.html` | NEW FILE |

### Communication (from chat/)
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/chat/communication.html` | `pages/communication/index.html` | NEW FILE |
| `admin_pages/chat/chat-control.html` | `pages/communication/control.html` | NEW FILE |

### Files
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/files/file-manager.html` | `pages/files/index.html` | NEW FILE |
| `admin_pages/files/file-details.html` | `pages/files/details.html` | NEW FILE |

### Payment
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/payment/payment.html` | `pages/payment/index.html` | NEW FILE |

### Team
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/team/team-members.html` | `pages/team/index.html` | NEW FILE |
| `admin_pages/team/team-member-assign.html` | `pages/team/assign.html` | NEW FILE |

### Analytics (from Overview Analytics/)
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/Overview Analytics/executive.html` | `pages/analytics/executive.html` | NEW FILE |
| `admin_pages/Overview Analytics/marketing.html` | `pages/analytics/marketing.html` | NEW FILE |
| `admin_pages/Overview Analytics/operations.html` | `pages/analytics/operations.html` | NEW FILE |

### Reports (from Performance Reports/)
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/Performance Reports/financial.html` | `pages/reports/financial.html` | NEW FILE |
| `admin_pages/Performance Reports/sales.html` | `pages/reports/sales.html` | NEW FILE |
| `admin_pages/Performance Reports/support.html` | `pages/reports/support.html` | NEW FILE |

### Activity
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/activity/activity-logs.html` | `pages/activity/index.html` | NEW FILE |

### Settings
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/settings/settings.html` | `pages/settings/index.html` | MIGRATE (overwrite existing) |

### Profile
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/profile/profile.html` | `pages/profile/index.html` | NEW FILE |

### Roles
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/roles/roles-permissions.html` | `pages/roles/index.html` | NEW FILE |
| `admin_pages/roles/add-new-role.html` | `pages/roles/add.html` | NEW FILE |

### Notifications
| Source | Target | Status |
|--------|--------|--------|
| `admin_pages/notifications/notification-center.html` | `pages/notifications/index.html` | NEW FILE |
| `admin_pages/notifications/notification-details.html` | `pages/notifications/details.html` | NEW FILE |

---

## Files to Archive (Not Migrated)

### others page/ Directory (30 files - XenonOS not integrated)
- Entire directory will be archived to `docs/archived/others-page-backup/`

### admin_pages/ Directory
- After migration, entire directory will be removed

---

## Navigation Config Updates Required

After migration, `assets/js/components.js` navigation paths are already correct for the `pages/` structure. No changes needed to navigation config.

---

## Post-Migration Cleanup

1. Delete `admin_pages/` directory (entire)
2. Delete `others page/` directory (after optional archive)
3. Verify all navigation links work
4. Remove any empty directories
