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
      <div className="min-h-screen bg-[#09090B] flex items-center justify-center text-zinc-400 text-xs tracking-widest font-bold uppercase animate-pulse">
        Verifying TripMate Security Session...
      </div>
    );
  }

  // If NOT logged in, block access and show the Google Sign-In prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-[#09090B] text-zinc-100 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#111827] border border-[#1E293B] p-8 rounded-3xl shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto text-amber-400 shadow-inner">
            <ShieldAlert size={32} />
          </div>
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#131B2E] border border-[#1E293B] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-300">
              <Sparkles size={10} /> Authentication Required
            </div>
            <h2 className="text-2xl font-sans text-white">Access Restricted</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              You must be signed in with your verified Google account via Firebase to access TripMate expeditions, workspaces, and chat logs.
            </p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-3.5 rounded-2xl transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogIn size={16} /> Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return children;
}