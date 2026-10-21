import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import Components
import Sidebar from './components/Sidebar';
import GlobalUXEnhancer from './components/GlobalUXEnhancer';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import MapPage from './pages/MapPage';
import DestinationPage from './pages/DestinationPage';
import MyTripsPage from './pages/MyTripsPage';
import TripDetailsPage from './pages/TripDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
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
import NotFoundPage from './pages/NotFoundPage';
import { mockDestinations } from './data/mockDatabase';

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80'
  );

  const updateBackground = (imageUrl) => {
    if (imageUrl) {
      setBackgroundImage(imageUrl);
    }
  };

  // Global ScrollToTop on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-[#09090B] text-white font-sans select-none">
      {/* Dynamic Background Layer */}
      <div
        className="fixed inset-0 z-0 transition-all duration-1000 ease-out transform scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Readability Overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Main container with proper dark styling and responsive margin */}
      <div className="relative z-10 flex-1 w-full pb-20 md:pb-0 transition-all">
        <GlobalUXEnhancer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Public Discovery & Info Pages */}
          <Route path="/home" element={<HomePage updateBackground={updateBackground} />} />
          <Route path="/discover" element={<DiscoverPage updateBackground={updateBackground} />} />
          <Route path="/map" element={<MapPage updateBackground={updateBackground} />} />
          <Route path="/destination/:id" element={<DestinationPage updateBackground={updateBackground} />} />
          <Route path="/about" element={<AboutPage updateBackground={updateBackground} />} />
          <Route path="/contact" element={<ContactPage updateBackground={updateBackground} />} />

          {/* Protected Routes (Requires Firebase Google Auth) */}
          <Route path="/my-trips" element={<ProtectedRoute><MyTripsPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/trips" element={<ProtectedRoute><TripsPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/trip/:id" element={<ProtectedRoute><TripDetailsPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><FavoritesPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage updateBackground={updateBackground} /></ProtectedRoute>} />

          <Route path="/profile" element={<ProtectedRoute><ProfilePage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/create" element={<ProtectedRoute><CreateTripPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/messages" element={<ProtectedRoute><MessagesPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/workspaces" element={<ProtectedRoute><MessagesPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><NotificationsPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/checkout/:id" element={<ProtectedRoute><CheckoutPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage updateBackground={updateBackground} /></ProtectedRoute>} />
          <Route path="/reviews" element={<ReviewsPage updateBackground={updateBackground} />} />

          {/* Custom 404 Catch-all Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {pathname !== '/map' && <Footer />}
      </div>

    </div>
  );
}