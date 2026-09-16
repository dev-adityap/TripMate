import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({ trips: 0, favorites: 0 });
  const [bio, setBio] = useState(() => localStorage.getItem('tripmate_bio') || 'Adventure seeker & photography enthusiast.');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch stats from local storage
    const savedBookings = JSON.parse(localStorage.getItem('tripmate_bookings') || '{}');
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    setStats({
      trips: Object.keys(savedBookings).length,
      favorites: savedFavorites.length
    });
  }, []);

  const handleSaveProfile = () => {
    localStorage.setItem('tripmate_bio', bio);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8 pt-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="h-24 w-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-extrabold shadow-md shadow-indigo-200 shrink-0">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <h1 className="text-3xl font-extrabold text-gray-900">{user?.name || 'Aditya Panna'}</h1>
              <p className="text-sm font-bold text-gray-500">{user?.email || 'aditya@tripmate.com'}</p>
              
              <div className="pt-2">
                {isEditing ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="text" 
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-indigo-600"
                    />
                    <button 
                      onClick={handleSaveProfile}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <p className="text-sm text-gray-700 italic">"{bio}"</p>
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="text-indigo-600 hover:text-indigo-800 text-xs font-bold"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-100 sm:pl-6 w-full sm:w-auto justify-center">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-indigo-600">{stats.trips}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Booked Trips</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-rose-500">{stats.favorites}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Wishlist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Preferences */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Travel Preferences</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-700">Preferred Destinations</span>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg font-bold">Mountains & Treks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-700">Dietary Requirements</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-bold">None</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-700">Emergency Contact</span>
                <span className="text-xs text-indigo-600 font-bold hover:underline cursor-pointer">+ Add Contact</span>
              </div>
            </div>
          </div>

          {/* Security & App Info */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Session & Security</h3>
              <div className="mt-4 space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase">Active Session Token (JWT)</p>
                <div className="bg-gray-50 border border-gray-200 p-3 rounded-xl overflow-x-auto">
                  <code className="text-[10px] text-indigo-600 font-mono break-all whitespace-normal">
                    {token || 'No active token found.'}
                  </code>
                </div>
                <p className="text-[10px] text-emerald-600 font-bold mt-1">✓ Your connection is secure.</p>
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="w-full mt-6 bg-rose-50 hover:bg-rose-100 border border-rose-100 text-rose-600 font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Sign Out
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}