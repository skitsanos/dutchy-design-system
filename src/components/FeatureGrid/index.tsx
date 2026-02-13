import type { FC, ReactNode } from 'react';
import Card, { CardTitle, CardDescription } from '@/components/Card';

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

const FeatureGrid: FC<FeatureGridProps> = ({
  features,
  columns = 3,
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-6`}>
      {features.map((feature, index) => (
        <Card key={index} variant="accent">
          {feature.icon && (
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6">
              <div className="text-primary-foreground">
                {feature.icon}
              </div>
            </div>
          )}
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
