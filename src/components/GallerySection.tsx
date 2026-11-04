import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/trilogyData';
import type { GalleryItem } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter || item.gameId === filter);

  // Lightbox keyboard navigation
  const currentIndex = activeItem ? filteredItems.findIndex((it) => it.id === activeItem.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      soundEngine.playClickSound();
      setActiveItem(filteredItems[currentIndex + 1]);
    } else {
      soundEngine.playClickSound();
      setActiveItem(filteredItems[0]); // Loop back
    }
  }, [currentIndex, filteredItems]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      soundEngine.playClickSound();
      setActiveItem(filteredItems[currentIndex - 1]);
    } else {
      soundEngine.playClickSound();
      setActiveItem(filteredItems[filteredItems.length - 1]); // Loop back
    }
  }, [currentIndex, filteredItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, handleNext, handlePrev]);

  return (
    <section id="galeria" className="relative py-28 bg-[#08090D] overflow-hidden">
      
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF8A3D]" />
              EDITORIAL VISUAL • ARTE & FOTOGRAFIA
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              GALERIA <span className="text-[#FF8A3D]">VISUAL</span>
            </h2>
            <p className="font-manrope text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Uma curadoria estética inspirada em revistas de design. Dos supercarros em Washington Beach ao asfalto molhado de Liberty City.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#12131B] p-1.5 rounded-2xl border border-white/10">
            {[
              { id: 'all', label: 'TODAS' },
              { id: 'vice-city', label: 'VICE CITY' },
              { id: 'san-andreas', label: 'SAN ANDREAS' },
              { id: 'gta3', label: 'GTA III' },
              { id: 'veiculos', label: 'SUPERCARROS' },
              { id: 'cidades', label: 'CIDADES' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundEngine.playClickSound();
                  setFilter(tab.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-all ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-[#FF3CAC] to-[#FF8A3D] text-white font-bold shadow-[0_0_15px_rgba(255,60,172,0.5)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isSpan2 = idx === 0 || idx === 3;

            return (
              <div
                key={item.id}
                onClick={() => {
                  soundEngine.playClickSound();
                  setActiveItem(item);
                }}
                className={`group relative rounded-2xl overflow-hidden bg-[#12131B] border border-white/10 hover:border-[#FF3CAC]/60 transition-all duration-500 cursor-pointer ${
                  isSpan2 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <ZoomIn size={18} />
                </div>

                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono-tech text-white uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Caption and Title at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight drop-shadow-md">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-300 font-manrope line-clamp-2">
                    {item.caption}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          {/* Main Lightbox Container */}
          <div
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs font-mono-tech text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#FF3CAC]/20 text-[#FF3CAC] border border-[#FF3CAC]/40 font-bold uppercase">
                  {activeItem.tag}
                </span>
                <span className="hidden sm:inline">
                  {currentIndex + 1} de {filteredItems.length} FOTOGRAFIAS
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-zinc-500">
                  USE AS SETAS OU ESC PARA SAIR
                </span>
                <button
                  onClick={() => {
                    soundEngine.playClickSound();
                    setActiveItem(null);
                  }}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Fechar galeria"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Image Preview with Navigation Chevrons */}
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/50 border border-white/10">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-[#FF3CAC] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all shadow-xl"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-[#FF3CAC] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all shadow-xl"
                aria-label="Próxima foto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full mt-4 text-center sm:text-left">
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
                {activeItem.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-300 font-manrope max-w-3xl">
                {activeItem.caption}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
