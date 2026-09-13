import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, HeartCrack, Trash2 } from 'lucide-react';
import TripCard from '../components/TripCard';

const WishlistPage = () => {
  // MOCK DATA: Simulating saved trips
  const initialWishlist = [
    {
      id: 2,
      destination: "Winter in Kashmir",
      state: "Jammu & Kashmir, India",
      image: "https://images.unsplash.com/photo-1627894372583-0599ebf85d34?q=80&w=600&auto=format&fit=crop",
      startDate: "Dec 10, 2026",
      endDate: "Dec 17, 2026",
      budget: 45000,
      totalSpots: 4,
      filledSpots: 1,
      matchScore: 82
    },
    {
      id: 5,
      destination: "Sandakphu Trek",
      state: "West Bengal, India",
      image: "https://images.unsplash.com/photo-1544256214-722a4bb4a64d?q=80&w=600&auto=format&fit=crop",
      startDate: "Nov 15, 2026",
      endDate: "Nov 21, 2026",
      budget: 12500,
      totalSpots: 12,
      filledSpots: 5,
      matchScore: 65
    }
  ];

  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id) => {
    // MOCK: Remove item from wishlist state
    setWishlist(wishlist.filter(trip => trip.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-textPrimary tracking-tight mb-2 flex items-center gap-3">
            My Wishlist <Heart className="text-danger fill-danger" size={24} />
          </h1>
          <p className="text-textSecondary text-sm">Trips you've saved to look at later.</p>
        </div>
        <div className="text-sm font-medium text-textSecondary bg-surface px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
          {wishlist.length} Saved {wishlist.length === 1 ? 'Trip' : 'Trips'}
        </div>
      </div>

      {/* GRID CONTENT */}
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {wishlist.map((trip) => (
            <div key={trip.id} className="flex flex-col gap-3 group">
              <TripCard trip={trip} />
              
              {/* Remove Action */}
              <button 
                onClick={() => handleRemove(trip.id)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface text-textSecondary font-medium text-sm hover:bg-danger/10 hover:text-danger transition-colors border border-gray-200 hover:border-danger/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
              >
                <Trash2 size={16} /> Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-surface border border-gray-100 rounded-3xl shadow-soft">
          <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <HeartCrack size={32} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-textPrimary mb-3">Your wishlist is empty</h3>
          <p className="text-textSecondary text-sm max-w-md mb-8 leading-relaxed">
            You haven't saved any trips yet. Browse the discover page and click the heart icon on any trip that catches your eye!
          </p>
          <Link 
            to="/discover"
            className="px-8 py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-soft hover:shadow-md"
          >
            Explore Trips
          </Link>
        </div>
      )}

    </div>
  );
};

export default WishlistPage;