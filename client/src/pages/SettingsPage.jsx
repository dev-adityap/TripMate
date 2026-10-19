import React, { useState, useEffect } from 'react';
import { User, Mail, Shield, LogOut, CheckCircle2, Globe, Bell, Sparkles, LogIn } from 'lucide-react';
import { auth } from '../firebase';
import { signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    fullName: 'Aditya Panna',
    email: 'aditya@tripmate.com',
    currency: 'INR (?)',
    emailAlerts: true,
    pushAlerts: false
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('tripMate_unlockedWorkspaces');
      localStorage.removeItem('tripMate_userProfile');
      window.location.reload();
    } catch (error) {
      console.error('Firebase SignOut Error:', error);
      alert('Error signing out: ' + error.message);
    }
  };

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
      console.error('Firebase SignIn Error:', error);
      alert('Error signing in with Google: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 shadow-xs">
            <Sparkles size={12} /> Account & Firebase Security
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">Settings</h1>
          <p className="text-white/75 text-sm mt-1">Manage your profile, authentication, currency, and notifications.</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-xl shadow-inner shrink-0 overflow-hidden backdrop-blur-2xl">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
              ) : (
                profile.fullName.substring(0, 2).toUpperCase()
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">{profile.fullName}</h3>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border backdrop-blur-2xl ${user ? 'bg-emerald-500/10 text-emerald-400 border-emerald-400/50' : 'bg-amber-500/10 text-amber-300 border-amber-400/50'}`}>
                  <CheckCircle2 size={10} /> {user ? 'Firebase Google Auth Active' : 'Signed Out'}
                </span>
              </div>
              <p className="text-xs text-white/70 mt-0.5">{profile.email}</p>
            </div>
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-rose-500/10 hover:bg-rose-500/20 border border-rose-400/50 text-rose-300 px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md shrink-0 backdrop-blur-2xl"
            >
              <LogOut size={15} /> Sign Out (Firebase)
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-2xl text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md shrink-0"
            >
              <LogIn size={15} /> Sign In with Google
            </button>
          )}
        </div>

        <form onSubmit={handleSave} className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <User size={14} className="text-amber-300" /> Personal Profile
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/70 uppercase tracking-widest">Full Name</label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/70 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full bg-white/[0.05]/50 border border-white/15 rounded-2xl px-4 py-3.5 text-xs text-white/50 cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-2xl text-xs transition-all inline-flex items-center gap-2"
            >
              {saved ? <><CheckCircle2 size={16} /> Saved</> : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
