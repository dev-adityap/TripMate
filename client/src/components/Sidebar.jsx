import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  if (location.pathname === '/login') return null;

  const navItems = [
    { 
      path: '/home', 
      name: 'Home', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      path: '/discover', 
      name: 'Discover', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    { 
      path: '/my-trips', 
      name: 'My Trips', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      path: '/favorites', 
      name: 'Favorites', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR (Hidden on mobile, visible on md screens and up) */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-20 bg-white border-r border-gray-100 flex-col items-center py-6 z-50">
        <div className="mb-10">
          <div className="bg-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200">
            TM
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full items-center flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                relative flex items-center justify-center h-12 w-12 rounded-2xl transition-all group
                ${isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-gray-400 hover:bg-indigo-50 hover:text-indigo-600'}
              `}
            >
              {item.icon}
              <span className="absolute left-16 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        {user && (
          <div className="mt-auto pt-6 border-t border-gray-100 w-full flex justify-center">
            <NavLink
              to="/profile"
              className={({ isActive }) => `
                relative h-10 w-10 rounded-full flex items-center justify-center font-extrabold text-sm transition-all group
                ${isActive ? 'ring-2 ring-indigo-600 ring-offset-2 bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}
              `}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
              <span className="absolute left-14 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                Profile
              </span>
            </NavLink>
          </div>
        )}
      </div>

      {/* MOBILE BOTTOM NAVIGATION (Visible on mobile, hidden on md screens and up) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 flex justify-around items-center h-16 px-4 z-50 pb-safe">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center justify-center w-full h-full space-y-1 transition-all
              ${isActive ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-500'}
            `}
          >
            {item.icon}
            <span className="text-[10px] font-bold">{item.name}</span>
          </NavLink>
        ))}
        {user && (
          <NavLink
            to="/profile"
            className={({ isActive }) => `
              flex flex-col items-center justify-center w-full h-full space-y-1 transition-all
              ${isActive ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-500'}
            `}
          >
            {/* FIXED: Replaced isActive with location.pathname check inside the HTML element */}
            <div className={`h-6 w-6 rounded-full flex items-center justify-center font-extrabold text-[10px] ${location.pathname === '/profile' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
            </div>
            <span className="text-[10px] font-bold">Profile</span>
          </NavLink>
        )}
      </div>
    </>
  );
}