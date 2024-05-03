import { Outlet } from "react-router-dom";

import Footer from "../../styledComponents/footer/Footer";
import NavBar from "../../styledComponents/navBar/NavBar";

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
