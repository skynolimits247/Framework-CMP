import Vuex from 'vuex';
import Vue from 'vue';
import movies from '../modules/movies';

//Load Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules: {
        movies
    }
});