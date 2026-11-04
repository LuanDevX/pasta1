import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrilogySection } from './components/TrilogySection';
import { ViceCityExperience } from './components/ViceCityExperience';
import { CharactersSection } from './components/CharactersSection';
import { CitiesSection } from './components/CitiesSection';
import { GallerySection } from './components/GallerySection';
import { RadioTuner } from './components/RadioTuner';
import { CheatConsole } from './components/CheatConsole';
import { GameModal } from './components/GameModal';
import { Footer } from './components/Footer';
import { TRILOGY_GAMES, CHEAT_CODES } from './data/trilogyData';
import type { Game } from './types';
import { soundEngine } from './utils/audioSynthesizer';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export function App() {
  const [isRadioOpen, setIsRadioOpen] = useState(false);
  const [isCheatsOpen, setIsCheatsOpen] = useState(false);
  const [activeGameModal, setActiveGameModal] = useState<Game | null>(null);
  const [cheatBanner, setCheatBanner] = useState<string | null>(null);
  const [wantedLevel, setWantedLevel] = useState<number>(1);
  const [typedBuffer, setTypedBuffer] = useState<string>('');

  const triggerCheatBanner = (message: string) => {
    setCheatBanner(message);
    setTimeout(() => {
      setCheatBanner(null);
    }, 4500);
  };

  // Global Cheat Code listener on keystrokes (e.g. typing "ASPIRINE" or "HESOYAM" anywhere!)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ignore if input or textarea focused
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (/^[a-zA-Z]$/.test(e.key)) {
        const nextBuffer = (typedBuffer + e.key.toUpperCase()).slice(-20);
        setTypedBuffer(nextBuffer);

        for (const cheat of CHEAT_CODES) {
          if (nextBuffer.endsWith(cheat.code)) {
            soundEngine.playCheatSound();
            confetti({
              particleCount: 100,
              spread: 80,
              origin: { y: 0.5 },
              colors: ['#FF3CAC', '#00E5FF', '#FFD166', '#10B981']
            });
            triggerCheatBanner(`CHEAT ATIVADO: ${cheat.effect.toUpperCase()}`);
            setTypedBuffer('');
            break;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [typedBuffer]);

  const handlePlayTheme = (gameId: 'vice-city' | 'san-andreas' | 'gta3') => {
    soundEngine.setPreset(gameId);
    soundEngine.start();
  };

  const handleSelectCityGame = (gameId: string) => {
    const found = TRILOGY_GAMES.find((g) => g.id === gameId);
    if (found) {
      setActiveGameModal(found);
    }
  };

  const handleExploreViceCity = () => {
    const el = document.getElementById('vice-city-exp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTrilogy = () => {
    const el = document.getElementById('jogos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F4F4F8] selection:bg-[#FF3CAC] selection:text-black">
      
      {/* Top Banner Alert when Cheat Activated */}
      {cheatBanner && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-[#FFD166] text-black px-6 py-2.5 rounded-full font-bebas text-2xl tracking-widest uppercase shadow-[0_0_35px_rgba(255,209,102,0.9)] flex items-center gap-2 border-2 border-white">
            <Sparkles size={20} className="text-black" />
            <span>{cheatBanner}</span>
            <Sparkles size={20} className="text-black" />
          </div>
        </div>
      )}

      {/* Main Global Navigation */}
      <Header
        onOpenRadio={() => setIsRadioOpen(true)}
        onOpenCheats={() => setIsCheatsOpen(true)}
        wantedLevel={wantedLevel}
        onSetWantedLevel={setWantedLevel}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <HeroSection
          onExploreViceCity={handleExploreViceCity}
          onExploreTrilogy={handleExploreTrilogy}
        />

        {/* 2. The Three Universes Section */}
        <TrilogySection onSelectGame={(game) => setActiveGameModal(game)} />

        {/* 3. Crown Jewel: Vice City Experience */}
        <ViceCityExperience />

        {/* 4. Iconic Characters Roster */}
        <CharactersSection />

        {/* 5. Cities & Distritos Exploration */}
        <CitiesSection onSelectCityGame={handleSelectCityGame} />

        {/* 6. Curated Visual Gallery */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer
        onOpenRadio={() => setIsRadioOpen(true)}
        onOpenCheats={() => setIsCheatsOpen(true)}
      />

      {/* Modals & Popups */}
      <RadioTuner
        isOpen={isRadioOpen}
        onClose={() => setIsRadioOpen(false)}
      />

      <CheatConsole
        isOpen={isCheatsOpen}
        onClose={() => setIsCheatsOpen(false)}
        onCheatActivated={triggerCheatBanner}
      />

      <GameModal
        game={activeGameModal}
        onClose={() => setActiveGameModal(null)}
        onPlayTheme={handlePlayTheme}
      />

    </div>
  );
}

export default App;
