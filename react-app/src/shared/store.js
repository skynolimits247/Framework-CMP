import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './Reducers';
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

const initialState = {};
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk];

//const reducers = ({ register: combineReducers, router: routerReducer})
const store = createStore(
  combineReducers,
  initialState,
  compose(
    applyMiddleware(...middleware))
);
export default store;
