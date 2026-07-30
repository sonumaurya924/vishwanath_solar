import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { BUSINESS_INFO } from '../constants/business';
import { ShieldCheck, Award, Users, Sun, Target, Eye, Heart, CheckCircle2, PhoneCall } from 'lucide-react';
import QuoteModal from '../components/common/QuoteModal';

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="About Us - Vishwanath Solar Power Solution Varanasi"
        description="Learn about Vishwanath Solar Power Solution, founded by Amit Maurya in Rohaniya, Varanasi. Authorized solar EPC company for PM Surya Ghar Yojana."
      />

      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Varanasi's Leading Solar EPC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">
            About Vishwanath Solar Power Solution
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Empowering households, institutions, and businesses in Varanasi with clean, affordable, and government-subsidized rooftop solar energy.
          </p>
        </div>
      </section>

      {/* Company Story & Owner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-solar-primary uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                Dedicated to Lighting Up Varanasi with Solar Energy
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded by <strong>{BUSINESS_INFO.owner}</strong> in Rohaniya, Varanasi, <strong>Vishwanath Solar Power Solution</strong> has grown into one of Eastern Uttar Pradesh's most trusted solar panel installation firms.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We specialize in residential rooftop solar setups under the <strong>PM Surya Ghar Muft Bijli Yojana</strong>, heavy commercial rooftop arrays, and agricultural solar pumping systems. Our team handles every single technical requirement—from rooftop structural layout and shadow profiling to DISCOM net-metering liaisoning and subsidy portal clearance.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-solar-primary text-white flex items-center justify-center font-bold">
                    <Award className="w-6 h-6 text-solar-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-base">Proprietor: {BUSINESS_INFO.owner}</h3>
                    <p className="text-xs text-slate-500">Solar EPC Pioneer & Renewable Advocate in UP</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 border-t border-slate-200 pt-3">
                  "Our goal is to ensure every family in Varanasi receives maximum government subsidy and enjoys zero monthly electricity bills."
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80"
                  alt="Vishwanath Solar Rooftop Project Varanasi"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Near Sunbeam Dalims, Rohaniya
                  </span>
                  <h3 className="text-lg font-bold text-white">Authorized MNRE & UPVCL Solar Vendor</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-solar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Principles"
            title="Mission, Vision & Values"
            subtitle="Guiding every rooftop solar installation we perform across Uttar Pradesh."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-solar-primary/10 text-solar-primary flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To provide high quality, government-subsidized rooftop solar systems to over 10,000 households in Varanasi and surrounding districts by 2026.
              </p>
            </GlassCard>

            <GlassCard className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-solar-secondary/20 text-solar-secondary flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To make Varanasi a model self-reliant green solar city, lowering carbon emissions and eliminating heavy electricity bills for families.
              </p>
            </GlassCard>

            <GlassCard className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">Our Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Absolute transparency in component specifications, 100% adherence to MNRE standards, and lifetime prompt customer support.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Government Approvals */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>MNRE Registered • Government Portal Approved Vendor</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            Why Customers Trust Vishwanath Solar Power Solution
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-solar-primary mx-auto mb-2" />
              <strong>100% Subsidy Assistance</strong>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-solar-primary mx-auto mb-2" />
              <strong>Tier-1 ALMM Panels</strong>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-solar-primary mx-auto mb-2" />
              <strong>Fast Net Metering</strong>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-solar-primary mx-auto mb-2" />
              <strong>Local Rohaniya Office</strong>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-solar text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-solar-glow transition-all"
            >
              Book Free Site Survey In Varanasi
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
