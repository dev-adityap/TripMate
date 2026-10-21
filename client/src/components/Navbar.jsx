import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SiteSearchModal from './SiteSearchModal';
import { Menu, X, Search, Sun, Moon, Home, Map, Compass, Heart, Settings, Bell, LogOut, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { path: '/home', label: 'Home', icon: Home },
  { path: '/discover', label: 'Discover', icon: Compass },
  { path: '/map', label: 'Map Explorer', icon: Map },
  { path: '/trips', label: 'Trips', icon: Compass },
  { path: '/wishlist', label: 'Wishlist', icon: Heart },
  { path: '/create', label: 'Create', icon: Compass },
  { path: '/messages', label: 'Workspaces', icon: Compass },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <SiteSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Top Navbar */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-[#09090B]/90 backdrop-blur-2xl border-b border-white/10">
        {/* Logo - clickable, routes to /home */}
        <Link to="/home" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-black/30 flex items-center justify-center group-hover:border-amber-400/50 transition-all">
            <img src="/TripMate.png" alt="TripMate Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">TripMate</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-amber-400 after:transition-all ${
                  isActive
                    ? 'text-amber-300 font-bold after:w-full'
                    : 'text-white/70 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            title="Search (Ctrl+K)"
            className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <Search size={16} />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
            className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
          >
            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Notifications */}
          <Link
            to="/notifications"
            className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <Bell size={16} />
          </Link>

          {/* User Profile */}
          {user ? (
            <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-2xl">
              <div className="bg-amber-500 text-white font-bold text-xs h-7 w-7 rounded-xl flex items-center justify-center">
                {user.name ? user.name.charAt(0) : 'A'}
              </div>
              <span className="text-xs font-bold text-white/80 hidden md:block">
                {user.name ? user.name.split(' ')[0] : 'User'}
              </span>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-xs font-bold px-4 py-2 bg-white text-zinc-950 rounded-xl hover:bg-amber-400 transition-all cursor-pointer"
            >
              Sign In
            </Link>
          )}

          {/* Logout */}
          {user && (
            <button
              type="button"
              onClick={logout}
              title="Sign Out"
              className="w-9 h-9 rounded-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 flex items-center justify-center text-rose-400 transition-all cursor-pointer"
            >
              <LogOut size={16} />
            </button>
          )}

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed top-0 right-0 z-[95] h-full w-72 bg-[#09090B]/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl lg:hidden animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-lg font-extrabold text-white">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                        : 'text-white/70 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                    {link.label}
                    <ChevronRight size={14} className="ml-auto text-white/30" />
                  </Link>
                );
              })}
            </nav>
            <div className="absolute bottom-6 left-4 right-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <Search size={16} />
                <span className="text-sm font-bold">Search Destinations</span>
                <span className="ml-auto text-[10px] text-white/30 font-mono">Ctrl+K</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
