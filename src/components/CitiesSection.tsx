import React, { useState } from 'react';
import { CITIES } from '../data/trilogyData';
import type { City, District } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import { CloudSun, Landmark, ArrowUpRight } from 'lucide-react';

interface CitiesSectionProps {
  onSelectCityGame: (gameId: string) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({ onSelectCityGame }) => {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]); // Vice City default
  const [selectedDistrict, setSelectedDistrict] = useState<District>(CITIES[0].districts[0]);

  const handleCityChange = (city: City) => {
    soundEngine.playClickSound();
    setSelectedCity(city);
    setSelectedDistrict(city.districts[0]);
  };

  return (
    <section id="cidades" className="relative py-28 bg-[#0B0C12] overflow-hidden">
      
      {/* Background Subtle Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              GEOGRAFIA CRIMINAL • MAPAS E DISTRITOS
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              CIDADES & <span className="text-[#00E5FF]">EXPLORAÇÃO</span>
            </h2>
            <p className="font-manrope text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Três metrópoles lendárias que moldaram a ficção interativa. Da ensolarada costa da Flórida às colinas de San Andreas e à metrópole chuvosa de Liberty City.
            </p>
          </div>

          {/* City Selector Buttons */}
          <div className="flex items-center gap-2 bg-[#12131B] p-1.5 rounded-2xl border border-white/10">
            {CITIES.map((c) => (
              <button
                key={c.id}
                onClick={() => handleCityChange(c)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bebas text-lg sm:text-xl tracking-wider transition-all ${
                  selectedCity.id === c.id
                    ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected City Large Editorial Showcase */}
        <div className="bg-[#12131B] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Panoramic Hero Banner for City */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12131B] via-[#12131B]/40 to-black/30" />
            
            {/* Overlay City Info */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono-tech text-xs text-zinc-300 uppercase tracking-widest block mb-1">
                  {selectedCity.stateOrRegion} • ANO {selectedCity.year}
                </span>
                <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-tight uppercase leading-none">
                  {selectedCity.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    soundEngine.playClickSound();
                    onSelectCityGame(selectedCity.gameId);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-white text-black font-bebas text-lg tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-lg"
                >
                  <span>ACESSAR JOGO</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* City Details Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 5 Cols: Overview & Climate & Features */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-2">
                  PANORAMA METROPOLITANO
                </h4>
                <p className="font-manrope text-sm text-zinc-300 leading-relaxed">
                  {selectedCity.overview}
                </p>
              </div>

              {/* Climate info */}
              <div className="p-4 rounded-xl bg-[#1B1D2A] border border-white/5 flex items-start gap-3">
                <CloudSun size={20} className="text-[#FF8A3D] mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block">
                    CLIMA & ATMOSFERA
                  </span>
                  <p className="font-manrope text-xs text-zinc-200 mt-0.5">
                    {selectedCity.climate}
                  </p>
                </div>
              </div>

              {/* Distritos Selector Pills */}
              <div>
                <span className="font-mono-tech text-xs text-zinc-400 uppercase tracking-wider block mb-3">
                  SELECIONE O DISTRITO / BAIRRO:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {selectedCity.districts.map((d) => (
                    <button
                      key={d.name}
                      onClick={() => {
                        soundEngine.playClickSound();
                        setSelectedDistrict(d);
                      }}
                      className={`text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                        selectedDistrict.name === d.name
                          ? 'bg-[#1B1D2A] border-[#FF3CAC] text-white shadow-md'
                          : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="font-manrope font-semibold text-xs text-white">
                        {d.name}
                      </div>
                      <span
                        className={`text-[10px] font-mono-tech px-2 py-0.5 rounded font-bold ${
                          d.dangerLevel === 'Extremo'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : d.dangerLevel === 'Alto'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : d.dangerLevel === 'Médio'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}
                      >
                        PERIGO: {d.dangerLevel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Selected District HUD Inspector */}
            <div className="lg:col-span-7 bg-[#1B1D2A] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block">
                      DISTRITO SELECIONADO
                    </span>
                    <h5 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
                      {selectedDistrict.name}
                    </h5>
                  </div>
                  <span
                    className={`text-xs font-mono-tech px-3 py-1 rounded font-bold ${
                      selectedDistrict.dangerLevel === 'Extremo'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                        : selectedDistrict.dangerLevel === 'Alto'
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                        : selectedDistrict.dangerLevel === 'Médio'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                        : 'bg-green-500/20 text-green-400 border border-green-500/40'
                    }`}
                  >
                    NÍVEL DE AMEAÇA: {selectedDistrict.dangerLevel.toUpperCase()}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">
                    ATMOSFERA & VIBE
                  </span>
                  <p className="font-retro text-base text-[#FFD166]">
                    "{selectedDistrict.vibe}"
                  </p>
                </div>

                <p className="text-sm text-zinc-300 font-manrope leading-relaxed mb-6">
                  {selectedDistrict.description}
                </p>

                {/* Landmarks in District */}
                <div>
                  <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
                    PONTOS DE REFERÊNCIA & HOTSPOTS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedDistrict.landmarks.map((landmark, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2 text-xs font-manrope text-zinc-200"
                      >
                        <Landmark size={14} className="text-[#00E5FF] shrink-0" />
                        <span>{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* City Features list */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
                  CARACTERÍSTICAS DA CIDADE
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCity.keyFeatures.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-manrope text-zinc-300"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
