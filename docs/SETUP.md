# Project Setup Guide

This guide walks you through setting up and running the admin panel project.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Detailed Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or yarn, pnpm, bun)

Check your versions:

```bash
node --version
npm --version
```

### Installation Steps

1. **Clone or navigate to the project directory**

```bash
cd admin-panel
```

2. **Install all dependencies**

```bash
npm install
```

This installs:
- React 18 & React DOM 18
- TypeScript 5
- Vite (build tool)
- Tailwind CSS 3
- Vitest (testing)
- ESLint & Prettier
- React Router DOM
- And all necessary dev dependencies

3. **Verify installation**

```bash
npm run doctor
```

(If this command doesn't exist, manually verify by running `npm run dev`)

### Environment Setup

Create a `.env` file in the project root:

```env
# API Configuration
VITE_API_URL=http://localhost:8080/api/v1

# Application Configuration
VITE_APP_NAME=Admin Panel
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_MOCKS=false
```

### Running the Application

#### Development Mode

```bash
npm run dev
```

- Starts Vite dev server
- Hot Module Replacement (HMR) enabled
- Opens browser automatically at `http://localhost:3000`

#### Production Build

```bash
npm run build
```

- Creates optimized production bundle
- Output in `dist/` directory
- TypeScript compilation included

#### Preview Production Build

```bash
npm run preview
```

- Serves the production build locally
- Default port: `4173`

## Development Workflow

### Code Quality

#### Linting

```bash
# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix
```

#### Formatting

```bash
# Format all files
npm run format

# Check formatting without changing
npm run format:check
```

#### Type Checking

```bash
npm run typecheck
```

### Testing

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Project Structure Overview

```
admin-panel/
├── admin_pages/          # Feature-based pages
│   ├── dashboard/
│   ├── clients/
│   ├── projects/
│   └── ...
├── shared/               # Shared code
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   └── index.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── useLocalStorage.ts
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   ├── helpers.ts
│   │   └── index.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── constants/        # App constants
│   │   └── index.ts
│   └── config/           # Configuration
│       └── appConfig.ts
├── assets/               # Static assets
│   └── css/
│       ├── index.css     # Main styles
│       └── style.css     # Design tokens
├── working_pages_react/  # React app entry
│   ├── main.tsx
│   └── App.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── ...
```

## Configuration Files

### TypeScript (tsconfig.json)

- Strict mode enabled
- Path aliases configured
- React JSX support

### Vite (vite.config.ts)

- Path aliases
- Build optimizations
- Dev server configuration

### Tailwind (tailwind.config.js)

- Custom color palette
- Font families (Syne, Outfit, Space Grotesk, Ubuntu)
- Custom utilities

### ESLint (.eslintrc.cjs)

- React + TypeScript rules
- Import ordering
- XenonOS project rules

### Prettier (.prettierrc)

- Single quotes
- 2 space indentation
- 100 char line width

## Path Aliases

Use these clean imports in your code:

```typescript
import { Button } from '@components';
import { useLocalStorage } from '@hooks';
import { cn, formatDate } from '@utils';
import type { User } from '@types';
import { ROUTES } from '@constants';
import { appConfig } from '@config';
import Dashboard from '@admin_pages/dashboard/Dashboard';
```

## Creating New Components

### 1. Create Component File

```tsx
// shared/components/MyComponent.tsx
import type { FC } from 'react';

interface MyComponentProps {
  title: string;
}

export const MyComponent: FC<MyComponentProps> = ({ title }) => {
  return <div className="p-4">{title}</div>;
};
```

### 2. Export from Index

```ts
// shared/components/index.ts
export { MyComponent } from './MyComponent';
```

### 3. Write Tests

```tsx
// shared/components/MyComponent.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from '@components';

describe('MyComponent', () => {
  it('should render', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Creating New Pages

### 1. Create Page Component

```tsx
// admin_pages/mypage/MyPage.tsx
import type { FC } from 'react';

const MyPage: FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-headline">My Page</h1>
    </div>
  );
};

export default MyPage;
```

### 2. Add Route

```tsx
// working_pages_react/App.tsx
const MyPage = lazy(() => import('@admin_pages/mypage/MyPage'));

// In Routes:
<Route path="/mypage" element={<MyPage />} />
```

## Troubleshooting

### Common Issues

#### "Cannot find module" errors

- Ensure dependencies are installed: `npm install`
- Check path aliases in `tsconfig.json`
- Restart TypeScript server in VS Code

#### Tailwind styles not working

- Verify `tailwind.config.js` content paths
- Ensure `@tailwind` directives in `index.css`
- Restart dev server

#### Tests failing

- Clear cache: `rm -rf node_modules/.vite`
- Reinstall: `npm ci`
- Check Vitest config

### Getting Help

1. Check the README.md
2. Review configuration files
3. Check package.json scripts
4. Look at existing components for examples

## Next Steps

1. ✅ Run `npm run dev` to start development
2. ✅ Explore existing components in `shared/components/`
3. ✅ Review design tokens in `assets/css/style.css`
4. ✅ Check out test examples in `shared/utils/helpers.test.ts`
5. ✅ Start building your features!

## Useful Commands Summary

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Lint code
npm run lint:fix         # Fix lint errors
npm run format           # Format code
npm run typecheck        # Type check

# Testing
npm run test             # Run tests
npm run test:ui          # Tests with UI
npm run test:coverage    # Tests with coverage
```

Happy coding! 🚀
