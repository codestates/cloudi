import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  stands: [
    {
      id: 1,
      standPlate: 'CERAMIC',
      standHolder: 'PINOCCIO',
      standText: 'CLOUDI',
      standPrice: 37000,
      standQuantity: 1,
      standImage: '/images/defaultplate.png'
    }
  ]
};

let id = initialState.stands.length + 1;

export const standSlice = createSlice({
  name: 'stand',
  initialState,
  reducers: {
    increaseStandQuantity: (state, { payload: id }) => {
      const index = state.stands.findIndex(stand => stand.id === id);
      state.stands[index].standQuantity++;
    },
    decreaseStandQuantity: (state, { payload: id }) => {
      const index = state.stands.findIndex(stand => stand.id === id);
      if (state.stands[index].standQuantity > 1) {
        state.stands[index].standQuantity--;
      }
    },
    insertStand: (state, action) => {
      const stand = {
        id: id++,
        standText: action.payload.text
      };
      state.stands.push(stand);
    },
    removeStand: (state, { payload: id }) => {
      const index = state.stands.findIndex(stand => stand.id === id);
      state.stands.splice(index, 1);
    }
  }
});

export const { increaseStandQuantity, decreaseStandQuantity, insertStand, removeStand } = standSlice.actions;

export default standSlice.reducer;
