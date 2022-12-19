import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "../features/api/blogApi";
import { courseApi } from "../features/api/courseApi";
import { postUserApi } from "../features/api/postUser";
import { reviewApi } from "../features/api/reviewApi";
import cartSlice from "../features/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [postUserApi.reducerPath]: postUserApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postUserApi.middleware,
      courseApi.middleware,
      blogApi.middleware,
      reviewApi.middleware,
    ),
});

setupListeners(store.dispatch);
