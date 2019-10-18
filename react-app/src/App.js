import React from 'react';
import './App.css';
import Header from './shared/components/header';
import { Provider } from 'react-redux';
import store from './shared/store';
import Cart from './cart/cart';
function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Header />
          </div>
    </Provider>
  );
}

export default App;
