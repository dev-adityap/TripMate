import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    setWishlist(saved);
  }, []);

  const removeItem = (id, e) => {
    e.stopPropagation();
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      <div className="max-w-7xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Saved Expeditions
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">My Wishlist</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Manage your bookmarked destinations and plan your next group getaway.</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {wishlist.length === 0 ? (
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-12 text-center space-y-4 shadow-xl">
            <Heart size={48} className="text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">Your wishlist is empty</h3>
            <p className="text-xs text-[#94A3B8] max-w-sm mx-auto">Explore destinations and click "Add to Wishlist" to save them here for later.</p>
            <button
              onClick={() => navigate('/discover')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer shadow-lg shadow-blue-900/30 inline-flex items-center gap-2"
            >
              Explore Discoveries <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/destination/${item.id}`)}
                className="bg-[#111827] border border-[#1E293B] rounded-3xl overflow-hidden shadow-xl hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <button
                      onClick={(e) => removeItem(item.id, e)}
                      className="absolute top-4 right-4 w-9 h-9 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-rose-500 hover:bg-black transition-colors"
                      title="Remove from Wishlist"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-sky-400 flex items-center gap-1">
                      <MapPin size={13} /> {item.location}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#1E293B] mt-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">Starting from</span>
                    <div className="text-sm font-bold text-white">{item.price}</div>
                  </div>
                  <span className="w-9 h-9 rounded-xl bg-[#0B0F17] border border-[#1E293B] flex items-center justify-center text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}