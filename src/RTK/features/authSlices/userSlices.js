import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  user: {},
  token: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  // initialState: {user: null, token: null},
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user
      state.token = accessToken
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