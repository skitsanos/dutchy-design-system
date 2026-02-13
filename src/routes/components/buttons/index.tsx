import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';

const ButtonsPage: FC = () => (
  <ComponentPageLayout componentId="buttons">
    <>
      {/* Button Variants */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Variants</h3>
        <Flex wrap gap={4} align="center">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="secondary">Dark</Button>
          <Button variant="destructive">Destructive</Button>
        </Flex>
      </div>

      {/* Button Sizes */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Sizes</h3>
        <Flex wrap gap={4} align="center">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </Flex>
      </div>

      {/* Loading State */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Loading</h3>
        <Flex wrap gap={4} align="center">
          <Button loading>Submitting...</Button>
          <Button variant="secondary" loading>Processing</Button>
          <Button variant="outline" loading>Loading</Button>
          <Button variant="destructive" loading>Deleting</Button>
        </Flex>
      </div>

      {/* Button with Icons */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">With Icons</h3>
        <Flex wrap gap={4} align="center">
          <Button>
            <Icon name="arrow-right" size="sm" />
            Continue
          </Button>
          <Button variant="secondary">
            <Icon name="download" size="sm" />
            Download
          </Button>
          <Button variant="outline">
            <Icon name="github" size="sm" />
            GitHub
          </Button>
          <Button icon>
            <Icon name="plus" size="md" />
          </Button>
        </Flex>
      </div>
    </>
  </ComponentPageLayout>
);

export default ButtonsPage;
