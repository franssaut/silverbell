import React, { useState } from 'react';
import { Camera, Maximize2, X, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    {
      title: 'Rumah Siap Huni Suasana Senja',
      category: 'exterior',
      categoryLabel: 'Eksterior',
      src: '/images/IMG-20260809-WA0007(2).jpg',
      desc: 'Tampak depan rumah dengan kanopi modern, pencahayaan hangat, dan carport luas.'
    },
    {
      title: 'Desain 3D Tipe 30+',
      category: 'exterior',
      categoryLabel: 'Eksterior',
      src: '/images/type30-render.jpg',
      desc: 'Konsep minimalis kompak berpadu dengan taman hijau depan rumah.'
    },
    {
      title: 'Desain 3D Tipe 36+',
      category: 'exterior',
      categoryLabel: 'Eksterior',
      src: '/images/type36-render.jpg',
      desc: 'Tampak megah dengan jendela kaca lebar untuk pencahayaan optimal.'
    },
    {
      title: 'Aerial View Masterplan Kawasan',
      category: 'masterplan',
      categoryLabel: 'Masterplan',
      src: '/images/aerial-masterplan.jpg',
      desc: 'Tata ruang cluster asri terpadu dengan ruko komersial dan Central Park.'
    },
    {
      title: 'Blueprint CAD Arsitektur Resmi',
      category: 'blueprint',
      categoryLabel: 'Denah & CAD',
      src: '/images/IMG-20260827-WA0011.jpg',
      desc: 'Gambar kerja presisi rancangan arsitek PT Cipta Group.'
    },
    {
      title: 'Brosur & Konsep The Art of Modern Living',
      category: 'brochure',
      categoryLabel: 'Brosur',
      src: '/images/brosur-cover.jpg',
      desc: 'Materi publikasi resmi Cluster Silverbell CIPTA Group.'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-400 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-gold-500/30 inline-block">
            GALERI FOTO & DOKUMENTASI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Potret Keindahan Cluster Silverbell
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Lihat langsung detail arsitektur, lanskap kawasan, dan denah presisi Cluster Silverbell.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'Semua Koleksi' },
              { id: 'exterior', label: 'Foto Eksterior' },
              { id: 'masterplan', label: 'Masterplan' },
              { id: 'blueprint', label: 'Blueprint & CAD' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-400 text-slate-950 shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur text-[10px] font-bold text-gold-300 border border-slate-700">
                  {item.categoryLabel}
                </div>

                {/* Click to zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur flex items-center justify-center text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Bottom */}
              <div className="p-4 bg-slate-950">
                <h4 className="font-bold text-sm text-white group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl overflow-hidden flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[70vh] w-auto object-contain rounded-xl"
            />
            <div className="text-center mt-3 text-white">
              <h4 className="font-bold text-base text-gold-300">{lightboxImage.title}</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">{lightboxImage.desc}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
