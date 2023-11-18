import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import { calculateCardPrice } from "../../services/cards";
import { Link } from "react-router-dom";

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Pokemon
          </Typography>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/shopping-cart"}>
            <div>{totalQuantity} items</div>
            <div>{totalPrice} €</div>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
