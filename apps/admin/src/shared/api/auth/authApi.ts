import { transformErrorResponse } from "@repo/shared/apiResponse";

import Login from "../../../entities/auth/Login";
import { mainBaseApi } from "../mainBaseApi";
import { LOGIN, LOGOUT, REFRESH_TOKEN } from "./endpoints";
import RefreshTokenParams from "./params/RefreshTokenParams";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
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

    refreshToken: build.mutation<Login, RefreshTokenParams>({
      query: (params: RefreshTokenParams) => ({
        url: `/${REFRESH_TOKEN}`,
        method: "GET",
        signal: params.signal,
        params: { persistLogin: params.persistLogin },
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenMutation } =
  authApi;
