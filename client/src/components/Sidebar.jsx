import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Star,
  Compass, 
  Briefcase, 
  Heart, 
  PlusCircle, 
  MessageSquare, 
  Bell, 
  Settings, 
  Home,
  Info,
  Mail,
  X
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const logoUrl = "TripMate.png";

  // Added About Us & Contact Us to the main navigation items
  const navItems = [
    { path: '/reviews', icon: Star, label: 'Reviews' },
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/discover', icon: Compass, label: 'Discover' },
    { path: '/trips', icon: Briefcase, label: 'Trips' },
    { path: '/wishlist', icon: Heart, label: 'Wishlist' },
    { path: '/create', icon: PlusCircle, label: 'Create' },
    { path: '/messages', icon: MessageSquare, label: 'Workspaces' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/about', icon: Info, label: 'About Us' },
    { path: '/contact', icon: Mail, label: 'Contact Us' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      <aside className="fixed bottom-0 left-0 w-full md:w-20 md:h-screen bg-[#111827] border-t md:border-t-0 md:border-r border-[#1E293B] flex md:flex-col justify-between items-center py-3 md:py-6 px-4 md:px-0 z-50 shadow-2xl overflow-y-auto">
        
        {/* Custom Logo at the Top */}
        <div className="hidden md:flex flex-col items-center mb-4 shrink-0">
          <button 
            onClick={() => setIsLogoModalOpen(true)}
            className="w-12 h-12 rounded-2xl overflow-hidden border border-[#1E293B] shadow-inner flex items-center justify-center bg-[#0B0F17] transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
            title="View TripMate Logo"
          >
            <img src={logoUrl} alt="TripMate Logo" className="w-full h-full object-cover" />
          </button>
        </div>

        {/* Navigation Icons */}
        <nav className="flex md:flex-col items-center justify-around md:justify-center w-full md:w-auto md:space-y-2 shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative group p-2.5 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                    : 'text-slate-400 hover:text-white hover:bg-[#1E293B]/50'
                }`}
                title={item.label}
              >
                <Icon size={19} />
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Spacer */}
        <div className="hidden md:block h-4"></div>

      </aside>

      {/* Enlarged Logo Lightbox Modal */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center space-y-6 relative">
            <button 
              onClick={() => setIsLogoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-[#0B0F17] border border-[#1E293B] transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
            <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-2 border-[#1E293B] shadow-2xl bg-[#0B0F17]">
              <img src={logoUrl} alt="TripMate Logo" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-serif font-bold text-white tracking-widest">TRIPMATE</h2>
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">SINCE 2026</p>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed px-2">
              Your verified platform for curated Himalayan expeditions and secure traveler squad workspaces.
            </p>
          </div>
        </div>
      )}
    </>
  );
}