import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postUserApi } from "../features/api/postUser";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [postUserApi.reducerPath]: postUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(postUserApi.middleware),
});

setupListeners(store.dispatch);
