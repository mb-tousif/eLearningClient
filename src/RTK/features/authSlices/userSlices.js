import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  user: null,
  token: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  // initialState: {user: null, token: null},
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user
      state.token = token
    },
    LogOut: (state , action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, LogOut } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = ( state ) => state.auth.user;
export const selectCurrentToken = ( state ) => state.auth.token;