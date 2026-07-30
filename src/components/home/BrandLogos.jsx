import React from 'react';
import { BRAND_LOGOS } from '../../constants/business';

export default function BrandLogos() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Authorized Tier-1 Solar Equipment Partners
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {BRAND_LOGOS.map((brand, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:bg-white hover:shadow-md hover:border-solar-primary/30 transition-all duration-300 group"
            >
              <div className="font-heading font-extrabold text-sm sm:text-base text-slate-700 group-hover:text-solar-primary transition-colors">
                {brand.logo}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 font-medium truncate">
                {brand.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
