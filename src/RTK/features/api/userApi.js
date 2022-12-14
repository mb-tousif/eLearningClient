import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://e-learning-server-omega.vercel.app/api/v1" }),
  endpoints: (builder) => ({
    getAllUser: builder.query ({
      query: () => ({
        url: "allUsers",
        method: "GET",
      }),
    }),
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
    getSignUpUser: builder.mutation ({
      query: ( signUpData ) => ({
        url: "signup",
        method: "POST",
        body: signUpData,
        headers: {
          "content-type" : "application/json; charset=UTF-8"
        }
      }),
    }),
  }),
});

export const { useGetLoginUserMutation, useGetSignUpUserMutation, useGetAllUserQuery } = userApi