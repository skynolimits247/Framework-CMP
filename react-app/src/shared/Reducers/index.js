import { combineReducers } from 'redux';
import movieReducer from './movies';
import cartReducer from './cart';

export default combineReducers({
  movies: movieReducer,
  cart: cartReducer
});
