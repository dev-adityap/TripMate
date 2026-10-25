import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MessageSquare,
  Wallet,
  Backpack,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Plus,
} from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

const slugify = (value = '') =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Alias map so friendly slugs (kasol, tirthan-valley) always resolve.
const WORKSPACE_ALIASES = {
  kasol: 'd2',
  'tirthan-valley': 'd5',
  tirthan: 'd5',
  manali: 'd1',
  d1: 'd1',
};

const FALLBACK_WORKSPACES = {
  'tirthan-valley': { name: 'Tirthan Valley Group', region: 'Himachal Pradesh' },
  kasol: { name: 'Kasol Group', region: 'Himachal Pradesh' },
  d1: { name: 'Manali Group', region: 'Himachal Pradesh' },
};

const buildWorkspace = (dest, key) => ({
  key,
  name: `${dest?.name || dest?.title || 'Expedition'} Group`,
  region: dest?.state || dest?.location || 'India',
  category: dest?.category || 'MOUNTAIN',
  image: dest?.image || '',
  budget: dest?.approximateBudget || dest?.price || '₹14,500',
  description:
    dest?.shortDescription ||
    dest?.fullDescription ||
    'A curated group expedition with verified leaders, boutique stays and immersive local adventures.',
});

const ITINERARY_FALLBACK = [
  { day: 'Day 1', title: 'Arrival & Basecamp Briefing', description: 'Arrive, check in, and sync with your squad leader.' },
  { day: 'Day 2', title: 'Core Exploration', description: 'Guided exploration of iconic viewpoints and local landmarks.' },
  { day: 'Day 3', title: 'Adventure & Bonfire', description: 'Curated group activities, food walks and evening stargazing.' },
  { day: 'Day 4', title: 'Sunrise Session & Departure', description: 'Final group photos, souvenirs and departure.' },
];

const GEAR_CHECKLIST = [
  { label: 'Layered warm clothing', done: true },
  { label: 'Waterproof outer shell', done: true },
  { label: 'Trekking shoes (broken in)', done: false },
  { label: 'Headlamp + spare batteries', done: false },
  { label: 'Reusable water bottle', done: true },
  { label: 'Personal medicines', done: false },
];

