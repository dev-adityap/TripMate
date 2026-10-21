import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp, MessageCircle, Phone, Mail, Copy, Check, X, Cookie, ShieldCheck } from 'lucide-react';

export default function GlobalUXEnhancer() {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(() => {
    return localStorage.getItem('tripmate_cookie_consent') === 'true';
  });
  const [supportOpen, setSupportOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // 1. Scroll Progress Bar & Back-to-Top Visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(totalScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Dynamic Page Titles & UTM Tracking on Route Change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const routeTitles = {
      '/': 'TripMate — Curated Indian Expeditions',
      '/home': 'Home — TripMate V2',
      '/discover': 'Discover Destinations — TripMate V2',
      '/map': 'Interactive India Map Explorer — TripMate V2',
      '/trips': 'Upcoming Batch Expeditions — TripMate V2',
      '/wishlist': 'Saved Wishlist — TripMate V2',
      '/create': 'Create Custom Trip — TripMate V2',
      '/workspaces': 'Squad Workspaces — TripMate V2',
      '/settings': 'Platform Settings — TripMate V2'
    };
    document.title = routeTitles[location.pathname] || 'TripMate V2 — Himalayan & Indian Expeditions';

    // Capture UTM parameters if present
    const params = new URLSearchParams(location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const capturedUtm = {};
    utmKeys.forEach((key) => {
      if (params.get(key)) capturedUtm[key] = params.get(key);
    });
    if (Object.keys(capturedUtm).length > 0) {
      sessionStorage.setItem('tripmate_utm_data', JSON.stringify(capturedUtm));
    }
  }, [location]);

  const handleAcceptCookies = () => {
    localStorage.setItem('tripmate_cookie_consent', 'true');
    setCookieAccepted(true);
  };

  const handleCopySupport = () => {
    navigator.clipboard.writeText('SOS-TRIPMATE-2026-IN');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="no-print">
      {/* Skip to Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber-400 focus:text-zinc-950 focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[90] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-emerald-400 transition-all duration-150 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Simple Cookie Consent Banner */}
      {!cookieAccepted && (
        <div className="fixed bottom-6 left-6 z-[80] max-w-sm bg-zinc-900/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-amber-400/15 text-amber-400 shrink-0">
              <Cookie size={20} />
            </div>
            <div>
              <h4 className="text-white font-extrabold text-sm">Offline Map & Session Cookies</h4>
              <p className="text-xs text-white/55 mt-1 leading-relaxed">
                We use local storage and essential cookies to cache high-altitude map tiles and remember your expedition preferences.
              </p>
              <div className="flex items-center gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={handleAcceptCookies}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleAcceptCookies}
                  className="px-3 py-2 bg-white/[0.06] hover:bg-white/[0.12] text-white/70 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Essential Only
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back-to-Top & Contact Support Stack */}
      <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3">
        {/* Support Popover Card */}
        {supportOpen && (
          <div className="w-80 bg-zinc-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl mb-2 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-amber-400" size={18} />
                <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                  24/7 Expedition Desk
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSupportOpen(false)}
                className="text-white/40 hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <a
                href="tel:+91123456789"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white transition-all"
              >
                <Phone className="text-amber-400 shrink-0" size={15} />
                <div>
                  <div className="font-bold">+91 123456789</div>
                  <div className="text-[10px] text-white/45">Click to Call Basecamp Dispatch</div>
                </div>
              </a>

              <a
                href="mailto:support@tripmate.in"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white transition-all"
              >
                <Mail className="text-amber-400 shrink-0" size={15} />
                <div>
                  <div className="font-bold">support@tripmate.in</div>
                  <div className="text-[10px] text-white/45">Click to Email TripCaptain Desk</div>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopySupport}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 font-bold transition-all cursor-pointer"
              >
                <span>SOS Code: SOS-TRIPMATE-2026</span>
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2.5">
          {showBackToTop && (
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to Top"
              className="w-12 h-12 rounded-full bg-zinc-900/90 hover:bg-white text-white hover:text-zinc-950 border border-white/15 flex items-center justify-center shadow-2xl transition-all cursor-pointer"
            >
              <ArrowUp size={18} />
            </button>
          )}

          <button
            type="button"
            onClick={() => setSupportOpen(!supportOpen)}
            title="24/7 Expedition Support"
            className="flex items-center gap-2 px-5 h-12 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(245,158,11,0.35)] transition-all cursor-pointer"
          >
            <MessageCircle size={17} />
            <span className="hidden sm:inline">SOS / Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}
