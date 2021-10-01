import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  sticks: [
    {
      id: 1,
      stickId: 2,
      stickName: '귤피',
      stickPrice: 2000,
      stickQuantity: 2,
      stickImage: '/images/stickSample.png'
    },
    {
      id: 2,
      stickId: 3,
      stickName: '담배',
      stickPrice: 2000,
      stickQuantity: 3,
      stickImage: '/images/stickSample.png'
    }
  ]
};

let id = initialState.sticks.length + 1;

export const stickSlice = createSlice({
  name: 'stick',
  initialState,
  reducers: {
    increaseStickQuantity: (state, { payload: id }) => {
      const index = state.sticks.findIndex(stick => stick.id === id);
      state.sticks[index].stickQuantity++;
    },
    decreaseStickQuantity: (state, { payload: id }) => {
      const index = state.sticks.findIndex(stick => stick.id === id);
      if (state.sticks[index].stickQuantity > 1) {
        state.sticks[index].stickQuantity--;
      }
    },
    insertStick: (state, action) => {
      const stick = {
        id: id++,
        stickText: action.payload.text
      };
      state.sticks.push(stick);
    },
    removeStick: (state, { payload: id }) => {
      const index = state.sticks.findIndex(stick => stick.id === id);
      state.sticks.splice(index, 1);
    }
  }
});

export const { increaseStickQuantity, decreaseStickQuantity, insertStick, removeStick } = stickSlice.actions;

export default stickSlice.reducer;
