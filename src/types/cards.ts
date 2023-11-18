export type Attack = {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
};

export type Weakness = {
  type: string;
  value: string;
};

export type Resistance = {
  type: string;
  value: string;
};

export type Set = {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
};

export type Images = {
  small: string;
  large: string;
};

export type TcgPlayerPrices = {
  holofoil: {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number | null;
  };
  reverseHolofoil: {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number;
  };
};

export type TcgPlayer = {
  url: string;
  updatedAt: string;
  prices: TcgPlayerPrices;
};

export type CardmarketPrices = {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
};

export type Cardmarket = {
  url: string;
  updatedAt: string;
  prices: CardmarketPrices;
};

export type Card = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
  };
  images: Images;
  tcgplayer: TcgPlayer;
  cardmarket: Cardmarket;
};
