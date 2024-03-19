import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { UserRoleEnum } from "@repo/shared/enums";

import { AppRoutes } from "../../../app/routes/appRoutes";
import { selectAuth } from "../../../app/store/auth/authSlice";

interface Props {
  allowedRoles?: UserRoleEnum[];
}

const RequireAuth = (props: Props) => {
  // Store
  const auth = useSelector(selectAuth);

  // Constants
  const location = useLocation();

  return auth.userRoles.find((role) => props.allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth.userRoles ? (
    <Navigate to={AppRoutes.Unauthorized} state={{ from: location }} replace />
  ) : (
    <Navigate
      to={AppRoutes.Login}
      state={{ from: location.pathname }}
      replace
    />
  );
};

export default RequireAuth;
