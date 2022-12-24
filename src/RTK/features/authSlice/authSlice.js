import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  user: null,
  token: null
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
    },
    LogOut: (state , action) => {
      state.status = "failed"
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, LogOut } = authSlice.actions;
export default authSlice.reducer;

// export const selectCurrentUser = ( state ) => state.auth.user;
// export const selectCurrentToken = ( state ) => state.auth.token;