import { Divider, Grid } from "@mui/material";
import React from "react";
import { ItemContainer, ItemImage, ItemName } from "./CartItem.styles";
import { CartItem as CartItemType } from "../../modules/types/shoppingCart";
import { useNavigate } from "react-router-dom";
import QuantityUpdater from "../QuantityUpdater";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div>
      <ItemContainer key={item.card.id} container>
        <Grid item xs={6} sm={4}>
          <ItemImage
            src={item.card.images.small}
            onClick={() => navigate(`/card/${item.card.id}`)}
          />
        </Grid>

        <Grid
          container
          item
          xs={6}
          sm={8}
          spacing={2}
          display="flex"
          alignItems="center"
        >
          <Grid item xs={12} sm={5} display="flex" justifyContent="center">
            <ItemName>{item.card.name}</ItemName>
          </Grid>
          <Grid item xs={12} sm={7} display="flex" justifyContent="center">
            <QuantityUpdater item={item} />
          </Grid>
        </Grid>
      </ItemContainer>

      <Divider />
    </div>
  );
};

export default CartItem;
