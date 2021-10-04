import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  curStandImg: '',
  stands: []
};

let id = initialState.stands.length + 1;

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
        id: id++,
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
      state = {
        curStandImg: '',
        stands: []
      };
    }
  }
});

export const {
  increaseStandQuantity,
  decreaseStandQuantity,
  changeCurStandImg,
  insertStand,
  removeStand,
  removeAllStands
} = standSlice.actions;

export default standSlice.reducer;
