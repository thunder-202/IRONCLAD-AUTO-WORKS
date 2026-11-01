import React, { useEffect } from 'react';
import { X, Check, Clock, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#121418] border border-white/15 rounded-lg shadow-2xl p-6 sm:p-8 z-10 my-8 text-neutral-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#ff6200]">
            <span>SERVICE SPECIFICATION</span>
            <span className="text-neutral-500">·</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#ff6200]" />
              {service.turnaround}
            </span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            {service.title}
          </h3>
          <p className="text-sm font-medium text-neutral-400 mt-1">
            {service.subtitle}
          </p>
        </div>

        {/* Full Overview */}
        <div className="mb-6 p-4 rounded bg-white/5 border border-white/10 text-sm leading-relaxed text-neutral-300">
          {service.fullDescription}
        </div>

        {/* Key Included Work */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff6200]" />
            <span>Inspection & Procedure Checklist</span>
          </h4>
          <ul className="space-y-2.5">
            {service.keyIncludes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[#ff6200]/20 border border-[#ff6200]/40 flex items-center justify-center shrink-0 text-[#ff6200]">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended For Box */}
        <div className="mb-8 p-3.5 rounded bg-[#181b22] border border-white/5 text-xs text-neutral-400">
          <span className="font-semibold text-neutral-200">Recommended When: </span>
          {service.recommendedFor}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] rounded transition-all duration-150 flex items-center justify-center gap-2 orange-glow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
