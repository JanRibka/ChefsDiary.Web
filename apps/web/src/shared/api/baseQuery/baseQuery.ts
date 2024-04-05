import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../../../app/store/store";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers: Headers, { getState }) => {
    const authorizationHeader = headers.get("Authorization");
    const authState = (getState() as RootState).auth;

    if (!authorizationHeader && authState.accessToken) {
      headers.set("Authorization", `Bearer ${authState.accessToken}`);
    }

    return headers;
  },
});

export default baseQuery;
