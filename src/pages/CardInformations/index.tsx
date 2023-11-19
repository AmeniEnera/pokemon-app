import React from "react";
import { useLocation } from "react-router-dom";

const CardInformations = () => {
  const location = useLocation();
  const card = location.state.card;
  return (
    <div>
      <div>
        <img src={card.images.small} alt={card.name} />

        <h2>{card.name}</h2>
        <p>Supertype: {card.supertype}</p>
        <p>Subtypes: {card.subtypes.join(", ")}</p>
        <p>HP: {card.hp}</p>
        <p>Types: {card.types.join(", ")}</p>
        <p>Evolves From: {card.evolvesFrom}</p>

        <p>Retreat Cost: {card.retreatCost.join(", ")}</p>
        <p>Set: {card.set.name}</p>
        <p>Number: {card.number}</p>
        <p>Artist: {card.artist}</p>
        <p>Rarity: {card.rarity}</p>
        <p>Flavor Text: {card.flavorText}</p>
        <p>
          National Pokedex Numbers: {card.nationalPokedexNumbers.join(", ")}
        </p>
        <p>Legalities: {card.legalities.unlimited}</p>

        <h3>Cardmarket Prices:</h3>
        <p>Average Sell Price: {card.cardmarket.prices.averageSellPrice}</p>
        <p>Low Price: {card.cardmarket.prices.lowPrice}</p>
        <p>Trend Price: {card.cardmarket.prices.trendPrice}</p>
      </div>
    </div>
  );
};

export default CardInformations;
