import axios from "axios";
import { Card } from "../types/cards";

export const calculateCardPrice = (card: Card): number => {
  const rarity = card.rarity?.toLowerCase();
  const basePrice = 1.0;

  switch (rarity) {
    case "common":
      return basePrice * 1.0;
    case "uncommon":
      return basePrice * 1.5;
    case "rare":
      return basePrice * 2.0;
    case "rare holo":
      return basePrice * 3.0;
    default:
      return basePrice;
  }
};

export const getCards = async () => {
  return await axios
    .get("https://api.pokemontcg.io/v2/cards")
    .then((response) => {
      return response.data.data;
    })
    .catch(() => {
      return null;
    });
};
