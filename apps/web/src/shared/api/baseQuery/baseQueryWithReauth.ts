import HttpStatusCodes from "http-status-codes";

import { actions } from "../../../app/store/auth/authSlice";
import { REFRESH_TOKEN } from "../auth/endpoints";
import baseQuery from "./baseQuery";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === HttpStatusCodes.FORBIDDEN) {
    const persistLogin = localStorage.getItem("persist") ?? false;
    const url = `${REFRESH_TOKEN}?persistLogin=${persistLogin}`;
    const refreshResult = await baseQuery(url, api, extraOptions);

    if (refreshResult?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const login = (api as any).getState().auth.login;

      api.dispatch(
        actions.update({
          ...refreshResult.data,
          login: login,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(
        actions.update({ login: "", accessToken: "", loggedOut: true })
      );
    }
  }

  return result;
};

export default baseQueryWithReauth;
