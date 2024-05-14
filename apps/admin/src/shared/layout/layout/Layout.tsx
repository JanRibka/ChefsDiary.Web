import { Outlet } from "react-router-dom";

import NavBar from "../../styledComponents/navBar/NavBar";
import { layoutVariants } from "./layoutVariants";
import SideBar from "./sideBar/SideBar";

const Layout = () => {
  return (
    <div className={layoutVariants()}>
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
