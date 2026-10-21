import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  User, Bell, Shield, LogOut, Check, CreditCard, 
  HeartPulse, Link2, Map as MapIcon, FileText, 
  Download, AlertTriangle, Sparkles, ArrowLeft, Home
} from 'lucide-react';

const DEFAULT_SETTINGS = {
  profile: {
    fullName: 'Aditya Panna',
    handle: '@dev-adityap',
    phone: '+91 123456789',
    city: 'Kolkata, WB',
    bio: 'Full-stack builder & mountain explorer. Always down for high-altitude passes.',
    vibes: ['Mountain Treks', 'Photography']
  },
  documents: {
    passportNum: '',
    expiry: '',
    digilockerSync: true,
    globalEntry: false
  },
  medical: {
    bloodGroup: 'O+',
    insuranceId: 'TM-INS-2026-8841',
    contactName: '',
    contactPhone: '+91 ',
    notes: 'No known severe allergies. Carrying standard acclimatization kit.'
  },
  billing: {
    upiId: 'adityapanna@okaxis',
    defaultMethod: 'UPI / GPay Instant',
    autoSplit: true,
    gstInvoice: false
  },
  integrations: {
    github: true,
    githubHandle: 'dev-adityap',
    strava: false,
    splitwise: true
  },
  maps: {
    engine: 'mapbox',
    offlineCache: true,
    highContrast: true
  },
  notifications: {
    captainAnnouncements: true,
    expenseSplitPings: true,
    weatherAlerts: true,
    whatsappAlerts: true
  },
  security: {
    publicProfile: true,
    shareLiveLocation: true
  }
};

const ALL_VIBES = ['Mountain Treks', 'Photography', 'Cafe Hopping', 'Backpacking', 'Winter Expeditions', 'Wildlife Safari'];

