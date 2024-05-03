import { Route, Routes } from "react-router-dom";

import LoginPage from "../../pages/LoginPage";
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

      {/* <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.Unauthorized} element={<>Neautorizovan</>} />
        <Route path={AppRoutes.NotFound} element={<>NotFound</>} />
      </Route> */}

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
