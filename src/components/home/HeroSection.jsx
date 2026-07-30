import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, ShieldCheck, ArrowRight, Calculator, PhoneCall, Award, Users, Zap, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/business';
import QuoteModal from '../common/QuoteModal';

export default function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-950 text-white overflow-hidden pt-8 pb-16">
      {/* Background Solar Image with Glass Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-solar-dark/80"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-solar-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-solar-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Government Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-solar-primary/20 border border-solar-primary/40 text-solar-primary-light text-xs font-semibold backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-solar-secondary" />
              <span>Government Approved Vendor • PM Surya Ghar Muft Bijli Yojana</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none sm:leading-tight">
              Power Your Home with <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-secondary via-amber-300 to-amber-500">Clean Solar Energy</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Trusted Solar Panel Installation Company in Varanasi. Claim up to <strong className="text-solar-secondary font-bold">₹78,000 Government Subsidy</strong> and lower your electricity bill to zero.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-gradient-solar text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-xl hover:shadow-solar-glow hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group"
              >
                Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/calculator"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Calculator className="w-5 h-5 text-solar-secondary" /> Calculate Savings
              </Link>
            </div>

            {/* Contact Highlight Strip */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-solar-secondary" />
                <span>Call Owner ({BUSINESS_INFO.owner}): <strong className="text-white">{BUSINESS_INFO.phones[0]}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Free Site Survey in Varanasi</span>
              </div>
            </div>

          </div>

          {/* Right Floating Card / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-card-dark rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-solar-secondary font-bold uppercase tracking-wider block">PM Surya Ghar Scheme</span>
                  <h3 className="text-xl font-bold text-white">Instant Subsidy Rates</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-solar-secondary/20 text-solar-secondary flex items-center justify-center">
                  <Sun className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Subsidy Tiers Preview */}
              <div className="space-y-3">
                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">1 kW System</div>
                    <div className="text-sm font-semibold text-white">120 Units / month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-emerald-400 font-medium">Govt Subsidy</div>
                    <div className="text-base font-extrabold text-solar-secondary">₹30,000</div>
                  </div>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">2 kW System</div>
                    <div className="text-sm font-semibold text-white">240 Units / month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-emerald-400 font-medium">Govt Subsidy</div>
                    <div className="text-base font-extrabold text-solar-secondary">₹60,000</div>
                  </div>
                </div>

                <div className="bg-gradient-solar p-4 rounded-2xl text-white shadow-lg flex items-center justify-between">
                  <div>
                    <span className="bg-solar-secondary text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">UP State Special</span>
                    <div className="text-sm font-bold mt-1">3 kW+ Rooftop Solar</div>
                    <div className="text-xs text-teal-100">Central (₹78k) + UP State (₹30k)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-teal-200 font-medium">TOTAL SUBSIDY</div>
                    <div className="text-xl font-black text-amber-300">₹1,08,000</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/pm-surya-ghar"
                  className="w-full bg-white text-slate-950 font-bold py-3 rounded-xl text-center block text-sm hover:bg-amber-400 transition-colors shadow"
                >
                  Apply For Government Subsidy →
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-800/80 pt-8">
          <div className="bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
            <Users className="w-6 h-6 text-solar-secondary mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1,000+</div>
            <div className="text-xs text-slate-400 mt-1">Happy Solar Customers</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
            <Zap className="w-6 h-6 text-solar-primary-light mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-white">5 MW+</div>
            <div className="text-xs text-slate-400 mt-1">Installed Solar Capacity</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
            <Award className="w-6 h-6 text-solar-secondary mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-white">10+ Years</div>
            <div className="text-xs text-slate-400 mt-1">Varanasi Local Experience</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
            <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-white">24×7</div>
            <div className="text-xs text-slate-400 mt-1">Service & AMC Support</div>
          </div>
        </div>

      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
