import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { useLocalStorage } from "@repo/shared/hooks";

import { selectAuth } from "../../../app/store/auth/authSlice";
import useRefreshToken from "../../api/apiHooks/auth/useRefreshToken";

const PersistLogin = () => {
  // State
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [persist] = useLocalStorage<boolean>("persist", false);

  // Constants
  const { refreshToken } = useRefreshToken();
  const auth = useSelector(selectAuth);

  // Other
  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return !persist ? <Outlet /> : isLoading ? <div>Loading</div> : <Outlet />;
};

export default PersistLogin;
