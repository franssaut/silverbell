import React from 'react';
import { Sparkles, CheckCircle2, Play, Calendar, ShieldCheck, ArrowRight, MapPin, Tag } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function Hero({ onOpenVideoModal, onScrollToBooking }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-brand-950 text-white overflow-hidden flex items-center">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-gold-500/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold-300">
                PROMO PERDANA 2026 • TEMBESI BARELANG BATAM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              <span className="block font-serif text-slate-100 italic">The Art of Modern Living</span>
              <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent mt-1">
                Cluster Silverbell Batam
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Wujudkan impian hunian modern bergaya minimalis tropis di lokasi emas Tembesi Barelang Batam. 
              Dilengkapi kanopi carport siap huni, lingkungan asri berkonsep cluster satu pintu, dan kemudahan akses ke segala kebutuhan harian.
            </p>

            {/* Highlight Badges / Freebies */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <Tag className="w-5 h-5 text-gold-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Harga Mulai</span>
                  <span className="text-sm font-bold text-white">200 Jutaan</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-emerald-500/40 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">100% GRATIS</span>
                  <span className="text-xs font-bold text-white">AJB, SHGB, BPHTB</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Akses Cepat</span>
                  <span className="text-sm font-bold text-white">5 Mnt Barelang</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onScrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-600 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all text-sm group"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwalkan Survey Lokasi</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#video-tour"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 shadow-sm transition-all text-sm group"
              >
                <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-slate-950 transition">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Tonton Video Tour</span>
              </a>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pengembang CIPTA Group
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sertifikat Aman & Legalitas Terjamin
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-400/30 to-brand-500/30 rounded-3xl blur-md"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 bg-slate-900 group">
                <img
                  src="/images/IMG-20260809-WA0007(2).jpg"
                  alt="Rumah Cluster Silverbell Batam Siap Huni dengan Carport dan Kanopi"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-gold-400/50 text-xs font-semibold text-gold-300 shadow">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Foto Asli Show Unit</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block">
                        Tipe 30+ & 36+ Minimalis
                      </span>
                      <h4 className="font-bold text-base text-slate-100">
                        Rumah Modern + Kanopi & Carport
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Cicilan Mulai</span>
                      <span className="text-base font-extrabold text-emerald-400">1,4 Jt-an/bln</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Freebie Badge Tag (Sticker Style) */}
              <div className="absolute -bottom-5 -left-5 sm:-left-7 bg-gradient-to-br from-emerald-600 to-brand-800 text-white p-3.5 rounded-2xl shadow-xl border border-emerald-400/50 animate-float-slow max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-gold-300" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-gold-300">Super Promo</span>
                </div>
                <p className="text-xs font-extrabold leading-tight">
                  GRATIS BIAYA AJB, SHGB & BPHTB!
                </p>
              </div>

              {/* Developer Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-950/90 border border-slate-700/80 p-2.5 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2">
                <img
                  src="/images/cipta-group-logo.png"
                  alt="Developed by CIPTA Group"
                  className="h-6 w-auto object-contain"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Feature Numbers Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">200 Jt-an</div>
            <div className="text-xs text-slate-400 mt-1">Harga Sangat Terjangkau</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Rp 0,-</div>
            <div className="text-xs text-slate-400 mt-1">Biaya AJB, SHGB, BPHTB</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">2 s/d 3</div>
            <div className="text-xs text-slate-400 mt-1">Pilihan Kamar Tidur</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">5 Menit</div>
            <div className="text-xs text-slate-400 mt-1">Ke Simpang Barelang & Mall</div>
          </div>
        </div>

      </div>
    </section>
  );
}
