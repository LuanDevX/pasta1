import React, { useState } from 'react';
import { CHARACTERS } from '../data/trilogyData';
import type { Character, GameId } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import { X, Award, ChevronRight } from 'lucide-react';

export const CharactersSection: React.FC = () => {
  const [filter, setFilter] = useState<GameId | 'all'>('all');
  const [activeDossier, setActiveDossier] = useState<Character | null>(null);

  const filteredCharacters = filter === 'all'
    ? CHARACTERS
    : CHARACTERS.filter((c) => c.gameId === filter);

  return (
    <section id="personagens" className="relative py-28 bg-[#08090D] overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFD166]" />
              SUBMUNDO • LÍDERES & TRAIDORES
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              PERSONAGENS <span className="text-[#FFD166]">ICÔNICOS</span>
            </h2>
            <p className="font-manrope text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Conheça os protagonistas e figuras lendárias que forjaram suas reputações à bala e definiram a trilogia clássica da Rockstar.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#12131B] p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => {
                soundEngine.playClickSound();
                setFilter('all');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                filter === 'all'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              TODOS
            </button>
            <button
              onClick={() => {
                soundEngine.playClickSound();
                setFilter('vice-city');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                filter === 'vice-city'
                  ? 'bg-[#FF3CAC] text-black font-bold shadow-[0_0_12px_#FF3CAC]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              VICE CITY
            </button>
            <button
              onClick={() => {
                soundEngine.playClickSound();
                setFilter('san-andreas');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                filter === 'san-andreas'
                  ? 'bg-[#10B981] text-black font-bold shadow-[0_0_12px_#10B981]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              SAN ANDREAS
            </button>
            <button
              onClick={() => {
                soundEngine.playClickSound();
                setFilter('gta3');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                filter === 'gta3'
                  ? 'bg-[#38BDF8] text-black font-bold shadow-[0_0_12px_#38BDF8]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              GTA III
            </button>
          </div>
        </div>

        {/* Character Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((char) => {
            return (
              <div
                key={char.id}
                className="group relative rounded-2xl overflow-hidden bg-[#12131B] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  boxShadow: `0 10px 30px rgba(0,0,0,0.6)`
                }}
              >
                {/* Character Portrait with Atmospheric Gradient */}
                <div className="relative h-96 w-full overflow-hidden bg-black">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient to darken lower part */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131B] via-[#12131B]/40 to-transparent" />
                  
                  {/* Subtle Colored Vignette */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 50% 20%, ${char.accentColor}, transparent 70%)`
                    }}
                  />

                  {/* Game Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded font-mono-tech text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border text-white"
                      style={{
                        backgroundColor: `${char.accentColor}33`,
                        borderColor: `${char.accentColor}88`
                      }}
                    >
                      {char.gameTitle}
                    </span>
                  </div>

                  {/* Respect Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5">
                    <Award size={13} style={{ color: char.accentColor }} />
                    <span className="font-mono-tech text-xs text-white font-bold">
                      {char.stats.reputation}%
                    </span>
                  </div>

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="font-mono-tech text-[11px] text-zinc-400 block tracking-wider uppercase">
                      {char.role}
                    </span>
                    <h3 className="font-bebas text-4xl text-white tracking-tight uppercase leading-none mt-1">
                      {char.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-[#12131B]">
                  <div>
                    {/* Iconic Quote */}
                    <div className="p-3.5 rounded-lg bg-[#1B1D2A] border-l-2 mb-4 text-xs italic text-zinc-300 font-manrope leading-relaxed" style={{ borderColor: char.accentColor }}>
                      "{char.quote}"
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-manrope line-clamp-3">
                      {char.description}
                    </p>

                    {/* Weapons & Vehicles Pills */}
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5 text-xs font-mono-tech">
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-zinc-500">ARMA:</span>
                        <span className="text-zinc-200">{char.signatureWeapon}</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-zinc-500">VEÍCULO:</span>
                        <span className="text-zinc-200">{char.signatureVehicle}</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-zinc-500">VOZ:</span>
                        <span className="text-zinc-200">{char.voiceActor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Open Full Dossier Button */}
                  <div className="mt-6 pt-3">
                    <button
                      onClick={() => {
                        soundEngine.playClickSound();
                        setActiveDossier(char);
                      }}
                      className="w-full py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono-tech text-white flex items-center justify-between transition-colors"
                    >
                      <span>LER DOSSIÊ COMPLETO</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Character Dossier Full Modal */}
      {activeDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#12131B] border border-white/20 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-[#1B1D2A] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: activeDossier.accentColor }}
                />
                <div>
                  <span className="font-mono-tech text-xs text-zinc-400 uppercase tracking-widest block">
                    DOSSIÊ POLICIAL CONFIDENCIAL • {activeDossier.gameTitle}
                  </span>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">
                    {activeDossier.name} <span className="text-zinc-400 text-xl font-normal">({activeDossier.alias})</span>
                  </h3>
                </div>
              </div>

              <button
                onClick={() => {
                  soundEngine.playClickSound();
                  setActiveDossier(null);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Photo */}
                <div className="rounded-xl overflow-hidden bg-black border border-white/10 h-64 sm:h-auto">
                  <img
                    src={activeDossier.image}
                    alt={activeDossier.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Quick Attributes */}
                <div className="sm:col-span-2 space-y-4">
                  
                  <div className="p-4 rounded-xl bg-[#1B1D2A] border border-white/5">
                    <span className="font-mono-tech text-[10px] text-zinc-400 uppercase block mb-1">CITAÇÃO ICÔNICA</span>
                    <p className="font-manrope text-sm italic text-white">"{activeDossier.quote}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs">
                    <div className="bg-[#1B1D2A] p-3 rounded-lg border border-white/5">
                      <span className="text-zinc-400 block text-[10px]">FACÇÃO / LEALDADE</span>
                      <span className="text-white font-bold">{activeDossier.allegiance}</span>
                    </div>
                    <div className="bg-[#1B1D2A] p-3 rounded-lg border border-white/5">
                      <span className="text-zinc-400 block text-[10px]">ATUAÇÃO DE VOZ</span>
                      <span className="text-white font-bold">{activeDossier.voiceActor}</span>
                    </div>
                    <div className="bg-[#1B1D2A] p-3 rounded-lg border border-white/5">
                      <span className="text-zinc-400 block text-[10px]">ARMA FAVORITA</span>
                      <span className="text-white font-bold">{activeDossier.signatureWeapon}</span>
                    </div>
                    <div className="bg-[#1B1D2A] p-3 rounded-lg border border-white/5">
                      <span className="text-zinc-400 block text-[10px]">VEÍCULO PRINCIPAL</span>
                      <span className="text-white font-bold">{activeDossier.signatureVehicle}</span>
                    </div>
                  </div>

                  {/* Attribute Meters */}
                  <div className="space-y-2 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-mono-tech text-zinc-300 mb-1">
                        <span>REPUTAÇÃO CRIMINAL</span>
                        <span>{activeDossier.stats.reputation}%</span>
                      </div>
                      <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${activeDossier.stats.reputation}%`,
                            backgroundColor: activeDossier.accentColor
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono-tech text-zinc-300 mb-1">
                        <span>PONTARIA / COMBATE</span>
                        <span>{activeDossier.stats.shooting}%</span>
                      </div>
                      <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${activeDossier.stats.shooting}%`,
                            backgroundColor: activeDossier.accentColor
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono-tech text-zinc-300 mb-1">
                        <span>ESTAMINA FÍSICA</span>
                        <span>{activeDossier.stats.stamina}%</span>
                      </div>
                      <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${activeDossier.stats.stamina}%`,
                            backgroundColor: activeDossier.accentColor
                          }}
                        />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Full Bio */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-bebas text-xl text-white tracking-wide uppercase mb-2">
                  HISTÓRICO CRIMINAL DETALHADO
                </h4>
                <p className="font-manrope text-sm text-zinc-300 leading-relaxed">
                  {activeDossier.fullBio}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#1B1D2A] border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  soundEngine.playClickSound();
                  setActiveDossier(null);
                }}
                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs uppercase"
              >
                FECHAR DOSSIÊ
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
