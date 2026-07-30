import React from 'react';
import { 
  ShieldCheck, 
  IndianRupee, 
  Activity, 
  Sun, 
  Award, 
  Search, 
  Landmark, 
  Zap 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Government Approved Vendor",
      desc: "Authorized vendor under MNRE & UPVCL for PM Surya Ghar Muft Bijli Yojana."
    },
    {
      icon: IndianRupee,
      title: "MNRE Subsidy Support",
      desc: "Direct guidance to claim up to ₹78,000 subsidy deposited straight into your bank account."
    },
    {
      icon: Activity,
      title: "Net Metering Assistance",
      desc: "End-to-end DISCOM approval, bi-directional net meter installation, and testing."
    },
    {
      icon: Sun,
      title: "Premium Solar Panels",
      desc: "Tier-1 Mono PERC & Bifacial ALMM listed panels from Waaree, Adani, and Tata."
    },
    {
      icon: Award,
      title: "25 Years Panel Warranty",
      desc: "Long term performance warranty for 25 years with continuous energy generation."
    },
    {
      icon: Search,
      title: "Free Site Survey",
      desc: "Expert rooftop shadow analysis and structural engineering assessment in Varanasi."
    },
    {
      icon: Landmark,
      title: "Bank Loan Assistance",
      desc: "Low interest collateral-free solar loans from SBI, PNB, and Bank of Baroda."
    },
    {
      icon: Zap,
      title: "Quick 3-Day Installation",
      desc: "Fast execution by experienced in-house technicians in Rohaniya and Varanasi."
    }
  ];

  return (
    <section className="py-20 bg-solar-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Choose Us"
          title="Varanasi's Most Trusted Solar Panel Installer"
          subtitle="We combine local Varanasi presence with technical engineering excellence, government approvals, and transparent pricing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-solar-primary/10 text-solar-primary flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
