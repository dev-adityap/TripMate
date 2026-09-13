import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import DashboardPage from './pages/DashboardPage';
import DiscoverPage from './pages/DiscoverPage';
import TripDetailsPage from './pages/TripDetailsPage';
import MyTripsPage from './pages/MyTripsPage';
import CalendarPage from './pages/CalendarPage';
import FavoritesPage from './pages/FavoritesPage';
import WishlistPage from './pages/WishlistPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import GroupWorkspacePage from './pages/GroupWorkspacePage';
import ExpenseTrackerPage from './pages/ExpenseTrackerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Routes wrapped with Sidebar Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Dynamic route placed before static route */}
        <Route path="/discover/:id" element={<TripDetailsPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        
        <Route path="/my-trips" element={<MyTripsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/workspace/:id" element={<GroupWorkspacePage />} />
        <Route path="/expenses" element={<ExpenseTrackerPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;