import Vue from 'vue';
import Router from 'vue-router';
import Movie from './movies/movie';
import Contact from './shared/components/contact/contact.vue';
import About from './shared/components/about/about.vue';
import Cart from './cart/cart.vue';
import NotFound from './shared/components/not-found/not-found';

Vue.use(Router);

export default new Router({ 
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'movie',
            component: Movie
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});