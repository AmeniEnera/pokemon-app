import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import { calculateCardPrice } from "../../services/cards";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoImage,
  ShoppingCardContainer,
  TotalContainer,
} from "./Header.styles";
import ShoppingCard from "./ShoppingCard";
import { Grid } from "@mui/material";

const Header = () => {
  const cards = useSelector((state: RootState) => state.shoppingCart.items);
  const totalQuantity = cards.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  const totalPrice = cards.reduce(
    (total, currentItem) =>
      total + calculateCardPrice(currentItem.card) * currentItem.quantity,
    0
  );

  return (
    <HeaderContainer container>
      <Grid item xs={6}>
        <Link to={"/"}>
          <LogoImage src="../../pokemon.png" alt="Logo de l'application" />
        </Link>
      </Grid>
      <Grid item xs={2} display={"flex"} justifyContent={"end"}>
        <ShoppingCardContainer to={"/shopping-cart"}>
          <ShoppingCard itemsNb={totalQuantity} />
          <TotalContainer>{totalPrice} €</TotalContainer>
        </ShoppingCardContainer>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
