import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './cart/cart';
import Movies from './movies/movies';
import Contact from './shared/components/contact';
import About from './shared/components/about';
import NotFound from './shared/components/not-found';


const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Movies} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/cart" exact component={Cart} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRoutes;