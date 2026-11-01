import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Facebook, Youtube, Linkedin, Shield } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/workshopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-neutral-400 border-t border-white/10 pt-16 pb-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#2a2d35] to-[#121316] border border-white/20 flex items-center justify-center text-[#ff6200]">
                <Wrench className="w-4 h-4 transform -rotate-12" />
              </div>
              <div className="flex items-baseline gap-1.5 font-heading">
                <span className="text-2xl font-bold tracking-wider text-white">IRONCLAD</span>
                <span className="text-base font-semibold tracking-widest text-[#ff6200]">AUTO WORKS</span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed font-body text-xs sm:text-sm">
              Precision engineering and specialized automotive care based in Alexandria, Sydney. Delivering factory logbook compliance, deep-level diagnostics, and mechanical repairs.
            </p>

            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              <a href="#instagram" className="w-8 h-8 rounded bg-white/5 hover:bg-[#ff6200] hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-8 h-8 rounded bg-white/5 hover:bg-[#ff6200] hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-8 h-8 rounded bg-white/5 hover:bg-[#ff6200] hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-8 h-8 rounded bg-white/5 hover:bg-[#ff6200] hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services-section" className="hover:text-white transition-colors">Specialist Services</a></li>
              <li><a href="#why-section" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery-section" className="hover:text-white transition-colors">Workshop Showcase</a></li>
              <li><a href="#process-section" className="hover:text-white transition-colors">Our 4-Step Process</a></li>
              <li><a href="#reviews-section" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact-section" className="hover:text-white transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Specialist Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services-section" className="hover:text-[#ff6200] transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Alexandria Facility
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff6200] shrink-0 mt-0.5" />
                <span>42 Collins St, Alexandria NSW 2015</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff6200] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white hover:text-[#ff6200]">{BUSINESS_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff6200] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#ff6200]">{BUSINESS_INFO.email}</a>
              </p>
              <div className="pt-2 border-t border-white/5 space-y-1">
                <p className="flex items-center gap-2 text-neutral-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#ff6200]" />
                  <span>Mon–Fri: 7:30 AM – 5:30 PM</span>
                </p>
                <p className="text-neutral-500 pl-5.5">Sat: 8:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Demonstration Notice Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 text-neutral-500">
            <span>© {new Date().getFullYear()} IRONCLAD AUTO WORKS. All rights reserved.</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <Shield className="w-3.5 h-3.5 text-[#ff6200]" />
              <span>Fictional Portfolio Demonstration Website</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff6200]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
