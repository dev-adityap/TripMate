import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Mail, Phone, ChevronDown, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      q: "How does the traveler matching algorithm work?",
      a: "Our algorithm matches you based on overlapping destination wishlists, budget ranges, and preferred travel styles (e.g., trekking, luxury, backpacking)."
    },
    {
      q: "Are the trip bookings secure?",
      a: "Yes! All group transactions and partner booking integrations use industry-standard encryption and secure payment gateways."
    },
    {
      q: "Can I create my own private group trip?",
      a: "Absolutely. When creating or publishing a trip, you can set it to private and invite specific friends via a unique workspace link."
    },
    {
      q: "How do I contact my trip organizer?",
      a: "Once you join a trip, you gain instant access to the Group Workspace where you can chat, vote on activities, and message the organizer directly."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-textPrimary tracking-tight mb-4">Customer Support</h1>
          <p className="text-textSecondary text-sm">Have questions or need assistance with your booking? We're here 24/7 to help.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-surface p-6 rounded-3xl border border-gray-50 shadow-card text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4">
              <MessageSquare size={22} />
            </div>
            <h3 className="font-bold text-textPrimary mb-1">Live Chat</h3>
            <p className="text-textSecondary text-xs mb-4">Average response: 5 mins</p>
            <button className="text-xs font-bold text-primary-500 hover:underline">Start Chat</button>
          </div>

          <div className="bg-surface p-6 rounded-3xl border border-gray-50 shadow-card text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-success-50 text-success-500 rounded-2xl flex items-center justify-center mb-4">
              <Mail size={22} />
            </div>
            <h3 className="font-bold text-textPrimary mb-1">Email Support</h3>
            <p className="text-textSecondary text-xs mb-4">support@tripmate.com</p>
            <a href="mailto:support@tripmate.com" className="text-xs font-bold text-primary-500 hover:underline">Send Email</a>
          </div>

          <div className="bg-surface p-6 rounded-3xl border border-gray-50 shadow-card text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
              <Phone size={22} />
            </div>
            <h3 className="font-bold text-textPrimary mb-1">Toll-Free Helpline</h3>
            <p className="text-textSecondary text-xs mb-4">1800-TRIPMATE</p>
            <span className="text-xs font-bold text-textPrimary">Mon-Sat (9am - 7pm)</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-textPrimary mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-textPrimary text-sm sm:text-base"
                >
                  {faq.q}
                  <ChevronDown size={18} className={`transform transition-transform ${openFaq === index ? 'rotate-180 text-primary-500' : 'text-gray-400'}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-textSecondary text-sm leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface rounded-3xl p-8 sm:p-10 shadow-card border border-gray-50">
          <h2 className="text-2xl font-bold text-textPrimary mb-2">Send Us a Message</h2>
          <p className="text-textSecondary text-sm mb-6">Fill out the form below and our team will get back to you within 24 hours.</p>

          {submitted ? (
            <div className="bg-success-50 border border-success-200 text-success-700 p-6 rounded-2xl text-center font-semibold text-sm">
              Thank you! Your message has been received. Our support team will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className="bg-background border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500" />
                <input type="email" placeholder="Your Email Address" required className="bg-background border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500" />
              </div>
              <textarea rows="4" placeholder="How can we help you?" required className="bg-background border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-primary-500"></textarea>
              <button type="submit" className="w-full sm:w-fit px-8 py-3 bg-primary-500 text-white font-bold rounded-xl shadow-md hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
                <Send size={16} /> Submit Request
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="py-8 text-center text-textSecondary text-sm border-t border-gray-100 bg-white">
        © 2026 TripMate Inc. All rights reserved. Built for travelers.
      </footer>
    </div>
  );
};

export default SupportPage;