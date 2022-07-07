import {combineReducers} from 'redux';
import {AuthReducer} from './auth/reducer';
import { SignUpReducer } from './signUp/reducer';

export const RootReducer = combineReducers({
  AuthReducer,
  SignUpReducer
});
