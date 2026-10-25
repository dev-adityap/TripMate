import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, MapPin, Trash2, ArrowRight, Sparkles, ArrowUpRightFromSquare } from 'lucide-react';
import { useToast } from '../components/Toast';

export default function WishlistPage({ updateBackground }) {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const { addToast } = useToast();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    setWishlist(saved);
    if (updateBackground && saved.length > 0) {
      updateBackground(saved[0].image);
    } else if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  const removeItem = (id, e) => {
    e.stopPropagation();
    const item = wishlist.find(i => i.id === id);
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
    if (updateBackground && updated.length > 0) {
      updateBackground(updated[0].image);
    }
    addToast(`"${item?.name || 'Item'}" removed from wishlist`, 'info', 3000);
  };

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 shadow-xs">
            <Sparkles size={12} /> Saved Expeditions
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] mb-2">My Wishlist</h1>
          <p className="text-white/75 text-sm mt-1">The places you're dreaming of exploring.</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-12 max-w-lg mx-auto text-center space-y-4 shadow-2xl">
            <Heart size={48} className="text-white/40 mx-auto" />
            <h3 className="text-lg font-bold text-white">Your wishlist is empty</h3>
            <p className="text-xs text-white/60 max-w-sm mx-auto">Explore destinations and save the ones that catch your eye!</p>
            <Link
              to="/discover"
              className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs transition-all cursor-pointer shadow-[0_10px_25px_rgba(255,255,255,0.1)] border border-white/10 inline-flex items-center gap-2"
            >
              Explore Destinations <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="h-[380px] rounded-3xl overflow-hidden relative group border border-white/10 shadow-2xl cursor-pointer"
                onClick={() => navigate(`/destination/${item.id || '1'}`)}
              >
                <img src={item.image} alt={item.name || item.title} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'; }} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); removeItem(item.id, e); }}
                    className="w-10 h-10 rounded-full bg-white text-zinc-950 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/checkout/${item.id || '1'}`); }}
                    className="w-10 h-10 rounded-full bg-amber-400 text-zinc-950 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    title="Book this trip"
                  >
                    <ArrowUpRightFromSquare size={16} />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">{item.state || item.location || item.category}</p>
                      <h3 className="text-2xl font-bold text-white leading-tight">{item.name || item.title}</h3>
                      <p className="text-xs text-white/70 flex items-center gap-1.5 font-medium mt-2">
                        <MapPin size={14} className="text-amber-300" /> {item.state || item.location}
                      </p>
                    </div>
                    {item.price && (
                      <div className="bg-white/[0.08] backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg">
                        ?{item.price}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
