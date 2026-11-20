import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, MapPin, Search, Bell, Settings, PlusCircle, MessageSquare, X } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';
import { useAuth } from '../context/AuthContext';

export default function HomePage({ updateBackground }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const destinations = mockDestinations.slice(0, 6);
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const activeDestination = destinations[activeSlide];
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const logoUrl = "/TripMate.png";

  useEffect(() => {
    if (updateBackground && activeDestination?.image) {
      updateBackground(activeDestination.image);
    }
    const saved = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    setWishlistCount(saved.length);
  }, [activeSlide, updateBackground, activeDestination]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // Autoplay with reset on manual interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide, destinations.length]);

  const handleExplore = () => {
    if (activeDestination?.id) {
      navigate(`/destination/${activeDestination.id}`);
    }
  };

  const toggleWishlist = (e, destination) => {
    e.preventDefault();
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    const exists = wishlist.some((item) => item.id === destination.id);
    if (exists) {
      const updated = wishlist.filter((item) => item.id !== destination.id);
      localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
      setWishlistCount(updated.length);
    } else {
      wishlist.push(destination);
      localStorage.setItem('tripMate_wishlist', JSON.stringify(wishlist));
      setWishlistCount(wishlist.length);
    }
  };

  const isInWishlist = (destination) => {
    const wishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    return wishlist.some((item) => item.id === destination.id);
  };

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/discover', label: 'Discover' },
    { path: '/map', label: 'Map' },
    { path: '/trips', label: 'Trips' },
    { path: '/wishlist', label: 'Wishlist' },
    { path: '/create', label: 'Create' },
    { path: '/messages', label: 'Workspaces' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-dvh h-dvh w-full relative overflow-hidden text-white font-sans select-none">

      {/* Left Vertical Timeline */}
      <div className="fixed left-8 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center">
        <div className="w-[1px] h-64 bg-white/30 relative flex flex-col items-center justify-between py-8">
          {destinations.map((_, index) => (
            <div key={index} className="relative flex items-center justify-center">
              {index === activeSlide ? (
                <button
                  onClick={() => goToSlide(index)}
                  className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/50 text-xs font-bold text-white flex items-center justify-center transition-all duration-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ) : (
                <button
                  onClick={() => goToSlide(index)}
                  className="w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left Slide Counter */}
      <div className="fixed bottom-8 left-8 md:left-12 z-20 hidden xl:flex">
        <span className="-rotate-90 text-xs font-bold tracking-widest text-white/80 origin-center">
          {String(activeSlide + 1).padStart(2, '0')}/{String(destinations.length).padStart(2, '0')}
        </span>
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 h-full flex items-center pl-16 md:pl-24 pr-8">
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content - 45% */}
          <div className="xl:col-span-5">
            {activeDestination && (
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-white mb-1">{activeDestination.state || activeDestination.category}</p>
                  <div className="flex gap-1.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-white' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                  <h1 className="text-6xl md:text-7xl xl:text-[5.5rem] font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl">
                    {activeDestination.name}
                  </h1>
                  <p className="text-xs md:text-sm text-white/85 max-w-md leading-relaxed mt-5">
                    {activeDestination.shortDescription}
                  </p>
                </div>
                <button
                  onClick={handleExplore}
                  className="bg-white/15 hover:bg-white hover:text-zinc-950 backdrop-blur-xl border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Explore â†’
                </button>
              </div>
            )}
          </div>

          {/* Right Card Carousel - 55% */}
          <div className="xl:col-span-7 hidden xl:flex justify-end">
            <div className="flex items-end gap-4">
              {destinations.map((destination, index) => {
                const offset = index - activeSlide;
                const isActive = offset === 0;
                return (
                  <div
                    key={destination.id}
                    className={`transition-all duration-700 ease-out cursor-pointer ${
                      Math.abs(offset) > 2 ? 'hidden' : ''
                    } ${isActive ? 'scale-100' : offset === 1 ? 'scale-[0.9] mt-6' : offset === -1 ? 'scale-[0.9] mt-6' : 'scale-[0.85] mt-10 opacity-70'}`}
                    onClick={() => navigate(`/destination/${destination.id}`)}
                  >
                    <div className={`rounded-2xl overflow-hidden relative shadow-2xl group ${isActive ? 'w-[250px] h-[360px]' : 'w-[225px] h-[320px]'}`}>
                      <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-4 bg-gradient-to-b from-black/60 to-transparent">
                        <p className="text-sm font-bold text-white mb-1 drop-shadow-md">{destination.name}</p>
                        <div className="flex gap-1.5 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-white' : 'bg-white/30'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
<button
  onClick={(e) => toggleWishlist(e, destination)}
  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white text-zinc-900 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
>
                        <Heart size={18} fill={isInWishlist(destination) ? '#ef4444' : 'none'} stroke={isInWishlist(destination) ? '#ef4444' : 'currentColor'} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Bottom Right Progress Indicator */}
      <div className="fixed bottom-8 right-12 z-20 flex items-center gap-3 text-xs font-semibold text-white/80">
        <span>{String(activeSlide + 1).padStart(2, '0')}</span>
        <div className="w-20 h-[1.5px] bg-white/25 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-out"
            style={{ width: `${((activeSlide + 1) / destinations.length) * 100}%` }}
          />
        </div>
        <span>{String(destinations.length).padStart(2, '0')}</span>
      </div>

      {/* Logo Lightbox Modal */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-zinc-900/75 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center space-y-6 relative">
            <button 
              onClick={() => setIsLogoModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-xl bg-black/30 border border-white/15 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
            <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black/30">
              <img src={logoUrl} alt="TripMate Logo" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-sans font-bold text-white tracking-widest">TRIPMATE</h2>
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">SINCE 2026</p>
            </div>
            <p className="text-xs text-white/70 leading-relaxed px-2">
              Your verified platform for curated Himalayan expeditions and secure traveler squad workspaces.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
