import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Text from '@/components/Text';
import Flex from '@/components/Flex';

const TextPage: FC = () => (
  <ComponentPageLayout componentId="text">
    <>
      {/* Font Families */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Font Families</h3>
        <div className="space-y-6">
          <div>
            <Text family="mono" size="xs" uppercase tracking="widest" color="muted" className="mb-2">family="display"</Text>
            <Text family="display" size="4xl" weight="bold" uppercase tracking="tighter" as="p">
              Space Grotesk
            </Text>
          </div>
          <div>
            <Text family="mono" size="xs" uppercase tracking="widest" color="muted" className="mb-2">family="sans"</Text>
            <Text family="sans" size="4xl" weight="semibold" as="p">
              Inter
            </Text>
          </div>
          <div>
            <Text family="mono" size="xs" uppercase tracking="widest" color="muted" className="mb-2">family="mono"</Text>
            <Text family="mono" size="4xl" weight="bold" as="p">
              JetBrains Mono
            </Text>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Type Scale</h3>
        <div className="space-y-4">
          {([
            { size: '7xl' as const, label: '72px' },
            { size: '6xl' as const, label: '60px' },
            { size: '5xl' as const, label: '48px' },
            { size: '4xl' as const, label: '36px' },
            { size: '3xl' as const, label: '30px' },
            { size: '2xl' as const, label: '24px' },
            { size: 'xl' as const, label: '20px' },
            { size: 'base' as const, label: '16px' },
            { size: 'sm' as const, label: '14px' },
            { size: 'xs' as const, label: '12px' },
          ]).map(({ size, label }) => (
            <Flex key={size} align="baseline" gap={4}>
              <Text family="mono" size="xs" color="primary" uppercase tracking="wider" className="w-20 shrink-0">{label}</Text>
              <Text family="display" size={size} weight="bold" uppercase tracking="tighter" leading="none" as="span">
                Dutchy
              </Text>
            </Flex>
          ))}
        </div>
      </div>

      {/* Weights */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Weights</h3>
        <div className="space-y-3">
          {(['normal', 'medium', 'semibold', 'bold'] as const).map((w) => (
            <Flex key={w} align="baseline" gap={4}>
              <Text family="mono" size="xs" color="muted" uppercase tracking="wider" className="w-24 shrink-0">{w}</Text>
              <Text size="2xl" weight={w} as="span">The quick brown fox jumps over the lazy dog</Text>
            </Flex>
          ))}
        </div>
      </div>

      {/* Tracking */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Tracking (Letter Spacing)</h3>
        <div className="space-y-3">
          {(['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'] as const).map((t) => (
            <Flex key={t} align="baseline" gap={4}>
              <Text family="mono" size="xs" color="muted" uppercase tracking="wider" className="w-24 shrink-0">{t}</Text>
              <Text family="display" size="xl" weight="bold" uppercase tracking={t} as="span">Typography</Text>
            </Flex>
          ))}
        </div>
      </div>

      {/* Common Patterns */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Common Patterns</h3>
        <div className="space-y-8 max-w-2xl">
          <div>
            <Text family="mono" size="xs" color="primary" uppercase tracking="widest" className="mb-2">Display Heading</Text>
            <Text family="display" size="5xl" weight="bold" uppercase tracking="tighter" as="h1">
              Bold Uppercase<br />Tight Tracking
            </Text>
          </div>

          <div>
            <Text family="mono" size="xs" color="primary" uppercase tracking="widest" className="mb-2">Section Heading</Text>
            <Text family="display" size="2xl" weight="bold" uppercase tracking="wide" as="h2">
              Section Headers
            </Text>
          </div>

          <div>
            <Text family="mono" size="xs" color="primary" uppercase tracking="widest" className="mb-2">Lead Paragraph</Text>
            <Text size="xl" color="muted" leading="relaxed">
              Dutch design is characterized by its bold simplicity, structural clarity, and functional beauty.
            </Text>
          </div>

          <div>
            <Text family="mono" size="xs" color="primary" uppercase tracking="widest" className="mb-2">Body Text</Text>
            <Text size="base" leading="relaxed">
              Body text uses Inter at regular weight with relaxed line height for optimal readability. This creates comfortable reading for longer content blocks and ensures the text remains clear and legible.
            </Text>
          </div>

          <div>
            <Text family="mono" size="xs" color="primary" uppercase tracking="widest" className="mb-2">Label</Text>
            <Text family="mono" size="xs" uppercase tracking="widest" color="muted">
              Monospace &bull; Uppercase &bull; Wide Tracking
            </Text>
          </div>
        </div>
      </div>

      {/* Polymorphic Rendering */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Polymorphic (as prop)</h3>
        <div className="space-y-4 max-w-2xl">
          <div className="bg-muted p-4">
            <Text family="mono" size="xs" color="muted" className="mb-1">as="h1"</Text>
            <Text family="display" size="3xl" weight="bold" uppercase tracking="tighter" as="h1">Rendered as h1</Text>
          </div>
          <div className="bg-muted p-4">
            <Text family="mono" size="xs" color="muted" className="mb-1">as="h2"</Text>
            <Text family="display" size="2xl" weight="bold" uppercase as="h2">Rendered as h2</Text>
          </div>
          <div className="bg-muted p-4">
            <Text family="mono" size="xs" color="muted" className="mb-1">as="span" (inline)</Text>
            <p>This paragraph contains <Text family="display" weight="bold" uppercase color="primary" as="span">inline styled text</Text> within it.</p>
          </div>
          <div className="bg-muted p-4">
            <Text family="mono" size="xs" color="muted" className="mb-1">as="label"</Text>
            <Text family="mono" size="sm" weight="bold" uppercase tracking="wider" as="label">Form Field Label</Text>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Colors</h3>
        <div className="space-y-3">
          {(['foreground', 'muted', 'primary', 'destructive', 'success'] as const).map((c) => (
            <Flex key={c} align="center" gap={4}>
              <Text family="mono" size="xs" color="muted" uppercase tracking="wider" className="w-28 shrink-0">{c}</Text>
              <Text family="display" size="xl" weight="bold" uppercase tracking="tight" color={c} as="span">
                Dutchy Design System
              </Text>
            </Flex>
          ))}
          <div className="bg-foreground p-4 mt-4">
            <Flex align="center" gap={4}>
              <Text family="mono" size="xs" uppercase tracking="wider" className="w-28 shrink-0 text-background/60">background</Text>
              <Text family="display" size="xl" weight="bold" uppercase tracking="tight" color="background" as="span">
                Dutchy Design System
              </Text>
            </Flex>
          </div>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default TextPage;
