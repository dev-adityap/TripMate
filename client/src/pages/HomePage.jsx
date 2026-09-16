import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockDestinations } from '../data/mockDatabase';

export default function HomePage() {
  const [featuredList, setFeaturedList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tripsForming, setTripsForming] = useState([]);

  // Randomize data on mount
  useEffect(() => {
    const shuffled = [...mockDestinations].sort(() => 0.5 - Math.random());
    
    // Pick 5 destinations for the hero slider rotation
    setFeaturedList(shuffled.slice(0, 5));

    // Pick 4 unique random destinations for "Trips forming now"
    const randomTrips = shuffled.slice(5, 9).map((dest, index) => ({
      id: `trip-${dest.id}-${index}`,
      destinationId: dest.id,
      title: dest.name || dest.title,
      image: dest.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
      category: dest.category || 'Trek',
      location: dest.state || dest.location || 'India',
      rating: dest.rating || '4.8',
      price: dest.approximateBudget || dest.price || '₹14,500',
      duration: dest.recommendedDuration || dest.duration || '5 Days',
      bookedCount: Math.floor(Math.random() * 8) + 6,
      totalSlots: 15
    }));

    setTripsForming(randomTrips);
  }, []);

  // Automatic sliding window timer (changes every 4 seconds)
  useEffect(() => {
    if (featuredList.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredList]);

  const currentFeatured = featuredList[currentIndex] || mockDestinations[0];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8 pt-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Hero Banner Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              ● TripMate Public Beta Is Live
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Find the people. Plan the trip. <span className="text-indigo-600">Go together.</span>
            </h1>
            
            <p className="text-gray-600 text-base leading-relaxed">
              Connect with like-minded travelers, join exciting trips, and turn your travel dreams into real adventures.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                to="/discover" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3.5 rounded-2xl transition-all shadow-md shadow-indigo-200 text-sm flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <span>→</span>
              </Link>
              <Link 
                to="/discover" 
                className="bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-7 py-3.5 rounded-2xl transition-all text-sm"
              >
                Explore Trips
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 text-sm">
              <div>
                <p className="text-2xl font-extrabold text-gray-900">1.2K+</p>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Travelers</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">100+</p>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Destinations</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">48+</p>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Trips Forming</p>
              </div>
            </div>
          </div>

          {/* Hero Featured Sliding Destination Carousel */}
          <div className="relative space-y-3">
            <Link 
              to={`/destination/${currentFeatured.id}`}
              className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg group block cursor-pointer bg-gray-100"
            >
              <img 
                key={currentFeatured.id}
                src={currentFeatured.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'} 
                alt={currentFeatured.name || currentFeatured.title} 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent"></div>
              
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center space-x-2 shadow-sm">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Featured Destination</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <h3 className="text-2xl font-extrabold">{currentFeatured.name || currentFeatured.title}</h3>
                <p className="text-xs text-gray-200 font-medium">📍 {currentFeatured.state || currentFeatured.location} • {currentFeatured.recommendedDuration || '7 Days'}</p>
              </div>
            </Link>

            {/* Sliding Window Pagination Dots */}
            <div className="flex justify-center items-center gap-2 pt-1">
              {featuredList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trips Forming Now Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Trips forming now</h2>
              <p className="text-sm text-gray-500 mt-0.5">Join people who are already planning their next adventure.</p>
            </div>
            <Link to="/discover" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">
              View All Trips →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripsForming.map((trip) => (
              <div 
                key={trip.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col justify-between group"
              >
                <Link to={`/destination/${trip.destinationId}`} className="relative h-48 w-full bg-gray-100 overflow-hidden block">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {trip.category}
                  </span>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-amber-700 font-bold text-xs flex items-center space-x-1 shadow-sm">
                    <span>★</span>
                    <span>{trip.rating}</span>
                  </div>
                </Link>

                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                      {trip.location}
                    </span>
                    <Link to={`/destination/${trip.destinationId}`}>
                      <h3 className="text-lg font-extrabold text-gray-900 mt-0.5 hover:text-indigo-600 transition-colors">
                        {trip.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">👥 {trip.bookedCount} / {trip.totalSlots} Booked</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-extrabold text-emerald-600 text-sm">{trip.price}</span>
                    <span className="text-xs font-bold text-gray-400">⏱️ {trip.duration}</span>
                  </div>

                  <Link 
                    to={`/destination/${trip.destinationId}`}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-center text-xs transition-all shadow-sm shadow-indigo-100 block cursor-pointer"
                  >
                    View Trip →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}