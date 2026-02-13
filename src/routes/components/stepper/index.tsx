import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Stepper from '@/components/Stepper';

const steps = ['Account', 'Details', 'Review', 'Confirm'];

const StepperPage: FC = () => (
  <ComponentPageLayout componentId="stepper">
    <>
      {/* Horizontal Stepper */}
      <div className="bg-background border-4 border-border p-8 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Horizontal</h3>
        <Stepper steps={steps} currentStep={2} />
      </div>

      {/* Progress Bar Variant */}
      <div className="bg-background border-4 border-border p-8 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Progress Bar</h3>
        <Stepper steps={steps} currentStep={2} variant="progress" />
      </div>

      {/* Compact */}
      <div className="bg-background border-4 border-border p-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Compact</h3>
        <Stepper steps={['1', '2', '3', '4', '5']} currentStep={3} variant="compact" />
      </div>
    </>
  </ComponentPageLayout>
);

export default StepperPage;
