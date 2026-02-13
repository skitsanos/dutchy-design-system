import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Modal from '@/components/Modal';
import Drawer from '@/components/Drawer';
import Input from '@/components/Input';

const ModalsPage: FC = () => (
  <ComponentPageLayout componentId="modals">
    <>
      <Flex wrap gap={4} className="mb-8">
        <Button data-open-modal="confirm-modal">Confirmation Modal</Button>
        <Button variant="secondary" data-open-modal="content-modal">Content Modal</Button>
        <Button variant="outline" data-open-modal="drawer">Right Drawer</Button>
      </Flex>

      {/* Confirmation Modal */}
      <Modal
        id="confirm-modal"
        title="Confirm Action"
        footer={
          <>
            <Button variant="ghost" data-close-modal="" size="sm" className="px-6 border-2 border-border">Cancel</Button>
            <Button variant="destructive" data-close-modal="" size="sm" className="px-6">Delete</Button>
          </>
        }
      >
        <p className="text-muted-foreground text-sm">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
      </Modal>

      {/* Content Modal */}
      <Modal
        id="content-modal"
        title="Edit Profile"
        maxWidth="max-w-lg"
        footer={
          <>
            <Button variant="ghost" data-close-modal="" size="sm" className="px-6 border-2 border-border">Cancel</Button>
            <Button data-close-modal="" size="sm" className="px-6">Save Changes</Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Name" type="text" defaultValue="John Doe" />
          <Input label="Email" type="email" defaultValue="john@example.com" />
        </div>
      </Modal>

      {/* Drawer */}
      <Drawer id="drawer" title="Details">
        <div className="space-y-4">
          <div>
            <p className="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Status</p>
            <p className="text-sm mt-1">Active</p>
          </div>
          <div>
            <p className="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Created</p>
            <p className="text-sm mt-1">January 15, 2025</p>
          </div>
          <div>
            <p className="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Description</p>
            <p className="text-sm text-muted-foreground mt-1">Detailed information about the selected item goes here.</p>
          </div>
        </div>
      </Drawer>
    </>
  </ComponentPageLayout>
);

export default ModalsPage;
