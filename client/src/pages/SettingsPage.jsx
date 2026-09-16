import React, { useState, useEffect } from 'react';
import { Settings, User, Bell, Shield, CreditCard, CheckCircle2, Sparkles } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: 'Aditya Panna',
    email: 'aditya@tripmate.com',
    currency: 'INR (₹)',
    emailNotifications: true,
    pushNotifications: false,
    profileVisibility: 'Public'
  });

  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tripMate_userSettings'));
    if (saved) {
      setSettings(saved);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('tripMate_userSettings', JSON.stringify(settings));
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Account Preferences
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Settings</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Manage your profile details, currency, and notification channels.</p>
      </div>

      {savedMessage && (
        <div className="max-w-4xl mx-auto mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold">
          <CheckCircle2 size={16} /> Settings saved successfully!
        </div>
      )}

      {/* Settings Form Card */}
      <form onSubmit={handleSave} className="max-w-4xl mx-auto bg-[#111827] border border-[#1E293B] rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
        
        {/* Profile Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-extrabold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <User size={16} /> Personal Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#94A3B8] mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={settings.name} 
                onChange={handleChange}
                className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#94A3B8] mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={settings.email} 
                onChange={handleChange}
                className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
              />
            </div>
          </div>
        </div>

        <hr className="border-[#1E293B]" />

        {/* Preferences Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-extrabold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <CreditCard size={16} /> Regional & Currency
          </h3>
          <div>
            <label className="block text-xs font-bold text-[#94A3B8] mb-2">Preferred Currency</label>
            <select 
              name="currency"
              value={settings.currency}
              onChange={handleChange}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
            >
              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>
        </div>

        <hr className="border-[#1E293B]" />

        {/* Notifications Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-extrabold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <Bell size={16} /> Notifications
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                className="w-4 h-4 rounded bg-[#0B0F17] border-[#1E293B] text-blue-600 focus:ring-0"
              />
              <span className="text-xs text-slate-300 font-medium">Receive booking updates and squad alerts via email</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                name="pushNotifications"
                checked={settings.pushNotifications}
                onChange={handleChange}
                className="w-4 h-4 rounded bg-[#0B0F17] border-[#1E293B] text-blue-600 focus:ring-0"
              />
              <span className="text-xs text-slate-300 font-medium">Enable real-time push notifications in browser</span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-900/30 transition-all text-xs uppercase tracking-wider cursor-pointer"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}