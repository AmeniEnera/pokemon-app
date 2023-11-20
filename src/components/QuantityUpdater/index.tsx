import React from "react";
import {
  AddButton,
  AddRemoveContainer,
  ItemQuantity,
  RemoveButton,
} from "./QuantityUpdater.style";
import { addCard, removeCard } from "../../modules/actions/cards";
import { useDispatch } from "react-redux";
import { CartItem } from "../../modules/types/shoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type QuantityUpdaterProps = {
  item: CartItem;
};

const QuantityUpdater = ({ item }: QuantityUpdaterProps) => {
  const dispatch = useDispatch();

  return (
    <AddRemoveContainer>
      <RemoveButton onClick={() => dispatch(removeCard(item))}>
        <RemoveIcon />
      </RemoveButton>
      <ItemQuantity>{item.quantity}</ItemQuantity>
      <AddButton onClick={() => dispatch(addCard(item.card))}>
        <AddIcon />
      </AddButton>
    </AddRemoveContainer>
  );
};

export default QuantityUpdater;
