import React, { useRef } from 'react';
import { MapPin, Star, Users, Heart, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TripsForming = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  // Expanded to 8 items to enable horizontal scrolling on desktop
  const mockTrips = [
    {
      id: 1, title: 'Sandakphu', state: 'WEST BENGAL', category: 'TREK', 
      rating: 4.8, joined: 6, maxSize: 10, males: 4, females: 2, 
      price: '14,500', duration: '8 Days', image: '/assets/placeholders/sandakphu.jpg'
    },
    {
      id: 2, title: 'Valley of Flowers', state: 'UTTARAKHAND', category: 'TREK', 
      rating: 4.9, joined: 8, maxSize: 12, males: 5, females: 3, 
      price: '12,000', duration: '5 Days', image: '/assets/placeholders/valley-flowers.jpg'
    },
    {
      id: 3, title: 'Kedarnath', state: 'UTTARAKHAND', category: 'TREK / SPIRITUAL', 
      rating: 4.7, joined: 10, maxSize: 15, males: 7, females: 3, 
      price: '9,500', duration: '4 Days', image: '/assets/placeholders/kedarnath.jpg'
    },
    {
      id: 4, title: 'Goa', state: 'GOA', category: 'BEACH', 
      rating: 4.5, joined: 9, maxSize: 15, males: 5, females: 4, 
      price: '15,000', duration: '5 Days', image: '/assets/placeholders/goa.jpg'
    },
    {
      id: 5, title: 'Spiti Valley', state: 'HIMACHAL PRADESH', category: 'ROAD TRIP', 
      rating: 4.9, joined: 4, maxSize: 8, males: 2, females: 2, 
      price: '22,000', duration: '9 Days', image: '/assets/placeholders/spiti.jpg'
    },
    {
      id: 6, title: 'Hampi Ruins', state: 'KARNATAKA', category: 'HERITAGE', 
      rating: 4.6, joined: 7, maxSize: 12, males: 4, females: 3, 
      price: '8,500', duration: '4 Days', image: '/assets/placeholders/hampi.jpg'
    },
    {
      id: 7, title: 'Meghalaya', state: 'MEGHALAYA', category: 'NATURE', 
      rating: 4.8, joined: 5, maxSize: 10, males: 2, females: 3, 
      price: '18,000', duration: '7 Days', image: '/assets/placeholders/meghalaya.jpg'
    },
    {
      id: 8, title: 'Gokarna', state: 'KARNATAKA', category: 'BEACH / CHILL', 
      rating: 4.4, joined: 12, maxSize: 15, males: 6, females: 6, 
      price: '6,500', duration: '3 Days', image: '/assets/placeholders/gokarna.jpg'
    }
  ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full">
      
      {/* Section Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Trips forming now</h2>
          <p className="text-slate-500 text-sm mt-1">Join people who are already planning their next adventure.</p>
        </div>
        <button 
          onClick={() => navigate('/discover')}
          className="hidden sm:flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
        >
          View All Trips <ArrowRight size={16} />
        </button>
      </div>

      {/* Cards Slider Container */}
      <div className="relative group/slider">
        
        {/* Left Scroll Button */}
        <button 
          onClick={scrollLeft}
          className="hidden lg:flex opacity-0 group-hover/slider:opacity-100 absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg border border-slate-100 text-slate-600 hover:text-purple-600 hover:scale-105 transition-all z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Area */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockTrips.map((trip) => (
            <div key={trip.id} className="min-w-[280px] sm:min-w-[300px] w-[280px] sm:w-[300px] snap-start bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col flex-shrink-0">
              
              {/* Top Image Area */}
              <div className="relative h-44 bg-slate-200 overflow-hidden">
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

              {/* Bottom Content Area */}
              <div className="p-4 flex flex-col flex-1">
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
                  onClick={() => navigate(`/trip/${trip.id}`)} 
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 mt-auto"
                >
                  View Trip <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button 
          onClick={scrollRight}
          className="hidden lg:flex opacity-0 group-hover/slider:opacity-100 absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg border border-slate-100 text-slate-600 hover:text-purple-600 hover:scale-105 transition-all z-10"
        >
          <ChevronRight size={24} />
        </button>

      </div>
      
      {/* Mobile CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      <button 
        onClick={() => navigate('/discover')}
        className="sm:hidden w-full mt-6 py-3 bg-slate-100 rounded-xl text-sm font-semibold text-slate-700 flex justify-center items-center gap-2"
      >
        View All Trips <ArrowRight size={16} />
      </button>

    </section>
  );
};

export default TripsForming;