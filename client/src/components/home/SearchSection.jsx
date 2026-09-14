import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, IndianRupee, Tag, ArrowRight } from 'lucide-react';

const SearchSection = () => {
  const navigate = useNavigate();

  // State to hold the user's search inputs
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');
  const [tripType, setTripType] = useState('');

  const handleSearch = () => {
    // Build the query string based on what the user actually filled out
    const params = new URLSearchParams();
    
    if (destination.trim()) params.append('destination', destination.trim());
    if (date) params.append('date', date);
    if (budget) params.append('budget', budget);
    if (tripType) params.append('type', tripType);

    // Redirect to your discover page with the applied filters
    navigate(`/discover?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-purple-900/5 border border-slate-100">
      
      {/* Header Area */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Find your next adventure</h2>
          <p className="text-sm text-slate-500 mt-1">Search destinations, dates, and find your travel crew.</p>
        </div>
        <div className="hidden md:flex flex-col items-end transform -rotate-6 text-purple-600 mt-2">
          <span className="text-sm font-medium italic">New Adventures Await!</span>
          <ArrowRight size={20} className="mt-1" />
        </div>
      </div>

      {/* Search Controls Grid */}
      <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
        
        {/* 1. Destination Input */}
        <div className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-200 transition-all p-3.5 rounded-2xl flex-1 w-full group border border-transparent">
          <Search size={22} className="text-purple-500 flex-shrink-0 ml-1" />
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-0.5">Where do you want to go?</label>
            <input 
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              // Trigger search on Enter key press
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="e.g. Kashmir, Goa, Spiti"
              className="bg-transparent border-none outline-none text-sm font-semibold text-slate-900 placeholder-slate-400 w-full truncate"
            />
          </div>
        </div>

        {/* 2. Date Input */}
        <div className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-200 transition-all p-3.5 rounded-2xl w-full lg:w-48 group border border-transparent">
          <Calendar size={22} className="text-purple-400 flex-shrink-0 ml-1" />
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-0.5">When?</label>
            <input 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent border-none outline-none text-sm font-semibold text-slate-900 placeholder-slate-400 w-full cursor-pointer"
            />
          </div>
        </div>

        {/* 3. Budget Dropdown */}
        <div className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-200 transition-all p-3.5 rounded-2xl w-full lg:w-56 group border border-transparent relative overflow-hidden">
          {/* Decorative bottom border like your mockup */}
          <div className="absolute bottom-0 left-8 right-8 h-1 bg-purple-400 rounded-t-md"></div>
          
          <IndianRupee size={22} className="text-purple-400 flex-shrink-0 ml-1" />
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-0.5">Budget</label>
            <select 
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="bg-transparent border-none outline-none text-sm font-semibold text-slate-900 w-full cursor-pointer appearance-none"
            >
              <option value="">Any budget</option>
              <option value="under-10k">Under ₹10,000</option>
              <option value="10k-25k">₹10,000 - ₹25,000</option>
              <option value="25k-50k">₹25,000 - ₹50,000</option>
              <option value="50k-plus">₹50,000+</option>
            </select>
          </div>
        </div>

        {/* 4. Trip Type Dropdown */}
        <div className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-200 transition-all p-3.5 rounded-2xl w-full lg:w-48 group border border-transparent">
          <Tag size={22} className="text-purple-400 flex-shrink-0 ml-1" />
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-0.5">Trip Type</label>
            <select 
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="bg-transparent border-none outline-none text-sm font-semibold text-slate-900 w-full cursor-pointer appearance-none"
            >
              <option value="">Any type</option>
              <option value="trek">Trek</option>
              <option value="beach">Beach</option>
              <option value="road-trip">Road Trip</option>
              <option value="heritage">Heritage</option>
              <option value="spiritual">Spiritual</option>
              <option value="nature">Nature</option>
              <option value="relax">Relax</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button 
          type="button" 
          onClick={handleSearch}
          className="w-full lg:w-auto px-8 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2 flex-shrink-0 group"
        >
          Search Trips
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
};

export default SearchSection;