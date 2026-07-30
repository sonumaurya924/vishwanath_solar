import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { SERVICES_DATA } from '../data/services';
import { CheckCircle2, ArrowRight, ShieldCheck, Sun, Zap } from 'lucide-react';
import QuoteModal from '../components/common/QuoteModal';

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Solar Panel Installation Services - Varanasi"
        description="Residential rooftop solar (PM Surya Ghar), commercial solar power plants, and agricultural solar pumps in Varanasi."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Our Core Offerings
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Solar Panel Services in Varanasi
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Turnkey solar EPC solutions with 25-year panel performance warranties and full UP Government subsidy approval support.
          </p>
        </div>
      </section>

      <section className="py-20 bg-solar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-solar-secondary text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                      {service.tagline}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-solar-primary">
                  {service.tagline}
                </span>

                <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Technical Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-solar-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="bg-gradient-solar text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md hover:shadow-solar-glow transition-all flex items-center gap-2"
                  >
                    Request Survey & Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
