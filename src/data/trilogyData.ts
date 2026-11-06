import type { Game, Character, City, GalleryItem, RadioStation, CheatCode } from '../types';

export const TRILOGY_GAMES: Game[] = [
  {
    id: 'vice-city',
    order: '01',
    title: 'GTA VICE CITY',
    tagline: 'WELCOME TO THE 1980s',
    heroHeadline: 'AFTER DARK, EVERYTHING CHANGES',
    year: 1986,
    timeline: 'Outubro de 1986',
    setting: 'Vice City, Flórida',
    protagonist: 'Tommy Vercetti',
    accentColor: '#FF3CAC',
    theme: {
      primary: '#FF3CAC', // Neon Pink
      secondary: '#00E5FF', // Electric Cyan
      accent: '#FF8A3D', // Sunset Orange
      glow: 'rgba(255, 60, 172, 0.5)',
      badgeBg: 'rgba(255, 60, 172, 0.15)',
      gradient: 'from-[#FF3CAC]/30 via-[#24133D]/60 to-[#08090D]',
      borderHover: 'hover:border-[#FF3CAC]',
    },
    shortDescription: 'Ternos em tons pastel, noites banhadas a neon, negócios bilionários de cocaína e a ascensão implacável de Tommy Vercetti ao trono criminal.',
    fullDescription: 'Lançado originalmente em 2002, Grand Theft Auto: Vice City transportou os jogadores para a década de 1980 em uma recriação vibrante de Miami. Após passar quinze anos na prisão de Liberty City por ordem dos Forelli, Tommy Vercetti é enviado para o sul para expandir os negócios da família. Quando uma transação milionária sofre uma emboscada violenta nas docas, Tommy perde o dinheiro e as drogas — iniciando uma caçada sangrenta para recuperar seu império e tomar a cidade inteira para si.',
    backgroundImage: `${import.meta.env.BASE_URL}images/vice-city-infernus-beach.jpg`,
    features: [
      'Aquisição e gerenciamento de propriedades e negócios ilegais',
      'Trilha sonora cult dos anos 80 com mais de 9 horas de clássicos',
      'Pilotagem de motocicletas, barcos velozes e helicópteros',
      'Estética Art Déco e luzes neon inspirada em Miami Vice e Scarface',
      'Voz do lendário ator Ray Liotta como Tommy Vercetti'
    ],
    weapons: ['Katana', 'Colt Python .357', 'M4 Assault', 'Motosserra', 'Spas-12', 'Minigun'],
    vehicles: ['Infernus', 'Cheetah', 'PCJ-600', 'Faggio', 'Voodoo', 'Hunter', 'Cuban Hermes'],
    radioHighlights: ['Flash FM (Toni)', 'Wave 103 (Adam First)', 'Emotion 98.3 (Fernando)', 'V-Rock (Lazlow)'],
    famousQuote: {
      text: 'Eu coloco a cabeça pra fora do bueiro por cinco segundos e o destino joga merda na minha cara.',
      author: 'Tommy Vercetti'
    },
    stats: {
      missions: 59,
      radios: 9,
      vehiclesCount: 101,
      mapArea: '14.6 km² de puro glamour e perigo'
    }
  },
  {
    id: 'san-andreas',
    order: '02',
    title: 'GTA SAN ANDREAS',
    tagline: 'THE STREETS REMEMBER',
    heroHeadline: 'RESPECT IS EVERYTHING',
    year: 1992,
    timeline: 'Início de 1992',
    setting: 'Estado de San Andreas (Los Santos, San Fierro, Las Venturas)',
    protagonist: 'Carl "CJ" Johnson',
    accentColor: '#10B981',
    theme: {
      primary: '#10B981', // Grove Green
      secondary: '#F59E0B', // Sunset Gold
      accent: '#E5E7EB', // Concrete White
      glow: 'rgba(16, 185, 129, 0.5)',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      gradient: 'from-[#10B981]/25 via-[#064E3B]/50 to-[#08090D]',
      borderHover: 'hover:border-[#10B981]',
    },
    shortDescription: 'Cultura hip-hop dos anos 90, guerra de gangues em Grove Street, guerras territoriais e a jornada épica de CJ através de três cidades.',
    fullDescription: 'Cinco anos atrás, Carl Johnson escapou das pressões da vida em Los Santos, San Andreas — uma cidade dilacerada por guerras de gangues, drogas e corrupção governamental. Agora, no início dos anos 90, CJ é obrigado a voltar para casa após o assassinato brutal de sua mãe. Sua família está despedaçada, seus amigos de infância caminham para o desastre e policiais corruptos armam para incriminá-lo por homicídio.',
    backgroundImage: `${import.meta.env.BASE_URL}images/san-andreas-grovestreet.jpg`,
    features: [
      'Três metrópoles completas interligadas por desertos, montanhas e florestas',
      'Personalização profunda: condicionamento físico, tatuagens, roupas e carros',
      'Guerras de gangues e conquista de territórios em Los Santos',
      'Saltos de paraquedas, caça a jato militar Hydra e jetpack experimental',
      'Narrativa épica sobre lealdade familiar, traição e redenção'
    ],
    weapons: ['Desert Eagle', 'Micro Uzi', 'AK-47', 'Tec-9', 'Sniper Rifle', 'Jetpack & C4'],
    vehicles: ['Hydra (Caça)', 'Savanna (Lowrider)', 'NRG-500', 'BMX', 'Monster Truck', 'Sabre'],
    radioHighlights: ['Radio Los Santos (Julio G)', 'K-DST (Tommy The Nightmare)', 'SF-UR (Hans)', 'K-Rose (Mary-Beth)'],
    famousQuote: {
      text: 'Ah shit, here we go again. Pior lugar do mundo, território dos Ballas de Rolling Heights.',
      author: 'Carl "CJ" Johnson'
    },
    stats: {
      missions: 104,
      radios: 11,
      vehiclesCount: 212,
      mapArea: '36.0 km² de pura diversidade'
    }
  },
  {
    id: 'gta3',
    order: '03',
    title: 'GTA III',
    tagline: 'WELCOME TO LIBERTY CITY',
    heroHeadline: 'WHERE CRIME FOUND ITS 3D SOUL',
    year: 2001,
    timeline: 'Outono de 2001',
    setting: 'Liberty City (Portland, Staunton Island, Shoreside Vale)',
    protagonist: 'Claude Speed',
    accentColor: '#38BDF8',
    theme: {
      primary: '#38BDF8', // Liberty Sky Blue
      secondary: '#FACC15', // Urban Cab Yellow
      accent: '#94A3B8', // Slate Mist
      glow: 'rgba(56, 189, 248, 0.5)',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      gradient: 'from-[#0284C7]/25 via-[#0F172A]/70 to-[#08090D]',
      borderHover: 'hover:border-[#38BDF8]',
    },
    shortDescription: 'A revolução que definiu os jogos de mundo aberto 3D. Uma metrópole fria, implacável, chuvosa e dominada por cartéis e máfias em guerra.',
    fullDescription: 'Em outubro de 2001, GTA III revolucionou a indústria dos videogames para sempre, estabelecendo os alicerces do mundo aberto moderno. Traído e abandonado à beira da morte durante um assalto ao Liberty City Bank pela própria namorada Catalina, o protagonista silencioso Claude escapa de um comboio penitenciário na Ponte Callahan. Sem nada a perder, ele se infiltra no submundo da Máfia Leone, da Yakuza e dos Cartéis colombianos em busca de vingança.',
    backgroundImage: `${import.meta.env.BASE_URL}images/liberty-city-panorama.jpg`,
    features: [
      'Pioneiro absoluto da revolução 3D em mundos abertos da história dos games',
      'Três ilhas industriais com atmosferas urbanas noir e chuva constante',
      'Conflito entre Famílias da Máfia Italiana, Tríades, Yakuza e Cartel',
      'Rádios icônicas repletas de sátira social e canções originais de cinema',
      'Física de destruição e resposta policial que redefiniram o gênero de ação'
    ],
    weapons: ['Bastão de Beisebol', 'Pistol 9mm', 'Micro SMG', 'M16', 'Lança-Foguetes', 'Coquetel Molotov'],
    vehicles: ['Banshee', 'Mafia Sentinel', 'Kuruma', 'Stinger', 'Patriot', 'Dodo'],
    radioHighlights: ['Head Radio (Michael Hunt)', 'Flashback 95.6 (Toni)', 'Double Clef FM', 'Lips 106'],
    famousQuote: {
      text: 'Conheço um lugar perto do Red Light District onde podemos nos esconder. Mas minhas mãos tão arrebentadas, então é melhor você dirigir, irmão.',
      author: '8-Ball'
    },
    stats: {
      missions: 73,
      radios: 9,
      vehiclesCount: 56,
      mapArea: '8.9 km² de asfalto molhado e vingança'
    }
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'tommy-vercetti',
    name: 'Tommy Vercetti',
    alias: 'O Açougueiro de Harwood',
    gameId: 'vice-city',
    gameTitle: 'GTA Vice City',
    role: 'Protagonista • Don do Vercetti Estate',
    voiceActor: 'Ray Liotta',
    quote: 'Você tem uma escolha simples: ou você trabalha pra mim, ou eu tomo o que é seu à força.',
    description: 'Após cumprir 15 anos de cadeia em silêncio pela família Forelli, Tommy chega a Vice City sem dinheiro e com raiva de sobra. Carismático, implacável e dotado de instintos letais, ele derrubou Ricardo Diaz e tomou a mansão de Starfish Island.',
    fullBio: 'Nascido em Liberty City, Tommy começou cedo como soldado fiel de Sonny Forelli. Quando foi enviado para uma armadilha em Harwood e cercado por onze assassinos, ele eliminou todos e ganhou a alcunha de "O Açougueiro de Harwood". Ao chegar a Vice City em 1986, Tommy recusou o papel de mero capanga e transformou seu terno azul-bebê no símbolo do poder supremo da cidade.',
    image: `${import.meta.env.BASE_URL}images/tommy-vercetti-portrait.jpg`,
    signatureWeapon: 'Colt Python .357 & M4',
    signatureVehicle: 'Infernus & PCJ-600',
    allegiance: 'Vercetti Crime Family',
    stats: {
      reputation: 98,
      stamina: 88,
      shooting: 95,
      stealth: 72
    },
    accentColor: '#FF3CAC'
  },
  {
    id: 'carl-johnson',
    name: 'Carl "CJ" Johnson',
    alias: 'CJ',
    gameId: 'san-andreas',
    gameTitle: 'GTA San Andreas',
    role: 'Protagonista • Segundo no Comando da Grove Street',
    voiceActor: 'Young Maylay',
    quote: 'Grove Street é o meu lar. Eu posso ter saído daqui, mas a rua nunca saiu de mim.',
    description: 'Leal, versátil e movido por sua família. CJ transformou a decadente Grove Street Families na maior força de San Andreas, desvendando conspirações policiais e traições históricas.',
    fullBio: 'Carl passou 5 anos em Liberty City tentando esquecer a tragédia da morte do seu irmão mais novo Brian. Seu retorno a Los Santos em 1992 para o funeral de sua mãe Beverly desencadeia uma jornada épica que abrange desde corridas de lowriders em Ganton até o roubo milionário no cassino Caligula em Las Venturas, além da destruição do império de crack dos Ballas e da C.R.A.S.H.',
    image: `${import.meta.env.BASE_URL}images/cj-portrait.jpg`,
    signatureWeapon: 'Desert Eagle & Tec-9',
    signatureVehicle: 'Savanna Lowrider & Hydra Jet',
    allegiance: 'Grove Street Families',
    stats: {
      reputation: 96,
      stamina: 96,
      shooting: 92,
      stealth: 85
    },
    accentColor: '#10B981'
  },
  {
    id: 'claude-speed',
    name: 'Claude Speed',
    alias: 'O Silencioso / The Kid',
    gameId: 'gta3',
    gameTitle: 'GTA III',
    role: 'Protagonista • Mercenário Vingador',
    voiceActor: 'Nenhum (Protagonista Silencioso)',
    quote: '[Olhar gélido e recarregamento firme do fuzil M16]',
    description: 'O mercenário sem palavras que não hesita, não faz perguntas e não deixa testemunhas vivas. Seu único objetivo é caçar Catalina e vingar a traição no banco de Liberty City.',
    fullBio: 'Claude é a personificação do anti-herói frio e pragmático. Após escapar do camburão com 8-Ball na Ponte Callahan, ele trabalha para mafiosos italianos, a Yakuza de Asuka Kasen e o bilionário da mídia Donald Love. Sem hesitação moral, ele cumpre contratos de eliminação cirúrgica até o confronto final na Represa Cochrane.',
    image: `${import.meta.env.BASE_URL}images/claude-speed-portrait.jpg`,
    signatureWeapon: 'M16 Assault Rifle & Sniper',
    signatureVehicle: 'Banshee & Mafia Sentinel',
    allegiance: 'Independente / Contratante mais bem pago',
    stats: {
      reputation: 90,
      stamina: 90,
      shooting: 98,
      stealth: 94
    },
    accentColor: '#38BDF8'
  },
  {
    id: 'lance-vance',
    name: 'Lance Vance',
    alias: 'Lance Dance',
    gameId: 'vice-city',
    gameTitle: 'GTA Vice City',
    role: 'Parceiro Ambicioso • Traficante',
    voiceActor: 'Philip Michael Thomas',
    quote: 'Este é o Lance Vance Dance, Tommy! Nós vamos comandar esta cidade!',
    description: 'Copiloto de Tommy em sua caçada contra Ricardo Diaz pela morte de seu irmão Victor Vance. Charmoso em seu terno branco impecável, mas com uma instabilidade emocional que custou caro.',
    fullBio: 'Piloto experiente de helicópteros e ex-parceiro de Victor Vance, Lance uniu forças com Tommy após o roubo na doca. Sua sede impaciente por respeito e seus ressentimentos secretos o levaram a conspirar com Sonny Forelli no fatídico tiroteio final no Vercetti Estate.',
    image: `${import.meta.env.BASE_URL}images/vice-city-tommy-neon.jpg`,
    signatureWeapon: 'Micro SMG & Sniper Rifle',
    signatureVehicle: 'Infernus Branco',
    allegiance: 'Vance Crime Family / Forelli',
    stats: {
      reputation: 75,
      stamina: 70,
      shooting: 80,
      stealth: 65
    },
    accentColor: '#FF8A3D'
  },
  {
    id: 'big-smoke',
    name: 'Melvin "Big Smoke" Harris',
    alias: 'Big Smoke',
    gameId: 'san-andreas',
    gameTitle: 'GTA San Andreas',
    role: 'Ex-Membro da Grove Street • Barão das Drogas',
    voiceActor: 'Clifton Powell',
    quote: 'Tudo o que tínhamos que fazer era seguir a porcaria do trem, CJ!',
    description: 'Figura icônica com apetite insaciável por fast food e provérbios filosóficos absurdos, que escondeu sob sua risada amigável a maior traição da história dos videogames.',
    fullBio: 'Membro sênior da Grove Street Families, Smoke seduziu Ryder e aliou-se ao Oficial Tenpenny da C.R.A.S.H. e aos Ballas para dominar o comércio de crack em Los Santos. Ele construiu sua fortaleza criminal na "Crack Palace" onde enfrentou CJ em um clímax inesquecível.',
    image: `${import.meta.env.BASE_URL}images/san-andreas-lowrider.jpg`,
    signatureWeapon: 'Spas Shotgun & Desert Eagle',
    signatureVehicle: 'Glendale Azul Claro',
    allegiance: 'Ballas & C.R.A.S.H.',
    stats: {
      reputation: 85,
      stamina: 60,
      shooting: 82,
      stealth: 55
    },
    accentColor: '#F59E0B'
  },
  {
    id: 'eight-ball',
    name: '8-Ball',
    alias: 'O Especialista em Explosivos',
    gameId: 'gta3',
    gameTitle: 'GTA III / Vice City',
    role: 'Mestre Armeiro & Fabricante de Bombas',
    voiceActor: 'Guru (Keith Elam)',
    quote: 'Minhas mãos estão queimadas, parceiro. Eu forneço os detonadores, você aperta o gatilho.',
    description: 'O homem que abriu as portas de Liberty City para Claude. Proprietário das lendárias oficinas de carros-bomba com filiais em Portland, Staunton e Shoreside Vale.',
    fullBio: 'Com mãos enfaixadas devido a um acidente com explosivos na prisão, 8-Ball é a ponte entre as gangues e os armamentos pesados. Ele planejou a explosão espetacular do navio do Cartel Colombiano no Porto de Portland.',
    image: `${import.meta.env.BASE_URL}images/vice-city-tommy-night.jpg`,
    signatureWeapon: 'Detonador C4 & Lança-Chamas',
    signatureVehicle: 'Enforcer Blindado',
    allegiance: 'Leone Family / Amigo Leal de Claude',
    stats: {
      reputation: 92,
      stamina: 80,
      shooting: 85,
      stealth: 78
    },
    accentColor: '#FACC15'
  }
];

