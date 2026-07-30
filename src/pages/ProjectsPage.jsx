import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { PROJECTS_DATA } from '../data/projects';
import { MapPin, Calendar, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import QuoteModal from '../components/common/QuoteModal';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <>
      <SEOHead
        title="Completed Solar Projects - Varanasi Portfolio"
        description="Explore our solar installations across Varanasi, Rohaniya, and UP. Over 1,000 happy solar panel customers."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Proven Track Record
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Our Installed Solar Projects in Varanasi
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Over 5 Megawatts of residential rooftops, commercial complexes, and agricultural solar pumps installed.
          </p>
        </div>
      </section>

      <section className="py-20 bg-solar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  filter === cat
                    ? 'bg-solar-primary text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <GlassCard key={project.id} className="flex flex-col justify-between overflow-hidden group">
                <div>
                  <div className="relative h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl bg-slate-900">
                    <ImageWithFallback
                      src={project.imageAfter}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-solar-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-solar-secondary" />
                        <span className="truncate max-w-[180px]">{project.location}</span>
                      </div>
                      <span className="font-extrabold text-solar-secondary">{project.capacity}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 mb-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Annual Savings:</span>
                      <span className="font-extrabold text-emerald-600">{project.annualSavings}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Subsidy Received:</span>
                      <span className="font-bold text-solar-primary">{project.subsidyReceived}</span>
                    </div>
                  </div>

                  <div className="italic text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200">
                    "{project.review}"
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-solar text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:shadow-solar-glow transition-all"
            >
              Get Free Estimate For Your Location
            </button>
          </div>

        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
