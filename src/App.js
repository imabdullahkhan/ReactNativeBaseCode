/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AuthProvider } from './contexts/Auth';
import Router from './routes/Router';
import configStore from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
