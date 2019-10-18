import {fetchMovie} from '../../movies/shared/servcies/movies';
import fetchCart from '../../cart/shared/services/cart';
import {MovieModel} from '../models/movieModels';
const state = {
    movies: [],
    cart:[],
    cartItem:[]
};

const getters = {
    allMovies: (state) => state.movies,
    rentalMovies: (state) => state.cart,
    cartCount: (state) => state.cartItem
};

const actions = {
     async fetchMovies({ commit }) { 
          const response = await fetchMovie();
            commit('setMovie', response.data.Search);
    },
     async fetchCarts({ commit }) {  
        const response =  await fetchCart();
        commit('setCart', response);
    },
    async fetchCartCount({ commit }) {  
        const response =  await fetchCart();
        commit('setCartItem', response);
    }

};

const mutations = {  
    setMovie: (state, movies) => {
        const data =  movies.map(item => new MovieModel(item))
        state.movies = data;
    },
    setCart: (state, cart) => (state.cart = cart),
    setCartItem: (state, cartCount) => (state.cartItem = cartCount)
};


export default {
    state,
    getters,
    actions,
    mutations
}