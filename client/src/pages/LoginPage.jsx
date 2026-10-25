import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Sparkles, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage({ updateBackground }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // AuthContext exports 'loginWithGoogle' for Google Sign-In
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      navigate('/home');
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate('/home');
    } catch (err) {
      console.error("Firebase Google Auth Error:", err);
      setError('Failed to sign in with Google.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-dvh w-full relative flex items-center justify-center overflow-hidden bg-[#09090B] font-sans p-6">
      
      {/* Ambient Backdrop */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#09090B]/80 to-[#09090B] z-0" />

      {/* Glass Container */}
      <div className="relative z-10 w-full max-w-md bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
        
        <div className="text-center mb-8 space-y-3 w-full">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 shadow-xs">
            <Sparkles size={12} /> Welcome Back
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-widest text-white leading-tight mb-10">Sign In</h1>
          <p className="text-white/75 text-sm">Continue your expedition with TripMate</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-500/10 border border-rose-400/50 rounded-2xl text-xs text-rose-200 text-center backdrop-blur-2xl w-full">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center gap-2">
              <Mail size={14} className="text-amber-300" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center gap-2">
              <Lock size={14} className="text-amber-300" /> Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none pr-11"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-sm md:text-base px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-60"
          >
            {loading ? 'Signing In...' : <>Sign In <ArrowRight size={16} /></>}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center gap-4 w-full my-6">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Or</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Google Auth Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 text-white font-bold text-sm md:text-base px-6 py-4 rounded-2xl transition-all duration-300 hover:border-white/25 cursor-pointer disabled:opacity-60"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google" 
            className="w-5 h-5" 
          />
          Continue with Google
        </button>

        {/* Footer */}
        <div className="mt-8 text-center w-full">
          <p className="text-[11px] text-white/40 font-medium uppercase tracking-widest">Secure Encrypted Authentication</p>
          <div className="mt-6 text-center text-xs text-white/70">
            Don't have an account?{' '}
            <Link to="/register" className="text-amber-300 hover:text-white font-bold">
              Create one
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}