export default function SettingsPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('billing'); 
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState('');

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('tripmate_v2_enterprise_final');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          profile: { ...DEFAULT_SETTINGS.profile, ...parsed.profile },
          documents: { ...DEFAULT_SETTINGS.documents, ...parsed.documents },
          medical: { ...DEFAULT_SETTINGS.medical, ...parsed.medical },
          billing: { ...DEFAULT_SETTINGS.billing, ...parsed.billing },
          integrations: { ...DEFAULT_SETTINGS.integrations, ...parsed.integrations },
          maps: { ...DEFAULT_SETTINGS.maps, ...parsed.maps },
          notifications: { ...DEFAULT_SETTINGS.notifications, ...parsed.notifications },
          security: { ...DEFAULT_SETTINGS.security, ...parsed.security }
        };
      }
    } catch (e) {}
    return DEFAULT_SETTINGS;
  });

  const displayName = settings.profile.fullName || currentUser?.displayName || 'Aditya Panna';
  const avatarUrl = currentUser?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=f59e0b&color=09090b&bold=true`;

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const updateSetting = (category, field, value) => {
    setSettings(prev => ({ ...prev, [category]: { ...prev[category], [field]: value } }));
  };

  const toggleVibe = (vibe) => {
    const current = settings.profile.vibes || [];
    const updated = current.includes(vibe) ? current.filter(v => v !== vibe) : [...current, vibe];
    updateSetting('profile', 'vibes', updated);
  };

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem('tripmate_v2_enterprise_final', JSON.stringify(settings));
    setTimeout(() => {
      setIsSaving(false);
      triggerToast('All enterprise settings securely synchronized.');
    }, 800);
  };

  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ exportedAt: new Date().toISOString(), settings }, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = 'tripmate-config.json';
    a.click();
    triggerToast('Configuration exported to JSON.');
  };

  const TABS = [
    { id: 'profile', icon: User, label: 'Identity & Bio', desc: 'Public squad profile' },
    { id: 'documents', icon: FileText, label: 'Travel Documents', desc: 'Passports & permits' },
    { id: 'medical', icon: HeartPulse, label: 'Medical & SOS', desc: 'Blood group & contacts' },
    { id: 'billing', icon: CreditCard, label: 'Wallets & Splitwise', desc: 'UPI & auto-settle' },
    { id: 'integrations', icon: Link2, label: 'Connected Apps', desc: 'GitHub, Strava hooks' },
    { id: 'maps', icon: MapIcon, label: 'Map Engines', desc: 'Carto vs Mapbox GL' },
    { id: 'notifications', icon: Bell, label: 'Alert Matrix', desc: 'Granular push control' },
    { id: 'security', icon: Shield, label: 'Privacy & Sessions', desc: 'OAuth & visibility' }
  ];

  const Toggle = ({ enabled, onChange, label, desc }) => (
    <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all">
      <div className="pr-4">
        <h4 className="text-white font-bold text-sm">{label}</h4>
        <p className="text-xs text-white/40 mt-1 leading-relaxed">{desc}</p>
      </div>
      <button onClick={onChange} className={`w-12 h-6 shrink-0 rounded-full relative transition-colors ${enabled ? 'bg-amber-400' : 'bg-white/10'}`}>
        <div className={`w-4 h-4 rounded-full bg-zinc-950 absolute top-1 transition-transform ${enabled ? 'translate-x-7' : 'translate-x-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-zinc-100 font-sans pt-28 md:pt-32 pb-20 px-6 lg:px-14 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-cover opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#09090B]/90 to-[#09090B] backdrop-blur-[2px]" />
      </div>

      {toast && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-zinc-900 border border-amber-500/50 px-5 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-5">
          <Check className="text-amber-400" size={16}/> <span className="text-xs font-bold">{toast}</span>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl text-xs font-bold text-white/70 hover:text-white transition-all cursor-pointer backdrop-blur-md"
          >
            <ArrowLeft size={14} /> Back to Home
          </button>
          <div className="flex items-center gap-2 text-xs text-white/40 font-medium">
            <Home size={12} />
            <span>/</span>
            <span className="text-amber-300 font-bold">Settings</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
              <Sparkles size={12}/> Enterprise Control Center
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Platform Config</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={handleExport} className="px-4 py-3 bg-white/[0.05] border border-white/15 rounded-2xl text-xs font-bold transition-all hover:bg-white/10"><Download size={16}/></button>
            <button onClick={handleSave} disabled={isSaving} className="px-8 py-3.5 bg-white hover:bg-amber-400 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl transition-all">
              {isSaving ? 'Syncing...' : 'Commit Changes'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3 space-y-1.5 sticky top-32">
            {TABS.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-start gap-3.5 p-3.5 rounded-2xl text-left transition-all ${activeTab === tab.id ? 'bg-white text-zinc-950 shadow-lg' : 'text-white/60 hover:bg-white/[0.05] hover:text-white'}`}>
                <div className={`p-2 rounded-xl mt-0.5 ${activeTab === tab.id ? 'bg-zinc-950 text-amber-400' : 'bg-white/[0.06] text-amber-300'}`}><tab.icon size={16} /></div>
                <div>
                  <div className="text-sm font-extrabold">{tab.label}</div>
                  <div className={`text-[11px] ${activeTab === tab.id ? 'text-zinc-600 font-medium' : 'text-white/40'}`}>{tab.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 xl:col-span-9 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl min-h-[500px]">
            {activeTab === 'profile' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><User className="text-amber-400"/> Identity & Bio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Full Name</label><input type="text" value={settings.profile.fullName} onChange={e=>updateSetting('profile','fullName',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-amber-400/50" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Handle</label><input type="text" value={settings.profile.handle} onChange={e=>updateSetting('profile','handle',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-amber-300 outline-none focus:border-amber-400/50" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">City</label><input type="text" value={settings.profile.city} onChange={e=>updateSetting('profile','city',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-amber-400/50" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Phone</label><input type="text" value={settings.profile.phone} onChange={e=>updateSetting('profile','phone',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-amber-400/50" /></div>
                  <div className="md:col-span-2 space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Bio</label><textarea rows={3} value={settings.profile.bio} onChange={e=>updateSetting('profile','bio',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-amber-400/50 resize-none" /></div>
                </div>
                <div className="pt-4">
                  <label className="text-[10px] font-bold text-white/50 uppercase mb-3 block">Travel Vibes</label>
                  <div className="flex flex-wrap gap-2">
                    {ALL_VIBES.map(vibe => (
                      <button key={vibe} onClick={() => toggleVibe(vibe)} className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${settings.profile.vibes.includes(vibe) ? 'bg-amber-400 text-zinc-950 border-amber-300' : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30'}`}>{vibe}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><FileText className="text-amber-400"/> Travel Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Passport Number</label><input type="password" placeholder="••••••••" value={settings.documents.passportNum} onChange={e=>updateSetting('documents','passportNum',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Expiry Date</label><input type="date" value={settings.documents.expiry} onChange={e=>updateSetting('documents','expiry',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none" /></div>
                </div>
                <div className="space-y-3">
                  <Toggle enabled={settings.documents.digilockerSync} onChange={() => updateSetting('documents','digilockerSync',!settings.documents.digilockerSync)} label="DigiLocker API Sync" desc="Pull verified Indian IDs for domestic permits." />
                  <Toggle enabled={settings.documents.globalEntry} onChange={() => updateSetting('documents','globalEntry',!settings.documents.globalEntry)} label="Global Entry / TSA PreCheck" desc="Apply fast-track status to international bookings." />
                </div>
              </div>
            )}

            {activeTab === 'medical' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><HeartPulse className="text-rose-400"/> Medical & SOS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/50 uppercase">Blood Group</label>
                    <select value={settings.medical.bloodGroup} onChange={e=>updateSetting('medical','bloodGroup',e.target.value)} className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none">
                      {['O+','O-','A+','A-','B+','B-','AB+','AB-'].map(bg=><option key={bg} value={bg}>{bg}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Insurance ID</label><input type="text" value={settings.medical.insuranceId} onChange={e=>updateSetting('medical','insuranceId',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-amber-300 font-mono outline-none" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">SOS Contact Name</label><input type="text" value={settings.medical.contactName} onChange={e=>updateSetting('medical','contactName',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">SOS Phone</label><input type="text" value={settings.medical.contactPhone} onChange={e=>updateSetting('medical','contactPhone',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none" /></div>
                  <div className="md:col-span-2 space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Asthma / Allergies / Altitude Notes</label><textarea rows={2} value={settings.medical.notes} onChange={e=>updateSetting('medical','notes',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none resize-none" /></div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><CreditCard className="text-amber-400"/> Billing & Splitwise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="space-y-2"><label className="text-[10px] font-bold text-white/50 uppercase">Primary UPI ID</label><input type="text" value={settings.billing.upiId} onChange={e=>updateSetting('billing','upiId',e.target.value)} className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-amber-300 font-mono outline-none" /></div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/50 uppercase">Default Payment</label>
                    <select value={settings.billing.defaultMethod} onChange={e=>updateSetting('billing','defaultMethod',e.target.value)} className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white outline-none">
                      <option>UPI / GPay Instant</option><option>Credit Card</option><option>Reserve Slot</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <Toggle enabled={settings.billing.autoSplit} onChange={() => updateSetting('billing','autoSplit',!settings.billing.autoSplit)} label="Auto-Split Expenses" desc="Equally divide workspace bills instantly." />
                  <Toggle enabled={settings.billing.gstInvoice} onChange={() => updateSetting('billing','gstInvoice',!settings.billing.gstInvoice)} label="Request GST Invoices" desc="B2B claimable tax invoices." />
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><Link2 className="text-amber-400"/> Connected Apps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white text-zinc-950 rounded-full flex items-center justify-center font-black text-xl">GH</div>
                      <div>
                        <h4 className="font-bold text-sm">GitHub</h4>
                        <p className="text-xs text-white/50">github.com/{settings.integrations.githubHandle}</p>
                      </div>
                    </div>
                    <button onClick={()=>updateSetting('integrations','github',!settings.integrations.github)} className={`text-xs font-bold px-3 py-1.5 rounded-lg ${settings.integrations.github ? 'text-rose-400 bg-rose-500/10' : 'text-amber-950 bg-amber-400'}`}>{settings.integrations.github ? 'Disconnect' : 'Connect'}</button>
                  </div>
                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#FC4C02] text-white rounded-full flex items-center justify-center font-black">S</div>
                      <div>
                        <h4 className="font-bold text-sm">Strava</h4>
                        <p className="text-xs text-white/50">Sync trek elevation</p>
                      </div>
                    </div>
                    <button onClick={()=>updateSetting('integrations','strava',!settings.integrations.strava)} className={`text-xs font-bold px-3 py-1.5 rounded-lg ${settings.integrations.strava ? 'text-rose-400 bg-rose-500/10' : 'text-amber-950 bg-amber-400'}`}>{settings.integrations.strava ? 'Disconnect' : 'Connect'}</button>
                  </div>
                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black">SW</div>
                      <div>
                        <h4 className="font-bold text-sm">Splitwise</h4>
                        <p className="text-xs text-white/50">Auto-settle APIs</p>
                      </div>
                    </div>
                    <button onClick={()=>updateSetting('integrations','splitwise',!settings.integrations.splitwise)} className={`text-xs font-bold px-3 py-1.5 rounded-lg ${settings.integrations.splitwise ? 'text-rose-400 bg-rose-500/10' : 'text-amber-950 bg-amber-400'}`}>{settings.integrations.splitwise ? 'Disconnect' : 'Connect'}</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'maps' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><MapIcon className="text-amber-400"/> Rendering Engines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button onClick={() => updateSetting('maps', 'engine', 'carto')} className={`p-6 rounded-2xl border text-left transition-all ${settings.maps.engine === 'carto' ? 'bg-amber-500/10 border-amber-400' : 'bg-white/[0.02] border-white/10 hover:border-white/30'}`}>
                    <h4 className="font-black text-lg mb-1">Carto.com</h4>
                    <p className="text-xs text-white/60">High-performance geospatial pins.</p>
                  </button>
                  <button onClick={() => updateSetting('maps', 'engine', 'mapbox')} className={`p-6 rounded-2xl border text-left transition-all ${settings.maps.engine === 'mapbox' ? 'bg-amber-500/10 border-amber-400' : 'bg-white/[0.02] border-white/10 hover:border-white/30'}`}>
                    <h4 className="font-black text-lg mb-1">Mapbox GL</h4>
                    <p className="text-xs text-white/60">Cinematic 3D mountain flyovers.</p>
                  </button>
                </div>
                <div className="space-y-3">
                  <Toggle enabled={settings.maps.offlineCache} onChange={() => updateSetting('maps','offlineCache',!settings.maps.offlineCache)} label="Offline Map Cache" desc="Save tiles locally for high altitudes." />
                  <Toggle enabled={settings.maps.highContrast} onChange={() => updateSetting('maps','highContrast',!settings.maps.highContrast)} label="Dark Mode Topography" desc="Force dark/satellite map rendering." />
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="animate-in fade-in space-y-3">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><Bell className="text-amber-400"/> Alert Matrix</h3>
                <Toggle enabled={settings.notifications.captainAnnouncements} onChange={() => updateSetting('notifications','captainAnnouncements',!settings.notifications.captainAnnouncements)} label="TripCaptain Broadcasts" desc="Critical itinerary & gear updates." />
                <Toggle enabled={settings.notifications.weatherAlerts} onChange={() => updateSetting('notifications','weatherAlerts',!settings.notifications.weatherAlerts)} label="Severe Weather Alerts" desc="Snowfall & roadblock push notifications." />
                <Toggle enabled={settings.notifications.expenseSplitPings} onChange={() => updateSetting('notifications','expenseSplitPings',!settings.notifications.expenseSplitPings)} label="Splitwise Pings" desc="Alerts when squadmates settle bills." />
                <Toggle enabled={settings.notifications.whatsappAlerts} onChange={() => updateSetting('notifications','whatsappAlerts',!settings.notifications.whatsappAlerts)} label="WhatsApp Dispatches" desc="Boarding passes via WhatsApp." />
              </div>
            )}

            {activeTab === 'security' && (
              <div className="animate-in fade-in space-y-6">
                <h3 className="text-xl font-black flex items-center gap-2 mb-6"><Shield className="text-amber-400"/> Privacy & Sessions</h3>
                <div className="space-y-3 mb-8">
                  <Toggle enabled={settings.security.publicProfile} onChange={() => updateSetting('security','publicProfile',!settings.security.publicProfile)} label="Public Squad Profile" desc="Allow verified squadmates to see bio." />
                  <Toggle enabled={settings.security.shareLiveLocation} onChange={() => updateSetting('security','shareLiveLocation',!settings.security.shareLiveLocation)} label="Share Live Trek Location" desc="Auto-share checkpoint arrival." />
                </div>
                <div className="pt-6 border-t border-rose-500/20">
                  <div className="flex items-center justify-between p-5 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                    <div>
                      <h4 className="text-rose-400 font-bold text-sm flex items-center gap-2"><AlertTriangle size={16}/> Wipe Cache & Sign Out</h4>
                      <p className="text-xs text-white/50 mt-1">Clears all local settings and ends Firebase session.</p>
                    </div>
                    <button onClick={() => { localStorage.removeItem('tripmate_v2_enterprise_final'); logout(); }} className="bg-rose-500 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase cursor-pointer">Wipe Data</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
