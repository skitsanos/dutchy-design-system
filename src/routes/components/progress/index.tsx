import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Progress from '@/components/Progress';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';

const ProgressPage: FC = () => (
  <ComponentPageLayout componentId="progress">
    <>
      {/* Sizes */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Sizes</h3>
        <div className="space-y-6 max-w-lg">
          <Progress value={60} size="sm" label="Small" showValue />
          <Progress value={60} size="md" label="Medium" showValue />
          <Progress value={60} size="lg" label="Large" showValue />
        </div>
      </div>

      {/* Variants */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Variants</h3>
        <div className="space-y-6 max-w-lg">
          <Progress value={75} variant="primary" label="Primary" showValue />
          <Progress value={100} variant="success" label="Success" showValue />
          <Progress value={30} variant="destructive" label="Destructive" showValue />
          <Progress value={50} variant="foreground" label="Foreground" showValue />
        </div>
      </div>

      {/* Without Labels */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Minimal</h3>
        <div className="space-y-4 max-w-lg">
          <Progress value={45} />
          <Progress value={80} variant="success" />
          <Progress value={15} variant="destructive" />
        </div>
      </div>

      {/* File Upload Pattern */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">File Upload Pattern</h3>
        <div className="space-y-4 max-w-lg">
          <Flex align="center" gap={4} className="p-3 border-2 border-border">
            <Icon name="file" className="text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold block truncate">report-q4-2025.pdf</span>
              <Progress value={75} size="sm" className="mt-1" />
            </div>
            <span className="text-xs text-muted-foreground font-mono flex-shrink-0">75%</span>
          </Flex>
          <Flex align="center" gap={4} className="p-3 border-2 border-border">
            <Icon name="file" className="text-success flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold block truncate">photo.jpg</span>
              <Progress value={100} size="sm" variant="success" className="mt-1" />
            </div>
            <Icon name="check" className="text-success flex-shrink-0" />
          </Flex>
          <Flex align="center" gap={4} className="p-3 border-2 border-border">
            <Icon name="file" className="text-destructive flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold block truncate">backup.zip</span>
              <Progress value={40} size="sm" variant="destructive" className="mt-1" />
            </div>
            <span className="text-xs text-destructive font-bold flex-shrink-0">Failed</span>
          </Flex>
        </div>
      </div>

      {/* Custom Max */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Steps Progress</h3>
        <div className="space-y-6 max-w-lg">
          <Progress value={2} max={5} size="lg" label="Step 2 of 5" showValue />
          <Progress value={4} max={4} size="lg" variant="success" label="Complete" showValue />
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default ProgressPage;
