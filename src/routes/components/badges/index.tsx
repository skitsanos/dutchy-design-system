import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Flex from '@/components/Flex';
import Badge from '@/components/Badge';

const BadgesPage: FC = () => (
  <ComponentPageLayout componentId="badges">
    <>
      {/* Variants */}
      <div className="bg-background border-4 border-border p-8 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Variants</h3>
        <Flex wrap gap={4}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="default">Dark</Badge>
          <Badge variant="muted">Muted</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="outline">Outline</Badge>
        </Flex>
      </div>

      {/* Closable */}
      <div className="bg-background border-4 border-border p-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Closable Tags</h3>
        <Flex wrap gap={4} className="id-closable-badges">
          <Badge variant="primary" closable>Design</Badge>
          <Badge variant="default" closable>Frontend</Badge>
          <Badge variant="muted" closable>Tailwind</Badge>
          <Badge variant="destructive" closable>Deprecated</Badge>
          <Badge variant="outline" closable>Open Source</Badge>
        </Flex>
      </div>
    </>
  </ComponentPageLayout>
);

export default BadgesPage;
