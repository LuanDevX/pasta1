import React, { useState } from 'react';
import { ChevronDown, Compass, Flame, Film } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';

interface HeroSectionProps {
  onExploreViceCity: () => void;
  onExploreTrilogy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreViceCity,
  onExploreTrilogy,
}) => {
  const [enableScanlines, setEnableScanlines] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-0"
    >
      {/* Background Image with Cinematic Color Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/vice-city-hero-sunset.jpg`}
          alt="Vice City Outrun Sunset com Carro Clássico e Palmeiras"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100"
        />

        {/* Cinematic Vignette & Deep Gradient Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/65 to-[#08090D]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/80 via-transparent to-[#08090D]/80" />
        
        {/* Neon Light Flares */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FF3CAC]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#FF8A3D]/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Optional Retro VHS / CRT Scanlines */}
        {enableScanlines && <div className="absolute inset-0 scanlines z-10 opacity-75" />}
      </div>

      {/* Grid Pattern at Horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-48 retro-grid opacity-30 z-0 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Retro scanline & grain badge toggle */}
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12131B]/80 backdrop-blur-md border border-[#FF3CAC]/40 text-[#FF3CAC] text-xs font-mono-tech tracking-widest uppercase shadow-[0_0_15px_rgba(255,60,172,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#FF3CAC] animate-ping" />
            <span>ESTRÉIA 1986 // OCEAN DRIVE // FLORIDIANA</span>
          </div>

          <button
            onClick={() => {
              soundEngine.playClickSound();
              setEnableScanlines(!enableScanlines);
            }}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-tech border transition-all ${
              enableScanlines
                ? 'bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]'
                : 'bg-black/50 text-zinc-400 border-white/10 hover:text-white'
            }`}
            title="Alternar filtro CRT / Linhas de TV retrô"
          >
            <Film size={12} />
            <span>{enableScanlines ? 'CRT ON' : 'CRT RETRÔ'}</span>
          </button>
        </div>

        {/* Editorial Subtitle Tagline */}
        <p className="font-mono-tech text-sm sm:text-base md:text-lg tracking-[0.35em] text-[#00E5FF] uppercase mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]">
          GRAND THEFT AUTO TRILOGY • CRIME NEVER SLEEPS
        </p>

        {/* Main Giant Hero Title */}
        <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight leading-[0.88] text-white uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] select-none">
          WELCOME TO <br />
          <span className="bg-gradient-to-r from-[#FF3CAC] via-[#FF8A3D] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,60,172,0.6)]">
            VICE CITY
          </span>
        </h1>

        {/* Punchy Catchphrase */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3">
          <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#FF3CAC]" />
          <h2 className="font-retro text-2xl sm:text-3xl md:text-4xl text-[#FFD166] tracking-wider uppercase drop-shadow-[0_0_15px_rgba(255,209,102,0.7)]">
            THE NIGHT IS YOURS.
          </h2>
          <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00E5FF]" />
        </div>

        {/* Trilogy Editorial Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-200 leading-relaxed font-manrope font-normal drop-shadow-md">
          Mergulhe na era de ouro dos jogos da <strong className="text-white">Rockstar Games</strong>. Da extravagância neon e ternos pastel de 
          <span className="text-[#FF3CAC] font-semibold"> Tommy Vercetti</span> em Miami, à cultura de rua de 
          <span className="text-[#10B981] font-semibold"> CJ em San Andreas</span> e o submundo noir implacável de 
          <span className="text-[#38BDF8] font-semibold"> Claude em Liberty City</span>.
        </p>

        {/* Hero Interactive CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Vice City Button */}
          <button
            onClick={() => {
              soundEngine.playClickSound();
              onExploreViceCity();
            }}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-[#FF3CAC] via-[#FF3CAC] to-[#FF8A3D] text-white font-bebas text-2xl tracking-wider uppercase overflow-hidden shadow-[0_0_30px_rgba(255,60,172,0.6)] hover:shadow-[0_0_45px_rgba(255,60,172,0.85)] active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Flame size={20} className="text-[#FFD166] group-hover:rotate-12 transition-transform" />
              EXPLORAR VICE CITY
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* Secondary Trilogy Button */}
          <button
            onClick={() => {
              soundEngine.playClickSound();
              onExploreTrilogy();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#12131B]/90 backdrop-blur-md border border-[#00E5FF]/40 text-[#00E5FF] hover:text-white hover:border-[#00E5FF] hover:bg-[#00E5FF]/20 font-bebas text-2xl tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.2)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass size={20} />
            DESCOBRIR A TRILOGIA
          </button>
        </div>

        {/* Editorial Pill Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl w-full">
          <div className="bg-[#12131B]/70 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
            <span className="block font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">ANO DE OURO</span>
            <span className="font-bebas text-2xl sm:text-3xl text-[#FF3CAC]">1986</span>
            <span className="block font-manrope text-[11px] text-zinc-300">Miami dos Anos 80</span>
          </div>

          <div className="bg-[#12131B]/70 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
            <span className="block font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">3 CIDADES</span>
            <span className="font-bebas text-2xl sm:text-3xl text-[#00E5FF]">3 METRÓPOLES</span>
            <span className="block font-manrope text-[11px] text-zinc-300">LC • VC • SA</span>
          </div>

          <div className="bg-[#12131B]/70 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
            <span className="block font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">MISSÕES</span>
            <span className="font-bebas text-2xl sm:text-3xl text-[#10B981]">230+ MISSÕES</span>
            <span className="block font-manrope text-[11px] text-zinc-300">Enredos Canônicos</span>
          </div>

          <div className="bg-[#12131B]/70 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
            <span className="block font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">TRILHA SONORA</span>
            <span className="font-bebas text-2xl sm:text-3xl text-[#FFD166]">30+ ESTAÇÕES</span>
            <span className="block font-manrope text-[11px] text-zinc-300">Rádios Lendárias</span>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <a
            href="#jogos"
            onClick={() => soundEngine.playClickSound()}
            className="flex flex-col items-center text-xs font-mono-tech text-zinc-400 hover:text-[#FF3CAC] transition-colors"
          >
            <span className="tracking-widest uppercase mb-1">ROLAR PARA EXPLORAR</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <span className="w-1.5 h-2 bg-[#FF3CAC] rounded-full animate-bounce" />
            </div>
            <ChevronDown size={16} className="text-[#FF3CAC] animate-pulse mt-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
