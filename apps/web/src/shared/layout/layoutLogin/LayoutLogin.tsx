import Footer from "../../styledComponents/footer/Footer";
import NavBar from "../../styledComponents/navBar/NavBar";
import LayoutLoginContent from "./content/LayoutLoginContent";
import LayoutLoginInfo from "./info/LayoutLoginInfo";

// TODO: Barva na pozadí by mohla jít do ztracena jako na světě usměvů
const LayoutLogin = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="container">
          <div className="flex flex-col min-h-full gap-0 lg:flex-row py-4 md:py-5">
            <LayoutLoginInfo />
            <LayoutLoginContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LayoutLogin;
