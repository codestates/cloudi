import { configureStore } from '@reduxjs/toolkit';
import stickReducer from './modules/stick';
import standReducer from './modules/stand';
import notificationReducer from './modules/notification';

export const store = configureStore({
  reducer: {
    stick: stickReducer,
    stand: standReducer,
    notification: notificationReducer
  }
});
