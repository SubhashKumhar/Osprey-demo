import React from 'react';
import {Provider} from 'react-redux';
import NetInfo from './src/screens/netInfo';
import store from './src/redux/store';
import MainStack from './src/routes';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  enableNative: false,
  dsn: 'https://74e9d9d6118a499d8d3b553fdec30bf2@o1337694.ingest.sentry.io/6607725',
  tracesSampleRate: 1.0,
});
function App() {
  return (
    <Provider store={store}>
      <MainStack />
      <NetInfo />
    </Provider>
  );
}

export default Sentry.wrap(App);
