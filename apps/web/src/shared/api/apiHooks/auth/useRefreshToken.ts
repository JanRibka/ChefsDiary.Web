// import { useLocation, useNavigate } from "react-router-dom";

import { useLocalStorage } from "@repo/shared/hooks";
import { ResponseType } from "@repo/shared/types";

// import { AppRoutes } from "../../../../app/routes/appRoutes";
import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import Login from "../../../../entities/auth/Login";
import { useRefreshTokenMutation } from "../../auth/authApi";

const useRefreshToken = () => {
  // Api
  const [refreshTokenMutation, response] = useRefreshTokenMutation();

  // Constants
  const isLoading = response.isLoading;
  const { update } = useAuthSlice();
  // const navigate = useNavigate();
  // const location = useLocation();
  const [persist] = useLocalStorage("persist", false);

  // Other
  const refreshToken = async () => {
    const refreshTokenResponse: ResponseType<Login> =
      await refreshTokenMutation({ persistLogin: persist });
    const error = refreshTokenResponse?.error;
    const data = refreshTokenResponse?.data;

    if (error || !data) {
      update({
        loggedOut: true,
      });
      // navigate(AppRoutes.Login, { state: { from: location }, replace: true });
    } else {
      update({
        login: data.login,
        accessToken: data.accessToken,
      });
    }
  };

  return { refreshToken, isLoading };
};

export default useRefreshToken;
