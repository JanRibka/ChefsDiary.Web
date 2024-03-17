import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const transformErrorResponse = (response: FetchBaseQueryError) => {
  if (typeof response.status === "string") {
    return;
  }

  return response.data;
};

export default transformErrorResponse;
