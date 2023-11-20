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

export type Images = {
  small: string;
  large: string;
};

export type CardmarketPrices = {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
};

export type Cardmarket = {
  prices: CardmarketPrices;
};

export type Card = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  rarity?: string;
  images: Images;
  cardmarket: Cardmarket;
};
