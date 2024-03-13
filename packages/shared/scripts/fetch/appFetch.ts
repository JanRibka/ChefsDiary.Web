const appFetch = async (url: string, init?: RequestInit) => {
  let requestInit: RequestInit = {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Methods": "POST, GET",
    },
  };

  requestInit = { ...requestInit, ...init };

  return fetch(url, requestInit).then((response) => {
    return response.json();
  });
};

export default appFetch;
