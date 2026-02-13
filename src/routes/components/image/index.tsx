import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

const ImagePage: FC = () => (
  <ComponentPageLayout componentId="image">
    <>
      {/* Basic Image */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Basic</h3>
        <Image
          src="https://picsum.photos/seed/dutchy-basic/800/450"
          alt="Landscape photograph"
        />
      </div>

      {/* With Caption */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">With Caption</h3>
        <Image
          src="https://picsum.photos/seed/dutchy-caption/800/400"
          alt="Architecture photograph"
          caption="Modern architecture in Rotterdam, The Netherlands"
          captionSource="Photo / Unsplash"
        />
      </div>

      {/* With Expand Button */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Expandable</h3>
        <p className="text-sm text-muted-foreground mb-6">Click the expand icon to open a fullscreen lightbox. Press Escape or click outside to close.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://picsum.photos/seed/dutchy-expand1/600/400"
            alt="Urban landscape"
            expandable
            height="h-64"
          />
          <Image
            src="https://picsum.photos/seed/dutchy-expand2/600/400"
            alt="Interior design"
            expandable
            height="h-64"
          />
        </div>
      </div>

      {/* Aspect Ratios */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Aspect Ratios</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Image
              src="https://picsum.photos/seed/dutchy-sq/400/400"
              alt="Square image"
              aspect="square"
            />
            <p className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">1:1 Square</p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/dutchy-wide/640/360"
              alt="Widescreen image"
              aspect="video"
            />
            <p className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">16:9 Video</p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/dutchy-std/400/300"
              alt="Standard image"
              aspect="4/3"
            />
            <p className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">4:3 Standard</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Gallery Grid</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-border border-2 border-border">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="relative group bg-background" data-image>
              <img
                src={`https://picsum.photos/seed/dutchy-gal${n}/400/400`}
                alt={`Gallery image ${n}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <button
                data-expand
                className="absolute top-2 right-2 w-8 h-8 bg-foreground/70 text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary cursor-pointer"
                aria-label="Expand image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* With Overlay Text */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">With Overlay</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gradient bottom overlay */}
          <div className="relative overflow-hidden border-2 border-border">
            <img
              src="https://picsum.photos/seed/dutchy-ov1/600/400"
              alt="Building exterior"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-mono text-xs text-primary uppercase tracking-wider mb-1">Featured</p>
              <h4 className="font-display text-xl font-bold uppercase text-background">Dutch Architecture</h4>
              <p className="text-sm text-background/70 mt-1">Structural forms in urban design</p>
            </div>
          </div>
          {/* Full dark overlay on hover */}
          <div className="relative overflow-hidden border-2 border-border group cursor-pointer">
            <img
              src="https://picsum.photos/seed/dutchy-ov2/600/400"
              alt="Interior space"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-300 flex items-center justify-center">
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-display text-2xl font-bold uppercase text-background mb-2">View Project</h4>
                <span className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm">
                  Explore
                  <Icon name="arrow-right" size="sm" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Card */}
      <div className="bg-white border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Image Card</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { seed: 'card1', tag: 'Architecture', title: 'Project Alpha', desc: 'Structural design with bold geometry and open space planning.' },
            { seed: 'card2', tag: 'Interior', title: 'Project Beta', desc: 'Minimalist interiors blending warmth and precision in every detail.' },
            { seed: 'card3', tag: 'Landscape', title: 'Project Gamma', desc: 'Outdoor spaces shaped by natural forms and Dutch heritage.' },
          ].map((item) => (
            <div key={item.seed} className="border-2 border-border bg-background">
              <div className="relative group" data-image>
                <img
                  src={`https://picsum.photos/seed/dutchy-${item.seed}/400/250`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <button
                  data-expand
                  className="absolute top-2 right-2 w-8 h-8 bg-foreground/70 text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary cursor-pointer"
                  aria-label="Expand image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg>
                </button>
              </div>
              <div className="p-5 border-t-2 border-border">
                <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-wider">{item.tag}</span>
                <h4 className="font-display font-bold uppercase mt-1 mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured / Hero Image */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Hero / Featured</h3>
        <div className="relative border-4 border-foreground group" data-image>
          <img
            src="https://picsum.photos/seed/dutchy-hero/1200/500"
            alt="Featured hero image"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent flex items-end p-8">
            <div>
              <div className="inline-block bg-primary px-3 py-1 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-3">
                Featured
              </div>
              <h4 className="font-display text-3xl font-bold uppercase text-background leading-tight mb-2">
                Bold Design<br />Speaks Volumes
              </h4>
              <p className="text-background/70 max-w-md">Zero border radius, strong borders, and warm Dutch-inspired color palettes.</p>
            </div>
          </div>
          <button
            data-expand
            className="absolute top-4 right-4 w-10 h-10 bg-background/90 text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground cursor-pointer"
            aria-label="Expand image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg>
          </button>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default ImagePage;
