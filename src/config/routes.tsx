import { lazy } from 'react';

// Lazy load feature components
const Dashboard = lazy(() => import('@/features/dashboard'));
const Clients = lazy(() => import('@/features/clients'));
const Projects = lazy(() => import('@/features/projects'));
const Tasks = lazy(() => import('@/features/tasks'));
const Billing = lazy(() => import('@/features/billing'));
const Reports = lazy(() => import('@/features/reports'));
const Settings = lazy(() => import('@/features/settings'));
const Profile = lazy(() => import('@/features/profile'));

export const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/clients',
    element: <Clients />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
  {
    path: '/billing',
    element: <Billing />,
  },
  {
    path: '/reports',
    element: <Reports />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-headline text-on-surface mb-4 syne">404</h1>
          <p className="text-on-surface-muted ubuntu">Page not found</p>
        </div>
      </div>
    ),
  },
];

export default routes;
