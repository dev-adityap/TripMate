import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, Settings, LogOut, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const navigate = useNavigate();
  const menuRef = useRef(null); // Reference to track our menu area

  // Handle clicking outside to close all dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu exists and the click target is NOT inside our menu container...
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
        setIsNotifOpen(false);
        setIsSearchOpen(false);
      }
    };

    // Listen for mousedown events globally
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <header className="w-full h-20 flex justify-end items-center px-8 relative z-50">
      
      {/* Attach the ref here so clicks inside this container don't trigger the close */}
      <div className="flex items-center gap-6" ref={menuRef}>
        
        {/* 1. INTERACTIVE SEARCH */}
        <div className="relative flex items-center h-10">
          {isSearchOpen ? (
            <div className="flex items-center bg-white border border-purple-200 rounded-full px-4 py-2 shadow-sm">
              <Search size={16} className="text-purple-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search trips or people..." 
                className="outline-none border-none bg-transparent text-sm w-48 text-slate-700 placeholder-slate-400"
                autoFocus
              />
              <button 
                onClick={() => setIsSearchOpen(false)} 
                className="text-slate-400 hover:text-slate-600 ml-2"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => { setIsSearchOpen(true); setIsNotifOpen(false); setIsProfileOpen(false); }}
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Search size={20} />
            </button>
          )}
        </div>

        {/* 2. INTERACTIVE NOTIFICATIONS */}
        <div className="relative h-10 flex items-center">
          <button 
            onClick={() => { setIsNotifOpen(!isNotifOpen); setIsSearchOpen(false); setIsProfileOpen(false); }}
            className="relative text-gray-500 hover:text-purple-600 transition-colors"
          >
            <Bell size={20} />
            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-600 rounded-full border-2 border-[#F9FAFD]"></span>
          </button>

          {/* Notifications Dropdown Panel */}
          {isNotifOpen && (
            <div className="absolute top-12 right-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors">
                  <p className="text-xs text-slate-800"><span className="font-bold">Biki</span> joined your upcoming trip.</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                </div>
                <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                  <p className="text-xs text-slate-800"><span className="font-bold">Tanuj</span> commented on your itinerary.</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">5 hours ago</span>
                </div>
              </div>
              <button className="w-full p-3 text-xs font-semibold text-purple-600 hover:bg-purple-50 transition-colors text-center border-t border-slate-100">
                View all notifications
              </button>
            </div>
          )}
        </div>

        {/* 3. INTERACTIVE PROFILE DROPDOWN */}
        <div className="relative border-l border-gray-200 pl-4 h-10 flex items-center">
          <div 
            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); setIsSearchOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center border border-gray-300">
              <span className="text-xs text-slate-500 font-bold">AP</span>
            </div>
            <span className="font-semibold text-sm text-slate-800 group-hover:text-purple-600 transition-colors">Aditya Panna</span>
            <svg 
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          {/* Profile Menu Panel */}
          {isProfileOpen && (
            <div className="absolute top-12 right-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <p className="text-sm font-bold text-slate-900">Aditya Panna</p>
                <p className="text-xs text-slate-500">B.Tech CSE</p>
              </div>
              
              <div className="p-2">
                <button 
                  onClick={() => navigate('/profile')} 
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
                >
                  <User size={16} /> My Profile
                </button>
                <button 
                  onClick={() => navigate('/settings')} 
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors mt-1"
                >
                  <Settings size={16} /> Settings
                </button>
              </div>
              
              <div className="p-2 border-t border-slate-100">
                <button 
                  onClick={() => navigate('/login')} 
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut size={16} /> Log Out
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default TopHeader;