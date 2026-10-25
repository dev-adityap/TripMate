import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HIDE_ON = ['/', '/home', '/login', '/register'];

export default function GlobalBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (HIDE_ON.includes(location.pathname)) return null;

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.16] hover:border-amber-400/40 transition-all cursor-pointer shadow-2xl"
    >
      <ArrowLeft size={18} />
    </button>
  );
}
