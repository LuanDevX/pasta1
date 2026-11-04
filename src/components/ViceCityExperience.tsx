import React, { useState } from 'react';
import { soundEngine } from '../utils/audioSynthesizer';
import { Moon, Sun, MapPin, Music, Volume2 } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  district: string;
  coords: { x: number; y: number }; // percentage on map/panorama
  tagline: string;
  description: string;
  image: string;
  soundVibe: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'ocean-view',
    name: 'Ocean View Hotel',
    district: 'Ocean Beach',
    coords: { x: 22, y: 55 },
    tagline: 'O primeiro refúgio de Tommy Vercetti',
    description: 'Com seu letreiro rosa choque de tirar o fôlego, o Ocean View Hotel serviu como quartel-general inicial de Tommy logo após o fiasco da negociação nas docas. Uma suíte modesta com vista para o mar e uma secretária eletrônica repleta de recados perigosos.',
    image: '/images/vice-city-tommy-neon.jpg',
    soundVibe: 'Wave 103 • Synthpop Nostálgico'
  },
  {
    id: 'malibu-club',
    name: 'The Malibu Club',
    district: 'Vice Point',
    coords: { x: 68, y: 38 },
    tagline: 'O coração pulsante da vida noturna',
    description: 'O clube mais exclusivo e disputado de toda Vice City. Conhecido pelos dançarinos caracterizados no palco, coquetéis exorbitantes e onde Tommy orquestrou com Cam Jones e Phil Cassidy o lendário assalto ao Banco El Corrupto.',
    image: '/images/vice-city-malibu-club.jpg',
    soundVibe: 'Flash FM • Michael Jackson & Hall & Oates'
  },
  {
    id: 'vercetti-estate',
    name: 'Vercetti Estate',
    district: 'Starfish Island',
    coords: { x: 48, y: 65 },
    tagline: 'O palácio do rei de Vice City',
    description: 'Originalmente o império privado do temperamental Ricardo Diaz. Após a missão "Rub Out", Tommy e Lance tomaram a mansão de assalto com direito a heliporto privado, labirinto nos jardins e sala de vigilância.',
    image: '/images/vice-city-tommy-night.jpg',
    soundVibe: 'Emotion 98.3 • Baladas de Saxofone'
  },
  {
    id: 'washington-beach',
    name: 'Washington Beach',
    district: 'Ocean Drive Strip',
    coords: { x: 80, y: 72 },
    tagline: 'Areias douradas e superesportivos',
    description: 'A orla tropical dos sonhos onde os milionários desfilam seus Infernus vermelhos e Cheetahs ao lado de patinadores e palmeiras banhadas pela brisa do Atlântico.',
    image: '/images/vice-city-infernus-beach.jpg',
    soundVibe: 'Fever 105 • Soul & Disco 80s'
  }
];

