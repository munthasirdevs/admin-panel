import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { AppLayout } from '@/components/layout';
import { Spinner } from '@/components/shared';

// Lazy load feature pages
const Dashboard = lazy(() => import('@/features/dashboard'));
const Clients = lazy(() => import('@/features/clients'));
const Projects = lazy(() => import('@/features/projects'));
const Tasks = lazy(() => import('@/features/tasks'));
const Billing = lazy(() => import('@/features/billing'));
const Reports = lazy(() => import('@/features/reports'));
const Settings = lazy(() => import('@/features/settings'));
const Profile = lazy(() => import('@/features/profile'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-surface">
    <Spinner size="lg" color="text-primary" />
  </div>
);

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen bg-surface">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            {/* Catch-all route for 404 */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-headline text-on-surface mb-4 syne">404</h1>
                    <p className="text-on-surface-muted ubuntu">Page not found</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Suspense>
    </AppLayout>
  );
}

export default App;
