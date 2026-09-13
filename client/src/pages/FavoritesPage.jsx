import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Heart, Star, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { destinationsData } from '../data/destinations';

const FavoritesPage = () => {
  const [wishlistIds, setWishlistIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('tripWishlist') || '[]');
    setWishlistIds(storedWishlist);
  }, []);

  const handleRemoveWishlist = (e, id) => {
    e.stopPropagation();
    const updated = wishlistIds.filter(itemId => itemId !== id);
    localStorage.setItem('tripWishlist', JSON.stringify(updated));
    setWishlistIds(updated);
  };

  const favoriteDestinations = destinationsData.filter(d => wishlistIds.includes(d.id));

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Favorites & Wishlist</h1>
        <p className="text-gray-500 mt-2 font-medium">Your saved dream destinations and bookmarked adventures.</p>
      </div>

      {favoriteDestinations.length === 0 ? (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-16 text-center max-w-xl mx-auto mt-10">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={28} className="fill-red-500" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 font-medium text-sm mb-6">Explore destinations and click the heart icon on any card to save it here!</p>
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm inline-flex items-center gap-2"
          >
            Explore Destinations <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {favoriteDestinations.map((dest) => (
            <div 
              key={dest.id}
              onClick={() => navigate(`/discover/${dest.id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                {dest.image ? (
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium uppercase tracking-widest opacity-60">No Image</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {dest.category}
                </div>
                <button 
                  onClick={(e) => handleRemoveWishlist(e, dest.id)}
                  className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm"
                >
                  <Heart size={16} className="fill-red-500 text-white hover:text-white" />
                </button>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1 text-blue-600 text-xs font-bold uppercase tracking-wider">
                    <MapPin size={14} />
                    <span>{dest.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star size={14} className="fill-amber-500" />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">{dest.name}</h3>
                
                <div className="flex justify-between items-end mb-6 mt-auto">
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1">Starting from</p>
                    <p className="text-lg font-extrabold text-gray-900">₹{dest.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-sm font-bold text-purple-600">{dest.duration} Days</p>
                  </div>
                </div>

                <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm">
                  View Trip Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;