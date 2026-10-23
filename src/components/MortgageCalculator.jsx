import React, { useState } from 'react';
import { Calculator, DollarSign, Calendar, Percent, ShieldCheck, MessageCircle, HelpCircle } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(215000000); // 215 Jt
  const [dpPercent, setDpPercent] = useState(10); // 10%
  const [tenorYears, setTenorYears] = useState(20); // 20 years
  const [interestRate, setInterestRate] = useState(5.5); // 5.5%

  // Calculations
  const dpAmount = (propertyPrice * dpPercent) / 100;
  const loanPrincipal = propertyPrice - dpAmount;
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = tenorYears * 12;

  const monthlyInstallment = Math.round(
    monthlyRate > 0
      ? (loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : loanPrincipal / totalMonths
  );

  const totalPayment = monthlyInstallment * totalMonths;
  const totalInterest = totalPayment - loanPrincipal;

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const generateWhatsAppKprMessage = () => {
    return `Halo Mas Frans (Rumah Batam) - Cluster Silverbell, saya sudah menghitung estimasi di website dengan rincian:
- Harga Properti: ${formatRupiah(propertyPrice)}
- DP (${dpPercent}%): ${formatRupiah(dpAmount)}
- Tenor: ${tenorYears} Tahun
- Estimasi Cicilan: ${formatRupiah(monthlyInstallment)} / bulan

Mohon bantuan konsultasi kelayakan berkas KPR saya ke Bank rekanan CIPTA Group. Terima kasih.`;
  };

  return (
    <section id="kpr" className="py-20 lg:py-28 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-block">
            SIMULASI CICILAN KPR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Hitung Estimasi Cicilan Bulanan Anda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sesuaikan uang muka (DP) dan jangka waktu tenor sesuai kenyamanan finansial keluarga. Proses KPR dibantu sepenuhnya oleh tim profesional CIPTA Group.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Input Sliders (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Price Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Harga Properti:</span>
                  <span className="font-bold text-gold-400 text-sm sm:text-base">{formatRupiah(propertyPrice)}</span>
                </div>
                <input
                  type="range"
                  min={200000000}
                  max={450000000}
                  step={5000000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Rp 200 Juta (Tipe 30+)</span>
                  <span>Rp 450 Juta (Hook/Custom)</span>
                </div>
              </div>

              {/* DP Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Uang Muka (DP {dpPercent}%):</span>
                  <span className="font-bold text-emerald-400 text-sm sm:text-base">{formatRupiah(dpAmount)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={30}
                  step={5}
                  value={dpPercent}
                  onChange={(e) => setDpPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>0% (Promo DP 0)</span>
                  <span>10%</span>
                  <span>20%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Tenor Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Jangka Waktu (Tenor):</span>
                  <span className="font-bold text-gold-400 text-sm sm:text-base">{tenorYears} Tahun ({totalMonths} Bulan)</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={25}
                  step={5}
                  value={tenorYears}
                  onChange={(e) => setTenorYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>5 Tahun</span>
                  <span>10 Tahun</span>
                  <span>15 Tahun</span>
                  <span>20 Tahun</span>
                  <span>25 Tahun</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Estimasi Suku Bunga KPR Bank:</span>
                  <span className="font-bold text-white text-sm">{interestRate}% per tahun</span>
                </div>
                <input
                  type="range"
                  min={3.5}
                  max={9.0}
                  step={0.25}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>3.5% (Promo Fix)</span>
                  <span>5.5% (Rata-rata)</span>
                  <span>9.0% (Floating)</span>
                </div>
              </div>

            </div>

            {/* Result Box (Col 5) */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-gold-500/30 flex flex-col justify-between space-y-6 shadow-inner">
              
              <div>
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest block mb-1">
                  ESTIMASI CICILAN ANDA
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {formatRupiah(monthlyInstallment)}
                  <span className="text-xs text-slate-400 font-normal"> / bulan</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  *Perhitungan merupakan estimasi simulasi suku bunga anuitas tetap tahun pertama.
                </p>
              </div>

              {/* Detail Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Pokok Pinjaman KPR:</span>
                  <span className="font-semibold text-white">{formatRupiah(loanPrincipal)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Uang Muka (DP):</span>
                  <span className="font-semibold text-emerald-400">{formatRupiah(dpAmount)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Biaya Legalitas (AJB/SHGB/BPHTB):</span>
                  <span className="font-bold text-emerald-400">GRATIS (Rp 0,-)</span>
                </div>
              </div>

              {/* Bank Partners */}
              <div className="pt-2 text-[10px] text-slate-400">
                <span className="block mb-1 font-semibold text-slate-300">Bank Rekanan KPR:</span>
                <div className="flex flex-wrap gap-2 text-[10px] text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Bank Mandiri</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">BRI</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">BTN</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">BNI</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">BSI</span>
                </div>
              </div>

              {/* Consult Action */}
              <a
                href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  generateWhatsAppKprMessage()
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-600 transition shadow-lg text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasikan KPR Ini via WhatsApp</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
