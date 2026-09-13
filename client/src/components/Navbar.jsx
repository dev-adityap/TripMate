import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check Local Storage as soon as the Navbar loads
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // Instantly updates the UI
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <div className="flex gap-6 items-center">
        {/* Replace this with your actual logo/styling if needed */}
        <Link to="/" className="text-xl font-bold text-purple-600 flex items-center gap-2">
          <span>◎</span> TripMate
        </Link>
        <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">Home</Link>
        <Link to="/discover" className="text-gray-600 hover:text-purple-600 font-medium">Discover</Link>
      </div>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span className="font-semibold text-gray-700">Hi, {user.name.split(' ')[0]}</span>
            <button 
              onClick={handleLogout}
              className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="font-semibold text-gray-700 hover:text-purple-600">Log In</Link>
            <Link to="/register" className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-sm">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;