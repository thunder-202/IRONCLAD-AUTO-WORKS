import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, AlertCircle, Compass, Train, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schematic' | 'transit'>('schematic');

  return (
    <section id="contact-section" className="py-20 sm:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
              <span className="w-5 h-px bg-[#ff6200]" />
              <span>FACILITY & INQUIRIES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              Contact & Location
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 max-w-md font-body">
            Centrally located in Sydney’s premier automotive and industrial district in Alexandria, moments from Green Square.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-[#121418] border border-white/10 rounded-lg p-6 sm:p-7 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Workshop Address</h4>
                  <p className="text-base font-semibold text-white mt-1">42 Collins Street</p>
                  <p className="text-sm text-neutral-400">Alexandria, Sydney NSW 2015, Australia</p>
                  <p className="text-xs text-neutral-500 mt-1">Dedicated customer drop-off parking bays on site</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Direct Phone</h4>
                  <a 
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-base font-semibold text-white hover:text-[#ff6200] transition-colors mt-1 block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-500">Service Bay & Booking Inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6200] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Service Inquiries</h4>
                  <a 
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-base font-semibold text-white hover:text-[#ff6200] transition-colors mt-1 block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-neutral-500">Fast response within 2 business hours</p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#121418] border border-white/10 rounded-lg p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#ff6200]" />
                <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wider">
                  Operating Hours
                </h4>
              </div>

              <div className="space-y-3">
                {BUSINESS_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-neutral-400 font-medium">{item.days}</span>
                    <span className="text-white font-semibold tabular-nums">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Map-Style Schematic */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            {/* Map Header & Mode Switch */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#ff6200]" />
                <span className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                  Alexandria Precinct Blueprint
                </span>
              </div>

              {/* Segmented control for map view */}
              <div className="flex items-center gap-1 p-1 bg-black/40 rounded border border-white/10">
                <button
                  onClick={() => setActiveTab('schematic')}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    activeTab === 'schematic' ? 'bg-[#ff6200] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Workshop Map
                </button>
                <button
                  onClick={() => setActiveTab('transit')}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    activeTab === 'transit' ? 'bg-[#ff6200] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Transit Routes
                </button>
              </div>
            </div>

            {/* Stylized Automotive Workshop Schematic Canvas / SVG */}
            {activeTab === 'schematic' ? (
              <div className="relative aspect-[16/10] w-full rounded bg-[#090a0d] border border-white/10 overflow-hidden p-6 flex flex-col justify-between font-mono text-xs">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-carbon-mesh opacity-30 pointer-events-none" />

                {/* Vector Road & Industrial Precinct Grid */}
                <svg className="absolute inset-0 w-full h-full text-white/10" xmlns="http://www.w3.org/2000/svg">
                  {/* Collins Street */}
                  <line x1="10%" y1="65%" x2="90%" y2="65%" stroke="rgba(255,255,255,0.18)" strokeWidth="18" />
                  <line x1="10%" y1="65%" x2="90%" y2="65%" stroke="rgba(255,98,0,0.3)" strokeWidth="2" strokeDasharray="6 4" />
                  
                  {/* Bourke Road */}
                  <line x1="30%" y1="10%" x2="30%" y2="90%" stroke="rgba(255,255,255,0.15)" strokeWidth="22" />
                  
                  {/* O'Riordan St */}
                  <line x1="75%" y1="10%" x2="75%" y2="90%" stroke="rgba(255,255,255,0.12)" strokeWidth="16" />

                  {/* Workshop footprint building */}
                  <rect x="42%" y="28%" width="28%" height="32%" rx="4" fill="#14171f" stroke="#ff6200" strokeWidth="1.5" />
                  <rect x="44%" y="30%" width="12%" height="12%" rx="2" fill="rgba(255,98,0,0.1)" stroke="rgba(255,98,0,0.4)" strokeWidth="1" />
                </svg>

                {/* Street Labels */}
                <div className="relative z-10 flex justify-between text-[11px] text-neutral-500">
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/5">BOURKE RD ◄ SYDNEY CBD</span>
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/5">O'RIORDAN ST ► AIRPORT</span>
                </div>

                {/* Workshop Pin Indicator */}
                <div className="relative z-10 self-center text-center my-auto">
                  <div className="inline-flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#ff6200] text-white flex items-center justify-center shadow-lg orange-glow">
                      <Navigation className="w-5 h-5 transform -rotate-45" />
                    </div>
                    <div className="mt-2 bg-[#121418] border border-[#ff6200] px-3 py-1.5 rounded shadow-xl">
                      <p className="font-heading text-sm font-bold uppercase text-white tracking-wider">
                        IRONCLAD AUTO WORKS
                      </p>
                      <p className="text-[10px] text-neutral-400">42 Collins St, Alexandria</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Coordinates & Landmark notes */}
                <div className="relative z-10 flex justify-between items-center text-[10px] text-neutral-400">
                  <span>GPS: 33.9067° S, 151.1982° E</span>
                  <span className="text-[#ff6200] font-semibold">GREEN SQUARE STN · 650M</span>
                </div>
              </div>
            ) : (
              /* Transit Routes View */
              <div className="aspect-[16/10] w-full rounded bg-[#090a0d] border border-white/10 p-6 flex flex-col justify-between text-xs">
                <div className="space-y-4">
                  <div className="p-3.5 rounded bg-white/5 border border-white/10 flex items-start gap-3">
                    <Car className="w-4 h-4 text-[#ff6200] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-white uppercase tracking-wider">By Vehicle</h5>
                      <p className="text-neutral-400 mt-0.5">
                        12 minutes from Sydney CBD via Eastern Distributor / Bourke Rd. Dedicated client parking bays directly fronting the workshop.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-white/5 border border-white/10 flex items-start gap-3">
                    <Train className="w-4 h-4 text-[#ff6200] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-white uppercase tracking-wider">Public Transport (Train & Bus)</h5>
                      <p className="text-neutral-400 mt-0.5">
                        8-minute walk from Green Square Station (T8 Airport line). Direct buses route 343 & 370 stop within 150m on Bourke Rd.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#14161d] rounded border border-white/5 text-[11px] text-neutral-400">
                  <span className="text-white font-semibold">Courtesy Shuttle / Ride Share: </span>
                  We offer complimentary drop-off to Green Square Station and Sydney Domestic Airport for customers booking major scheduled logbook servicing.
                </div>
              </div>
            )}

            {/* Mandatory Demonstration Location Disclaimer */}
            <div className="mt-6 p-3.5 rounded bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-neutral-400">
              <AlertCircle className="w-4 h-4 text-[#ff6200] shrink-0 mt-0.5" />
              <span>
                <strong className="text-neutral-300">Demonstration Location:</strong> This map schematic and business address represent a fictional portfolio concept for Ironclad Auto Works in Alexandria.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
