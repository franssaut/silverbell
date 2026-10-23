import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Home, MessageSquare, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS, UNIT_TYPES } from '../data/projectData';

export default function BookingForm({ preselectedUnit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unitType: UNIT_TYPES[0].name,
    surveyDate: '',
    surveyTime: 'Pagi (09:00 - 12:00)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedUnit) {
      setFormData(prev => ({ ...prev, unitType: preselectedUnit }));
    }
  }, [preselectedUnit]);

  // Set default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const waMessage = `Halo Marketing Cluster Silverbell, saya ingin menjadwalkan survey lokasi dengan rincian berikut:
- Nama: ${formData.name}
- No. WhatsApp: ${formData.phone}
- Minat Tipe Unit: ${formData.unitType}
- Tanggal Survey: ${formData.surveyDate || 'Menyesuaikan jadwal marketing'}
- Waktu Kunjungan: ${formData.surveyTime}
${formData.notes ? `- Catatan: ${formData.notes}` : ''}

Mohon konfirmasi ketersediaan tim marketing untuk mendampingi di lokasi. Terima kasih.`;

    const waUrl = `https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-gold-400 bg-slate-900 px-3.5 py-1.5 rounded-full border border-gold-500/30 inline-block">
              BOOKING SURVEY SHOW UNIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Kunjungi Langsung Lokasi Cluster Silverbell
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Tim marketing CIPTA Group siap menyambut dan mendampingi Anda melihat langsung rumah contoh, spesifikasi material, dan lingkungan perumahan.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Nama Lengkap */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold-400" />
                  <span>Nama Lengkap *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition"
                />
              </div>

              {/* No WhatsApp */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Nomor WhatsApp Aktif *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 0812XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition"
                />
              </div>

              {/* Tipe Unit */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-gold-400" />
                  <span>Tipe Unit Diminati *</span>
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-gold-400 text-sm transition"
                >
                  {UNIT_TYPES.map(unit => (
                    <option key={unit.id} value={unit.name}>
                      {unit.name} ({unit.price})
                    </option>
                  ))}
                  <option value="Semua Tipe (Ingin Bandingkan di Lokasi)">
                    Semua Tipe (Ingin Bandingkan di Lokasi)
                  </option>
                </select>
              </div>

              {/* Tanggal Survey */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pilihan Tanggal Survey</span>
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={formData.surveyDate}
                  onChange={(e) => setFormData({ ...formData, surveyDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-gold-400 text-sm transition"
                />
              </div>

              {/* Waktu Kunjungan */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Perkiraan Waktu Kunjungan</span>
                </label>
                <select
                  value={formData.surveyTime}
                  onChange={(e) => setFormData({ ...formData, surveyTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-gold-400 text-sm transition"
                >
                  <option value="Pagi (09:00 - 12:00)">Pagi (09:00 - 12:00)</option>
                  <option value="Siang (13:00 - 15:00)">Siang (13:00 - 15:00)</option>
                  <option value="Sore (15:00 - 17:30)">Sore (15:00 - 17:30)</option>
                  <option value="Weekend (Sabtu / Minggu)">Weekend (Sabtu / Minggu)</option>
                </select>
              </div>

              {/* Catatan / Kebutuhan Khusus */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pertanyaan atau Catatan Tambahan (Opsional)</span>
                </label>
                <textarea
                  rows="2"
                  placeholder="Misal: Ingin info opsi 3 kamar tidur, simulasi KPR bank mandiri, atau penjemputan dari Top 100 Tembesi..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm transition"
                ></textarea>
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-600 transition shadow-xl text-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Konfirmasi Jadwal Survey via WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                *Data Anda aman dan hanya digunakan oleh tim resmi CIPTA Group untuk keperluan survey lokasi.
              </p>
            </div>

          </form>

          {/* Success Notification Bar */}
          {isSubmitted && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Terima kasih! Permintaan jadwal survey telah diarahkan ke WhatsApp marketing kami. Tim kami akan segera merespons Anda.
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
