import { Card } from "../../types/cards";
import { calculateCardPrice } from "../cards";

const emptyCard: Card = {
  id: "",
  supertype: "",
  subtypes: [],
  hp: "",
  types: [],
  attacks: [],
  weaknesses: [],
  resistances: [],
  retreatCost: [],
  images: { small: "", large: "" },
  name: "",
  rarity: "",
  cardmarket: {
    prices: {
      averageSellPrice: 0,
      lowPrice: 0,
      trendPrice: 0,
    },
  },
};

describe("calculateCardPrice", () => {
  test("calculates price for common rarity", () => {
    const card: Card = {
      ...emptyCard,
      rarity: "Common",
      cardmarket: {
        prices: {
          ...emptyCard.cardmarket.prices,
          averageSellPrice: 1.0,
        },
      },
    };

    const result = calculateCardPrice(card);

    expect(result).toBe(1.0);
  });

  test("calculates price for uncommon rarity", () => {
    const card: Card = {
      ...emptyCard,
      rarity: "Uncommon",

      cardmarket: {
        prices: {
          ...emptyCard.cardmarket.prices,
          averageSellPrice: 1.0,
        },
      },
    };

    const result = calculateCardPrice(card);

    expect(result).toBe(1.5);
  });

  test("calculates price for rare rarity", () => {
    const card: Card = {
      ...emptyCard,
      rarity: "Rare",
      cardmarket: {
        prices: {
          ...emptyCard.cardmarket.prices,
          averageSellPrice: 1.0,
        },
      },
    };

    const result = calculateCardPrice(card);

    expect(result).toBe(2.0);
  });

  test("calculates price for rare holo rarity", () => {
    const card: Card = {
      ...emptyCard,
      rarity: "Rare Holo",
      cardmarket: {
        prices: {
          ...emptyCard.cardmarket.prices,
          averageSellPrice: 1.0,
        },
      },
    };

    const result = calculateCardPrice(card);

    expect(result).toBe(3.0);
  });

  test("calculates default price for unknown rarity", () => {
    const card: Card = {
      ...emptyCard,
      rarity: undefined,
      cardmarket: {
        prices: {
          ...emptyCard.cardmarket.prices,
          averageSellPrice: 1.0,
        },
      },
    };

    const result = calculateCardPrice(card);

    expect(result).toBe(1.0);
  });
});
