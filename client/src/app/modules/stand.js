import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  curStandImg: '',
  stands: []
};

export const standSlice = createSlice({
  name: 'stand',
  initialState,
  reducers: {
    increaseStandQuantity: (state, { payload: id }) => {
      const index = state.stands.findIndex(stand => stand.id === id);
      if (state.stands[index].standQuantity < 99) {
        state.stands[index].standQuantity++;
      }
    },
    decreaseStandQuantity: (state, { payload: id }) => {
      const index = state.stands.findIndex(stand => stand.id === id);
      if (state.stands[index].standQuantity > 1) {
        state.stands[index].standQuantity--;
      }
    },
    insertStand: (state, action) => {
      const stand = {
        id: action.payload.id,
        standPlate: action.payload.plate,
        standHolder: action.payload.holder,
        standText: action.payload.text,
        standPrice: action.payload.price,
        standQuantity: 1,
        standImage: action.payload.image
      };
      state.stands.push(stand);
    },
    changeCurStandImg: (state, { payload: curStandImg }) => {
      state.curStandImg = curStandImg;
    },
    removeStand: (state, { payload: id }) => {
      const index = state.stands.findIndex(stand => stand.id === id);
      state.stands.splice(index, 1);
    },
    removeAllStands: (state) => {
      state.curStandImg = '';
      state.stands = [];
    },
    insertAllStands: (state, action) => {
      state.stands = action.payload;
    }
  }
});

export const {
  increaseStandQuantity,
  decreaseStandQuantity,
  changeCurStandImg,
  insertStand,
  removeStand,
  removeAllStands,
  insertAllStands
} = standSlice.actions;

export default standSlice.reducer;
