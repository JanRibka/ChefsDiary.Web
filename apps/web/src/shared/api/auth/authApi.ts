import { transformErrorResponse } from "@repo/shared/apiResponse";

import Login from "../../../entities/auth/Login";
import { mainBaseApi } from "../mainBaseApi";
import { LOGIN, LOGOUT, REFRESH_TOKEN, REGISTER } from "./endpoints";
import RefreshTokenParams from "./RefreshTokenParams";

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

    refreshToken: build.mutation<Login, RefreshTokenParams>({
      query: (params: RefreshTokenParams) => ({
        url: `/${REFRESH_TOKEN}`,
        method: "GET",
        params: { persistLogin: params.persistLogin },
      }),
    }),

    test: build.mutation<void, void>({
      query: () => ({
        url: "/auth/test",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useTestMutation,
} = authApi;
