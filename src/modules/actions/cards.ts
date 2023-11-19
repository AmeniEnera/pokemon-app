import {
  ADD_TO_CART,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  REMOVE_FROM_CART,
  SET_FILTERS,
} from "../constants/cards";
import {
  AddCardAction,
  CardFilters,
  FetchCardsFailureAction,
  FetchCardsRequestAction,
  FetchCardsSuccessAction,
  RemoveCardAction,
  SetFiltersAction,
} from "../types/cards";
import { Card } from "../../types/cards";
import { CartItem } from "../types/shoppingCart";

export const fetchCardsRequest = (): FetchCardsRequestAction => ({
  type: FETCH_CARDS_REQUEST,
});

export const fetchCardsSuccess = (data: Card[]): FetchCardsSuccessAction => ({
  type: FETCH_CARDS_SUCCESS,
  payload: data,
});

export const fetchCardsFailure = (error: string): FetchCardsFailureAction => ({
  type: FETCH_CARDS_FAILURE,
  error,
});

export const addCard = (card: Card): AddCardAction => ({
  type: ADD_TO_CART,
  payload: card,
});

export const removeCard = (cartItem: CartItem): RemoveCardAction => ({
  type: REMOVE_FROM_CART,
  payload: cartItem,
});

export const setFilters = (filters: CardFilters): SetFiltersAction => ({
  type: SET_FILTERS,
  payload: filters,
});
