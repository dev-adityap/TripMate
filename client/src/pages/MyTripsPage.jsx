import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Calendar, ArrowRight, MessageSquare, Trash2 } from 'lucide-react';
import { destinationsData } from '../data/destinations';

const MyTripsPage = () => {
  const [joinedBookings, setJoinedBookings] = useState([]); // Array of { id, date }
  const navigate = useNavigate();

  useEffect(() => {
    // Read from the exact storage key used in TripDetailsPage
    const storedBookings = JSON.parse(localStorage.getItem('joinedTripsData') || '[]');
    setJoinedBookings(storedBookings);
  }, []);

  const handleCancelBooking = (destId) => {
    const updated = joinedBookings.filter(b => String(b.id) !== String(destId));
    localStorage.setItem('joinedTripsData', JSON.stringify(updated));
    localStorage.setItem('joinedTrips', JSON.stringify(updated.map(b => b.id)));
    setJoinedBookings(updated);
  };

  // Map joined bookings to their full destination details
  const myTripsWithDetails = joinedBookings.map(booking => {
    const destination = destinationsData.find(d => String(d.id) === String(booking.id));
    return { ...destination, bookedDate: booking.date };
  }).filter(item => item.name); // Filter out any undefined matches

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Joined Trips</h1>
        <p className="text-gray-500 mt-2 font-medium">Manage your active itineraries, dates, and connect with your travel groups.</p>
      </div>

      {myTripsWithDetails.length === 0 ? (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-16 text-center max-w-xl mx-auto mt-10">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase size={28} />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">You haven't joined any trips yet.</h2>
          <p className="text-gray-500 font-medium text-sm mb-6">Explore our 58+ curated destinations, pick your batch dates, and secure your spot!</p>
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm inline-flex items-center gap-2"
          >
            Explore Discover Page <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {myTripsWithDetails.map((trip) => (
            <div 
              key={trip.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider">
                    <MapPin size={14} />
                    <span>{trip.location}</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                    Confirmed Batch
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{trip.name}</h3>

                <div className="bg-purple-50 p-3.5 rounded-2xl border border-purple-100 flex items-center gap-2.5 mb-6 text-xs font-bold text-purple-900">
                  <Calendar size={16} className="text-purple-600" />
                  <span>Scheduled Departure: <strong>{trip.bookedDate}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => navigate(`/workspace/${trip.id}`)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} /> Group Workspace
                </button>
                <button 
                  onClick={() => navigate(`/discover/${trip.id}`)}
                  className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors"
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleCancelBooking(trip.id)}
                  className="p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-colors"
                  title="Cancel Booking"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default MyTripsPage;