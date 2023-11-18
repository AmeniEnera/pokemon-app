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
import { Grid, IconButton } from "@mui/material";

interface PokemonCardProps {
  card: Card;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <CardImage src={card.images.small} alt={card.name} />
      <CardContent>
        <CardTitle>{card.name} </CardTitle>
        <Grid container>
          <Grid item xs={6}>
            <CardText>{`${calculateCardPrice(card)} €`}</CardText>
          </Grid>
          <Grid xs={6} display={"flex"} justifyContent={"end"}>
            <IconButton onClick={() => dispatch(addCard(card))}>
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
