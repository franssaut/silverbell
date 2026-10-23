import React from 'react';
import { Gift, ShieldCheck, Check, Sparkles, MessageCircle, Clock } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function PromoBanner() {
  const promoItems = [
    {
      title: "GRATIS AJB",
      desc: "Biaya Akta Jual Beli ditanggung pengembang 100%",
      badge: "Hemat 5 Juta+"
    },
    {
      title: "GRATIS SHGB",
      desc: "Sertifikat Hak Guna Bangunan atas nama Anda",
      badge: "Legalitas Terjamin"
    },
    {
      title: "GRATIS BPHTB",
      desc: "Pajak Bea Perolehan Hak Tanah & Bangunan Free",
      badge: "Hemat 10 Juta+"
    },
    {
      title: "KANOPİ CARPORT",
      desc: "Struktur kanopi minimalis modern sudah siap pakai",
      badge: "Siap Huni"
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 border border-gold-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Decorative corner light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Promo Header */}
          <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold border border-gold-400/30">
              <Gift className="w-3.5 h-3.5" />
              <span>SUPER DEAL 2026</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-serif">
              Beli Rumah Bebas Ribet, <br className="hidden sm:inline" />
              <span className="text-gold-300">Semua Biaya Legalitas Kami Tanggung!</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dapatkan paket promo istimewa tanpa biaya tersembunyi. Anda cukup siapkan booking fee dan DP ringan, urusan surat & legalitas kami selesaikan hingga terima kunci.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-amber-300 font-medium pt-1">
              <Clock className="w-4 h-4 animate-spin-slow" />
              <span>Kuota promo berlaku khusus 25 unit pertama</span>
            </div>
          </div>

          {/* Promo Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {promoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/50 border border-slate-700/60 hover:border-gold-500/40 transition-all group backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Action Button inside Banner */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Mau amankan promo ini sebelum kuota habis?</span>
              </div>
              <a
                href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Mas Frans (Rumah Batam), saya ingin mengklaim Promo Gratis Biaya AJB, SHGB, BPHTB untuk unit Cluster Silverbell. Mohon informasi syarat dan sisa kuota unitnya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Klaim Promo via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
