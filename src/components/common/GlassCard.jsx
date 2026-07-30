import React from 'react';

export default function GlassCard({ children, className = '', dark = false, hover = true }) {
  return (
    <div className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
      dark ? 'glass-card-dark text-white' : 'glass-card text-slate-800'
    } ${
      hover ? 'hover:shadow-glass-hover hover:-translate-y-1.5' : 'shadow-glass'
    } ${className}`}>
      {children}
    </div>
  );
}
