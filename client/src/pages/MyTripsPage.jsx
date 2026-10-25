import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, MessageCircle, ArrowRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function MyTripsPage() {
  const navigate = useNavigate();
  const [purchasedTrips, setPurchasedTrips] = useState([]);

  useEffect(() => {
    const purchasedIds = JSON.parse(localStorage.getItem('tripMate_myTrips') || '[]');
    const trips = mockDestinations.filter(dest => purchasedIds.includes(String(dest.id)));
    setPurchasedTrips(trips);
  }, []);

  return (
    <div className="min-h-dvh bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 shadow-xs">
          <Sparkles size={12} /> Confirmed Itineraries
        </div>
        <h1 className="text-3xl md:text-5xl font-sans text-[#F1F5F9]">My Trips</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Your confirmed expeditions and unlocked group chat workspaces.</p>
      </div>

      {purchasedTrips.length === 0 ? (
        <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[70vh]">
          <div className="w-24 h-24 bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-2xl">
            <Compass className="text-amber-400 opacity-50" size={40} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">No Expeditions Logged</h2>
          <p className="text-white/50 text-sm max-w-md mb-8">
            Your travel dossier is currently empty. Head over to the interactive map to discover and unlock new basecamps across the Himalayas.
          </p>
          <Link className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(245,158,11,0.2)]" to="/map">
            Open Map Explorer
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {purchasedTrips.map((trip) => (
            <div key={trip.id} className="bg-[#111827] border border-[#1E293B] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-[#1F2937]">
                  <img src={trip.image} alt={trip.name} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'; }} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute top-4 left-4 bg-emerald-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-md">
                    <CheckCircle2 size={12} /> Confirmed
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-black tracking-widest text-white/50 uppercase mb-1">
                    {trip.bestTimeToVisit || 'UPCOMING BATCH'} • {trip.difficulty || 'MODERATE'}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{trip.name || trip.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/70 mb-4">
                    <MapPin size={14} className="text-[#38BDF8]" />
                    <span>{trip.location || trip.state || 'Himachal Pradesh'}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => navigate(`/workspaces?active=${encodeURIComponent(trip.name || trip.title)}`)}
                  className="w-full bg-[#131B2E] hover:bg-blue-600 border border-[#1E293B] hover:border-blue-600 text-sky-400 hover:text-white font-bold py-3.5 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs shadow-inner cursor-pointer"
                >
                  <MessageCircle size={16} /> Open Group Chat Workspace <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}