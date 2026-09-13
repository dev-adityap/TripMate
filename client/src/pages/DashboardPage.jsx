import React, { useState, useEffect } from 'react';
import { Compass, Map, Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Welcome back{user ? `, ${user.name.split(' ')[0]}` : ''}! 👋
        </h1>
        <p className="text-gray-500 mt-2 font-medium">Here is an overview of your travel plans and upcoming adventures.</p>
      </div>

      {/* Quick Stats / Overview Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            <Compass size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Wishlist Saved</p>
            <p className="text-2xl font-extrabold text-gray-900">12</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Upcoming Trips</p>
            <p className="text-2xl font-extrabold text-gray-900">1</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center">
            <Map size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Places Visited</p>
            <p className="text-2xl font-extrabold text-gray-900">4</p>
          </div>
        </div>
      </div>

      {/* Active / Upcoming Trip Section */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-extrabold text-gray-900">Your Next Adventure</h2>
          <Link to="/my-trips" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mock Upcoming Trip Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
          {/* Image Placeholder (Add your Sandakphu URL here later) */}
          <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-200 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <MapPin size={32} className="text-gray-400 opacity-50" />
             </div>
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                In 14 Days
             </div>
          </div>
          
          <div className="p-8 flex flex-col justify-center flex-1">
            <div className="flex items-center gap-1 text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin size={14} />
              <span>West Bengal, India</span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Sandakphu Peak Trek</h3>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <Calendar size={18} className="text-purple-500" />
                <span>Oct 15 - Oct 22, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <Clock size={18} className="text-amber-500" />
                <span>8 Days</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <Users size={18} className="text-blue-500" />
                <span>Group of 12</span>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm">
                View Itinerary
              </button>
              <button className="px-6 py-2.5 bg-purple-50 text-purple-700 font-bold rounded-xl hover:bg-purple-100 transition-colors text-sm">
                Group Chat
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;