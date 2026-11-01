import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, Calendar, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services-section' },
    { label: 'Why Ironclad', href: '#why-section' },
    { label: 'Showcase', href: '#gallery-section' },
    { label: 'Process', href: '#process-section' },
    { label: 'Reviews', href: '#reviews-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <>
      {/* Top emergency / quick contact bar */}
      <div className="bg-[#0e1014] text-xs text-neutral-400 border-b border-white/5 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="text-[#ff6200] font-bold">ALEXANDRIA, SYDNEY</span>
              <span>· 42 Collins St, NSW 2015</span>
            </span>
            <span className="hidden md:inline-block text-neutral-500">·</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-neutral-400">
              <Shield className="w-3.5 h-3.5 text-[#ff6200]" />
              <span>Preserves New Vehicle Statutory Warranty</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-neutral-400">Mon–Fri: 7:30am–5:30pm</span>
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#ff6200] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#ff6200]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation conforming strictly to Top Bar Contract */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-[#0b0c0e]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3' 
            : 'bg-[#0b0c0e]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark in display face, single text element */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6200] rounded"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#2a2d35] to-[#121316] border border-white/20 flex items-center justify-center text-[#ff6200] shadow-inner group-hover:border-[#ff6200]/60 transition-colors">
              <Wrench className="w-4 h-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="flex items-baseline gap-1.5 font-heading">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-white">IRONCLAD</span>
              <span className="text-sm sm:text-base font-semibold tracking-widest text-[#ff6200]">AUTO WORKS</span>
            </div>
          </a>

          {/* Zone 2: 4-6 concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-[#ff6200] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] active:scale-[0.98] rounded transition-all duration-150 flex items-center gap-2 orange-glow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Service</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] rounded flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121418] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-neutral-200 hover:text-white hover:bg-white/5 rounded font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] rounded flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full py-2.5 text-center text-xs font-semibold text-neutral-300 bg-white/5 hover:bg-white/10 rounded flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff6200]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
