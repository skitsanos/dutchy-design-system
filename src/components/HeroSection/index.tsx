import type { FC, ReactNode } from 'react';

interface HeroSectionProps {
  tagline?: string;
  title: ReactNode;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  visual?: ReactNode;
}

const HeroSection: FC<HeroSectionProps> = ({
  tagline,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
}) => {
  return (
    <section className="py-16 md:py-24 border-b-8 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {tagline && (
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6">
                {tagline}
              </p>
            )}

            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              {title}
            </h1>

            {description && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors duration-150"
                  >
                    {primaryCta.text}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="border-2 border-foreground px-8 py-3 font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors duration-150"
                  >
                    {secondaryCta.text}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Visual */}
          {visual && (
            <div>
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
