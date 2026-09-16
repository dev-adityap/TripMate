import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function MyTripsPage() {
  const { user } = useAuth();
  const [bookedTrips, setBookedTrips] = useState([]);

  useEffect(() => {
    // Fetch bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem('tripmate_bookings') || '{}');
    // Convert the object into an array for easier mapping
    const tripsArray = Object.values(savedBookings).sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
    setBookedTrips(tripsArray);
  }, []);

  const handleCancelBooking = (destinationId, tripId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;

    // Remove from bookings
    const currentBookings = JSON.parse(localStorage.getItem('tripmate_bookings') || '{}');
    delete currentBookings[destinationId];
    localStorage.setItem('tripmate_bookings', JSON.stringify(currentBookings));

    // Remove from custom trips (workspace access)
    const currentTrips = JSON.parse(localStorage.getItem('tripmate_custom_trips') || '{}');
    delete currentTrips[tripId];
    localStorage.setItem('tripmate_custom_trips', JSON.stringify(currentTrips));

    // Update state to remove it from the UI immediately
    setBookedTrips(bookedTrips.filter(trip => trip.destinationId !== destinationId));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8 pt-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">My Trips</h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back, <span className="font-bold text-indigo-600">{user?.name || 'Traveler'}</span>! Here are your upcoming adventures.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-xl">
            <p className="text-xs font-bold text-indigo-800">Total Bookings: {bookedTrips.length}</p>
          </div>
        </div>

        {/* Trips Grid */}
        {bookedTrips.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm space-y-5 flex flex-col items-center">
            <div className="text-5xl">🏕️</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">No trips booked yet</h3>
              <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                Your itinerary is empty. Find your next adventure, join a batch, and start planning with your group!
              </p>
            </div>
            <Link 
              to="/discover" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-indigo-200 text-sm mt-2"
            >
              Explore Destinations →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookedTrips.map((trip) => (
              <div 
                key={trip.tripId} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                {/* Trip Image */}
                <div className="relative h-48 w-full bg-gray-100">
                  <img 
                    src={trip.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80'} 
                    alt={trip.title} 
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                    Confirmed
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {trip.location}
                    </span>
                    <h3 className="text-xl font-extrabold text-gray-900 mt-1 line-clamp-1">
                      {trip.title}
                    </h3>
                    
                    <div className="mt-4 space-y-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-gray-500">Departure Batch:</span>
                        <span className="font-bold text-indigo-600">{trip.batch || 'Upcoming'}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-gray-500">Amount Paid:</span>
                        <span className="font-bold text-emerald-600">{trip.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link 
                      to={`/trip/${trip.tripId}`}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-center text-xs transition-all shadow-sm shadow-indigo-100 flex items-center justify-center space-x-2"
                    >
                      <span>💬 Open Group Workspace</span>
                    </Link>
                    
                    <button 
                      onClick={() => handleCancelBooking(trip.destinationId, trip.tripId)}
                      className="w-full bg-white border border-rose-200 hover:bg-rose-50 text-rose-500 hover:text-rose-600 font-bold py-2.5 rounded-xl transition-all text-xs cursor-pointer"
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}