export const ViceCityExperience: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [nightPulse, setNightPulse] = useState(false);

  const handleViverANoite = () => {
    soundEngine.playClickSound();
    soundEngine.setPreset('vice-city');
    soundEngine.start();
    setNightPulse(true);
    setTimeout(() => setNightPulse(false), 2000);
  };

  return (
    <section
      id="vice-city-exp"
      className={`relative py-32 overflow-hidden transition-colors duration-1000 ${
        isNightMode ? 'bg-[#08090D]' : 'bg-[#150B24]'
      }`}
    >
      {/* 80s Synthwave Sun Element in Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] pointer-events-none select-none z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-[#FF3CAC] via-[#FF8A3D] to-[#FFD166] opacity-80 blur-sm" />
        
        {/* Horizontal Laser Sun Cutouts */}
        <div className="absolute inset-0 flex flex-col justify-end gap-2.5 pb-6">
          <div className="h-1 bg-[#08090D]/90 w-full" />
          <div className="h-1.5 bg-[#08090D]/90 w-full" />
          <div className="h-2 bg-[#08090D]/90 w-full" />
          <div className="h-2.5 bg-[#08090D]/90 w-full" />
          <div className="h-3.5 bg-[#08090D]/90 w-full" />
          <div className="h-5 bg-[#08090D]/90 w-full" />
        </div>
      </div>

      {/* Retro Digital Horizon Perspective Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-96 retro-grid retro-grid-perspective opacity-40 z-0 animate-grid-scroll pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#FF3CAC]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#00E5FF]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          {/* Section badge with live clock indicator */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#24133D]/80 border border-[#FF3CAC]/40 text-[#FF3CAC] text-xs font-mono-tech tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(255,60,172,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            <span>VICE CITY NIGHTLIFE // 1986 // OCEAN DRIVE STRIP</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl text-white tracking-tight uppercase leading-[0.88] drop-shadow-[0_0_40px_rgba(255,60,172,0.4)]">
            AFTER DARK, <br />
            <span className="bg-gradient-to-r from-[#FF3CAC] via-[#00E5FF] to-[#FF8A3D] bg-clip-text text-transparent">
              EVERYTHING CHANGES
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 font-manrope font-normal max-w-2xl mx-auto leading-relaxed">
            Quando o sol se põe no horizonte do Atlântico, os motores V8 rugem em Ocean Drive. As luzes de néon refletem no asfalto quente e a cidade revela sua verdadeira face: luxo sem limites, festas nos iates e acordos feitos à sombra das palmeiras.
          </p>

          {/* Interactive Mode & Sound Trigger */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            
            {/* Viver a Noite Hero Action Button */}
            <button
              onClick={handleViverANoite}
              className={`px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#FF3CAC] to-[#00E5FF] text-white font-bebas text-2xl tracking-wider uppercase shadow-[0_0_30px_rgba(255,60,172,0.6)] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-2 ${
                nightPulse ? 'ring-4 ring-[#00E5FF] scale-105' : ''
              }`}
            >
              <Volume2 size={22} className="text-[#FFD166]" />
              VIVER A NOITE
            </button>

            {/* Dusk vs Midnight Visual Shift */}
            <button
              onClick={() => {
                soundEngine.playClickSound();
                setIsNightMode(!isNightMode);
              }}
              className="px-5 py-3 rounded-lg bg-[#1B1D2A]/80 border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase hover:border-[#FF3CAC] transition-colors flex items-center gap-2"
            >
              {isNightMode ? (
                <>
                  <Moon size={16} className="text-[#00E5FF]" />
                  <span>MADRUGADA • 02:00</span>
                </>
              ) : (
                <>
                  <Sun size={16} className="text-[#FF8A3D]" />
                  <span>PÔR DO SOL • 18:00</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Interactive Ocean Drive Panorama Explorer */}
        <div className="bg-[#12131B]/90 rounded-3xl border border-[#FF3CAC]/30 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          
          {/* Top Bar with Neon Signs */}
          <div className="px-6 py-4 bg-[#1B1D2A]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-bebas text-2xl text-white tracking-wider">
                OCEAN DRIVE <span className="text-[#FF3CAC]">RADAR HUD</span>
              </span>
              <span className="text-xs font-mono-tech text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-0.5 rounded border border-[#00E5FF]/30">
                CLIQUE NOS PONTOS DE INTERESSE
              </span>
            </div>

            <div className="flex items-center gap-2">
              {HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => {
                    soundEngine.playClickSound();
                    setSelectedHotspot(spot);
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-mono-tech transition-all ${
                    selectedHotspot.id === spot.id
                      ? 'bg-[#FF3CAC] text-black font-bold shadow-[0_0_15px_rgba(255,60,172,0.8)]'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {spot.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map Visual Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Radar Area with Hotspot Markers */}
            <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[500px] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedHotspot.image}
                alt={selectedHotspot.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-black/30 to-black/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#12131B]" />

              {/* Hotspot Markers Over the Map */}
              {HOTSPOTS.map((spot) => {
                const isSelected = spot.id === selectedHotspot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => {
                      soundEngine.playClickSound();
                      setSelectedHotspot(spot);
                    }}
                    style={{ left: `${spot.coords.x}%`, top: `${spot.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none`}
                    title={spot.name}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${
                        isSelected ? 'bg-[#FF3CAC]' : 'bg-[#00E5FF]'
                      }`}
                    />
                    
                    {/* Marker Center */}
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform ${
                        isSelected
                          ? 'bg-[#FF3CAC] text-black scale-125 shadow-[0_0_20px_#FF3CAC]'
                          : 'bg-[#12131B] text-[#00E5FF] border border-[#00E5FF] hover:scale-110'
                      }`}
                    >
                      <MapPin size={16} />
                    </div>

                    {/* Hover tooltip label */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap bg-black/90 text-white font-mono-tech text-[10px] px-2 py-1 rounded border border-white/20">
                      {spot.name}
                    </div>
                  </button>
                );
              })}

              {/* Retro HUD Coordinates Overlay */}
              <div className="absolute bottom-4 left-4 font-mono-tech text-[10px] text-zinc-400 bg-black/70 px-2.5 py-1 rounded border border-white/10">
                LOC: 25.7617° N, 80.1918° W // VICECITY_CAM_04
              </div>

            </div>

            {/* Dossier Card on the Right */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#12131B]">
              <div>
                {/* District Subtitle */}
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00E5FF] uppercase tracking-wider mb-2">
                  <MapPin size={14} />
                  <span>{selectedHotspot.district}</span>
                </div>

                {/* Hotspot Name */}
                <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none">
                  {selectedHotspot.name}
                </h3>

                {/* Tagline */}
                <p className="mt-2 font-retro text-lg text-[#FFD166] tracking-wide">
                  "{selectedHotspot.tagline}"
                </p>

                {/* Full Editorial Description */}
                <p className="mt-5 text-sm sm:text-base text-zinc-300 font-manrope leading-relaxed">
                  {selectedHotspot.description}
                </p>

                {/* Audio Vibe Recommendation */}
                <div className="mt-6 p-4 rounded-xl bg-[#1B1D2A] border border-[#FF3CAC]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF3CAC]/20 text-[#FF3CAC] flex items-center justify-center shrink-0">
                    <Music size={20} />
                  </div>
                  <div>
                    <span className="block font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">
                      TRILHA RECOMENDADA
                    </span>
                    <span className="font-manrope text-xs font-bold text-white">
                      {selectedHotspot.soundVibe}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <a
                  href="#jogos"
                  onClick={() => soundEngine.playClickSound()}
                  className="flex-1 py-3 text-center rounded-lg bg-[#FF3CAC] text-black font-bebas text-lg tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(255,60,172,0.4)] transition-all"
                >
                  VER DETALHES DE VICE CITY
                </a>
                <a
                  href="#galeria"
                  onClick={() => soundEngine.playClickSound()}
                  className="py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bebas text-lg tracking-wider transition-colors"
                >
                  FOTOS
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
