import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Flex from '@/components/Flex';
import Spinner from '@/components/Spinner';

const SpinnerPage: FC = () => (
  <ComponentPageLayout componentId="spinner">
    <>
      {/* Sizes */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Sizes</h3>
        <Flex wrap gap={8} align="center">
          <Flex direction="col" align="center" gap={2}>
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Small</span>
          </Flex>
          <Flex direction="col" align="center" gap={2}>
            <Spinner size="md" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Medium</span>
          </Flex>
          <Flex direction="col" align="center" gap={2}>
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Large</span>
          </Flex>
        </Flex>
      </div>

      {/* Inherits Color */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Inherits Color</h3>
        <Flex wrap gap={8} align="center">
          <Flex align="center" gap={2} className="text-primary">
            <Spinner size="md" />
            <span className="text-sm font-bold uppercase">Primary</span>
          </Flex>
          <Flex align="center" gap={2} className="text-destructive">
            <Spinner size="md" />
            <span className="text-sm font-bold uppercase">Destructive</span>
          </Flex>
          <Flex align="center" gap={2} className="text-success">
            <Spinner size="md" />
            <span className="text-sm font-bold uppercase">Success</span>
          </Flex>
          <Flex align="center" gap={2} className="text-muted-foreground">
            <Spinner size="md" />
            <span className="text-sm font-bold uppercase">Muted</span>
          </Flex>
        </Flex>
      </div>

      {/* On Dark Background */}
      <div className="bg-foreground border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-background">On Dark Background</h3>
        <Flex wrap gap={8} align="center" className="text-background">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Flex>
      </div>
    </>
  </ComponentPageLayout>
);

export default SpinnerPage;
