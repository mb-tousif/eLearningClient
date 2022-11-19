import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-learning-server-omega.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => ({
        url: "allCourses",
        // method: "GET"
      }),
    }),
    postCourse: builder.mutation({
      query: (data) => ({
        url: "course",
        method: "POST",
        body: data,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});
export const { useGetAllCoursesQuery, usePostCourseMutation } = courseApi