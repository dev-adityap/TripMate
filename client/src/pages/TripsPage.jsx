import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, MessageCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function TripsPage({ updateBackground }) {
  const [purchasedTrips, setPurchasedTrips] = useState([]);

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  useEffect(() => {
    const purchasedIds = JSON.parse(localStorage.getItem('tripMate_myTrips') || '[]');
    const trips = mockDestinations.filter(dest => purchasedIds.includes(String(dest.id)));
    setPurchasedTrips(trips);
  }, []);

  return (
    <div className="min-h-dvh w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 shadow-xs">
            <Sparkles size={12} /> Confirmed Itineraries
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] mb-2">My Trips</h1>
          <p className="text-white/75 text-sm mt-1">Your confirmed expeditions and unlocked group chat workspaces.</p>
        </div>

        {purchasedTrips.length === 0 ? (
          <div className="max-w-lg mx-auto text-center bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-2xl">
            <Briefcase size={48} className="text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No booked trips yet</h3>
            <p className="text-white/60 text-xs mb-6">Complete a checkout on any destination to unlock your squad workspace.</p>
            <Link to="/discover" className="inline-flex items-center gap-2 bg-white hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-[0_10px_25px_rgba(255,255,255,0.1)] border border-white/10">
              Browse Expeditions <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purchasedTrips.map((trip) => (
              <div
                key={trip.id}
                className="h-[380px] rounded-3xl overflow-hidden relative group border border-white/10 shadow-2xl cursor-pointer"
              >
                <img src={trip.image} alt={trip.name || trip.title} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'; }} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-emerald-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-2xl border border-white/10 flex items-center gap-1 shadow-md">
                  <CheckCircle2 size={12} /> Confirmed
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">{trip.location || trip.state || trip.category}</p>
                      <h3 className="text-2xl font-bold text-white leading-tight">{trip.name || trip.title}</h3>
                      <p className="text-xs text-white/70 flex items-center gap-1.5 font-medium mt-2">
                        <MapPin size={14} className="text-amber-300" /> {trip.location || trip.state}
                      </p>
                    </div>
                    <Link
                      to="/workspaces"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 w-full bg-white/[0.08] backdrop-blur-2xl border border-white/10 text-white hover:bg-white hover:text-zinc-950 font-bold py-3 px-4 rounded-xl transition-all text-xs"
                    >
                      <MessageCircle size={16} /> Open Group Chat Workspace <ArrowRight size={14} />
                    </Link>
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
