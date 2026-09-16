import React from 'react';
import { Sparkles, Compass, Users, Shield, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Badge */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
            <Sparkles size={12} /> The Story Behind TripMate
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white">🌄 About TripMate</h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#111827] border border-[#1E293B] p-8 md:p-12 rounded-3xl shadow-2xl space-y-8 text-xs md:text-sm text-slate-300 leading-relaxed">
          
          {/* Story Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white border-b border-[#1E293B] pb-3">
              The Story Behind TripMate
            </h3>
            <p className="italic text-sky-400 font-medium text-sm">TripMate started with a simple thought:</p>
            <p className="text-white font-bold text-base md:text-lg">
              Why do great travel plans so often end before they even begin?
            </p>
            <p className="text-[#94A3B8]">
              I’ve always loved the idea of exploring new places, going on treks, discovering hidden destinations, and making memories with people. But one problem kept coming up: finding the right people to go with.
            </p>
            <p className="text-[#94A3B8]">
              Friends might have different schedules. Plans get cancelled. Sometimes you have the destination, the dates, and the excitement, but not enough people to make the trip happen.
            </p>
            <p className="text-slate-400 font-medium">That made me think:</p>
            
            <div className="bg-[#0B0F17] border border-[#1E293B] p-5 rounded-2xl shadow-inner text-white font-medium italic">
              "What if people could find others who want to visit the same place, around the same time, and simply plan the journey together?"
            </div>
            
            <p className="text-sky-400 font-bold text-base pt-2">And that's where TripMate began.</p>
          </div>

          {/* What I wanted to build */}
          <div className="border-t border-[#1E293B] pt-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-white pb-1">
              🧭 What I wanted to build
            </h3>
            <p className="text-[#94A3B8]">I wanted TripMate to be more than another travel website.</p>
            <p className="text-slate-300 font-semibold">The idea was to create a platform where people can:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">🌍</span>
                <span className="text-xs text-slate-200 font-medium">Discover 100+ destinations across India</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">🗓️</span>
                <span className="text-xs text-slate-200 font-medium">Explore available trip dates and group batches</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">👥</span>
                <span className="text-xs text-slate-200 font-medium">See anonymous group information before joining</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">🤝</span>
                <span className="text-xs text-slate-200 font-medium">Find people interested in the same journey</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">💬</span>
                <span className="text-xs text-slate-200 font-medium">Connect with their group through group chat</span>
              </div>
              <div className="bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">🤖</span>
                <span className="text-xs text-slate-200 font-medium">Interact with an AI-powered travel assistant</span>
              </div>
              <div className="md:col-span-2 bg-[#0B0F17] border border-[#1E293B] p-4 rounded-2xl flex items-center gap-3 shadow-inner">
                <span className="text-xl">🔐</span>
                <span className="text-xs text-slate-200 font-medium">Keep personal information protected while discovering potential travel companions</span>
              </div>
            </div>
          </div>

          {/* Real-world project section */}
          <div className="border-t border-[#1E293B] pt-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-white pb-1">
              🚀 Built as a real-world project
            </h3>
            <p className="text-[#94A3B8]">
              TripMate is also my attempt to turn an everyday problem into a real, working product.
            </p>
            <p className="text-[#94A3B8]">
              From designing the interface and building the frontend to developing the backend, database, APIs, authentication, and AI features, I’ve been building TripMate step by step while learning what it actually takes to turn an idea into a full-stack application.
            </p>
            <p className="text-slate-300 font-medium">
              TripMate is still evolving. There are more features, improvements, and ideas I want to bring into it.
            </p>
          </div>

          {/* Conclusion */}
          <div className="border-t border-[#1E293B] pt-8 text-center space-y-3 bg-[#0B0F17]/50 p-6 rounded-2xl border">
            <p className="text-[11px] uppercase tracking-widest text-sky-400 font-extrabold">The Goal Remains Simple</p>
            <h4 className="text-lg md:text-xl font-serif font-bold text-white">
              Find your destination. Find your people. Go together. 🌄
            </h4>
            <div className="pt-2">
              <span className="text-xs font-bold bg-[#131B2E] text-slate-300 border border-[#1E293B] px-4 py-1.5 rounded-full inline-block">
                TripMate · Since 2026
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}