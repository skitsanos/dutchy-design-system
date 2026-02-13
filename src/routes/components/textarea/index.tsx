import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Textarea from '@/components/Textarea';

const TextareaPage: FC = () => (
  <ComponentPageLayout componentId="textarea">
    <>
      {/* Basic */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Basic</h3>
        <div className="max-w-lg space-y-6">
          <Textarea label="Message" placeholder="Type your message here..." />
          <Textarea label="Description" placeholder="Add a description..." helpText="Briefly describe the item." />
        </div>
      </div>

      {/* Resize Options */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Resize Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textarea label="Vertical (default)" placeholder="Drag the bottom edge..." resize="vertical" rows={3} />
          <Textarea label="Horizontal" placeholder="Drag the right edge..." resize="horizontal" rows={3} />
          <Textarea label="Both" placeholder="Drag any edge..." resize="both" rows={3} />
          <Textarea label="None" placeholder="Cannot be resized." resize="none" rows={3} />
        </div>
      </div>

      {/* Character Count */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Character Count</h3>
        <div className="max-w-lg space-y-6">
          <Textarea
            label="Bio"
            placeholder="Tell us about yourself..."
            showCount
            maxLength={200}
            rows={3}
            helpText="Keep it short and sweet."
          />
          <Textarea
            label="Notes"
            placeholder="Add any notes..."
            showCount
            rows={3}
          />
        </div>
      </div>

      {/* Validation States */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Validation States</h3>
        <div className="max-w-lg space-y-6">
          <Textarea label="Feedback" placeholder="Required field" required error="This field is required." rows={3} />
          <Textarea label="Comments" placeholder="Disabled textarea" disabled rows={3} />
          <Textarea label="Read-only" value="This content cannot be changed." readOnly rows={3} />
        </div>
      </div>

      {/* Without Label */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Without Label</h3>
        <div className="max-w-lg">
          <Textarea placeholder="A standalone textarea without a label..." rows={4} resize="none" />
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default TextareaPage;
