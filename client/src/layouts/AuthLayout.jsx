import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative font-sans">
      
      {/* Absolute positioned Back Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-4 sm:left-8 flex items-center text-sm font-medium text-textSecondary hover:text-primary-600 transition-colors"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Home
      </Link>

      {/* Auth Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center gap-2 group mb-6 hover:opacity-90 transition-opacity">
          <div className="bg-primary-500 text-white p-2 rounded-xl shadow-soft">
            <Compass size={28} strokeWidth={2.5} />
          </div>
          <span className="text-3xl font-bold text-textPrimary tracking-tight">
            TripMate
          </span>
        </Link>
        
        <h2 className="mt-2 text-center text-2xl font-bold text-textPrimary">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-center text-sm text-textSecondary">
            {subtitle}
          </p>
        )}
      </div>

      {/* Auth Card Container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface py-8 px-4 shadow-card sm:rounded-3xl sm:px-10 border border-gray-100 mx-4 sm:mx-0">
          {children}
        </div>
      </div>
      
    </div>
  );
};

export default AuthLayout;