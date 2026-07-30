import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { BLOGS_DATA } from '../data/blogs';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Government Scheme', 'Savings & ROI', 'Technical & Legal'];

  const filteredBlogs = selectedCat === 'All' 
    ? BLOGS_DATA 
    : BLOGS_DATA.filter(b => b.category === selectedCat);

  return (
    <>
      <SEOHead
        title="Solar Knowledge Blog & Articles Varanasi"
        description="Read latest articles on PM Surya Ghar scheme, solar ROI calculations, net metering procedures, and rooftop maintenance in Uttar Pradesh."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Varanasi Solar Guide
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Solar Energy Blog & News
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Educational articles and expert advice to help you make informed decisions about rooftop solar power.
          </p>
        </div>
      </section>

      <section className="py-20 bg-solar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCat === cat
                    ? 'bg-solar-primary text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <GlassCard key={post.id} className="flex flex-col justify-between overflow-hidden group">
                <div>
                  <div className="relative h-48 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-solar-secondary text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-solar-primary" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-solar-primary" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-solar-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">By {post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-solar-primary font-bold text-xs hover:text-solar-primary-dark flex items-center gap-1"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
