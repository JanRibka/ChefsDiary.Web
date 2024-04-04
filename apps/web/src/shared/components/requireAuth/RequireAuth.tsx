import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { UserRoleEnum } from "@repo/shared/enums";

import { AppRoutes } from "../../../app/routes/appRoutes";
import { selectAuth } from "../../../app/store/auth/authSlice";

interface Props {
  allowedRoles?: UserRoleEnum[];
}
// TODO: V Unauthorozed page bude goBack = navigate(-1) a by se to vr8tilo na p8edchoz8i str8nku
const RequireAuth = (props: Props) => {
  // Store
  const auth = useSelector(selectAuth);
  console.log(props);
  // Constants
  const location = useLocation();

  return auth.userRoles.find((role) => props.allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth.login ? (
    <Navigate to={AppRoutes.Unauthorized} state={{ from: location }} replace />
  ) : (
    <Navigate to={AppRoutes.Login} state={{ from: location }} replace />
  );
};

export default RequireAuth;
