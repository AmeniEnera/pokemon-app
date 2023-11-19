import { Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { removeCard, addCard } from "../../modules/actions/cards";
import {
  ItemContainer,
  AddRemoveContainer,
  ItemImage,
} from "./CartItem.styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Card } from "../../types/cards";
import { useDispatch } from "react-redux";

interface CartItemProps {
  item: {
    card: Card;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ItemContainer key={item.card.id} container>
        <Grid item xs={4}>
          <ItemImage src={item.card.images.small} />
        </Grid>
        <Grid item xs={4}>
          <div>{item.card.name}</div>
        </Grid>
        <Grid item xs={4}>
          <AddRemoveContainer>
            <IconButton onClick={() => dispatch(removeCard(item))}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{item.quantity}</Typography>
            <IconButton onClick={() => dispatch(addCard(item.card))}>
              <AddIcon />
            </IconButton>
          </AddRemoveContainer>
        </Grid>
      </ItemContainer>

      <Divider />
    </div>
  );
};

export default CartItem;
