import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Map, Calendar, Shield, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [currentImg, setCurrentImg] = useState(0);

  // 100% stable, high-res direct Unsplash CDN links mapped to your exact requested locations
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1599476160130-3af44b69ec6e?q=80&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Taj Mahal, Agra"
    },
    {
      url: "https://images.unsplash.com/photo-1581879705211-78784fcc1a49?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Pangong Tso, Ladakh"
    },
    {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
      location: "Munnar Tea Gardens, Kerala"
    },
    {
      url: "https://images.pexels.com/photos/15276684/pexels-photo-15276684.jpeg?_gl=1*geyyg9*_ga*NDE2OTEwMDkyLjE3ODkwNzc3MjM.*_ga_8JE65Q40S6*czE3ODkwNzc3MjMkbzEkZzEkdDE3ODkwNzc3NDUkajM4JGwwJGgw",
      location: "Sandakphu (Nepal/India Border)"
    },
    {
      url: "https://images.pexels.com/photos/4233677/pexels-photo-4233677.jpeg?_gl=1*12mq6gz*_ga*NDE2OTEwMDkyLjE3ODkwNzc3MjM.*_ga_8JE65Q40S6*czE3ODkwNzc3MjMkbzEkZzEkdDE3ODkwNzc4NjkkajU5JGwwJGgw",
      location: "Meghalaya"
    },
    {
      url: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1600&q=80",
      location: "Valley of Flowers, Uttarakhand"
    },
    {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
      location: "Palolem Beach, Goa"
    },
    {
      url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80",
      location: "Elephant Beach, Andaman & Nicobar Islands"
    }
  ];

  // Auto-play slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* HERO SECTION - Added pt-28 to clear the navbar completely */}
      <main className="flex-grow flex items-center pt-28 pb-12 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 border border-primary-100 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase">TripMate Public Beta is Live</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-textPrimary tracking-tight leading-[1.1] mb-6">
              Find the people.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Plan the trip. Go together.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-textSecondary mb-8 max-w-xl leading-relaxed">
              Don't let schedule conflicts or unmatched budgets ruin your travel dreams. Connect with compatible travelers, build collaborative itineraries, and turn "maybe someday" into "booking today."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/register" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center shadow-primary-500/25 hover:shadow-primary-500/40 text-base py-3 px-8">
                  Start Your Journey 
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/discover" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center bg-white text-base py-3 px-8">
                  Explore Trips
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Immersive Slideshow Card */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group">
            {heroImages.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={image.url} 
                  alt={image.location} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay at the bottom for the label */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Perfectly synced location badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-sm font-semibold tracking-wide">{image.location}</span>
                </div>
              </div>
            ))}

            {/* Manual Slide Controls */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
              <button 
                onClick={() => setCurrentImg((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setCurrentImg((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-surface border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Why travel with TripMate?</h2>
          <p className="text-textSecondary max-w-2xl mx-auto mb-16">Everything you need to find your travel tribe and organize the perfect getaway in one seamless platform.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-50 group">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-lg font-bold text-textPrimary mb-2">Smart Matching</h3>
              <p className="text-textSecondary text-sm leading-relaxed">Our algorithm connects you with travelers who share your destination, budget, and travel style.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-50 group">
              <div className="w-16 h-16 bg-success-50 text-success-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Map size={32} />
              </div>
              <h3 className="text-lg font-bold text-textPrimary mb-2">Discover Packages</h3>
              <p className="text-textSecondary text-sm leading-relaxed">Browse beautifully crafted trip packages. From budget backpacking to premium stays.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-50 group">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar size={32} />
              </div>
              <h3 className="text-lg font-bold text-textPrimary mb-2">Collaborative Itineraries</h3>
              <p className="text-textSecondary text-sm leading-relaxed">Vote on activities and build your day-by-day plan together in a shared workspace.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-50 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-lg font-bold text-textPrimary mb-2">Verified Profiles</h3>
              <p className="text-textSecondary text-sm leading-relaxed">Travel with peace of mind. All our users go through a standard verification process.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-8 text-center text-textSecondary text-sm border-t border-gray-100 bg-white">
        © 2026 TripMate Inc. All rights reserved. Built for travelers.
      </footer>
    </div>
  );
};

export default LandingPage;