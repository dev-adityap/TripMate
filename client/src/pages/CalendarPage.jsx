import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { destinationsData } from '../data/destinations';

const CalendarPage = () => {
  const [joinedIds, setJoinedIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('joinedTrips') || '[]');
    setJoinedIds(stored);
  }, []);

  const joinedDestinations = destinationsData.filter(d => joinedIds.includes(d.id));

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Trip Calendar</h1>
        <p className="text-gray-500 mt-2 font-medium">Timeline and schedule of your upcoming booked adventures.</p>
      </div>

      {joinedDestinations.length === 0 ? (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-16 text-center max-w-xl mx-auto mt-10">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CalendarIcon size={28} />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">No trips scheduled on your calendar</h2>
          <p className="text-gray-500 font-medium text-sm mb-6">Join trips from the Discover page to populate your travel schedule!</p>
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm inline-flex items-center gap-2"
          >
            Discover Trips <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl">
          {joinedDestinations.map((dest, idx) => (
            <div 
              key={dest.id}
              onClick={() => navigate(`/discover/${dest.id}`)}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center gap-6 cursor-pointer group"
            >
              {/* Date Box Indicator */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 text-purple-700 flex flex-col items-center justify-center p-3 text-center shrink-0 border border-purple-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Month</span>
                <span className="text-xl font-extrabold text-gray-900">Oct {15 + idx * 7}</span>
              </div>

              {/* Trip Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin size={14} />
                  <span>{dest.location}</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {dest.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500">
                  <span className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <Clock size={14} className="text-purple-600" /> {dest.duration} Days
                  </span>
                  <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg">
                    Confirmed Departure
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="shrink-0">
                <span className="px-5 py-2.5 bg-blue-600 group-hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm inline-block">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarPage;