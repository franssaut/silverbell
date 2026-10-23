import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Compass, Shield, Trees, Building } from 'lucide-react';

export default function VideoTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video-tour" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-400 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-gold-500/30 inline-block">
            VIRTUAL EXPERIENCE & MASTERPLAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Jelajahi Suasana Nyata Cluster Silverbell
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rasakan atmosfir asri, jalan lingkungan yang lega, dan kehangatan tata ruang kompleks sebelum Anda datang berkunjung langsung ke lokasi.
          </p>
        </div>

        {/* Video & Masterplan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Real Video Player Component (Col 7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <video
                ref={videoRef}
                src="/videos/cluster-silverbell-tour.mp4"
                poster="/images/IMG-20260809-WA0007(2).jpg"
                className="w-full h-[380px] sm:h-[480px] object-cover"
                loop
                playsInline
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Big Center Play Button Overlay when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 flex items-center justify-center text-slate-950 shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wider text-white bg-black/60 px-4 py-1.5 rounded-full border border-slate-700">
                    Putar Video Walkthrough
                  </span>
                </div>
              )}

              {/* Bottom Custom Video Controls */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-white text-xs opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                  <span className="text-[11px] text-slate-300 font-medium hidden sm:inline">
                    Video Walkthrough Cluster Silverbell
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gold-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                    CIPTA GROUP
                  </span>
                  <button
                    onClick={handleFullScreen}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
                    aria-label="Full Screen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Aerial Masterplan & Masterplan Points (Col 5) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Aerial Masterplan Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group relative">
              <img
                src="/images/aerial-masterplan.jpg"
                alt="Masterplan Kawasan Perumahan Cluster Silverbell Batam"
                className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-gold-400/40 text-[10px] font-bold text-gold-300">
                AERIAL MASTERPLAN 3D
              </div>

              <div className="absolute bottom-3 inset-x-3 text-white">
                <span className="text-xs font-serif italic text-gold-300 block">"Your future starts here"</span>
                <h4 className="text-sm font-bold text-slate-100">Konsep Kawasan Mandiri Terpadu</h4>
              </div>
            </div>

            {/* Masterplan Highlights List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-gold-400/20 text-gold-400 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Gerbang Utama & Pos Keamanan</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Sistem satu pintu (One-Gate) membatasi akses keluar-masuk orang luar untuk keamanan maksimal keluarga.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Taman Sentral (Green Open Space)</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Taman terbuka hijau di pusat cluster sebagai area bermain buah hati dan refreshing keluarga.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Kawasan Komersial Ruko Terdepan</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Deretan ruko modern di gerbang depan memenuhi kebutuhan minimarket, kuliner, dan jasa sehari-hari.
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
