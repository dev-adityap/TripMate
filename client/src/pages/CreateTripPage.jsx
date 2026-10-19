import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowRight, Sparkles, Loader } from 'lucide-react';

export default function CreateTripPage({ updateBackground }) {
  const [form, setForm] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    groupSize: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop');
    }
  }, [updateBackground]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:5000/api/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      alert('Trip created successfully!');
      setForm({ destination: '', startDate: '', endDate: '', groupSize: '' });
    } catch (err) {
      alert(err.message || 'Failed to create trip');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 shadow-xs">
            <Sparkles size={12} /> Expedition Blueprint
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] mb-2">Plan Your Trip</h1>
          <p className="text-white/75 text-sm mt-1">Craft an editorial itinerary tailored to your squad.</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center gap-2">
                <MapPin size={14} className="text-amber-300" /> Destination
              </label>
              <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="e.g., Spiti Valley, Ladakh"
                className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center gap-2">
                  <Calendar size={14} className="text-amber-300" /> Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center gap-2">
                  <Calendar size={14} className="text-amber-300" /> End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center gap-2">
                <Users size={14} className="text-amber-300" /> Group Size
              </label>
              <input
                type="number"
                name="groupSize"
                value={form.groupSize}
                onChange={handleChange}
                placeholder="e.g., 4"
                min="1"
                className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none"
                required
              />
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-2xl text-sm transition-all disabled:opacity-60 inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(255,255,255,0.1)]"
              >
                {loading ? (
                  <>
                    <Loader size={16} className="animate-spin" /> Creating...
                  </>
                ) : (
                  <>
                    Create Expedition <ArrowRight size={16} />
                  </>
                )}
              </button>
              <Link to="/discover" className="text-sm text-white/70 hover:text-white transition-colors">
                Browse Destinations
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
