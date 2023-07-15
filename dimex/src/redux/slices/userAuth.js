import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
};

const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { logInUser, logOutUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
