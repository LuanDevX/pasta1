export type GameId = 'vice-city' | 'san-andreas' | 'gta3';

export interface GameTheme {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  badgeBg: string;
  gradient: string;
  borderHover: string;
}

export interface Game {
  id: GameId;
  order: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  year: number;
  timeline: string;
  setting: string;
  protagonist: string;
  theme: GameTheme;
  shortDescription: string;
  fullDescription: string;
  backgroundImage: string;
  accentColor: string;
  features: string[];
  weapons: string[];
  vehicles: string[];
  radioHighlights: string[];
  famousQuote: {
    text: string;
    author: string;
  };
  stats: {
    missions: number;
    radios: number;
    vehiclesCount: number;
    mapArea: string;
  };
}

export interface Character {
  id: string;
  name: string;
  alias: string;
  gameId: GameId;
  gameTitle: string;
  role: string;
  voiceActor: string;
  quote: string;
  description: string;
  fullBio: string;
  image: string;
  signatureWeapon: string;
  signatureVehicle: string;
  allegiance: string;
  stats: {
    reputation: number; // 0-100
    stamina: number;
    shooting: number;
    stealth: number;
  };
  accentColor: string;
}

export interface District {
  name: string;
  vibe: string;
  dangerLevel: 'Baixo' | 'Médio' | 'Alto' | 'Extremo';
  description: string;
  landmarks: string[];
}

export interface City {
  id: string;
  name: string;
  gameId: GameId;
  gameTitle: string;
  stateOrRegion: string;
  year: string;
  climate: string;
  overview: string;
  districts: District[];
  image: string;
  accentColor: string;
  keyFeatures: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  gameId: GameId | 'all';
  category: 'all' | 'vice-city' | 'san-andreas' | 'gta3' | 'veiculos' | 'cidades';
  image: string;
  caption: string;
  aspect: 'wide' | 'tall' | 'square';
  tag: string;
}

export interface RadioStation {
  id: string;
  name: string;
  gameId: GameId;
  frequency: string;
  genre: string;
  host: string;
  description: string;
  bpm: number;
  color: string;
  sampleTracks: string[];
}

export interface CheatCode {
  code: string;
  effect: string;
  gameId: GameId;
  category: 'Armas' | 'Saúde & Proteção' | 'Veículos' | 'Clima & Caos';
}

