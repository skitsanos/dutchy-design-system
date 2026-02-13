import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import StatsGrid from '@/components/StatsGrid';

const StatsPage: FC = () => (
  <ComponentPageLayout componentId="stats">
    <>
      {/* Stats Grid with Trend Indicators */}
      <div className="mb-8">
        <StatsGrid
          columns={4}
          stats={[
            {
              label: 'Revenue',
              value: '$48.2K',
              trend: { value: '+12.5%', direction: 'up', sentiment: 'positive' },
            },
            {
              label: 'Orders',
              value: '1,429',
              trend: { value: '+4.3%', direction: 'up', sentiment: 'positive' },
            },
            {
              label: 'Conversion',
              value: '3.24%',
              trend: { value: '-1.8%', direction: 'down', sentiment: 'negative' },
            },
            {
              label: 'Avg. Order',
              value: '$33.80',
            },
          ]}
        />
      </div>

      {/* Compact Stats Row */}
      <StatsGrid
        layout="compact"
        stats={[
          { label: 'Users', value: '2,847' },
          { label: 'Views', value: '14,209' },
          { label: 'Uptime', value: '89%' },
          { label: 'Avg Load', value: '3.2s' },
        ]}
      />
    </>
  </ComponentPageLayout>
);

export default StatsPage;
