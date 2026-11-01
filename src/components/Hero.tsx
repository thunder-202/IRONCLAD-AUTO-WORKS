import React, { useState } from 'react';
import { ChevronRight, ArrowDown, ShieldCheck, Cpu, Wrench, CheckCircle } from 'lucide-react';
import { HERO_IMAGE } from '../data/workshopData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0b0c0e]">
      {/* Background Cinematic Image with measured gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Precision European automotive workshop interior with performance vehicles in Alexandria Sydney"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? 'opacity-55' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          referrerPolicy="no-referrer"
        />

        {/* Fallback pattern if loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#0e1014] bg-carbon-mesh" />
        )}

        {/* Cinematic gradient overlays for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-[#0b0c0e]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] via-[#0b0c0e]/70 to-transparent" />
      </div>

      {/* Main Hero Content Frame */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle industrial kicker */}
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            <span className="w-6 h-px bg-[#ff6200]" />
            <span className="text-[#ff6200]">SYDNEY SPECIALIST WORKSHOP</span>
            <span className="text-neutral-600">/</span>
            <span>ALEXANDRIA NSW</span>
          </div>

          {/* Headline - Barlow Condensed bold */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] text-balance mb-6">
            Precision Engineering. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              Professional
            </span>{' '}
            <span className="text-[#ff6200]">Automotive Care.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl font-body mb-8">
            Expert diagnostics, mechanical repairs, and performance servicing for drivers who expect more from their vehicles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onBookClick}
              className="px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] active:scale-[0.98] rounded transition-all duration-150 flex items-center justify-center gap-3 orange-glow shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>Book a Service</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-7 py-4 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Explore Our Services</span>
              <ArrowDown className="w-4 h-4 text-[#ff6200]" />
            </button>
          </div>

          {/* Small Trust Line */}
          <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-4 py-2 px-3.5 bg-black/40 backdrop-blur-md rounded border border-white/10 text-xs sm:text-sm text-neutral-300">
            <span className="font-semibold text-white">Professional Workshop</span>
            <span className="text-neutral-500">|</span>
            <span className="font-semibold text-white">Experienced Technicians</span>
            <span className="text-neutral-500">|</span>
            <span className="font-semibold text-[#ff6200]">Quality Parts</span>
          </div>
        </div>
      </div>

      {/* 4-Column Statutory Warranty Reassurance Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0e1014]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-white tracking-wider">Warranty Preserved</p>
                <p className="text-xs text-neutral-400">Statutory logbook compliant</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-white tracking-wider">Senior Technicians</p>
                <p className="text-xs text-neutral-400">European & prestige specialists</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-white tracking-wider">Dealer-Level Scans</p>
                <p className="text-xs text-neutral-400">Latest OEM diagnostic tools</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-white tracking-wider">Transparent Quotes</p>
                <p className="text-xs text-neutral-400">Itemised upfront pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
