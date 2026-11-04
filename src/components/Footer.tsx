import React from 'react';
import { soundEngine } from '../utils/audioSynthesizer';
import { ArrowUp, Radio, Terminal, Shield } from 'lucide-react';

interface FooterProps {
  onOpenRadio: () => void;
  onOpenCheats: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRadio, onOpenCheats }) => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  const scrollToTop = () => {
    soundEngine.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="sobre" className="relative bg-[#05060A] text-zinc-400 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* Neon Decorative Gradient Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3CAC] via-[#00E5FF] to-transparent shadow-[0_0_15px_#FF3CAC]" />

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#FF3CAC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bebas text-4xl text-white tracking-widest drop-shadow-[0_0_12px_rgba(255,60,172,0.6)]">
                TRILOGY
              </span>
              <span className="bg-[#FF3CAC] text-black font-mono-tech text-[10px] font-bold px-1.5 py-0.5 rounded tracking-tighter">
                CRIME NEVER SLEEPS
              </span>
            </div>

            <p className="font-retro text-lg text-[#FFD166] tracking-wide">
              "UMA HOMENAGEM À TRILOGIA QUE MARCOU GERAÇÕES."
            </p>

            <p className="font-manrope text-xs text-zinc-400 max-w-sm leading-relaxed">
              Portal editorial de fãs dedicado a celebrar o impacto cultural, a estética retrô inigualável de Vice City, o drama urbano de San Andreas e a revolução tridimensional de Liberty City.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  soundEngine.playClickSound();
                  onOpenRadio();
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-[#00E5FF] flex items-center gap-1.5 transition-colors"
              >
                <Radio size={13} /> SINTONIZADOR RÁDIO
              </button>
              <button
                onClick={() => {
                  soundEngine.playClickSound();
                  onOpenCheats();
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-[#FFD166] flex items-center gap-1.5 transition-colors"
              >
                <Terminal size={13} /> CÓDIGOS CHEATS
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider uppercase mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2 text-xs font-manrope">
              <li>
                <a href="#inicio" onClick={() => soundEngine.playClickSound()} className="hover:text-[#FF3CAC] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#jogos" onClick={() => soundEngine.playClickSound()} className="hover:text-[#FF3CAC] transition-colors">
                  Os Três Universos
                </a>
              </li>
              <li>
                <a href="#vice-city-exp" onClick={() => soundEngine.playClickSound()} className="hover:text-[#FF3CAC] transition-colors">
                  Vice City Experience
                </a>
              </li>
              <li>
                <a href="#personagens" onClick={() => soundEngine.playClickSound()} className="hover:text-[#FF3CAC] transition-colors">
                  Personagens Icônicos
                </a>
              </li>
              <li>
                <a href="#cidades" onClick={() => soundEngine.playClickSound()} className="hover:text-[#FF3CAC] transition-colors">
                  Cidades & Distritos
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={() => soundEngine.playClickSound()} className="hover:text-[#FF3CAC] transition-colors">
                  Galeria Visual
                </a>
              </li>
            </ul>
          </div>

          {/* Games Direct */}
          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider uppercase mb-4">
              OS JOGOS
            </h4>
            <ul className="space-y-2 text-xs font-manrope">
              <li>
                <a href="#jogos" onClick={() => soundEngine.playClickSound()} className="text-zinc-300 hover:text-[#FF3CAC] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3CAC]" />
                  GTA Vice City (1986)
                </a>
              </li>
              <li>
                <a href="#jogos" onClick={() => soundEngine.playClickSound()} className="text-zinc-300 hover:text-[#10B981] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  GTA San Andreas (1992)
                </a>
              </li>
              <li>
                <a href="#jogos" onClick={() => soundEngine.playClickSound()} className="text-zinc-300 hover:text-[#38BDF8] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  GTA III (2001)
                </a>
              </li>
              <li className="pt-2">
                <span className="font-mono-tech text-[10px] text-zinc-500 block">
                  PROTAGONISTAS:
                </span>
                <span className="text-[11px] text-zinc-400">
                  Tommy Vercetti • Carl Johnson • Claude
                </span>
              </li>
            </ul>
          </div>

          {/* Legal & Disclaimer */}
          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider uppercase mb-4">
              AVISO LEGAL
            </h4>
            <p className="font-manrope text-[11px] text-zinc-500 leading-relaxed">
              Projeto independente e editorial, sem fins lucrativos, criado como homenagem artística por fãs. Grand Theft Auto, GTA Vice City, San Andreas, GTA III e seus respectivos logos são marcas registradas da Rockstar Games e Take-Two Interactive Software.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-zinc-400">
              <Shield size={12} className="text-[#10B981]" />
              <span>Sons Sintetizados 100% Originais</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-zinc-500">
          <div>
            © {currentYear} GTA TRILOGY — CRIME NEVER SLEEPS. TODOS OS DIREITOS DOS JOGOS ORIGINAIS RESERVADOS À ROCKSTAR GAMES.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
