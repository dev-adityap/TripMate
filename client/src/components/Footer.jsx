import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Copy, Check, Compass, Clock } from 'lucide-react';

const FAQS = [
  {
    q: 'How does Squad Expense Splitting work on TripMate?',
    a: 'Every booked batch unlocks a shared Squad Workspace where cab, cafe, and stay bills are automatically divided equally and settled via your linked UPI ID.'
  },
  {
    q: 'Are high-altitude permits and inner-line passes included?',
    a: 'Yes. Verified circuits in Spiti, Ladakh, Sikkim, and Arunachal include inner-line permit processing synced directly with your Travel Documents tab.'
  },
  {
    q: 'Can I access the destination map offline during a trek?',
    a: 'Yes. Enable Offline Map Cache inside Settings → Map Engines to store regional topography before ascending beyond cellular coverage.'
  }
];

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyInvite = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <footer className="w-full bg-[#09090B] border-t border-white/10 text-zinc-100 pt-16 pb-12 px-6 md:px-14 no-print">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Expandable FAQ Accordion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              Expedition Knowledge Base
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mt-3">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-white/50 mt-2 leading-relaxed">
              Everything you need to know about batch bookings, Splitwise UPI settlements, and high-altitude safety protocols.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-white hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={17}
                      className={`text-amber-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-white/60 leading-relaxed border-t border-white/5 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Links & Clickable Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
          <div className="space-y-3">
            <Link to="/home" className="inline-flex items-center gap-2 text-xl font-black text-white">
              <Compass className="text-amber-400" size={24} /> TripMate
            </Link>
            <p className="text-xs text-white/50 leading-relaxed">
              Curated Himalayan treks, backpacker circuits, and real-time squad workspaces across 100+ Indian destinations.
            </p>
            <button
              type="button"
              onClick={handleCopyInvite}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-bold text-amber-300 transition-all cursor-pointer"
            >
              {copiedLink ? <Check size={14} /> : <Copy size={14} />}
              {copiedLink ? 'Platform Link Copied!' : 'Copy Invite Link'}
            </button>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><Link to="/home" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/discover" className="hover:text-amber-400 transition-colors">Discover</Link></li>
              <li><Link to="/map" className="hover:text-amber-400 transition-colors">India Map Explorer</Link></li>
              <li><Link to="/trips" className="hover:text-amber-400 transition-colors">Upcoming Trips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-3">
              Workspace & Account
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><Link to="/workspaces" className="hover:text-amber-400 transition-colors">Squad Workspaces</Link></li>
              <li><Link to="/create" className="hover:text-amber-400 transition-colors">Create Custom Trip</Link></li>
              <li><Link to="/wishlist" className="hover:text-amber-400 transition-colors">Saved Wishlist</Link></li>
              <li><Link to="/settings" className="hover:text-amber-400 transition-colors">Enterprise Settings</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-3">
              Direct Dispatch
            </h4>
            <a
              href="tel:+91123456789"
              className="flex items-center gap-2 text-xs text-white/70 hover:text-amber-400 transition-colors"
            >
              <Phone size={14} className="text-amber-400" /> +91 123456789
            </a>
            <a
              href="mailto:adityapanna009@gmail.com"
              className="flex items-center gap-2 text-xs text-white/70 hover:text-amber-400 transition-colors"
            >
              <Mail size={14} className="text-amber-400" /> adityapanna009@gmail.com
            </a>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-white/40">
              <Clock size={12} className="text-emerald-400" /> Last Updated: October 2026
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© 2026 TripMate Expeditions Pvt. Ltd. Built by Aditya Panna. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/settings" className="hover:text-white transition-colors">Privacy & Security</Link>
            <Link to="/settings" className="hover:text-white transition-colors">Terms of Expedition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
