import { Route, Routes } from "react-router-dom";

import Home from "../../features/home/Home";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import { AppRoutes } from "./appRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path={AppRoutes.Home} element={<Home />} />
      <Route>
        <Route path={AppRoutes.Register} element={<RegisterPage />} />
        <Route path={AppRoutes.Login} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
