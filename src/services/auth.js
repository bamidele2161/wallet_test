import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authsApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.
    baseUrl: process.env.REACT_APP_DEV_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Headers", "Content-Type");
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    //user registration
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/Account/Register",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //authenticate user
    authenticateUser: builder.mutation({
      query: (body) => ({
        url: "/Account/Authenticate",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    //activate user
    activateUser: builder.mutation({
      query: (body) => ({
        url: "/Account/ConfirmActivationCode",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    getAllRoles: builder.query({
      query: () => ({
        url: "/Role/Roles",
        method: "GET",
      }),
    }),
  }),
});

//custom hooks
export const {
  useRegisterUserMutation,
  useAuthenticateUserMutation,
  useActivateUserMutation,
  useGetAllRolesQuery,
} = authApi;
