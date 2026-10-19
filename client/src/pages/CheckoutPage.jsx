import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, MapPin, Users, Mail, User } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';
import { useAuth } from '../context/AuthContext';

const BATCH_DATE_POOLS = [
  'Oct 12 - Oct 18, 2026',
  'Oct 19 - Oct 25, 2026',
  'Nov 05 - Nov 11, 2026',
  'Nov 12 - Nov 18, 2026',
  'Dec 20 - Dec 26, 2026',
  'Jan 10 - Jan 16, 2027'
];

function ClockIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [destination, setDestination] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const [travelers, setTravelers] = useState([
    { name: user?.name || '', email: user?.email || '', age: '' }
  ]);
  const [squadVibe, setSquadVibe] = useState('Adventure & Treks');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [bookingRef, setBookingRef] = useState(null);

  useEffect(() => {
    const customDestinations = JSON.parse(localStorage.getItem('tripMate_customDestinations') || '[]');
    const all = [...customDestinations, ...mockDestinations];
    const found = all.find(item => String(item.id) === String(id));
    if (found) {
      setDestination(found);
    }
  }, [id]);

  const rawPriceString = destination?.approximateBudget || destination?.price || "0";
  const basePriceString = rawPriceString.split('-')[0];
  const basePrice = parseInt(basePriceString.replace(/\D/g, ''), 10) || 0;
  const totalPrice = basePrice * travelers.length;
  const selectedBatch = BATCH_DATE_POOLS[Math.floor(Math.random() * BATCH_DATE_POOLS.length)];
  const bookingRefId = `TM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleTravelerChange = (index, field, value) => {
    setTravelers((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const addTraveler = () => {
    if (travelers.length < 4) {
      setTravelers((prev) => [...prev, { name: '', email: '', age: '' }]);
    }
  };

  const removeTraveler = () => {
    if (travelers.length > 1) {
      setTravelers((prev) => prev.slice(0, -1));
    }
  };

  const handleConfirm = () => {
    setIsProcessing(true);
    setBookingRef(bookingRefId);
    setTimeout(() => {
      const currentTrips = JSON.parse(localStorage.getItem('tripMate_myTrips') || '[]');
      if (!currentTrips.includes(String(id))) {
        localStorage.setItem('tripMate_myTrips', JSON.stringify([...currentTrips, String(id)]));
      }
      const unlocked = JSON.parse(localStorage.getItem('tripMate_unlockedWorkspaces') || '[]');
      const workspaceName = destination ? `${destination.name} Group` : 'Expedition Group';
      if (!unlocked.includes(workspaceName)) {
        localStorage.setItem('tripMate_unlockedWorkspaces', JSON.stringify([...unlocked, workspaceName]));
      }
      setIsProcessing(false);
      setSuccess(true);

      // Auto-route to trips after user sees the success checkmark
      setTimeout(() => {
        navigate('/trips');
      }, 1500);
    }, 1200);
  };

  const vibeOptions = [
    { key: 'Adventure & Treks', label: 'Adventure & Treks' },
    { key: 'Chill & Cafes', label: 'Chill & Cafes' },
    { key: 'Photography & Culture', label: 'Photography & Culture' }
  ];

  const paymentOptions = [
    { key: 'upi', label: 'UPI / GPay', icon: '₹' },
    { key: 'card', label: 'Credit / Debit Card', icon: CreditCard },
    { key: 'later', label: 'Reserve Slot Now · Pay Later', icon: ClockIcon }
  ];

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#09090B] text-zinc-100 flex items-center justify-center p-6">
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-8 rounded-3xl text-center shadow-2xl">
          <Sparkles size={24} className="text-amber-300 mx-auto mb-4" />
          <p className="text-white/70 text-sm">Loading expedition checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 pb-24 px-6 md:px-14 font-sans animate-page-enter overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 shadow-xs">
          <ShieldCheck size={12} /> Secure Encrypted Checkout
        </div>
        <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">Finalize Booking</h1>
        <p className="text-white/70 text-sm mt-1">Lock in your batch slot and unlock your private squad workspace.</p>
      </div>

      {success ? (
        <div className="max-w-md mx-auto text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.25)] backdrop-blur-md">
            <CheckCircle2 size={36} />
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/50 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <Sparkles size={12} /> Squad Workspace Unlocked
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
            You're Going To {destination.name.toUpperCase()}!
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Batch: <span className="text-white font-semibold">{selectedBatch}</span> &nbsp;·&nbsp;
            Booking Reference: <span className="text-white font-bold">{bookingRef}</span>
          </p>
          <p className="text-xs text-white/50 mb-10">Your private group chat and itinerary checklist are now live.</p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/messages')}
              className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-2xl shadow-[0_12px_30px_rgba(255,255,255,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight size={16} /> Open Squad Workspace
            </button>
            <button
              onClick={() => navigate('/trips')}
              className="w-full bg-white/[0.05] hover:bg-white/[0.10] border border-white/10 text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MapPin size={16} /> View in My Trips
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 relative h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] group">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 p-6 md:p-10 flex flex-col justify-between" />
            <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-md border border-white/20 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit backdrop-blur-xs">
              <Sparkles size={12} /> Verified Expedition
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight mb-1">{destination.name}</h2>
              <p className="text-xs text-white/70 flex items-center gap-1.5 font-medium mb-6">
                <MapPin size={13} className="text-amber-300" /> {destination.state || destination.location}
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-bold">Selected Batch</span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full">{selectedBatch}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[#09090B] flex items-center justify-center text-[9px] font-bold text-white shadow-md z-10">A</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-white">15 Travelers Joined</div>
                    <div className="text-[10px] text-white/60">Verified Captain Included</div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Base Expedition Package</span>
                    <span className="text-white font-medium">₹{basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Permit &amp; Camp Taxes</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Travelers x {travelers.length}</span>
                    <span className="text-white font-medium">× {travelers.length}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Total Package Price</span>
                    <span className="text-lg font-bold text-amber-300/90">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-white/60">Confirm Your Squad Slot</h3>
                <p className="text-xs text-white/50 mt-1">Enter traveler details to confirm your booking.</p>
              </div>

              <div className="space-y-4">
                {travelers.map((traveler, index) => (
                  <div key={index} className="mb-6 p-4 bg-white/[0.02] border border-white/10 rounded-2xl relative">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
                      Traveler {index + 1} {index === 0 && '(Primary)'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5 block">
                          <User size={13} className="text-amber-300" /> Full Name
                        </label>
                        <input
                          type="text"
                          value={traveler.name}
                          onChange={(e) => handleTravelerChange(index, 'name', e.target.value)}
                          className="w-full bg-white/[0.05] border border-white/10 focus:border-amber-400/50 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all"
                          placeholder="Enter name"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5 block">
                          Age
                        </label>
                        <input
                          type="number"
                          value={traveler.age}
                          onChange={(e) => handleTravelerChange(index, 'age', e.target.value)}
                          className="w-full bg-white/[0.05] border border-white/10 focus:border-amber-400/50 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all"
                          placeholder="Age"
                          min="1"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5 block">
                          <Mail size={13} className="text-amber-300" /> Email / Phone
                        </label>
                        <input
                          type="text"
                          value={traveler.email}
                          onChange={(e) => handleTravelerChange(index, 'email', e.target.value)}
                          className="w-full bg-white/[0.05] border border-white/10 focus:border-amber-400/50 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all"
                          placeholder={index === 0 ? 'adityapanna009@gmail.com' : 'Optional for squad members'}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 flex items-center gap-1.5">
                  <Users size={13} className="text-amber-300" /> Number of Travelers
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={removeTraveler}
                    disabled={travelers.length === 1}
                    className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/15 text-white/70 flex items-center justify-center hover:bg-white/[0.10] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <span className="text-xl font-black text-white w-12 text-center">{travelers.length}</span>
                  <button
                    onClick={addTraveler}
                    disabled={travelers.length === 4}
                    className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/15 text-white/70 flex items-center justify-center hover:bg-white/[0.10] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                  <span className="text-xs text-white/60 ml-2">Total: <span className="text-amber-300 font-bold">₹{totalPrice.toLocaleString()}</span></span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">Squad Vibe Preference</label>
                <div className="grid grid-cols-3 gap-2">
                  {vibeOptions.map((v) => (
                    <button
                      key={v.key}
                      onClick={() => setSquadVibe(v.key)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${squadVibe === v.key ? 'bg-amber-500/10 border border-amber-400/80 text-amber-300' : 'bg-white/[0.03] border border-white/10 text-white/60 hover:bg-white/[0.08]'}`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60">Payment Method</label>
                <div className="space-y-2">
                  {paymentOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isActive = paymentMethod === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => setPaymentMethod(opt.key)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${isActive ? 'bg-amber-500/10 border-amber-400/80 text-white shadow-[0_0_20px_rgba(245,158,11,0.15)]' : 'bg-white/[0.03] border-white/10 text-white/60 hover:bg-white/[0.08] hover:border-white/20'}`}
                      >
                        {typeof opt.icon === 'string' ? (
                          <span className="text-amber-300 text-xs font-bold">{opt.icon}</span>
                        ) : (
                          <Icon size={16} className={isActive ? 'text-amber-300' : 'text-white/60'} />
                        )}
                        <span className="text-sm font-medium">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handleConfirm}
                disabled={isProcessing}
                className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-extrabold py-4 rounded-2xl shadow-[0_12px_30px_rgba(255,255,255,0.15)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin" style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span>
                    Securing Your Slot...
                  </>
                ) : (
                  <>
                    <ArrowRight size={18} /> Confirm &amp; Unlock Squad Workspace
                  </>
                )}
              </button>
              <p className="text-[10px] text-white/50 text-center mt-3">
                Simulated booking — no card charged. Slot confirmed instantly.
              </p>
            </div>
          </div>
        </div>
        )}
        {/* Processing & Success Overlay */}
        {(isProcessing || success) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md bg-black/60 transition-all duration-500">
            <div className="w-full max-w-sm bg-[#09090B]/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] transform scale-100 duration-300">
              {isProcessing ? (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-white/10 border-t-amber-400 rounded-full animate-spin mb-6"></div>
                  <h3 className="text-white font-bold text-lg tracking-wide mb-2">Securing Your Slot</h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest">Encrypting Payment Details...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-extrabold text-xl tracking-wide mb-2">Booking Confirmed!</h3>
                  <p className="text-amber-300/80 text-xs font-bold uppercase tracking-widest">Squad Workspace Unlocked</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
  );
}
