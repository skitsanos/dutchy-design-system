import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Tooltip from '@/components/Tooltip';

const TooltipsPage: FC = () => (
  <ComponentPageLayout componentId="tooltips">
    <>
      {/* Position Variants */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Position Variants</h3>
        <Flex wrap gap={6} align="center" justify="center" className="py-12">
          <Tooltip text="Tooltip on top">
            <Button size="sm" className="px-5 py-2.5">
              Top
            </Button>
          </Tooltip>
          <Tooltip text="Tooltip on bottom" position="bottom">
            <Button variant="outline" size="sm" className="px-5 py-2.5 border-border hover:bg-secondary/80">
              Bottom
            </Button>
          </Tooltip>
          <Tooltip text="Tooltip on left" position="left">
            <Button variant="outline" size="sm" className="px-5 py-2.5 border-border hover:border-primary">
              Left
            </Button>
          </Tooltip>
          <Tooltip text="Tooltip on right" position="right">
            <Button variant="outline" size="sm" className="px-5 py-2.5 border-border hover:border-primary">
              Right
            </Button>
          </Tooltip>
        </Flex>
      </div>

      {/* Icons & Text */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Icons &amp; Text</h3>
        <Flex wrap align="center" gap={8}>
          <Tooltip text="Edit item">
            <button className="p-2 hover:text-primary transition-colors">
              <Icon name="edit" />
            </button>
          </Tooltip>
          <Tooltip text="Delete item" position="bottom">
            <button className="p-2 hover:text-destructive transition-colors">
              <Icon name="trash" />
            </button>
          </Tooltip>
          <p className="text-sm">
            Max upload:
            <Tooltip text="5 megabytes">
              <span tabIndex={0} className="underline decoration-dotted font-bold"> 5 MB</span>
            </Tooltip>
          </p>
          <label className="text-sm font-bold uppercase tracking-wide">
            Email
            <Tooltip text="This field is required">
              <span tabIndex={0} className="text-destructive"> *</span>
            </Tooltip>
          </label>
        </Flex>
      </div>
    </>
  </ComponentPageLayout>
);

export default TooltipsPage;
