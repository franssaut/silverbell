import React, { useState } from 'react';
import { Layers, Maximize2, Check, ZoomIn, Eye, Sparkles } from 'lucide-react';

export default function FloorPlanViewer() {
  const [selectedPlan, setSelectedPlan] = useState('2br'); // '2br' | '3br'
  const [activeRoom, setActiveRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = {
    '2br': {
      title: 'Denah Standar 2 Kamar Tidur',
      subtitle: 'Ideal untuk pasangan muda, keluarga baru, atau hunian investasi pertama',
      image: '/images/IMG-20260827-WA0011.jpg',
      rooms: [
        { name: 'Carport & Taman Depan', size: '3.0 x 4.5 m', desc: 'Rabat beton rapi dengan kapasitas 1 mobil & motor' },
        { name: 'Teras Depan', size: '3.0 x 1.2 m', desc: 'Area sambut berkanopi teduh untuk bersantai sore' },
        { name: 'Ruang Tamu & Keluarga', size: '3.0 x 3.5 m', desc: 'Konsep open-space dengan plafon tinggi & sirkulasi sejuk' },
        { name: 'Kamar Tidur Utama', size: '3.0 x 3.0 m', desc: 'Bukaan jendela lebar menghadap taman belakang' },
        { name: 'Kamar Tidur Anak', size: '3.0 x 2.8 m', desc: 'Pencahayaan alami dari sisi depan' },
        { name: 'Dapur & Ruang Makan', size: '3.0 x 2.5 m', desc: 'Meja dapur keramik lengkap dengan kitchen sink' },
        { name: 'Kamar Mandi / WC', size: '1.5 x 1.5 m', desc: 'Kloset duduk modern, shower & keramik lantai anti selip' },
        { name: 'Taman / Sisa Tanah Belakang', size: '3.0 x 2.0 m', desc: 'Sirkulasi udara segar & area jemur / perluasan masa depan' }
      ]
    },
    '3br': {
      title: 'Denah Opsi 3 Kamar Tidur',
      subtitle: 'Dirancang cerdas untuk keluarga berkembang yang membutuhkan kamar ekstra',
      image: '/images/IMG-20260731-WA0030.jpg',
      rooms: [
        { name: 'Carport & Teras', size: '3.0 x 4.0 m', desc: 'Akses kendaraan langsung dengan kanopi modern' },
        { name: 'Ruang Tamu & Keluarga', size: '3.0 x 3.5 m', desc: 'Tata ruang efisien untuk kehangatan kumpul keluarga' },
        { name: 'Kamar Tidur Utama', size: '3.0 x 3.0 m', desc: 'Privasi maksimal untuk kepala keluarga' },
        { name: 'Kamar Tidur 2', size: '3.0 x 2.5 m', desc: 'Kamar anak dengan bukaan sirkulasi udara' },
        { name: 'Kamar Tidur 3', size: '3.0 x 2.5 m', desc: 'Bisa difungsikan sebagai ruang kerja / kamar tamu' },
        { name: 'Dapur Minimalis', size: '2.5 x 2.0 m', desc: 'Efisien dan mudah dijangkau dari ruang makan' },
        { name: 'Kamar Mandi / WC', size: '1.5 x 1.5 m', desc: 'Sanitair lengkap berstandar modern' }
      ]
    }
  };

  const currentPlan = plans[selectedPlan];

  return (
    <section id="denah" className="py-20 lg:py-28 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-block">
            ARSITEKTUR & TATA RUANG
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Denah Detail & Blueprint Resmi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eksplorasi blueprint CAD rancangan arsitek CIPTA Group. Fleksibilitas tinggi dengan opsi denah 2 kamar tidur standar atau pengembangan 3 kamar tidur.
          </p>

          {/* Toggle buttons */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setSelectedPlan('2br')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedPlan === '2br'
                    ? 'bg-slate-900 text-gold-400 shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Denah 2 Kamar (Standar)</span>
              </button>
              <button
                onClick={() => setSelectedPlan('3br')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedPlan === '3br'
                    ? 'bg-slate-900 text-gold-400 shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Denah 3 Kamar (Opsi Tambahan)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Blueprint Viewer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Blueprint Image Preview Frame */}
          <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-2xl relative group">
            <div className="relative rounded-2xl overflow-hidden bg-white flex items-center justify-center min-h-[460px] p-2">
              <img
                src={currentPlan.image}
                alt={currentPlan.title}
                className="max-h-[500px] w-auto object-contain cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-300"
                onClick={() => setIsModalOpen(true)}
              />

              {/* Click to zoom overlay pill */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-950 text-white text-xs font-semibold backdrop-blur border border-slate-700 shadow transition"
              >
                <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                <span>Klik untuk Zoom HD</span>
              </button>

              {/* Watermark badge */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 text-gold-400 text-[11px] font-bold border border-slate-800">
                <span>CIPTA GROUP ARCHITECTURAL PLAN</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
              <span>{currentPlan.title}</span>
              <span className="text-gold-400">Skala Arsitektur Akurat</span>
            </div>
          </div>

          {/* Interactive Room Breakdown & Dimensions (Right) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest block mb-1">
                Kompilasi Ruang
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                {currentPlan.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {currentPlan.subtitle}
              </p>
            </div>

            {/* Room List Accordion / Cards */}
            <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
              {currentPlan.rooms.map((room, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveRoom(idx)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    activeRoom === idx
                      ? 'bg-brand-50/80 border-brand-400 shadow-sm'
                      : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-slate-900 text-gold-400 text-[10px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      {room.name}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-brand-700 bg-white px-2 py-0.5 rounded-md border border-brand-200">
                      {room.size}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 pl-7">{room.desc}</p>
                </div>
              ))}
            </div>

            {/* Note badge */}
            <div className="p-3 rounded-xl bg-gold-100/60 border border-gold-300/80 text-[11px] text-amber-900 flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Tata ruang dapat disesuaikan dengan kebutuhan renovasi masa depan tanpa merusak struktur utama.
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white p-4 rounded-3xl shadow-2xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition font-bold"
            >
              ✕
            </button>
            <div className="text-center mb-2">
              <h4 className="font-bold text-slate-900 text-lg">{currentPlan.title}</h4>
              <p className="text-xs text-slate-500">Gambar CAD Blueprint Resolusi Tinggi</p>
            </div>
            <img
              src={currentPlan.image}
              alt={currentPlan.title}
              className="max-h-[75vh] w-auto mx-auto object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
