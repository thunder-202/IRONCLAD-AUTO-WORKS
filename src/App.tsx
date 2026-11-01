/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { BrandsStrip } from './components/BrandsStrip';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [preselectedBookingServiceId, setPreselectedBookingServiceId] = useState<string>('logbook-servicing');

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedBookingServiceId(serviceId);
    }
    const bookingEl = document.getElementById('booking-section');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services-section');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#cbd5e1] font-body flex flex-col selection:bg-[#ff6200] selection:text-white">
      {/* Top Navigation conforming to Top Bar Contract */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main className="flex-1">
        {/* Cinematic Hero Section */}
        <Hero 
          onBookClick={() => scrollToBooking()} 
          onExploreServices={scrollToServices} 
        />

        {/* 8 Specialist Automotive Services */}
        <ServicesSection
          onSelectService={(service) => setActiveModalService(service)}
          onBookService={(serviceId) => scrollToBooking(serviceId)}
        />

        {/* 4 Core Selling Points */}
        <WhyChooseSection />

        {/* Workshop Showcase Image Gallery with Lightbox */}
        <ShowcaseGallery />

        {/* Brand Strip for European & Australian Market Vehicles */}
        <BrandsStrip />

        {/* 4-Step Workshop Process */}
        <ProcessSection onBookClick={() => scrollToBooking()} />

        {/* Customer Reviews (Fictional Demonstration) */}
        <ReviewsSection />

        {/* Interactive Booking Request Form */}
        <BookingSection preselectedServiceId={preselectedBookingServiceId} />

        {/* Contact Details & Interactive Alexandria Map Schematic */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Expanded Service Specification Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookService={(serviceId) => scrollToBooking(serviceId)}
      />
    </div>
  );
}
