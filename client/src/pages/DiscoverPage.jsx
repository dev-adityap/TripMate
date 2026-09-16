import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';


export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Exact categories matching mockDatabase.js
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

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Explore Expeditions
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Discover Destinations</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Find your next handpicked adventure and join verified travel groups.</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search mountains, beaches, cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#111827] border border-[#1E293B] rounded-2xl pl-11 pr-4 py-3.5 text-sm font-medium text-white focus:outline-none focus:border-sky-500 shadow-inner"
          />
        </div>

        {/* Database-Synced Category Pills */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer uppercase ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                  : 'bg-[#111827] text-slate-400 hover:text-white border border-[#1E293B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.length === 0 ? (
          <div className="col-span-full text-center py-20 bg-[#111827] border border-[#1E293B] rounded-3xl p-8 shadow-xl">
            <p className="text-slate-400 text-sm">No destinations found matching your filter.</p>
          </div>
        ) : (
          filteredDestinations.map((trip) => (
            <Link 
              to={`/destination/${trip.id}`} 
              key={trip.id} 
              className="group bg-[#111827] rounded-3xl overflow-hidden shadow-xl border border-[#1E293B] hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative bg-[#1F2937]">
                <img 
                  src={trip.image} 
                  alt={trip.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                />
                <div className="absolute top-4 right-4 bg-[#0B0F17]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-400 border border-[#1E293B]">
                  {trip.approximateBudget || '₹14,500'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#F1F5F9] group-hover:text-sky-400 transition-colors">
                  {trip.name}
                </h3>
                <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium mt-2">
                  <MapPin size={14} className="text-[#38BDF8]" /> {trip.state}
                </p>
                
                <div className="mt-6 pt-4 border-t border-[#1E293B] flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400">View Itinerary</span>
                  <span className="h-9 w-9 rounded-xl bg-[#131B2E] border border-[#1E293B] text-sky-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

    </div>
  );
}