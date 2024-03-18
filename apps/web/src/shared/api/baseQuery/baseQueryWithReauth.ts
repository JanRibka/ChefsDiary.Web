import HttpStatusCodes from "http-status-codes";

import { actions } from "../../../app/store/auth/authSlice";
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
    const refreshResult = await baseQuery("", api, extraOptions);
    // TODO: Dod2lat volan9 refreshtoken a update do store
    if (refreshResult.data) {
      api.dispatch(actions.update({}));

      result = await baseQuery(args, api, extraOptions);
    } else {
      //TODO: Tady bude logg out
      // navigate(AppRoute.Login, { state: { from: location }, replace: true });
    }
  }

  return result;
};

export default baseQueryWithReauth;
