import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-200 relative animate-fadeIn text-xs">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Frans (Rumah Batam) - Cluster Silverbell</span>
          </div>

          <p className="text-slate-600 leading-snug">
            Halo! Saya <strong>Frans</strong> siap membantu info promo <strong className="text-brand-900">Gratis AJB, SHGB & BPHTB</strong> serta cek unit tersedia. Hubungi via WA yuk!
          </p>

          {/* Little arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
        </div>
      )}

      {/* Floating Action WhatsApp Button */}
      <a
        href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
          PROJECT_DETAILS.whatsappDefaultMsg
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 relative group"
        aria-label="Chat WhatsApp Marketing"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
