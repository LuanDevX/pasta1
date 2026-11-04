import React, { useState } from 'react';
import { CHEAT_CODES } from '../data/trilogyData';
import type { CheatCode } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import confetti from 'canvas-confetti';
import { Terminal, X } from 'lucide-react';

interface CheatConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onCheatActivated: (message: string) => void;
}

export const CheatConsole: React.FC<CheatConsoleProps> = ({
  isOpen,
  onClose,
  onCheatActivated
}) => {
  const [inputCode, setInputCode] = useState('');
  const [filterGame, setFilterGame] = useState<'all' | 'vice-city' | 'san-andreas' | 'gta3'>('all');
  const [recentCheats, setRecentCheats] = useState<string[]>([]);

  const filteredCheats = filterGame === 'all'
    ? CHEAT_CODES
    : CHEAT_CODES.filter((c) => c.gameId === filterGame);

  const activateCheat = (cheat: CheatCode) => {
    soundEngine.playCheatSound();
    
    // Confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF3CAC', '#00E5FF', '#FFD166', '#10B981']
    });

    onCheatActivated(`CHEAT ATIVADO: ${cheat.effect.toUpperCase()}`);
    setRecentCheats((prev) => [cheat.code, ...prev.slice(0, 4)]);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputCode.trim().toUpperCase();
    const found = CHEAT_CODES.find((c) => c.code === clean);

    if (found) {
      activateCheat(found);
      setInputCode('');
    } else {
      soundEngine.playClickSound();
      alert(`Código "${clean}" não reconhecido nos arquivos da Rockstar.`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0F1018] border-2 border-[#FFD166]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(255,209,102,0.3)] flex flex-col gap-6 max-h-[90vh]">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFD166]/20 text-[#FFD166] flex items-center justify-center border border-[#FFD166]/40">
              <Terminal size={22} />
            </div>
            <div>
              <span className="font-mono-tech text-[10px] text-[#FFD166] tracking-widest uppercase block">
                TERMINAL DE COMANDOS DE DESENVOLVEDOR // ROCKSTAR GAMES
              </span>
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                CÓDIGOS & CHEATS HISTÓRICOS
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playClickSound();
              onClose();
            }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Fechar terminal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Input Form Console */}
        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono-tech text-zinc-500 text-sm">
              &gt;
            </span>
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Digite o código (ex: ASPIRINE, HESOYAM, PANZER)..."
              className="w-full pl-9 pr-4 py-3 rounded-xl bg-black border border-white/20 text-[#FFD166] font-mono-tech text-sm uppercase placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD166] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#FFD166] text-black font-bebas text-xl tracking-wider uppercase hover:brightness-110 shadow-[0_0_15px_rgba(255,209,102,0.4)] transition-all"
          >
            EXECUTAR
          </button>
        </form>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'TODOS OS JOGOS' },
            { id: 'vice-city', label: 'VICE CITY' },
            { id: 'san-andreas', label: 'SAN ANDREAS' },
            { id: 'gta3', label: 'GTA III' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playClickSound();
                setFilterGame(tab.id as typeof filterGame);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                filterGame === tab.id
                  ? 'bg-white text-black font-bold'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cheats Grid Scrollable */}
        <div className="overflow-y-auto pr-1 space-y-2 max-h-[350px]">
          {filteredCheats.map((cheat) => (
            <div
              key={cheat.code}
              className="p-3.5 rounded-xl bg-[#141522] border border-white/5 hover:border-[#FFD166]/40 transition-all flex items-center justify-between gap-4 group"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono-tech text-sm font-bold text-[#FFD166] tracking-wider">
                    {cheat.code}
                  </span>
                  <span className="font-mono-tech text-[9px] px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                    {cheat.category}
                  </span>
                  <span className="font-mono-tech text-[9px] text-zinc-500 uppercase">
                    {cheat.gameId}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-manrope">
                  {cheat.effect}
                </p>
              </div>

              <button
                onClick={() => activateCheat(cheat)}
                className="px-4 py-2 rounded-lg bg-[#FFD166]/10 text-[#FFD166] border border-[#FFD166]/30 hover:bg-[#FFD166] hover:text-black font-bebas text-base tracking-wider transition-all shrink-0"
              >
                ATIVAR
              </button>
            </div>
          ))}
        </div>

        {/* Recently Activated List */}
        {recentCheats.length > 0 && (
          <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono-tech text-zinc-400">
            <span>ATIVADOS RECENTEMENTE:</span>
            {recentCheats.map((c, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-black text-[#FFD166] border border-[#FFD166]/30">
                {c}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
