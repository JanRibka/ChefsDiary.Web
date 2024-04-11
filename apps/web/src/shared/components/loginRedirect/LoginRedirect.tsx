import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoutes } from "../../../app/routes/appRoutes";
import { useAuthSlice } from "../../../app/store/auth/useAuthSlice";
import { store } from "../../../app/store/store";

interface IProps {
  children: React.ReactNode;
}

const LoginRedirect = (props: IProps) => {
  // Store
  const _store = store.getState();

  // Constants
  const navigate = useNavigate();
  const location = useLocation();
  const { update } = useAuthSlice();

  // Redirect
  useEffect(() => {
    redirect();
  }, [_store.auth.loggedOut]);

  const redirect = () => {
    if (_store.auth.loggedOut && location.pathname !== AppRoutes.Login) {
      update({ loggedOut: false });
      navigate(AppRoutes.Login, { state: { from: location }, replace: true });
    }
  };

  return <>{props.children}</>;
};

export default LoginRedirect;
