import { Outlet } from "react-router-dom";

import NavBar from "../../styledComponents/navBar/NavBar";
import SideBar from "./sideBar/SideBar";

const Layout = () => {
  return (
    <div className="h-full">
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
