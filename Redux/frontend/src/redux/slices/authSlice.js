import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  // initial state
  name: "auth",
  initialState: {
    user: null,
  },

  // reducers
  reducers: {
    // login
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    // logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});

// generate the actions
export const { loginAction, logoutAction } = authSlice.actions;
// generate reducers
const authReducer = authSlice.reducer;
export default authReducer;
