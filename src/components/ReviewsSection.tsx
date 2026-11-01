import React from 'react';
import { Star, AlertCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/workshopData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
            <span className="w-4 h-px bg-[#ff6200]" />
            <span>CLIENT EXPERIENCES</span>
            <span className="w-4 h-px bg-[#ff6200]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
            Driver Testimonials
          </h2>
          <p className="text-base text-neutral-400 font-body">
            What Sydney drivers say about the precision, honesty, and turnaround at Ironclad Auto Works.
          </p>

          {/* Mandatory Fictional Demonstration Notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-xs text-neutral-400">
            <AlertCircle className="w-3.5 h-3.5 text-[#ff6200] shrink-0" />
            <span>
              <strong className="text-neutral-300">Demonstration Content:</strong> The testimonials below are fictional examples created for portfolio display purposes.
            </span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#121418] border border-white/10 rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-[#ff6200]/40 transition-all duration-200 shadow-md relative"
            >
              {/* Top Quote Icon & Stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#ff6200]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700" />
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-body italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Vehicle metadata */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                  {review.author}
                </div>
                <div className="text-xs font-semibold text-[#ff6200] mt-0.5">
                  {review.vehicle}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-1">
                  <span>{review.location}</span>
                  <span>·</span>
                  <span>{review.serviceCompleted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
