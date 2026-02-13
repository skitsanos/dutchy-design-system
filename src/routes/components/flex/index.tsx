import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

const FlexPage: FC = () => (
  <ComponentPageLayout componentId="flex">
    <>
      {/* Direction */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Direction</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Row (default)</p>
            <Flex gap={3}>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">1</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">2</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">3</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Column</p>
            <Flex direction="col" gap={3}>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">1</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">2</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">3</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Row Reverse</p>
            <Flex direction="row-reverse" gap={3}>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">1</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">2</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">3</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Column Reverse</p>
            <Flex direction="col-reverse" gap={3}>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">1</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">2</div>
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">3</div>
            </Flex>
          </div>
        </div>
      </div>

      {/* Alignment */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Alignment</h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">align="start"</p>
            <Flex align="start" gap={3} className="h-24 bg-muted/50 border-2 border-border p-3">
              <div className="bg-foreground text-background px-4 py-2 text-sm font-bold">Short</div>
              <div className="bg-foreground text-background px-4 py-6 text-sm font-bold">Tall</div>
              <div className="bg-foreground text-background px-4 py-3 text-sm font-bold">Mid</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">align="center"</p>
            <Flex align="center" gap={3} className="h-24 bg-muted/50 border-2 border-border p-3">
              <div className="bg-foreground text-background px-4 py-2 text-sm font-bold">Short</div>
              <div className="bg-foreground text-background px-4 py-6 text-sm font-bold">Tall</div>
              <div className="bg-foreground text-background px-4 py-3 text-sm font-bold">Mid</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">align="end"</p>
            <Flex align="end" gap={3} className="h-24 bg-muted/50 border-2 border-border p-3">
              <div className="bg-foreground text-background px-4 py-2 text-sm font-bold">Short</div>
              <div className="bg-foreground text-background px-4 py-6 text-sm font-bold">Tall</div>
              <div className="bg-foreground text-background px-4 py-3 text-sm font-bold">Mid</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">align="stretch"</p>
            <Flex align="stretch" gap={3} className="h-24 bg-muted/50 border-2 border-border p-3">
              <Flex align="center" justify="center" className="bg-foreground text-background px-4 text-sm font-bold">A</Flex>
              <Flex align="center" justify="center" className="bg-foreground text-background px-4 text-sm font-bold">B</Flex>
              <Flex align="center" justify="center" className="bg-foreground text-background px-4 text-sm font-bold">C</Flex>
            </Flex>
          </div>
        </div>
      </div>

      {/* Justify */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Justify</h3>
        <div className="space-y-6">
          {(['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map((j) => (
            <div key={j}>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">justify="{j}"</p>
              <Flex justify={j} gap={3} className="bg-muted/50 border-2 border-border p-3">
                <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">A</div>
                <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">B</div>
                <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">C</div>
              </Flex>
            </div>
          ))}
        </div>
      </div>

      {/* Gap */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Gap</h3>
        <div className="space-y-6">
          {([0, 1, 2, 4, 6, 8] as const).map((g) => (
            <div key={g}>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">gap={`{${g}}`}</p>
              <Flex gap={g}>
                <div className="bg-foreground text-background w-12 h-12 flex items-center justify-center text-sm font-bold">{g}</div>
                <div className="bg-foreground text-background w-12 h-12 flex items-center justify-center text-sm font-bold">{g}</div>
                <div className="bg-foreground text-background w-12 h-12 flex items-center justify-center text-sm font-bold">{g}</div>
                <div className="bg-foreground text-background w-12 h-12 flex items-center justify-center text-sm font-bold">{g}</div>
              </Flex>
            </div>
          ))}
        </div>
      </div>

      {/* Wrap */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Wrap</h3>
        <Flex wrap gap={3}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="bg-primary text-primary-foreground px-6 py-3 text-sm font-bold uppercase">
              Item {i + 1}
            </div>
          ))}
        </Flex>
      </div>

      {/* Polymorphic "as" */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Polymorphic Tag</h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">as="nav"</p>
            <Flex as="nav" gap={4} className="bg-muted/50 border-2 border-border p-4">
              <a href="#flex" className="text-sm font-bold uppercase hover:text-primary transition-colors">Home</a>
              <a href="#flex" className="text-sm font-bold uppercase hover:text-primary transition-colors">About</a>
              <a href="#flex" className="text-sm font-bold uppercase hover:text-primary transition-colors">Contact</a>
            </Flex>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">as="ul"</p>
            <Flex as="ul" direction="col" gap={2} className="bg-muted/50 border-2 border-border p-4 list-none">
              <li className="text-sm">List item one</li>
              <li className="text-sm">List item two</li>
              <li className="text-sm">List item three</li>
            </Flex>
          </div>
        </div>
      </div>

      {/* Real-World Patterns */}
      <div className="bg-background border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Common Patterns</h3>
        <div className="space-y-8">
          {/* Header bar */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Header Bar</p>
            <Flex align="center" justify="between" className="bg-foreground text-background px-6 py-4">
              <span className="font-display font-bold uppercase tracking-tight text-lg">Logo</span>
              <Flex gap={6}>
                <a href="#flex" className="text-sm font-bold uppercase hover:text-primary transition-colors">Products</a>
                <a href="#flex" className="text-sm font-bold uppercase hover:text-primary transition-colors">Pricing</a>
                <a href="#flex" className="text-sm font-bold uppercase hover:text-primary transition-colors">Docs</a>
              </Flex>
              <Button size="sm">Sign Up</Button>
            </Flex>
          </div>
          {/* Media object */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Media Object</p>
            <Flex gap={4} align="start" className="border-2 border-border p-4">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0">
                <Icon name="bell" size="lg" className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm">New Notification</p>
                <p className="text-sm text-muted-foreground mt-1">You have 3 unread messages in your inbox. Check them before they expire.</p>
              </div>
            </Flex>
          </div>
          {/* Centered content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Centered Content</p>
            <Flex direction="col" align="center" justify="center" className="h-48 bg-muted/50 border-2 border-dashed border-border">
              <Icon name="upload" size="lg" className="text-muted-foreground mb-3" />
              <p className="font-bold text-sm uppercase">Drop files here</p>
              <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
            </Flex>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="mt-8 bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">API</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted border-b-2 border-border">
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Prop</th>
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Type</th>
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono font-bold text-xs">direction</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">"row" | "col" | "row-reverse" | "col-reverse"</td><td className="px-4 py-3 font-mono text-xs">"row"</td></tr>
              <tr className="bg-muted/30"><td className="px-4 py-3 font-mono font-bold text-xs">align</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">"start" | "center" | "end" | "stretch" | "baseline"</td><td className="px-4 py-3 font-mono text-xs">—</td></tr>
              <tr><td className="px-4 py-3 font-mono font-bold text-xs">justify</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">"start" | "center" | "end" | "between" | "around" | "evenly"</td><td className="px-4 py-3 font-mono text-xs">—</td></tr>
              <tr className="bg-muted/30"><td className="px-4 py-3 font-mono font-bold text-xs">wrap</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs">false</td></tr>
              <tr><td className="px-4 py-3 font-mono font-bold text-xs">gap</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16</td><td className="px-4 py-3 font-mono text-xs">—</td></tr>
              <tr className="bg-muted/30"><td className="px-4 py-3 font-mono font-bold text-xs">as</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">ElementType</td><td className="px-4 py-3 font-mono text-xs">"div"</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default FlexPage;
