import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  Compass, 
  Briefcase, 
  Calendar, 
  Heart, 
  Map, 
  User, 
  Info, 
  DollarSign,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/discover', label: 'Discover', icon: Compass },
    { path: '/my-trips', label: 'My Trips', icon: Briefcase },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/favorites', label: 'Favorites', icon: Heart },
    { path: '/map', label: 'Map View', icon: Map },
    { path: '/expenses', label: 'Expenses', icon: DollarSign },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/about', label: 'About', icon: Info }
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-24 bg-white border-r border-gray-100 flex flex-col items-center justify-between py-8 z-40 shadow-sm">
      
      {/* Brand Logo / Icon
      <div 
        onClick={() => navigate('/dashboard')}
        className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-purple-500/20 cursor-pointer hover:scale-105 transition-transform"
      >
        TM
      </div> */}

      {/* Navigation Links */}
      <nav className="flex flex-col items-center gap-3 w-full px-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                relative group flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300
                ${isActive 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' 
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                }
              `}
              title={item.label}
            >
              <IconComponent size={20} />
              
              {/* Tooltip on Hover */}
              <span className="absolute left-16 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-50">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="relative group flex items-center justify-center w-12 h-12 rounded-2xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
        title="Logout"
      >
        <LogOut size={20} />
        <span className="absolute left-16 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-50">
          Logout
        </span>
      </button>

    </aside>
  );
};

export default Sidebar;