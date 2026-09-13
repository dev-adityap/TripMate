import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#F3F4F6] to-[#EEF2FF] p-8 md:p-12 lg:p-16 border border-slate-100 shadow-sm">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
          
          {/* Public Beta Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            TripMate Public Beta is Live
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Find the people.<br />
            Plan the trip.<br />
            <span className="text-purple-600">Go together.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
            Connect with like-minded travelers, join exciting trips, and turn your travel dreams into real adventures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => navigate('/discover')}
              className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all duration-200 flex items-center gap-2 group"
            >
              Start Your Journey 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => navigate('/discover')}
              className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 transition-all duration-200 shadow-sm"
            >
              Explore Trips
            </button>
          </div>

          {/* Quick Metrics Underneath */}
          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-200/60 w-full max-w-lg">
            <div>
              <div className="text-2xl font-extrabold text-slate-900">1.2K+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Travelers</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">58+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Destinations</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">48+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Trips Forming</div>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Graphic & Floating Card */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Travel Visual Container (Local Placeholder System) */}
          <div className="w-full h-[400px] lg:h-[450px] rounded-3xl overflow-hidden relative shadow-xl bg-slate-300 border-4 border-white">
            
            {/* Image Placeholder tag - easily replaceable with an asset later */}
            <img 
              src="/assets/placeholders/hero-trip.jpg" 
              alt="Travelers in mountains" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback styled background container if asset is missing
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-slate-400', 'to-slate-600');
              }}
            />

            {/* Subtle Gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

            {/* Bottom-right location tag matching the reference */}
            <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 border border-white/10 shadow-lg">
              <MapPin size={14} className="text-purple-400" />
              <span>Leh Ladakh, Jammu & Kashmir</span>
            </div>

            {/* Floating Featured Destination Card */}
            <div className="absolute top-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden flex-shrink-0">
                  <img 
                    src="/assets/placeholders/ladakh.jpg" 
                    alt="Leh Ladakh" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">LL</div>';
                    }}
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-600 block">Featured Destination</span>
                  <h4 className="text-sm font-bold text-slate-900">Leh Ladakh</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                    <span className="flex items-center gap-1"><Users size={12} /> 8 Travelers</span>
                    <span>•</span>
                    <span>₹22,000 • 7 Days</span>
                  </div>
                </div>
              </div>
              
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;