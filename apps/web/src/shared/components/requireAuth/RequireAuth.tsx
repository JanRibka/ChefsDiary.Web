import { jwtDecode } from "jwt-decode";
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

  // Constants
  const location = useLocation();
  const decodedToken = auth.accessToken
    ? jwtDecode(auth.accessToken)
    : undefined;

  // TODO: Pokud existuje cookie, tak se smze store a presmerovani na login
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roles: UserRoleEnum[] = (decodedToken as any)?.userInfo?.roles ?? [];

  // Other
  return roles.find((role) => props.allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth.accessToken ? (
    <Navigate to={AppRoutes.Unauthorized} state={{ from: location }} replace />
  ) : (
    <Navigate to={AppRoutes.Login} state={{ from: location }} replace />
  );
};

export default RequireAuth;
