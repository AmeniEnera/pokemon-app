import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import CartItem from "../../components/CartItem";
import { calculateCardPrice } from "../../services/cards";
import { TotalContainer } from "./ShoppingCard.styles";

const ShoppingCart = () => {
  const items = useSelector((state: RootState) => state.shoppingCart.items);

  const totalQuantity = items.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  const totalPrice = items.reduce(
    (total, currentItem) =>
      total + calculateCardPrice(currentItem.card) * currentItem.quantity,
    0
  );
  return (
    <Grid container>
      <TotalContainer item xs={12} style={{ margin: "20px" }}>
        <h3>Total : {totalPrice} €</h3>
      </TotalContainer>
      <Grid item xs={12}>
        {items.map((item) => {
          return <CartItem key={item.card.id} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
