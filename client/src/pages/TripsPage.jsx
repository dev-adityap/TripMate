import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, MessageCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function TripsPage() {
  const [purchasedTrips, setPurchasedTrips] = useState([]);

  useEffect(() => {
    const purchasedIds = JSON.parse(localStorage.getItem('tripMate_myTrips') || '[]');
    const trips = mockDestinations.filter(dest => purchasedIds.includes(String(dest.id)));
    setPurchasedTrips(trips);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 shadow-xs">
          <Sparkles size={12} /> Confirmed Itineraries
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">My Trips</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Your confirmed expeditions and unlocked group chat workspaces.</p>
      </div>

      {purchasedTrips.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-24 bg-[#111827] border border-[#1E293B] rounded-3xl p-8 shadow-xl mt-12">
          <Briefcase size={48} className="text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-serif text-white mb-2">No booked trips yet</h3>
          <p className="text-[#94A3B8] text-xs mb-6">Complete a checkout on any destination to unlock your squad workspace.</p>
          <Link to="/discover" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-2xl text-xs uppercase tracking-wider transition-all">
            Browse Expeditions
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {purchasedTrips.map((trip) => (
            <div key={trip.id} className="bg-[#111827] border border-[#1E293B] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-[#1F2937]">
                  <img src={trip.image} alt={trip.name} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute top-4 left-4 bg-emerald-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-md">
                    <CheckCircle2 size={12} /> Confirmed
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif text-white">{trip.name || trip.title}</h3>
                  <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium mt-2">
                    <MapPin size={14} className="text-[#38BDF8]" /> {trip.location || trip.state}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link 
                  to="/messages" 
                  className="w-full bg-[#131B2E] hover:bg-blue-600 border border-[#1E293B] hover:border-blue-600 text-sky-400 hover:text-white font-bold py-3.5 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs shadow-inner"
                >
                  <MessageCircle size={16} /> Open Group Chat Workspace <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}