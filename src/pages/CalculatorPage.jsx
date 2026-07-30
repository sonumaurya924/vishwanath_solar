import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import GlassCard from '../components/common/GlassCard';
import { calculateSolarMetrics } from '../utils/calculator';
import { 
  Calculator, 
  ShieldCheck, 
  TreePine, 
  Zap, 
  ArrowRight, 
  Send, 
  Globe, 
  Car, 
  Info,
  CheckCircle2,
  Award,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import QuoteModal from '../components/common/QuoteModal';
import confetti from 'canvas-confetti';

export default function CalculatorPage() {
  const [bill, setBill] = useState(4000);
  const [roofArea, setRoofArea] = useState(250);
  const [calcMode, setCalcMode] = useState('bill'); // 'bill' or 'roofArea'
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const metrics = calculateSolarMetrics(bill, roofArea, calcMode);

  const handleBillChange = (e) => {
    const val = Number(e.target.value);
    setBill(val);
    setCalcMode('bill');
  };

  const handleRoofAreaChange = (e) => {
    const val = Number(e.target.value);
    setRoofArea(val);
    setCalcMode('roofArea');
  };

  const handleClaimQuote = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
    setIsQuoteOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Interactive Solar Savings & UP Subsidy Calculator"
        description="Calculate rooftop solar system size, monthly & lifetime savings, MNRE Central Subsidy (₹78,000) and UP State Subsidy (₹30,000) for your Varanasi home."
      />

      {/* Header Hero */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solar-secondary text-slate-950 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current" /> PM Surya Ghar • UP State Subsidy Calculator
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Solar Savings & Subsidy Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Adjust your monthly bill or available roof space to calculate system size, UP state subsidy, and 25-year financial ROI.
          </p>
        </div>
      </section>

      {/* Main Interactive Calculator Area */}
      <section className="py-12 bg-solar-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Sliders Container Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 space-y-8">
            
            {/* 1. Monthly Bill Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  Avg electricity bill (₹)
                  <Info className="w-4 h-4 text-slate-400" title="Your average monthly UPVCL bill" />
                </label>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span>Min ₹500</span>
                  <span>Max ₹25,000</span>
                </div>
              </div>

              <div className="relative pt-2 pb-6">
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={metrics.monthlyBill}
                  onChange={handleBillChange}
                  className="w-full h-3.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-primary"
                />
                
                {/* Floating Value Pill */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-slate-900 text-white font-extrabold text-xs sm:text-sm px-4 py-1 rounded-full shadow-md">
                  ₹{metrics.monthlyBill.toLocaleString()} / month
                </div>
              </div>
            </div>

            {/* 2. Available Roof Area Slider (NOW FULLY FUNCTIONAL & DYNAMIC!) */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  Rooftop Area Available (Sq. Ft.)
                  <Info className="w-4 h-4 text-slate-400" title="Shadow-free rooftop space in square feet" />
                </label>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span>Min 80 sq. ft</span>
                  <span>Max 2,500 sq. ft</span>
                </div>
              </div>

              <div className="relative pt-2 pb-6">
                <input
                  type="range"
                  min="80"
                  max="2500"
                  step="20"
                  value={metrics.roofAreaSqFt}
                  onChange={handleRoofAreaChange}
                  className="w-full h-3.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-primary"
                />
                
                {/* Floating Value Pill */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-solar-primary text-white font-extrabold text-xs sm:text-sm px-4 py-1 rounded-full shadow-md">
                  {metrics.roofAreaSqFt} sq. ft.
                </div>
              </div>
            </div>

          </div>

          {/* SECTION A: Required System Size */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Required System Size
            </h3>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="space-y-1 pb-4 md:pb-0">
                <div className="text-xs text-slate-500 font-bold uppercase flex items-center justify-center gap-1">
                  <Zap className="w-4 h-4 text-solar-secondary" /> System Size
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  {metrics.recommendedKw} <span className="text-base font-bold text-solar-primary">kW</span>
                </div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <div className="text-xs text-slate-500 font-bold uppercase flex items-center justify-center gap-1">
                  <Calculator className="w-4 h-4 text-solar-primary" /> Roof Area Needed
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  {metrics.roofAreaSqFt} <span className="text-base font-bold text-slate-600">sq. ft.</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-100/70 p-3.5 rounded-xl text-center text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>Do not have required roof area? Our consultants in Varanasi will guide you.</span>
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className="text-solar-primary font-bold hover:underline underline-offset-2"
              >
                Get in touch →
              </button>
            </div>
          </div>

          {/* SECTION B: UP State + Central Government Subsidy Breakdown */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-solar-dark text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span className="bg-solar-secondary text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
                  Uttar Pradesh Exclusive
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1">
                  Government Subsidy Breakdown
                </h3>
              </div>
              <div className="text-xs text-slate-400">
                PM Surya Ghar Muft Bijli Yojana
              </div>
            </div>

            {/* 3 Subsidy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Central Subsidy */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-bold uppercase">1. Central Subsidy (MNRE)</div>
                <div className="text-2xl font-black text-amber-400">
                  ₹{metrics.centralSubsidy.toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-400">Common across all states</div>
              </div>

              {/* State Subsidy */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-teal-300 font-bold uppercase">2. UP State Subsidy</div>
                <div className="text-2xl font-black text-emerald-400">
                  ₹{metrics.stateSubsidy.toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-400">Exclusive UP Govt Bonus</div>
              </div>

              {/* Total Subsidy */}
              <div className="bg-gradient-solar p-5 rounded-2xl text-white shadow-lg space-y-1 border border-white/20">
                <div className="text-[11px] text-teal-100 font-black uppercase">TOTAL GOVT SUBSIDY</div>
                <div className="text-3xl font-black text-solar-secondary">
                  ₹{metrics.totalSubsidy.toLocaleString()}
                </div>
                <div className="text-[10px] text-teal-100 font-semibold">
                  (₹{(metrics.totalSubsidy / 100000).toFixed(2)} Lakhs Total Subsidy!)
                </div>
              </div>

            </div>

            {/* Financial Net Out-of-Pocket Summary */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Estimated System Cost (MSP):</span>
                <span className="font-bold text-white">₹{metrics.estimatedTotalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Less: Total Combined Government Subsidy:</span>
                <span>- ₹{metrics.totalSubsidy.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg font-black text-solar-secondary border-t border-slate-800 pt-3">
                <span>Effective Net Cost to Customer:</span>
                <span className="text-2xl text-amber-300">₹{metrics.netInvestmentCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* SECTION C: Your Solar Savings (SolarSquare Template Style) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Your Solar Savings
            </h3>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
              
              <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                Your Savings with Vishwanath Solar
              </div>

              {/* 3 Savings Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
                
                <div className="space-y-1 pb-4 md:pb-0">
                  <div className="text-xs text-slate-500 font-medium">Monthly*</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    ₹{metrics.monthlySavings.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-1 py-4 md:py-0">
                  <div className="text-xs text-slate-500 font-medium">Yearly*</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-solar-primary">
                    ₹{metrics.yearlySavings.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-1 pt-4 md:pt-0">
                  <div className="text-xs text-slate-500 font-medium">Lifetime (25 Years)*</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                    ₹{metrics.lifetimeSavings.toLocaleString()}
                  </div>
                </div>

              </div>

              {/* Guarantee Banner */}
              <div className="bg-teal-50/80 p-4 rounded-xl border border-teal-100 text-center space-y-1">
                <div className="text-xs sm:text-sm font-extrabold text-solar-primary flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-solar-secondary" />
                  We offer 25-year performance warranty & 5-year AMC with Vishwanath Solar
                </div>
              </div>

            </div>
          </div>

          {/* SECTION D: Environmental Impact (Saves More Than Money) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Your Solar Saves More Than Money
            </h3>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              <div className="space-y-1 pb-4 md:pb-0">
                <div className="text-xs text-slate-500 font-bold uppercase flex items-center justify-center gap-1">
                  <Globe className="w-4 h-4 text-sky-500" /> CO₂ Mitigated
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {metrics.co2MitigatedKg.toLocaleString()} <span className="text-sm font-normal text-slate-500">Kg/yr</span>
                </div>
              </div>

              <div className="space-y-1 py-4 md:py-0">
                <div className="text-xs text-slate-500 font-bold uppercase flex items-center justify-center gap-1">
                  <TreePine className="w-4 h-4 text-emerald-500" /> Trees Planted
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                  {metrics.treesPlanted} <span className="text-sm font-normal text-slate-500">Trees</span>
                </div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <div className="text-xs text-slate-500 font-bold uppercase flex items-center justify-center gap-1">
                  <Car className="w-4 h-4 text-amber-500" /> EV Driving Distance
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {metrics.evDistanceKm.toLocaleString()} <span className="text-sm font-normal text-slate-500">Kms</span>
                </div>
              </div>

            </div>
          </div>

          {/* Action CTA Box */}
          <div className="bg-gradient-solar text-white p-8 rounded-3xl shadow-2xl text-center space-y-4">
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Ready to Claim Your ₹1.08 Lakh UP Govt Subsidy?
            </h3>
            <p className="text-teal-100 text-xs sm:text-sm max-w-lg mx-auto">
              Our Varanasi solar engineers will conduct a free rooftop survey and process your DISCOM net metering & subsidy registration.
            </p>

            <button
              onClick={handleClaimQuote}
              className="bg-solar-secondary text-slate-950 font-black text-sm px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> Book Free Site Inspection In Varanasi
            </button>
          </div>

        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
