import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Flex from '@/components/Flex';
import Skeleton from '@/components/Skeleton';

const SkeletonPage: FC = () => (
  <ComponentPageLayout componentId="skeleton">
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card skeleton */}
        <div className="bg-background border-4 border-border p-6 space-y-4">
          <h3 className="font-display font-bold uppercase text-xs tracking-wider mb-4 text-muted-foreground">Card Skeleton</h3>
          <Skeleton variant="title" />
          <Skeleton variant="text" count={2} />
          <div className="animate-skeleton h-10 w-32 mt-4" />
        </div>

        {/* List skeleton */}
        <div className="bg-background border-4 border-border p-6">
          <h3 className="font-display font-bold uppercase text-xs tracking-wider mb-4 text-muted-foreground">List Skeleton</h3>
          <div className="space-y-3">
            <Flex align="center" gap={3}>
              <Skeleton variant="avatar" className="shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="animate-skeleton h-3 w-1/3" />
                <div className="animate-skeleton h-2 w-2/3" />
              </div>
            </Flex>
            <Flex align="center" gap={3}>
              <Skeleton variant="avatar" className="shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="animate-skeleton h-3 w-1/4" />
                <div className="animate-skeleton h-2 w-1/2" />
              </div>
            </Flex>
            <Flex align="center" gap={3}>
              <Skeleton variant="avatar" className="shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="animate-skeleton h-3 w-2/5" />
                <div className="animate-skeleton h-2 w-3/5" />
              </div>
            </Flex>
          </div>
        </div>

        {/* Content skeleton */}
        <div className="bg-background border-4 border-border p-6">
          <h3 className="font-display font-bold uppercase text-xs tracking-wider mb-4 text-muted-foreground">Content Skeleton</h3>
          <div className="space-y-4">
            <Skeleton variant="title" className="w-1/2" />
            <Skeleton variant="text" count={3} />
            <div className="animate-skeleton h-24 w-full" />
          </div>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default SkeletonPage;
