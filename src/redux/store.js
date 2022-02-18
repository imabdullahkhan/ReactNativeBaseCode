import immutableTransform from "redux-persist-transform-immutable";
import AsyncStorage from "@react-native-community/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, compose, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import reducers from "./reducers";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  transforms: [immutableTransform()],
  storage: AsyncStorage,
  whitelist: ["count"]
};

const composeEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools({ realtime: true }) : compose;

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [thunk];

export default (() => {
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);

  return () => ({ store, persistor });
})();