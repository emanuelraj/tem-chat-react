import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { auth as authReducer } from './redux.auth/redux.action.reducer';

const store = createStore(combineReducers({ 
    auth: authReducer
}), applyMiddleware(thunk));

export default store;