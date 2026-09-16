import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { ShieldAlert, LogIn, Sparkles } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Auth Error:", error);
      alert("Sign-in failed: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center text-slate-400 text-xs tracking-widest font-bold uppercase animate-pulse">
        Verifying TripMate Security Session...
      </div>
    );
  }

  // If NOT logged in, block access and show the Google Sign-In prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#111827] border border-[#1E293B] p-8 rounded-3xl shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto text-amber-400 shadow-inner">
            <ShieldAlert size={32} />
          </div>
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#131B2E] border border-[#1E293B] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
              <Sparkles size={10} /> Authentication Required
            </div>
            <h2 className="text-2xl font-serif text-white">Access Restricted</h2>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              You must be signed in with your verified Google account via Firebase to access TripMate expeditions, workspaces, and chat logs.
            </p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-950/50"
          >
            <LogIn size={16} /> Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return children;
}