import React, { useState } from 'react';
import { Bed, Bath, Car, Maximize2, CheckCircle2, ChevronRight, MessageCircle, FileText, Sparkles, Layers } from 'lucide-react';
import { UNIT_TYPES, PROJECT_DETAILS } from '../data/projectData';

export default function UnitShowcase({ onSelectUnitForBooking }) {
  const [activeUnitId, setActiveUnitId] = useState(UNIT_TYPES[0].id);
  const [viewMode, setViewMode] = useState('render'); // 'render' | 'denah' | 'blueprint'
  const [bedroomOption, setBedroomOption] = useState('2br'); // '2br' | '3br'

  const activeUnit = UNIT_TYPES.find((u) => u.id === activeUnitId) || UNIT_TYPES[0];

  return (
    <section id="tipe-unit" className="py-20 lg:py-28 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-block">
            PILIHAN TIPE UNIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Desain Modern, Fungsional & Siap Berkembang
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Setiap unit Cluster Silverbell dirancang dengan tata ruang efisien, plafon tinggi berhawa sejuk, pencahayaan alami melimpah, dan sisa lahan belakang yang fleksibel.
          </p>

          {/* Unit Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300">
              {UNIT_TYPES.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => {
                    setActiveUnitId(unit.id);
                    setViewMode('render');
                  }}
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                    activeUnitId === unit.id
                      ? 'bg-slate-900 text-gold-400 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{unit.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Unit Showcase Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Panel (Left / Top) */}
            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              
              {/* Top View Mode Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 relative z-10">
                <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setViewMode('render')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      viewMode === 'render'
                        ? 'bg-brand-600 text-white shadow'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    3D Render Eksterior
                  </button>
                  <button
                    onClick={() => setViewMode('denah')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      viewMode === 'denah'
                        ? 'bg-brand-600 text-white shadow'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Denah Berwarna
                  </button>
                  <button
                    onClick={() => setViewMode('blueprint')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      viewMode === 'blueprint'
                        ? 'bg-brand-600 text-white shadow'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Blueprint Arsitek
                  </button>
                </div>

                {/* 2BR vs 3BR Switcher */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
                  <span className="text-[10px] text-slate-400 font-medium px-2">Varian:</span>
                  <button
                    onClick={() => setBedroomOption('2br')}
                    className={`px-2.5 py-1 rounded-lg font-bold ${
                      bedroomOption === '2br' ? 'bg-gold-400 text-slate-950' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    2 Kamar
                  </button>
                  <button
                    onClick={() => setBedroomOption('3br')}
                    className={`px-2.5 py-1 rounded-lg font-bold ${
                      bedroomOption === '3br' ? 'bg-gold-400 text-slate-950' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    3 Kamar (Opsi)
                  </button>
                </div>
              </div>

              {/* Display Image Area */}
              <div className="relative my-auto rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 min-h-[360px] sm:min-h-[440px] flex items-center justify-center group">
                {viewMode === 'render' && (
                  <img
                    src={activeUnit.renderImg}
                    alt={`Render 3D ${activeUnit.name}`}
                    className="w-full h-full max-h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {viewMode === 'denah' && (
                  <div className="p-4 w-full h-full flex flex-col items-center justify-center bg-slate-900/50">
                    <img
                      src={activeUnit.denahImg}
                      alt={`Denah Tata Ruang ${activeUnit.name}`}
                      className="max-h-[420px] w-auto object-contain rounded-xl shadow-lg"
                    />
                    <span className="text-[11px] text-gold-300 mt-2 font-medium tracking-wide">
                      {bedroomOption === '3br' ? '★ Tersedia Pilihan Desain 3 Kamar Tidur' : 'Denah Standar 2 Kamar Tidur + Sisa Tanah'}
                    </span>
                  </div>
                )}
                {viewMode === 'blueprint' && (
                  <div className="p-4 w-full h-full flex flex-col items-center justify-center bg-white rounded-xl">
                    <img
                      src={bedroomOption === '3br' ? '/images/IMG-20260731-WA0030.jpg' : activeUnit.cadBlueprint}
                      alt={`CAD Blueprint ${activeUnit.name}`}
                      className="max-h-[400px] w-auto object-contain"
                    />
                    <span className="text-[11px] text-slate-600 mt-2 font-semibold">
                      {bedroomOption === '3br' ? 'Denah CAD Arsitek Opsi 3 Kamar Tidur' : 'Denah CAD Arsitek Standar (2 Kamar Tidur)'}
                    </span>
                  </div>
                )}

                {/* Floating zoom hint */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-slate-300 text-[10px] flex items-center gap-1 backdrop-blur">
                  <Layers className="w-3 h-3 text-gold-400" />
                  <span>{activeUnit.name} • {bedroomOption === '3br' ? '3 Kamar' : '2 Kamar'}</span>
                </div>
              </div>

              {/* Bottom Quick Feature Tagline */}
              <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 mt-4">
                <span>{activeUnit.subtitle}</span>
                <span className="text-gold-400 font-semibold">Pondasi Beton Bertulang</span>
              </div>

            </div>

            {/* Specifications & Details Panel (Right) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                
                {/* Header Price & Title */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
                      {activeUnit.name}
                    </h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      Best Seller
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">{activeUnit.subtitle}</p>

                  <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-brand-700 font-semibold uppercase tracking-wider block">
                        Harga Perdana
                      </span>
                      <span className="text-2xl font-black text-brand-900">
                        {activeUnit.price}
                      </span>
                    </div>
                    <div className="text-right border-l border-brand-200 pl-4">
                      <span className="text-[10px] text-slate-500 block">Est. Cicilan KPR</span>
                      <span className="text-sm font-bold text-emerald-600">
                        {activeUnit.monthlyInstallment}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Icon Specs */}
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <Bed className="w-4 h-4 text-brand-700 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-800 block">2-3 Kamar</span>
                    <span className="text-[10px] text-slate-500">Tidur</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <Bath className="w-4 h-4 text-brand-700 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-800 block">1 Kamar</span>
                    <span className="text-[10px] text-slate-500">Mandi</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <Car className="w-4 h-4 text-brand-700 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-800 block">1 Carport</span>
                    <span className="text-[10px] text-slate-500">+ Kanopi</span>
                  </div>
                </div>

                {/* Detail Specifications Table */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Spesifikasi Teknis Bangunan
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Luas Bangunan:</span>
                      <span className="font-semibold text-slate-800">{activeUnit.specs.luasBangunan}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Luas Tanah:</span>
                      <span className="font-semibold text-slate-800">{activeUnit.specs.luasTanah}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Rangka Atap:</span>
                      <span className="font-semibold text-slate-800">{activeUnit.specs.rangkaAtap}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Kusen Jendela:</span>
                      <span className="font-semibold text-slate-800">{activeUnit.specs.kusen}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Daya Listrik:</span>
                      <span className="font-semibold text-slate-800">{activeUnit.specs.listrik}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Sumber Air:</span>
                      <span className="font-semibold text-slate-800">{activeUnit.specs.air}</span>
                    </div>
                  </div>
                </div>

                {/* Key Advantages List */}
                <div className="space-y-1.5 pt-1">
                  {activeUnit.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2.5 border-t border-slate-100 mt-6">
                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    `Halo Marketing Cluster Silverbell, saya ingin info ketersediaan unit ${activeUnit.name} (${activeUnit.price}) dan simulasi KPR-nya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-gold-400 font-bold text-sm shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya Unit {activeUnit.name} via WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectUnitForBooking(activeUnit.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                >
                  <span>Pilih Unit Ini untuk Survey Lokasi</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
