import React, { useState } from 'react';
import { Calendar, CheckCircle2, AlertCircle, Wrench, Clock, X, ChevronRight, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/workshopData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    vehicleMakeModel: '',
    vehicleYear: new Date().getFullYear().toString(),
    serviceRequired: preselectedServiceId || 'logbook-servicing',
    preferredDate: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    reference: string;
    data: BookingFormData;
    timestamp: string;
  } | null>(null);

  // Sync if preselectedServiceId changes
  React.useEffect(() => {
    if (preselectedServiceId) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  // Tomorrow's date for min attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^(\+?61|0)[0-9\s-]{8,12}$/.test(formData.phoneNumber.replace(/[\s-]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g. 0412 345 678)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.vehicleMakeModel.trim()) {
      newErrors.vehicleMakeModel = 'Vehicle make and model is required (e.g. BMW M3, Audi RS3)';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const demoRef = `IAW-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedBooking({
        reference: demoRef,
        data: { ...formData },
        timestamp: new Date().toLocaleString(),
      });
      setIsSubmitting(false);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      vehicleMakeModel: '',
      vehicleYear: new Date().getFullYear().toString(),
      serviceRequired: 'logbook-servicing',
      preferredDate: '',
      additionalMessage: '',
    });
    setSubmittedBooking(null);
    setErrors({});
  };

  const selectedServiceObj = SERVICES.find(s => s.id === formData.serviceRequired);

  return (
    <section id="booking-section" className="py-20 sm:py-28 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Workshop context & promise */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff6200]">
              <span className="w-4 h-px bg-[#ff6200]" />
              <span>APPOINTMENT REQUEST</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
              Book Your Service
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-body mb-8">
              Submit your vehicle details and service requirements. Our workshop service coordinator will review availability and confirm your scheduled inspection time.
            </p>

            {/* Quick Reassurance Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg bg-[#14161c] border border-white/10 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#ff6200] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Same-Day Turnaround</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Most logbook and scheduled diagnostic services completed the same business day.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#14161c] border border-white/10 flex items-start gap-3.5">
                <Wrench className="w-5 h-5 text-[#ff6200] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">No Unapproved Work</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">We always quote and seek your written approval before commencing any additional repair work.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#14161c] border border-white/10 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#ff6200] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Need Urgent Diagnostics?</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Call our service bay directly at <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#ff6200] font-semibold hover:underline">{BUSINESS_INFO.phone}</a> for immediate priority intake.</p>
                </div>
              </div>
            </div>

            {/* Demo Notice Banner */}
            <div className="p-4 rounded bg-white/5 border border-white/10 text-xs text-neutral-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#ff6200] shrink-0 mt-0.5" />
              <span>
                <strong className="text-neutral-300">Portfolio Demo Only:</strong> Submitting this form tests client-side validation and generates a simulated confirmation summary. No real booking is transmitted to an external database.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/10 rounded-lg p-6 sm:p-10 shadow-2xl relative">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name <span className="text-[#ff6200]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Alexander Hayes"
                    className={`w-full px-4 py-3 bg-[#191c23] border ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#ff6200]'
                    } rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone Number <span className="text-[#ff6200]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 0412 345 678"
                    className={`w-full px-4 py-3 bg-[#191c23] border ${
                      errors.phoneNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#ff6200]'
                    } rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address <span className="text-[#ff6200]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alexander@example.com"
                    className={`w-full px-4 py-3 bg-[#191c23] border ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#ff6200]'
                    } rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Date <span className="text-[#ff6200]">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={minDateString}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#191c23] border ${
                      errors.preferredDate ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#ff6200]'
                    } rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors scheme-dark`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Vehicle Make & Model + Year */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="vehicleMakeModel" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Vehicle Make & Model <span className="text-[#ff6200]">*</span>
                  </label>
                  <input
                    type="text"
                    id="vehicleMakeModel"
                    name="vehicleMakeModel"
                    value={formData.vehicleMakeModel}
                    onChange={handleInputChange}
                    placeholder="e.g. BMW M3 Competition / Porsche 911"
                    className={`w-full px-4 py-3 bg-[#191c23] border ${
                      errors.vehicleMakeModel ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#ff6200]'
                    } rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                  />
                  {errors.vehicleMakeModel && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.vehicleMakeModel}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicleYear" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Model Year
                  </label>
                  <input
                    type="text"
                    id="vehicleYear"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleInputChange}
                    placeholder="2022"
                    maxLength={4}
                    className="w-full px-4 py-3 bg-[#191c23] border border-white/15 focus:border-[#ff6200] rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Service Required <span className="text-[#ff6200]">*</span>
                </label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#191c23] border border-white/15 focus:border-[#ff6200] rounded text-sm text-white focus:outline-none transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#191c23] text-white">
                      {s.title} — {s.subtitle}
                    </option>
                  ))}
                </select>
                {selectedServiceObj && (
                  <p className="text-xs text-neutral-400 mt-1.5 flex items-center gap-1.5">
                    <span className="text-[#ff6200]">Estimated Duration:</span>
                    <span>{selectedServiceObj.turnaround}</span>
                  </p>
                )}
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="additionalMessage" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Additional Notes or Symptoms <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="additionalMessage"
                  name="additionalMessage"
                  rows={3}
                  value={formData.additionalMessage}
                  onChange={handleInputChange}
                  placeholder="Describe any symptoms, warning lights, brake noises, or specific oil preferences..."
                  className="w-full px-4 py-3 bg-[#191c23] border border-white/15 focus:border-[#ff6200] rounded text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] active:scale-[0.99] rounded transition-all duration-150 flex items-center justify-center gap-2 orange-glow cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Validating Booking Details...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Submit Appointment Request (Demo)</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Demonstration Confirmation Modal */}
      {submittedBooking && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl bg-[#121418] border border-white/15 rounded-lg shadow-2xl p-6 sm:p-8 text-neutral-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSubmittedBooking(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Icon & Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#ff6200]/15 border border-[#ff6200]/30 text-[#ff6200] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                Booking Request Form Validated
              </h3>
              <p className="text-xs uppercase font-mono tracking-widest text-[#ff6200] mt-1">
                DEMO REFERENCE: {submittedBooking.reference}
              </p>
            </div>

            {/* Clear Demonstration Notice Badge */}
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 mb-6 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-300 font-semibold mb-0.5">Frontend Portfolio Demonstration Notice</strong>
                All fields have passed client-side validation successfully. This is a demonstration interface for Ironclad Auto Works; no actual booking has been submitted or scheduled on a live workshop system.
              </div>
            </div>

            {/* Summary Details */}
            <div className="bg-[#181b22] border border-white/10 rounded-lg p-5 space-y-2.5 text-xs sm:text-sm text-neutral-300 mb-6 font-mono">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-neutral-500">Customer:</span>
                <span className="text-white font-semibold">{submittedBooking.data.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-neutral-500">Contact:</span>
                <span className="text-neutral-300">{submittedBooking.data.phoneNumber} · {submittedBooking.data.email}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-neutral-500">Vehicle:</span>
                <span className="text-white font-semibold">{submittedBooking.data.vehicleYear} {submittedBooking.data.vehicleMakeModel}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-neutral-500">Service:</span>
                <span className="text-[#ff6200] font-semibold">{SERVICES.find(s => s.id === submittedBooking.data.serviceRequired)?.title || submittedBooking.data.serviceRequired}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Requested Date:</span>
                <span className="text-white">{submittedBooking.data.preferredDate}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors"
              >
                Reset & Test Again
              </button>
              <button
                onClick={() => setSubmittedBooking(null)}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff6200] hover:bg-[#e05600] rounded transition-colors"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
