import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, ChevronUp, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'PM Surya Ghar', 'Installation & Technical', 'Financials & Warranty', 'Maintenance'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions (FAQ) - Solar Varanasi"
        description="Answers to common questions regarding PM Surya Ghar Muft Bijli Yojana, solar panel installation, net metering UPVCL, subsidies, and maintenance in Varanasi."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Help & Knowledge Hub
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about switching to solar energy in Varanasi.
          </p>
        </div>
      </section>

      <section className="py-20 bg-solar-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. subsidy, net metering, warranty...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-solar-primary"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-solar-primary text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white p-8 rounded-3xl text-center text-slate-500 text-sm">
                No matching questions found. Call us at <strong>{BUSINESS_INFO.phones[0]}</strong> for immediate answers!
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-solar-primary transition-colors gap-4"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-solar-secondary shrink-0" />
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-solar-primary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions CTA */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
            <h3 className="font-heading font-bold text-xl text-white">Have a specific question not answered here?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              Call solar expert <strong>{BUSINESS_INFO.owner}</strong> directly for personalized consultation.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhones[0]}`}
                className="inline-flex items-center gap-2 bg-solar-secondary text-slate-950 font-extrabold px-6 py-3 rounded-xl text-sm hover:bg-amber-400 transition-colors shadow"
              >
                <PhoneCall className="w-4 h-4" /> Call {BUSINESS_INFO.phones[0]}
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
