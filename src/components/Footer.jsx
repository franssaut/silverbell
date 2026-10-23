import React from 'react';
import { MapPin, Phone, Mail, Instagram, Globe, Download, ArrowUp, ShieldCheck } from 'lucide-react';
import { PROJECT_DETAILS, UNIT_TYPES } from '../data/projectData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Bio (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/cluster-silverbell-logo.png"
                alt="Cluster Silverbell Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-white">Cluster Silverbell</strong> adalah kawasan hunian modern minimalis eksklusif persembahan <strong className="text-gold-400">CIPTA Group</strong> di kawasan strategis Tembesi Barelang, Kota Batam.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 text-xs pt-1 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Promo Bebas Biaya AJB, SHGB & BPHTB</span>
            </div>

            <div className="pt-2">
              <a
                href="/brosur-cluster-silverbell.pdf"
                download="Brosur-Cluster-Silverbell-Batam.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gold-400 border border-slate-800 text-xs font-bold transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Brosur Resmi PDF</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-gold-400 transition">Beranda</a></li>
              <li><a href="#tipe-unit" className="hover:text-gold-400 transition">Tipe Unit</a></li>
              <li><a href="#denah" className="hover:text-gold-400 transition">Denah Arsitek</a></li>
              <li><a href="#video-tour" className="hover:text-gold-400 transition">Video Tour</a></li>
              <li><a href="#lokasi" className="hover:text-gold-400 transition">Lokasi Strategis</a></li>
              <li><a href="#fasilitas" className="hover:text-gold-400 transition">Fasilitas</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Unit Types (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Tipe Rumah</h4>
            <ul className="space-y-2">
              {UNIT_TYPES.map(unit => (
                <li key={unit.id}>
                  <a href="#tipe-unit" className="hover:text-gold-400 transition block">
                    <span className="font-semibold text-slate-300">{unit.name}</span>
                    <span className="block text-[10px] text-slate-500">{unit.price}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#denah" className="text-gold-400/80 hover:text-gold-400 transition text-[11px] block pt-1">
                  ★ Opsi 3 Kamar Tidur
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Kontak & Lokasi</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Jl. Trans Barelang (5 Menit dari Bundaran Simpang Barelang), Tembesi, Kota Batam.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    PROJECT_DETAILS.whatsappDefaultMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  +62 823-9105-9216 (Frans - Rumah Batam)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://instagram.com/ciptagroup.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  @ciptagroup.id
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={PROJECT_DETAILS.developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  www.ciptagroup.co.id
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Cluster Silverbell Batam. Developed by CIPTA Group. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>The Art of Modern Living</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-gold-400 border border-slate-800 transition flex items-center gap-1.5 cursor-pointer"
              aria-label="Kembali ke Atas"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
