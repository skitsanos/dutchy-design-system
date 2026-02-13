import type { FC } from 'react';
import Icon from '@/components/Icon';

interface ScribbleProps {
  width?: number;
  height?: number;
  lineColor?: string;
  lineWidth?: number;
  name?: string;
  label?: string;
  placeholder?: string;
  showPreview?: boolean;
  className?: string;
}

const Scribble: FC<ScribbleProps> = ({
  width = 600,
  height = 200,
  lineColor = 'hsl(25 20% 6%)',
  lineWidth = 2,
  name,
  label,
  placeholder = 'Draw here',
  showPreview = false,
  className = '',
}) => (
  <div data-scribble className={className}>
    {label && (
      <label className="block text-sm font-bold uppercase tracking-wider mb-2">{label}</label>
    )}
    <div className="relative border-2 border-border bg-white rounded-none">
      <canvas
        data-scribble-canvas
        data-scribble-color={lineColor}
        data-scribble-line-width={lineWidth}
        width={width}
        height={height}
        className="block w-full cursor-crosshair touch-none"
        style={{ aspectRatio: `${width}/${height}` }}
      />
      <div
        data-scribble-placeholder
        className="absolute inset-0 flex items-center justify-center pointer-events-none text-muted-foreground select-none"
      >
        {placeholder}
      </div>
      <div className="absolute top-2 right-2">
        <button
          data-scribble-clear
          type="button"
          className="p-1.5 bg-white/80 border border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors"
          aria-label="Clear canvas"
        >
          <Icon name="trash" size="sm" />
        </button>
      </div>
    </div>
    {name && <input type="hidden" data-scribble-value name={name} />}
    {showPreview && (
      <div data-scribble-preview-container className="mt-4" style={{ display: 'none' }}>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Exported PNG</p>
        <div className="border-2 border-dashed border-border p-4 bg-muted/30">
          <img data-scribble-preview alt="Exported scribble" className="w-full" />
        </div>
      </div>
    )}
  </div>
);

export default Scribble;
