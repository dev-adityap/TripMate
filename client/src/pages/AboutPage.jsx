import React from 'react';
import { Compass, Users, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <span className="px-4 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-3">
          About TripMate
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          The Story & Vision Behind TripMate
        </h1>
      </div>

      {/* Main Card Structure */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 border border-gray-100 shadow-sm space-y-8">
        
        {/* Creator Info Badge */}
        <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
          <div className="w-14 h-14 rounded-full bg-purple-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
            AP
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-gray-900">Aditya Panna</h2>
            <p className="text-xs text-purple-600 font-bold uppercase tracking-wider">Creator & Founder of TripMate</p>
          </div>
        </div>

        {/* Core Message / Story */}
        <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
          <p>
            Hey there! I built <strong>TripMate</strong> because I noticed a recurring problem: so many people want to go on amazing trips, treks, and getaways, but when it comes to planning, they struggle to find enough companions to join them.
          </p>
          <p>
            More often than not, this coordination hassle leads to the worst possible outcome—canceling the plan altogether. 
          </p>
          <p className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 text-purple-900 font-semibold">
            "Why let great plans go to waste? Better not to avoid your travel dreams. Find like-minded people on your own terms, pick your desired destination, lock in your dates, and just go!"
          </p>
          <p>
            TripMate provides a clean, data-rich platform where you can explore 90+ curated destinations across India, choose available batch dates, check anonymous group breakdowns, and connect with fellow travelers seamlessly.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
            <Compass size={20} className="mx-auto text-purple-600 mb-2" />
            <h3 className="font-bold text-gray-900 text-xs mb-1">100 Destinations</h3>
            <p className="text-[11px] text-gray-500">Treks, beaches, & hills</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
            <Users size={20} className="mx-auto text-blue-600 mb-2" />
            <h3 className="font-bold text-gray-900 text-xs mb-1">Group Batches</h3>
            <p className="text-[11px] text-gray-500">Flexible dates & queues</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
            <ShieldCheck size={20} className="mx-auto text-emerald-600 mb-2" />
            <h3 className="font-bold text-gray-900 text-xs mb-1">100% Anonymous</h3>
            <p className="text-[11px] text-gray-500">Strict PII protection</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 text-center">
          <button 
            onClick={() => navigate('/discover')}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-sm transition-colors text-sm inline-flex items-center justify-center gap-2"
          >
            Start Exploring Destinations <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;