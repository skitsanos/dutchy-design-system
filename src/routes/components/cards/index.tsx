import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import Image from '@/components/Image';

const CardsPage: FC = () => (
  <ComponentPageLayout componentId="cards">
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Card */}
        <Card variant="bordered" padding="sm">
          <h3 className="font-display font-bold uppercase mb-2">Basic Card</h3>
          <p className="text-muted-foreground text-sm mb-4">A simple card with border. Perfect for containing any content with clear boundaries.</p>
          <a href="#" className="text-primary font-bold uppercase text-sm hover:underline">Learn more</a>
        </Card>

        {/* Feature Card */}
        <Card variant="accent" padding="sm">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
            <Icon name="layers" size="lg" className="text-primary" />
          </div>
          <h3 className="font-display font-bold uppercase mb-2">Feature Card</h3>
          <p className="text-muted-foreground text-sm">Highlight key features with an icon and accent border.</p>
        </Card>

        {/* Dark Card */}
        <Card variant="dark" padding="sm">
          <h3 className="font-display font-bold uppercase mb-2 text-primary">Dark Card</h3>
          <p className="text-background/70 text-sm mb-4">Inverted colors for emphasis and visual variety in layouts.</p>
          <a href="#" className="text-primary font-bold uppercase text-sm hover:underline">Explore</a>
        </Card>

        {/* Stats Card */}
        <Card variant="dark" padding="md">
          <p className="font-display text-5xl font-bold text-primary mb-2">50+</p>
          <p className="text-background/60 text-sm uppercase tracking-wider">Components</p>
        </Card>

        {/* Interactive Card */}
        <a href="#" className="bg-background border-4 border-border p-6 hover:border-primary transition-colors group block">
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Interactive</span>
            <Icon name="arrow-right" size="md" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="font-display font-bold uppercase mb-2 group-hover:text-primary transition-colors">Clickable Card</h3>
          <p className="text-muted-foreground text-sm">Entire card is interactive with hover effects.</p>
        </a>

        {/* CTA Card */}
        <Card variant="primary" padding="sm">
          <h3 className="font-display font-bold uppercase mb-2">Get Started</h3>
          <p className="text-primary-foreground/80 text-sm mb-4">Ready to build something bold?</p>
          <Button variant="secondary" size="sm">
            Start Now
          </Button>
        </Card>
      </div>

      {/* Image Cards */}
      <div className="mt-8 bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Image Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vertical Image Card */}
          <Card variant="bordered" padding="none">
            <Image src="https://picsum.photos/seed/card-img1/400/250" alt="Mountain landscape" height="h-48" />
            <div className="p-5 border-t-2 border-border">
              <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-wider">Travel</span>
              <h4 className="font-display font-bold uppercase mt-1 mb-2">Mountain Trails</h4>
              <p className="text-sm text-muted-foreground mb-4">Explore scenic routes through alpine landscapes and hidden valleys.</p>
              <a href="#" className="text-primary font-bold uppercase text-sm hover:underline inline-flex items-center gap-1">
                Read more
                <Icon name="arrow-right" size="sm" />
              </a>
            </div>
          </Card>

          {/* Image Card with Overlay Badge */}
          <Card variant="bordered" padding="none">
            <div className="relative">
              <Image src="https://picsum.photos/seed/card-img2/400/250" alt="City skyline" height="h-48" />
              <Badge variant="primary" className="absolute top-3 left-3">
                New
              </Badge>
            </div>
            <div className="p-5 border-t-2 border-border">
              <h4 className="font-display font-bold uppercase mb-2">Urban Design</h4>
              <p className="text-sm text-muted-foreground mb-4">Modern cities shaped by functional aesthetics and bold vision.</p>
              <Flex gap={2}>
                <Badge variant="muted">Design</Badge>
                <Badge variant="muted">Urban</Badge>
              </Flex>
            </div>
          </Card>

          {/* Image Card with Footer Actions */}
          <Card variant="bordered" padding="none" className="flex flex-col">
            <Image src="https://picsum.photos/seed/card-img3/400/250" alt="Workshop" height="h-48" />
            <div className="p-5 border-t-2 border-border flex-grow">
              <h4 className="font-display font-bold uppercase mb-2">Craft Workshop</h4>
              <p className="text-sm text-muted-foreground">Hands-on sessions exploring traditional and modern craft techniques.</p>
            </div>
            <Flex align="center" justify="between" className="px-5 py-4 border-t border-border">
              <span className="font-mono text-xs text-muted-foreground uppercase">Jan 15, 2026</span>
              <Button size="sm" className="text-xs">
                Register
              </Button>
            </Flex>
          </Card>
        </div>

        {/* Horizontal Image Card */}
        <Card variant="bordered" padding="none" className="mt-6 grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src="https://picsum.photos/seed/card-horiz/400/300" alt="Exhibition" height="h-full" className="min-h-[200px]" />
          </div>
          <Flex direction="col" justify="center" className="md:col-span-8 p-6 md:p-8 border-t-2 md:border-t-0 md:border-l-2 border-border">
            <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Exhibition</span>
            <h4 className="font-display text-xl font-bold uppercase mb-3">Dutch Masters Revisited</h4>
            <p className="text-sm text-muted-foreground mb-4">A contemporary take on classical Dutch art, blending centuries of tradition with bold modern forms.</p>
            <div>
              <Button>
                View Details
                <Icon name="arrow-right" size="sm" />
              </Button>
            </div>
          </Flex>
        </Card>
      </div>
    </>
  </ComponentPageLayout>
);

export default CardsPage;
