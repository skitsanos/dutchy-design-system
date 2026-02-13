import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import EmptyState from '@/components/EmptyState';

const EmptyStatePage: FC = () => (
  <ComponentPageLayout componentId="emptystate">
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Search empty */}
        <div className="bg-background border-4 border-border">
          <EmptyState
            icon="search"
            title="No results found"
            description="We couldn't find anything matching your search. Try adjusting your filters."
            actionText="Clear Search"
          />
        </div>

        {/* Dashboard empty */}
        <div className="bg-background border-4 border-dashed border-border">
          <div className="flex flex-col items-center justify-center py-16 text-center px-4">
            <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="dashboard" size="lg" className="text-primary w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">Set up your dashboard</h3>
            <p className="text-muted-foreground max-w-md mb-8">Your dashboard is empty. Add widgets to monitor key metrics.</p>
            <Flex gap={4}>
              <Button size="sm">Add Widget</Button>
              <Button variant="outline" size="sm">Browse Templates</Button>
            </Flex>
          </div>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default EmptyStatePage;
