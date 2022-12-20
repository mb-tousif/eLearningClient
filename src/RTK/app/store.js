import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "../features/api/blogApi";
import { courseApi } from "../features/api/courseApi";
import { userApi } from "../features/api/userApi";
import { reviewApi } from "../features/api/reviewApi";
import cartSlice from "../features/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      courseApi.middleware,
      blogApi.middleware,
      reviewApi.middleware,
    ),
});

setupListeners(store.dispatch);
