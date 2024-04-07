import { Route, Routes } from "react-router-dom";

import { UserRoleEnum } from "@repo/shared/enums";

import Home from "../../features/home/Home";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import PersistLogin from "../../shared/components/persistLogin/PersistLogin";
import RequireAuth from "../../shared/components/requireAuth/RequireAuth";
import Layout from "../../shared/layout/layout/Layout";
import LayoutLogin from "../../shared/layout/layoutLogin/LayoutLogin";
import { AppRoutes } from "./appRoutes";

//TODO: Pou6it replace na login. Podle videa z youtube
const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<LayoutLogin />}>
        <Route path={AppRoutes.Register} element={<RegisterPage />} />
        <Route path={AppRoutes.Login} element={<LoginPage />} />
      </Route>

      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.Recipes} element={<Home />} />
        <Route path={AppRoutes.TipsAndTricks} element={<Home />} />
        <Route path={AppRoutes.Wordbook} element={<Home />} />
        <Route path={AppRoutes.Unauthorized} element={<>Neautorizovan</>} />
        <Route path={AppRoutes.NotFound} element={<>NotFound</>} />
      </Route>

      {/* Protected routes */}
      <Route element={<PersistLogin />}>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route element={<RequireAuth allowedRoles={[UserRoleEnum.EDITOR]} />}>
            <Route path={AppRoutes.Substitutes} element={<Home />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
