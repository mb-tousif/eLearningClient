import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "../features/api/blogApi";
import { courseApi } from "../features/api/courseApi";
import { userApi } from "../features/api/userApi";
import { reviewApi } from "../features/api/reviewApi";
import cartSlice from "../features/cartSlice/cartSlice";
import authSlice from "../features/authSlice/authSlice";
import { courseAccessApi } from "../features/api/courseAccessApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [courseAccessApi.reducerPath]: courseAccessApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      courseApi.middleware,
      blogApi.middleware,
      reviewApi.middleware,
      courseAccessApi.middleware,
    ),
});

setupListeners(store.dispatch);
