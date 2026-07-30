import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { ShieldCheck, CheckCircle, Landmark, FileText, Sparkles, ArrowRight, PhoneCall, HelpCircle, Wrench } from 'lucide-react';
import QuoteModal from '../components/common/QuoteModal';

export default function PMSuryaGharPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Exact data from official Uttar Pradesh PM Surya Ghar Tariff & Subsidy Sheet
  const upSubsidyTable = [
    { capacity: "2-KWp", production: "3,210 KWH/Yr", msp: "₹ 1,30,000", mnre: "₹ 60,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 90,000", effectiveCost: "₹ 40,000" },
    { capacity: "3-KWp", production: "4,860 KWH/Yr", msp: "₹ 1,80,000", mnre: "₹ 78,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 1,08,000", effectiveCost: "₹ 72,000" },
    { capacity: "4-KWp", production: "6,480 KWH/Yr", msp: "₹ 2,40,000", mnre: "₹ 78,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 1,08,000", effectiveCost: "₹ 1,32,000" },
    { capacity: "5-KWp (1Ph)", production: "8,100 KWH/Yr", msp: "₹ 3,00,000", mnre: "₹ 78,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 1,08,000", effectiveCost: "₹ 1,92,000" },
    { capacity: "5-KWp (3Ph)", production: "8,100 KWH/Yr", msp: "₹ 3,30,000", mnre: "₹ 78,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 1,08,000", effectiveCost: "₹ 2,22,000" },
    { capacity: "8-KWp (3Ph)", production: "12,150 KWH/Yr", msp: "₹ 4,80,000", mnre: "₹ 78,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 1,08,000", effectiveCost: "₹ 3,72,000" },
    { capacity: "10-KWp (3Ph)", production: "15,390 KWH/Yr", msp: "₹ 6,00,000", mnre: "₹ 78,000", upGovt: "₹ 30,000", totalSubsidy: "₹ 1,08,000", effectiveCost: "₹ 4,92,000" }
  ];

  const steps = [
    { num: "01", title: "National Portal Registration", desc: "Register with your UPVCL consumer account number & mobile on pmsuryaghar.gov.in." },
    { num: "02", title: "Vendor Selection", desc: "Select Vishwanath Solar Power Solution as your authorized registered vendor in Varanasi." },
    { num: "03", title: "Feasibility & Approval", desc: "UPVCL subdivision officers inspect and approve DISCOM grid feasibility." },
    { num: "04", title: "Panel Installation", desc: "We install ALMM approved Mono PERC panels & BIS certified grid tie inverter." },
    { num: "05", title: "Net Metering", desc: "Bi-directional net meter installed by UPVCL engineers." },
    { num: "06", title: "Subsidy Credit", desc: "Direct Bank Transfer (DBT) of Central + UP State Subsidy (up to ₹1.08 Lakhs) into your account!" }
  ];

  return (
    <>
      <SEOHead
        title="PM Surya Ghar & UP State Solar Subsidy (₹1.08 Lakhs Total)"
        description="Official Uttar Pradesh rooftop solar subsidy breakdown. Get ₹78,000 Central MNRE subsidy + ₹30,000 UP State subsidy with Vishwanath Solar Varanasi."
      />

      {/* Header Banner */}
      <section className="bg-gradient-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solar-secondary text-slate-950 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current" /> DUAL SUBSIDY • UTTAR PRADESH GOVT
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Get Up To <span className="text-solar-secondary">₹1,08,000</span> Combined Solar Subsidy
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Uttar Pradesh homeowners receive Central MNRE Subsidy (up to ₹78,000) + UP State Government Subsidy (₹30,000). Authorized vendor Vishwanath Solar handles all filing!
          </p>
        </div>
      </section>

      {/* Official UP State Subsidy Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <SectionHeading
            badge="Official Uttar Pradesh Rate Card"
            title="PM Surya Ghar + UP Govt Subsidy Breakdown"
            subtitle="Mono PERC / Half Cut High Efficiency Systems Pricing & Subsidies"
          />

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-2xl bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm uppercase tracking-wider font-heading">
                  <th className="p-4 sm:p-5">Capacity</th>
                  <th className="p-4 sm:p-5">Annual Generation</th>
                  <th className="p-4 sm:p-5">System Price (MSP)</th>
                  <th className="p-4 sm:p-5 text-amber-400">Central Subsidy (MNRE)</th>
                  <th className="p-4 sm:p-5 text-emerald-400">UP Govt Subsidy</th>
                  <th className="p-4 sm:p-5 text-solar-secondary">Total Subsidy</th>
                  <th className="p-4 sm:p-5">Effective Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {upSubsidyTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-4 sm:p-5 font-black text-slate-900">{row.capacity}</td>
                    <td className="p-4 sm:p-5 text-slate-600 font-semibold">{row.production}</td>
                    <td className="p-4 sm:p-5 text-slate-500 font-medium">{row.msp}</td>
                    <td className="p-4 sm:p-5 font-bold text-amber-600">{row.mnre}</td>
                    <td className="p-4 sm:p-5 font-bold text-emerald-600">{row.upGovt}</td>
                    <td className="p-4 sm:p-5 font-extrabold text-solar-primary text-base">{row.totalSubsidy}</td>
                    <td className="p-4 sm:p-5 font-black text-slate-900 text-base">{row.effectiveCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center space-y-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-solar text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-solar-glow transition-all"
            >
              Book Free Site Survey & Claim ₹1.08 Lakh Subsidy
            </button>
          </div>

        </div>
      </section>

      {/* Bill of Materials (BOM) Technical Specs Card */}
      <section className="py-16 bg-solar-bg border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-solar-primary uppercase tracking-widest">Quality Assurance</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Standard Bill of Materials (BOM) Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="space-y-3">
              <div className="text-xs font-bold text-solar-primary uppercase flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-solar-secondary" /> Solar Modules & Inverters
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• 540 Wp / 550 Wp Tier-1 Mono PERC Bifacial Panels</li>
                <li>• BIS Certified On-Grid Pure Sine Inverters</li>
                <li>• 25-Year Linear Power Warranty</li>
              </ul>
            </GlassCard>

            <GlassCard className="space-y-3">
              <div className="text-xs font-bold text-solar-primary uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-solar-secondary" /> Wiring & Protections
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• UV Protected 4 SQ-MM / 10 SQ-MM Copper/Aluminum Solar Cable</li>
                <li>• 2 IN 2 OUT SPD with fuse protection DCDB & ACDB</li>
                <li>• 5-Spike Copper Coated Lightning Arrestor (LA)</li>
              </ul>
            </GlassCard>

            <GlassCard className="space-y-3">
              <div className="text-xs font-bold text-solar-primary uppercase flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-solar-secondary" /> Net Metering & Mounting
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Hot Dip Galvanized Iron Structure (150 km/h Wind Rated)</li>
                <li>• UPVCL Bi-directional Net Meter Box (1-Phase / 3-Phase)</li>
                <li>• Dual Copper Chemical Earthing Sets</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Application Steps Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Step-by-Step Guide"
            title="How to Claim Your Combined Subsidy in Varanasi"
            subtitle="Vishwanath Solar handles steps 2 through 6 completely for you!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <GlassCard key={idx} className="space-y-3 relative">
                <div className="w-10 h-10 rounded-full bg-solar-primary text-white font-extrabold flex items-center justify-center text-sm shadow">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
