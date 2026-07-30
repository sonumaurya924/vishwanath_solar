import { useEffect } from 'react';

export default function SEOHead({ title, description, keywords }) {
  useEffect(() => {
    // Title
    const defaultTitle = "Vishwanath Solar Power Solution | Top Solar Panel Installation & PM Surya Ghar Subsidy in Varanasi";
    document.title = title ? `${title} | Vishwanath Solar Varanasi` : defaultTitle;

    // Meta Description
    const defaultDesc = "Authorized PM Surya Ghar Muft Bijli Yojana solar installation vendor in Varanasi. Rooftop solar panels, residential & commercial solar systems, net metering, up to ₹78,000 government subsidy. Call +91 9415310623.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || defaultDesc;

    // Scroll to top on route render
    window.scrollTo(0, 0);
  }, [title, description, keywords]);

  return null;
}
