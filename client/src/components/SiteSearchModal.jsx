import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ArrowRight, X, Compass } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function SiteSearchModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = (mockDestinations || [])
    .filter((d) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        (d.name || '').toLowerCase().includes(q) ||
        (d.state || '').toLowerCase().includes(q) ||
        (d.region || '').toLowerCase().includes(q)
      );
    })
    .slice(0, 8);

  const handleSelect = (id) => {
    onClose();
    setQuery('');
    navigate(`/destination/${id}`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-xl bg-zinc-950 border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="text-amber-400" size={19} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, states, or routes..."
            className="flex-1 bg-transparent text-white text-sm outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/[0.06] text-white/60 hover:text-white cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-3 space-y-1.5">
          {results.map((dest) => (
            <button
              key={dest.id}
              type="button"
              onClick={() => handleSelect(dest.id)}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/[0.06] text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-amber-300">
                    {dest.name}
                  </div>
                  <div className="text-[11px] text-white/45">
                    {dest.state || dest.region || 'India'}
                  </div>
                </div>
              </div>
              <ArrowRight className="text-white/30 group-hover:text-amber-400" size={15} />
            </button>
          ))}
        </div>

        <div className="px-5 py-3 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
          <span className="flex items-center gap-1.5">
            <Compass size={13} className="text-amber-400" /> Instant Expedition Search
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              navigate('/map');
            }}
            className="text-amber-400 hover:underline font-bold cursor-pointer"
          >
            Open Interactive Map →
          </button>
        </div>
      </div>
    </div>
  );
}
