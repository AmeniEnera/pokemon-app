import {
    ADD_TO_CART,
    FETCH_CARDS_FAILURE,
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
    REMOVE_FROM_CART
} from '../constants/cards';
import {
    AddCardAction,
    FetchCardsFailureAction,
    FetchCardsRequestAction,
    FetchCardsSuccessAction,
    RemoveCardAction
} from '../types/cards';
import { Card } from '../../types/cards';


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

export const removeCard = (cardId: string): RemoveCardAction => ({
    type: REMOVE_FROM_CART,
    payload: cardId,
});


