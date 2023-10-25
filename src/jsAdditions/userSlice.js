import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:{
    user: null,
  },
  reducers: {
    //takes the state and action (data passed to us)
    logIn: (state, action) => {
      //user updated by payload that has been passed in
      state.user = action.payload
    },
    //don't need to update the state (don't need payload)
    //КНОПКА ВЫЙТИ В HEADER
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const {logIn, logOut} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;