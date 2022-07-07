import {combineReducers} from 'redux';
import {AuthReducer} from './auth/reducer';
import {SetupReducer} from './setup/reducer';
import {SignUpReducer} from './signUp/reducer';

export const RootReducer = combineReducers({
  AuthReducer,
  SetupReducer,
  SignUpReducer,
});
