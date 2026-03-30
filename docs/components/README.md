# Component Documentation Index

This directory contains documentation for all reusable components in the XenonOS Admin Panel.

## Components

### Core Components

| Component | Description | Documentation | Stories |
|-----------|-------------|---------------|---------|
| Button | Versatile button with variants and states | [Button.docs.mdx](./Button.docs.mdx) | [Button.stories.tsx](./Button.stories.tsx) |
| Card | Flexible container with multiple variants | [Card.docs.mdx](./Card.docs.mdx) | [Card.stories.tsx](./Card.stories.tsx) |
| Input | Text input with validation and addons | [Input.docs.mdx](./Input.docs.mdx) | [Input.stories.tsx](./Input.stories.tsx) |
| Table | Data table with sorting and pagination | [Table.docs.mdx](./Table.docs.mdx) | [Table.stories.tsx](./Table.stories.tsx) |
| Modal | Accessible dialog component | [Modal.docs.mdx](./Modal.docs.mdx) | [Modal.stories.tsx](./Modal.stories.tsx) |
| Toast | Notification system | [Toast.docs.mdx](./Toast.docs.mdx) | [Toast.stories.tsx](./Toast.stories.tsx) |

### Layout Components

| Component | Description | Documentation | Stories |
|-----------|-------------|---------------|---------|
| Sidebar | Navigation sidebar | [Sidebar.docs.mdx](./Sidebar.docs.mdx) | [Sidebar.stories.tsx](./Sidebar.stories.tsx) |
| TopBar | Top navigation bar | [TopBar.docs.mdx](./TopBar.docs.mdx) | [TopBar.stories.tsx](./TopBar.stories.tsx) |

### Feedback Components

| Component | Description | Documentation | Stories |
|-----------|-------------|---------------|---------|
| Spinner | Loading spinner | [Spinner.docs.mdx](./Spinner.docs.mdx) | [Spinner.stories.tsx](./Spinner.stories.tsx) |
| Skeleton | Loading placeholder | [Skeleton.docs.mdx](./Skeleton.docs.mdx) | [Skeleton.stories.tsx](./Skeleton.stories.tsx) |
| EmptyState | Empty state display | [EmptyState.docs.mdx](./EmptyState.docs.mdx) | [EmptyState.stories.tsx](./EmptyState.stories.tsx) |
| ErrorBoundary | Error handling wrapper | [ErrorBoundary.docs.mdx](./ErrorBoundary.docs.mdx) | [ErrorBoundary.stories.tsx](./ErrorBoundary.stories.tsx) |

## Hooks

| Hook | Description | Documentation |
|------|-------------|---------------|
| useLocalStorage | Persistent state with localStorage | [useLocalStorage.docs.mdx](./hooks/useLocalStorage.docs.mdx) |
| useToast | Toast notification hook | [useToast.docs.mdx](./hooks/useToast.docs.mdx) |

## Utilities

| Utility | Description | Documentation |
|---------|-------------|---------------|
| cn | Class name combiner | [utils.docs.mdx](./utils/utils.docs.mdx) |
| formatDate | Date formatting | [utils.docs.mdx](./utils/utils.docs.mdx) |
| formatCurrency | Currency formatting | [utils.docs.mdx](./utils/utils.docs.mdx) |
| formatNumber | Number formatting | [utils.docs.mdx](./utils/utils.docs.mdx) |
| truncate | Text truncation | [utils.docs.mdx](./utils/utils.docs.mdx) |
| generateId | ID generator | [utils.docs.mdx](./utils/utils.docs.mdx) |
| debounce | Function debouncing | [utils.docs.mdx](./utils/utils.docs.mdx) |
| throttle | Function throttling | [utils.docs.mdx](./utils/utils.docs.mdx) |
| isEmpty | Empty value check | [utils.docs.mdx](./utils/utils.docs.mdx) |
| deepClone | Deep object cloning | [utils.docs.mdx](./utils/utils.docs.mdx) |
| capitalize | String capitalization | [utils.docs.mdx](./utils/utils.docs.mdx) |
| toTitleCase | Title case conversion | [utils.docs.mdx](./utils/utils.docs.mdx) |
| isValidEmail | Email validation | [utils.docs.mdx](./utils/utils.docs.mdx) |
| getInitials | Name initials extractor | [utils.docs.mdx](./utils/utils.docs.mdx) |
| groupBy | Array grouper | [utils.docs.mdx](./utils/utils.docs.mdx) |
| unique | Array deduplicator | [utils.docs.mdx](./utils/utils.docs.mdx) |
| isPromise | Promise checker | [utils.docs.mdx](./utils/utils.docs.mdx) |

## Design System

For design tokens, colors, typography, and guidelines, see:
- [Design System Documentation](../DESIGN.md)
- [Design System Audit Report](../DESIGN_SYSTEM_AUDIT_REPORT.md)

## Testing

All components have comprehensive test suites. See:
- [Testing Guidelines](../README.md#testing)
- Test files located alongside components (`.test.tsx`)

## Contributing

When adding new components:
1. Create the component in `shared/components/`
2. Write tests in the same directory
3. Create documentation in `docs/components/`
4. Create Storybook stories in `docs/components/`
5. Update this index

## Quick Links

- [Getting Started](../README.md#getting-started)
- [Project Structure](../README.md#project-structure)
- [Development Guidelines](../README.md#development-guidelines)
- [Available Scripts](../README.md#available-scripts)
