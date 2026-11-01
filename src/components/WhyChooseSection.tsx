import React from 'react';
import { Wrench, Terminal, CheckCircle2, FileText, Check } from 'lucide-react';
import { SELLING_POINTS } from '../data/workshopData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'FileText':
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-section" className="py-20 sm:py-28 bg-[#0e1014] relative border-t border-b border-white/5">
      {/* Background carbon texture overlay */}
      <div className="absolute inset-0 bg-carbon-mesh opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
            <span className="w-4 h-px bg-[#ff6200]" />
            <span>THE IRONCLAD STANDARD</span>
            <span className="w-4 h-px bg-[#ff6200]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
            Why Choose Ironclad
          </h2>
          <p className="text-base text-neutral-400 font-body">
            We reject the dealership rush and the backyard shortcut. Every vehicle entering our Alexandria workshop is maintained according to strict mechanical tolerances.
          </p>
        </div>

        {/* 4 Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SELLING_POINTS.map((point) => (
            <div
              key={point.id}
              className="bg-[#121418] border border-white/10 rounded-lg p-7 sm:p-8 hover:border-[#ff6200]/30 transition-all duration-200 relative group"
            >
              {/* Top Accent Icon & Tagline */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded bg-gradient-to-br from-[#1c1f26] to-[#0e1014] border border-white/15 flex items-center justify-center text-[#ff6200] shadow-md group-hover:scale-105 group-hover:border-[#ff6200]/40 transition-all">
                  {getIcon(point.iconName)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200] bg-[#ff6200]/10 px-3 py-1 rounded">
                  {point.tagline}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-body mb-6">
                {point.description}
              </p>

              {/* Technical Bullet Points */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                {point.bulletPoints.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400">
                    <span className="mt-1 w-3.5 h-3.5 rounded bg-white/5 border border-white/20 flex items-center justify-center text-[#ff6200] shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Rigor Metric Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-lg bg-[#15171d] border border-white/10 text-center">
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ff6200] tabular-nums">45+</p>
            <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mt-1">Combined Master Tech Yrs</p>
          </div>
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold text-white tabular-nums">100%</p>
            <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mt-1">OEM / Genuine Parts</p>
          </div>
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ff6200] tabular-nums">12 Mo</p>
            <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mt-1">20,000 km Guarantee</p>
          </div>
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold text-white tabular-nums">0</p>
            <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mt-1">Hidden Surcharges</p>
          </div>
        </div>
      </div>
    </section>
  );
};
