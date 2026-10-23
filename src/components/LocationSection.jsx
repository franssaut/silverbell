import React, { useState } from 'react';
import { MapPin, Navigation, ShoppingBag, GraduationCap, Store, Activity, Landmark, ExternalLink, QrCode } from 'lucide-react';
import { STRATEGIC_LOCATIONS, PROJECT_DETAILS } from '../data/projectData';

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'access'

  const iconMap = {
    Navigation: <Navigation className="w-5 h-5 text-gold-500" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-emerald-500" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-500" />,
    Store: <Store className="w-5 h-5 text-amber-500" />,
    Hospital: <Activity className="w-5 h-5 text-red-500" />,
    Landmark: <Landmark className="w-5 h-5 text-purple-500" />,
  };

  return (
    <section id="lokasi" className="py-20 lg:py-28 bg-slate-100 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-block">
            LOKASI & AKSESIBILITAS STRATEGIS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Di Jantung Tembesi, Selangkah ke Mana Saja
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Terletak strategis di Jl. Trans Barelang Batam, hanya 5 menit dari Bundaran Barelang dan Mall Top 100 Tembesi. Menghubungkan pusat bisnis, kampus, rumah sakit, dan pariwisata.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Map Card (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Tab switch for map graphics */}
            <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-slate-300 w-fit">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'map' ? 'bg-slate-900 text-gold-400 shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Peta Denah Lokasi
              </button>
              <button
                onClick={() => setActiveTab('access')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'access' ? 'bg-slate-900 text-gold-400 shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Grafik Aksesibilitas Menit
              </button>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-300 shadow-xl overflow-hidden relative group">
              <div className="rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
                {activeTab === 'map' ? (
                  <img
                    src="/images/denah-lokasi.jpg"
                    alt="Denah Lokasi Cluster Silverbell Batam"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src="/images/IMG-20260930-WA0009.jpg"
                    alt="Waktu Tempuh Fasilitas Umum Cluster Silverbell"
                    className="w-full h-auto max-h-[460px] object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Bottom Quick Map Details */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="font-semibold">{PROJECT_DETAILS.location}</span>
                </div>
                <a
                  href={PROJECT_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gold-400 font-bold text-xs transition shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Strategic Destination Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Jarak Tempuh Fasilitas Utama:
            </h3>

            <div className="space-y-2.5">
              {STRATEGIC_LOCATIONS.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 shrink-0">
                      {iconMap[loc.icon] || <MapPin className="w-5 h-5 text-brand-700" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{loc.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{loc.desc}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs shrink-0 border border-emerald-200">
                    {loc.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Maps QR Note */}
            <div className="p-4 rounded-2xl bg-brand-900 text-white flex items-center gap-3.5 mt-4">
              <div className="w-10 h-10 rounded-xl bg-gold-400 text-slate-950 flex items-center justify-center shrink-0">
                <QrCode className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-gold-300 block">Ingin Survey Mandiri?</span>
                <span className="text-slate-300">
                  Gunakan Google Maps atau minta shareloc langsung dari tim marketing kami via WhatsApp.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
