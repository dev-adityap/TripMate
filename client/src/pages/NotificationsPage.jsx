import React, { useState, useEffect } from 'react';
import { Bell, Sparkles, MapPin, CheckCircle, Image, Calendar, Info, RefreshCw } from 'lucide-react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const generateFreshNotifications = () => {
    setIsRefreshing(true);
    const treks = ['Sandakphu Trek', 'Kedarkantha Winter Trek', 'Valley of Flowers', 'Hampta Pass', 'Dharamshala Basecamp'];
    const members = ['Tanuj', 'Biki', 'Neha', 'Rohan', 'Priya', 'Sneha', 'Rahul'];
    const times = ['Just now', '12m ago', '1h ago', '3h ago', '1d ago', '2d ago'];
    const pool = [
      { icon: Info, color: 'text-amber-300 bg-amber-500/10 border-amber-400/50', title: 'Welcome to TripMate!', description: 'Explore verified expeditions and join secure traveler groups.', time: times[Math.floor(Math.random() * times.length)] },
      { icon: MapPin, color: 'text-purple-300 bg-purple-500/10 border-purple-400/50', title: 'New batch slots opened', description: `3 new spots have opened up for the ${treks[Math.floor(Math.random() * treks.length)]}.`, time: times[Math.floor(Math.random() * times.length)] },
      { icon: CheckCircle, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/50', title: 'Squad Workspace Unlocked!', description: 'Your payment was verified. Group chat and checklist are now active.', time: times[Math.floor(Math.random() * times.length)] },
      { icon: Image, color: 'text-rose-400 bg-rose-500/10 border-rose-400/50', title: 'New memories uploaded', description: `${members[Math.floor(Math.random() * members.length)]} added ${Math.floor(Math.random() * 6) + 2} new photos to the shared folder.`, time: times[Math.floor(Math.random() * times.length)] },
      { icon: Calendar, color: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/50', title: 'Itinerary Checkpoint Updated', description: 'The trip leader just updated Day 2 camp coordinates and gear list.', time: times[Math.floor(Math.random() * times.length)] }
    ];
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 4);
    setNotifications(shuffled);
    setTimeout(() => setIsRefreshing(false), 400);
  };

  useEffect(() => {
    generateFreshNotifications();
  }, []);

  return (
    <div className="min-h-dvh w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 shadow-xs">
              <Sparkles size={12} /> Live Activity Log
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">Notifications</h1>
            <p className="text-white/75 text-sm mt-1">Refreshed live with your latest bookings and community alerts.</p>
          </div>
          <button
            onClick={generateFreshNotifications}
            className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 text-amber-300 px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:bg-white hover:text-zinc-950"
          >
            <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} /> Refresh Feed
          </button>
        </div>
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 space-y-4">
          {notifications.map((notif, index) => {
            const Icon = notif.icon;
            return (
              <div key={index} className="bg-white/[0.05] border border-white/10 p-4 md:p-5 rounded-2xl flex items-start gap-4 backdrop-blur-2xl hover:border-white/20 transition-all">
                <div className={`p-3 rounded-2xl border shrink-0 backdrop-blur-2xl ${notif.color}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1 flex-wrap gap-2">
                    <h4 className="font-bold text-white text-sm">{notif.title}</h4>
                    <span className="text-[10px] text-white/50 font-medium">{notif.time}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">{notif.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
