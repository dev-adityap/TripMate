import React, { useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react';

const TOAST_TYPES = {
  success: { icon: CheckCircle, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20' },
  error: { icon: AlertCircle, color: 'text-rose-400 bg-rose-500/10 border-rose-400/20' },
  info: { icon: Info, color: 'text-sky-400 bg-sky-500/10 border-sky-400/20' },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <>
      {children}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => {
          const { Icon: IconComp, color } = TOAST_TYPES[toast.type] || TOAST_TYPES.info;
          return (
            <div
              key={toast.id}
              onClick={() => removeToast(toast.id)}
              className={`pointer-events-auto flex items-center gap-3 w-full max-w-xs bg-white/[0.95] border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-zinc-950 animate-in fade-in slide-in-from-right-2 duration-300 hover:bg-white cursor-pointer transition-colors`}
            >
              <div className={`shrink-0 ${color}`}>
                <IconComp size={18} />
              </div>
              <div className="flex-1 text-sm font-medium leading-snug">{toast.message}</div>
              <button
                onClick={(e) => { e.stopPropagation(); removeToast(toast.id); }}
                className="text-zinc-400 hover:text-zinc-600"
                aria-label="Dismiss toast"
              >
                <span className="sr-only">Dismiss</span>
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration);
  };
  const removeToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));
  return { toasts, addToast, removeToast };
}

export default ToastProvider;
