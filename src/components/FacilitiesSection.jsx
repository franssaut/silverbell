import React from 'react';
import { ShieldCheck, Trees, Car, Droplets, Building2, Sun, Sparkles } from 'lucide-react';
import { FACILITIES } from '../data/projectData';

export default function FacilitiesSection() {
  const iconMapping = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    Trees: <Trees className="w-6 h-6 text-brand-400" />,
    Car: <Car className="w-6 h-6 text-gold-400" />,
    Droplets: <Droplets className="w-6 h-6 text-blue-400" />,
    Building2: <Building2 className="w-6 h-6 text-amber-400" />,
    Sun: <Sun className="w-6 h-6 text-yellow-400" />,
  };

  return (
    <section id="fasilitas" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-400 bg-slate-900 px-3.5 py-1.5 rounded-full border border-gold-500/30 inline-block">
            FASILITAS & LINGKUNGAN CLUSTER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Kenyamanan Maksimal untuk Seluruh Keluarga
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Menghadirkan standar hidup berkualitas dengan tata lingkungan terencana, asri, aman, dan sarana pendukung lengkap.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-gold-500/40 transition-all hover:-translate-y-1 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMapping[facility.icon] || <Sparkles className="w-6 h-6 text-gold-400" />}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                {facility.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-900/60 to-slate-900 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-gold-300">
              Pengelolaan Lingkungan Berkelanjutan
            </h4>
            <p className="text-xs text-slate-300">
              Dikelola oleh tim estate management profesional untuk kebersihan, keamanan, dan perawatan taman berkala.
            </p>
          </div>
          <a
            href="/brosur-cluster-silverbell.pdf"
            download="Brosur-Cluster-Silverbell-Batam.pdf"
            className="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-slate-950 font-bold text-xs shrink-0 transition"
          >
            Download Brosur Spesifikasi Lengkap
          </a>
        </div>

      </div>
    </section>
  );
}
