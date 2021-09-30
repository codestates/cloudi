import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  stands: [
    {
      id : 1,
      standPlate : "CERAMIC",
      standHolder : "PINOCCIO",
      standText : "CLOUDI",
      standPrice : 37000,
      standQuantity : 1,
      standImage : '/images/defaultplate.png'
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
      state.stands[index].standQuantity ++;

    },
    decreaseStandQuantity: (state, { payload: id }) => {
      
      const index = state.stands.findIndex(stand => stand.id === id);
      state.stands[index].standQuantity ++;

    }
    // insert: (state, action) => {
    //   const todo = {
    //     id: id++,
    //     text: action.payload,
    //     done: false
    //   };
    //   state.todos.push(todo);
    // },
    // remove: (state, { payload: id }) => {
    //   const index = state.todos.findIndex(todo => todo.id === id);
    //   state.todos.splice(index, 1);
    // }
  }
});

export const { changeInput, insert, toggle, remove } = standSlice.actions;

export default standSlice.reducer;
