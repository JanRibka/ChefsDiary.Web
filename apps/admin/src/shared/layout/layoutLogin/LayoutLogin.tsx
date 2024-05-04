import LayoutLoginContent from "./content/LayoutLoginContent";
import LayoutLoginInfo from "./info/LayoutLoginInfo";

// TODO: Barva na pozadí by mohla jít do ztracena jako na světě usměvů
const LayoutLogin = () => {
  return (
    <div className="h-full">
      <main className="h-full flex items-center">
        <div className="container h-full max-h-[65rem] flex">
          <div className="flex flex-col min-h-full gap-0 lg:flex-row sm:py-4 md:py-5 w-full">
            <LayoutLoginInfo />
            <LayoutLoginContent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutLogin;
