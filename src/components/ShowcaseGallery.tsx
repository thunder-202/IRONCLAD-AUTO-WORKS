import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/workshopData';
import { GalleryItem } from '../types';

export const ShowcaseGallery: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null = activeItemIndex !== null ? GALLERY_ITEMS[activeItemIndex] : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [activeItemIndex]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  }, [activeItemIndex]);

  const handleClose = () => {
    setActiveItemIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activeItemIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItemIndex, handleNext, handlePrev]);

  return (
    <section id="gallery-section" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
              <span className="w-5 h-px bg-[#ff6200]" />
              <span>FACILITY & CRAFTSMANSHIP</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              Workshop Showcase
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 max-w-md font-body">
            An inside look at our Alexandria facility—where clinical cleanliness, precision diagnostic gear, and master craftsmanship converge.
          </p>
        </div>

        {/* 4-Column Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#14161c] border border-white/10 hover:border-[#ff6200]/60 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Hover Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill Tag Replacement (Clean unboxed text) */}
                <div className="absolute top-3 left-3 text-[11px] uppercase tracking-wider font-semibold text-[#ff6200] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                  {item.category}
                </div>

                {/* View Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transform scale-75 transition-all duration-200">
                  <Maximize2 className="w-4 h-4 text-[#ff6200]" />
                </div>

                {/* Bottom Caption on Card */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide group-hover:text-[#ff6200] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1 mt-1 font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Interaction Hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <Eye className="w-4 h-4 text-[#ff6200]" />
          <span>Click any image to view in high-resolution lightbox with technical documentation</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeItemIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wider">
                {activeItem.title}
              </span>
              <span className="text-xs font-mono text-neutral-400 bg-white/10 px-2 py-0.5 rounded">
                {activeItemIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/15 text-white hover:text-[#ff6200] hover:bg-black/90 transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/15 text-white hover:text-[#ff6200] hover:bg-black/90 transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Area */}
          <div 
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[65vh] flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption Box */}
            <div className="mt-4 p-4 rounded-lg bg-[#14161c] border border-white/10 max-w-2xl w-full text-center">
              <div className="text-xs uppercase font-bold tracking-widest text-[#ff6200] mb-1">
                {activeItem.category}
              </div>
              <p className="text-sm text-neutral-200 font-body leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
