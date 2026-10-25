import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link, useParams } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Users,
  Wallet,
  MessageSquare,
  CheckSquare,
  Square,
  Send,
  Bot,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

const slugify = (value = '') =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const ITINERARY_FALLBACK = [
  { day: 'Day 1', title: 'Arrival & Basecamp Briefing', description: 'Arrive, check in, and sync with your squad leader.' },
  { day: 'Day 2', title: 'Core Exploration', description: 'Guided exploration of iconic viewpoints and local landmarks.' },
  { day: 'Day 3', title: 'Adventure & Bonfire', description: 'Curated group activities, food walks and evening stargazing.' },
  { day: 'Day 4', title: 'Sunrise Session & Departure', description: 'Final group photos, souvenirs and departure.' },
];

const ACTIVITY_POOL = [
  'Group City Food Walk',
  'Sunrise Viewpoint Hike',
  'Local Market Souvenir Hunt',
  'Welcome Dinner & Icebreaker',
  'High Altitude Acclimatization Trek',
  'Bonfire & Stargazing Session',
  'River Crossing Briefing',
  'Basecamp Gear & Safety Check',
];

export default function WorkspacesPage() {
  const [searchParams] = useSearchParams();
  const activeParam = searchParams.get('active') || searchParams.get('tripId');
  const { id: urlWorkspaceId } = useParams();

  const [selectedKey, setSelectedKey] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [activities, setActivities] = useState({});
  const [messages, setMessages] = useState({});
  const [inputText, setInputText] = useState('');

  // Build the workspace list from purchased trips + unlocked workspaces.
  const buildWorkspaces = () => {
    let purchasedIds = [];
    let unlocked = [];

    try {
      purchasedIds = JSON.parse(localStorage.getItem('tripMate_myTrips') || '[]');
    } catch {
      purchasedIds = [];
    }
    try {
      unlocked = JSON.parse(localStorage.getItem('tripMate_unlockedWorkspaces') || '[]');
    } catch {
      unlocked = [];
    }

    const fromPurchases = mockDestinations
      .filter((d) => purchasedIds.includes(String(d.id)))
      .map((d) => ({
        key: String(d.id),
        slug: slugify(d.name || d.title),
        name: `${d.name || d.title} Group`,
        destination: d.name || d.title,
        region: d.state || d.location || 'India',
        image: d.image,
        budget: d.approximateBudget || d.price || '₹14,500',
        members: 12,
      }));

    const fromUnlocked = (unlocked || [])
      .filter((ws) => !fromPurchases.some((p) => p.name === ws))
      .map((ws, idx) => ({
        key: slugify(ws) || `ws-${idx + 1}`,
        slug: slugify(ws),
        name: ws,
        destination: ws.replace(/ Group$/i, ''),
        region: 'Verified Destination Workspace',
        image: '',
        budget: '₹14,500',
        members: 10,
      }));

    const fallback = [
      {
        key: 'd1',
        slug: 'manali',
        name: 'Manali Group',
        destination: 'Manali',
        region: 'Himachal Pradesh',
        image: mockDestinations[0]?.image,
        budget: '₹14,500',
        members: 11,
      },
      {
        key: 'd2',
        slug: 'kasol',
        name: 'Kasol Group',
        destination: 'Kasol',
        region: 'Himachal Pradesh',
        image: mockDestinations[1]?.image,
        budget: '₹13,200',
        members: 9,
      },
      {
        key: 'd5',
        slug: 'tirthan-valley',
        name: 'Tirthan Valley Group',
        destination: 'Tirthan Valley',
        region: 'Himachal Pradesh',
        image: mockDestinations[4]?.image,
        budget: '₹14,500',
        members: 10,
      },
    ];

    // Merge every source, then de-duplicate so each destination appears once.
    const merged = [...fromPurchases, ...fromUnlocked, ...fallback];
    const seen = new Set();
    return merged.filter((ws) => {
      const dedupeKey = slugify(ws.destination) || slugify(ws.name);
      if (!dedupeKey || seen.has(dedupeKey)) return false;
      seen.add(dedupeKey);
      return true;
    });
  };

  const [workspaces, setWorkspaces] = useState(buildWorkspaces);

  // Re-read localStorage when it changes in another tab (e.g. CheckoutPage booking),
  // and re-resolve selection when the active param or list changes.
  useEffect(() => {
    const handleStorage = () => setWorkspaces(buildWorkspaces);
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Validate selectedKey still exists in the current workspaces list; reset if stale.
  useEffect(() => {
    setSelectedKey((prev) => {
      if (!prev) return null;
      const exists = workspaces.some((w) => w.key === prev);
      return exists ? prev : workspaces[0]?.key || null;
    });
  }, [workspaces]);

  // Resolve the incoming ?active= param or /workspace/:id against the workspace list.
  useEffect(() => {
    let target = activeParam;
    // A /workspace/:id URL segment takes precedence over the query param.
    if (!target && urlWorkspaceId) {
      target = urlWorkspaceId;
    }

    if (!target) {
      setSelectedKey((prev) => prev || workspaces[0]?.key || null);
      return;
    }

    const raw = String(target).replace(/^trip-/, '');
    const match = workspaces.find(
      (w) =>
        String(w.key) === raw ||
        w.slug === raw.toLowerCase() ||
        slugify(w.name) === raw.toLowerCase() ||
        slugify(w.destination) === raw.toLowerCase()
    );

    setSelectedKey(match ? match.key : workspaces[0]?.key || null);
  }, [activeParam, urlWorkspaceId, workspaces]);

  // Seed activities + chat per workspace once.
  useEffect(() => {
    setActivities((prev) => {
      const next = { ...prev };
      workspaces.forEach((ws) => {
        if (!next[ws.key]) {
          next[ws.key] = ACTIVITY_POOL.slice(0, 4).map((title, idx) => ({
            id: idx + 1,
            title,
            completed: false,
          }));
        }
      });
      return next;
    });

    setMessages((prev) => {
      const next = { ...prev };
      workspaces.forEach((ws) => {
        if (!next[ws.key]) {
          next[ws.key] = [
            {
              sender: 'TripMate AI',
              isAi: true,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              text: `Welcome to the ${ws.name} workspace! I can help with the itinerary, gear checks and shared expenses.`,
            },
          ];
        }
      });
      return next;
    });
  }, [workspaces]);

  // Load persisted messages from localStorage on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tripMate_workspaceMessages');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMessages((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore storage read errors
    }
  }, []);

  // Persist chat messages to localStorage whenever they change.
  useEffect(() => {
    if (Object.keys(messages).length > 0) {
      try {
        localStorage.setItem('tripMate_workspaceMessages', JSON.stringify(messages));
      } catch {
        // Ignore storage quota errors
      }
    }
  }, [messages]);

  const current = workspaces.find((w) => w.key === selectedKey) || workspaces[0];
  const currentItinerary = useMemo(() => {
    const dest = mockDestinations.find((d) => String(d.id) === String(current?.key));
    return dest?.itinerary?.length ? dest.itinerary : ITINERARY_FALLBACK;
  }, [current?.key]);

  const toggleActivity = (activityId) => {
    if (!current) return;
    setActivities((prev) => ({
      ...prev,
      [current.key]: (prev[current.key] || []).map((act) =>
        act.id === activityId ? { ...act, completed: !act.completed } : act
      ),
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !current) return;

    const text = inputText.trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => ({
      ...prev,
      [current.key]: [
        ...(prev[current.key] || []),
        { sender: 'You', text, time },
      ],
    }));
    setInputText('');

    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [current.key]: [
          ...(prev[current.key] || []),
          {
            sender: 'TripMate AI',
            isAi: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: `Noted for ${current.name}. I'll add it to the shared plan — ask me anything else!`,
          },
        ],
      }));
    }, 600);
  };

  // Hardcoded expenses per workspace
  const workspaceExpenses = {
    d1: [
      { label: 'Shared cab to basecamp', amount: 1200, by: 'Tanuj' },
      { label: 'Camp firewood & dinner', amount: 860, by: 'You' },
      { label: 'Permit + entry fees', amount: 540, by: 'Priya' },
      { label: 'Local SIM + shared data', amount: 399, by: 'Aarav' },
    ],
    d2: [
      { label: 'Shared cab to basecamp', amount: 900, by: 'Tanuj' },
      { label: 'Camp firewood & dinner', amount: 700, by: 'Priya' },
      { label: 'Permit + entry fees', amount: 400, by: 'You' },
      { label: 'Local SIM + shared data', amount: 299, by: 'Aarav' },
    ],
    d5: [
      { label: 'Shared cab to basecamp', amount: 1100, by: 'Priya' },
      { label: 'Camp firewood & dinner', amount: 750, by: 'Tanuj' },
      { label: 'Permit + entry fees', amount: 450, by: 'Aarav' },
      { label: 'Local SIM + shared data', amount: 349, by: 'You' },
    ],
  };

  const expenses = workspaceExpenses[current?.key] || workspaceExpenses.d1;

  const squadTotal = expenses.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div className="min-h-dvh bg-[#09090B] text-zinc-100 pt-6 md:pt-8 pb-24 px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 mb-3">
            <Sparkles size={12} /> Squad Collaboration Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Group Workspaces</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Coordinate itineraries, split expenses and chat with your verified squad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Workspace list */}
          <div className="space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Active Workspaces</h3>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                  {workspaces.length} Unlocked
                </span>
              </div>

              <div className="space-y-2 max-h-[360px] overflow-y-auto no-scrollbar pr-1">
                {workspaces.map((ws) => (
                  <button
                    key={ws.key}
                    type="button"
                    onClick={() => setSelectedKey(ws.key)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      current?.key === ws.key
                        ? 'bg-amber-500/[0.08] border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.12)] text-white'
                        : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <h4 className="text-sm font-bold text-white">{ws.name}</h4>
                    <p className="text-[11px] text-amber-300 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {ws.region}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Activities */}
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Trip Activities</h3>
                <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-400/20 px-2 py-0.5 rounded-full font-bold">
                  Auto-Refreshed
                </span>
              </div>
              <div className="space-y-2.5 pt-2">
                {(activities[current?.key] || []).map((act) => (
                  <div
                    key={act.id}
                    onClick={() => toggleActivity(act.id)}
                    className="bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl flex items-center justify-between cursor-pointer hover:border-white/25 transition-all"
                  >
                    <span className={`text-xs font-medium ${act.completed ? 'line-through text-white/40' : 'text-white/80'}`}>
                      {act.title}
                    </span>
                    {act.completed ? (
                      <CheckSquare size={16} className="text-emerald-400 shrink-0" />
                    ) : (
                      <Square size={16} className="text-white/25 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Active workspace panel */}
          <div className="lg:col-span-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 bg-white/[0.02] border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-black text-white">{current?.name || 'Select a Workspace'}</h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1 font-medium bg-white/[0.03] border border-white/10 px-3 py-1 rounded-lg">
                    <Users size={13} className="text-emerald-400" /> {current?.members || 12} Verified Members
                  </span>
                  <div className="relative group">
                    <select className="bg-white/[0.03] text-amber-300 text-[11px] font-semibold border border-amber-400/30 px-3 py-1.5 rounded-lg appearance-none pr-8 cursor-pointer hover:border-amber-400 focus:outline-none">
                      <option className="bg-zinc-950 text-zinc-300 font-bold" disabled selected>
                        View Squad Roster
                      </option>
                      {['Aditya Panna (You)', 'Tanuj', 'Priya Roy', 'Aarav Sharma', 'Neha Sen'].map((name) => (
                        <option key={name} className="bg-zinc-950 text-white">
                          👤 {name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-amber-300 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 p-1 rounded-xl">
                {[
                  { key: 'itinerary', label: 'Itinerary', icon: Sparkles },
                  { key: 'expenses', label: 'Split', icon: Wallet },
                  { key: 'chat', label: 'Chat', icon: MessageSquare },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      activeTab === tab.key ? 'bg-amber-400 text-zinc-950' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <tab.icon size={13} /> {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'itinerary' && (
              <div className="p-6 space-y-4 overflow-y-auto no-scrollbar">
                {currentItinerary.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/25 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-white">{idx + 1}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-white/[0.06] border border-white/15 px-3 py-1 rounded-full inline-block">
                        {item.day || `Day ${idx + 1}`}
                      </span>
                      <h4 className="text-base font-bold text-white mt-2">{item.title}</h4>
                      <p className="text-xs text-white/65 leading-relaxed mt-1">
                        {item.description || item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'expenses' && (
              <div className="p-6 space-y-3 overflow-y-auto no-scrollbar">
                {expenses.map((row) => {
                  const squadSize = current?.members || 4;
                  const isPayer = row.by === 'You';
                  const yourShare = isPayer ? 0 : Math.round(row.amount / squadSize);
                  return (
                    <div key={row.label} className="flex items-center justify-between gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3">
                      <div>
                        <div className="text-sm font-semibold text-white">{row.label}</div>
                        <div className="text-[11px] text-white/45">Paid by {row.by}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-amber-300 font-bold text-sm">₹{row.amount.toLocaleString()}</div>
                        {!isPayer ? (
                          <div className="text-[10px] font-bold text-white/50 bg-white/10 px-1.5 py-0.5 rounded mt-1 inline-block">
                            You owe: ₹{yourShare.toLocaleString()}
                          </div>
                        ) : (
                          <div className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-400/30 px-1.5 py-0.5 rounded mt-1 inline-block">
                            You paid this
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between gap-3 bg-amber-500/10 border border-amber-400/30 rounded-2xl px-4 py-3">
                  <span className="text-sm font-extrabold text-white uppercase tracking-wider">Squad Total</span>
                  <span className="text-lg font-black text-amber-300">₹{squadTotal.toLocaleString()}</span>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="flex flex-col flex-1 min-h-[420px]">
                <div className="flex-1 p-6 overflow-y-auto no-scrollbar space-y-4">
                  <div className="text-center my-2">
                    <span className="text-[10px] bg-white/[0.03] border border-white/10 text-zinc-400 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                      Workspace unlocked after booking verification
                    </span>
                  </div>
                  {(messages[current?.key] || []).map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'} space-y-1`}>
                      <span className="text-[10px] font-bold text-zinc-400 px-1 flex items-center gap-1">
                        {msg.isAi && <Bot size={12} className="text-amber-300" />} {msg.sender}
                        <span className="text-[9px] font-normal text-white/35 ml-1">{msg.time}</span>
                      </span>
                      <div
                        className={`p-4 rounded-2xl text-xs max-w-md ${
                          msg.sender === 'You'
                            ? 'bg-white text-zinc-950 font-semibold rounded-br-xs'
                            : msg.isAi
                              ? 'bg-amber-400/10 border border-amber-400/25 text-white rounded-bl-xs'
                              : 'bg-white/[0.04] border border-white/10 text-white/80 rounded-bl-xs'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 bg-white/[0.02] border-t border-white/10 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Chat with your squad..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-white/35 focus:outline-none focus:border-amber-400/60"
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 rounded-2xl bg-white hover:bg-amber-400 text-zinc-950 flex items-center justify-center transition-all cursor-pointer shrink-0"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
