import React, { useState, useEffect } from 'react';
import { User, Mail, Shield, LogOut, CheckCircle2, Globe, Bell, Sparkles, LogIn } from 'lucide-react';
import { auth } from '../firebase'; // Only importing auth from your firebase file
import { signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    fullName: 'Aditya Panna',
    email: 'aditya@tripmate.com',
    currency: 'INR (₹)',
    emailAlerts: true,
    pushAlerts: false
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Listen to real Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setProfile(prev => ({
          ...prev,
          fullName: currentUser.displayName || 'Aditya Panna',
          email: currentUser.email || 'aditya@tripmate.com'
        }));
      } else {
        setUser(null);
      }
    });

    const savedPrefs = JSON.parse(localStorage.getItem('tripMate_userProfile') || 'null');
    if (savedPrefs) {
      setProfile(savedPrefs);
    }

    return () => unsubscribe();
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('tripMate_userProfile', JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // Real Firebase Sign Out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('tripMate_unlockedWorkspaces');
      localStorage.removeItem('tripMate_userProfile');
      window.location.reload();
    } catch (error) {
      console.error("Firebase SignOut Error:", error);
      alert("Error signing out: " + error.message);
    }
  };

  // Real Firebase Google Sign In using GoogleAuthProvider directly
  const handleLogin = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setProfile(prev => ({
        ...prev,
        fullName: result.user.displayName,
        email: result.user.email
      }));
      window.location.reload();
    } catch (error) {
      console.error("Firebase SignIn Error:", error);
      alert("Error signing in with Google: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Account & Firebase Security
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Settings</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Manage your profile details, real Firebase Google Authentication session, currency, and notifications.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Real Firebase Google Authentication Status & Sign In / Sign Out Card */}
        <div className="bg-[#111827] border border-[#1E293B] p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl shadow-inner shrink-0 overflow-hidden">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
              ) : (
                profile.fullName.substring(0, 2).toUpperCase()
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">{profile.fullName}</h3>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border ${
                  user ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}>
                  <CheckCircle2 size={10} /> {user ? 'Firebase Google Auth Active' : 'Signed Out'}
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] mt-0.5">{profile.email}</p>
            </div>
          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md shrink-0"
            >
              <LogOut size={15} /> Sign Out (Firebase)
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-900/30 shrink-0"
            >
              <LogIn size={15} /> Sign In with Google
            </button>
          )}
        </div>

        {/* Profile & Preferences Form */}
        <form onSubmit={handleSave} className="bg-[#111827] border border-[#1E293B] p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
          
          <div className="border-b border-[#1E293B] pb-4">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <User size={14} className="text-sky-400" /> Personal Profile
            </h3>
            <p className="text-[11px] text-[#94A3B8] mt-0.5">Update your display credentials used across group workspaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  value={profile.fullName}
                  onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl pl-11 pr-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">Email Address (Google Account)</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="email" 
                  value={profile.email}
                  disabled
                  className="w-full bg-[#0B0F17]/50 border border-[#1E293B] rounded-2xl pl-11 pr-4 py-3.5 text-xs text-slate-400 cursor-not-allowed shadow-inner"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-[#1E293B] pt-4 pb-4">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <Globe size={14} className="text-sky-400" /> Regional & Currency
            </h3>
          </div>

          <div className="space-y-2 max-w-md">
            <label className="text-xs font-bold text-slate-300">Preferred Currency</label>
            <select 
              value={profile.currency}
              onChange={(e) => setProfile({...profile, currency: e.target.value})}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner cursor-pointer"
            >
              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>

          <div className="border-b border-[#1E293B] pt-4 pb-4">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <Bell size={14} className="text-sky-400" /> Notifications
            </h3>
          </div>

          <div className="space-y-3 pt-1">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={profile.emailAlerts}
                onChange={(e) => setProfile({...profile, emailAlerts: e.target.checked})}
                className="w-4 h-4 rounded bg-[#0B0F17] border-[#1E293B] text-blue-600 focus:ring-0 cursor-pointer"
              />
              <span className="text-xs text-slate-300 font-medium">Receive booking updates and squad alerts via email</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={profile.pushAlerts}
                onChange={(e) => setProfile({...profile, pushAlerts: e.target.checked})}
                className="w-4 h-4 rounded bg-[#0B0F17] border-[#1E293B] text-blue-600 focus:ring-0 cursor-pointer"
              />
              <span className="text-xs text-slate-300 font-medium">Enable real-time push notifications in browser</span>
            </label>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl text-xs font-bold shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
            >
              Save Changes
            </button>
            {saved && (
              <span className="text-emerald-400 text-xs font-bold flex items-center gap-1 animate-fadeIn">
                <CheckCircle2 size={14} /> Preferences saved successfully!
              </span>
            )}
          </div>

        </form>

      </div>

    </div>
  );
}