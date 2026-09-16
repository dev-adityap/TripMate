import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Globe, Briefcase, Heart, PlusCircle, MessageCircle, Bell, Settings, X } from 'lucide-react';

export default function Sidebar() {
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, path: '/home', label: 'Home' },
    { icon: Globe, path: '/discover', label: 'Discover' },
    { icon: Briefcase, path: '/trips', label: 'My Trips' },
    { icon: Heart, path: '/wishlist', label: 'Wishlist' },
    { icon: PlusCircle, path: '/create', label: 'Create' },
    { icon: MessageCircle, path: '/messages', label: 'Messages' },
    { icon: Bell, path: '/notifications', label: 'Notifications' },
    { icon: Settings, path: '/settings', label: 'Settings' },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-24 bg-[#0B0F17] border-r border-[#1E293B] flex flex-col items-center py-6 justify-between z-50 shadow-2xl">
        
        {/* Top Custom Logo Image - Hover zoom & Click to Enlarge */}
        <div 
          className="flex flex-col items-center group cursor-pointer" 
          onClick={() => setIsZoomed(true)}
          title="Click to view brand badge"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#111827] border border-[#1E293B] flex items-center justify-center p-1 overflow-hidden shadow-lg shadow-orange-500/10 group-hover:border-orange-500/50 group-hover:scale-110 transition-all duration-300">
            <img 
              src="/TripMate.png" 
              alt="TripMate Logo" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col gap-3 w-full px-4 items-center">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) => `w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#131B2E] text-sky-400 border border-[#1E293B] shadow-inner' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#111827]'
                }`}
              >
                <Icon size={20} />
              </NavLink>
            );
          })}
        </nav>

        {/* Working Profile Button (Navigates to Settings/Profile) */}
        <button 
          onClick={() => navigate('/settings')}
          className="w-10 h-10 rounded-full bg-[#131B2E] hover:bg-blue-600 border border-[#1E293B] hover:border-blue-500 text-sky-400 hover:text-white font-bold flex items-center justify-center text-sm shadow-md transition-all cursor-pointer"
          title="View Settings & Profile"
        >
          A
        </button>

      </aside>

      {/* Click-to-Enlarge Logo Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-fadeIn"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center relative flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#0B0F17] text-slate-400 hover:text-white border border-[#1E293B] transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-500/50 bg-[#0B0F17] p-2">
              <img 
                src="/TripMate.png" 
                alt="TripMate Full Logo" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-wide">TRIPMATE</h3>
              <p className="text-xs text-orange-400 font-bold uppercase tracking-widest mt-1">Since 2026</p>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Your verified platform for curated Himalayan expeditions and secure traveler squad workspaces.
            </p>
          </div>
        </div>
      )}
    </>
  );
}