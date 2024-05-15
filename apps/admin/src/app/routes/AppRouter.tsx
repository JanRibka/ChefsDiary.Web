import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/home/HomePage";
import LoginPage from "../../pages/LoginPage";
import UsersPage from "../../pages/user/UsersPage";
import Layout from "../../shared/layout/layout/Layout";
import LayoutLogin from "../../shared/layout/layoutLogin/LayoutLogin";
import { AppRoutes } from "./appRoutes";

//TODO: Pou6it replace na login. Podle videa z youtube
const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<LayoutLogin />}>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
      </Route>

      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.Users} element={<UsersPage />} />
        {/* <Route path={AppRoutes.Unauthorized} element={<>Neautorizovan</>} />
        <Route path={AppRoutes.NotFound} element={<>NotFound</>} /> */}
      </Route>

      {/* Protected routes */}
      {/* <Route element={<PersistLogin />}>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route
            element={<RequireAuth allowedRoles={[UserRoleEnum.EDITOR]} />}
          ></Route>
        </Route>
      </Route> */}
    </Routes>
  );
};

export default AppRouter;
