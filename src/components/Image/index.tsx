import type { FC, ReactNode } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  captionSource?: string;
  expandable?: boolean;
  aspect?: 'square' | 'video' | '4/3';
  height?: string;
  className?: string;
}

const aspectMap: Record<string, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  '4/3': 'aspect-[4/3]',
};

const Image: FC<ImageProps> = ({
  src,
  alt,
  caption,
  captionSource,
  expandable = false,
  aspect,
  height,
  className = '',
}) => {
  const imgClass = aspect
    ? `w-full h-full object-cover ${className}`
    : `w-full ${height ? `${height} object-cover` : 'h-auto'} border-2 border-border ${className}`;

  const img = <img src={src} alt={alt} className={imgClass} loading="lazy" />;

  let content: ReactNode = aspect
    ? <div className={`${aspectMap[aspect]} overflow-hidden border-2 border-border`}>{img}</div>
    : img;

  if (expandable) {
    content = (
      <div className="relative group" data-image>
        {content}
        <button
          data-expand
          className="absolute top-3 right-3 w-10 h-10 bg-foreground/80 text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground cursor-pointer"
          aria-label="Expand image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" x2="14" y1="3" y2="10" />
            <line x1="3" x2="10" y1="21" y2="14" />
          </svg>
        </button>
      </div>
    );
  }

  if (caption) {
    return (
      <figure>
        {content}
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{caption}</span>
          {captionSource && (
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{captionSource}</span>
          )}
        </figcaption>
      </figure>
    );
  }

  return <>{content}</>;
};

export default Image;
