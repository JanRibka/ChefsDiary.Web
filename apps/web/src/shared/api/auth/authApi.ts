import { transformErrorResponse } from "@repo/shared/apiResponse";

import Login from "../../../entities/auth/Login";
import { mainBaseApi } from "../mainBaseApi";
import { LOGIN, LOGOUT, REFRESH_TOKEN, REGISTER } from "./endpoints";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<string, FormData>({
      query: (data) => ({
        url: `/${REGISTER}`,
        method: "POST",
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
    }),

    login: build.mutation<Login, FormData>({
      query: (data: FormData) => ({
        url: `/${LOGIN}`,
        method: "POST",
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
    }),

    logout: build.mutation<void, void>({
      query: () => ({
        url: `/${LOGOUT}`,
        method: "POST",
      }),
    }),

    refreshToken: build.mutation<Login, void>({
      query: () => ({
        url: `/${REFRESH_TOKEN}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
} = authApi;
