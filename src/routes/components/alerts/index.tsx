import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Alert from '@/components/Alert';

const AlertsPage: FC = () => (
  <ComponentPageLayout componentId="alerts">
    <>
      <div className="space-y-4 max-w-2xl">
        <Alert variant="info" title="Information">
          This is an informational message to guide users.
        </Alert>

        <Alert variant="success" title="Success">
          Your changes have been saved successfully.
        </Alert>

        <Alert variant="warning" title="Warning">
          Please review your input before proceeding.
        </Alert>

        <Alert variant="error" title="Error">
          Something went wrong. Please try again.
        </Alert>

        {/* Full-Width Banner */}
        <div className="mt-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Full-Width Banner</h3>
          <div className="bg-primary text-primary-foreground px-4 py-3">
            <Flex align="center" justify="between">
              <Flex align="center" gap={3}>
                <Icon name="info" size="md" className="shrink-0" />
                <p className="text-sm font-bold uppercase tracking-wide">New version available — upgrade now for the latest features.</p>
              </Flex>
              <Button variant="secondary" size="sm" className="shrink-0">Upgrade</Button>
            </Flex>
          </div>
        </div>

        {/* Dismissible Alert */}
        <div className="mt-4">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Dismissible</h3>
          <Alert variant="info" title="Heads up!" dismissible>
            You can dismiss this alert when you're done reading.
          </Alert>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default AlertsPage;
