import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Home, MapPin } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh w-full bg-[#09090B] text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="w-20 h-20 rounded-3xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
        <Compass size={40} />
      </div>
      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20 mb-4">
        Error 404 • Off-Trail Coordinates
      </span>
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-3">
        Lost in the Himalayas
      </h1>
      <p className="text-sm text-white/55 max-w-md mb-8 leading-relaxed">
        The mountain pass or expedition route you are looking for does not exist or has been relocated to a new basecamp.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => navigate('/home')}
          className="px-6 py-3.5 rounded-2xl bg-white hover:bg-amber-400 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xl"
        >
          <Home size={16} /> Return to Home
        </button>
        <button
          type="button"
          onClick={() => navigate('/map')}
          className="px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
        >
          <MapPin size={16} className="text-amber-400" /> Open India Map
        </button>
      </div>
    </div>
  );
}
