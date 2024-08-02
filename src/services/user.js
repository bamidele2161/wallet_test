import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.
    baseUrl: process.env.REACT_APP_DEV_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().UserDataReducer?.userInfo?.token;

      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Headers", "Content-Type");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (token) => ({
        url: "/User/Profile",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }),
    }),

    //get my wallet
    getWallet: builder.mutation({
      query: (token) => ({
        url: "/Wallet/MyWallet",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }),
    }),
  }),
});

//custom hooks
export const { useGetProfileQuery, useGetWalletMutation } = userApi;
