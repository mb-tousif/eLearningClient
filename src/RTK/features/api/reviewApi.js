import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-learning-server-omega.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => ({
        url: "allReviews",
        method: "GET",
      }),
    }),
    postReview: builder.mutation({
      query: (reviewData) => ({
        url: "review",
        method: "POST",
        body: reviewData,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});
export const { useGetAllReviewsQuery, usePostReviewMutation} =
  reviewApi;
