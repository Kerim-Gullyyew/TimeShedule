import React from 'react';
import App from './App';
import {Text} from 'react-native-svg';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/state/store';
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
