import React, { useState, useEffect } from 'react';
import { Bell, Sparkles, MapPin, CheckCircle, Image, Calendar, Info, RefreshCw } from 'lucide-react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Generate fresh randomized notifications on page load/refresh
  const generateFreshNotifications = () => {
    setIsRefreshing(true);
    
    const treks = ['Sandakphu Trek', 'Kedarkantha Winter Trek', 'Valley of Flowers', 'Hampta Pass', 'Dharamshala Basecamp'];
    const members = ['Tanuj', 'Biki', 'Neha', 'Rohan', 'Priya', 'Sneha', 'Rahul'];
    const times = ['Just now', '12m ago', '1h ago', '3h ago', '1d ago', '2d ago'];
    
    const pool = [
      {
        icon: Info,
        color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
        title: 'Welcome to TripMate!',
        description: 'Explore verified expeditions and join secure traveler groups.',
        time: times[Math.floor(Math.random() * times.length)]
      },
      {
        icon: MapPin,
        color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
        title: 'New batch slots opened',
        description: `3 new spots have opened up for the ${treks[Math.floor(Math.random() * treks.length)]}.`,
        time: times[Math.floor(Math.random() * times.length)]
      },
      {
        icon: CheckCircle,
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
        title: 'Squad Workspace Unlocked!',
        description: 'Your payment was verified. Group chat and checklist are now active.',
        time: times[Math.floor(Math.random() * times.length)]
      },
      {
        icon: Image,
        color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
        title: 'New memories uploaded',
        description: `${members[Math.floor(Math.random() * members.length)]} added ${Math.floor(Math.random() * 6) + 2} new photos to the shared folder.`,
        time: times[Math.floor(Math.random() * times.length)]
      },
      {
        icon: Calendar,
        color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
        title: 'Itinerary Checkpoint Updated',
        description: 'The trip leader just updated Day 2 camp coordinates and gear list.',
        time: times[Math.floor(Math.random() * times.length)]
      }
    ];

    // Shuffle and pick 3 to 5 random notifications
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 4);
    setNotifications(shuffled);

    setTimeout(() => setIsRefreshing(false), 400);
  };

  useEffect(() => {
    generateFreshNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header with Manual Refresh Trigger */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
            <Sparkles size={12} /> Live Activity Log
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Notifications</h1>
          <p className="text-[#94A3B8] text-sm mt-1">Refreshed live with your latest bookings and community alerts.</p>
        </div>

        <button 
          onClick={generateFreshNotifications}
          className="bg-[#111827] hover:bg-[#131B2E] border border-[#1E293B] text-sky-400 px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
        >
          <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} /> Refresh Feed
        </button>
      </div>

      {/* Notifications Container Card */}
      <div className="max-w-4xl mx-auto bg-[#111827] border border-[#1E293B] rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 space-y-4">
        {notifications.map((notif, index) => {
          const Icon = notif.icon;
          return (
            <div 
              key={index} 
              className="bg-[#0B0F17] border border-[#1E293B] p-4 md:p-5 rounded-2xl flex items-start gap-4 hover:border-slate-700 transition-all shadow-inner"
            >
              <div className={`p-3 rounded-2xl border shrink-0 ${notif.color}`}>
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white text-sm">{notif.title}</h4>
                  <span className="text-[10px] text-slate-500 font-medium">{notif.time}</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{notif.description}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}