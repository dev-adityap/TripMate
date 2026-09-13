import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 pb-8">
      
      {/* 1. Cinematic CTA Banner */}
      <div className="relative w-full h-[320px] md:h-[280px] rounded-3xl overflow-hidden shadow-xl flex items-center bg-slate-900 group">
        
        {/* Background Image Setup */}
        <img 
          src="/assets/placeholders/footer-bg.jpg" 
          alt="Travelers watching sunset"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          onError={(e) => {
            e.target.style.display = 'none';
            // Fallback gradient if image is missing
            e.target.parentElement.classList.add('bg-gradient-to-r', 'from-slate-900', 'to-purple-950');
          }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* CTA Content */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 lg:p-16">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
              Your next trip shouldn't depend on who's free.
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium">
              Find your people. Plan together. Travel further.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center relative">
            <button 
              onClick={() => navigate('/discover')}
              className="px-8 py-3.5 rounded-full bg-white text-purple-700 font-bold shadow-lg hover:bg-slate-50 transition-colors flex items-center gap-2 group/btn"
            >
              Find Your Trip
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
            {/* Decorative Handwritten Text */}
            <div className="hidden lg:block absolute -right-24 -top-16 text-pink-300 transform -rotate-12 w-48 text-center">
              <span className="font-medium text-lg italic leading-tight block">Collect Moments<br/>Not Things</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pt-8 border-t border-slate-200">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-black text-xl italic">
              TM
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">TripMate</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            Find people. Plan together. Travel further.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-3">
            <li><button onClick={() => navigate('/discover')} className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Destinations</button></li>
            <li><button onClick={() => navigate('/discover')} className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Trips</button></li>
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">How it works</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-3">
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">About</button></li>
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Privacy</button></li>
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Terms</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Support</h4>
          <ul className="space-y-3">
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Help Center</button></li>
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">Contact</button></li>
            <li><button className="text-sm text-slate-500 hover:text-purple-600 transition-colors">FAQs</button></li>
          </ul>
        </div>
      </div>

      {/* 3. Bottom Socials & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
        
        {/* Social Icons */}
        {/* Social Links Fallback */}
        <div className="flex items-center gap-5 text-sm font-bold text-slate-400">
          <button className="hover:text-slate-900 transition-colors">IG</button>
          <button className="hover:text-slate-900 transition-colors">TW</button>
          <button className="hover:text-slate-900 transition-colors">GH</button>
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium text-slate-400">
          © {new Date().getFullYear()} TripMate. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default FooterCTA;