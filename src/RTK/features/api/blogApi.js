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
        method: "GET",
      }),
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `blog/${id}`,
        method: "GET" // Default method is GET
      }),
    }),
    postBlog: builder.mutation({
      query: (blogData) => ({
        url: "blog",
        method: "POST",
        body: blogData,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});
export const { useGetAllBlogsQuery, usePostBlogMutation, useGetBlogByIdQuery } = blogApi;
