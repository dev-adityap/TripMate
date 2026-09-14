// Displays rich destination details, rules out maps, handles Image placeholders, and lists available trips with anonymous demographics.
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockDestinations, mockTrips } from '../data/mockDatabase';
import { MapPin, Calendar, Clock, Wallet, Info, CheckCircle2, Users, ShieldAlert } from 'lucide-react';
import TopHeader from '../components/home/TopHeader';

const DestinationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [destination, setDestination] = useState(null);
  const [availableTrips, setAvailableTrips] = useState([]);
  
  // Modal State for Joining
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedTripToJoin, setSelectedTripToJoin] = useState(null);

  useEffect(() => {
    // In production, this would be an API call: fetch(`/api/destinations/${id}`)
    const foundDest = mockDestinations.find(d => d.id === id);
    const foundTrips = mockTrips.filter(t => t.destinationId === id);
    setDestination(foundDest);
    setAvailableTrips(foundTrips);
  }, [id]);

  const handleJoinClick = (trip) => {
    // 1. Auth Check (Simulated)
    const isLoggedIn = true; // Replace with your actual auth context: e.g., !!user
    if (!isLoggedIn) {
      alert("Please log in to join a trip.");
      // navigate('/login');
      return;
    }
    
    setSelectedTripToJoin(trip);
    setShowJoinModal(true);
  };

  const confirmJoin = async () => {
    // API Call goes here: await fetch(`/api/trips/${selectedTripToJoin.id}/join`, { method: 'POST' })
    alert("Successfully joined! Redirecting to private group dashboard...");
    setShowJoinModal(false);
    navigate(`/trip/${selectedTripToJoin.id}`);
  };

  if (!destination) return <div className="p-20 text-center font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopHeader />

      {/* Hero Section */}
      <div className="w-full h-[40vh] md:h-[50vh] relative bg-slate-900 overflow-hidden">
        {destination.image ? (
          <img src={destination.image} alt={destination.name} className="w-full h-full object-cover opacity-60" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-800 flex items-center justify-center opacity-80">
            <span className="text-white/20 text-4xl font-black uppercase tracking-[1em]">Destination</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest uppercase mb-4">
            {destination.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">{destination.name}</h1>
          <div className="flex items-center gap-2 text-slate-300 text-sm md:text-base font-medium">
            <MapPin size={18} /> {destination.state}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Rich Destination Data */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex flex-col"><span className="text-slate-400 text-xs font-bold uppercase mb-1 flex items-center gap-1"><Clock size={14}/> Duration</span><span className="font-bold text-slate-800">{destination.idealDuration}</span></div>
              <div className="flex flex-col"><span className="text-slate-400 text-xs font-bold uppercase mb-1 flex items-center gap-1"><Calendar size={14}/> Best Time</span><span className="font-bold text-slate-800">{destination.bestTime}</span></div>
              <div className="flex flex-col"><span className="text-slate-400 text-xs font-bold uppercase mb-1 flex items-center gap-1"><Wallet size={14}/> Budget</span><span className="font-bold text-slate-800">{destination.approxBudget}</span></div>
              <div className="flex flex-col"><span className="text-slate-400 text-xs font-bold uppercase mb-1 flex items-center gap-1"><Info size={14}/> Difficulty</span><span className="font-bold text-slate-800">{destination.difficulty}</span></div>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{destination.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why Visit?</h2>
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <p className="text-indigo-900 leading-relaxed font-medium">{destination.whyVisit}</p>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Top Attractions</h2>
                <ul className="space-y-3">
                  {destination.attractions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Things To Do</h2>
                <ul className="space-y-3">
                  {destination.activities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Travel Tips & Know Before You Go</h2>
              <ul className="bg-amber-50 rounded-2xl p-6 space-y-4 border border-amber-100">
                {destination.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-amber-900 text-sm font-medium">
                    <ShieldAlert size={18} className="flex-shrink-0 text-amber-600" /> {tip}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Available Trips (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="text-purple-600" /> Available Trips
              </h3>
              
              {availableTrips.length === 0 ? (
                <p className="text-slate-500 text-sm">No trips are currently scheduled for this destination. Check back later!</p>
              ) : (
                <div className="space-y-4">
                  {availableTrips.map(trip => (
                    <div key={trip.id} className="border border-slate-100 rounded-2xl p-5 hover:border-purple-300 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">
                            {new Date(trip.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} - {new Date(trip.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                          </p>
                          <p className="text-xs font-bold text-purple-600 mt-1">{trip.durationDays} Days</p>
                        </div>
                        <span className="text-sm font-black text-slate-900">₹{trip.budget.toLocaleString()}</span>
                      </div>

                      {/* Anonymous Privacy Compliant Demographics */}
                      <div className="bg-slate-50 rounded-xl p-3 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-slate-500">Travelers Joined</span>
                          <span className="text-xs font-bold text-slate-900">{trip.currentMembers} / {trip.maxMembers}</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 h-1.5 rounded-full mb-3 overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: `${(trip.currentMembers / trip.maxMembers) * 100}%` }}></div>
                        </div>
                        <div className="flex justify-between text-xs font-medium text-slate-600">
                          <div className="flex gap-3">
                            <span className="flex items-center gap-1 text-blue-600">♂ {trip.demographics.males}</span>
                            <span className="flex items-center gap-1 text-pink-600">♀ {trip.demographics.females}</span>
                          </div>
                          <div>Age 18-30: {trip.demographics.ageGroups['18-24'] + trip.demographics.ageGroups['25-30']}</div>
                        </div>
                      </div>

                      {trip.status === 'Full' ? (
                        <button disabled className="w-full py-3 rounded-xl bg-slate-100 text-slate-400 font-bold cursor-not-allowed">Trip is Full</button>
                      ) : (
                        <button onClick={() => handleJoinClick(trip)} className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-md shadow-purple-200">
                          Join Trip
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Join Confirmation Modal */}
      {showJoinModal && selectedTripToJoin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Confirm Trip</h3>
            <p className="text-slate-500 mb-6">You are about to securely join the group for <strong>{destination.name}</strong>.</p>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-slate-500">Dates</span><span className="font-bold text-slate-900">{new Date(selectedTripToJoin.startDate).toDateString()}</span></div>
              <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-slate-500">Approx Cost</span><span className="font-bold text-slate-900">₹{selectedTripToJoin.budget.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Current Size</span><span className="font-bold text-slate-900">{selectedTripToJoin.currentMembers} Members</span></div>
            </div>
            
            <p className="text-xs text-slate-400 mb-8 text-center italic">Joining this trip will unlock the private group itinerary, member profiles, and group chat.</p>

            <div className="flex gap-4">
              <button onClick={() => setShowJoinModal(false)} className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">Cancel</button>
              <button onClick={confirmJoin} className="flex-1 py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 shadow-lg shadow-purple-200">Confirm & Join</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPage;