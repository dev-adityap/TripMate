import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockDestinations as destinations } from '../data/mockDatabase';

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter destinations based on search query and category
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const name = dest.name || dest.title || '';
      const location = dest.state || dest.location || '';
      const category = dest.category || 'Trek';

      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' || category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Pagination slice
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8 pt-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Discover Destinations</h1>
            <p className="text-sm text-gray-500 mt-1">Explore {filteredDestinations.length} curated treks, hills, and getaways.</p>
          </div>

          <div className="w-full md:w-72">
            <input 
              type="text"
              placeholder="Search destinations (e.g., Manali)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-600 transition-all font-medium"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {['All', 'Mountain', 'Trek', 'Beach', 'Culture', 'Wildlife'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destinations Grid (Showing 20 items per page) */}
        {currentDestinations.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-gray-800">No destinations found</h3>
            <p className="text-sm text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentDestinations.map((dest) => (
              <Link 
                key={dest.id} 
                to={`/destination/${dest.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={dest.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80'} 
                    alt={dest.name || dest.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {dest.category || 'Trek'}
                  </span>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-amber-700 font-bold text-xs flex items-center space-x-1 shadow-sm">
                    <span>★</span>
                    <span>{dest.rating || '4.8'}</span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                      {dest.state || dest.location}
                    </span>
                    <h3 className="text-lg font-extrabold text-gray-900 mt-0.5 group-hover:text-indigo-600 transition-colors">
                      {dest.name || dest.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-500">⏱️ {dest.recommendedDuration || dest.duration || '5 Days'}</span>
                    <span className="font-extrabold text-emerald-600">{dest.approximateBudget || dest.price || '₹14,500'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination Buttons Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between bg-white px-6 py-4 rounded-3xl shadow-sm border border-gray-100 gap-4 mt-8">
            <p className="text-xs font-semibold text-gray-500">
              Showing <span className="font-bold text-gray-800">{indexOfFirstItem + 1}</span> to <span className="font-bold text-gray-800">{Math.min(indexOfLastItem, filteredDestinations.length)}</span> of <span className="font-bold text-gray-800">{filteredDestinations.length}</span> destinations
            </p>

            <div className="flex items-center gap-1.5 overflow-x-auto">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                ← Prev
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
                // Show first, last, current, and surrounding pages for cleanliness if totalPages is large
                if (
                  num === 1 || 
                  num === totalPages || 
                  (num >= currentPage - 1 && num <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={num}
                      onClick={() => handlePageChange(num)}
                      className={`h-9 w-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        currentPage === num
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {num}
                    </button>
                  );
                } else if (
                  num === currentPage - 2 || 
                  num === currentPage + 2
                ) {
                  return <span key={num} className="px-1 text-gray-400 font-bold">...</span>;
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}