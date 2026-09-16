import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDestinations as destinations } from '../data/mockDatabase';

export default function DestinationPage() {
  const { id } = useParams();
  const destination = destinations.find((d) => String(d.id) === String(id));
  
  const tripId = `trip-${id}`;
  const trip = {
    id: tripId,
    destinationId: id,
    title: `${destination ? (destination.name || destination.title) : 'Expedition'} Workspace`,
    location: destination ? (destination.state || destination.location) : '',
    itinerary: destination?.itinerary || [
      { day: 1, title: 'Arrival & Base Camp Briefing', description: 'Meet the team, check gear, and prepare for the expedition.' },
      { day: 2, title: 'Trail Ascent & Wilderness Walk', description: 'Trek through dense forests and scenic viewpoints with the group.' },
      { day: 3, title: 'Summit Day & Celebration', description: 'Reach the summit for breathtaking sunrise views before heading back.' }
    ]
  };

  const [availableBatches, setAvailableBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState('');
  
  // Payment Modal States
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [isBooked, setIsBooked] = useState(() => {
    const savedBookings = JSON.parse(localStorage.getItem('tripmate_bookings') || '{}');
    return !!savedBookings[id];
  });

  const [isWishlisted, setIsWishlisted] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return savedFavorites.some(item => String(item.id || item.destinationId || item) === String(id));
  });

  const [demographics, setDemographics] = useState({ males: 4, females: 7, members: [] });

  useEffect(() => {
    const randomMales = Math.floor(Math.random() * 6) + 3;
    const randomFemales = Math.floor(Math.random() * 6) + 4;
    const sampleGenders = ['Male', 'Female'];
    const generatedMembers = [];
    const totalCount = Math.min(3, randomMales + randomFemales);
    for (let i = 1; i <= totalCount; i++) {
      generatedMembers.push({
        id: i,
        gender: sampleGenders[Math.floor(Math.random() * sampleGenders.length)],
        age: Math.floor(Math.random() * 18) + 21
      });
    }
    setDemographics({ males: randomMales, females: randomFemales, members: generatedMembers });

    const batchPool = [
      'Oct 15, 2026', 'Nov 05, 2026', 'Dec 12, 2026', 
      'Jan 20, 2027', 'Feb 14, 2027', 'Mar 10, 2027'
    ];
    const shuffled = [...batchPool].sort(() => 0.5 - Math.random());
    setAvailableBatches(shuffled.slice(0, 3));
    setSelectedBatch(shuffled[0]);
  }, [id]);

  // Handle the simulated payment process
  const processPayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate 2 seconds of payment processing network delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      setIsBooked(true);

      const savedBookings = JSON.parse(localStorage.getItem('tripmate_bookings') || '{}');
      const savedTrips = JSON.parse(localStorage.getItem('tripmate_custom_trips') || '{}');

      savedBookings[id] = {
        destinationId: id,
        tripId: tripId,
        title: destination.name || destination.title,
        location: destination.state || destination.location,
        batch: selectedBatch,
        price: destination.approximateBudget || destination.price || '₹14,500',
        image: destination.image,
        bookedAt: new Date().toISOString()
      };

      savedTrips[tripId] = trip;

      localStorage.setItem('tripmate_bookings', JSON.stringify(savedBookings));
      localStorage.setItem('tripmate_custom_trips', JSON.stringify(savedTrips));
    }, 2000);
  };

  const cancelBooking = () => {
    setIsBooked(false);
    const savedBookings = JSON.parse(localStorage.getItem('tripmate_bookings') || '{}');
    const savedTrips = JSON.parse(localStorage.getItem('tripmate_custom_trips') || '{}');
    delete savedBookings[id];
    delete savedTrips[tripId];
    localStorage.setItem('tripmate_bookings', JSON.stringify(savedBookings));
    localStorage.setItem('tripmate_custom_trips', JSON.stringify(savedTrips));
  };

  const handleToggleWishlist = () => {
    const nextState = !isWishlisted;
    setIsWishlisted(nextState);
    let savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (nextState) {
      const favItem = {
        id: destination.id, destinationId: destination.id,
        name: destination.name || destination.title, title: destination.name || destination.title,
        location: destination.state || destination.location, image: destination.image,
        price: destination.approximateBudget || destination.price || '₹14,500',
        rating: destination.rating || '4.8', difficulty: destination.difficulty || 'Moderate'
      };
      if (!savedFavorites.some(item => String(item.id || item.destinationId || item) === String(id))) {
        savedFavorites.push(favItem);
      }
    } else {
      savedFavorites = savedFavorites.filter(item => String(item.id || item.destinationId || item) !== String(id));
    }
    localStorage.setItem('favorites', JSON.stringify(savedFavorites));
  };

  if (!destination) return <div className="p-12 text-center">Destination not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-16 px-4 sm:px-6 lg:px-8 pt-6 relative">
      
      {/* PAYMENT OVERLAY MODAL */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-fadeIn">
            
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-extrabold text-gray-900">Secure Checkout</h3>
              <button 
                onClick={() => !isProcessing && setShowPaymentModal(false)}
                className="text-gray-400 hover:text-rose-500 transition-colors"
                disabled={isProcessing}
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Summary */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center gap-4">
                <img src={destination.image} className="w-16 h-16 rounded-lg object-cover shadow-sm" alt="Thumbnail"/>
                <div>
                  <h4 className="font-bold text-gray-900">{destination.name || destination.title}</h4>
                  <p className="text-xs text-indigo-700 font-medium">Batch: {selectedBatch}</p>
                  <p className="text-sm font-extrabold text-emerald-600 mt-1">{destination.approximateBudget || destination.price || '₹14,500'}</p>
                </div>
              </div>

              {/* Fake Payment Form */}
              <form onSubmit={processPayment} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase">Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" required disabled={isProcessing} className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-600 outline-none transition-all bg-gray-50"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required disabled={isProcessing} className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-600 outline-none transition-all bg-gray-50"/>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase">CVC</label>
                    <input type="text" placeholder="123" required disabled={isProcessing} className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-600 outline-none transition-all bg-gray-50"/>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-md flex justify-center items-center gap-2 cursor-pointer disabled:bg-indigo-400"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </>
                  ) : (
                    `Pay ${destination.approximateBudget || destination.price || '₹14,500'}`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Destination UI (Existing Content) */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <Link to="/discover" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-all">
            ← Back to Discover
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {destination.state || destination.location}
                  </span>
                  <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
                    {destination.name || destination.title}
                  </h1>
                </div>
                <div className="flex items-center space-x-1 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-xl text-amber-700 font-bold text-sm">
                  <span>★</span>
                  <span>{destination.rating || '4.8'}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-base">
                {destination.fullDescription || destination.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100 text-sm">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Duration</p>
                  <p className="font-bold text-gray-800 mt-0.5">⏱️ {destination.recommendedDuration || destination.duration || '8 Days'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Difficulty</p>
                  <p className="font-bold text-gray-800 mt-0.5">⚡ {destination.difficulty || 'Moderate'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Batch Limit</p>
                  <p className="font-bold text-gray-800 mt-0.5">👥 15 Slots Max</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Starting Price</p>
                  <p className="font-bold text-emerald-600 mt-0.5">{destination.approximateBudget || destination.price || '₹14,500'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-xl font-extrabold text-gray-900">Trip Itinerary</h3>
              <div className="space-y-4">
                {trip.itinerary.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50/60 border border-gray-100">
                    <span className="bg-indigo-100 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-xl shrink-0">
                      D{item.day || idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sticky top-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-5">
              
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div>
                  <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">Package Price</p>
                  <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{destination.approximateBudget || destination.price || '₹14,500'}</h3>
                </div>
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  All Inclusive
                </span>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                  📅 Choose Departure Batch Date
                </label>
                <select 
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  disabled={isBooked}
                  className="w-full bg-white border-2 border-indigo-200 focus:border-indigo-600 text-gray-800 font-semibold text-sm rounded-xl py-3 px-4 outline-none disabled:opacity-50"
                >
                  {availableBatches.map((batchDate, index) => (
                    <option key={index} value={batchDate}>{batchDate}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Batch Travelers</span>
                  <span className="text-indigo-600 font-extrabold">{demographics.males + demographics.females} / 15 Booked</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div style={{ width: `${((demographics.males + demographics.females) / 15) * 100}%` }} className="bg-indigo-600 h-full rounded-full"></div>
                </div>
              </div>

              {isBooked && (
                <div className="bg-emerald-50 border border-emerald-200/70 py-2.5 px-3 rounded-xl flex items-center space-x-2 text-emerald-700 text-xs font-semibold animate-fadeIn">
                  <span>✓ Payment successful! Slot confirmed.</span>
                </div>
              )}

              <div className="space-y-2.5 pt-2">
                {!isBooked ? (
                  <button 
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-200 text-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                  </button>
                ) : (
                  <>
                    <button 
                      disabled
                      className="w-full bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-emerald-200 text-sm flex items-center justify-center space-x-2 cursor-default"
                    >
                      <span>✓ Booked</span>
                    </button>

                    <Link 
                      to={`/trip/${tripId}`} 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-indigo-200 text-xs flex items-center justify-center space-x-2 text-center"
                    >
                      <span>💬 Open Group Workspace</span>
                    </Link>

                    <button 
                      onClick={cancelBooking}
                      className="w-full bg-white border border-rose-200 hover:bg-rose-50 text-rose-600 font-semibold py-3 px-4 rounded-xl transition-all text-xs cursor-pointer"
                    >
                      Cancel Booking & Refund
                    </button>
                  </>
                )}

                <button 
                  onClick={handleToggleWishlist}
                  className={`w-full font-bold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center space-x-2 cursor-pointer ${
                    isWishlisted 
                      ? 'bg-rose-50 border border-rose-300 text-rose-600' 
                      : 'bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span>{isWishlisted ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}