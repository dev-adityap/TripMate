import React, { useState } from 'react';
import { Eye, EyeOff, AlertTriangle, X } from 'lucide-react';

export function PasswordInput({
  label,
  value,
  onChange,
  placeholder = '••••••••',
  id,
  name,
  required = false,
  autoComplete = 'current-password'
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id || name}
          className="text-[10px] font-bold uppercase tracking-widest text-white/60 block"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id || name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none pr-12"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          title={showPassword ? 'Hide password' : 'Show password'}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-amber-300 transition-colors cursor-pointer"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Destructive Action',
  message,
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  loading = false
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-md bg-[#09090B]/95 backdrop-blur-3xl border border-rose-500/30 rounded-3xl p-7 shadow-[0_25px_70px_rgba(0,0,0,0.85)] animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0">
            <AlertTriangle className="text-rose-400" size={22} />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors cursor-pointer"
            aria-label="Close confirmation"
          >
            <X size={18} />
          </button>
        </div>

        <h3 className="text-lg font-extrabold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-6">{message}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-5 py-3 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer disabled:opacity-60"
          >
            {loading ? 'Processing...' : confirmLabel}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-5 py-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white/70 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