export const CITIES: City[] = [
  {
    id: 'vice-city',
    name: 'VICE CITY',
    gameId: 'vice-city',
    gameTitle: 'GTA Vice City',
    stateOrRegion: 'Costa Sudeste da Flórida',
    year: '1986',
    climate: 'Tropical, pôr do sol incandescente e tempestades súbitas',
    accentColor: '#FF3CAC',
    image: `${import.meta.env.BASE_URL}images/vice-city-hero-sunset.jpg`,
    overview: 'Construída sobre areias douradas, palmeiras exóticas e rios de dinheiro ilícito. Vice City é a síntese do glamour americano e da devassidão criminal dos anos 80, dividida entre as praias de luxo e o continente industrial.',
    districts: [
      {
        name: 'Ocean Beach & Washington Beach',
        vibe: 'Art Déco, letreiros neon e desfile de superesportivos',
        dangerLevel: 'Baixo',
        description: 'A avenida costeira mais cobiçada do mundo, lar do Ocean View Hotel, bares de praia e iates de luxo ancorados sob a lua cheia.',
        landmarks: ['Ocean View Hotel', 'The Malibu Club', 'Farol de Ocean Beach', 'Marina de Cortez']
      },
      {
        name: 'Starfish Island',
        vibe: 'Mansões fortificadas, riqueza ilimitada e máfia armada',
        dangerLevel: 'Médio',
        description: 'Uma ilha privada no meio da baía com mansões cercadas por seguranças particulares, piscinas cinematográficas e labirintos de sebes.',
        landmarks: ['Vercetti Estate (Antiga Mansão Diaz)', 'Heliporto Privativo', 'Labirinto das Sebes']
      },
      {
        name: 'Little Haiti & Little Havana',
        vibe: 'Guerras territoriais de facções, fábricas e becos estreitos',
        dangerLevel: 'Alto',
        description: 'Ruas densas marcadas pela rivalidade mortal entre os Haitianos comandados por Tia Poulet e os Cubanos de Umberto Robina.',
        landmarks: ['Café Robina', 'Fábrica de Drogas Haitiana', 'Oficina de Sunshine Autos']
      },
      {
        name: 'Downtown & Escobar International',
        vibe: 'Arranha-céus de escritórios, estádios de rock e pistas de pouso',
        dangerLevel: 'Médio',
        description: 'O centro financeiro da cidade, onde executivos corruptos fecham negócios enquanto aviões cargueiros decolam para a América do Sul.',
        landmarks: ['Hyman Memorial Stadium', 'Escobar International Airport', 'Estúdio da K-Chat & V-Rock']
      }
    ],
    keyFeatures: [
      'Hotspot mundial de tráfico de drogas dos anos 80',
      'Orla com 15+ hotéis com iluminação neon pulsante',
      'Complexo de compra de propriedades lucrativas',
      'Canais navegáveis repletos de lanchas policiais e barcos a motor'
    ]
  },
  {
    id: 'san-andreas',
    name: 'SAN ANDREAS',
    gameId: 'san-andreas',
    gameTitle: 'GTA San Andreas',
    stateOrRegion: 'Costa Oeste dos EUA (Califórnia e Nevada ficcionais)',
    year: '1992',
    climate: 'Névoa litorânea, deserto escaldante e brisas metropolitanas',
    accentColor: '#10B981',
    image: `${import.meta.env.BASE_URL}images/san-andreas-grovestreet.jpg`,
    overview: 'Um estado colossal composto por três capitais marcantes — a ensolarada Los Santos, a montanhosa e sofisticada San Fierro e a eletrizante Las Venturas —, entremeadas por condados rurais e desfiladeiros.',
    districts: [
      {
        name: 'Los Santos (Ganton & Vinewood)',
        vibe: 'Cultura de rua, colinas de estrelas de cinema e guerras de gangues',
        dangerLevel: 'Extremo',
        description: 'O epicentro da guerra territorial entre Grove Street Families, Ballas e Vagos, sob a sombra das mansões milionárias de Vinewood Hills.',
        landmarks: ['Grove Street Cul-de-sac', 'Letreiro de Vinewood', 'Playa del Seville', 'Rua dos Ballas de Idlewood']
      },
      {
        name: 'San Fierro',
        vibe: 'Ladeiras vertiginosas, bondes, contracultura e fábricas portuárias',
        dangerLevel: 'Médio',
        description: 'Inspirada em San Francisco, uma cidade portuária famosa por suas curvas cinematográficas, névoa espessa e estaleiros navais.',
        landmarks: ['Gant Bridge', 'Garagem Doherty de CJ', 'Chinatown', 'Battery Point']
      },
      {
        name: 'Las Venturas & Deserto de Bone County',
        vibe: 'Cassinos monumentais, máfias de Las Vegas e segredos governamentais',
        dangerLevel: 'Alto',
        description: 'Um oásis de luzes neon no deserto onde milhões são apostados a cada segundo em resorts extravagantes da Máfia de Liberty City.',
        landmarks: ['The Strip dos Cassinos', 'Cassino Os Quatro Dragões', 'Caligula Palace', 'Base Militar Área 69']
      }
    ],
    keyFeatures: [
      'Maior mapa da era PS2 com 36 quilômetros quadrados exploráveis',
      'Sistema de controle e invasão de território com tropas de gangue',
      'Variedade biomecânica completa: montanha Mount Chiliad, florestas e desertos'
    ]
  },
  {
    id: 'liberty-city',
    name: 'LIBERTY CITY',
    gameId: 'gta3',
    gameTitle: 'GTA III',
    stateOrRegion: 'Costa Nordeste dos EUA (Metrópole de Nova York ficcional)',
    year: '2001',
    climate: 'Céus cinzentos, asfalto molhado, chuvas constantes e nevoeiro denso',
    accentColor: '#38BDF8',
    image: `${import.meta.env.BASE_URL}images/liberty-city-panorama.jpg`,
    overview: 'Apelidada de o "Pior Lugar da América", Liberty City é uma selva de concreto dividida em três ilhas desiguais interligadas por pontes e túneis em constante bloqueio policial.',
    districts: [
      {
        name: 'Portland',
        vibe: 'Docks industriais, fumaça de chaminés, armazéns e a Máfia Leone',
        dangerLevel: 'Alto',
        description: 'O distrito industrial histórico, dominado pela Família Leone em Saint Mark\'s, pelas Tríades na Chinatown e pelos Diablos.',
        landmarks: ['Ponte Callahan', 'Mansão de Salvatore Leone', 'Oficina de bombas do 8-Ball', 'Sex Club Seven']
      },
      {
        name: 'Staunton Island',
        vibe: 'Arranha-céus de aço, parques municipais e a Yakuza de Asuka',
        dangerLevel: 'Médio',
        description: 'O coração corporativo de Liberty City, onde a Yakuza opera em Torrington e os Cartéis disputam os canteiros de obras em Fort Staunton.',
        landmarks: ['Belleville Park', 'Cassino de Kenji', 'Donald Love Media Tower', 'Estádio Memorial']
      },
      {
        name: 'Shoreside Vale',
        vibe: 'Subúrbios residenciais encostados em represas sombrias e o aeroporto',
        dangerLevel: 'Extremo',
        description: 'Condomínios residenciais cercados por colinas íngremes e a impenetrável Represa Cochrane, base do Cartel Colombiano.',
        landmarks: ['Francis International Airport', 'Represa Cochrane', 'Mansões do Cartel em Cedar Grove']
      }
    ],
    keyFeatures: [
      'A primeira cidade verdadeiramente tridimensional da era moderna dos games',
      'Tráfego com pedestres dotados de rotinas e reações imprevisíveis',
      'Atmosfera noir e chuva permanente inspirada nos clássicos de máfia'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Pôr do Sol em Washington Beach',
    gameId: 'vice-city',
    category: 'vice-city',
    image: `${import.meta.env.BASE_URL}images/vice-city-hero-sunset.jpg`,
    caption: 'O icônico horizonte de Vice City ao entardecer: superesportivos na rodovia sob o sol poente e palmeiras tropicais.',
    aspect: 'wide',
    tag: 'Vice City 1986'
  },
  {
    id: 'g2',
    title: 'Tommy Vercetti em Ocean Drive',
    gameId: 'vice-city',
    category: 'vice-city',
    image: `${import.meta.env.BASE_URL}images/vice-city-tommy-neon.jpg`,
    caption: 'Tommy Vercetti em seu clássico terno azul-bebê em frente ao letreiro luminoso do Ocean View Hotel.',
    aspect: 'square',
    tag: 'Protagonista'
  },
  {
    id: 'g3',
    title: 'O Lendário Malibu Club',
    gameId: 'vice-city',
    category: 'vice-city',
    image: `${import.meta.env.BASE_URL}images/vice-city-malibu-club.jpg`,
    caption: 'A fachada Art Déco do Malibu Club brilhando em neon magenta e ciano com um esportivo branco estacionado.',
    aspect: 'wide',
    tag: 'Noite & Glamour'
  },
  {
    id: 'g4',
    title: 'Infernus na Praia ao Entardecer',
    gameId: 'vice-city',
    category: 'veiculos',
    image: `${import.meta.env.BASE_URL}images/vice-city-infernus-beach.jpg`,
    caption: 'O superesportivo Infernus vermelho descansando nas areias de Washington Beach enquanto os neons da orla acendem.',
    aspect: 'wide',
    tag: 'Supercarros'
  },
  {
    id: 'g5',
    title: 'Grove Street ao Cair da Noite',
    gameId: 'san-andreas',
    category: 'san-andreas',
    image: `${import.meta.env.BASE_URL}images/san-andreas-grovestreet.jpg`,
    caption: 'O lendário cul-de-sac de Ganton com o horizonte iluminado dos arranha-céus de Los Santos ao fundo.',
    aspect: 'wide',
    tag: 'Los Santos'
  },
  {
    id: 'g6',
    title: 'Lowrider Hidráulico em Los Santos',
    gameId: 'san-andreas',
    category: 'veiculos',
    image: `${import.meta.env.BASE_URL}images/san-andreas-lowrider.jpg`,
    caption: 'Um clássico lowrider verde metálico com suspensão hidráulica inclinada sob a iluminação noturna das ruas.',
    aspect: 'wide',
    tag: 'Cultura Lowrider'
  },
  {
    id: 'g7',
    title: 'Carl "CJ" Johnson — O Retorno',
    gameId: 'san-andreas',
    category: 'san-andreas',
    image: `${import.meta.env.BASE_URL}images/cj-portrait.jpg`,
    caption: 'CJ com sua corrente dourada e olhar determinado diante do pôr do sol dourado da Califórnia dos anos 90.',
    aspect: 'square',
    tag: 'Grove Street'
  },
  {
    id: 'g8',
    title: 'Panorama Sombrio de Liberty City',
    gameId: 'gta3',
    category: 'gta3',
    image: `${import.meta.env.BASE_URL}images/liberty-city-panorama.jpg`,
    caption: 'A silhueta enevoada da Ponte Callahan e os arranha-céus sombrios de Liberty City banhados por chuva constante.',
    aspect: 'wide',
    tag: 'Liberty City'
  },
  {
    id: 'g9',
    title: 'Claude Speed — O Vingador Sem Palavras',
    gameId: 'gta3',
    category: 'gta3',
    image: `${import.meta.env.BASE_URL}images/claude-speed-portrait.jpg`,
    caption: 'Claude em sua jaqueta militar verde escuro no asfalto molhado de Saint Mark\'s com reflexos de neon azul e táxis amarelos.',
    aspect: 'tall',
    tag: 'GTA III Clássico'
  },
  {
    id: 'g10',
    title: 'Madrugada Estrelada em Ocean Beach',
    gameId: 'vice-city',
    category: 'cidades',
    image: `${import.meta.env.BASE_URL}images/vice-city-tommy-night.jpg`,
    caption: 'Céu estrelado de Vice City com o HUD clássico de vida e radar do jogo enquanto a lua brilha sobre os hotéis.',
    aspect: 'wide',
    tag: 'Atmosfera Retrô'
  }
];

export const RADIO_STATIONS: RadioStation[] = [
  {
    id: 'flash-fm',
    name: 'Flash FM',
    gameId: 'vice-city',
    frequency: '102.5 FM',
    genre: 'Pop dos anos 80, Synthpop & Dance',
    host: 'Toni',
    description: 'A estação mais ouvida de toda Vice City. Sintetizadores vibrantes, hinos do verão e a atitude despreocupada dos anos 80.',
    bpm: 118,
    color: '#FF3CAC',
    sampleTracks: ['Billie Jean', 'Self Control', 'Out of Touch', 'Call Me', 'Running with the Night']
  },
  {
    id: 'wave-103',
    name: 'Wave 103',
    gameId: 'vice-city',
    frequency: '103.2 FM',
    genre: 'New Wave, Synthpop & Post-Punk',
    host: 'Adam First',
    description: 'Som futurista com guitarras chorus e teclados analógicos. A trilha sonora perfeita para cruzar as pontes de Vice City à meia-noite.',
    bpm: 124,
    color: '#00E5FF',
    sampleTracks: ['Blue Monday', 'Atomic', 'Cars', 'Kids in America', 'Two Tribes']
  },
  {
    id: 'radio-los-santos',
    name: 'Radio Los Santos',
    gameId: 'san-andreas',
    frequency: '106.1 FM',
    genre: 'West Coast Gangsta Rap & G-Funk',
    host: 'Julio G',
    description: 'O som autêntico das esquinas de Los Santos. Beats pesados de 808, sintetizadores Moog deslizantes e rimas cruas da costa oeste.',
    bpm: 96,
    color: '#10B981',
    sampleTracks: ['Nuthin but a G Thang', 'Fuck wit Dre Day', 'Express Yourself', 'Alwayz into Somethin']
  },
  {
    id: 'k-dst',
    name: 'K-DST "The Dust"',
    gameId: 'san-andreas',
    frequency: '91.5 FM',
    genre: 'Classic Rock dos anos 70 e 80',
    host: 'Tommy "The Nightmare" Smith',
    description: 'O melhor rock clássico para pilotar em alta velocidade pelas rodovias que cruzam o deserto de San Andreas rumo a Las Venturas.',
    bpm: 110,
    color: '#F59E0B',
    sampleTracks: ['Free Bird', 'Horse with No Name', 'Hold the Line', 'Strutter', 'Two Tickets to Paradise']
  },
  {
    id: 'head-radio',
    name: 'Head Radio',
    gameId: 'gta3',
    frequency: '98.3 FM',
    genre: 'Soft Rock & Pop Alternativo',
    host: 'Michael Hunt',
    description: 'A estação comercial número um de Liberty City. Melodias urbanas e vinhetas ácidas tocando enquanto chove nas docas de Portland.',
    bpm: 105,
    color: '#38BDF8',
    sampleTracks: ['Change', 'Fade Away', 'See Through You', 'Good Thing', 'Stripe Summer']
  }
];

export const CHEAT_CODES: CheatCode[] = [
  { code: 'ASPIRINE', effect: 'Saúde 100% restaurada e danos do carro corrigidos', gameId: 'vice-city', category: 'Saúde & Proteção' },
  { code: 'PRECIOUSPROTECTION', effect: 'Colete balístico 100% carregado', gameId: 'vice-city', category: 'Saúde & Proteção' },
  { code: 'PANZER', effect: 'Faz cair um Tanque Militar Rhino do céu', gameId: 'vice-city', category: 'Veículos' },
  { code: 'NUTTERTOOLS', effect: 'Arsenal completo de armas pesadas (M4, Minigun, Lança-foguetes)', gameId: 'vice-city', category: 'Armas' },
  { code: 'HESOYAM', effect: '$250.000 em dinheiro, saúde cheia e colete no talo', gameId: 'san-andreas', category: 'Saúde & Proteção' },
  { code: 'BAGUVIX', effect: 'Invulnerabilidade corporal infinita', gameId: 'san-andreas', category: 'Saúde & Proteção' },
  { code: 'ROCKETMAN', effect: 'Equipa o CJ com o Jetpack militar experimental', gameId: 'san-andreas', category: 'Veículos' },
  { code: 'AEZAKMI', effect: 'Nível de procurado nunca aumenta (Polícia desativada)', gameId: 'san-andreas', category: 'Clima & Caos' },
  { code: 'GUNSGUNSGUNS', effect: 'Todas as armas disponíveis instantaneamente com munição total', gameId: 'gta3', category: 'Armas' },
  { code: 'GESUNDHEIT', effect: 'Recuperação imediata de saúde de Claude', gameId: 'gta3', category: 'Saúde & Proteção' },
  { code: 'TURTOISE', effect: 'Armadura máxima restaurada', gameId: 'gta3', category: 'Saúde & Proteção' },
  { code: 'GIVEUSATANK', effect: 'Invoca o lendário tanque Rhino em Liberty City', gameId: 'gta3', category: 'Veículos' }
];
