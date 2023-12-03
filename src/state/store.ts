import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
let middlewares = [
];

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login', 'constant'],
}
const middleware = applyMiddleware(...middlewares, thunk)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, middleware)
export const persistor = persistStore(store)