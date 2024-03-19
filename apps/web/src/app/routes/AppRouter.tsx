import { Route, Routes } from "react-router-dom";

import Home from "../../features/home/Home";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
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
        <Route path={AppRoutes.Substitutes} element={<Home />} />
        <Route path={AppRoutes.NotFound} element={<>NotFound</>} />
      </Route>

      {/* Protected routes */}
      <Route element={<></>}>
        <Route />
      </Route>
    </Routes>
  );
};

export default AppRouter;
