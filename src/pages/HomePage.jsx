import React from 'react';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/home/HeroSection';
import BrandLogos from '../components/home/BrandLogos';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesOverview from '../components/home/ServicesOverview';
import ProcessTimeline from '../components/home/ProcessTimeline';
import CalculatorPreviewSection from '../components/home/CalculatorPreviewSection';
import PMSuryaGharSection from '../components/home/PMSuryaGharSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTASection from '../components/home/ContactCTASection';

export default function HomePage() {
  return (
    <>
      <SEOHead 
        title="Home - Vishwanath Solar Power Solution Varanasi" 
        description="Top Solar Panel Installation Company in Varanasi under PM Surya Ghar Muft Bijli Yojana. Get up to ₹78,000 government subsidy. Call +91 9415310623."
      />
      <HeroSection />
      <BrandLogos />
      <WhyChooseUs />
      <ServicesOverview />
      <ProcessTimeline />
      <CalculatorPreviewSection />
      <PMSuryaGharSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
