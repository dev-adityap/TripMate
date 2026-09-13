import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, IndianRupee } from 'lucide-react';

const TripCard = ({ trip }) => {
  // Destructure trip data (with fallbacks for safety)
  const {
    id = 1,
    destination = "Unknown Destination",
    state = "India",
    image = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop",
    startDate = "TBD",
    endDate = "TBD",
    budget = 0,
    totalSpots = 1,
    filledSpots = 0,
    matchScore = null
  } = trip;

  const spotsLeft = totalSpots - filledSpots;
  const isFull = spotsLeft <= 0;

  return (
    <div className="bg-surface rounded-3xl overflow-hidden shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col group">
      
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={destination} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Match Score Badge (Only show if provided) */}
        {matchScore && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-xl shadow-sm flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${matchScore >= 90 ? 'bg-success-400 animate-ping' : 'bg-primary-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${matchScore >= 90 ? 'bg-success-500' : 'bg-primary-500'}`}></span>
            </span>
            <span className="text-xs font-bold text-textPrimary">{matchScore}% Match</span>
          </div>
        )}

        {/* Destination Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{destination}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin size={14} className="mr-1" />
            {state}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow gap-4">
        
        {/* Trip Details Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-textSecondary">
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-primary-500" />
            <span className="truncate">{startDate} - {endDate}</span>
          </div>
          
          <div className="flex items-center gap-1.5 justify-end">
            <IndianRupee size={16} className="text-primary-500" />
            <span className="font-semibold text-textPrimary">
              ₹{budget.toLocaleString('en-IN')}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 col-span-2 mt-1">
            <Users size={16} className={isFull ? 'text-danger' : 'text-success-500'} />
            <span className={isFull ? 'text-danger font-medium' : 'text-textSecondary'}>
              {isFull ? 'Trip is full' : `${spotsLeft} spots left (out of ${totalSpots})`}
            </span>
          </div>
        </div>

        {/* Card Footer / Action */}
        <div className="pt-4 border-t border-gray-50 mt-auto">
          <Link 
            to={`/dashboard/discover/${id}`}
            className="block w-full text-center py-2.5 rounded-xl bg-gray-50 text-textPrimary font-medium text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;