import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "../features/api/blogApi";
import { courseApi } from "../features/api/courseApi";
import { postUserApi } from "../features/api/postUser";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [postUserApi.reducerPath]: postUserApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postUserApi.middleware,
      courseApi.middleware,
      blogApi.middleware,
    ),
});

setupListeners(store.dispatch);
