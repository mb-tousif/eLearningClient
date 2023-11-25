import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [],
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.status = action.payload.status;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    LogOut: (state) => {
      state.status = "failed"
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, LogOut } = authSlice.actions;
export default authSlice.reducer;

// export const selectCurrentUser = ( state ) => state.auth.user;
// export const selectCurrentToken = ( state ) => state.auth.token;