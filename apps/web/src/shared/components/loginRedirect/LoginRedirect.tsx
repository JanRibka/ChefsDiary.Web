import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoutes } from "../../../app/routes/appRoutes";
import { selectAuth } from "../../../app/store/auth/authSlice";
import { useAuthSlice } from "../../../app/store/auth/useAuthSlice";

const LoginRedirect = () => {
  // Store
  const auth = useSelector(selectAuth);

  // Constants
  const navigate = useNavigate();
  const location = useLocation();
  const { update } = useAuthSlice();

  // Redirect
  useEffect(() => {
    redirect();
  }, [auth.loggedOut]);

  const redirect = () => {
    if (auth.loggedOut) {
      update({ loggedOut: false });
      navigate(AppRoutes.Login, { state: { from: location }, replace: true });
    }
  };

  return undefined;
};

export default LoginRedirect;
