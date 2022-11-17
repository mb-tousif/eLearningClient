import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-learning-server-omega.vercel.app/api/v1' }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () =>( {
        url: "allCourses",
        // method: "GET"
      })
    }),
  }),
})
export const { useGetAllCoursesQuery } = courseApi