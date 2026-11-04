import React from 'react';
import type { Game } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import { X, Radio } from 'lucide-react';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
  onPlayTheme: (gameId: 'vice-city' | 'san-andreas' | 'gta3') => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose, onPlayTheme }) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12131B] border-2 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
        style={{ borderColor: game.theme.primary }}
      >
        {/* Modal Top Banner with Background Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={game.backgroundImage}
            alt={game.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12131B] via-[#12131B]/50 to-black/40" />
          
          {/* Close button */}
          <button
            onClick={() => {
              soundEngine.playClickSound();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-colors z-20"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>

          {/* Title & Tagline Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span
              className="px-3 py-1 rounded font-mono-tech text-xs font-bold tracking-wider uppercase border inline-block mb-2"
              style={{
                backgroundColor: game.theme.badgeBg,
                borderColor: game.theme.primary,
                color: game.theme.primary
              }}
            >
              {game.timeline} • {game.setting}
            </span>
            <h2 className="font-bebas text-5xl sm:text-7xl text-white tracking-tight uppercase leading-none">
              {game.title}
            </h2>
            <p className="font-retro text-lg sm:text-xl text-[#FFD166] mt-1">
              "{game.tagline}"
            </p>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#12131B]">
          
          {/* Protagonist & Quote Highlight */}
          <div className="p-5 rounded-2xl bg-[#1B1D2A] border-l-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ borderColor: game.theme.primary }}
          >
            <div>
              <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">
                PROTAGONISTA PRINCIPAL
              </span>
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                {game.protagonist}
              </h3>
              <p className="font-manrope text-xs italic text-zinc-300 mt-1">
                "{game.famousQuote.text}"
              </p>
            </div>

            <button
              onClick={() => {
                soundEngine.playClickSound();
                onPlayTheme(game.id);
              }}
              className="px-5 py-3 rounded-xl font-bebas text-lg tracking-wider uppercase text-white flex items-center gap-2 shrink-0 transition-transform active:scale-95 shadow-lg"
              style={{ backgroundColor: game.theme.primary }}
            >
              <Radio size={18} />
              <span>OUVIR TRILHA SINTÉTICA</span>
            </button>
          </div>

          {/* Full Canonical History */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-2">
              ENREDO & CONTEXTO HISTÓRICO
            </h4>
            <p className="font-manrope text-sm sm:text-base text-zinc-300 leading-relaxed">
              {game.fullDescription}
            </p>
          </div>

          {/* Features and Innovations */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-3">
              MARCOS & INOVAÇÕES TÉCNICAS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {game.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#1B1D2A] border border-white/5 flex items-start gap-3"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: game.theme.primary }}
                  />
                  <span className="font-manrope text-xs text-zinc-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Arsenal & Vehicles & Radios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            
            {/* Weapons */}
            <div className="bg-[#1B1D2A] p-4 rounded-xl border border-white/5">
              <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
                ARSENAL DE ARMAS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {game.weapons.map((w, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-[11px] font-mono-tech text-zinc-300"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Vehicles */}
            <div className="bg-[#1B1D2A] p-4 rounded-xl border border-white/5">
              <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
                FROTA DE VEÍCULOS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {game.vehicles.map((v, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-[11px] font-mono-tech text-zinc-300"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Radios */}
            <div className="bg-[#1B1D2A] p-4 rounded-xl border border-white/5">
              <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
                ESTAÇÕES DE RÁDIO
              </span>
              <div className="flex flex-wrap gap-1.5">
                {game.radioHighlights.map((r, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-[11px] font-mono-tech text-zinc-300"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-[#1B1D2A] border-t border-white/10 flex items-center justify-between">
          <span className="font-mono-tech text-xs text-zinc-400 hidden sm:inline">
            ROCKSTAR GAMES TRILOGY • ARQUIVO DIGITAL CLÁSSICO
          </span>
          <button
            onClick={() => {
              soundEngine.playClickSound();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bebas text-lg tracking-wider uppercase transition-colors"
          >
            FECHAR VISUALIZAÇÃO
          </button>
        </div>

      </div>
    </div>
  );
};
