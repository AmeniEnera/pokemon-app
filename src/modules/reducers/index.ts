import { combineReducers } from 'redux';
import cardsReducer from './cards';
import shoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
    cards: cardsReducer,
    shoppingCart: shoppingCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;