// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: JSON.parse(localStorage.getItem('userData')) || [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { saveUserData } = userSlice.actions;

export default userSlice.reducer;
