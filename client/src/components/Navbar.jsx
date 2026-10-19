import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      {/* Search or Branding if needed */}
      <div className="flex items-center space-x-3">
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Secure Session Active</span>
      </div>

      {/* User Profile & JWT Dropdown Indicator */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-2xl">
          <div className="bg-amber-500 text-white font-bold text-xs h-8 w-8 rounded-xl flex items-center justify-center">
            {user?.name ? user.name.charAt(0) : 'A'}
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-extrabold text-zinc-950">{user?.name || 'Aditya Panna'}</p>
            <p className="text-[10px] text-emerald-600 font-bold">● JWT Authenticated</p>
          </div>
        </div>

        <button 
          onClick={logout}
          className="bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer"
          title="Sign Out"
        >
          Logout
        </button>
      </div>
    </div>
  );
}