import { Card } from "../../types/cards";
import {
    FETCH_CARDS_FAILURE,
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
} from "../constants/cards";
import { CardsActions } from "../types/cards";

interface CardsState {
    data: Card[];
    loading: boolean;
    error: string | null;
}

const initialState: CardsState = {
    data: [],
    loading: false,
    error: null,
};

const cardsReducer = (state = initialState, action: CardsActions): CardsState => {
    switch (action.type) {
        case FETCH_CARDS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_CARDS_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        case FETCH_CARDS_FAILURE:
            return { ...state, loading: false, error: action.error };

        default:
            return state;
    }
};

export default cardsReducer;