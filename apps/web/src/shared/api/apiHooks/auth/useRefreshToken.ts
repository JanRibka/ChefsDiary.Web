import { useLocation, useNavigate } from "react-router-dom";

import { ResponseType } from "@repo/shared/types";

import { AppRoutes } from "../../../../app/routes/appRoutes";
import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import Login from "../../../../entities/auth/Login";
import { useRefreshTokenMutation } from "../../auth/authApi";

const useRefreshToken = () => {
  // Api
  const [refreshTokenMutation, response] = useRefreshTokenMutation();

  // Constants
  const isLoading = response.isLoading;
  const { update } = useAuthSlice();
  const navigate = useNavigate();
  const location = useLocation();

  // Other
  const refreshToken = async () => {
    const refreshTokenResponse: ResponseType<Login> =
      await refreshTokenMutation();
    const error = refreshTokenResponse?.error;
    const data = refreshTokenResponse?.data;

    if (error || !data) {
      navigate(AppRoutes.Login, { state: { from: location }, replace: true });
    } else {
      update({
        uuid: data.uuid,
        login: data.login,
        userRoles: data.userRoles,
        accessToken: data.accessToken,
      });
    }
  };

  return { refreshToken, isLoading };
};

export default useRefreshToken;
