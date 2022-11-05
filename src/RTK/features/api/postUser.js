import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postUserApi = createApi({
  reducerPath: "loginUpApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://e-learning-server-omega.vercel.app/api/v1" }),
  endpoints: (builder) => ({
    getLoginUser: builder.mutation ({
      query: ( data) => ({
        url: "login",
        method: "POST",
        body: data,
        headers: {
          "content-type" : "application/json; charset=UTF-8"
        }
      }),
    }),
  }),
});

export const { useGetLoginUserMutation } = postUserApi