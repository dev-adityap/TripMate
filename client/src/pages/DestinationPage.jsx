import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ShieldCheck, Heart, Sparkles, ArrowRight, RefreshCw, Compass, CheckCircle } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function DestinationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [batches, setBatches] = useState([]);
  const [selectedBatchIndex, setSelectedBatchIndex] = useState(0);

  // Comprehensive itineraries for expeditions
  const itinerariesData = {
    default: [
      { day: 'Day 1', title: 'Arrival, Basecamp & Briefing', desc: 'Arrive at destination basecamp, check into accommodations, and review safety guidelines with your group leader.' },
      { day: 'Day 2', title: 'Core Exploration & Scenic Trail', desc: 'Guided full-day excursion covering iconic viewpoints, local landmarks, and cultural highlights.' },
      { day: 'Day 3', title: 'Adventure Activity & Bonfire', desc: 'Engage in curated group activities, local food walks, and evening stargazing.' },
      { day: 'Day 4', title: 'Sunrise Session & Departure', desc: 'Final group photos, souvenir shopping, and departure home with lifelong memories.' }
    ]
  };

  const generateRandomBatches = () => {
    const datePools = [
      ['Oct 12 - Oct 18, 2026', 'Nov 05 - Nov 11, 2026', 'Dec 20 - Dec 26, 2026'],
      ['Oct 19 - Oct 25, 2026', 'Nov 12 - Nov 18, 2026', 'Jan 10 - Jan 16, 2027'],
      ['Nov 01 - Nov 07, 2026', 'Dec 02 - Dec 08, 2026', 'Feb 14 - Feb 20, 2027']
    ];
    const agePools = ['18 - 24 yrs', '21 - 28 yrs', '20 - 26 yrs', '22 - 30 yrs'];
    const genderPools = ['7 M / 5 F', '6 M / 6 F', '8 M / 4 F', '5 M / 7 F', '9 M / 3 F'];
    const countPools = [10, 12, 14, 15, 16, 18];

    const chosenDates = datePools[Math.floor(Math.random() * datePools.length)];

    return chosenDates.map((dateRange, idx) => ({
      id: idx,
      dateRange,
      ageGroup: agePools[Math.floor(Math.random() * agePools.length)],
      genderVibe: genderPools[Math.floor(Math.random() * genderPools.length)],
      totalJoined: countPools[Math.floor(Math.random() * countPools.length)],
      status: idx === 0 ? 'Filling Fast' : idx === 1 ? 'Available' : 'Limited Slots'
    }));
  };

  useEffect(() => {
    // Find destination directly from mockDatabase using ID
    const found = mockDestinations.find(d => String(d.id) === String(id)) || {
      id: id || '1',
      name: 'Himalayan Expedition',
      state: 'Mountain Region, India',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      approximateBudget: '₹14,500',
      shortDescription: 'An immersive group expedition crafted for young travelers seeking adventure, culture, and deep connections.'
    };

    setDestination(found);
    setBatches(generateRandomBatches());
    setSelectedBatchIndex(0);
  }, [id]);

  const handleRefreshStats = () => {
    setBatches(generateRandomBatches());
    setSelectedBatchIndex(0);
  };

  const handleAddToWishlist = () => {
    if (!destination) return;
    
    const existingWishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    const currentId = String(destination.id);
    
    const newItem = {
      id: currentId,
      title: destination.name,
      location: destination.state,
      image: destination.image,
      price: destination.approximateBudget || '₹14,500'
    };

    const alreadyExists = existingWishlist.some(item => String(item.id) === currentId);

    if (!alreadyExists) {
      const updated = [...existingWishlist, newItem];
      localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
      alert(`"${destination.name}" added to your wishlist successfully!`);
    } else {
      alert(`"${destination.name}" is already in your wishlist!`);
    }
  };

  if (!destination) return null;

  const currentItinerary = itinerariesData.default;
  const activeBatch = batches[selectedBatchIndex] || batches[0];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[380px] md:h-[450px] shadow-2xl border border-[#1E293B]">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent flex flex-col justify-end p-6 md:p-10">
          <div className="inline-flex items-center gap-2 bg-[#131B2E]/85 backdrop-blur-md border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] w-fit mb-3">
            <Sparkles size={12} /> Verified Group Leader Included
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white">{destination.name}</h1>
          <p className="text-slate-300 text-xs md:text-sm flex items-center gap-1.5 mt-2">
            <MapPin size={15} className="text-sky-400" /> {destination.state}
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-[#111827] border border-[#1E293B] p-6 md:p-8 rounded-3xl shadow-xl space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">About This Journey</h3>
            <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
              {destination.shortDescription || destination.fullDescription || 'An extraordinary group expedition featuring verified leaders, curated stays, and immersive local adventures.'}
            </p>
            <div className="border-t border-[#1E293B] pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                <span>Verified stays & gear coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                <span>Instant private workspace unlock on booking</span>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-[#111827] border border-[#1E293B] p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Day-by-Day Expedition Itinerary</h3>
                <p className="text-[11px] text-[#94A3B8] mt-0.5">Curated schedule designed for maximum exploration and squad bonding.</p>
              </div>
              <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full font-bold">
                {currentItinerary.length} Days Planned
              </span>
            </div>

            <div className="space-y-4 pt-2">
              {currentItinerary.map((item, idx) => (
                <div key={idx} className="bg-[#0B0F17] border border-[#1E293B] p-4 md:p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-inner">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold bg-[#131B2E] text-sky-400 border border-[#1E293B] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {item.day}
                    </span>
                    <h4 className="text-xs md:text-sm font-bold text-white pt-1">{item.title}</h4>
                    <p className="text-[11px] text-[#94A3B8]">{item.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-slate-400 shrink-0">
                    <Compass size={14} className="text-sky-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Batches */}
          <div className="bg-[#111827] border border-[#1E293B] p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Select Batch Date & Squad Vibe</h3>
                <p className="text-[11px] text-[#94A3B8] mt-0.5">Click a date batch below to select your slot.</p>
              </div>
              <button 
                onClick={handleRefreshStats}
                className="bg-[#0B0F17] hover:bg-[#131B2E] border border-[#1E293B] text-sky-400 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-inner"
              >
                <RefreshCw size={12} /> Refresh Batches
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300">Available Batch Slots</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {batches.map((batch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBatchIndex(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedBatchIndex === idx
                        ? 'bg-[#131B2E] border-sky-500 shadow-lg text-white'
                        : 'bg-[#0B0F17] border-[#1E293B] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{batch.dateRange}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                      selectedBatchIndex === idx ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {batch.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">Primary Age Group</span>
                <h4 className="text-sm font-bold text-white mt-1">{activeBatch?.ageGroup}</h4>
              </div>

              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">Gender Vibe Ratio</span>
                <h4 className="text-sm font-bold text-white mt-1">{activeBatch?.genderVibe}</h4>
              </div>

              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">Total Joined</span>
                <h4 className="text-sm font-bold text-white mt-1">{activeBatch?.totalJoined} Travelers</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div>
          <div className="bg-[#111827] border border-[#1E293B] p-6 md:p-8 rounded-3xl shadow-xl sticky top-8 space-y-6">
            
            <div className="border-b border-[#1E293B] pb-5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Package Price</span>
              <div className="text-2xl md:text-3xl font-serif text-white mt-1">{destination.approximateBudget || '₹14,500'}</div>
              <p className="text-[11px] text-sky-400 mt-1 font-medium">Selected Slot: {activeBatch?.dateRange}</p>
            </div>

            <div className="space-y-3 pt-2">
              <button 
                onClick={() => navigate(`/checkout/${id || '1'}`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 cursor-pointer"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>

              <button 
                onClick={handleAddToWishlist}
                className="w-full bg-[#0B0F17] hover:bg-[#131B2E] border border-[#1E293B] text-slate-300 py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-inner"
              >
                <Heart size={15} className="text-rose-500 fill-rose-500" /> Add to Wishlist
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}