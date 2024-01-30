import { mainBaseApi } from "../mainBaseApi";
import { REGISTER } from "./endpoints";

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
  }),
});
