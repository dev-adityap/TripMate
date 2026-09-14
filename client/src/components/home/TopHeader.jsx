import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Bell, ChevronDown, MapPin, User as UserIcon, Map, Settings, LogOut } from 'lucide-react';
import { mockDestinations } from '../../data/mockDatabase'; 

const TopHeader = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Refs for click-outside detection
  const searchRef = useRef(null);
  const notifRef = useRef(null);
  const profileRef = useRef(null);
  
  // States
  const [searchTerm, setSearchTerm] = useState(searchParams.get('destination') || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // --- NEW: Notification State ---
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome to TripMate!', message: 'Start exploring destinations and find your next adventure group.', time: 'JUST NOW', isRead: false },
    { id: 2, title: 'New trips added', message: '3 new batches have opened up for the Sandakphu Trek.', time: '2 HOURS AGO', isRead: false }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const handleViewAll = () => {
    setShowNotifications(false);
    navigate('/notifications'); // Assumes you will create a dedicated /notifications route later
  };
  // -------------------------------

  useEffect(() => {
    setSearchTerm(searchParams.get('destination') || '');
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setShowSearchDropdown(false);
      if (notifRef.current && !notifRef.current.contains(event.target)) setShowNotifications(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setShowProfileMenu(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      const filtered = mockDestinations
        .filter(dest => dest.name.toLowerCase().includes(value.toLowerCase()))
        .map(dest => dest.name) 
        .slice(0, 5); 
        
      setSuggestions(filtered);
      setShowSearchDropdown(true);
    } else {
      setShowSearchDropdown(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSearchDropdown(false);
    if (searchTerm.trim()) {
      navigate(`/discover?destination=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/discover');
    }
  };

  const handleSuggestionClick = (place) => {
    setSearchTerm(place);
    setShowSearchDropdown(false);
    navigate(`/discover?destination=${encodeURIComponent(place)}`);
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      
      {/* Search Bar Form with Auto-Suggest */}
      <div ref={searchRef} className="relative w-full max-w-md hidden md:block">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <button 
            type="submit" 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-purple-600 transition-colors z-10 p-1"
          >
            <Search size={18} />
          </button>
          
          <input 
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => { if (suggestions.length > 0) setShowSearchDropdown(true); }}
            placeholder="Search destinations (e.g., Manali)..."
            className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-full text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all outline-none"
          />
        </form>

        {showSearchDropdown && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 overflow-hidden py-2">
            {suggestions.map((place, index) => (
              <li 
                key={index}
                onClick={() => handleSuggestionClick(place)}
                className="px-5 py-3 hover:bg-purple-50 cursor-pointer flex items-center gap-3 transition-colors group"
              >
                <div className="p-1.5 bg-slate-100 group-hover:bg-purple-100 rounded-full transition-colors">
                  <MapPin size={14} className="text-slate-500 group-hover:text-purple-600 transition-colors" />
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-purple-700 transition-colors">
                  {place}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        
        {/* Notifications Wrapper */}
        <div ref={notifRef} className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="relative p-2 text-slate-400 hover:bg-slate-50 hover:text-purple-600 rounded-full transition-all"
          >
            <Bell size={20} />
            {/* Red dot only shows if there are unread notifications */}
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-200/50 z-50 overflow-hidden flex flex-col">
              <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 flex-shrink-0">
                <span className="font-bold text-slate-900 text-sm">Notifications</span>
                {unreadCount > 0 && (
                  <button onClick={handleMarkAllRead} className="text-xs font-bold text-purple-600 hover:text-purple-800">
                    Mark read
                  </button>
                )}
              </div>
              
              <div className="max-h-[300px] overflow-y-auto p-2">
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`p-3 rounded-xl cursor-pointer transition-colors mb-1 ${notif.isRead ? 'bg-white hover:bg-slate-50 opacity-70' : 'bg-purple-50/50 hover:bg-purple-50'}`}
                    >
                      <p className="text-sm font-bold text-slate-900">{notif.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{notif.message}</p>
                      <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase">{notif.time}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-slate-500 text-sm">No notifications</div>
                )}
              </div>
              
              <div className="border-t border-slate-100 p-2 flex-shrink-0 bg-white">
                <button 
                  onClick={handleViewAll} 
                  className="w-full py-2 text-center text-xs font-bold text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="h-8 w-px bg-slate-200 mx-1 sm:mx-2"></div>
        
        {/* Profile Wrapper */}
        <div ref={profileRef} className="relative">
          <button 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-3 hover:bg-slate-50 p-1.5 pr-3 rounded-full border border-transparent hover:border-slate-100 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
              AP
            </div>
            <span className="text-sm font-bold text-slate-700 hidden sm:block">Aditya Panna</span>
            <ChevronDown size={16} className={`text-slate-400 hidden sm:block transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`} />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-200/50 z-50 overflow-hidden py-2">
              <div className="px-4 py-3 border-b border-slate-100 mb-2">
                <p className="text-sm font-extrabold text-slate-900">Aditya Panna</p>
                <p className="text-xs text-slate-500 font-medium truncate">aditya@example.com</p>
              </div>
              
              <div className="px-2 space-y-1">
                <button onClick={() => { setShowProfileMenu(false); navigate('/profile'); }} className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-purple-700 transition-colors">
                  <UserIcon size={16} /> My Profile
                </button>
                <button onClick={() => { setShowProfileMenu(false); navigate('/my-trips'); }} className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-purple-700 transition-colors">
                  <Map size={16} /> My Trips
                </button>
                <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-purple-700 transition-colors">
                  <Settings size={16} /> Settings
                </button>
              </div>
              
              <div className="h-px bg-slate-100 my-2 mx-2"></div>
              
              <div className="px-2">
                <button onClick={() => {
                  console.log("Logging out...");
                  setShowProfileMenu(false);
                }} className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-red-50 flex items-center gap-3 text-sm font-bold text-red-600 transition-colors">
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