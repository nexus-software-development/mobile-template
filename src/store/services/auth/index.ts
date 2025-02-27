import { LoginParams, LoginResponse } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/store/config/baseQuery";

export const AuthService = createApi({
  reducerPath: "auth-service",
  baseQuery,
  endpoints: (builder) => ({
    signIn: builder.mutation<LoginResponse, LoginParams>({
      query: ({ username, password }: LoginParams) => ({
        url: "users/login",
        method: "POST",
        data: { username, password }
      })
    })
  })
});

export const { useSignInMutation } = AuthService;
