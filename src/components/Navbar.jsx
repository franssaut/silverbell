import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Download, Home, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tipe Unit', href: '#tipe-unit' },
    { name: 'Denah & Arsitektur', href: '#denah' },
    { name: 'Video Tour', href: '#video-tour' },
    { name: 'Lokasi Strategis', href: '#lokasi' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl py-3'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-10 sm:h-12 w-auto flex items-center">
              <img
                src="/images/cluster-silverbell-logo.png"
                alt="Cluster Silverbell Logo"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow"
              />
            </div>
            <div className="hidden sm:block border-l border-slate-700/60 pl-3">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-400 block">
                Developed by
              </span>
              <span className="text-xs font-bold text-white tracking-wider">
                CIPTA GROUP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/brosur-cluster-silverbell.pdf"
              download="Brosur-Cluster-Silverbell-Batam.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition shadow-sm"
              title="Unduh Brosur Resmi PDF"
            >
              <Download className="w-3.5 h-3.5 text-gold-400" />
              <span>Brosur PDF</span>
            </a>
            <a
              href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                PROJECT_DETAILS.whatsappDefaultMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-600 shadow-md hover:shadow-gold-500/20 transition-all font-sans tracking-wide"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Hubungi Marketing</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                PROJECT_DETAILS.whatsappDefaultMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gold-400 text-slate-950 font-bold"
              aria-label="Hubungi WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-gold-400 py-2 border-b border-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="/brosur-cluster-silverbell.pdf"
              download="Brosur-Cluster-Silverbell-Batam.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg text-slate-200 bg-slate-800 border border-slate-700"
            >
              <Download className="w-4 h-4 text-gold-400" />
              Unduh Brosur Resmi PDF
            </a>
            <a
              href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                PROJECT_DETAILS.whatsappDefaultMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-gold-300 to-gold-500 font-bold"
            >
              <PhoneCall className="w-4 h-4" />
              Chat WhatsApp Marketing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
