import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, CheckCircle2, User, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/Toast';

export default function ReviewsPage({ updateBackground }) {
  const { user } = useAuth();
  const { addToast } = useToast();
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tripMate_userFeedback') || '[]');
    setAllReviews(saved);
  }, []);
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackText.trim() || rating === null) return;
    if (!user) return;

    const alreadyReviewed = allReviews.some((r) => r.userId === user.uid);
    if (alreadyReviewed) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      return;
    }

    const newEntry = {
      text: feedbackText,
      rating: rating,
      date: new Date().toISOString(),
      userId: user.uid,
      userName: user.name || 'Anonymous',
      userEmail: user.email || '',
    };
    const updated = [newEntry, ...allReviews];
    localStorage.setItem('tripMate_userFeedback', JSON.stringify(updated));
    setAllReviews(updated);
    setSubmitted(true);
    setFeedbackText('');
    setRating(null);
    addToast('Thank you for your review!', 'success', 4000);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const avgRating = allReviews.length > 0 ? (allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length).toFixed(1) : 0;

  const alreadyReviewed = user ? allReviews.some((r) => r.userId === user.uid) : false;

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 shadow-xs">
            <Sparkles size={12} /> Community Feedback
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] mb-2">Traveller Stories</h1>
          <p className="text-white/75 text-sm mt-1">Share your experience or read remarks from fellow travelers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 space-y-6">
                <div className="text-center space-y-3">
                  <div className="text-5xl font-black text-white">{allReviews.length > 0 ? avgRating : 'N/A'}</div>
                  <div className="flex justify-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={18} className={allReviews.length > 0 && i <= Math.round(Number(avgRating)) ? 'text-amber-400 fill-amber-400' : 'text-white/40'} />
                    ))}
                  </div>
                  <p className="text-xs text-white/70 uppercase tracking-widest font-bold">{allReviews.length === 0 ? 'No Reviews Yet' : `Based on ${allReviews.length} reviews`}</p>
                </div>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 space-y-6">
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">Share Your Experience</h3>
              {submitted || alreadyReviewed ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                  <h4 className="text-xs font-bold text-white">
                    {alreadyReviewed ? 'You already reviewed this trip!' : 'Review submitted successfully!'}
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div className="space-y-2 text-center">
                    <label className="text-[11px] font-bold text-white/80 uppercase">Rating</label>
                    <div className="flex justify-center gap-1">
                      {[1,2,3,4,5].map(star => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 cursor-pointer transition-transform hover:scale-125"
                        >
                          <Star size={20} className={`${(hoverRating || rating) >= star ? 'text-amber-400 fill-amber-400' : 'text-white/40'}`} />
                        </button>
                      ))}
                    </div>
                    {rating === null && (
                      <p className="text-[10px] text-rose-400 mt-1">Please select a rating</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-white/80">Your Remarks</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your experience..."
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/15 rounded-2xl p-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400/70 transition-all resize-none"
                      required
                      maxLength="500"
                    />
                    <div className="flex justify-end">
                      <span className="text-[10px] text-white/40">{feedbackText.length}/500</span>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-3 rounded-2xl text-xs transition-all shadow-[0_10px_25px_rgba(255,255,255,0.1)]">
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">All Reviews ({allReviews.length})</h3>
            {allReviews.length === 0 ? (
              <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center text-white/60 text-xs">
                No reviews yet. Be the first to share your remarks!
              </div>
            ) : (
              allReviews.map((rev, idx) => (
                <div key={idx} className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center font-bold text-xs backdrop-blur-2xl">
                        <User size={14} />
                      </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{rev.userName || 'Verified Traveler'}</h4>
                      <span className="text-[10px] text-white/50">{new Date(rev.date).toLocaleDateString()}</span>
                    </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed">{rev.text}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                    <CheckCircle2 size={10} /> Verified Squad
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
