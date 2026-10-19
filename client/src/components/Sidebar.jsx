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
  const logoUrl = "/TripMate.png";

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
      <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/15 rounded-full py-5 px-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] hidden md:flex md:flex-col items-center justify-center space-y-2">
        
        {/* Custom Logo at the Top */}
        <div className="flex flex-col items-center mb-2 shrink-0">
          <button 
            onClick={() => setIsLogoModalOpen(true)}
            className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-inner flex items-center justify-center bg-black/30 transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
            title="View TripMate Logo"
          >
            <img src={logoUrl} alt="TripMate Logo" className="w-full h-full object-cover" />
          </button>
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center justify-center w-full space-y-1.5 shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative group p-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-amber-500/[0.08] text-white shadow-[0_10px_25px_rgba(245,158,11,0.12)] border border-white/15' 
                    : 'text-white/70 hover:text-white hover:bg-white/15'
                }`}
                title={item.label}
              >
                <Icon size={18} />
                  <span className="absolute left-full ml-3 px-2 py-1 bg-[#09090B]/90 backdrop-blur-xl text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Spacer */}
        <div className="h-1"></div>

      </aside>

      {/* Enlarged Logo Lightbox Modal */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#09090B]/75 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center space-y-6 relative">
            <button 
              onClick={() => setIsLogoModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-xl bg-black/30 border border-white/15 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
            <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black/30">
              <img src={logoUrl} alt="TripMate Logo" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-sans font-bold text-white tracking-widest">TRIPMATE</h2>
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">SINCE 2026</p>
            </div>
            <p className="text-xs text-white/70 leading-relaxed px-2">
              Your verified platform for curated Himalayan expeditions and secure traveler squad workspaces.
            </p>
          </div>
        </div>
      )}
    </>
  );
}