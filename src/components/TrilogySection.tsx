import React from 'react';
import { TRILOGY_GAMES } from '../data/trilogyData';
import type { Game } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import { ArrowRight } from 'lucide-react';

interface TrilogySectionProps {
  onSelectGame: (game: Game) => void;
}

export const TrilogySection: React.FC<TrilogySectionProps> = ({ onSelectGame }) => {
  return (
    <section id="jogos" className="relative py-28 bg-[#08090D] overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF3CAC]" />
              TRÊS ERAS • TRÊS CIDADES • UM LEGADO
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              OS TRÊS <span className="text-[#FF3CAC]">UNIVERSOS</span>
            </h2>
            <p className="font-manrope text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Explore cada capítulo lendário que redefiniu para sempre a história dos videogames. Cada jogo possui atmosfera, paleta de cores e identidade sonora exclusivas.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-tech text-zinc-400">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF3CAC]" /> VICE CITY</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]" /> SAN ANDREAS</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#38BDF8]" /> LIBERTY CITY</span>
          </div>
        </div>

        {/* The 3 Major Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRILOGY_GAMES.map((game) => {
            const isViceCity = game.id === 'vice-city';
            const isSanAndreas = game.id === 'san-andreas';

            return (
              <div
                key={game.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#12131B] border transition-all duration-500 flex flex-col justify-between ${
                  isViceCity
                    ? 'border-[#FF3CAC]/30 hover:border-[#FF3CAC] hover:shadow-[0_0_40px_rgba(255,60,172,0.35)] lg:-translate-y-2'
                    : isSanAndreas
                    ? 'border-[#10B981]/30 hover:border-[#10B981] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]'
                    : 'border-[#38BDF8]/30 hover:border-[#38BDF8] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]'
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src={game.backgroundImage}
                    alt={game.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Themed Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${game.theme.gradient}`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#12131B]" />

                  {/* Editorial Big Number */}
                  <span className="absolute top-4 left-6 font-bebas text-6xl text-white/20 select-none group-hover:text-white/40 transition-colors">
                    {game.order}
                  </span>

                  {/* Year Tag Badge */}
                  <div className="absolute top-6 right-6">
                    <span
                      className="px-3 py-1 rounded font-mono-tech text-xs font-bold tracking-wider uppercase backdrop-blur-md border border-white/20 text-white"
                      style={{ backgroundColor: game.theme.badgeBg }}
                    >
                      ANO {game.year}
                    </span>
                  </div>

                  {/* Protagonist Pill Overlay */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div>
                      <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block">
                        PROTAGONISTA
                      </span>
                      <span className="font-syne font-bold text-lg text-white">
                        {game.protagonist}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block">
                        LOCAL
                      </span>
                      <span className="font-manrope text-xs font-semibold text-zinc-300">
                        {game.setting}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body & Editorial Typography */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#12131B]">
                  <div>
                    {/* Tagline */}
                    <span
                      className="font-mono-tech text-xs font-bold tracking-widest uppercase block mb-2"
                      style={{ color: game.theme.primary }}
                    >
                      {game.tagline}
                    </span>

                    {/* Game Title */}
                    <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none group-hover:text-white transition-colors">
                      {game.title}
                    </h3>

                    {/* Short Editorial Description */}
                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-manrope">
                      {game.shortDescription}
                    </p>

                    {/* Quick Specs / Stats Badges */}
                    <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-[#1B1D2A] p-2 rounded border border-white/5">
                        <span className="block font-mono-tech text-[9px] text-zinc-400">MISSÕES</span>
                        <span className="font-bebas text-lg text-white">{game.stats.missions}</span>
                      </div>
                      <div className="bg-[#1B1D2A] p-2 rounded border border-white/5">
                        <span className="block font-mono-tech text-[9px] text-zinc-400">VEÍCULOS</span>
                        <span className="font-bebas text-lg text-white">{game.stats.vehiclesCount}+</span>
                      </div>
                      <div className="bg-[#1B1D2A] p-2 rounded border border-white/5">
                        <span className="block font-mono-tech text-[9px] text-zinc-400">RÁDIOS</span>
                        <span className="font-bebas text-lg text-white">{game.stats.radios}</span>
                      </div>
                    </div>

                    {/* Key features checklist */}
                    <ul className="mt-5 space-y-2">
                      {game.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-manrope">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: game.theme.primary }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Action Button with Feedback */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => {
                        soundEngine.playClickSound();
                        onSelectGame(game);
                      }}
                      className="w-full py-3.5 px-5 rounded-lg font-bebas text-xl tracking-wider uppercase transition-all duration-300 flex items-center justify-between group/btn text-white shadow-md active:scale-98"
                      style={{
                        backgroundColor: game.theme.primary,
                        boxShadow: `0 0 25px ${game.theme.glow}`
                      }}
                    >
                      <span>
                        {isViceCity
                          ? 'ENTRAR EM VICE CITY'
                          : isSanAndreas
                          ? 'EXPLORAR SAN ANDREAS'
                          : 'DESCOBRIR LIBERTY CITY'}
                      </span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
