import { mainBaseApi } from "../mainBaseApi";
import { REGISTER } from "./endpoints";

const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (params: {
        userName: string;
        password: string;
        confirmPassword: string;
      }) => ({
        url: `${import.meta.env.VITE_API_BASE_URL}/${REGISTER}`,
        method: "POST",
        body: { params },
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
