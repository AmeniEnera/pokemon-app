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
import { useNavigate } from "react-router-dom";
import { RootState } from "../../modules/reducers";
import { useSelector } from "react-redux";
import QuantityUpdater from "../QuantityUpdater";

interface PokemonCardProps {
  card: Card;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.shoppingCart.items);

  const handleAddCard = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    card: Card
  ) => {
    e.stopPropagation();
    dispatch(addCard(card));
  };

  const cardItem = items.find((item) => item.card.id === card.id);

  return (
    <CardContainer>
      <CardImage
        src={card.images.small}
        alt={card.name}
        onClick={() => navigate(`/card/${card.id}`)}
      />
      <CardContent>
        <CardTitle>{card.name} </CardTitle>
        <Grid container>
          <Grid item xs={6}>
            <CardText>{`${calculateCardPrice(card)} €`}</CardText>
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"end"}>
            {!cardItem || cardItem.quantity === 0 ? (
              <IconButton onClick={(e) => handleAddCard(e, card)}>
                <ShoppingCartIcon />
              </IconButton>
            ) : (
              <QuantityUpdater item={cardItem} />
            )}
          </Grid>
        </Grid>
      </CardContent>
    </CardContainer>
  );
};

export default PokemonCard;
