import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { BUSINESS_INFO } from '../constants/business';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead title="Privacy Policy - Vishwanath Solar Power Solution" />

      <section className="py-16 bg-solar-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <h1 className="font-heading font-extrabold text-3xl text-slate-900 border-b border-slate-100 pb-4">
              Privacy Policy
            </h1>

            <p>
              At <strong>{BUSINESS_INFO.name}</strong>, accessible from our official website, protecting the privacy of our Varanasi customers is one of our top priorities. This Privacy Policy document outlines the types of information collected and how we use it.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">1. Information We Collect</h2>
            <p>
              When you fill out a quote request form, solar calculator inquiry, or site survey booking, we collect personal information including your Name, Mobile Phone Number, Email Address, Premises Location, and Electricity Bill details.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To evaluate rooftop solar feasibility and calculate PM Surya Ghar government subsidy eligibility.</li>
              <li>To contact you via phone or WhatsApp to schedule a site survey in Varanasi.</li>
              <li>To submit net-metering applications to UPVCL on your authorization.</li>
            </ul>

            <h2 className="font-heading font-bold text-lg text-slate-900">3. Data Protection & Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party marketing companies. Data is shared exclusively with government portals (such as PM Surya Ghar National Portal and UP DISCOM) as required for official subsidy clearance.
            </p>

            <h2 className="font-heading font-bold text-lg text-slate-900">4. Contact Us</h2>
            <p>
              If you have any questions regarding this privacy policy, please contact us at {BUSINESS_INFO.phones[0]} or visit our office near Sunbeam Dalims, Parmanandpur, Rohaniya, Varanasi, UP - 221107.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
