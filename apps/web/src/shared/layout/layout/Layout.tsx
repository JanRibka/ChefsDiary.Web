import { Outlet } from "react-router-dom";

import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
