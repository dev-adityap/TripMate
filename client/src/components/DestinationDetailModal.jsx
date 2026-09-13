import React, { useState, useEffect, useRef } from 'react';
import { X, MapPin, Users, ArrowRight, Calendar, ChevronDown, Check } from 'lucide-react';

// Custom, Tailwind-styled Date Dropdown built directly into this file
const DateSelector = ({ selectedDate, setSelectedDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Mock dates based on your screenshot
  const dates = ['Oct 15, 2026', 'Nov 05, 2026', 'Dec 12, 2026'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (

    
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={16} className="text-purple-500" />
        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500">
          Choose departure batch date
        </span>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-5 py-3 bg-white border rounded-2xl text-slate-800 font-semibold transition-all focus:outline-none ${
          isOpen ? 'border-purple-500 ring-4 ring-purple-500/10' : 'border-purple-200 hover:border-purple-400'
        }`}
      >
        {selectedDate}
        <ChevronDown size={18} className={`text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-600' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 origin-top">
          <div className="py-1">
            {dates.map((date, idx) => {
              const isSelected = selectedDate === date;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors ${
                    isSelected ? 'bg-purple-50 text-purple-700' : 'text-slate-600 hover:bg-slate-50 hover:text-purple-600'
                  }`}
                >
                  {date}
                  {isSelected && <Check size={16} className="text-purple-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const DestinationDetailModal = ({ trip, isOpen, onClose, onJoin }) => {
  if (!isOpen || !trip) return null;

  const [activeImage, setActiveImage] = useState(trip.image);
  const [selectedDate, setSelectedDate] = useState('Oct 15, 2026'); // Track selected batch date
  const galleryImages = [trip.image, ...(trip.images || [])];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors">
          <X size={18} />
        </button>

        <div className="relative h-80 w-full bg-gray-900">
          <img src={activeImage} alt={trip.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1 rounded-xl">
                {trip.state || trip.location || 'Destination'}
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2">{trip.name}</h2>
            </div>
          </div>
        </div>

        {trip.images && trip.images.length > 0 && (
          <div className="p-6 pb-0">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Vivid Gallery Photos</h4>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((imgUrl, index) => (
                <button key={index} onClick={() => setActiveImage(imgUrl)} className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === imgUrl ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">About this Location</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{trip.description || "No description provided."}</p>
          </div>

          <div className="flex items-center gap-4 py-4 border-y border-gray-100 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-blue-500" /> {trip.state || 'Scenic Region'}</span>
            <span className="flex items-center gap-1.5"><Users size={16} className="text-purple-500" /> {trip.participants?.length || 0} Travelers Joined</span>
          </div>

          {/* NEW: Pricing and Date Selector Block (matches your screenshot) */}
          <div className="bg-[#F9FAFD] p-6 rounded-3xl border border-slate-100 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Package Price</p>
                <h3 className="text-3xl font-extrabold text-slate-900">₹{trip.price || '14,500'}</h3>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Per Person</p>
                <span className="bg-purple-100 text-purple-700 text-[11px] font-bold px-3 py-1 rounded-full">All Inclusive</span>
              </div>
            </div>

            <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>

          <button onClick={() => { onClose(); onJoin(trip._id, selectedDate); }} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
            Join Trip & Open Workspace <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailModal;