import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sticks: []
};

export const stickSlice = createSlice({
  name: 'stick',
  initialState,
  reducers: {
    increaseStickQuantity: (state, { payload: id }) => {
      const index = state.sticks.findIndex((stick) => stick.id === id);
      if (state.sticks[index].stickQuantity < 99) {
        state.sticks[index].stickQuantity++;
      }
    },
    decreaseStickQuantity: (state, { payload: id }) => {
      const index = state.sticks.findIndex((stick) => stick.id === id);
      if (state.sticks[index].stickQuantity > 1) {
        state.sticks[index].stickQuantity--;
      }
    },
    insertStick: (state, action) => {
      
      const stick = {
        id: action.payload.id,
        stickId: action.payload.stickId,
        stickName: action.payload.stickName,
        stickPrice: 2000,
        stickQuantity: 1,
        stickImage: action.payload.stickImage
      };
      state.sticks.push(stick);
    },
    removeStick: (state, { payload: id }) => {
      const index = state.sticks.findIndex((stick) => stick.id === id);
      state.sticks.splice(index, 1);
    },
    removeAllSticks: (state) => {
      state.sticks = [];
    },
    insertAllSticks: (state, action) => {
      state.sticks = action.payload;
    }
  }
});

export const {
  increaseStickQuantity,
  decreaseStickQuantity,
  insertStick,
  removeStick,
  removeAllSticks,
  insertAllSticks
} = stickSlice.actions;

export default stickSlice.reducer;
