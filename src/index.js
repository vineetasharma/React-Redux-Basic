/**
 * Created by ttn on 15/05/17.
 */

console.log('Welcome to React-redux basic flow');

import {createStore, combineReducers, applyMiddleware } from 'redux';
// reducers
import apiReducers from './reducers/apiData';
import multilpyReducer from './reducers/multiply';

//actions
import multi from './actions/multiply'
import asyncAction from './actions/async'

//middlewares
import logger from './middlewares/logger';
import myThunk from './middlewares/myThunkMiddleware';

const reducers= combineReducers({
  api: apiReducers,
  multi: multilpyReducer,
});

const middlewares= applyMiddleware(myThunk,logger);
const store=createStore(reducers,middlewares);

store.subscribe(()=>{
  console.log('State----------',store.getState());
});

store.dispatch(multi(2,3));
store.dispatch(asyncAction());

