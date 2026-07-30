import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Rooftop Solar Installation Rohaniya",
      category: "Rooftop",
      src: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Commercial Solar Power Array",
      category: "Commercial",
      src: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Solar Water Pumping System",
      category: "Agricultural",
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Industrial Solar EPC Varanasi",
      category: "Commercial",
      src: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "Solar Panel Cleaning & Maintenance AMC",
      category: "Maintenance",
      src: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "Lithium Battery Hybrid System",
      category: "Rooftop",
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const categories = ['All', 'Rooftop', 'Commercial', 'Agricultural', 'Maintenance'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <SEOHead
        title="Solar Photo Gallery - Vishwanath Solar Power Solution"
        description="High resolution photo gallery of rooftop solar installations, commercial solar power plants, and solar maintenance in Varanasi."
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Visual Highlights
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Solar Installation Photo Gallery
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Take a look at our quality workmanship and premium solar panel installations across Varanasi.
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

          {/* Masonry Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer group bg-slate-900"
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-white">
                  <span className="text-[10px] font-bold text-solar-secondary uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-white truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-solar-secondary p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <ImageWithFallback
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="font-heading font-bold text-lg">{selectedImage.title}</h3>
              <p className="text-xs text-solar-secondary font-semibold uppercase tracking-wider">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
