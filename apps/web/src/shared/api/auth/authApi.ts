import { mainBaseApi } from "../mainBaseApi";
import { LOGIN, REGISTER } from "./endpoints";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (params: {
        userName: string;
        password: string;
        confirmPassword: string;
      }) => ({
        url: `/${REGISTER}`,
        method: "POST",
        body: { params },
      }),
    }),

    login: build.mutation<string, FormData>({
      query: (loginFormData: FormData) => ({
        url: `/${LOGIN}`,
        method: "POST",
        body: loginFormData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
