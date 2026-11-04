import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Star, Radio } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';

interface HeaderProps {
  onOpenRadio: () => void;
  onOpenCheats: () => void;
  wantedLevel: number;
  onSetWantedLevel: (level: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRadio,
  onOpenCheats,
  wantedLevel,
  onSetWantedLevel
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [freqBars, setFreqBars] = useState<number[]>([20, 45, 80, 50, 30]);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['inicio', 'jogos', 'vice-city-exp', 'personagens', 'cidades', 'galeria', 'sobre'];
    const handleObserver = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleObserver);
  }, []);

  // Sound Engine visualizer listener
  useEffect(() => {
    soundEngine.setVisualizerCallback((bars) => {
      setFreqBars(bars);
    });
    return () => soundEngine.setVisualizerCallback(null);
  }, []);

  const toggleSound = () => {
    const playing = soundEngine.toggle();
    setIsPlayingAudio(playing);
    soundEngine.playClickSound();
  };

  const navLinks = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'jogos', label: 'Os 3 Jogos', href: '#jogos' },
    { id: 'vice-city-exp', label: 'Vice City Vibe', href: '#vice-city-exp' },
    { id: 'personagens', label: 'Personagens', href: '#personagens' },
    { id: 'cidades', label: 'Cidades', href: '#cidades' },
    { id: 'galeria', label: 'Galeria', href: '#galeria' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#08090D]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#08090D]/90 via-[#08090D]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Logo */}
          <a
            href="#inicio"
            onClick={() => soundEngine.playClickSound()}
            className="group flex flex-col items-start focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-bebas text-3xl sm:text-4xl tracking-widest text-white group-hover:text-[#FF3CAC] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(255,60,172,0.5)]">
                TRILOGY
              </span>
              <span className="bg-[#FF3CAC] text-black font-mono-tech text-[10px] font-bold px-1.5 py-0.5 rounded tracking-tighter uppercase">
                1986-2004
              </span>
            </div>
            <span className="font-mono-tech text-[9px] tracking-[0.28em] text-[#00E5FF] uppercase -mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
              Crime Never Sleeps
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => soundEngine.playClickSound()}
                  className={`relative font-manrope text-xs font-semibold uppercase tracking-wider py-1.5 transition-all duration-300 ${
                    isActive
                      ? 'text-[#FF3CAC] drop-shadow-[0_0_8px_rgba(255,60,172,0.8)]'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Neon animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF3CAC] to-[#00E5FF] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_8px_#FF3CAC]' : 'w-0 hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Wanted Level 6 Stars Widget (Interactive) */}
            <div
              className="hidden md:flex items-center gap-1 bg-[#12131B]/80 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#FFD166]/40 transition-colors cursor-pointer group"
              title="Nível de Procurado da Polícia (Clique para alterar)"
              onClick={() => {
                const next = (wantedLevel % 6) + 1;
                onSetWantedLevel(next);
                soundEngine.playSirenSound();
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className={`transition-all duration-200 ${
                    star <= wantedLevel
                      ? 'text-[#FFD166] fill-[#FFD166] drop-shadow-[0_0_6px_#FFD166] animate-pulse'
                      : 'text-zinc-600 fill-transparent'
                  }`}
                />
              ))}
              <span className="font-mono-tech text-[10px] text-zinc-400 ml-1">
                {wantedLevel}★
              </span>
            </div>

            {/* Radio / Synthesizer Quick Button */}
            <button
              onClick={() => {
                soundEngine.playClickSound();
                onOpenRadio();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1B1D2A] border border-[#00E5FF]/30 hover:border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 text-xs font-mono-tech transition-all duration-300"
              title="Abrir Rádio & Sintetizador"
            >
              <Radio size={14} className="animate-spin-slow" />
              <span className="hidden sm:inline">RÁDIO</span>
            </button>

            {/* Audio Ambient Generator Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono-tech font-bold transition-all duration-300 border ${
                isPlayingAudio
                  ? 'bg-[#FF3CAC]/20 text-[#FF3CAC] border-[#FF3CAC] shadow-[0_0_15px_rgba(255,60,172,0.4)]'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-700 hover:text-white hover:border-zinc-500'
              }`}
              title={isPlayingAudio ? 'Desativar Trilha Sintética' : 'Ativar Trilha Sintética dos Anos 80 (Original)'}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 size={15} className="animate-pulse" />
                  <span className="hidden sm:inline">ÁUDIO 80s</span>
                  {/* Equalizer frequency bars */}
                  <div className="flex items-end gap-[2px] h-3 ml-0.5">
                    {freqBars.map((height, i) => (
                      <span
                        key={i}
                        className="w-[2px] bg-[#FF3CAC] transition-all duration-100"
                        style={{ height: `${Math.max(2, height * 0.12)}px` }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <VolumeX size={15} />
                  <span className="hidden sm:inline">MUTADO</span>
                </>
              )}
            </button>

            {/* Cheat Code Button */}
            <button
              onClick={() => {
                soundEngine.playClickSound();
                onOpenCheats();
              }}
              className="hidden xl:flex items-center px-2.5 py-1.5 rounded-lg bg-[#FFD166]/10 text-[#FFD166] border border-[#FFD166]/30 hover:bg-[#FFD166]/20 font-mono-tech text-xs tracking-wider transition-colors"
            >
              CHEATS
            </button>

            {/* Main CTA */}
            <a
              href="#jogos"
              onClick={() => soundEngine.playClickSound()}
              className="hidden sm:inline-flex items-center justify-center font-bebas tracking-wider text-base px-5 py-2 rounded bg-gradient-to-r from-[#FF3CAC] to-[#FF8A3D] text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,60,172,0.5)] active:scale-95 transition-all duration-200"
            >
              EXPLORAR UNIVERSO
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundEngine.playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090D]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  soundEngine.playClickSound();
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-bebas tracking-wider py-1 border-b border-white/5 transition-colors ${
                  activeSection === link.id ? 'text-[#FF3CAC]' : 'text-zinc-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRadio();
                }}
                className="flex-1 py-2 px-3 rounded bg-[#12131B] border border-[#00E5FF]/40 text-[#00E5FF] font-mono-tech text-xs flex items-center justify-center gap-2"
              >
                <Radio size={14} /> RÁDIO 80s
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheats();
                }}
                className="flex-1 py-2 px-3 rounded bg-[#12131B] border border-[#FFD166]/40 text-[#FFD166] font-mono-tech text-xs flex items-center justify-center gap-2"
              >
                CÓDIGOS CHEATS
              </button>
            </div>

            <a
              href="#jogos"
              onClick={() => {
                soundEngine.playClickSound();
                setMobileMenuOpen(false);
              }}
              className="mt-2 text-center font-bebas tracking-wider text-lg py-2.5 rounded bg-gradient-to-r from-[#FF3CAC] to-[#FF8A3D] text-white shadow-[0_0_15px_rgba(255,60,172,0.5)]"
            >
              EXPLORAR UNIVERSO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

