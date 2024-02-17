import { Route, Routes } from "react-router-dom";

import Home from "../../features/home/Home";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import Layout from "../../shared/layout/layout/Layout";
import { AppRoutes } from "./appRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route>
        <Route path={AppRoutes.Register} element={<RegisterPage />} />
        <Route path={AppRoutes.Login} element={<LoginPage />} />
      </Route>

      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route path={AppRoutes.Home} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
