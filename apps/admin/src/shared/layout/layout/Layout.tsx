import { Outlet } from "react-router-dom";

import NavBar from "../../styledComponents/navBar/NavBar";

const Layout = () => {
  return (
    <div className="h-full">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
