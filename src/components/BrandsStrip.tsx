import React from 'react';
import { POPULAR_BRANDS } from '../data/workshopData';
import { Shield } from 'lucide-react';

export const BrandsStrip: React.FC = () => {
  return (
    <section className="py-16 bg-[#0e1014] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
            <span className="w-4 h-px bg-[#ff6200]" />
            <span>PLATFORMS WE SPECIALISE IN</span>
            <span className="w-4 h-px bg-[#ff6200]" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            Servicing Australia’s Leading Automotive Brands
          </h3>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {POPULAR_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#14161c] hover:bg-[#1a1d24] border border-white/10 hover:border-[#ff6200]/50 rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-200 group"
            >
              <span className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wider group-hover:text-[#ff6200] transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-neutral-400 mt-1 line-clamp-1">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Required Disclaimer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-500 text-center">
          <Shield className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>
            Examples of makes serviced with factory diagnostic protocols. Ironclad Auto Works is an independent specialist workshop.
          </span>
        </div>
      </div>
    </section>
  );
};
