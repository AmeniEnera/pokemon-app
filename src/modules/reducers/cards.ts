import { Card } from "../../types/cards";
import {
  DEFAULT_FILTERS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  SET_FILTERS,
} from "../constants/cards";
import { CardFilters, CardsActions } from "../types/cards";

interface CardsState {
  data: Card[];
  loading: boolean;
  error: string | null;
  filters: CardFilters;
}

const initialState: CardsState = {
  data: [],
  loading: false,
  error: null,
  filters: DEFAULT_FILTERS,
};

const cardsReducer = (
  state = initialState,
  action: CardsActions
): CardsState => {
  switch (action.type) {
    case FETCH_CARDS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CARDS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_CARDS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SET_FILTERS:
      return { ...state, filters: action.payload };

    default:
      return state;
  }
};

export default cardsReducer;
