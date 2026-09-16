import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockDestinations } from '../data/mockDatabase';
import { Heart, MapPin, Clock, Trash2 } from 'lucide-react';

export default function FavoritesPage() {
  const [wishlistedTrips, setWishlistedTrips] = useState([]);

  // Read from local storage on load
  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    const savedTrips = mockDestinations.filter(dest => savedIds.includes(String(dest.id)));
    setWishlistedTrips(savedTrips);
  }, []);

  const removeFromWishlist = (e, tripId) => {
    e.preventDefault(); // Prevents clicking the card link
    const updatedIds = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]').filter(id => id !== String(tripId));
    localStorage.setItem('tripMate_wishlist', JSON.stringify(updatedIds));
    setWishlistedTrips(wishlistedTrips.filter(trip => String(trip.id) !== String(tripId)));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8 pl-28">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Your Wishlist</h1>
        <p className="text-slate-500 mt-1">Trips you're dreaming of. Book them when you're ready!</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {wishlistedTrips.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-sm">
            <Heart size={48} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Your wishlist is empty</h3>
            <p className="text-slate-500">Go explore destinations and click the heart to save them here.</p>
            <Link to="/discover" className="mt-6 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700">Explore Trips</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {wishlistedTrips.map((trip) => (
              <Link to={`/destination/${trip.id}`} key={trip.id} className="block bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all group relative">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <img src={trip.image} alt={trip.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button onClick={(e) => removeFromWishlist(e, trip.id)} className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors shadow-sm">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{trip.name || trip.title}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1.5 font-medium mb-4"><MapPin size={14} className="text-indigo-500" /> {trip.location || trip.state}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-sm font-bold text-slate-600 flex items-center gap-1.5"><Clock size={14} /> {trip.duration || '5-7 Days'}</span>
                    <span className="font-black text-emerald-600">{trip.price || '₹14,500'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}