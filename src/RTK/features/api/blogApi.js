import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-learning-server-omega.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "allBlogs",
        // method: "GET"
      }),
    }),
  }),
});
export const { useGetAllBlogsQuery } = blogApi;
