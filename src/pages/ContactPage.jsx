import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { BUSINESS_INFO } from '../constants/business';
import { Phone, Mail, MapPin, Clock, User, Send, CheckCircle, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    capacity: '3 kW Solar System',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Vishwanath Solar Power Solution Varanasi"
        description="Get in touch with Vishwanath Solar Power Solution in Rohaniya, Varanasi. Call +91 9415310623 or visit us near Sunbeam Dalims for PM Surya Ghar guidance."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Varanasi Local Office
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Contact Vishwanath Solar
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about solar installation or PM Surya Ghar subsidy? Speak directly with owner Amit Maurya.
          </p>
        </div>
      </section>

      <section className="py-20 bg-solar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-6">

              <GlassCard className="space-y-6">
                <h3 className="font-heading font-bold text-xl text-slate-900">Office Details</h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-solar-primary/10 text-solar-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Physical Address:</strong>
                      <span>{BUSINESS_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-solar-secondary/20 text-solar-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Direct Phone Lines:</strong>
                      <div className="space-y-1">
                        <a href={`tel:${BUSINESS_INFO.rawPhones[0]}`} className="block text-solar-primary font-bold hover:underline">
                          {BUSINESS_INFO.phones[0]}
                        </a>
                        <a href={`tel:${BUSINESS_INFO.rawPhones[1]}`} className="block text-solar-primary font-bold hover:underline">
                          {BUSINESS_INFO.phones[1]}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Proprietor:</strong>
                      <span className="text-slate-900 font-bold">{BUSINESS_INFO.owner}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Working Hours:</strong>
                      <span>{BUSINESS_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Vishwanath%20Solar,%20I%20want%20to%20inquire%20about%20solar%20installation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" /> Message Us On WhatsApp
                  </a>
                </div>
              </GlassCard>

            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill in your details for a free site visit and PM Surya Ghar subsidy estimate.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Message Received!</h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you <strong>{formData.name}</strong>. Owner <strong>{BUSINESS_INFO.owner}</strong> will reach out to you shortly at <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-solar-primary text-white font-bold px-6 py-2.5 rounded-xl text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Amit Maurya"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 94153XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Varanasi Location / Address</label>
                        <input
                          type="text"
                          placeholder="e.g. Rohaniya, Varanasi"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Required Solar Capacity</label>
                      <select
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
                      >
                        <option value="1 kW Solar System">1 kW System (PM Surya Ghar)</option>
                        <option value="2 kW Solar System">2 kW System (PM Surya Ghar)</option>
                        <option value="3 kW Solar System">3 kW System (Recommended - ₹78,000 Subsidy)</option>
                        <option value="5 kW Residential">5 kW Residential System</option>
                        <option value="Commercial Solar Plant">Commercial Solar Plant (10kW+)</option>
                        <option value="Solar Agricultural Pump">Solar Water Pump</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your rooftop area or energy requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-solar text-white font-bold py-3.5 rounded-xl text-sm shadow-lg hover:shadow-solar-glow transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Map Location Embed */}
          <div className="mt-16 bg-white p-4 rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 px-2">
              Our Location in Rohaniya, Varanasi
            </h3>
            <iframe
              title="Vishwanath Solar Location Map"
              src={BUSINESS_INFO.googleMapEmbed}
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
}
