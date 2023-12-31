import { CardFilters } from "../types/cards";

export const FETCH_CARDS_REQUEST = "FETCH_CARDS_REQUEST";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_FILTERS = "SET_FILTERS";

export const DEFAULT_FILTERS: CardFilters = {
  rarity: [],
  types: [],
  sort: undefined,
};
