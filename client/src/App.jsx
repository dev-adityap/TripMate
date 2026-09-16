import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Components
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import DestinationPage from './pages/DestinationPage';
import MyTripsPage from './pages/MyTripsPage';
import TripDetailsPage from './pages/TripDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar />

      {/* CHANGED: md:ml-20 applies left margin ONLY on desktop. pb-20 md:pb-0 handles mobile bottom spacing */}
      <div className="flex-1 w-full md:ml-20 pb-20 md:pb-0 transition-all">
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/destination/:id" element={<DestinationPage />} />
          
          <Route path="/my-trips" element={<ProtectedRoute><MyTripsPage /></ProtectedRoute>} />
          <Route path="/trip/:id" element={<ProtectedRoute><TripDetailsPage /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>

    </div>
  );
}