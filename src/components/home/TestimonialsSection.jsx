import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-solar-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Customer Reviews"
          title="What Varanasi Homeowners Say About Us"
          subtitle="Real reviews from customers in Rohaniya, Lanka, Sigra, and Assi Ghat who have switched to clean solar energy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <GlassCard key={item.id} className="flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-solar-primary/10 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-solar-secondary">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
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
                    className="w-10 h-10 rounded-full object-cover border-2 border-solar-primary"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900">{item.name}</h4>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-solar-primary" /> {item.location}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-solar-primary bg-solar-primary/10 px-2 py-1 rounded-md">
                  {item.systemSize}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
