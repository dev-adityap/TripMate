import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Sparkles, ArrowRight } from 'lucide-react';

const RegisterPage = ({ updateBackground }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Registration failed');
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/my-trips');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/my-trips');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14 flex items-center justify-center">
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 shadow-xs">
            <Sparkles size={12} /> Join The Squad
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">Create Account</h1>
          <p className="text-white/75 text-sm">Plan and share adventures with TripMate</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-400/50 rounded-2xl text-xs text-rose-200 text-center backdrop-blur-2xl">
              {error}
            </div>
          )}

          <div className="flex justify-center w-full">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => setError('Google Sign-Up failed.')} width="100%" />
          </div>

          <div className="flex items-center gap-4 text-white/40">
            <hr className="flex-1 border-white/10" />
            <span className="text-xs uppercase font-bold tracking-widest">Or with email</span>
            <hr className="flex-1 border-white/10" />
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl text-sm outline-none text-white placeholder:text-white/40 transition-all"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl text-sm outline-none text-white placeholder:text-white/40 transition-all"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl text-sm outline-none text-white placeholder:text-white/40 transition-all"
                required
              />
            </div>
            <button type="submit" className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-3 rounded-2xl text-sm transition-all inline-flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(255,255,255,0.1)]">
              Sign Up <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-center text-sm text-white/70">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-300 font-bold hover:text-white">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
