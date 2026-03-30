import type { FC } from 'react';

const Billing: FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-headline text-on-surface mb-4 syne">Billing</h1>
      <div className="glass-card rounded-xl p-4 sm:p-6">
        <p className="text-on-surface-muted ubuntu">
          Billing management page coming soon.
        </p>
      </div>
    </div>
  );
};

export default Billing;
