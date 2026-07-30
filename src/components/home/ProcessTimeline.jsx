import React from 'react';
import { PhoneCall, Search, FileText, ShieldCheck, Wrench, Activity, Sun } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function ProcessTimeline() {
  const steps = [
    {
      step: "Step 01",
      icon: PhoneCall,
      title: "Free Consultation",
      desc: "Contact us via phone or WhatsApp. We discuss your energy bill, roof area, and budget."
    },
    {
      step: "Step 02",
      icon: Search,
      title: "Rooftop Site Survey",
      desc: "Our Varanasi engineers visit your property in Rohaniya or surrounding areas for shadow analysis."
    },
    {
      step: "Step 03",
      icon: FileText,
      title: "Custom Proposal",
      desc: "Get an exact system design (1kW-10kW+) with complete PM Surya Ghar subsidy details."
    },
    {
      step: "Step 04",
      icon: ShieldCheck,
      title: "Government Approval",
      desc: "We file your application on the PM Surya Ghar National Portal & UPVCL DISCOM system."
    },
    {
      step: "Step 05",
      icon: Wrench,
      title: "Fast Installation",
      desc: "Our technicians install Tier-1 Mono PERC panels and inverter within 2 to 3 days."
    },
    {
      step: "Step 06",
      icon: Activity,
      title: "Net Metering",
      desc: "UPVCL engineers inspect the plant and install bi-directional net meter."
    },
    {
      step: "Step 07",
      icon: Sun,
      title: "Free Solar Power",
      desc: "Start generating clean energy, save on electricity bills, and receive ₹78k subsidy!"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Simple 7-Step Process"
          title="From Free Survey to Clean Energy Generation"
          subtitle="Hassle-free execution. We handle all paperwork, DISCOM net metering, and subsidy filing."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/80 backdrop-blur-md p-6 rounded-3xl border border-slate-700 hover:border-solar-primary transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-solar-secondary bg-solar-secondary/10 px-3 py-1 rounded-full uppercase">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-solar-primary/20 text-solar-primary-light flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-solar-secondary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
