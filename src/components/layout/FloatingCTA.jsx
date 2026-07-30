import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/business';

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Namaste Vishwanath Solar Power Solution! I would like to inquire about Rooftop Solar Installation and PM Surya Ghar Subsidy in Varanasi.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-solar-primary transition-all duration-300 hover:scale-110"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.rawPhones[0]}`}
        className="group relative flex items-center gap-2 bg-gradient-solar text-white px-4 py-3 rounded-full shadow-xl hover:shadow-solar-glow hover:scale-105 transition-all duration-300 border border-white/20"
        title="Call Solar Expert Now"
      >
        <Phone className="w-5 h-5 text-solar-secondary animate-bounce" />
        <span className="hidden sm:inline font-semibold text-xs pr-1">Call Expert</span>
        
        {/* Tooltip on Hover */}
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          {BUSINESS_INFO.phones[0]}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-xl hover:bg-emerald-500 hover:scale-105 transition-all duration-300 border border-white/20"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold text-xs pr-1">WhatsApp Us</span>

        {/* Pulse Indicator */}
        <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3.5 h-3.5 bg-solar-secondary rounded-full animate-ping"></span>
        <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3.5 h-3.5 bg-solar-secondary rounded-full"></span>
      </a>
    </div>
  );
}
