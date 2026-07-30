import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { Sun, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="404 Page Not Found - Vishwanath Solar" />

      <section className="min-h-[75vh] flex items-center justify-center bg-solar-bg py-20 px-4 text-center">
        <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200 space-y-6">
          <div className="w-20 h-20 rounded-full bg-solar-secondary/20 text-solar-secondary flex items-center justify-center mx-auto">
            <Sun className="w-12 h-12 animate-pulse" />
          </div>

          <h1 className="font-heading font-extrabold text-6xl text-slate-900">404</h1>
          <h2 className="font-heading font-bold text-xl text-slate-800">Page Not Found</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            to="/"
            className="w-full bg-gradient-solar text-white font-bold py-3.5 rounded-xl text-sm shadow-md hover:shadow-solar-glow transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Return To Home Page
          </Link>
        </div>
      </section>
    </>
  );
}
