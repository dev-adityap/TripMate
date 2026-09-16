import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    text: "✨ Experiences that stay with you forever. Explore hidden gems & curated journeys."
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    text: "🌊 Discover tranquil coastal escapes and pristine white-sand beaches."
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
    text: "🏔️ Conquer majestic mountain peaks with expert local mountaineers."
  },
  {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    text: "🛣️ Embark on legendary road trips through breathtaking landscapes."
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] selection:bg-blue-600 selection:text-white pb-24 pl-0 md:pl-24 overflow-x-hidden font-sans relative">
      
      {/* ========================================================= */}
      {/* SUBTLE DIM AMBIENT GLOWS (Zero Glare)                     */}
      {/* ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Midnight Slate Vibe + Serif Header)        */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-center relative z-10">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-6 shadow-xs">
          <Sparkles size={12} /> Curated Expeditions & Boutique Travel
        </div>

        {/* Giant Elegant Heading */}
        <h1 className="text-5xl md:text-8xl font-serif tracking-tight leading-none text-[#F1F5F9] mb-6">
          Your <span className="italic font-normal text-[#38BDF8]">Travel</span> <br />
          Guide
        </h1>

        <p className="text-[#94A3B8] text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8">
          Not just destinations—experiences that stay with you forever. Explore hidden gems, curated journeys, and unforgettable adventures crafted just for you.
        </p>

        {/* CTA Button */}
        <Link 
          to="/discover" 
          className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
        >
          Start Exploring
        </Link>

        {/* Floating Circular Photo Bubbles */}
        <div className="absolute left-8 top-32 hidden lg:block">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl border-2 border-[#1E293B]">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Beach" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="absolute right-12 top-40 hidden lg:block">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl border-2 border-[#1E293B]">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" alt="Mountain" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. AUTOMATIC 3-SECOND CAROUSEL ARCHED HERO IMAGE CONTAINER */}
      {/* ========================================================= */}
      <div className="max-w-6xl mx-auto px-6 mt-16 relative z-10">
        <div className="relative w-full h-[480px] md:h-[580px] rounded-[50px] overflow-hidden shadow-2xl border border-[#1E293B] bg-[#0F172A]">
          
          {/* Map through slides with smooth crossfade opacity */}
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt="Boutique Destination Slide" 
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/30 to-transparent"></div>
              
              {/* Dynamic Slide Caption */}
              <div className="absolute bottom-10 left-0 right-0 text-center px-6 z-20">
                <p className="text-[#F1F5F9] text-xs md:text-sm font-medium tracking-widest uppercase drop-shadow-md bg-[#131B2E]/80 backdrop-blur-md inline-block px-5 py-2 rounded-full border border-[#1E293B]">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}

          {/* Carousel Indicator Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide ? 'w-8 bg-sky-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. FEATURED BOUTIQUE EXPEDITIONS GRID */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 mt-28 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-black text-[#38BDF8] uppercase tracking-widest">Handcrafted</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F1F5F9] mt-1">Featured Journeys</h2>
          </div>
          <Link to="/discover" className="text-sm font-bold text-[#38BDF8] hover:underline flex items-center gap-1">
            View All Collection <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockDestinations.slice(0, 3).map((trip) => (
            <Link to={`/destination/${trip.id}`} key={trip.id} className="group bg-[#111827] rounded-3xl overflow-hidden shadow-xl border border-[#1F2937] hover:border-blue-500/50 transition-all">
              <div className="h-64 overflow-hidden relative bg-[#1F2937]">
                <img src={trip.image} alt={trip.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                <div className="absolute top-4 right-4 bg-[#0B0F17]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-400 border border-[#1F2937]">
                  {trip.price || '₹14,500'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#F1F5F9] group-hover:text-sky-400 transition-colors">{trip.name || trip.title}</h3>
                <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium mt-2">
                  <MapPin size={14} className="text-[#38BDF8]" /> {trip.location || trip.state}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}