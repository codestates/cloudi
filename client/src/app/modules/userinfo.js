import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
    id: '',
    kakaoId: '',
    googleId: '',
    isAdmin: '',
    userEmail: '',
    userName: '',
    token: ''
};

export const userinfoSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    insertUserinfo: (state, action) => {
      const userinfo = {
        id: action.payload.id,
        kakoId: action.payload.kakaoId,
        googleId: action.payload.googleId,
        isAdmin: action.payload.isAdmin,
        userEmail: action.payload.userEmail,
        userName: action.payload.userName,
        token: action.payload.token
      };
      state = userinfo;
    },
    removeUserinfo: (state) => {
      state = initialState;
    }
  }
});

export const {
  insertUserinfo,
  removeUserinfo
} = userinfoSlice.actions;

export default userinfoSlice.reducer;
