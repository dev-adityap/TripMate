import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, MapPin, Calendar, IndianRupee, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CreateTripPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    category: 'MOUNTAIN',
    price: '₹14,500',
    description: '',
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=1382&auto=format&fit=crop'
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.state) return;

    const newDestination = {
      id: 'custom_' + Date.now(),
      ...formData
    };

    const existing = JSON.parse(localStorage.getItem('tripMate_customDestinations') || '[]');
    localStorage.setItem('tripMate_customDestinations', JSON.stringify([newDestination, ...existing]));

    setSuccess(true);
    setTimeout(() => {
      navigate('/discover');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Expedition Creator
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Plan a New Trip</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Publish a custom expedition or group itinerary to the TripMate platform.</p>
      </div>

      {success && (
        <div className="max-w-3xl mx-auto mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold shadow-xl">
          <CheckCircle2 size={16} /> Expedition created successfully! Redirecting to discover...
        </div>
      )}

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-[#111827] border border-[#1E293B] rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-[#94A3B8] mb-2">Destination / Expedition Title *</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="e.g. Zanskar Frozen River Trek"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#94A3B8] mb-2">State / Region *</label>
            <input 
              type="text" 
              name="state"
              required
              placeholder="e.g. Ladakh"
              value={formData.state}
              onChange={handleChange}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-[#94A3B8] mb-2">Category</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner uppercase"
            >
              <option value="MOUNTAIN">Mountain</option>
              <option value="TREK">Trek</option>
              <option value="BEACH">Beach</option>
              <option value="HERITAGE">Heritage</option>
              <option value="WILDLIFE">Wildlife</option>
              <option value="NATURE">Nature</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#94A3B8] mb-2">Approximate Budget</label>
            <input 
              type="text" 
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#94A3B8] mb-2">Image URL (Banner)</label>
          <input 
            type="text" 
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#94A3B8] mb-2">Description & Highlights</label>
          <textarea 
            name="description"
            rows="4"
            required
            placeholder="Describe the adventure, itinerary, and squad expectations..."
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
        >
          <PlusCircle size={18} /> Publish Expedition
        </button>

      </form>
    </div>
  );
}