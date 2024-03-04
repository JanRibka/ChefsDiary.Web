import Footer from "../../styledComponents/footer/Footer";
import NavBar from "../../styledComponents/navBar/NavBar";
import LayoutLoginMain from "./main/LayoutLoginMain";

const LayoutLogin = () => {
  return (
    <div>
      <NavBar />

      <LayoutLoginMain />

      <Footer />
    </div>
  );
};

export default LayoutLogin;
