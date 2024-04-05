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
  if (result.error && result.error.status === HttpStatusCodes.FORBIDDEN) {
    const refreshResult = await baseQuery(REFRESH_TOKEN, api, extraOptions);

    if (refreshResult.data) {
      api.dispatch(actions.update(refreshResult.data));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(actions.update({ loggedOut: true }));
    }
  }

  return result;
};

export default baseQueryWithReauth;
