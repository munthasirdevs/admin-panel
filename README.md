# XenonOS Admin Panel

A production-ready React + TypeScript + Vite + Tailwind CSS admin panel application built on the XenonOS design system.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Available Scripts](#available-scripts)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The XenonOS Admin Panel is a comprehensive administration interface built with modern web technologies. It provides a robust foundation for building administrative dashboards with a focus on performance, accessibility, and developer experience.

## ✨ Features

- **Modern React** - React 18 with hooks, concurrent features, and functional components
- **TypeScript** - Full type safety with strict mode and comprehensive type definitions
- **Vite** - Lightning-fast build tool and development server with HMR
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **React Router** - Client-side routing with nested routes
- **Testing** - Comprehensive test suite with Vitest and React Testing Library
- **Code Quality** - ESLint and Prettier for consistent code style
- **Path Aliases** - Clean imports with configured path aliases
- **Responsive Design** - Mobile-first responsive layouts
- **Accessibility** - WCAG 2.1 compliant components

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18.3+ |
| **Language** | TypeScript 5.5+ |
| **Build Tool** | Vite 5.4+ |
| **Styling** | Tailwind CSS 3.4+ |
| **Routing** | React Router 6.26+ |
| **Testing** | Vitest 2.0+, React Testing Library 16+ |
| **Linting** | ESLint 8.57+ |
| **Formatting** | Prettier 3.3+ |
| **PostCSS** | PostCSS 8.4+ |
| **Autoprefixer** | Autoprefixer 10.4+ |

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (comes with Node.js) or **yarn** / **pnpm** / **bun**

Verify your installation:

```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

### Installation

1. **Clone the repository** (if applicable):

```bash
git clone <repository-url>
cd admin-panel
```

2. **Install dependencies**:

```bash
npm install
```

Or with other package managers:

```bash
yarn install
# or
pnpm install
# or
bun install
```

3. **Start the development server**:

```bash
npm run dev
```

The application will open at `http://localhost:3000` (or the next available port).

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_VERSION=v1

# App Configuration
VITE_APP_NAME=XenonOS Admin Panel
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

Access environment variables in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;
```

## 📁 Project Structure

```
admin-panel/
├── admin_pages/              # Admin page components organized by feature
│   ├── dashboard/            # Dashboard pages
│   ├── clients/              # Client management pages
│   ├── projects/             # Project management pages
│   ├── tasks/                # Task management pages
│   ├── team/                 # Team management pages
│   ├── files/                # File management pages
│   ├── billing/              # Billing pages
│   ├── settings/             # Settings pages
│   └── ...
├── shared/                   # Shared utilities and components
│   ├── components/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal/
│   │   ├── Toast/
│   │   └── ...
│   ├── hooks/                # Custom React hooks
│   │   ├── useLocalStorage.ts
│   │   └── ...
│   ├── utils/                # Utility functions
│   │   ├── helpers.ts
│   │   └── ...
│   ├── types/                # TypeScript type definitions
│   ├── constants/            # Application constants
│   └── config/               # Configuration files
├── working_pages_react/      # React application entry point
│   ├── shared/               # Shared layout components
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── assets/                   # Static assets
│   ├── css/                  # Stylesheets
│   ├── images/               # Images
│   └── fonts/                # Custom fonts
├── docs/                     # Documentation
│   ├── components/           # Component documentation
│   └── ...
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── vitest.config.ts          # Vitest configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── eslint.config.cjs         # ESLint configuration
└── prettier.config.cjs       # Prettier configuration
```

## 🎨 Design System

The XenonOS Admin Panel uses a custom design system with the following tokens:

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-surface` | `#0b0f19` | Main background |
| `--color-surface-container` | `#111827` | Card backgrounds |
| `--color-surface-container-low` | `#0f141f` | Subtle containers |
| `--color-surface-container-high` | `#1a2234` | Elevated containers |
| `--color-primary` | `#6366f1` | Primary actions |
| `--color-secondary` | `#c0c1ff` | Secondary elements |
| `--color-tertiary` | `#ffb783` | Accent elements |
| `--color-success` | `#10b981` | Success states |
| `--color-error` | `#ef4444` | Error states |
| `--color-warning` | `#f59e0b` | Warning states |
| `--color-info` | `#3b82f6` | Info states |

### Typography

| Font | Usage | Class |
|------|-------|-------|
| **Syne** | Headlines, display text | `font-headline`, `.syne` |
| **Outfit** | Body text (default) | `font-outfit`, `.outfit` |
| **Space Grotesk** | Technical content | `font-mono`, `.space-grotesk` |
| **Ubuntu** | Alternative body | `ubuntu` |

### Using Design Tokens

```tsx
// Using Tailwind classes
<div className="bg-surface text-on-surface font-outfit">
  <h1 className="font-headline text-primary">Hello</h1>
</div>

// Using CSS variables
<div style={{
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-on-surface)'
}}>
```

### Components

The design system includes the following core components:

- **Button** - Multiple variants (primary, secondary, outline, ghost, danger)
- **Card** - Flexible container with variants (default, glass, elevated, outlined)
- **Input** - Text input with validation and addons
- **Table** - Data table with sorting and pagination
- **Modal** - Accessible dialog component
- **Toast** - Notification system
- **Sidebar** - Navigation sidebar
- **TopBar** - Top navigation bar

For detailed component documentation, see [docs/components/README.md](./docs/components/README.md).

## 📝 Development Guidelines

### Code Style

#### TypeScript

- Use TypeScript for all new code
- Define interfaces for component props
- Use proper type annotations for functions
- Avoid `any` - use `unknown` when type is uncertain

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

// Avoid
const Button = (props: any) => {};
```

#### Component Patterns

- Use functional components with hooks
- Follow the AAA pattern for tests (Arrange, Act, Assert)
- Keep components small and focused
- Use composition over inheritance

```tsx
// Good
export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button className={cn('btn', variant)} onClick={onClick}>
      {children}
    </button>
  );
};
```

#### Naming Conventions

- Components: PascalCase (`Button`, `CardHeader`)
- Files: PascalCase for components, camelCase for utilities
- Types/Interfaces: PascalCase with descriptive names
- Constants: UPPER_SNAKE_CASE
- CSS classes: kebab-case

### Testing

Write tests for all components and utilities:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
```

