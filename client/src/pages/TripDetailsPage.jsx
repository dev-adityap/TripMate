import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock, Users, ArrowLeft, Image as ImageIcon, ShieldCheck, Calendar, AlertCircle } from 'lucide-react';
import { destinationsData } from '../data/destinations';

const TripDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinationsData.find(d => String(d.id) === String(id) || String(d._id) === String(id)) || destinationsData[0];

  const availableDates = destination.availableDates || ['Oct 15, 2026', 'Nov 05, 2026', 'Dec 12, 2026'];
  const [selectedDate, setSelectedDate] = useState(availableDates[0]);

  const [joinedTrips, setJoinedTrips] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('join');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('joinedTripsData') || '[]');
    setJoinedTrips(stored);
  }, []);

  const userBooking = joinedTrips.find(t => String(t.id) === String(destination.id));
  const isJoined = !!userBooking && userBooking.date === selectedDate;

  // Generates randomized member counts, ages, and genders on every refresh/date change
  const getBatchDetails = (dateStr) => {
    // Random total count between 5 and 11 members per batch
    const randomCount = Math.floor(Math.random() * 7) + 5; 
    const generatedMembers = [];
    const genders = ['Male', 'Female'];

    for (let i = 0; i < randomCount; i++) {
      const randomGender = genders[Math.floor(Math.random() * genders.length)];
      const randomAge = Math.floor(Math.random() * 14) + 21; // Ages between 21 and 34
      generatedMembers.push({
        anonymousId: `M-0${i + 1}`,
        gender: randomGender,
        age: randomAge,
        status: 'Confirmed'
      });
    }

    const deadlineMap = {
      'Oct 15, 2026': 'Oct 10, 2026',
      'Nov 05, 2026': 'Oct 30, 2026',
      'Dec 12, 2026': 'Dec 05, 2026',
      'Sep 10, 2026': 'Sep 05, 2026',
      'Oct 02, 2026': 'Sep 27, 2026',
      'Nov 20, 2026': 'Nov 15, 2026'
    };
    const deadline = deadlineMap[dateStr] || '5 Days Before Departure';

    return { members: generatedMembers, deadline };
  };

  // Re-generate batch data when selectedDate changes or page refreshes
  const batchData = getBatchDetails(selectedDate);
  
  const activeMembers = [...batchData.members];
  if (isJoined) {
    activeMembers.push({ anonymousId: 'You', gender: 'You', age: 'Verified', status: 'Your Slot' });
  }

  const currentCount = activeMembers.length;
  const maxGroupSize = destination.maxGroupSize || 15;
  const isFull = currentCount >= maxGroupSize && !isJoined;

  const maleCount = activeMembers.filter(m => m.gender === 'Male').length;
  const femaleCount = activeMembers.filter(m => m.gender === 'Female').length;

  const handleJoinConfirm = () => {
    const newBooking = { id: destination.id, date: selectedDate };
    const updated = [...joinedTrips.filter(t => String(t.id) !== String(destination.id)), newBooking];
    localStorage.setItem('joinedTripsData', JSON.stringify(updated));
    
    const legacyIds = updated.map(t => t.id);
    localStorage.setItem('joinedTrips', JSON.stringify(legacyIds));

    setJoinedTrips(updated);
    setShowModal(false);
  };

  const handleLeaveConfirm = () => {
    const updated = joinedTrips.filter(t => String(t.id) !== String(destination.id));
    localStorage.setItem('joinedTripsData', JSON.stringify(updated));
    localStorage.setItem('joinedTrips', JSON.stringify(updated.map(t => t.id)));
    setJoinedTrips(updated);
    setShowModal(false);
  };

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Discover
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Details & Itinerary */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm">
            {destination.image ? (
              <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center text-gray-400">
                <ImageIcon size={48} className="mb-2 opacity-50" />
                <span className="text-sm font-medium uppercase tracking-widest opacity-60">No Image Available</span>
              </div>
            )}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              {destination.category}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin size={16} />
                  <span>{destination.location}</span>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900">{destination.name}</h1>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-xl font-bold text-sm">
                <Star size={16} className="fill-amber-500" />
                <span>{destination.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed font-medium mb-6">{destination.overview}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Duration</p>
                <p className="text-base font-extrabold text-gray-900 flex items-center gap-1">
                  <Clock size={16} className="text-purple-600" /> {destination.duration} Days
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Difficulty</p>
                <p className="text-base font-extrabold text-gray-900">{destination.difficulty || 'Moderate'}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Batch Limit</p>
                <p className="text-base font-extrabold text-gray-900 flex items-center gap-1">
                  <Users size={16} className="text-blue-600" /> {maxGroupSize} Slots Max
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Starting Price</p>
                <p className="text-base font-extrabold text-gray-900">₹{destination.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Trip Itinerary</h2>
            <div className="space-y-6">
              {destination.itinerary && destination.itinerary.map((item) => (
                <div key={item.day} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-extrabold text-sm shrink-0">
                    D{item.day}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Date Selection, Deadline & Randomized Batch Members */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Package Price</p>
                <p className="text-3xl font-extrabold text-gray-900">₹{destination.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Per Person</p>
                <p className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">All Inclusive</p>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Departure Date Selector */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar size={14} className="text-purple-600" /> Choose Departure Batch Date
              </label>
              <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500 transition-colors"
              >
                {availableDates.map((date, idx) => (
                  <option key={idx} value={date}>{date}</option>
                ))}
              </select>
            </div>

            {/* Booking Deadline & Queue Warning Banner */}
            <div className="mb-6 bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-extrabold text-amber-900">Booking Deadline: {batchData.deadline}</p>
                <p className="text-[11px] font-medium text-amber-700 mt-0.5 leading-relaxed">
                  Unconfirmed slots auto-release to waitlisted members after this deadline.
                </p>
              </div>
            </div>

            {/* Group Demographics for Selected Batch */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-extrabold text-gray-900">Batch Travelers</h3>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {currentCount} / {maxGroupSize} Booked
                </span>
              </div>

              {isJoined && (
                <div className="mb-4 bg-emerald-50 p-3.5 rounded-2xl border border-emerald-100 text-xs font-bold text-emerald-700 flex items-center gap-2">
                  ✓ Your slot is confirmed for <span>{selectedDate}</span>
                </div>
              )}

              <div className="bg-gray-50 p-4 rounded-2xl space-y-3 mb-4">
                <div className="flex justify-between text-sm font-semibold text-gray-600">
                  <span>Gender Breakdown</span>
                  <span>Male: {maleCount} | Female: {femaleCount}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-gray-600">
                  <span>Privacy Protected</span>
                  <span className="flex items-center gap-1 text-emerald-600"><ShieldCheck size={14} /> Anonymous</span>
                </div>
              </div>

              {/* Randomized Member List */}
              <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                {activeMembers.map((m, idx) => (
                  <div key={idx} className={`flex justify-between items-center p-3 rounded-xl border text-sm font-medium ${m.anonymousId === 'You' ? 'bg-purple-50 border-purple-200 text-purple-900' : 'bg-white border-gray-100 text-gray-700'}`}>
                    <span>{m.anonymousId === 'You' ? '⭐️ You (Booked)' : `Member #${idx + 1}`}</span>
                    <span className="text-xs text-gray-400 font-bold">{m.gender} {m.age !== 'Verified' && `• Age ${m.age}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {isFull ? (
              <button disabled className="w-full py-4 bg-gray-200 text-gray-500 font-bold rounded-2xl cursor-not-allowed">
                Batch Full (Queue Active)
              </button>
            ) : isJoined ? (
              <div className="space-y-3">
                <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-sm flex items-center justify-center gap-2">
                  ✓ Booking Confirmed
                </button>
                <button 
                  onClick={() => { setModalType('leave'); setShowModal(true); }}
                  className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-2xl transition-colors text-sm"
                >
                  Cancel Booking
                </button>
              </div>
            ) : (
              <button 
                onClick={() => { setModalType('join'); setShowModal(true); }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md transition-colors text-base"
              >
                Confirm & Book Slot
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl space-y-6">
            <h3 className="text-2xl font-extrabold text-gray-900">
              {modalType === 'join' ? 'Confirm Slot Booking' : 'Cancel Booking?'}
            </h3>
            
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              {modalType === 'join' 
                ? `You are securing your slot for ${destination.name} on batch date ${selectedDate}. Deadline to finalize is ${batchData.deadline}.`
                : `Are you sure you want to release your slot for ${destination.name}? It will be offered to members in the queue.`
              }
            </p>
            <div className="flex gap-4 pt-2">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors text-sm"
              >
                Close
              </button>
              <button 
                onClick={modalType === 'join' ? handleJoinConfirm : handleLeaveConfirm}
                className={`flex-1 py-3.5 text-white font-bold rounded-xl transition-colors text-sm shadow-sm ${modalType === 'join' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'}`}
              >
                {modalType === 'join' ? 'Confirm Booking' : 'Yes, Release Slot'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripDetailsPage;