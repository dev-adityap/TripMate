import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Heart, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, RefreshCw, Lock } from 'lucide-react';
import { mockDestinations, mockTrips } from '../data/mockDatabase';

export default function DestinationPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [selectedBatchDate, setSelectedBatchDate] = useState('Oct 12 - Oct 18, 2026');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Anonymized demographic state (M/F breakdown & age groups)
  const [demographics, setDemographics] = useState({
    males: 6,
    females: 4,
    ageGroup: '22 - 29 yrs',
    totalJoined: 10
  });

  useEffect(() => {
    // 1. Find Destination (Standard + Custom localStorage)
    const customDestinations = JSON.parse(localStorage.getItem('tripMate_customDestinations') || '[]');
    const allDestinations = [...customDestinations, ...mockDestinations];
    const foundDest = allDestinations.find(item => String(item.id) === String(id));
    
    if (foundDest) {
      setDestination(foundDest);
    }

    // 2. Wishlist status
    const wishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    setIsWishlisted(wishlist.includes(String(id)));

    // 3. Generate initial anonymized batch stats
    generateAnonymizedDemographics();
  }, [id]);

  // Generate fresh randomized anonymized stats upon refresh / batch change
  const generateAnonymizedDemographics = () => {
    setIsRefreshing(true);
    
    const ageOptions = ['18 - 24 yrs', '22 - 29 yrs', '25 - 35 yrs', '30 - 42 yrs'];
    const males = Math.floor(Math.random() * 7) + 3;
    const females = Math.floor(Math.random() * 6) + 3;

    setTimeout(() => {
      setDemographics({
        males,
        females,
        ageGroup: ageOptions[Math.floor(Math.random() * ageOptions.length)],
        totalJoined: males + females
      });
      setIsRefreshing(false);
    }, 350);
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    let updated;
    if (isWishlisted) {
      updated = wishlist.filter(itemId => itemId !== String(id));
      setIsWishlisted(false);
    } else {
      updated = [...wishlist, String(id)];
      setIsWishlisted(true);
    }
    localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] flex items-center justify-center p-6">
        <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl text-center shadow-xl">
          <p className="text-slate-400 text-sm">Loading expedition details...</p>
        </div>
      </div>
    );
  }

  const budget = destination.approximateBudget || destination.price || '₹14,500';
  const name = destination.name || destination.title;
  const state = destination.state || destination.location;
  const description = destination.fullDescription || destination.shortDescription || destination.description;

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Hero Banner Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Verified Expedition
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">{name}</h1>
        <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium mt-2">
          <MapPin size={14} className="text-[#38BDF8]" /> {state}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Details & Anonymized Batch Vibe */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Image Banner */}
          <div className="h-80 md:h-[400px] rounded-3xl overflow-hidden border border-[#1E293B] shadow-2xl relative bg-[#1F2937]">
            <img src={destination.image} alt={name} className="w-full h-full object-cover opacity-90" />
            <div className="absolute bottom-4 left-4 bg-[#0B0F17]/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#1E293B] text-xs font-bold text-emerald-400 flex items-center gap-2">
              <ShieldCheck size={16} /> Verified Group Leader Included
            </div>
          </div>

          {/* About This Journey */}
          <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl shadow-xl space-y-4">
            <h3 className="text-xl font-serif text-white">About This Journey</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {description}
            </p>
            {destination.whyVisit && (
              <div className="pt-2">
                <span className="text-xs font-bold text-sky-400 block mb-1">Why Visit:</span>
                <p className="text-xs text-slate-300">{destination.whyVisit}</p>
              </div>
            )}
          </div>

          {/* Select Batch Date & Anonymized Demographics */}
          <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-serif text-white mb-1">Select Batch Date & Squad Vibe</h3>
                <p className="text-[11px] text-[#94A3B8]">Anonymized demographic metrics for this expedition.</p>
              </div>
              <button 
                onClick={generateAnonymizedDemographics}
                className="bg-[#0B0F17] hover:bg-[#131B2E] border border-[#1E293B] text-sky-400 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Refresh batch demographic data"
              >
                <RefreshCw size={12} className={isRefreshing ? 'animate-spin' : ''} /> Refresh Stats
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#94A3B8] mb-2">Available Batch Slots</label>
              <select 
                value={selectedBatchDate}
                onChange={(e) => {
                  setSelectedBatchDate(e.target.value);
                  generateAnonymizedDemographics();
                }}
                className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
              >
                <option>Oct 12 - Oct 18, 2026</option>
                <option>Nov 05 - Nov 11, 2026</option>
                <option>Dec 20 - Dec 26, 2026</option>
              </select>
            </div>

            {/* Live Anonymized Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl text-center shadow-inner">
                <span className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider block mb-1">Primary Age Group</span>
                <span className="text-sm font-bold text-white">{demographics.ageGroup}</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl text-center shadow-inner">
                <span className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider block mb-1">Gender Vibe</span>
                <span className="text-sm font-bold text-sky-400">{demographics.males} M / {demographics.females} F</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl text-center shadow-inner">
                <span className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider block mb-1">Total Joined</span>
                <span className="text-sm font-bold text-emerald-400">{demographics.totalJoined} Travelers</span>
              </div>
            </div>

            {/* Locked Member Names Notice */}
            <div className="bg-[#0B0F17] border border-orange-500/20 p-5 rounded-2xl flex items-center gap-4 shadow-inner">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Lock size={18} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white mb-0.5">Member Names & Profiles are Locked</h5>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Individual names and direct group chat access unlock automatically upon completing secure checkout.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Pricing & Checkout Action Card */}
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-6 md:p-8 shadow-xl space-y-6 sticky top-8">
            
            <div>
              <span className="text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-wider block mb-1">Package Price</span>
              <div className="text-3xl font-serif font-bold text-white tracking-tight">
                {budget}
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-[#1E293B] text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" /> Verified Group Leader Included
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" /> Instant Workspace Unlock on Pay
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" /> Stays & Gear Coordination
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#1E293B]">
              <Link 
                to={`/checkout/${destination.id}`}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </Link>

              <button 
                onClick={toggleWishlist}
                className={`w-full border font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer ${
                  isWishlisted 
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                    : 'bg-[#0B0F17] border-[#1E293B] text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <Heart size={16} className={isWishlisted ? 'fill-rose-400 text-rose-400' : ''} /> 
                {isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}