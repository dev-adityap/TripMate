import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Wallet, UserCheck, ArrowRight } from 'lucide-react';

const WhyTripMate = () => {
  const navigate = useNavigate();

  const problems = [
    {
      id: 1,
      title: 'Plans keep getting cancelled?',
      desc: 'Find people who are actually serious about travelling.',
      icon: <Users size={24} className="text-purple-600" />
    },
    {
      id: 2,
      title: "Budgets don't match?",
      desc: 'Join trips that fit your budget.',
      icon: <Wallet size={24} className="text-purple-600" />
    },
    {
      id: 3,
      title: 'Hard to find the right group?',
      desc: 'Match by age, interests, travel style and more.',
      icon: <UserCheck size={24} className="text-purple-600" />
    }
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
      
      {/* Left Area: Problem Solving Cards */}
      <div className="flex-1">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Why TripMate?</h2>
          <p className="text-slate-500 text-sm mt-1">We solve the real problems travelers face.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Area: Community Card */}
      <div className="w-full lg:w-[380px] flex-shrink-0 flex items-end">
        <div className="w-full bg-white p-8 rounded-3xl border border-purple-100 shadow-lg shadow-purple-500/5 relative overflow-hidden">
          
          {/* Decorative Text */}
          <div className="absolute top-6 right-6 text-purple-400 transform rotate-6">
            <span className="font-medium text-sm italic">Good People<br/>Great Trips!</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-6 max-w-[200px] leading-tight">
            Join a growing community of travel lovers.
          </h3>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div>
              <div className="text-lg font-extrabold text-slate-900">1,248+</div>
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Travelers</div>
            </div>
            <div>
              <div className="text-lg font-extrabold text-slate-900">48+</div>
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Trips forming</div>
            </div>
            <div>
              <div className="text-lg font-extrabold text-slate-900">58+</div>
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Destinations</div>
            </div>
          </div>

          {/* Avatar Stack (Using local placeholders) */}
          <div className="flex -space-x-3 mb-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative z-0">
                <img 
                  src={`/assets/placeholders/avatar-${num}.jpg`} 
                  alt="Community member"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-purple-200 flex items-center justify-center text-xs font-bold text-purple-700">T${num}</div>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={() => navigate('/discover')} // Adjust route to your actual registration/onboarding page
            className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group"
          >
            Join the Community
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>

    </section>
  );
};

export default WhyTripMate;