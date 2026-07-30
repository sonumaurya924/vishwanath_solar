import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { BUSINESS_INFO } from '../constants/business';

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms & Conditions - Vishwanath Solar Power Solution" />

      <section className="py-16 bg-solar-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <h1 className="font-heading font-extrabold text-3xl text-slate-900 border-b border-slate-100 pb-4">
              Terms & Conditions
            </h1>

            <p>
              Welcome to <strong>{BUSINESS_INFO.name}</strong>. By accessing our services, requesting site surveys, or installing rooftop solar systems with us, you agree to comply with the following terms.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">1. Solar System Warranty Terms</h2>
            <p>
              Solar panels supplied by Vishwanath Solar Power Solution carry a 25-Year Linear Power Performance Warranty as provided by original Tier-1 equipment manufacturers (Waaree, Adani, Tata, etc.). Inverters carry standard 5 to 10 year manufacturer warranty.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">2. PM Surya Ghar Government Subsidy</h2>
            <p>
              Subsidy approval and disbursement timing are governed by Ministry of New and Renewable Energy (MNRE) guidelines and DISCOM processing speeds. While Vishwanath Solar facilitates all portal documentation, final subsidy credit is transferred directly from Central Government to the customer's Aadhaar-linked bank account.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">3. Net Metering Approvals</h2>
            <p>
              Net meter commissioning is subject to UPVCL subdivision feasibility clearances and grid load availability in the respective local area.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">4. Governing Law</h2>
            <p>
              Any disputes or legal inquiries shall be subject to the jurisdiction of courts in Varanasi, Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
