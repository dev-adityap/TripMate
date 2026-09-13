import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm w-full max-w-md space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">Join TripMate to plan and share adventures.</p>
        </div>

        {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium">{error}</div>}

        <div className="flex justify-center w-full">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => setError('Google Sign-Up failed.')} width="100%" />
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <hr className="flex-1 border-gray-200" />
          <span className="text-xs uppercase font-bold text-gray-400">Or with email</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors shadow-sm">Sign Up</button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;