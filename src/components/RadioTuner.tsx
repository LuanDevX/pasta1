import React, { useState, useEffect } from 'react';
import { RADIO_STATIONS } from '../data/trilogyData';
import type { RadioStation } from '../types';
import { soundEngine } from '../utils/audioSynthesizer';
import { Radio, Volume2, VolumeX, Play, Square, X } from 'lucide-react';

interface RadioTunerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RadioTuner: React.FC<RadioTunerProps> = ({ isOpen, onClose }) => {
  const [selectedStation, setSelectedStation] = useState<RadioStation>(RADIO_STATIONS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(soundEngine.getIsPlaying());
  const [volume, setVolume] = useState<number>(soundEngine.getVolume());
  const [freqBars, setFreqBars] = useState<number[]>([25, 60, 45, 80, 55, 30, 70, 90]);

  useEffect(() => {
    soundEngine.setVisualizerCallback((bars) => {
      // expand bars for retro radio stereo
      setFreqBars([...bars, ...bars.slice(0, 3).reverse()]);
    });
    return () => soundEngine.setVisualizerCallback(null);
  }, []);

  const handleTogglePlay = () => {
    soundEngine.playClickSound();
    const playing = soundEngine.toggle();
    setIsPlaying(playing);
  };

  const handleSelectStation = (station: RadioStation) => {
    soundEngine.playClickSound();
    setSelectedStation(station);
    soundEngine.setPreset(station.gameId);
    if (!isPlaying) {
      soundEngine.start();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundEngine.setVolume(val);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F1018] border-2 border-[#FF3CAC]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,60,172,0.4)] flex flex-col gap-6">
        
        {/* Retro Stereo Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF3CAC]/20 text-[#FF3CAC] flex items-center justify-center border border-[#FF3CAC]/40">
              <Radio size={22} className="animate-pulse" />
            </div>
            <div>
              <span className="font-mono-tech text-[10px] text-[#00E5FF] tracking-widest uppercase block">
                RECEPTOR STEREO CANAL 80s // TRILOGY AUDIO
              </span>
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                RÁDIO DOS ANOS 80 & 90
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playClickSound();
              onClose();
            }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Fechar sintonizador"
          >
            <X size={20} />
          </button>
        </div>

        {/* Vintage Radio LCD Display */}
        <div className="bg-[#05060A] p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-inner">
          <div className="text-center sm:text-left">
            <span className="font-mono-tech text-xs text-[#00E5FF] tracking-wider block mb-1">
              {selectedStation.frequency} • {selectedStation.genre}
            </span>
            <div className="font-bebas text-5xl sm:text-6xl text-white tracking-wider flex items-center gap-3">
              <span style={{ color: selectedStation.color }}>{selectedStation.name}</span>
            </div>
            <span className="font-manrope text-xs text-zinc-400 mt-1 block">
              Locutor Oficial: <strong className="text-zinc-200">{selectedStation.host}</strong>
            </span>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-end gap-1.5 h-16 bg-black/60 p-3 rounded-xl border border-white/5">
            {freqBars.map((h, i) => (
              <span
                key={i}
                className="w-2 rounded-t transition-all duration-75"
                style={{
                  height: isPlaying ? `${Math.max(6, h * 0.6)}px` : '4px',
                  backgroundColor: isPlaying ? selectedStation.color : '#333',
                  boxShadow: isPlaying ? `0 0 10px ${selectedStation.color}` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Station Description */}
        <p className="text-xs text-zinc-300 font-manrope leading-relaxed bg-[#141522] p-3.5 rounded-xl border border-white/5">
          {selectedStation.description}
        </p>

        {/* Station Selector Buttons */}
        <div>
          <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
            SELECIONE A ESTAÇÃO DE RÁDIO:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {RADIO_STATIONS.map((station) => (
              <button
                key={station.id}
                onClick={() => handleSelectStation(station)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedStation.id === station.id
                    ? 'bg-[#1B1D2A] border-[#FF3CAC] text-white shadow-[0_0_15px_rgba(255,60,172,0.3)]'
                    : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-bebas text-xl text-white">{station.name}</span>
                  <span className="font-mono-tech text-[10px] text-zinc-400">{station.frequency}</span>
                </div>
                <span className="text-[11px] font-manrope text-zinc-400 truncate w-full">
                  {station.genre}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Master Controls: Play/Stop & Volume Slider */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleTogglePlay}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bebas text-xl tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                isPlaying
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30'
                  : 'bg-gradient-to-r from-[#FF3CAC] to-[#00E5FF] text-white shadow-[0_0_20px_rgba(255,60,172,0.5)]'
              }`}
            >
              {isPlaying ? (
                <>
                  <Square size={16} fill="currentColor" />
                  <span>PARAR RÁDIO</span>
                </>
              ) : (
                <>
                  <Play size={16} fill="currentColor" />
                  <span>SINTONIZAR TRILHA</span>
                </>
              )}
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3 w-full sm:w-64">
            {volume === 0 ? <VolumeX size={18} className="text-zinc-500" /> : <Volume2 size={18} className="text-[#00E5FF]" />}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full accent-[#FF3CAC] cursor-pointer"
            />
            <span className="font-mono-tech text-xs text-zinc-400 min-w-8 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
