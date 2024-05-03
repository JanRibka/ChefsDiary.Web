import { ResponseType } from "@repo/shared/types";

import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import { useLogoutMutation } from "../../auth/authApi";

const useLogout = () => {
  // Api
  const [logout, response] = useLogoutMutation();

  // Store
  const { reset } = useAuthSlice();

  // Constants
  const isLoading = response.isLoading;

  const logoutUser = async () => {
    const logoutResponse: ResponseType<void> = await logout();
    const error = logoutResponse?.error;

    if (!error) {
      reset();
    }
  };

  return { logoutUser, isLoading };
};

export default useLogout;
