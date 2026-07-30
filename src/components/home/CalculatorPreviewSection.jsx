import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, ShieldCheck, TreePine } from 'lucide-react';
import { calculateSolarMetrics } from '../../utils/calculator';
import GlassCard from '../common/GlassCard';

export default function CalculatorPreviewSection() {
  const [bill, setBill] = useState(4000);
  const metrics = calculateSolarMetrics(bill) || {};

  return (
    <section className="py-20 bg-solar-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Controls */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-solar-primary/10 text-solar-primary border border-solar-primary/20">
              <Calculator className="w-3.5 h-3.5" /> Solar Savings Preview
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
              See How Much You Save With Rooftop Solar
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Drag the slider below to select your approximate monthly UPVCL electricity bill in Varanasi.
            </p>

            {/* Bill Slider */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">Monthly Electricity Bill</span>
                <span className="text-2xl font-extrabold text-solar-primary">₹{bill.toLocaleString()} / mo</span>
              </div>

              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-primary"
              />

              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>₹1,000</span>
                <span>₹10,000</span>
                <span>₹25,000+</span>
              </div>
            </div>

            <Link
              to="/calculator"
              className="w-full bg-gradient-solar text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-solar-glow transition-all flex items-center justify-center gap-2"
            >
              Open Full Comprehensive Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Live Results Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <GlassCard className="space-y-2 border-l-4 border-l-solar-primary">
                <div className="text-xs text-slate-500 font-bold uppercase">Recommended Solar Size</div>
                <div className="text-3xl font-extrabold text-slate-900 flex items-baseline gap-1">
                  {metrics.recommendedKw || 3} <span className="text-base text-solar-primary">kW</span>
                </div>
                <div className="text-xs text-slate-500">
                  Requires ~{metrics.roofAreaSqFt || 250} sq. ft roof space
                </div>
              </GlassCard>

              <GlassCard className="space-y-2 border-l-4 border-l-solar-secondary">
                <div className="text-xs text-slate-500 font-bold uppercase">Combined Govt Subsidy</div>
                <div className="text-3xl font-extrabold text-solar-secondary">
                  ₹{(metrics.totalSubsidy || 108000).toLocaleString()}
                </div>
                <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Central (₹78k) + UP State (₹30k)
                </div>
              </GlassCard>

              <GlassCard className="space-y-2 border-l-4 border-l-emerald-500">
                <div className="text-xs text-slate-500 font-bold uppercase">Annual Electricity Savings</div>
                <div className="text-3xl font-extrabold text-emerald-600">
                  ₹{(metrics.annualSavings || metrics.yearlySavings || 36000).toLocaleString()}
                </div>
                <div className="text-xs text-slate-500">
                  ~{metrics.monthlyGenerationUnits || 360} units generated / month
                </div>
              </GlassCard>

              <GlassCard className="space-y-2 border-l-4 border-l-sky-500">
                <div className="text-xs text-slate-500 font-bold uppercase">Payback Period (ROI)</div>
                <div className="text-3xl font-extrabold text-sky-600">
                  {metrics.paybackYears || 2.0} <span className="text-base font-normal">Years</span>
                </div>
                <div className="text-xs text-slate-500">
                  Free electricity for remaining 22+ yrs!
                </div>
              </GlassCard>

            </div>

            {/* Carbon Footer Bar */}
            <div className="mt-4 bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <TreePine className="w-5 h-5 text-emerald-400" />
                <span>CO₂ Reduced: <strong>{metrics.annualCo2ReductionTons || 3.5} Tons/yr</strong></span>
              </div>
              <div className="text-emerald-300 font-semibold">
                Equivalent to planting {metrics.equivalentTreesPlanted || 160} trees!
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
