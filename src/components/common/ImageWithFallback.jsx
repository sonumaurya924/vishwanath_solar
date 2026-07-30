import React, { useState } from 'react';

/**
 * Robust Image component with graceful inline SVG fallback if image fails to load
 */
export default function ImageWithFallback({
  src,
  alt = 'Vishwanath Solar',
  className = '',
  fallbackSrc = 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
  ...props
}) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (!error) {
      setError(true);
      if (imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
    }
  };

  if (error && imgSrc === fallbackSrc) {
    // Ultimate SVG fallback if even fallback URL fails
    return (
      <div className={`bg-gradient-to-br from-slate-900 to-solar-dark flex items-center justify-center p-6 text-center text-white ${className}`}>
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-full bg-solar-secondary/20 text-solar-secondary flex items-center justify-center mx-auto font-bold text-xl">
            ☀️
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
            {alt}
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  );
}
