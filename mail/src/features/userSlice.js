import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null
  },

  reducers: {
    signin: (state, action) => {
      state.value = action.payload;
    },
    signout: (state) => {
      state.value = null;
    }
  }
});

export const { signin, signouts } = userSlice.actions;

export const selectedUser = (state) => state.user.value;
export default userSlice.reducer;
