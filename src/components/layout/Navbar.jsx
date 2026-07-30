import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Sun, Menu, X, ArrowRight, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../../constants/business';
import QuoteModal from '../common/QuoteModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Main primary links for desktop header
  const primaryLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "PM Surya Ghar", path: "/pm-surya-ghar" },
    { label: "Calculator", path: "/calculator" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
  ];

  // Secondary links placed cleanly inside "More ▾" dropdown
  const secondaryLinks = [
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "FAQ", path: "/faq" },
    { label: "Blog", path: "/blog" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSecondaryActive = secondaryLinks.some(link => link.path === location.pathname);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Government Authorization Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-solar-primary/20 text-teal-300 px-3 py-0.5 rounded-full text-[11px] font-semibold border border-solar-primary/40">
              <span className="w-2 h-2 rounded-full bg-solar-secondary animate-pulse"></span>
              <ShieldCheck className="w-3.5 h-3.5 text-solar-secondary shrink-0" />
              <span>Approved PM Surya Ghar Vendor</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400 text-[11px] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-solar-secondary" /> Rohaniya, Varanasi
            </span>
          </div>

          {/* Direct Support Phone */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-slate-400 font-medium hidden sm:inline">Call Expert:</span>
            <a 
              href={`tel:${BUSINESS_INFO.rawPhones[0]}`} 
              className="hover:text-solar-secondary transition-colors flex items-center gap-1 font-bold text-white"
            >
              <Phone className="w-3 h-3 text-solar-secondary" /> {BUSINESS_INFO.phones[0]}
            </a>
          </div>

        </div>
      </div>

      {/* Main Clean Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Clean Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-solar-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 text-solar-secondary" />
            </div>

            <div>
              <span className="font-heading font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none block">
                Vishwanath <span className="text-solar-primary">Solar</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-widest block uppercase mt-0.5">
                Varanasi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Spacious & Clean */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-solar-primary bg-solar-primary/10 font-bold'
                      : 'text-slate-700 hover:text-solar-primary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* More Dropdown for Secondary Pages */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1 ${
                  isSecondaryActive
                    ? 'text-solar-primary bg-solar-primary/10 font-bold'
                    : 'text-slate-700 hover:text-solar-primary hover:bg-slate-50'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-scale-up">
                  {secondaryLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className={`block px-4 py-2 text-xs font-bold transition-colors ${
                        location.pathname === subLink.path
                          ? 'text-solar-primary bg-solar-primary/10'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-solar-primary'
                      }`}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.rawPhones[0]}`}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-solar-primary bg-slate-50 hover:bg-white text-slate-700 hover:text-solar-primary transition-all shadow-sm"
              title="Call Solar Specialist"
            >
              <Phone className="w-4 h-4 text-solar-primary" />
            </a>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-solar text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-solar-glow hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 text-solar-secondary" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-solar-primary hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-solar-primary flex items-center justify-center text-white">
                    <Sun className="w-5 h-5 text-solar-secondary" />
                  </div>
                  <span className="font-heading font-bold text-slate-900 text-base">Vishwanath Solar</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* All Links Listed Cleanly in Mobile */}
              <div className="py-4 space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'text-white bg-solar-primary font-bold shadow-sm'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full bg-gradient-solar text-white py-3 rounded-xl text-sm font-bold shadow-md flex items-center justify-center gap-2"
              >
                Get Free Quote <ArrowRight className="w-4 h-4 text-solar-secondary" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhones[0]}`}
                className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-solar-secondary" /> Call {BUSINESS_INFO.phones[0]}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
