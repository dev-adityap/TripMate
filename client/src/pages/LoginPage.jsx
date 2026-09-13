import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || 'Login failed');

      // Save user and hard-redirect to force React to update the Navbar
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/my-trips'; 
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

      if (!response.ok) throw new Error(data.error || data.details || 'Google authentication failed');

      // Save user and hard-redirect to force React to update the Navbar
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/my-trips';
    } catch (err) {
      console.error("Google Auth Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm w-full max-w-md space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in with Google or your email.</p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium break-words">
            {error}
          </div>
        )}

        <div className="flex justify-center w-full">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google Popup failed to load.')}
            width="100%"
          />
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <hr className="flex-1 border-gray-200" />
          <span className="text-xs uppercase font-bold text-gray-400">Or with email</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" 
              required 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl text-sm hover:bg-purple-700 transition-colors shadow-sm cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="text-purple-600 font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;