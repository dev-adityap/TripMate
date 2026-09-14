import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, ArrowRight, Filter, X, Search } from 'lucide-react';
import TopHeader from '../components/home/TopHeader';
// 1. Remove the DestinationDetailModal import
// 2. Import your mock database
import { mockDestinations } from '../data/mockDatabase';

const DiscoverPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const destQuery = searchParams.get('destination') || '';
  
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  useEffect(() => {
    let results = mockDestinations;
    if (destQuery) {
      const q = destQuery.toLowerCase().trim();
      results = results.filter(d => 
        d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q)
      );
    }
    setFilteredDestinations(results);
  }, [destQuery]);

  const clearAllFilters = () => setSearchParams(new URLSearchParams());

  return (
    <div className="min-h-screen bg-[#F9FAFD] text-slate-900 font-sans pb-20">
      <TopHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Discover Destinations</h1>
          {destQuery && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500"><Filter size={16} className="inline mr-1"/> Active Search:</span>
              <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-2">
                {destQuery} <button onClick={clearAllFilters}><X size={14}/></button>
              </span>
            </div>
          )}
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => (
              <div 
                key={dest.id} 
                onClick={() => navigate(`/destination/${dest.id}`)} // Route to detailed page!
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer"
              >
                {/* Image Placeholder Handler */}
                <div className="relative h-48 bg-slate-100 overflow-hidden flex items-center justify-center">
                  {dest.image ? (
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-300 font-bold tracking-widest text-sm uppercase">
                      Image Coming Soon
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
                    {dest.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-blue-600 text-[10px] font-bold tracking-wider uppercase mb-1">
                    <MapPin size={12} /> {dest.state}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{dest.name}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{dest.overview}</p>
                  
                  <button className="mt-auto w-full py-2.5 rounded-xl bg-slate-50 text-purple-700 hover:bg-purple-600 hover:text-white text-sm font-bold transition-colors flex items-center justify-center gap-2">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No destinations found</h3>
            <button onClick={clearAllFilters} className="px-6 py-3 bg-purple-100 text-purple-700 font-bold rounded-xl">Clear Search</button>
          </div>
        )}
      </main>
    </div>
  );
};
export default DiscoverPage;