export default function WorkspacePage() {
  const { tripId } = useParams();
  const [gear, setGear] = useState(GEAR_CHECKLIST);
  const [message, setMessage] = useState('');

  const workspace = useMemo(() => {
    const raw = String(tripId || '').trim();
    const cleaned = raw.replace(/^trip-/, '');
    const key = cleaned.toLowerCase();

    const byAlias = WORKSPACE_ALIASES[key];
    const candidates = [raw, cleaned, key, byAlias, slugify(cleaned)].filter(Boolean);

    const dest = candidates
      .map((c) => mockDestinations.find((d) => String(d.id) === String(c)))
      .find(Boolean);

    if (dest) return buildWorkspace(dest, dest.id);

    const byName = mockDestinations.find((d) => slugify(d.name) === key || slugify(d.title) === key);
    if (byName) return buildWorkspace(byName, byName.id);

    const fallback = FALLBACK_WORKSPACES[key] || FALLBACK_WORKSPACES['tirthan-valley'];
    return {
      key: key || 'tirthan-valley',
      name: fallback.name,
      region: fallback.region,
      category: 'MOUNTAIN',
      image: '',
      budget: '₹14,500',
      description: 'Your squad workspace is ready. Chat, split expenses, and finish the gear checklist before departure.',
    };
  }, [tripId]);

  const itinerary = useMemo(() => {
    const dest = mockDestinations.find((d) => String(d.id) === String(workspace.key));
    return dest?.itinerary?.length ? dest.itinerary : ITINERARY_FALLBACK;
  }, [workspace.key]);

  const toggleGear = (index) =>
    setGear((prev) => prev.map((item, i) => (i === index ? { ...item, done: !item.done } : item)));

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 pb-24 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3">
              <ShieldCheck size={12} /> Squad Workspace
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">{workspace.name}</h1>
            <p className="text-zinc-400 text-sm mt-2 flex items-center gap-1.5">
              <MapPin size={14} className="text-amber-300" /> {workspace.region}
              <span className="text-white/20">•</span>
              <Calendar size={14} className="text-amber-300" /> Upcoming Batch
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-zinc-400">Trip ID</div>
              <div className="text-sm font-bold text-white">{workspace.key}</div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-zinc-400">Package</div>
              <div className="text-sm font-bold text-amber-300">{workspace.budget}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Itinerary + Squad */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
              <h2 className="text-lg font-extrabold text-white uppercase tracking-wider">Expedition Itinerary</h2>
              <div className="relative space-y-4 pl-6">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
                {itinerary.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/25 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-white/[0.06] border border-white/15 px-3 py-1 rounded-full inline-block">
                        {item.day || `Day ${idx + 1}`}
                      </span>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/70 leading-relaxed">{item.description || item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
              <h2 className="text-lg font-extrabold text-white uppercase tracking-wider">Squad Chat</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto no-scrollbar">
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl rounded-tl-sm p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1">Tanuj</div>
                  <p className="text-sm text-white/85">Hey! Excited for this batch — is anyone planning to share a cab from the basecamp?</p>
                </div>
                <div className="bg-amber-400/10 border border-amber-400/20 rounded-2xl rounded-tr-sm p-4 ml-8">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1">You</div>
                  <p className="text-sm text-white/85">Count me in — I'll post the packing checklist here tonight.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message your squad..."
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-white/35 focus:outline-none focus:border-amber-400/60"
                />
                <button
                  type="button"
                  onClick={() => setMessage('')}
                  className="px-4 rounded-2xl bg-white hover:bg-amber-400 text-zinc-950 font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus size={14} /> Send
                </button>
              </div>
            </div>
          </div>

          {/* Right: Splitwise + Gear checklist */}
          <div className="space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Wallet size={16} className="text-amber-300" />
                <h2 className="text-xs font-extrabold text-white/70 uppercase tracking-wider">Split Expenses</h2>
              </div>
              <div className="space-y-2 text-xs">
                {[
                  { label: 'Shared cab to basecamp', amount: '₹1,200', by: 'Tanuj' },
                  { label: 'Camp firewood & dinner', amount: '₹860', by: 'You' },
                  { label: 'Permit + entry fees', amount: '₹540', by: 'Priya' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-3.5 py-2.5">
                    <div>
                      <div className="text-white/85 font-semibold">{row.label}</div>
                      <div className="text-[10px] text-white/45">Paid by {row.by}</div>
                    </div>
                    <span className="text-amber-300 font-bold">{row.amount}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/workspaces"
                className="flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-white/[0.06] hover:bg-amber-400 text-white hover:text-zinc-950 text-xs font-bold transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Wallet size={15} /> Open Full Splitwise
                </span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Backpack size={16} className="text-amber-300" />
                <h2 className="text-xs font-extrabold text-white/70 uppercase tracking-wider">Gear Checklist</h2>
              </div>
              <div className="space-y-2">
                {gear.map((item, idx) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => toggleGear(idx)}
                    className="w-full flex items-center gap-3 text-left bg-white/[0.03] border border-white/10 rounded-2xl px-3.5 py-2.5 hover:border-white/25 transition-all cursor-pointer"
                  >
                    <CheckCircle2
                      size={16}
                      className={item.done ? 'text-emerald-400' : 'text-white/25'}
                    />
                    <span className={`text-xs ${item.done ? 'text-white/50 line-through' : 'text-white/85'}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-amber-300" />
                <h2 className="text-xs font-extrabold text-white/70 uppercase tracking-wider">Squad Members</h2>
              </div>
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-2xl px-3.5 py-2.5">
                  <span>Aditya Panna (You)</span>
                  <span className="text-amber-300 font-bold">Admin</span>
                </div>
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-2xl px-3.5 py-2.5">
                  <span>Tanuj</span>
                  <span className="text-white/45">Member</span>
                </div>
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-2xl px-3.5 py-2.5">
                  <span>Priya</span>
                  <span className="text-white/45">Member</span>
                </div>
              </div>
              <Link
                to="/messages"
                className="flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-white/[0.06] hover:bg-amber-400 text-white hover:text-zinc-950 text-xs font-bold transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare size={15} /> Group Chat
                </span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
