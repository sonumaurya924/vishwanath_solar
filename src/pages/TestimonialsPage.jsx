import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, Quote, MapPin, Send } from 'lucide-react';
import QuoteModal from '../components/common/QuoteModal';

export default function TestimonialsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Customer Testimonials & Reviews Varanasi Solar"
        description="Read real customer reviews and 5-star testimonials from homeowners and business owners across Varanasi who installed solar panels with Vishwanath Solar."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Verified Varanasi Reviews
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Customer Success Stories
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            See how our customers in Rohaniya, Assi, Lanka, and Sigra are enjoying free solar energy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-solar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((item) => (
              <GlassCard key={item.id} className="flex flex-col justify-between relative">
                <Quote className="w-12 h-12 text-solar-primary/10 absolute top-6 right-6 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-solar-secondary">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                      }}
                      className="w-12 h-12 rounded-full object-cover border-2 border-solar-primary"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">{item.name}</h4>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-solar-primary" /> {item.location}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-solar-primary bg-solar-primary/10 px-2.5 py-1 rounded-md">
                    {item.systemSize}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-solar text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:shadow-solar-glow transition-all inline-flex items-center gap-2"
            >
              Join Our Happy Solar Customers <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
