import React from 'react';
import { Switch,  Route } from 'react-router-dom';

import Cart from './cart/cart';
import Movies from './movies/movies';
import Contact from './shared/components/contact';
import About from './shared/components/about';
import NotFound from './shared/components/not-found';
const AppRoutes = () => (
  <Switch>
    <Route path="/home" component={Movies} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
     <Route path="/cart" component={Cart} />
     <Route path="/" exact component={Cart} />
      <Route path="**"  exact component={NotFound} />

  </Switch>
);

export default AppRoutes;
