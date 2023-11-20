import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cards";
import { ShoppingCartActions } from "../types/cards";
import { CartItem } from "../types/shoppingCart";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const shoppingCartReducer = (
  state = initialState,
  action: ShoppingCartActions
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find((item) => item.card.id === action.payload.id)) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.card.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { card: action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      if (action.payload.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.card.id === action.payload.card.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.card.id !== action.payload.card.id
          ),
        };
      }

    default:
      return state;
  }
};

export default shoppingCartReducer;
