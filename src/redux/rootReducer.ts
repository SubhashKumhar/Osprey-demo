import {combineReducers} from 'redux';
import {AuthReducer} from './auth/reducer';

export const RootReducer = combineReducers({
  AuthReducer,
});
