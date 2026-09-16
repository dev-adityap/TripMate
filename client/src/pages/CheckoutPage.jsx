import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, Lock, Sparkles, CheckCircle2, ArrowRight, MapPin, IndianRupee } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Payment form state
  const [payment, setPayment] = useState({
    cardNumber: '4242 •••• •••• 4242',
    expiry: '08/28',
    cvv: '123',
    name: 'Aditya Panna'
  });

  useEffect(() => {
    // Check both standard mock destinations and custom local storage destinations
    const customDestinations = JSON.parse(localStorage.getItem('tripMate_customDestinations') || '[]');
    const all = [...customDestinations, ...mockDestinations];
    
    const found = all.find(item => String(item.id) === String(id));
    if (found) {
      setDestination(found);
    }
  }, [id]);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      // 1. Save to My Trips
      const currentTrips = JSON.parse(localStorage.getItem('tripMate_myTrips') || '[]');
      if (!currentTrips.includes(String(id))) {
        localStorage.setItem('tripMate_myTrips', JSON.stringify([...currentTrips, String(id)]));
      }

      // 2. Unlock Group Workspace in Messages
      const unlocked = JSON.parse(localStorage.getItem('tripMate_unlockedWorkspaces') || '[]');
      const workspaceName = destination ? `${destination.name} Group` : 'Expedition Group';
      if (!unlocked.includes(workspaceName)) {
        localStorage.setItem('tripMate_unlockedWorkspaces', JSON.stringify([...unlocked, workspaceName]));
      }

      setIsProcessing(false);
      setSuccess(true);

      // 3. Redirect to Messages / Workspace after short delay
      setTimeout(() => {
        navigate('/messages');
      }, 1600);
    }, 1200);
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] flex items-center justify-center p-6">
        <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl text-center shadow-xl">
          <p className="text-slate-400 text-sm">Loading destination checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 shadow-xs">
          <ShieldCheck size={12} /> Secure Encrypted Checkout
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Finalize Booking</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Complete your payment to lock in your batch slot and unlock your squad workspace.</p>
      </div>

      {success ? (
        <div className="max-w-xl mx-auto bg-[#111827] border border-emerald-500/30 rounded-3xl p-8 text-center shadow-2xl space-y-4 my-12">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-serif text-white">Payment Successful!</h2>
          <p className="text-xs text-[#94A3B8]">
            Your expedition to <strong className="text-white">{destination.name || destination.title}</strong> is confirmed. Added to <strong className="text-sky-400">My Trips</strong> and squad workspace unlocked!
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 bg-[#131B2E] border border-[#1E293B] px-4 py-2 rounded-xl">
              Opening Group Chat Workspace... <ArrowRight size={14} />
            </span>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Payment Form */}
          <form onSubmit={handleCheckout} className="lg:col-span-2 bg-[#111827] border border-[#1E293B] rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2 border-b border-[#1E293B] pb-4">
              <CreditCard size={18} className="text-[#38BDF8]" /> Payment Details
            </h3>

            <div>
              <label className="block text-xs font-bold text-[#94A3B8] mb-2">Cardholder Name</label>
              <input 
                type="text" 
                required
                value={payment.name}
                onChange={(e) => setPayment({...payment, name: e.target.value})}
                className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#94A3B8] mb-2">Card Number</label>
              <input 
                type="text" 
                required
                value={payment.cardNumber}
                onChange={(e) => setPayment({...payment, cardNumber: e.target.value})}
                className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#94A3B8] mb-2">Expiry Date</label>
                <input 
                  type="text" 
                  required
                  value={payment.expiry}
                  onChange={(e) => setPayment({...payment, expiry: e.target.value})}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#94A3B8] mb-2">CVV</label>
                <input 
                  type="password" 
                  maxLength="4"
                  required
                  value={payment.cvv}
                  onChange={(e) => setPayment({...payment, cvv: e.target.value})}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner font-mono"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>Processing Secure Payment...</>
                ) : (
                  <>Pay {destination.approximateBudget || destination.price || '₹14,500'} & Unlock Workspace <ArrowRight size={16} /></>
                )}
              </button>
            </div>
          </form>

          {/* Right: Order Summary Card */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-6 shadow-xl space-y-6 h-fit">
            <div className="h-44 rounded-2xl overflow-hidden relative bg-[#1F2937]">
              <img src={destination.image} alt={destination.name} className="w-full h-full object-cover opacity-90" />
            </div>

            <div>
              <h4 className="text-xl font-serif text-white">{destination.name || destination.title}</h4>
              <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium mt-1">
                <MapPin size={14} className="text-[#38BDF8]" /> {destination.state || destination.location}
              </p>
            </div>

            <div className="border-t border-[#1E293B] pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-[#94A3B8]">
                <span>Package Base Price</span>
                <span className="text-white font-medium">{destination.approximateBudget || destination.price || '₹14,500'}</span>
              </div>
              <div className="flex justify-between text-[#94A3B8]">
                <span>Verified Group Leader</span>
                <span className="text-emerald-400 font-medium">Included</span>
              </div>
              <div className="flex justify-between text-[#94A3B8]">
                <span>Squad Workspace Access</span>
                <span className="text-emerald-400 font-medium">Instant Unlock</span>
              </div>
            </div>

            <div className="border-t border-[#1E293B] pt-4 flex justify-between items-center">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Total Amount</span>
              <span className="text-lg font-serif font-bold text-sky-400">{destination.approximateBudget || destination.price || '₹14,500'}</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}