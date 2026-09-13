import React from 'react';
import { SlidersHorizontal, Users, CalendarCheck, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Set Your Preferences',
      desc: 'Tell us where you want to go, your budget, dates and travel style.',
      icon: <SlidersHorizontal size={24} strokeWidth={1.5} className="text-purple-600" />
    },
    {
      id: 2,
      num: '02',
      title: 'Find Compatible Travelers',
      desc: 'Discover trips and people with similar interests.',
      icon: <Users size={24} strokeWidth={1.5} className="text-purple-600" />
    },
    {
      id: 3,
      num: '03',
      title: 'Join a Trip',
      desc: 'View trip details, group info and join with one click.',
      icon: <CalendarCheck size={24} strokeWidth={1.5} className="text-purple-600" />
    },
    {
      id: 4,
      num: '04',
      title: 'Travel Together',
      desc: 'Plan, explore and create unforgettable memories.',
      icon: <Send size={24} strokeWidth={1.5} className="text-purple-600" />
    }
  ];

  return (
    <section className="w-full relative py-4">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900">How TripMate works</h2>
        <p className="text-slate-500 text-sm mt-1">Your next trip is just a few steps away.</p>
      </div>

      <div className="relative">
        
        {/* Decorative Dashed Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] border-t-2 border-dashed border-purple-200 -z-10"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-start lg:items-center">
              
              {/* Flex container for mobile alignment vs desktop alignment */}
              <div className="flex lg:flex-col items-center lg:items-center gap-6 lg:gap-8 w-full">
                
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-purple-500/30 flex-shrink-0 z-10 border-4 border-[#F9FAFD]">
                  {step.num}
                </div>
                
                {/* Connecting line for mobile (hidden on desktop) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-dashed bg-purple-200 border-l-2 border-dashed h-[calc(100%+2rem)] -z-10"></div>
                )}

                {/* Step Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full flex-1 hover:shadow-md transition-shadow group">
                  
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default HowItWorks;