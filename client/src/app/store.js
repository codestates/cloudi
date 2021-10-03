import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import stickReducer from './modules/stick';
import standReducer from './modules/stand';
import userinfoReducer from './modules/userinfo';

const reducers = combineReducers({
  stick: stickReducer,
  stand: standReducer,
  userinfo: userinfoReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  midddleware: [thunk],
});

export default store;
