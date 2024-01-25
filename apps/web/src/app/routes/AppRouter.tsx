import { Route, Routes } from "react-router-dom";
import Home from "src/features/home/Home";
import LoginPage from "src/pages/LoginPage";
import RegisterPage from "src/pages/RegisterPage";
import ErrorBoundary from "src/shared/components/errorBoundary/ErrorBoundary";

import { AppRoutes } from "./appRoutes";

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Public routes */}
        <Route path={AppRoutes.Home} element={<Home />} />
        <Route>
          <Route path={AppRoutes.Register} element={<RegisterPage />} />
          <Route path={AppRoutes.Login} element={<LoginPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRouter;
