import {combineReducers} from 'redux';
import {AuthReducer} from './auth/reducer';
import {SetupReducer} from './setup/reducer';
import {SignUpReducer} from './signUp/reducer';
import { welcomeInfoDataReducer } from './welcome/reducer';

export const RootReducer = combineReducers({
  AuthReducer,
  SetupReducer,
  SignUpReducer,
  welcomeInfoDataReducer,
});
