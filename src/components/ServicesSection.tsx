import React from 'react';
import { 
  ClipboardCheck, 
  Activity, 
  Disc, 
  Cpu, 
  Compass, 
  Thermometer, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/workshopData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Disc':
        return <Disc className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Thermometer':
        return <Thermometer className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="services-section" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
              <span className="w-5 h-px bg-[#ff6200]" />
              <span>SPECIALIST WORKSHOP CAPABILITIES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              Precision Automotive Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 max-w-md font-body">
            Calibrated tooling, OEM factory specifications, and certified technicians for everyday European drivers and performance enthusiasts.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between bg-[#121418] hover:bg-[#161920] border border-white/10 hover:border-[#ff6200]/40 rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded bg-black/40 border border-white/10 flex items-center justify-center text-[#ff6200] group-hover:scale-110 group-hover:bg-[#ff6200]/10 transition-all duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#ff6200]" />
                    {service.turnaround}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide group-hover:text-[#ff6200] transition-colors mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-neutral-400 mb-3 line-clamp-1">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Card Bottom Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <Info className="w-3.5 h-3.5 text-[#ff6200]" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => onBookService(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff6200] hover:text-white group-hover:translate-x-0.5 transition-all cursor-pointer py-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-5 rounded-lg bg-[#14161c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#ff6200] shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-300">
              <span className="font-bold text-white uppercase tracking-wider">Manufacturer Warranty Protection: </span>
              Under Australian Consumer Law, having your new vehicle serviced at Ironclad Auto Works does not void your statutory manufacturer warranty.
            </p>
          </div>
          <button
            onClick={() => onBookService('logbook-servicing')}
            className="text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-[#ff6200] px-4 py-2 rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Check Schedule
          </button>
        </div>
      </div>
    </section>
  );
};
