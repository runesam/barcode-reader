import reducer from './reducer';
import middleware from './middleware';
import { applyMiddleware, compose, createStore } from 'redux';

export default createStore(reducer, compose(applyMiddleware(...middleware)));
