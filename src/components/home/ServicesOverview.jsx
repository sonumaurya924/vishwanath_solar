import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Solar Energy Solutions"
          subtitle="From residential rooftops under PM Surya Ghar to megawatt commercial and agricultural pumps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <GlassCard key={service.id} className="flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-48 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="bg-solar-secondary text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-solar-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-solar-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/services"
                  className="w-full bg-slate-100 hover:bg-gradient-solar hover:text-white text-slate-800 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Learn More & Book Survey <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
