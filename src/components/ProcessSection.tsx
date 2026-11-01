import React from 'react';
import { PROCESS_STEPS } from '../data/workshopData';
import { Calendar, Search, FileText, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  onBookClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onBookClick }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5" />;
      case 1:
        return <Search className="w-5 h-5" />;
      case 2:
        return <FileText className="w-5 h-5" />;
      case 3:
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process-section" className="py-20 sm:py-28 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
            <span className="w-4 h-px bg-[#ff6200]" />
            <span>TRANSPARENT WORKFLOW</span>
            <span className="w-4 h-px bg-[#ff6200]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
            Our 4-Step Process
          </h2>
          <p className="text-base text-neutral-400 font-body">
            Predictable, transparent automotive servicing from the moment you request your booking until vehicle handover.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative bg-[#121418] border border-white/10 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-[#ff6200]/40 transition-all duration-200 group"
            >
              {/* Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-4xl font-extrabold text-neutral-700 group-hover:text-[#ff6200]/40 transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] group-hover:bg-[#ff6200]/10 transition-colors">
                    {getStepIcon(index)}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-2 group-hover:text-[#ff6200] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-neutral-300 mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-neutral-400 font-body leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>STAGE {index + 1} OF 4</span>
                <span className="w-2 h-2 rounded-full bg-[#ff6200]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] px-6 py-3 rounded orange-glow-sm transition-all cursor-pointer"
          >
            <span>Start Step 1: Request Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
