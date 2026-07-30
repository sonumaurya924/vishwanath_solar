import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowRight, User } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/business';
import QuoteModal from '../common/QuoteModal';

export default function ContactCTASection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Need Expert Advice?
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              Book Your <span className="text-solar-secondary">Free Site Survey</span> In Varanasi Today
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Speak directly with business owner <strong>{BUSINESS_INFO.owner}</strong> or our solar engineers. We will analyze your roof, calculate savings, and file your PM Surya Ghar subsidy!
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-solar-secondary shrink-0" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-solar-secondary shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-solar-secondary shrink-0" />
                <span>Proprietor: <strong>{BUSINESS_INFO.owner}</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-gradient-solar text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-xl hover:shadow-solar-glow transition-all flex items-center gap-2"
              >
                Request Site Visit <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhones[0]}`}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-solar-secondary" /> Call {BUSINESS_INFO.phones[0]}
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-5">
            <div className="glass-card-dark p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">Instant Callback Request</h3>
              <p className="text-xs text-slate-400">Leave your details and we will call you within 15 minutes.</p>

              <form onSubmit={(e) => { e.preventDefault(); setIsQuoteOpen(true); }} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-solar-primary"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone (+91)"
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-solar-primary"
                />
                <button
                  type="submit"
                  className="w-full bg-solar-secondary text-slate-950 font-bold py-3.5 rounded-xl text-sm hover:bg-amber-400 transition-colors"
                >
                  Request Callback Now
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
