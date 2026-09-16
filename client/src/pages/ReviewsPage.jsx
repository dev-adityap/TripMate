import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, Sparkles, CheckCircle2, User } from 'lucide-react';

export default function ReviewsPage() {
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tripMate_userFeedback') || '[]');
    setAllReviews(saved);
  }, []);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    
    const newEntry = {
      text: feedbackText,
      rating: rating,
      date: new Date().toISOString()
    };
    
    const updated = [newEntry, ...allReviews];
    localStorage.setItem('tripMate_userFeedback', JSON.stringify(updated));
    setAllReviews(updated);
    
    setSubmitted(true);
    setFeedbackText('');
    setRating(5);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Community Feedback
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Reviews & Ratings</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Share your experience with TripMate or read remarks from fellow travelers.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Submit Review Form */}
        <div className="md:col-span-1 bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl h-fit space-y-6">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Leave a Review</h3>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 size={36} className="text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-xs font-bold text-white">Review submitted successfully!</h4>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              
              <div className="space-y-2 text-center">
                <label className="text-[11px] font-bold text-slate-300 uppercase">Rating</label>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125"
                    >
                      <Star 
                        size={20} 
                        className={`${
                          (hoverRating || rating) >= star 
                            ? 'text-amber-400 fill-amber-400' 
                            : 'text-slate-600'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-300">Your Remarks</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your experience..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl p-3 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl text-xs font-bold shadow-lg shadow-blue-900/30 cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>

        {/* Reviews List */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">All User Reviews ({allReviews.length})</h3>

          {allReviews.length === 0 ? (
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 text-center text-slate-400 text-xs">
              No reviews yet. Be the first to share your remarks!
            </div>
          ) : (
            allReviews.map((rev, idx) => (
              <div key={idx} className="bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-xs">
                      <User size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Verified Traveler</h4>
                      <span className="text-[10px] text-slate-400">{new Date(rev.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{rev.text}</p>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
}