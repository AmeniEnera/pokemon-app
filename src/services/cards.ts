import { Card } from "../types/cards";

export const calculateCardPrice = (card: Card): number => {
  const rarity = card.rarity?.toLowerCase();
  const basePrice = card.cardmarket?.prices.averageSellPrice
    ? card.cardmarket?.prices.averageSellPrice
    : 1.0;

  let calculatedPrice;

  switch (rarity) {
    case "common":
      calculatedPrice = basePrice * 1.0;
      break;
    case "uncommon":
      calculatedPrice = basePrice * 1.5;
      break;
    case "rare":
      calculatedPrice = basePrice * 2.0;
      break;
    case "rare holo":
      calculatedPrice = basePrice * 3.0;
      break;
    default:
      calculatedPrice = basePrice;
  }

  return Number(calculatedPrice.toFixed(2));
};
