import axios from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import type { AxiosRequestConfig, AxiosError } from "axios";

import { RootState } from "./reducers";

const EXPO_PUBLIC_API_URL = process.env.EXPO_PUBLIC_API_URL;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }, api) => {
    try {
      const { getState } = api;
      const token = (getState() as RootState)["auth"].accessToken;

      const result = await axios({
        url: baseUrl + url,
        method,
        ...(data && { data }),
        ...(params && { params }),
        headers: {
          ...headers,
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const baseQuery = axiosBaseQuery({
  baseUrl: `${EXPO_PUBLIC_API_URL}`,
});
