import Footer from "../../styledComponents/footer/Footer";
import NavBar from "../../styledComponents/navBar/NavBar";
import LayoutLoginInfo from "./info/LayoutLoginInfo";
import LayoutLoginMain from "./main/LayoutLoginMain";

const LayoutLogin = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="container">
          <div className="flex flex-col min-h-full gap-0 lg:flex-row py-4 md:py-5">
            <LayoutLoginInfo />
            <LayoutLoginMain />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LayoutLogin;
