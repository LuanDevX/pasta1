// Web Audio API Procedural Synthwave & Ambient Sound Generator
// 100% original, generated in real-time, zero external files or copyright issues.

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentVolume: number = 0.35;
  private timerId: number | null = null;
  private gainNode: GainNode | null = null;
  private currentPreset: 'vice-city' | 'san-andreas' | 'gta3' = 'vice-city';
  private step: number = 0;

  // Visualizer callback
  private onFrequencyUpdate: ((freq: number[]) => void) | null = null;

  public setVisualizerCallback(cb: ((freq: number[]) => void) | null) {
    this.onFrequencyUpdate = cb;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setTargetAtTime(this.currentVolume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.currentVolume;
  }

  public setPreset(preset: 'vice-city' | 'san-andreas' | 'gta3') {
    this.currentPreset = preset;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.initContext();
    if (!this.ctx) return;
    this.isPlaying = true;
    this.step = 0;

    // Master Gain
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    // Audio step loop at 120 BPM (16th notes = 125ms)
    const intervalMs = 125;
    this.timerId = window.setInterval(() => {
      this.playStep();
    }, intervalMs);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private playStep() {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return;

    const time = this.ctx.currentTime;
    const s = this.step % 32;

    if (this.currentPreset === 'vice-city') {
      // 80s Synthwave Bassline (A minor - F - C - G)
      const bassNotes = [
        110.0, 110.0, 110.0, 110.0, 110.0, 110.0, 110.0, 130.81, // A2 -> C3
        87.31, 87.31, 87.31, 87.31, 87.31, 87.31, 87.31, 98.0,   // F2 -> G2
        130.81, 130.81, 130.81, 130.81, 130.81, 130.81, 130.81, 146.83, // C3 -> D3
        98.0, 98.0, 98.0, 98.0, 98.0, 98.0, 123.47, 110.0       // G2 -> B2 -> A2
      ];

      const leadNotes = [
        440.0, 0, 523.25, 0, 659.25, 0, 587.33, 0,
        349.23, 0, 440.0, 0, 523.25, 0, 440.0, 0,
        523.25, 0, 659.25, 0, 783.99, 0, 659.25, 0,
        392.0, 0, 493.88, 0, 587.33, 0, 440.0, 0
      ];

      // Bass note
      this.synthBass(bassNotes[s], time, 0.1);

      // Lead note every other step
      if (leadNotes[s] > 0) {
        this.synthLead(leadNotes[s], time, 0.2);
      }

      // Kick drum on 1, 5, 9, 13... (four on the floor)
      if (s % 4 === 0) {
        this.synthKick(time);
      }

      // Snare on 4, 12, 20, 28
      if (s % 8 === 4) {
        this.synthSnare(time);
      }

      // Hi-hat on every offbeat
      if (s % 2 === 1) {
        this.synthHiHat(time);
      }
    } else if (this.currentPreset === 'san-andreas') {
      // 90s G-Funk style groove (D minor pentatonic, slow bounce)
      const gFunkBass = [
        73.42, 0, 73.42, 0, 82.41, 0, 73.42, 0,
        98.0, 0, 87.31, 0, 73.42, 0, 65.41, 0,
        73.42, 0, 73.42, 0, 82.41, 0, 98.0, 0,
        110.0, 0, 98.0, 0, 82.41, 0, 73.42, 0
      ];

      const gFunkWhistle = [
        0, 0, 1174.66, 0, 0, 0, 1318.51, 0,
        1046.50, 0, 0, 0, 1174.66, 0, 0, 0,
        0, 0, 1174.66, 0, 0, 0, 1567.98, 0,
        1396.91, 0, 0, 0, 1174.66, 0, 0, 0
      ];

      if (gFunkBass[s] > 0) {
        this.synthBass(gFunkBass[s], time, 0.18);
      }
      if (gFunkWhistle[s] > 0) {
        this.synthSineLead(gFunkWhistle[s], time, 0.28);
      }
      if (s % 8 === 0) {
        this.synthKick(time);
      }
      if (s % 8 === 4) {
        this.synthSnare(time);
      }
      if (s % 2 === 0) {
        this.synthHiHat(time);
      }
    } else {
      // GTA III Moody Dark Urban Noir
      const noirDrone = [
        65.41, 65.41, 65.41, 65.41, 65.41, 65.41, 65.41, 65.41,
        58.27, 58.27, 58.27, 58.27, 58.27, 58.27, 58.27, 58.27,
        49.00, 49.00, 49.00, 49.00, 49.00, 49.00, 49.00, 49.00,
        65.41, 65.41, 65.41, 65.41, 73.42, 73.42, 65.41, 65.41
      ];

      this.synthBass(noirDrone[s], time, 0.25, 'sawtooth');
      if (s % 16 === 0) {
        this.synthSineLead(261.63, time, 0.8);
      }
      if (s % 16 === 8) {
        this.synthSineLead(246.94, time, 0.8);
      }
      if (s % 8 === 0) {
        this.synthKick(time);
      }
      if (s % 4 === 2) {
        this.synthHiHat(time);
      }
    }

    // Trigger visualizer bars
    if (this.onFrequencyUpdate) {
      const bars = [
        Math.min(100, Math.floor(30 + Math.random() * 65)),
        Math.min(100, Math.floor(40 + Math.random() * 55)),
        Math.min(100, Math.floor(20 + Math.random() * 75)),
        Math.min(100, Math.floor(50 + Math.random() * 50)),
        Math.min(100, Math.floor(15 + Math.random() * 80))
      ];
      this.onFrequencyUpdate(bars);
    }

    this.step++;
  }

  private synthBass(freq: number, time: number, duration: number, type: OscillatorType = 'sawtooth') {
    if (!this.ctx || !this.gainNode) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, time);
    filter.Q.setValueAtTime(4, time);

    gain.gain.setValueAtTime(0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);

    osc.start(time);
    osc.stop(time + duration);
  }

  private synthLead(freq: number, time: number, duration: number) {
    if (!this.ctx || !this.gainNode) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.gainNode);

    osc.start(time);
    osc.stop(time + duration);
  }

  private synthSineLead(freq: number, time: number, duration: number) {
    if (!this.ctx || !this.gainNode) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.gainNode);

    osc.start(time);
    osc.stop(time + duration);
  }

  private synthKick(time: number) {
    if (!this.ctx || !this.gainNode) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(35, time + 0.12);

    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    osc.connect(gain);
    gain.connect(this.gainNode);

    osc.start(time);
    osc.stop(time + 0.12);
  }

  private synthSnare(time: number) {
    if (!this.ctx || !this.gainNode) return;
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(800, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);

    noise.start(time);
    noise.stop(time + 0.08);
  }

  private synthHiHat(time: number) {
    if (!this.ctx || !this.gainNode) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(7500, time);

    gain.gain.setValueAtTime(0.04, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

    osc.connect(gain);
    gain.connect(this.gainNode);

    osc.start(time);
    osc.stop(time + 0.03);
  }

  // SOUND FX: Button clicks and Cheats
  public playClickSound() {
    this.initContext();
    if (!this.ctx) return;
    const time = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, time);
    osc.frequency.exponentialRampToValueAtTime(300, time + 0.04);

    gain.gain.setValueAtTime(0.08 * this.currentVolume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.04);
  }

  public playCheatSound() {
    this.initContext();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const startTime = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const t = startTime + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.25 * this.currentVolume, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.12);
    });
  }

  public playSirenSound() {
    this.initContext();
    if (!this.ctx) return;
    const time = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, time);
    osc.frequency.linearRampToValueAtTime(900, time + 0.25);
    osc.frequency.linearRampToValueAtTime(600, time + 0.5);

    gain.gain.setValueAtTime(0.12 * this.currentVolume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.55);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.55);
  }
}

export const soundEngine = new SoundEngine();

