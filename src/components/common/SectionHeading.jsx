import React from 'react';

export default function SectionHeading({ badge, title, subtitle, centered = true, dark = false }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 sm:mb-16`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
          dark 
            ? 'bg-solar-primary/20 text-solar-primary-light border-solar-primary/40'
            : 'bg-solar-primary/10 text-solar-primary border-solar-primary/20'
        }`}>
          {badge}
        </span>
      )}
      {title && (
        <h2 className={`font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
          dark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
