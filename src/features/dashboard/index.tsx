import type { FC } from 'react';

interface DashboardProps {
  // Add props when implementing
}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-headline text-on-surface mb-4 syne">Dashboard</h1>
      <div className="glass-card rounded-xl p-4 sm:p-6">
        <p className="text-on-surface-muted ubuntu">
          Dashboard content coming soon. This is a placeholder for the main dashboard page.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
