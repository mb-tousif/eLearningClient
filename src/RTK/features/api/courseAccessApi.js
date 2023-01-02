import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const courseAccessApi = createApi({
  reducerPath: "courseAccessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-learning-server-omega.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getCourseAccess: builder.query({
      query: () => ({
        url: "getUserPayment",
      }),
    }),
  }),
});

export const { useGetCourseAccessQuery } = courseAccessApi