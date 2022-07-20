import React from 'react';
import {Provider} from 'react-redux';
import NetInfo from './src/screens/netInfo';
import store from './src/redux/store';
import MainStack from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
      <NetInfo />
    </Provider>
  );
}
