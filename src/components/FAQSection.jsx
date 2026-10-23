import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, PROJECT_DETAILS } from '../data/projectData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-block">
            TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Semua informasi penting seputar proses pembelian, legalitas, simulasi KPR, dan fasilitas Cluster Silverbell.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all bg-slate-50/60"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-brand-800 transition cursor-pointer"
                >
                  <span className="text-sm sm:text-base flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 animate-fadeIn">
                    <p className="pl-7">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-gold-300">
              Punya Pertanyaan Spesifik Lainnya?
            </h4>
            <p className="text-xs text-slate-300">
              Konsultan properti kami siap membantu menjawab pertanyaan Anda kapan saja tanpa dipungut biaya.
            </p>
          </div>
          <a
            href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              "Halo Admin Cluster Silverbell, saya ingin menanyakan beberapa hal mengenai perumahan Silverbell..."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shrink-0 transition shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Langsung ke WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
