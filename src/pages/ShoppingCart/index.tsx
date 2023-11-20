import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import CartItem from "../../components/CartItem";
import { calculateCardPrice } from "../../services/cards";
import { TotalContainer } from "./ShoppingCard.styles";
import { useEffect } from "react";

const ShoppingCart = () => {
  const items = useSelector((state: RootState) => state.shoppingCart.items);

  const totalPrice = items.reduce(
    (total, currentItem) =>
      total + calculateCardPrice(currentItem.card) * currentItem.quantity,
    0
  );

  useEffect(() => {
    // Scroll to the top at page render
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container padding={"0 20px"}>
      <Grid item xs={12} sm={6}>
        {items.length > 0 ? (
          <h3>Your shopping cart</h3>
        ) : (
          <h3>Your shopping cart is empty</h3>
        )}
      </Grid>
      <TotalContainer xs={12} item sm={6}>
        <h3>Total : {totalPrice.toFixed(2)} €</h3>
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
