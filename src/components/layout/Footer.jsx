import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart, Award } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../../constants/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solar-dark text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Solar Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-solar flex items-center justify-center text-white shadow-md">
                <Sun className="w-6 h-6 text-solar-secondary" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-none block">
                  Vishwanath <span className="text-solar-primary-light">Solar</span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium tracking-wide block uppercase mt-0.5">
                  Power Solution • Varanasi
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Leading rooftop solar installation company in Varanasi under PM Surya Ghar Muft Bijli Yojana. Authorized MNRE vendor for residential, commercial & agricultural solar solutions.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-solar-secondary mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-solar-secondary shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${BUSINESS_INFO.rawPhones[0]}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phones[0]}</a>
                  <span>/</span>
                  <a href={`tel:${BUSINESS_INFO.rawPhones[1]}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phones[1]}</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-solar-secondary shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-solar-secondary"></span> Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_LINKS.slice(0, 7).map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-solar-secondary transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="w-3 h-3 text-solar-primary-light" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Government Scheme */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-solar-primary-light"></span> Our Specializations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/pm-surya-ghar" className="hover:text-solar-secondary transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-solar-secondary" /> PM Surya Ghar Subsidy (₹78k)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Residential Rooftop Solar</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Commercial Solar Plants</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Industrial Solar Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Solar Agricultural Water Pumps</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Lithium Battery Hybrid Storage</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Solar AMC & Cleaning Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Owner & Approval */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-solar-secondary" /> Government Certified
            </h4>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
              <div className="text-xs text-solar-primary-light font-semibold uppercase tracking-wider">Business Owner</div>
              <div className="text-white font-bold text-base">{BUSINESS_INFO.owner}</div>
              <p className="text-xs text-slate-400">
                Authorized Solar EPC Partner in Varanasi & Eastern UP.
              </p>
            </div>

            <div className="bg-solar-primary/20 p-3 rounded-xl border border-solar-primary/30 text-xs text-teal-200 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-solar-secondary shrink-0" />
              <span>Registered Vendor under MNRE & UPVCL DISCOM Portal</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>{BUSINESS_INFO.name}</strong>. All rights reserved. Designed for Varanasi Solar Ecosystem.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
