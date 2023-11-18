import React from "react";
import { addCard } from "../../modules/actions/cards";
import { calculateCardPrice } from "../../services/cards";
import { Card } from "../../types/cards";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardText,
  CardContent,
} from "./PokemonCard.styles";
import { IconButton } from "@mui/material";

interface PokemonCardProps {
  card: Card;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <CardContainer style={{ maxWidth: 345 }}>
      <CardImage src={card.images.small} alt={card.name} />
      <CardContent>
        <CardTitle>{card.name} </CardTitle>
        <CardText>{`${calculateCardPrice(card)} €`}</CardText>
        <IconButton onClick={() => dispatch(addCard(card))}>
          <ShoppingCartIcon />
        </IconButton>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
