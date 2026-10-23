import React from 'react';
import { Award, ShieldCheck, Users, CheckCircle2, Globe, Instagram, ExternalLink } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function DeveloperSection() {
  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Developer Brand Identity */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-gold-400 block">
                PENGEMBANG TERPERCAYA
              </span>
              
              <div className="inline-block p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <img
                  src="/images/cipta-group-logo.png"
                  alt="CIPTA Group Batam"
                  className="h-14 sm:h-16 w-auto object-contain mx-auto lg:mx-0"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                PT CIPTA GROUP
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Salah satu pelopor pengembang properti terkemuka dan paling berpengalaman di Kota Batam. Berkomitmen menghadirkan hunian berkualitas tinggi, bernilai investasi prospektif, dengan tata kelola legalitas yang aman dan transparan.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={PROJECT_DETAILS.developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition"
                >
                  <Globe className="w-4 h-4" />
                  <span>ciptagroup.co.id</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href="https://instagram.com/ciptagroup.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 hover:text-pink-300 transition"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{PROJECT_DETAILS.developerInstagram}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

            </div>

            {/* Right Trust Indicators & Credentials */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/20 text-gold-400 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Rekam Jejak Teruji</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Telah sukses membangun dan menyerahterimakan ribuan unit hunian serta ruko di penjuru Kota Batam.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Legalitas 100% Aman</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Alokasi UWTO jelas, perizinan IMB/PBG lengkap, dan sertifikat SHGB siap pecah per kavling untuk pembeli.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Didukung Bank Ternama</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Kemitraan resmi dengan bank BUMN & swasta besar: Mandiri, BRI, BTN, BNI, dan BSI Syariah.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Estate Management</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pengelolaan kebersihan lingkungan, keamanan, dan sarana utilitas cluster dipelihara secara berkesinambungan.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
