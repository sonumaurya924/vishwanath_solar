import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle, Award, Landmark, FileText, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import QuoteModal from '../common/QuoteModal';

export default function PMSuryaGharSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-solar-dark via-slate-900 to-solar-primary-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
          
          {/* Decorative SVG Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-solar-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solar-secondary text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 fill-current" /> PM Surya Ghar Muft Bijli Yojana
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Get Up to <span className="text-solar-secondary font-black">₹78,000</span> Government Subsidy for Varanasi Homes
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Under the Central Government's scheme, residential consumers installing rooftop solar panels get direct financial subsidy deposited into their Aadhaar-linked bank account, providing up to <strong>300 units of free electricity per month</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-solar-secondary shrink-0" />
                  <span>1 kW System: ₹30,000 Subsidy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-solar-secondary shrink-0" />
                  <span>2 kW System: ₹60,000 Subsidy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-solar-secondary shrink-0" />
                  <span>3 kW+ System: ₹78,000 Max Subsidy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-solar-secondary shrink-0" />
                  <span>Low Interest Solar Loan (~7% p.a.)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/pm-surya-ghar"
                  className="bg-solar-secondary text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-lg"
                >
                  View Scheme Guidelines <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm border border-white/20 transition-colors"
                >
                  Apply Now With Us
                </button>
              </div>

            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-solar-secondary text-slate-950 flex items-center justify-center font-bold">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Bank Loan & EMI Support</h3>
                    <p className="text-xs text-slate-300">Collateral Free Solar Loans</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4">
                  <div className="flex justify-between">
                    <span>Partner Banks:</span>
                    <strong className="text-white">SBI, PNB, BOB, Union Bank</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate:</span>
                    <strong className="text-solar-secondary">~7% p.a. (Subsidized)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Tenure:</span>
                    <strong className="text-white">Up to 7 Years</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Down Payment:</span>
                    <strong className="text-white">Minimal (After Subsidy)</strong>
                  </div>
                </div>

                <div className="bg-solar-primary/30 p-3.5 rounded-2xl border border-solar-primary/40 text-xs text-teal-200 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-solar-secondary shrink-0" />
                  <span>Vishwanath Solar completes all portal documentation!</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
