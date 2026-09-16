import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter(item => String(item.id || item.destinationId) !== String(id));
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 px-4 sm:px-6 lg:px-8 pt-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Favorites & Wishlist</h1>
          <p className="text-sm text-gray-500 mt-1">Your saved dream destinations and bookmarked adventures.</p>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
            <div className="text-4xl">❤️</div>
            <h3 className="text-lg font-bold text-gray-800">Your wishlist is empty</h3>
            <p className="text-sm text-gray-500">Explore destinations and click the wishlist button on any page to save it here!</p>
            <Link to="/discover" className="inline-block bg-indigo-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl">
              Explore Destinations →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((dest) => (
              <div key={dest.id || dest.destinationId} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between p-5 space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{dest.location || dest.state}</span>
                    <button 
                      onClick={() => handleRemove(dest.id || dest.destinationId)}
                      className="text-rose-500 hover:text-rose-700 text-sm font-bold p-1 cursor-pointer"
                      title="Remove from favorites"
                    >
                      ✕
                    </button>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mt-1">{dest.name || dest.title}</h3>
                  <p className="text-sm font-bold text-emerald-600 mt-2">{dest.price}</p>
                </div>

                <Link 
                  to={`/destination/${dest.id || dest.destinationId}`}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl text-center text-xs transition-all"
                >
                  View Destination
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}