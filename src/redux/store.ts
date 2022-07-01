import {applyMiddleware, legacy_createStore} from 'redux';
import {RootReducer} from './rootReducer';
import thunk from 'redux-thunk';

const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export default store;
