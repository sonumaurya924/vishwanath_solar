import React, { useState } from 'react';
import { X, Send, CheckCircle, Phone, MapPin, User, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/business';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    capacity: '3 kW (PM Surya Ghar Recommended)',
    billAmount: '₹3,000 - ₹5,000 / month',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/20 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-solar p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block bg-solar-secondary text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Free Rooftop Survey & Quote
          </span>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Vishwanath Solar Power Solution
          </h3>
          <p className="text-teal-100 text-xs sm:text-sm mt-1">
            Get up to ₹78,000 PM Surya Ghar Subsidy guidance from Varanasi experts.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our solar specialist from Rohaniya, Varanasi will call you shortly at <strong>{formData.phone}</strong>.
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Vishwanath%20Solar,%20I%20requested%20a%20quote%20for%20${encodeURIComponent(formData.capacity)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow"
                >
                  Connect Immediately on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="text-slate-500 hover:text-slate-700 text-sm font-medium pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Amit Maurya"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 94153XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Location / Area</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Rohaniya, Varanasi"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Solar Size</label>
                  <select
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary focus:bg-white transition-all"
                  >
                    <option value="1 kW (PM Surya Ghar)">1 kW (PM Surya Ghar)</option>
                    <option value="2 kW (PM Surya Ghar)">2 kW (PM Surya Ghar)</option>
                    <option value="3 kW (PM Surya Ghar Recommended)">3 kW (Recommended - ₹78,000 Subsidy)</option>
                    <option value="5 kW Residential">5 kW Residential</option>
                    <option value="10 kW Commercial">10 kW Commercial / Institution</option>
                    <option value="25 kW+ Industrial">25 kW+ Industrial Solar</option>
                    <option value="Solar Water Pump">Solar Agricultural Pump</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Avg Monthly Bill</label>
                  <select
                    value={formData.billAmount}
                    onChange={(e) => setFormData({ ...formData, billAmount: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary focus:bg-white transition-all"
                  >
                    <option value="Under ₹2,000 / month">Under ₹2,000 / month</option>
                    <option value="₹2,000 - ₹4,000 / month">₹2,000 - ₹4,000 / month</option>
                    <option value="₹4,000 - ₹8,000 / month">₹4,000 - ₹8,000 / month</option>
                    <option value="Above ₹10,000 / month">Above ₹10,000 / month</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-gradient-solar text-white font-semibold py-3.5 rounded-xl text-sm shadow-lg hover:shadow-solar-glow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Request Free Site Inspection
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
