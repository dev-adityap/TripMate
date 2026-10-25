import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';
import { useToast } from '../components/Toast';

export default function DiscoverPage({ updateBackground }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToast } = useToast();

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  const categories = ['All', 'MOUNTAIN', 'TREK', 'BEACH', 'HERITAGE', 'WILDLIFE', 'NATURE'];

  const filteredDestinations = mockDestinations.filter(dest => {
    const textQuery = searchTerm.toLowerCase();
    const name = (dest.name || '').toLowerCase();
    const location = (dest.state || '').toLowerCase();
    const description = (dest.shortDescription || dest.fullDescription || '').toLowerCase();

    const matchesSearch = name.includes(textQuery) || location.includes(textQuery) || description.includes(textQuery);
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleWishlist = (e, destination) => {
    e.preventDefault();
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    const exists = wishlist.some((item) => item.id === destination.id);
    if (exists) {
      const updated = wishlist.filter((item) => item.id !== destination.id);
      localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
      addToast(`"${destination.name}" removed from wishlist`, 'info', 3000);
    } else {
      wishlist.push(destination);
      localStorage.setItem('tripMate_wishlist', JSON.stringify(wishlist));
      addToast(`"${destination.name}" added to wishlist!`, 'success', 3000);
    }
  };

  const isInWishlist = (destination) => {
    const wishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    return wishlist.some((item) => item.id === destination.id);
  };

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-32 pb-24 px-6 md:px-24">
      {/* Top Floating Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-14 py-6 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px]">
        <Link to="/home" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-black/30 flex items-center justify-center">
            <img src="/TripMate.png" alt="TripMate Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">TripMate</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/home" className="text-xs md:text-sm font-medium text-white/75 hover:text-white transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">
            Home
          </Link>
          <Link to="/discover" className="text-xs md:text-sm font-medium text-white hover:text-white transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">
            Discover
          </Link>
          <Link to="/trips" className="text-xs md:text-sm font-medium text-white/75 hover:text-white transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">
            Trips
          </Link>
          <Link to="/reviews" className="text-xs md:text-sm font-medium text-white/75 hover:text-white transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">
            Reviews
          </Link>
          <Link to="/about" className="text-xs md:text-sm font-medium text-white/75 hover:text-white transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">
            About
          </Link>
          <Link to="/contact" className="text-xs md:text-sm font-medium text-white/75 hover:text-white transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-xs md:text-sm font-medium px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/15 rounded-full text-white hover:bg-white/15 transition-all">
            Sign In
          </Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-md border border-white/15 text-amber-300 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-3 shadow-xs">
            <Sparkles size={12} /> Explore Expeditions
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] mb-2">Discover Destinations</h1>
          <p className="text-white/75 text-sm mt-1">Find your next handpicked adventure and join verified travel groups.</p>
        </div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
            <input 
              type="text" 
              placeholder="Search mountains, beaches, cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.06] hover:bg-white/[0.09] focus:bg-white/[0.1] backdrop-blur-2xl border border-white/15 focus:border-white/40 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-white/50 outline-none transition-all shadow-xl"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer uppercase ${
                  selectedCategory === cat 
                    ? 'bg-white text-zinc-950 font-bold shadow-[0_8px_25px_rgba(255,255,255,0.2)] border-transparent scale-105' 
                    : 'bg-white/[0.05] hover:bg-white/[0.12] backdrop-blur-xl border border-white/15 text-white/80 hover:text-white font-semibold transition-all'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.length === 0 ? (
            <div className="col-span-full text-center py-20 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl">
              <p className="text-white/60 text-sm">No destinations found matching your filter.</p>
            </div>
          ) : (
            filteredDestinations.map((trip) => (
              <Link 
                to={`/destination/${trip.id}`} 
                key={trip.id} 
                className="relative h-[380px] sm:h-[400px] w-full rounded-3xl overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 hover:border-white/25 transition-all duration-500"
              >
                <img 
                  src={trip.image} 
                  alt={trip.name} 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                {/* Rating Dots - Top Left */}
                <div className="absolute top-5 left-5 flex items-center gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/35" />
                </div>
                {/* Wishlist Button - Top Right */}
                <button
                  onClick={(e) => toggleWishlist(e, trip)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white text-zinc-900 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Heart size={18} fill={isInWishlist(trip) ? '#ef4444' : 'none'} stroke={isInWishlist(trip) ? '#ef4444' : 'currentColor'} />
                </button>
                {/* Bottom Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col justify-end">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-amber-300/90 mb-1 flex items-center gap-1.5">
                    {trip.state || trip.location}
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <h2 className="text-2xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">{trip.name}</h2>
                    <div className="bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shrink-0">
                      {trip.approximateBudget || '₹14,500'}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white/80 group-hover:text-white mt-3 flex items-center gap-1.5 opacity-85 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Explore Expedition → <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}