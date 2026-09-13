import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Users, Heart, ArrowRight, Filter, X, Search } from 'lucide-react';
import TopHeader from '../components/home/TopHeader';
import DestinationDetailModal from '../components/DestinationDetailModal';

const DiscoverPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Extract query params from URL
  const destQuery = searchParams.get('destination') || '';
  const typeQuery = searchParams.get('type') || '';
  const budgetQuery = searchParams.get('budget') || '';
  const dateQuery = searchParams.get('date') || '';
  

  const [filteredTrips, setFilteredTrips] = useState([]);

  // Expanded Mock Data (Includes priceValue and categoryId for accurate filtering)
  const mockTrips = [
    {
      id: 1, title: 'Sandakphu', state: 'WEST BENGAL', category: 'TREK', categoryId: 'trek',
      rating: 4.8, joined: 6, maxSize: 10, males: 4, females: 2, 
      price: '14,500', priceValue: 14500, duration: '8 Days', image: '/assets/placeholders/sandakphu.jpg'
    },
    {
      id: 2, title: 'Valley of Flowers', state: 'UTTARAKHAND', category: 'TREK', categoryId: 'trek',
      rating: 4.9, joined: 8, maxSize: 12, males: 5, females: 3, 
      price: '12,000', priceValue: 12000, duration: '5 Days', image: '/assets/placeholders/valley-flowers.jpg'
    },
    {
      id: 3, title: 'Kedarnath', state: 'UTTARAKHAND', category: 'SPIRITUAL', categoryId: 'spiritual',
      rating: 4.7, joined: 10, maxSize: 15, males: 7, females: 3, 
      price: '9,500', priceValue: 9500, duration: '4 Days', image: '/assets/placeholders/kedarnath.jpg'
    },
    {
      id: 4, title: 'Goa', state: 'GOA', category: 'BEACH', categoryId: 'beach',
      rating: 4.5, joined: 9, maxSize: 15, males: 5, females: 4, 
      price: '15,000', priceValue: 15000, duration: '5 Days', image: '/assets/placeholders/goa.jpg'
    },
    {
      id: 5, title: 'Spiti Valley', state: 'HIMACHAL PRADESH', category: 'ROAD TRIP', categoryId: 'road-trip',
      rating: 4.9, joined: 4, maxSize: 8, males: 2, females: 2, 
      price: '22,000', priceValue: 22000, duration: '9 Days', image: '/assets/placeholders/spiti.jpg'
    },
    {
      id: 6, title: 'Hampi Ruins', state: 'KARNATAKA', category: 'HERITAGE', categoryId: 'heritage',
      rating: 4.6, joined: 7, maxSize: 12, males: 4, females: 3, 
      price: '8,500', priceValue: 8500, duration: '4 Days', image: '/assets/placeholders/hampi.jpg'
    },
    {
      id: 7, title: 'Kashmir', state: 'JAMMU & KASHMIR', category: 'NATURE', categoryId: 'nature',
      rating: 4.8, joined: 5, maxSize: 10, males: 2, females: 3, 
      price: '28,000', priceValue: 28000, duration: '7 Days', image: '/assets/placeholders/kashmir.jpg'
    },
    {
      id: 8, title: 'Gokarna', state: 'KARNATAKA', category: 'BEACH', categoryId: 'beach',
      rating: 4.4, joined: 12, maxSize: 15, males: 6, females: 6, 
      price: '6,500', priceValue: 6500, duration: '3 Days', image: '/assets/placeholders/gokarna.jpg'
    }
  ];

  // Filtering Logic Effect
  useEffect(() => {
    let results = mockTrips;

    // 1. Filter by Destination (Matches title or state)
    if (destQuery) {
      const q = destQuery.toLowerCase();
      results = results.filter(trip => 
        trip.title.toLowerCase().includes(q) || trip.state.toLowerCase().includes(q)
      );
    }

    // 2. Filter by Trip Type
    if (typeQuery) {
      results = results.filter(trip => trip.categoryId === typeQuery);
    }

    // 3. Filter by Budget Range
    if (budgetQuery) {
      results = results.filter(trip => {
        if (budgetQuery === 'under-10k') return trip.priceValue < 10000;
        if (budgetQuery === '10k-25k') return trip.priceValue >= 10000 && trip.priceValue <= 25000;
        if (budgetQuery === '25k-50k') return trip.priceValue > 25000 && trip.priceValue <= 50000;
        if (budgetQuery === '50k-plus') return trip.priceValue > 50000;
        return true;
      });
    }

    setFilteredTrips(results);
  }, [destQuery, typeQuery, budgetQuery, dateQuery]);

  // Clear a specific filter
  const removeFilter = (paramKey) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(paramKey);
    setSearchParams(newParams);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasActiveFilters = destQuery || typeQuery || budgetQuery || dateQuery;

  return (
    <div className="min-h-screen bg-[#F9FAFD] text-slate-900 font-sans pb-20">
      
      {/* Top Navigation */}
      <TopHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* Header & Active Filters Area */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Discover Trips</h1>
          
          {hasActiveFilters ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-500 mr-2 flex items-center gap-1"><Filter size={16}/> Active Filters:</span>
              
              {destQuery && (
                <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-2">
                  Dest: {destQuery} <button onClick={() => removeFilter('destination')} className="hover:text-purple-900"><X size={14}/></button>
                </span>
              )}
              {typeQuery && (
                <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-2">
                  Type: {typeQuery} <button onClick={() => removeFilter('type')} className="hover:text-purple-900"><X size={14}/></button>
                </span>
              )}
              {budgetQuery && (
                <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-2">
                  Budget: {budgetQuery} <button onClick={() => removeFilter('budget')} className="hover:text-purple-900"><X size={14}/></button>
                </span>
              )}
              
              <button onClick={clearAllFilters} className="text-xs font-bold text-slate-400 hover:text-slate-700 underline ml-2">
                Clear All
              </button>
            </div>
          ) : (
            <p className="text-slate-500 text-sm">Showing all available trips forming right now.</p>
          )}
        </div>

        {/* Results Grid */}
        {filteredTrips.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                
                {/* Image Area */}
                <div className="relative h-48 bg-slate-200 overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('bg-gradient-to-br', 'from-slate-300', 'to-slate-400');
                    }}
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
                    {trip.category}
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                    <Heart size={16} />
                  </button>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1 text-blue-600 text-[10px] font-bold tracking-wider uppercase">
                      <MapPin size={12} />
                      {trip.state}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      {trip.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 truncate">{trip.title}</h3>

                  <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-slate-400" />
                      <span><strong className="text-slate-900">{trip.joined}</strong> / {trip.maxSize}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-500">{trip.males} ♂</span>
                      <span className="text-pink-500">{trip.females} ♀</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-slate-900">₹{trip.price}</div>
                    <div className="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-md">{trip.duration}</div>
                  </div>

                <button 
                    // Change this onClick handler
                    onClick={() => setSelectedTrip(trip)} 
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 mt-auto"
                  >
                    View Trip <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          
      
          <div className="w-full bg-white rounded-3xl border border-slate-100 py-20 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No trips found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any trips matching your exact filters. Try adjusting your destination, budget, or travel type.
            </p>
            <button 
              onClick={clearAllFilters}
              className="px-6 py-3 bg-purple-100 text-purple-700 font-bold rounded-xl hover:bg-purple-200 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
  {/* Drop this right before the closing </main> tag */}
        <DestinationDetailModal 
          trip={selectedTrip} 
          isOpen={!!selectedTrip} 
          onClose={() => setSelectedTrip(null)} 
          onJoin={(tripId, date) => {
            console.log("Joined Trip:", tripId, "Batch Date:", date);
            setSelectedTrip(null);
            // Here you can add logic to save to database, or navigate to a group workspace
          }} 
        />
      </main>
    </div>
  );
};

export default DiscoverPage;