import { Card } from "../../types/cards";
import {
    ADD_TO_CART,
    FETCH_CARDS_FAILURE,
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
    REMOVE_FROM_CART
} from "../constants/cards";

export type FetchCardsRequestAction = {
    type: typeof FETCH_CARDS_REQUEST;
}

export type FetchCardsSuccessAction = {
    type: typeof FETCH_CARDS_SUCCESS;
    payload: any[];
}

export type FetchCardsFailureAction = {
    type: typeof FETCH_CARDS_FAILURE;
    error: string;
}

export type AddCardAction = {
    type: typeof ADD_TO_CART;
    payload: Card;
}

export type RemoveCardAction = {
    type: typeof REMOVE_FROM_CART;
    payload: string;
}

export type ShoppingCartActions = AddCardAction | RemoveCardAction


export type CardsActions =
    | FetchCardsRequestAction
    | FetchCardsSuccessAction
    | FetchCardsFailureAction

