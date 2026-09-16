import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      {/* Search or Branding if needed */}
      <div className="flex items-center space-x-3">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Secure Session Active</span>
      </div>

      {/* User Profile & JWT Dropdown Indicator */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-2xl">
          <div className="bg-indigo-600 text-white font-bold text-xs h-8 w-8 rounded-xl flex items-center justify-center">
            {user?.name ? user.name.charAt(0) : 'A'}
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-extrabold text-gray-800">{user?.name || 'Aditya Panna'}</p>
            <p className="text-[10px] text-emerald-600 font-bold">● JWT Authenticated</p>
          </div>
        </div>

        <button 
          onClick={logout}
          className="bg-gray-100 hover:bg-rose-50 text-gray-600 hover:text-rose-600 text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer"
          title="Sign Out"
        >
          Logout
        </button>
      </div>
    </div>
  );
}