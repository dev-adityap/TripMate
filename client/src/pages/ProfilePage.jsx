import React, { useState, useEffect } from 'react';
import { User, Mail, ShieldCheck, Heart, Compass, Sliders, Check } from 'lucide-react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Aditya Panna',
    email: 'aditya@tripmate.com',
    age: '22',
    gender: 'Male',
    budget: '₹15,000 - ₹25,000',
    preferredCategory: 'Trek & Mountains'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedPrefs = localStorage.getItem('travelPreferences');
    
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(prev => ({ ...prev, name: parsed.name || prev.name, email: parsed.email || prev.email, picture: parsed.picture }));
    }
    if (storedPrefs) {
      setUser(prev => ({ ...prev, ...JSON.parse(storedPrefs) }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('travelPreferences', JSON.stringify({
      age: user.age,
      gender: user.gender,
      budget: user.budget,
      preferredCategory: user.preferredCategory
    }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Account & Travel Preferences</h1>
        <p className="text-gray-500 mt-2 font-medium">Manage your personal profile and trip matching preferences for anonymous groups.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl">
        
        {/* Left Card: Identity & Security */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 text-center h-fit">
          <div className="relative w-24 h-24 mx-auto">
            <img 
              src={user.picture || `https://ui-avatars.com/api/?name=${user.name}&background=8b5cf6&color=fff`} 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-purple-50"
            />
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900">{user.name}</h2>
            <p className="text-xs text-gray-500 font-medium mt-1">{user.email}</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center justify-center gap-2 text-emerald-700 text-xs font-bold">
            <ShieldCheck size={16} /> Anonymous PII Protection Active
          </div>

          <div className="text-left pt-4 border-t border-gray-100 space-y-3">
            <div className="flex justify-between text-xs font-bold text-gray-500">
              <span>Account Type</span>
              <span className="text-purple-600">Traveler / Member</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-gray-500">
              <span>Privacy Standard</span>
              <span className="text-emerald-600">Strictly Anonymous</span>
            </div>
          </div>
        </div>

        {/* Right Card: Travel Preferences Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
            <Sliders size={20} className="text-purple-600" /> Trip Matching Preferences
          </h3>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Age</label>
                <input 
                  type="number" 
                  name="age" 
                  value={user.age} 
                  onChange={handleChange}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Gender (for anonymous stats)</label>
                <select 
                  name="gender" 
                  value={user.gender} 
                  onChange={handleChange}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Budget Range</label>
                <select 
                  name="budget" 
                  value={user.budget} 
                  onChange={handleChange}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                >
                  <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000 (Budget)</option>
                  <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000 (Standard)</option>
                  <option value="₹20,000 - ₹35,000+">₹20,000 - ₹35,000+ (Premium)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Travel Category</label>
                <select 
                  name="preferredCategory" 
                  value={user.preferredCategory} 
                  onChange={handleChange}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                >
                  <option value="Trek & Mountains">Trek & Mountains</option>
                  <option value="Beach & Coastal">Beach & Coastal</option>
                  <option value="Heritage & Culture">Heritage & Culture</option>
                  <option value="Nature & Wildlife">Nature & Wildlife</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-gray-100">
              {savedSuccess ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl">
                  <Check size={16} /> Preferences Saved Successfully!
                </span>
              ) : (
                <span className="text-xs text-gray-400 font-medium">Used for curated group discovery</span>
              )}

              <button 
                type="submit"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-sm transition-colors text-sm"
              >
                Save Preferences
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;