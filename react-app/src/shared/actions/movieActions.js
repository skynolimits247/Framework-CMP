import { FETCH_MOVIES, FETCH_CART, ADD_CART_COUNT, REDUCE_CART_COUNT, ADD_CART_ITEM } from './types';
import { fetchMovies } from '../../movies/shared/services/movies/movies';
import { fetchCart } from '../../cart/shared/services/cart/cart';

export const fetchMovie = () => (dispatch) => {  
    fetchMovies().then(res => res['data']['Search'])
    .then( movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies
      })
    );
};

export const fetchCarts = () => (dispatch) => {
  let cart = fetchCart(); 
      dispatch({
        type: FETCH_CART,
        payload: cart
      });
};

export const addCartCount = (id) => (dispatch) => {  
  let cart = fetchCart();
  cart = changeCart(id, 'ProductId' , 'Quantity', cart, +1);
  dispatch({  
    type: ADD_CART_COUNT,
    payload: cart
  });
};

export const reduceCartCount = (id) => (dispatch) => {
  let cart = fetchCart();
  cart = changeCart(id, 'ProductId', 'Quantity', cart, -1);
  dispatch({
    type: REDUCE_CART_COUNT,
    payload: cart
  });
};
export const addCartItem = (movie) => (dispatch) => {
  let cart = fetchCart();
  let cartItem = {
    "Title": `${movie.Title}`,
      "ProductId": `${movie.imdbID}`,
        "Quantity": 1,
          "UnitPrice": 19.99,
            "UserId": 22
  };
  cart.push(cartItem);
  dispatch({
    type: ADD_CART_ITEM,
    payload: cart
  });
}

function changeCart(id, searchAttribute, attribute, jsonObj, quantity = 0) {
  for (var i = 0; i < jsonObj.length; i++) {
    if (jsonObj[i][searchAttribute] === id) {
      jsonObj[i][attribute] = jsonObj[i][attribute] + quantity;
      if (jsonObj[i][attribute] <= 0 ) {  
          jsonObj.splice(i,1);
      }
      return jsonObj;
    }
  }
}
