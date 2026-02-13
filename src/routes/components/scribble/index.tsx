import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Scribble from '@/components/Scribble';

const ScribblePage: FC = () => (
  <ComponentPageLayout componentId="scribble">
    <>
      {/* Signature Pad */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Signature Pad</h3>
        <div className="max-w-2xl">
          <Scribble
            width={600}
            height={200}
            label="Signature"
            placeholder="Sign here"
            name="signature"
          />
        </div>
      </div>

      {/* Sketch Pad */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Sketch Pad</h3>
        <div className="max-w-2xl">
          <Scribble
            width={600}
            height={300}
            lineWidth={3}
            label="Sketch Pad"
            placeholder="Sketch something"
          />
        </div>
      </div>

      {/* Colored Ink */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Colored Ink</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Scribble
            width={400}
            height={150}
            lineColor="hsl(25 95% 53%)"
            label="Primary"
            placeholder="Orange ink"
          />
          <Scribble
            width={400}
            height={150}
            lineColor="hsl(0 84% 60%)"
            label="Destructive"
            placeholder="Red ink"
          />
          <Scribble
            width={400}
            height={150}
            lineColor="hsl(142 76% 36%)"
            label="Success"
            placeholder="Green ink"
          />
        </div>
      </div>

      {/* Export Preview */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Export Preview</h3>
        <div className="max-w-2xl">
          <Scribble
            width={600}
            height={200}
            label="Draw & Export"
            placeholder="Draw here to see the exported PNG below"
            name="export-demo"
            showPreview
          />
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default ScribblePage;
