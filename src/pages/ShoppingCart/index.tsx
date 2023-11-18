import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addCard, removeCard } from "../../modules/actions/cards";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AddRemoveContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShoppingCart = () => {
  const items = useSelector((state: RootState) => state.shoppingCart.items);
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid item sm={9}>
        {items.map((item) => {
          return (
            <ItemContainer key={item.card.id}>
              <img src={item.card.images.small} />
              <div>{item.card.name}</div>
              <AddRemoveContainer>
                <IconButton onClick={() => dispatch(removeCard(item))}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body2">{item.quantity}</Typography>
                <IconButton onClick={() => dispatch(addCard(item.card))}>
                  <AddIcon />
                </IconButton>
              </AddRemoveContainer>
            </ItemContainer>
          );
        })}
      </Grid>
      <Grid item sm={3}></Grid>
    </Grid>
  );
};

export default ShoppingCart;