**Test Coverage Goals:**
- Components: 80%+ coverage
- Utilities: 90%+ coverage
- Critical paths: 100% coverage

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG AA minimum)

```tsx
// Good
<button aria-label="Close modal" onClick={onClose}>
  <CloseIcon />
</button>
```

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run all tests |
| `npm run test:ui` | Run tests with interactive UI |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint code with ESLint |
| `npm run lint:fix` | Fix linting errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run typecheck` | Run TypeScript type checking |

### Development Workflow

1. **Start development server**:
   ```bash
   npm run dev
   ```

2. **Make changes** - HMR will automatically update

3. **Run tests** (optional, in another terminal):
   ```bash
   npm run test
   ```

4. **Check code quality**:
   ```bash
   npm run lint
   npm run format:check
   npm run typecheck
   ```

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Preview the build locally
npm run preview
```

The build output will be in the `dist/` directory.

### Build Optimization

The build is optimized with:
- Tree shaking for unused code
- Minification of JS and CSS
- Asset optimization
- Code splitting
- Source maps for debugging

### Analyzing Bundle Size

```bash
# Install bundle analyzer
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts and rebuild
npm run build
```

## 🚢 Deployment

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Vercel configuration is automatic for Vite projects.

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to Netlify

**netlify.toml** configuration:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t xenon-admin .
docker run -p 80:80 xenon-admin
```

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Review Process

- All changes require PR review
- Tests must pass
- Code must follow style guidelines
- Documentation should be updated

### Reporting Issues

- Use the GitHub issue tracker
- Provide clear reproduction steps
- Include environment information
- Add screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design tokens from XenonOS design system
- Icons from Heroicons and Material Icons
- UI patterns inspired by shadcn/ui
- Built with love using React, TypeScript, and Tailwind CSS

## 📞 Support

For support and questions:
- Check the [documentation](./docs/)
- Review existing [issues](../../issues)
- Contact the development team

---

Built with ❤️ by the XenonOS Team
