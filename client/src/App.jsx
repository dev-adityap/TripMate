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
import CheckoutPage from './pages/CheckoutPage';
import CreateTripPage from './pages/CreateTripPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import TripsPage from './pages/TripsPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#0B0F17] text-[#F1F5F9]">
      
      <Sidebar />

      {/* Main container with proper dark styling and responsive margin */}
      <div className="flex-1 w-full md:ml-20 pb-20 md:pb-0 transition-all bg-[#0B0F17]">
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Public Discovery & Info Pages */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/destination/:id" element={<DestinationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Protected Routes (Requires Firebase Google Auth) */}
          <Route path="/my-trips" element={<ProtectedRoute><MyTripsPage /></ProtectedRoute>} />
          <Route path="/trips" element={<ProtectedRoute><TripsPage /></ProtectedRoute>} />
          <Route path="/trip/:id" element={<ProtectedRoute><TripDetailsPage /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          
          <Route path="/create" element={<ProtectedRoute><CreateTripPage /></ProtectedRoute>} />
          <Route path="/messages" element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
          <Route path="/checkout/:id" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* Catch-all route placed correctly at the bottom */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>

    </div>
  );
}