import type { FC } from 'react';
import Icon from '@/components/Icon';
import Progress from '@/components/Progress';
import Flex from '@/components/Flex';

interface StepperProps {
  steps: string[];
  currentStep: number;
  variant?: 'standard' | 'progress' | 'compact';
  className?: string;
}

const Stepper: FC<StepperProps> = ({
  steps,
  currentStep,
  variant = 'standard',
  className = '',
}) => {
  const total = steps.length;
  const percent = Math.round(((currentStep - 1) / (total - 1)) * 100);

  if (variant === 'progress') {
    return (
      <div className={className}>
        <Flex justify="between" className="mb-2">
          <span className="text-sm font-bold uppercase tracking-wide">
            Step {currentStep} of {total}
          </span>
          <span className="text-sm text-muted-foreground">{percent}%</span>
        </Flex>
        <Progress value={percent} size="md" />
        <Flex justify="between" className="mt-2">
          {steps.map((label, index) => {
            const isCurrent = index + 1 === currentStep;
            return (
              <span
                key={index}
                className={`text-xs uppercase tracking-wider ${
                  isCurrent ? 'font-bold' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            );
          })}
        </Flex>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <nav aria-label="Progress" className={className}>
        <Flex align="center" gap={2}>
          {steps.map((_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <Flex key={index} align="center" gap={2}>
                <div
                  className={`w-8 h-8 flex items-center justify-center font-bold text-xs ${
                    isCompleted
                      ? 'bg-primary text-primary-foreground'
                      : isCurrent
                        ? 'border-4 border-primary text-primary'
                        : 'border-2 border-border text-muted-foreground'
                  }`}
                >
                  {stepNumber}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 ${
                      stepNumber < currentStep ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                )}
              </Flex>
            );
          })}
        </Flex>
      </nav>
    );
  }

  // Standard variant
  return (
    <div
      className={`flex items-start ${className}`}
      data-stepper=""
      data-current-step={currentStep}
    >
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        const isUpcoming = stepNumber > currentStep;

        const circleClass = isCompleted || isCurrent
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground';

        return (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
            data-step={index}
          >
            {index > 0 && (
              <div
                className={`absolute top-5 right-1/2 w-full h-0.5 -z-10 ${
                  isCompleted || isCurrent ? 'bg-primary' : 'bg-border'
                }`}
              />
            )}

            <div
              data-step-circle=""
              className={`w-10 h-10 flex items-center justify-center font-bold text-sm ${circleClass}`}
            >
              {isCompleted ? (
                <Icon name="check" size="sm" />
              ) : (
                stepNumber
              )}
            </div>

            <span
              className={`mt-2 text-xs font-bold uppercase tracking-wider text-center ${
                isUpcoming ? 'text-muted-foreground' : 'text-foreground'
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
