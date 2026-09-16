import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ArrowRight, Trash2, Sparkles } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function WishlistPage() {
  const [wishlistTrips, setWishlistTrips] = useState([]);

  useEffect(() => {
    const wishlistedIds = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    const trips = mockDestinations.filter(dest => wishlistedIds.includes(String(dest.id)));
    setWishlistTrips(trips);
  }, []);

  const removeFromWishlist = (e, id) => {
    e.preventDefault();
    const updatedIds = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]').filter(item => item !== String(id));
    localStorage.setItem('tripMate_wishlist', JSON.stringify(updatedIds));
    setWishlistTrips(wishlistTrips.filter(trip => String(trip.id) !== String(id)));
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-rose-400 mb-3 shadow-xs">
          <Sparkles size={12} /> Saved Expeditions
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Your Wishlist</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Manage your saved dream destinations and book whenever you're ready.</p>
      </div>

      {wishlistTrips.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-24 bg-[#111827] border border-[#1E293B] rounded-3xl p-8 shadow-xl mt-12">
          <Heart size={48} className="text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-serif text-white mb-2">Your wishlist is empty</h3>
          <p className="text-[#94A3B8] text-xs mb-6">Explore our discover page and heart your favorite expeditions.</p>
          <Link to="/discover" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-2xl text-xs uppercase tracking-wider transition-all">
            Explore Destinations
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistTrips.map((trip) => (
            <Link 
              to={`/destination/${trip.id}`} 
              key={trip.id} 
              className="group bg-[#111827] rounded-3xl overflow-hidden shadow-xl border border-[#1E293B] hover:border-blue-500/50 transition-all relative"
            >
              <div className="h-64 overflow-hidden relative bg-[#1F2937]">
                <img src={trip.image} alt={trip.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-[#0B0F17]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-400 border border-[#1E293B]">
                  {trip.price || '₹14,500'}
                </div>
                
                {/* Remove button */}
                <button 
                  onClick={(e) => removeFromWishlist(e, trip.id)}
                  className="absolute top-4 left-4 p-2.5 rounded-xl bg-rose-500/80 hover:bg-rose-600 text-white backdrop-blur-md transition-all shadow-md"
                  title="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-white group-hover:text-sky-400 transition-colors">{trip.name || trip.title}</h3>
                <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium mt-2">
                  <MapPin size={14} className="text-[#38BDF8]" /> {trip.location || trip.state}
                </p>
                
                <div className="mt-6 pt-4 border-t border-[#1E293B] flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400">View Details</span>
                  <span className="h-9 w-9 rounded-xl bg-[#131B2E] border border-[#1E293B] text-sky-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}