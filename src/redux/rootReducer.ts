import {combineReducers} from 'redux';
import {AuthReducer} from './auth/reducer';
import {SetupReducer} from './setup/reducer';

export const RootReducer = combineReducers({
  AuthReducer,
  SetupReducer,
});
