import { useRef } from "react";

import { useLocalStorage } from "@repo/shared/hooks";

import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import { useRefreshTokenMutation } from "../../auth/authApi";

const useRefreshToken = () => {
  // Api
  const [refreshTokenMutation, response] = useRefreshTokenMutation();

  // Constants
  const isLoading = response.isLoading;
  const { update } = useAuthSlice();
  const [persist] = useLocalStorage("persist", false);
  const abortController = useRef(new AbortController());

  // Other
  const refreshToken = async () => {
    try {
      // Cancel the previous refresh token request if it's still ongoing
      abortController.current.abort();
      // Create a new abort controller for the new request
      abortController.current = new AbortController();

      const response = await refreshTokenMutation({
        persistLogin: persist,
        signal: abortController.current.signal,
      }).unwrap();

      update({
        login: response.login,
        accessToken: response.accessToken,
      });
    } catch (error) {
      update({
        login: "",
        accessToken: "",
        loggedOut: true,
      });
    }
  };

  return { refreshToken, isLoading };
};

export default useRefreshToken;
