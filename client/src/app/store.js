import { configureStore } from '@reduxjs/toolkit';
import stickReducer from './modules/stick';
import standReducer from './modules/stand';
import userinfoReducer from './modules/userinfo';

export const store = configureStore({
  reducer: {
    stick: stickReducer,
    stand: standReducer,
    userinfo: userinfoReducer
  }
});
