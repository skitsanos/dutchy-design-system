import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import { Toast, ToastContainer } from '@/components/Toast';

const ToastsPage: FC = () => (
  <ComponentPageLayout componentId="toasts">
    <>
      {/* Interactive Triggers */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Interactive</h3>
        <Flex wrap gap={4}>
          <Button data-toast-trigger data-toast-variant="success" data-toast-title="Saved" data-toast-message="Your changes have been saved." size="sm" className="px-6">Show Success</Button>
          <Button variant="destructive" data-toast-trigger data-toast-variant="error" data-toast-title="Error" data-toast-message="Something went wrong. Try again." size="sm" className="px-6">Show Error</Button>
          <Button variant="outline" data-toast-trigger data-toast-variant="info" data-toast-title="Heads up" data-toast-message="A new version is available." size="sm" className="px-6">Show Info</Button>
          <Button variant="secondary" data-toast-trigger data-toast-variant="warning" data-toast-title="Warning" data-toast-message="Your session will expire soon." size="sm" className="px-6">Show Warning</Button>
        </Flex>
      </div>

      {/* Positions */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Positions</h3>
        <div className="grid grid-cols-2 gap-4 max-w-sm">
          <Button variant="outline" size="sm" data-toast-trigger data-toast-variant="info" data-toast-message="Top left toast" data-toast-position="top-left">Top Left</Button>
          <Button variant="outline" size="sm" data-toast-trigger data-toast-variant="info" data-toast-message="Top right toast" data-toast-position="top-right">Top Right</Button>
          <Button variant="outline" size="sm" data-toast-trigger data-toast-variant="info" data-toast-message="Bottom left toast" data-toast-position="bottom-left">Bottom Left</Button>
          <Button variant="outline" size="sm" data-toast-trigger data-toast-variant="info" data-toast-message="Bottom right toast" data-toast-position="bottom-right">Bottom Right</Button>
        </div>
      </div>

      {/* Static Variants */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Variants</h3>
        <div className="space-y-4 max-w-md">
          <Toast variant="success" title="Saved" message="Your changes have been saved." />
          <Toast variant="error" title="Error" message="Failed to save. Please try again." />
          <Toast variant="info" title="Heads up" message="A new version is available." />
          <Toast variant="warning" title="Warning" message="Your session will expire soon." />
        </div>
      </div>

      <ToastContainer position="top-right" />
      <ToastContainer position="top-left" />
      <ToastContainer position="bottom-right" />
      <ToastContainer position="bottom-left" />
    </>
  </ComponentPageLayout>
);

export default ToastsPage;
